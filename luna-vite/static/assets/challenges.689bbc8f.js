import{m as r}from"./module.esm.860ebcbd.js";import{N as I,i as v,C as u,d as C}from"./base.982ab451.js";import{c as M,d as g}from"./duration.c050dc80.js";import{l as $}from"./lodash.a9f8c3c1.js";import{a as N}from"./clipboard.20c34662.js";import"./echarts.4cc66d9c.js";import"./notificationCounter.4f4e1e9f.js";import"./tippy.esm.67f4ecc9.js";var E={exports:{}};(function(e,t){(function(s,i){e.exports=i()})(M,function(){return function(s,i,n){n.updateLocale=function(a,l){var o=n.Ls[a];if(o)return(l?Object.keys(l):[]).forEach(function(d){o[d]=l[d]}),o}}})})(E);const L=E.exports,_=100;function m(e,t){e.scrollTop+=t}function T(){if(performance.now()-window.lastClick<500)return;const e=document.getElementById("challengesList"),t=[...document.querySelectorAll("[data-is-center]")];var s=t,i=!1;document.querySelectorAll(".challengeItem.selected").length&&(i=!0,s=[...document.querySelectorAll(".challengeItem.selected")]);const n=Math.min(...t.map(f=>f.offsetTop)),a=Math.max(...t.map(f=>f.offsetTop+f.offsetHeight)),l=Math.min(...s.map(f=>f.offsetTop)),o=Math.max(...s.map(f=>f.offsetTop+f.offsetHeight)),d=e.scrollTop,h=e.scrollTop+e.clientHeight,p=e.clientHeight,c=a-n,w=(d+h)/2;if(!i)a<w?m(e,-c):n>w&&m(e,c);else if(o<d&&l+c>h||l>h&&o-c<d)a<w?m(e,-c):n>w&&m(e,c);else if(o<d&&l+c<=h){var y=Math.max(Math.floor(p/c),1)*c;m(e,-y)}else if(l>h&&o-c>=d){var y=Math.max(Math.floor(p/c),1)*c;m(e,y)}}const A=!!/Windows NT .* rv:([^\)]+)\) Gecko\/\d{8}/.test(navigator.userAgent);A&&(T=$.exports.debounce(T,150));function D(e){let t=()=>{let s,i=localStorage;return e.interceptor((n,a,l,o,d)=>{let h=s||`_x_${o}`,p=O(h,i)?P(h,i):n;return l(p),e.effect(()=>{let c=a();G(h,c,i),l(c)}),p},n=>{n.as=a=>(s=a,n),n.using=a=>(i=a,n)})};Object.defineProperty(e,"$persist",{get:()=>t()}),e.magic("persist",t)}function O(e,t){return t.getItem(e)!==null}function P(e,t){return JSON.parse(t.getItem(e,t))}function G(e,t,s){s.setItem(e,JSON.stringify(t))}var U=D,x={exports:{}};(function(e){var t=function(s){var i={addEvent:function(n,a,l,o){n.addEventListener?n.addEventListener(a,l,!1):n.attachEvent&&(n["e"+a+l]=l,n[a+l]=function(){n["e"+a+l](window.event,o)},n.attachEvent("on"+a,n[a+l]))},removeEvent:function(n,a,l){n.removeEventListener?n.removeEventListener(a,l):n.attachEvent&&n.detachEvent(a)},input:"",pattern:"38384040373937396665",keydownHandler:function(n,a){if(a&&(i=a),i.input+=n?n.keyCode:event.keyCode,i.input.length>i.pattern.length&&(i.input=i.input.substr(i.input.length-i.pattern.length)),i.input===i.pattern)return i.code(i._currentLink),i.input="",n.preventDefault(),!1},load:function(n){this._currentLink=n,this.addEvent(document,"keydown",this.keydownHandler,this),this.iphone.load(n)},unload:function(){this.removeEvent(document,"keydown",this.keydownHandler),this.iphone.unload()},code:function(n){window.location=n},iphone:{start_x:0,start_y:0,stop_x:0,stop_y:0,tap:!1,capture:!1,orig_keys:"",keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP"],input:[],code:function(n){i.code(n)},touchmoveHandler:function(n){if(n.touches.length===1&&i.iphone.capture===!0){var a=n.touches[0];i.iphone.stop_x=a.pageX,i.iphone.stop_y=a.pageY,i.iphone.tap=!1,i.iphone.capture=!1,i.iphone.check_direction()}},touchendHandler:function(){if(i.iphone.input.push(i.iphone.check_direction()),i.iphone.input.length>i.iphone.keys.length&&i.iphone.input.shift(),i.iphone.input.length===i.iphone.keys.length){for(var n=!0,a=0;a<i.iphone.keys.length;a++)i.iphone.input[a]!==i.iphone.keys[a]&&(n=!1);n&&i.iphone.code(i._currentLink)}},touchstartHandler:function(n){i.iphone.start_x=n.changedTouches[0].pageX,i.iphone.start_y=n.changedTouches[0].pageY,i.iphone.tap=!0,i.iphone.capture=!0},load:function(n){this.orig_keys=this.keys,i.addEvent(document,"touchmove",this.touchmoveHandler),i.addEvent(document,"touchend",this.touchendHandler,!1),i.addEvent(document,"touchstart",this.touchstartHandler)},unload:function(){i.removeEvent(document,"touchmove",this.touchmoveHandler),i.removeEvent(document,"touchend",this.touchendHandler),i.removeEvent(document,"touchstart",this.touchstartHandler)},check_direction:function(){const n=Math.abs(this.start_x-this.stop_x),a=Math.abs(this.start_y-this.stop_y),l=this.start_x-this.stop_x<0?"RIGHT":"LEFT",o=this.start_y-this.stop_y<0?"DOWN":"UP";var d=n>a?l:o;return d=this.tap===!0?"TAP":d,d}}};return typeof s=="string"&&i.load(s),typeof s=="function"&&(i.code=s,i.load()),i};e.exports=t})(x);const W=x.exports,b=new W(function(){/*! SEKAI{→↓↑→→↓→→↑↑↓↓←→←→} */window.dispatchEvent(new Event("lrlr"))});b.pattern="39403839394039393838404037393739";b.iphone.keys=["RIGHT","DOWN","UP","RIGHT","RIGHT","DOWN","RIGHT","RIGHT","UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT"];r.plugin(U);g.extend(L);g.updateLocale("en",{relativeTime:{future:"+%s",past:"-%s",s:"%d<small>s</small>",m:"1<small>min</small>",mm:"%d<small>mins</small>",h:"1<small>hr</small>",hh:"%d<small>hrs</small>",d:"1<small>d</small>",dd:"%d<small>d</small>",M:"1<small>mth</small>",MM:"%d<small>mths</small>",y:"1<small>yr</small>",yy:"%d<small>yrs</small>"}});const H={[window.init.themeSettings.tag_difficulty_1]:1,[window.init.themeSettings.tag_difficulty_2]:2,[window.init.themeSettings.tag_difficulty_3]:3,[window.init.themeSettings.tag_difficulty_4]:4,[window.init.themeSettings.tag_difficulty_5]:5},S={[window.init.themeSettings.cat_name_misc]:"#dbdbdb",[window.init.themeSettings.cat_name_crypto]:"#cbfdc6",[window.init.themeSettings.cat_name_forensics]:"#c6d8fd",[window.init.themeSettings.cat_name_rev]:"#e9c6fd",[window.init.themeSettings.cat_name_pwn]:"#fde2c6",[window.init.themeSettings.cat_name_ppc]:"#f8fdc6",[window.init.themeSettings.cat_name_web]:"#c6cbfd"},B={Difficulty(e,t){return(e.difficulty||1)-(t.difficulty||1)||e.name.localeCompare(t.name)},Score(e,t){return(e.value||0)-(t.value||0)||e.name.localeCompare(t.name)},Solves(e,t){return(e.solves||0)-(t.solves||0)||e.name.localeCompare(t.name)},Name(e,t){return e.name.localeCompare(t.name)}},R=e=>e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");function k(e){let s=new DOMParser().parseFromString(e,"text/html");return s.querySelectorAll('a[href*="://"]').forEach(n=>{n.setAttribute("target","_blank")}),s.documentElement.outerHTML}window.Alpine=r;const q=new I({duration:0,dismissible:!0,ripple:!0,position:{x:"left",y:"top"},types:[{type:"info",backgroundColor:"#5CC9BB"},{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}]});r.store("challenge",{data:{view:""},loading:!1});r.data("Challenge",()=>({id:null,next_id:null,submission:"",tab:null,solves:null,submitting:!1,hints:{},init(){v(this.$refs.solversModal,[],[this.$refs.solversModalClose]),document.querySelectorAll(".hintModal").forEach(e=>{console.log(e),this.hints[parseInt(e.dataset.hintId)]={id:null,html:null};const t=e.querySelector("button");v(e,[],[t])})},async showSolves(){this.solves=await u.pages.challenge.loadSolves(this.id),this.solves.forEach((e,t)=>(e.timeDiff="",t===0&&window.init.start?e.timeDiff=g.duration(g(e.date).diff(g.unix(window.init.start))).humanize(!0):t>0&&(e.timeDiff=g.duration(g(e.date).diff(g(this.solves[t-1].date))).humanize(!0)),e.date=g(e.date).format("D MMM YYYY, HH:mm:ss"),e)),C.registerDialog(this.$refs.solversModal),this.$refs.solversModal.showModal()},getNextId(){return r.store("challenge").data.next_id},async nextChallenge(){Modal.getOrCreateInstance("[x-ref='challengeWindow']").hide(),this.$dispatch("load-challenge",this.getNextId())},async submitChallenge(){this.submitting=!0;const e=await u.pages.challenge.submitChallenge(this.id,this.submission);this.submitting=!1,q.open({type:e.data.status==="correct"?"success":e.data.status==="incorrect"?"error":"info",message:`<code>${R(this.submission)}</code><br>${e.data.message}`}),e.data.status==="correct"&&(this.submission=""),this.$dispatch("load-challenges")},copyText(e){N(e,this.$refs.connectionBox)},collapse(){this.$dispatch("collapse-challenge")},async showHint(e,t){console.log("showHint",e,t);const s=this.$refs[`hintDialog${e}`];if(C.registerDialog(s),t){let n=(await u.pages.challenge.loadHint(e)).data,a='<div class="warning">Hint is not available.</div>';if(n.content)a=k(n.html);else if(await u.pages.challenge.displayUnlock(e)){let o=await u.pages.challenge.loadUnlock(e);if(o.success){let h=(await u.pages.challenge.loadHint(e)).data;a=k(h.html)}else{u._functions.challenge.displayUnlockError(o);return}}this.hints[e]={id:e,html:a}}s.showModal()}}));r.data("ChallengeBoard",function(){return{loaded:!1,challenges:[],filteredChallenges:[],lrn:null,selectedId:null,category:null,oobe:this.$persist(!0),sortOrder:this.$persist("Difficulty"),filterCondition:this.$persist("All"),loopHighlight:this.$persist(!1),highContrast:this.$persist(!1),repeatTimes:1,async init(){v(this.$refs.settingsModal,[],[this.$refs.settingsModalClose]);const e=window.location.hash;window.lastClick=0,await this.loadChallenges(),this.loaded=!0,await r.nextTick(),await this.setCategory(null),this.$refs.listNode.addEventListener("scroll",()=>{window.requestAnimationFrame(T)},!1),e.length>0&&await this.loadChalByName(decodeURIComponent(e.substring(1))),this.oobe&&(C.registerDialog(this.$refs.oobeModal),this.$refs.oobeModal.showModal())},async loadChalByName(e){let t=e.lastIndexOf("-"),s=[e.slice(0,t),e.slice(t+1)],i=parseInt(s[1]),n=this.challenges.findIndex(a=>a.id===i);await this.selectChallenge(n,null)},getCategories(){const e=[];this.challenges.forEach(i=>{const{category:n}=i;e.includes(n)||e.push(n)});const t=[window.init.themeSettings.cat_name_misc,window.init.themeSettings.cat_name_crypto,window.init.themeSettings.cat_name_forensics,window.init.themeSettings.cat_name_rev,window.init.themeSettings.cat_name_pwn,window.init.themeSettings.cat_name_ppc,window.init.themeSettings.cat_name_web];return[...t.filter(i=>e.includes(i)),...e.sort((i,n)=>i.localeCompare(n)).filter(i=>!t.includes(i))]},getCategoryWithIcons(){const e={};return e[window.init.themeSettings.cat_name_misc]=window.tagImages.misc,e[window.init.themeSettings.cat_name_crypto]=window.tagImages.crypto,e[window.init.themeSettings.cat_name_forensics]=window.tagImages.forensics,e[window.init.themeSettings.cat_name_rev]=window.tagImages.reverse,e[window.init.themeSettings.cat_name_pwn]=window.tagImages.pwn,e[window.init.themeSettings.cat_name_ppc]=window.tagImages.ppc,e[window.init.themeSettings.cat_name_web]=window.tagImages.web,this.getCategories().map(t=>[t,e[t]||null])},getChallenges(e){let t=this.challenges;e&&(t=this.challenges.filter(s=>s.category===e)),this.filterCondition==="Unsolved"?t=t.filter(s=>!s.solved_by_me):this.filterCondition==="Solved"&&(t=t.filter(s=>s.solved_by_me));try{t.sort(B[this.sortOrder])}catch(s){console.log("Error running challenge_order function"),console.log(s)}return t},async loadChallenges(){this.challenges=(await u.pages.challenges.getChallenges()).map(this.addChallengeProperties)},async loadChallenge(e){e===null?(r.store("challenge").data.view="",this.setColor(null)):(r.store("challenge").data.view="",r.store("challenge").loading=!0,await u.pages.challenge.displayChallenge(e,t=>{t.data.view=k(t.data.view),r.store("challenge").loading=!1,r.store("challenge").data=t.data,this.setColor(t.data.category),r.nextTick(()=>{this.$refs.challengesContentWrapper.focus()})}))},addChallengeProperties(e){const t=e.tags.map(i=>i.value),s=[];return e.difficulty=1,t.forEach(i=>{H[i]?e.difficulty=H[i]:s.push(i)}),e.label=s.join(", "),e},async setCategory(e){this.category===e&&this.filteredChallenges.length>0||(this.category=e,history.replaceState(void 0,void 0,"#"),this.loadChallenge(null),this.filteredChallenges=this.getChallenges(e),this.repeatTimes=this.filteredChallenges.length===0?0:Math.ceil(window.screen.height/(this.filteredChallenges.length*_)),this.selectedId=null,await r.nextTick(),this.centerNode(0))},async selectChallenge(e,t){const s=this.filteredChallenges[e];if(t&&(t=t.closest(".challengeItem")),this.selectedId==s.id){this.centerNode(e,t);return}this.selectedId=s.id,history.replaceState(void 0,void 0,`#${s.name.replace(/ /g,"-")}-${s.id}`),this.centerNode(e,t),await this.loadChallenge(s.id)},async loadChallengeEvt(e){const t=this.challenges.findIndex(s=>s.id===e);await this.setCategory(null),await this.selectChallenge(t)},async loadChallengesEvt(){const e=this.selectedId||null;await this.loadChallenges(),this.filteredChallenges=this.getChallenges(this.category),this.repeatTimes=this.filteredChallenges.length===0?0:Math.ceil(window.screen.height/(this.filteredChallenges.length*_)),e!==null&&await this.loadChallenge(e)},collapseChallengeEvt(){this.selectedId=null,history.replaceState(void 0,void 0,"#"),setTimeout(()=>this.loadChallenge(null),500)},async refreshSortFilter(){this.filteredChallenges=this.getChallenges(this.category);var e=null;this.selectedId!==null&&(e=this.filteredChallenges.findIndex(t=>t.id===this.selectedId),e<0&&(e=null)),this.repeatTimes=this.filteredChallenges.length===0?0:Math.ceil(window.screen.height/(this.filteredChallenges.length*_)),await r.nextTick(),e!==null&&this.centerNode(e)},repeatArray(e,t){return Array.from({length:t},()=>e).flat()},centerNode(e,t){const s=this.$refs.listNode,i=s.querySelector(`[data-is-center="${e}"]`);if(i!==null)if(t){if(!t.isEqualNode(i)){var n=t.offsetTop-s.scrollTop;s.scrollTop=i.offsetTop-n}s.scrollTo({top:i.offsetTop-(s.clientHeight-i.clientHeight)/2,behavior:"smooth"})}else s.scrollTop=i.offsetTop-(s.clientHeight-i.clientHeight)/2},setColor(e){var t="";S[e]&&(t=`linear-gradient(to bottom, #dddddd, ${S[e]})`),document.documentElement.style.setProperty("--background-gradient",t)},oobeUpdate(e){this.oobe=!1,this.loopHighlight=e;const t=this.$refs.oobeModal,s=()=>{t.classList.remove("hide"),t.close(),t.removeEventListener("webkitAnimationEnd",s,!1)};t.classList.add("hide"),t.addEventListener("webkitAnimationEnd",s,!1)},async lrlr(){this.loaded=!1;try{this.lrn=await(await fetch("https://sekai-world.github.io/sekai-master-db-diff/musics.json")).json()}catch(e){console.log(e)}this.loaded=!0}}});r.start();
