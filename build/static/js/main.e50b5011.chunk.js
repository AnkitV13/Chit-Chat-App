(this["webpackJsonpchit-chat-app"]=this["webpackJsonpchit-chat-app"]||[]).push([[0],{35:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c.n(a),s=c(25),r=c.n(s),i=(c(35),c(14)),o=c(15),d=(c(39),c(40),o.a.initializeApp({apiKey:"AIzaSyAQhmLq98szLVTw4IIGisSK7pzTZ2YZwVM",authDomain:"chit-chat-530b4.firebaseapp.com",projectId:"chit-chat-530b4",storageBucket:"chit-chat-530b4.appspot.com",messagingSenderId:"54036464048",appId:"1:54036464048:web:8fd4b3304562fd40be5675"}).firestore()),j=o.a.auth(),l=new o.a.auth.GoogleAuthProvider;function u(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("authUser"))),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=j.onAuthStateChanged((function(e){e?(localStorage.setItem("authUser",JSON.stringify(e)),n(e)):(localStorage.removeItem("authUser"),n(null))}));return function(){return e}}),[]),c}c(41);var b=c.p+"static/media/google.d673c8e9.png",h=c.p+"static/media/authentication.cd6f3680.jpg",m=c(3);function p(){return Object(m.jsxs)("div",{className:"authentication",children:[Object(m.jsx)("h1",{children:"Chit-Chat"}),Object(m.jsx)("img",{src:h,className:"auth-image"}),Object(m.jsx)("div",{className:"google-button-wrapper mt-4",onClick:function(){j.signInWithPopup(l).catch((function(e){return alert(e)}))},children:Object(m.jsxs)("div",{className:"google-button-cover",children:[Object(m.jsx)("div",{className:"google-image",children:Object(m.jsx)("img",{src:b})}),Object(m.jsx)("div",{className:"google-button-text",children:Object(m.jsx)("p",{children:"Continue with Google"})})]})})]})}c(43);var O,g,x,f,v,N=c(10),I=c(12),y=c(16),w=c(11),S=w.a.form(O||(O=Object(y.a)([""]))),_=w.a.div(g||(g=Object(y.a)([""]))),C=(w.a.h4(x||(x=Object(y.a)([""]))),w.a.input(f||(f=Object(y.a)(["\n  border-radius: 0px;\n  border: 2px solid var(--gray);\n  height: 50px;\n  outline-border: 0;\n"])))),k=w.a.button(v||(v=Object(y.a)(["\n  background: var(--green);\n  border-radius: 0px;\n  border: none;\n  height: 50px;\n\n  &:hover {\n    background-color: #3c9372;\n  }\n"]))),B=["children"],F=["children"],U=["children"];function A(e){var t=e.children,c=Object(I.a)(e,B);return Object(m.jsx)(S,Object(N.a)(Object(N.a)({},c),{},{children:t}))}A.FormGroup=function(e){var t=e.children,c=Object(I.a)(e,F);return Object(m.jsx)(_,Object(N.a)(Object(N.a)({},c),{},{children:t}))},A.FormInput=function(e){var t=Object.assign({},e);return Object(m.jsx)(C,Object(N.a)({},t))},A.FormButton=function(e){var t=e.children,c=Object(I.a)(e,U);return Object(m.jsx)(k,Object(N.a)(Object(N.a)({},c),{},{children:t}))};var G=w.a.div.withConfig({displayName:"chatscreen__ChatScreen",componentId:"sc-cdj58d-0"})(["display:flex;flex-direction:column;height:100vh;"]),M=w.a.div.withConfig({displayName:"chatscreen__Header",componentId:"sc-cdj58d-1"})(["width:100%;padding:15px 20px;background:darkblue;"]),z=w.a.div.withConfig({displayName:"chatscreen__Body",componentId:"sc-cdj58d-2"})(["height:84vh;padding:20px;display:flex;flex-direction:column;justify-content:space-between;"]),D=w.a.div.withConfig({displayName:"chatscreen__Messages",componentId:"sc-cdj58d-3"})([""]),J=["children"],L=["children"],T=["children"],E=["children"];function H(e){var t=e.children,c=Object(I.a)(e,J);return Object(m.jsx)(G,Object(N.a)(Object(N.a)({},c),{},{children:t}))}H.Header=function(e){var t=e.children,c=Object(I.a)(e,L);return Object(m.jsx)(M,Object(N.a)(Object(N.a)({},c),{},{children:t}))},H.Body=function(e){var t=e.children,c=Object(I.a)(e,T);return Object(m.jsx)(z,Object(N.a)(Object(N.a)({},c),{},{children:t}))},H.Messages=function(e){var t=e.children,c=Object(I.a)(e,E);return Object(m.jsx)(D,Object(N.a)(Object(N.a)({},c),{},{children:t}))};var V=c.p+"static/media/logo.d9dd8bcc.jpg",Z=(c.p,c(29));function K(){var e,t;return console.log(j),Object(m.jsxs)("div",{className:"chatscreen-header d-flex justify-content-between",children:[Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("img",{src:V})}),Object(m.jsxs)("div",{className:"right_wrapper",children:[Object(m.jsxs)("div",{className:"user_info",children:[Object(m.jsx)("img",{src:null===(e=j.currentUser)||void 0===e?void 0:e.photoURL}),Object(m.jsx)("span",{className:"username",children:null===(t=j.currentUser)||void 0===t?void 0:t.displayName})]}),Object(m.jsx)("button",{type:"button",className:"btn btn-light dropdown-toggle dropdown-toggle-split",onClick:function(){return j.signOut()},children:Object(m.jsx)(Z.a,{})})]})]})}var P=c(30);function R(){var e=Object(a.useState)(),t=Object(i.a)(e,2),c=t[0],n=t[1],s=u();return Object(m.jsx)(A,{children:Object(m.jsxs)(A.FormGroup,{className:"form-group formInput__group",children:[Object(m.jsx)(A.FormInput,{className:"form-control forminput",placeholder:"Boldo Na Zara...",value:c,onChange:function(e){return n(e.target.value)}}),Object(m.jsx)(A.FormButton,{className:"btn btn-success submitButton",onClick:function(e){e.preventDefault(),d.collection("chat").add({user:s.displayName,userImage:s.photoURL,message:c,timestamp:o.a.firestore.FieldValue.serverTimestamp()}).catch((function(e){return alert(e)})),n("")},children:Object(m.jsx)(P.a,{})})]})})}function q(e){var t=e.user,c=e.dp,a=e.message,n=e.timestamp;return Object(m.jsx)(H.Messages,{className:"mb-3",children:Object(m.jsxs)("div",{className:"message",children:[Object(m.jsx)("img",{src:c}),Object(m.jsxs)("div",{className:"message_info",children:[Object(m.jsx)("h4",{className:"username",children:t}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"badge bage-info messageText",children:a}),Object(m.jsx)("small",{className:"time",children:Object(m.jsx)("span",{children:new Date(null===n||void 0===n?void 0:n.toDate()).toString()})})]})]})]})})}function Q(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){d.collection("chat").orderBy("timestamp","asc").onSnapshot((function(e){return n(e.docs.map((function(e){return{id:e.id,user:e.data().user,userImage:e.data().userImage,timestamp:e.data().timestamp,message:e.data().message}})))}))}),[]),Object(m.jsxs)(H,{children:[Object(m.jsx)(H.Header,{children:Object(m.jsx)(K,{})}),Object(m.jsxs)(H.Body,{children:[Object(m.jsx)("div",{className:"messages_body",children:0===c.length?Object(m.jsx)("div",{className:"chat-screen-text",children:Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"No messages"})," are available"]})}):c.map((function(e){return Object(m.jsx)("div",{className:"mb-4",children:Object(m.jsx)(q,{user:e.user,dp:e.userImage,message:e.message,timestamp:e.timestamp})},e.id)}))}),Object(m.jsx)("div",{className:"form-wrapper",children:Object(m.jsx)(R,{})})]})]})}var W=function(){var e=u();return Object(m.jsx)("div",{className:"App",children:e?Object(m.jsx)(Q,{}):Object(m.jsx)(p,{})})};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(W,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e50b5011.chunk.js.map