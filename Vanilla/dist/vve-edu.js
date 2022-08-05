!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).VideoExpressPlus={})}(this,(function(t){"use strict";!function(t,n){void 0===n&&(n={});var e=n.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===e&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}('.container {\n  display: flex;\n  flex-direction: row;\n}\n\n\n.call-control {\n    position: absolute;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 90px;\n    background-color: #000;\n    padding: 0 30px;\n  }\n  \n  \n  /* Assuming the name of the Room\'s container is roomContainer */\n  [id$="-roomcontainer"] {\n    width: calc(100vw - 480px);\n    /* width: 200px; */\n    height: calc(100vh - 150px);\n    background-color: #111;\n    /* position: absolute; */\n    top: 60px;\n    left: 0;\n    bottom: 90px;\n    display: none;\n  }\n  \n  .iframe-container {\n    display: none;\n    position: absolute;\n    height: calc(100vh - 150px);\n    top: 60px;\n    left: 200px;\n    right: 16px;\n    bottom: 90px;\n    background-color: white;\n    z-index:9999;\n  }\n  \n  #control {\n    /* display: none; */\n  }\n  \n  iframe {\n    width: 100%;\n    height: 100%;\n  }\n  \n  .room > .OT_publisher {\n    top: 25px;\n    right: 25px;\n    position: absolute;\n    border-radius: 10px;\n  }\n  .room > .OT_screenshare {\n    top: 25px;\n    left: 25px;\n    position: absolute;\n    border-radius: 10px;\n  }\n  \n  [id$="-control"] > div {\n    position: absolute;\n    top: 60px;\n    right: 0px;\n    width: 450px;\n    height: calc(100vh - 150px);\n    border: 1px solid black;\n    padding-left: 16px;\n    padding-right: 16px;\n    border-radius: 16px;\n    background-color: #fff;\n  }\n  \n  #addons {\n    display: block;\n  }\n  \n  #breakout {\n    display: none;\n  }\n  \n  #poll {\n    display: none;\n  }\n  \n  #question {\n    display: none;\n  }\n  \n  #addons .header {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 16px;\n  }\n  \n  #addons .item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 16px;\n    border-radius: 8px;\n    border: 1px solid #eee;\n    margin-bottom: 8px;\n  }\n  \n  #addons .icon {\n    padding: 8px;\n    background-color: rgb(245, 240, 253);\n    margin-right: 8px;\n    border-radius: 4px;\n  }\n  \n  #addons .item:hover {\n    background-color: #eee;\n    cursor: pointer;\n  }\n  \n  #addons .text {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    padding: 0 20px;\n  }\n  \n  #addons .title {\n    font-size: 16px;\n    font-weight: bold;\n    color: #000;\n    margin-bottom: 8px;\n  }\n  \n  #addons .sub-title {\n    font-size: 12px;\n    font-weight: 100;\n    color: #444;\n  }\n  \n  /* vve-mic-button::part(button){\n    color: white;\n  }\n  \n  vve-video-button::part(button){\n    color: white;\n  } */\n  \n  vve-activities,\n  vve-text-chat,\n  vve-participants {\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    height: 100%;\n    font-family: Roboto;\n    overflow-y: auto;\n  }\n  \n  vve-activities::part(title),\n  vve-text-chat::part(title),\n  vve-participants::part(title) {\n    font-size: 1.17em;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n    font-weight: bold;\n  }\n  \n  vve-activities::part(header),\n  vve-text-chat::part(header),\n  vve-participants::part(header) {\n    padding: 16px;\n  }\n  \n  vve-participants::part(subheader) {\n    padding: 16px 16px 0 16px;\n  }\n  \n  vve-activities::part(name) {\n    font-size: 16px;\n    font-weight: bold;\n    color: #000;\n  }\n  \n  vve-activities::part(activity) {\n    font-size: 12px;\n    font-weight: 100;\n    color: #444;\n  }\n  \n  #activities,\n  #lower-hand-button,\n  #screenshare-stop-button,\n  #chat,\n  #participants {\n    display: none;\n  }\n  \n  vve-activities::part(list) {\n    height: calc(100% - 100px);\n  }\n  \n  vve-text-chat::part(messages-container) {\n    height: calc(100% - 170px);\n  }\n  \n  vve-text-chat::part(messages-feed) {\n    height: 100%;\n  }\n  \n  vve-text-chat::part(time) {\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 14px;\n  }\n  \n  vve-text-chat::part(message-text) {\n    color: black;\n    font-size: 20px;\n  }\n  \n  vve-closed-captions::part(username),\n  vve-closed-captions::part(time),\n  vve-closed-captions::part(message-text) {\n    color: white;\n  }\n  .hand-raise {\n    top: 12px;\n    left: 12px;\n    right: auto;\n    bottom: auto;\n    display: flex;\n    position: absolute;\n    color: white;\n    background-color: black;\n    padding: 5px !important;\n    border-radius: 5px !important;\n  }\n  \n  #lower-hand-button {\n    display: none;\n  }\n  \n  .invert-icon {\n    filter: invert(1);\n  }\n  \n  #main {\n    position: relative;\n  }\n  \n  #closed-captions-container {\n    display: none;\n    color: white;\n    position: absolute;\n    z-index: 20;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.75);\n    width: 100%;\n    height: 300px;\n  }\n  \n  #cc-on-button {\n    display: none;\n  }\n  \n  #waiting-banner {\n    background: #7a7a7a;\n    height: 100px;\n    padding: 20px;\n    font-size: 32px;\n    border-radius: 8px;\n    margin: 0px 493px 0px 10px;\n    text-align: center;\n    display: none;\n  }\n  ');const n=async(t,n)=>{try{return(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"getRoomData",roomId:t})})).json()}catch(t){console.log(t)}},e=t=>{const n=document.createElement("div");return n.setAttribute("id",t),n};t.RoomController=class{logLabel="VideoExpressPlusClient:RoomController";constructor(t){this.participantId=t.participantId,this.callbackUrl=t.callbackUrl,this.managedLayoutOptions=t.managedLayoutOptions,this.containerElement=document.getElementById(t.container),this.prefix="vveplus",this.publisherProperties={height:"100%",width:"100%",audioSource:localStorage.getItem("audioSourceId"),videoSource:localStorage.getItem("videoSourceId")},localStorage.getItem(!1)&&(this.publisherProperties.videoFilter={type:"backgroundBlur"})}async getBaseConfig(){return await(async t=>{try{return(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"getConfig"})})).json()}catch(t){console.log(t)}})(this.callbackUrl)}async getWhiteBoardParticipantCredentials(){return await(async t=>{try{return(await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"whiteBoardJoin"})})).json()}catch(t){console.log(t)}})(this.callbackUrl)}async getWhiteBoardAdminCredentials(t,n){return await(async(t,n,e)=>{try{return(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"whiteBoardCreate",boardName:t,isLocked:n})})).json()}catch(t){console.log(t)}})(t,n,this.callbackUrl)}async allowParticipant(t){console.log("Allow Participant Called",t);const n=this;try{const e=await fetch("/api/vve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"updateWaitingState",name:t,state:{state:!0}})}),o=await e.json();return n.participants=n.participants.filter((n=>n.name!==t)),o}catch(t){console.log(t)}}async showWhiteBoardToNonHosts(){}async dismissParticipant(t){console.log("Dismiss Participant Called",t)}goBack(){this.hideAll(),this.showAddons()}async updateParticipantId(t,n){try{return await fetch("/api/vve/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"updateParticipantId",name:n,participantId:t})})}catch(t){console.log(t)}}async joinBreakOutRoom(t,n){try{return await fetch("/api/vve/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"joinBreakOutRoom",name:n,breakoutRoomId:t})})}catch(t){console.log(t)}}async leaveRoom(){await this.room.leave(),window.location.href="/"}joinRoom(t,n,e){console.log("Join Room Called"),this.joinBreakOutRoom(n,e).then((t=>console.log(t)))}async createRoom(t="vveplus"){let n;try{const t=await fetch("/api/vve",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"createBreakoutRoom"})});n=await t.json()}catch(t){return void console.log(t)}const e=window.crypto.getRandomValues(new Uint32Array(1))[0],o=document.getElementById("main"),i=document.createElement("div"),a=`${t}-roomcontainer-${e.toString(16)}`;return i.setAttribute("id",a),o?.appendChild(i),new VideoExpress.Room({sessionId:n?.break.sessionId,apiKey:n?.break.applicationId,token:n?.break.token,roomContainer:a})}async joinMainRoom(t){console.log("parent asked to join ",t);const n={main:t};this.room=new VideoExpress.Room({sessionId:n.main.sessionId,apiKey:n.main.applicationId,token:n.main.token,participantName:this.name,roomContainer:`${this.prefix}-roomcontainer`});const{camera:e,screen:o}=this.room;this.room.join({publisherProperties:this.publisherProperties}),this.room.on("connected",(()=>{console.log("room connected"),console.log("audio enabled: ",e.isAudioEnabled()),console.log("video enabled: ",e.isVideoEnabled()),this.breakout&&(this.breakout.room=this.room);const t=document.getElementById(this.room.roomContainer);null!=t&&(t.style.display="block")})),this.room.on("signal:remove",(async t=>{console.log("signal:remove: ",t),t.isSentByMe||await this.leaveRoom()})),this.room.on("signal:raise_hand",(t=>{console.log("signal:raise_hand: ",t);const n=this.handRaiseTemplate.content.firstElementChild.cloneNode(!0);let o,i;t.isSentByMe?(console.log("camera id: ",e),i="#MP_camera_publisher_default_controls-hand",o=document.querySelector("#MP_camera_publisher_default_controls")):(console.log("camera id: ",t.from.camera.id),i=`${t.from.camera.id}-hand`,o=document.querySelector(`#MP_${t.from.camera.id}_default_controls`)),console.log("selected feed: ",o),n.id=i,null!=o&&o.appendChild(n)})),this.room.on("signal:lower_hand",(t=>{let n;console.log("signal:lower_hand: ",t),t.isSentByMe?(console.log("camera id: ",e),n="#MP_camera_publisher_default_controls-hand"):(console.log("camera id: ",t.from.camera.id),n=`${t.from.camera.id}-hand`),void 0!==document.getElementById(n)&&document.getElementById(n)?.remove()})),this.room.on("signal:lower_hand_teacher",(t=>{let n;console.log("signal:lower_hand_teacher: ",t),t.isSentByMe||(console.log("camera id: ",t.from.camera.id),n="#MP_camera_publisher_default_controls-hand",void 0!==document.getElementById(n)&&document.getElementById(n)?.remove())}))}addWebComponent(t,n){const e=document.createElement("div");e.setAttribute("id",t);const o=document.createElement(`vve-${t}`);e.append(o),n.append(e)}addWaitingRoomBanner(){const t=e("waiting-banner");document.body.appendChild(t)}toggleWaitingRoomBanner(){const t=document.getElementById("waiting-banner");null!=t&&("block"===t.style.display?t.style.display="none":(t.style.display="block",t.textContent="Please wait while host allow you to the meeting"))}addWhiteBoardIframe(){this.containerElement.insertAdjacentHTML("beforebegin",'<div class="iframe-container"><vwc-button appearance="filled" connotation="accent" id="go-back-whiteboard" icon="arrow-left-line" aria-label="Go Back"></vwc-button><iframe id="whiteboard-iframe"></iframe></div>')}toggleWhiteboardIframe(){const t=this.whiteBoardContainer;let n=!1;void 0!==t&&("block"===t.style.display?(t.style.display="none",n=!1):(t.style.display="block",n=!0),"host"===this.role&&this.parentSession.signal({data:{showWhiteBoard:n},type:"whiteboard"}))}loadSkeleton(t="vveplus"){this.containerElement.insertAdjacentHTML("afterbegin",`<div id="main"><div id="${t}-roomcontainer" class="room"></div></div><div id="${t}-control"></div>`)}loadWebComponents(t="vveplus",n){this.roomContainer=document.getElementById(`${t}-roomcontainer`),this.controlContainer=document.getElementById(`${t}-control`),this.controlContainer.insertAdjacentHTML("afterbegin",'<h3>Go Back</h3><vwc-icon-button id="close-addons" icon="close"></vwc-icon-button>'),n.breakoutRoom&&(this.addWebComponent("breakout",this.controlContainer),this.breakout=document.querySelector("vve-breakout")),n.waitingRoom&&(this.addWebComponent("waiting",this.controlContainer),this.addWaitingRoomBanner(),this.waiting=document.querySelector("vve-waiting")),n.whiteBoard&&this.addWhiteBoardIframe(),this.addWebComponent("text-chat",this.controlContainer),this.handRaiseTemplate=document.querySelector("#hand-raise-template")}addMenuItem(t,n,e,o){const i=document.createElement("div");return i.setAttribute("id",`addon-${e}`),i.setAttribute("class","item"),i.insertAdjacentHTML("afterbegin",`<vwc-icon  type="${o}"></vwc-icon>\n    <div class="text">\n      <span class="title">${t}</span>\n      <span class="sub-title">${n}</span>\n    </div>`),i}loadAddonsMenu(t){const n=e("addons"),o=(t=>{const n=document.createElement("div");return n.setAttribute("class","header"),n})();if(o.insertAdjacentHTML("afterbegin",'<h3>Add ons</h3><vwc-icon-button id="close-addons" icon="close"></vwc-icon-button>'),n.appendChild(o),t.breakoutRoom){const t=this.addMenuItem("Create Breakout","Get a quick pulse of the audience","breakout","apps-line");n.appendChild(t)}if(t.waitingRoom){const t=this.addMenuItem("Waiting Room","See Who is waiting","waiting","group-permission-2-solid");n.appendChild(t)}if(t.whiteBoard){const t=this.addMenuItem("Whiteboard","Brainstorm and Sketch Ideas","whiteboard","video-whiteboard-line");n.appendChild(t)}this.controlContainer?.appendChild(n)}hideAll(){this.breakoutContainer&&(this.breakoutContainer.style.display="none"),this.waitingContainer&&(this.waitingContainer.style.display="none"),this.addonsContainer&&(this.addonsContainer.style.display="none"),this.chatContainer&&(this.chatContainer.style.display="none")}showBreakout(){this.breakoutContainer.style.display="block"}showWaiting(){this.waitingContainer.style.display="block"}showAddons(){this.addonsContainer.style.display="block"}hideWhiteBoard=()=>{this.roomContainer.style.width="calc(100vw - 480px)",this.whiteBoardContainer.style.display="none",this.addonsContainer.style.display="block"};async showWhiteBoard(t){if(this.whiteBoardIframe=document.getElementById("whiteboard-iframe"),"host"!==this.role){const t=await this.getWhiteBoardParticipantCredentials(),n=t.participantsTokens[0],e=`https://whiteboard.vonage.com/embed/${t.sessionId}?display_name=${this.name}&token=${n}`;this.whiteBoardIframe.src=e,this.hideAll(),this.roomContainer.style.width="200px",this.toggleWhiteboardIframe()}else{const n=await this.getWhiteBoardAdminCredentials(this.name,!0===t?.whiteboardOpts?.isLocked);console.log(n);const e=`https://whiteboard.vonage.com/embed/${n.sessionId}?display_name=${this.name}&token=${n.ownerToken}`;this.whiteBoardIframe.src=e,this.hideAll(),this.roomContainer.style.width="200px",this.toggleWhiteboardIframe()}}openBreakoutRoom(){this.createRoom()}attachEvents(t){if(this.addonsContainer=document.getElementById("addons"),this.chatContainer=document.getElementById("text-chat"),t.breakoutRoom&&(this.addonsBreakoutButton=document.getElementById("addon-breakout"),this.breakoutContainer=document.getElementById("breakout"),this.breakoutMsg=document.getElementById("breakout-msg"),this.breakoutButton=document.getElementById("breakout-button"),this.addonsBreakoutButton.addEventListener("click",(()=>{"host"===this.role&&(this.hideAll(),this.showBreakout())}))),t.waitingRoom&&(this.addonsWaitingButton=document.getElementById("addon-waiting"),this.waitingContainer=document.getElementById("waiting"),this.addonsWaitingButton.addEventListener("click",(()=>{"host"===this.role&&(this.hideAll(),this.showWaiting())}))),t.whiteBoard){this.addonsWhiteBoardButton=document.getElementById("addon-whiteboard"),this.whiteBoardIframe=document.getElementById("whiteboard-iframe");const n=document.getElementById("go-back-whiteboard");null!=n&&n.addEventListener("click",(()=>{this.hideAll(),this.hideWhiteBoard(),this.showAddons()})),this.addonsWhiteBoardButton.addEventListener("click",(()=>{this.hideAll(),this.showWhiteBoard(t)}))}}async attachSessionEvents(t){if(this.parentSession.on("signal:waiting-participant",(n=>{if(console.log("Waiting request recieved",n.data),"host"===this.role&&t.waitingRoom){const t=n.data;t.roomId="main",this.waiting.participants=this.waiting.participants||[],this.waiting.participants=[...this.waiting.participants,t]}})),this.parentSession.on("connectionDestroyed",(t=>{this.waiting.participants=this.waiting.participants.filter((n=>n.id!==t.connection.connectionId))})),t.waitingRoom&&this.parentSession.on("signal:allow-participant",(async t=>{console.log("Waiting request Approved",t.data),this.toggleWaitingRoomBanner(),"host"!==this.role&&this.joinMainRoom(JSON.parse(t.data).main)})),t.whiteBoard&&this.parentSession.on("signal:whiteboard",(async t=>{console.log("WhiteBoard request Recieved",t.data),"host"!==this.role&&this.showWhiteBoard()})),this.parentSession.on("signal:command",(async t=>{const n=JSON.parse(t.data);await this.room.leave();const e=document.getElementById(`${this.prefix}-roomcontainer`);null!=e&&(e.innerHTML=""),this.brkroom=new VideoExpress.Room({sessionId:n.break.sessionId,apiKey:n.break.applicationId,token:n.break.token,participantName:this.name,roomContainer:`${this.prefix}-roomcontainer`}),this.brkroom.join({publisherProperties:this.publisherProperties})})),this.parentSession.on("signal:close-all",(async t=>{console.log("Joining Main Room",t.data),this.brkroom&&await this.brkroom.leave();const e=document.getElementById(`${this.prefix}-roomcontainer`);null!=e&&(e.innerHTML="");const o=await n(t.data,this.callbackUrl);this.room=new VideoExpress.Room({sessionId:o.main.sessionId,apiKey:o.main.applicationId,token:o.main.token,participantName:this.name,roomContainer:`${this.prefix}-roomcontainer`}),this.room.join({publisherProperties:this.publisherProperties})})),this.parentSession.on("signal:text_chat",(t=>{console.log(`Parent Signal sent from connection ${t.from.id}`),console.log("payload",t.data)})),"host"!==this.role&&t.waitingRoom)this.toggleWaitingRoomBanner();else{this.room=new VideoExpress.Room({sessionId:this.roomData.main.sessionId,apiKey:this.roomData.main.applicationId,token:this.roomData.main.token,participantName:this.name,roomContainer:`${this.prefix}-roomcontainer`});const{camera:t,screen:n}=this.room;this.room.join({publisherProperties:this.publisherProperties}),this.room.on("connected",(()=>{console.log("room connected"),console.log("audio enabled: ",t.isAudioEnabled()),console.log("video enabled: ",t.isVideoEnabled()),this.breakout&&(this.breakout.room=this.room);const n=document.getElementById(this.room.roomContainer);null!=n&&(n.style.display="block")})),this.room.on("signal:remove",(async t=>{console.log("signal:remove: ",t),t.isSentByMe||await this.leaveRoom()}))}}async initSession(t,e){this.roomData=await n(t,this.callbackUrl),this.parentSession=OT.initSession(this.roomData.parent.applicationId,this.roomData.parent.sessionId),this.parentSession.on("sessionConnected",(async t=>{await this.updateParticipantId(t.target.connection.connectionId,this.name),"host"!==this.role&&e.waitingRoom&&(console.log("Waiting request Sent"),this.parentSession.signal({data:{id:t.target.connection.connectionId,name:this.name},type:"waiting-participant"}))})),this.parentSession.connect(this.roomData.parent.token,(t=>{t?console.log(t.message):(console.log("Parent Session Connected!"),e.breakoutRoom&&(this.breakout.parent=this.parentSession,this.breakout.role=this.role,this.breakout.createRoom=this.createRoom,this.breakout.joinRoom=this.joinRoom.bind(this),this.breakout.goBack=this.goBack.bind(this)),e.waitingRoom&&(this.waiting.parent=this.parentSession,this.waiting.allowParticipant=this.allowParticipant,this.waiting.dismissParticipant=this.dismissParticipant,this.waiting.goBack=this.goBack.bind(this)),this.attachSessionEvents(e))}))}async init(){console.group(this.logLabel),console.log("retrieving server config now..",this.callbackUrl);const t=window.location.pathname.split("/")[2],n=new URLSearchParams(window.location.search);this.name=n.get("name"),this.role=n.get("role");const e=await this.getBaseConfig();this.loadSkeleton(this.prefix),this.loadWebComponents(this.prefix,e),this.whiteBoardContainer=document.querySelector(".iframe-container"),"host"===this.role&&(this.loadAddonsMenu(e),this.attachEvents(e)),this.initSession(t,e),console.log("%c Initialization Complete!","color: #bada55"),console.groupEnd()}onError(){}setProxyUrl(t){this.proxyUrl=t}},Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
//# sourceMappingURL=vve-edu.js.map