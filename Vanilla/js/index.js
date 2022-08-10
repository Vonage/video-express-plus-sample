/* global OT */

import { getDevices, PreviewPublisher } from '@vonage/video-express';
import 'regenerator-runtime/runtime';

const loginInstructorButton = document.getElementById('join-room-button');

const name = document.getElementById('name');

let previewPublisher;
let publisherProperties;

const audioSelector = document.getElementById('audio-source');
const videoSelector = document.getElementById('video-source');

const backgroundBlurCheckbox = document.getElementById(
  'background-blur-checkbox',
);
const backgroundBlurContainer = document.getElementById(
  'background-blur-container',
);

const modifyVideo = async () => {
  localStorage.setItem('audioSourceId', audioSelector.value);
  localStorage.setItem('videoSourceId', videoSelector.value);
  localStorage.setItem('backgroundBlur', backgroundBlurCheckbox.checked);

  if (previewPublisher) {
    previewPublisher.destroy();
  }

  previewPublisher = new PreviewPublisher('preview');
  publisherProperties = {
    height: '100%',
    width: '100%',
    audioSource: audioSelector.value,
    videoSource: videoSelector.value,
  };

  if (backgroundBlurCheckbox.checked) {
    publisherProperties.videoFilter = { type: 'backgroundBlur' };
  }

  return previewPublisher.previewMedia({
    targetElement: 'preview',
    publisherProperties,
  });
};

const joinCall = async (role) => {
  const nameValue = name.value;
  try {
    const response = await fetch('/api/get-participant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameValue,
        role,
      }),
    });
    const data = response.json();
    const { participantId } = await data;
    window.location.href = `/join/room?participantId=${participantId}`;
  } catch (err) {
    console.log(err);
  }
};

const init = async () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log('enumerateDevices() not supported.');
    return;
  }

  if (OT.hasMediaProcessorSupport()) {
    backgroundBlurContainer.style.display = 'block';
  }

  try {
    // Need to ask permission in order to get access to the devices
    // to be able to list them in the dropdowns.

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    stream.getTracks().forEach((track) => track.stop());
    let audioCount = 0;
    let videoCount = 0;
    const devices = await getDevices();
    devices.forEach((device) => {
      if (device.kind.toLowerCase() === 'audioinput') {
        audioCount += 1;
        audioSelector.innerHTML += `<option value="${device.deviceId}">${
          device.label || device.kind + audioCount
        }</option>`;
      }
      if (device.kind.toLowerCase() === 'videoinput') {
        videoCount += 1;
        videoSelector.innerHTML += `<option value="${device.deviceId}">${
          device.label || device.kind + videoCount
        }</option>`;
      }
    });
  } catch (error) {
    console.error('error loading AV sources: ', error);
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await init();
  await modifyVideo();
  name.disabled = false;
});

audioSelector.addEventListener('change', modifyVideo);
videoSelector.addEventListener('change', modifyVideo);
backgroundBlurCheckbox.addEventListener('change', modifyVideo);

loginInstructorButton.addEventListener('click', async () => {
  if (document.getElementById('is-host-checkbox').checked) {
    await joinCall('host');
  } else {
    await joinCall('participant');
  }
});

const setLoginButtonState = (e) => {
  if (e.target.value !== '') {
    loginInstructorButton.removeAttribute('disabled');
  } else {
    loginInstructorButton.setAttribute('disabled', 'true');
  }
};

name.addEventListener('keyup', (e) => {
  setLoginButtonState(e);
  if (e.keyCode === 13) {
    // Enter key
    loginInstructorButton.click();
  }
});
name.addEventListener('change', setLoginButtonState);
