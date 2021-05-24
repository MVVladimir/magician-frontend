(this["webpackJsonpmagician-frontend"]=this["webpackJsonpmagician-frontend"]||[]).push([[0],{16:function(t,e,n){},168:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),s=n(8),a=n.n(s),i=(n(56),n(9)),r=n(10),u=n(12),l=n(11),d=n(21),h=n(6),g=(n(16),n(24)),j=n(3),b=n.n(j),f=n(13),p=n(1),m=(c.a.Component,n(18)),v=n.n(m),O="https://magicianapp.herokuapp.com";function x(){return(x=Object(f.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("".concat(O,"/nodes/").concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var k,y=function(t){return x.apply(this,arguments)},S=n(14),w=n(49),C=(n(98),0),_=[],A=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var o,c;return Object(i.a)(this,n),o=e.call(this,t),console.log("constructor"),o.state={notes:[],scene:null,backgroundImage:{background:""}},o.assistant=(c=function(){return o.getStateForAssistant()},Object(d.a)({getState:c})),o.assistant.on("data",(function(t){console.log("assistant.on(data)",t);var e=t.action;o.dispatchAssistantAction(e)})),o.assistant.on("start",(function(t){console.log("assistant.on(start)",t)})),o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=Object(f.a)(b.a.mark((function t(){var e,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("componentDidMount"),t.next=3,y(1);case 3:e=t.sent,console.log(e),n=e.data,this.setState({scene:n}),this.read();case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getStateForAssistant",value:function(){console.log("getStateForAssistant: this.state:",this.state);var t={item_selector:{items:{text:this.state.scene.text}}};return console.log("getStateForAssistant: state:",t),t}},{key:"dispatchAssistantAction",value:function(t){if(console.log("dispatchAssistantAction",t),t)switch(t.type){case"add_note":return console.log("add_note",t,"action.choice = ",t.choice),this.add_note(t);case"read":return this.read()}}},{key:"read",value:function(){this.assistant.sendData({action:{action_id:"read"}})}},{key:"add_note",value:function(t){var e=this,n=t.choice;console.log(n),"\u043e\u0434\u0438\u043d"!=n&&"\u043f\u0435\u0440\u0432\u044b\u0439"!=n&&"\u043f\u0435\u0440\u0432\u043e\u0435"!=n&&"\u043f\u0435\u0440\u0432\u0443\u044e"!=n||(n=1),"\u0434\u0432\u0430"!=t.choice&&"\u0432\u0442\u043e\u0440\u043e\u0439"!=n&&"\u0432\u0442\u043e\u0440\u043e\u0435"!=n&&"\u0432\u0442\u043e\u0440\u0443\u044e"!=n||(n=2),"\u0442\u0440\u0438"!=t.choice&&"\u0442\u0440\u0435\u0442\u0438\u0439"!=n&&"\u0442\u0440\u0435\u0442\u044c\u0435"!=n&&"\u0442\u0440\u0435\u0442\u044c\u044e"!=n||(n=3),"\u0447\u0435\u0442\u044b\u0440\u0435"!=t.choice&&"\u0447\u0435\u0442\u0432\u0435\u0440\u0442\u044b\u0439"!=n&&"\u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043e\u0435"!=n&&"\u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0443\u044e"!=n||(n=4),this.state.scene.options.forEach((function(t,o){console.log("index = ",o,"choice = ",n),t.text!==n&&o+1!==n||(console.log("movedTo",t.id),e.moveTo(t.id))}))}},{key:"done_note",value:function(t){console.log("done_note",t),this.setState({notes:this.state.notes.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),{},{completed:!e.completed}):e}))})}},{key:"delete_note",value:function(t){console.log("delete_note",t),this.setState({notes:this.state.notes.filter((function(e){return e.id!==t.id}))})}},{key:"setBackgrounds",value:function(t){_.push(t);var e="";_.reverse(),_.forEach((function(t,n){e+="url(".concat(O,"/").concat(t,".png) center no-repeat"),n<_.length-1&&(e+=",")})),this.setState({backgroundImage:{background:e}}),_.reverse()}},{key:"moveTo",value:function(t){var e=this;y(t).then((function(t){var n=t.data;e.setState({scene:n}),e.read()})),++C>2&&this.setBackgrounds(this.state.scene.img)}},{key:"render",value:function(){var t=this,e=this.state,n=e.scene,o=e.backgroundImage;return n?n.options?Object(p.jsx)(h.Container,{styles:S.darkSber,children:Object(p.jsxs)(h.Row,{children:[Object(p.jsx)(h.Col,{type:"calc",size:3,children:Object(p.jsxs)("div",{style:o,className:"img-Wrapper",children:[" ",Object(p.jsx)("img",{src:O+"/"+n.img+".png",height:"450",width:"450"})," "]})}),Object(p.jsxs)(h.Col,{type:"calc",offset:2,size:5,children:[Object(p.jsxs)("h1",{children:[" ",n.text," "]}),n.options.map((function(e){return Object(p.jsx)(h.Row,{children:Object(p.jsx)(w.Button,{style:{marginBottom:"1rem",width:"100%"},stretch:!0,size:"l",onClick:function(){return t.add_note({choice:e.text})},children:e.text})})}))]})]})}):Object(p.jsxs)(h.Container,{styles:S.darkSber,children:[Object(p.jsx)("img",{src:O+"/"+n.img+".png",height:"450",width:"450"}),Object(p.jsxs)("h1",{children:[" ",n.text," "]})]}):Object(p.jsx)("h1",{children:"Nothing..."})}}]),n}(c.a.Component),F=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return console.log("render"),Object(p.jsx)(h.Container,{children:Object(p.jsx)(A,{})})}}]),n}(c.a.Component),B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,171)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),s(t),a(t)}))},T=n(51),D=n(50),I=n(2),z=n(15),E=Object(I.createGlobalStyle)(k||(k=Object(D.a)(["\n    html:root {\n        min-height: 100vh;\n        color: ",";\n        background-color: ",";\n        background-image: ",";\n    }\n"])),z.text,z.background,z.gradient),M=Object(I.createGlobalStyle)(S.darkSber),P=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(E,{}),Object(p.jsx)(M,{})]})};a.a.render(Object(p.jsxs)(c.a.StrictMode,{children:[Object(p.jsxs)(T.DeviceThemeProvider,{children:[Object(p.jsx)(P,{}),Object(p.jsx)(F,{})]}),","]}),document.getElementById("root")),B()},56:function(t,e,n){},98:function(t,e,n){}},[[168,1,2]]]);
//# sourceMappingURL=main.3200ca88.chunk.js.map