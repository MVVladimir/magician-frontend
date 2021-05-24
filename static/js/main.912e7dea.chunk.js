(this["webpackJsonpmagician-frontend"]=this["webpackJsonpmagician-frontend"]||[]).push([[0],{16:function(t,e,n){},168:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),s=n(8),a=n.n(s),i=(n(56),n(9)),r=n(10),u=n(12),l=n(11),h=n(21),d=n(6),j=(n(16),n(24)),g=n(3),b=n.n(g),p=n(13),f=n(1),m=(o.a.Component,n(18)),O=n.n(m),v="https://magicianapp.herokuapp.com";function x(){return(x=Object(p.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("".concat(v,"/nodes/").concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var k,y=function(t){return x.apply(this,arguments)},S=n(14),w=n(49),C=(n(98),0),A=[],F=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var c,o;return Object(i.a)(this,n),c=e.call(this,t),console.log("constructor"),c.state={notes:[],scene:null,backgroundImage:{background:""}},c.assistant=(o=function(){return c.getStateForAssistant()},Object(h.a)({getState:o})),c.assistant.on("data",(function(t){console.log("assistant.on(data)",t);var e=t.action;c.dispatchAssistantAction(e)})),c.assistant.on("start",(function(t){console.log("assistant.on(start)",t)})),c}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=Object(p.a)(b.a.mark((function t(){var e,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("componentDidMount"),t.next=3,y(1);case 3:e=t.sent,console.log(e),n=e.data,this.setState({scene:n});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getStateForAssistant",value:function(){return console.log("getStateForAssistant: this.state:",this.state),this.state}},{key:"dispatchAssistantAction",value:function(t){if(console.log("dispatchAssistantAction",t),t)switch(t.type){case"add_note":return console.log("add_note",t,"action.choice = ",t.choice),this.add_note(t)}}},{key:"add_note",value:function(t){var e=this,n=t.choice;"\u043e\u0434\u0438\u043d"!=n&&"\u043f\u0435\u0440\u0432\u044b\u0439"!=n&&"\u043f\u0435\u0440\u0432\u043e\u0435"!=n||(n=1),"\u0434\u0432\u0430"!=t.choice&&"\u0432\u0442\u043e\u0440\u043e\u0439"!=n&&"\u0432\u0442\u043e\u0440\u043e\u0435"!=n||(n=2),"\u0442\u0440\u0438"!=t.choice&&"\u0442\u0440\u0435\u0442\u0438\u0439"!=n&&"\u0442\u0440\u0435\u0442\u044c\u0435"!=n||(n=3),"\u0447\u0435\u0442\u044b\u0440\u0435"!=t.choice&&"\u0447\u0435\u0442\u0432\u0435\u0440\u0442\u044b\u0439"!=n&&"\u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043e\u0435"!=n||(n=4),this.state.scene.options.forEach((function(t,c){console.log("index = ",c,"choice = ",n),t.text!==n&&c+1!==n||(console.log("movedTo",t.id),e.moveTo(t.id))}))}},{key:"done_note",value:function(t){console.log("done_note",t),this.setState({notes:this.state.notes.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{completed:!e.completed}):e}))})}},{key:"delete_note",value:function(t){console.log("delete_note",t),this.setState({notes:this.state.notes.filter((function(e){return e.id!==t.id}))})}},{key:"setBackgrounds",value:function(t){A.push(t);var e="";A.reverse(),A.forEach((function(t,n){e+="url(".concat(v,"/").concat(t,".png) center no-repeat"),n<A.length-1&&(e+=",")})),this.setState({backgroundImage:{background:e}}),A.reverse()}},{key:"moveTo",value:function(t){var e=this;y(t).then((function(t){var n=t.data;e.setState({scene:n})})),++C>2&&this.setBackgrounds(this.state.scene.img)}},{key:"render",value:function(){var t=this,e=this.state,n=e.scene,c=e.backgroundImage;return n?n.options?Object(f.jsx)(d.Container,{styles:S.darkSber,children:Object(f.jsxs)(d.Row,{children:[Object(f.jsx)(d.Col,{type:"calc",size:3,children:Object(f.jsxs)("div",{style:c,className:"img-Wrapper",children:[" ",Object(f.jsx)("img",{src:v+"/"+n.img+".png",height:"450",width:"450"})," "]})}),Object(f.jsxs)(d.Col,{type:"calc",offset:2,size:5,children:[Object(f.jsxs)("h1",{children:[" ",n.text," "]}),n.options.map((function(e){return Object(f.jsx)(d.Row,{children:Object(f.jsx)(w.Button,{style:{marginBottom:"1rem",width:"100%"},stretch:!0,size:"l",onClick:function(){return t.moveTo(e.id)},children:e.text})})}))]})]})}):Object(f.jsxs)(d.Container,{styles:S.darkSber,children:[Object(f.jsx)("img",{src:v+"/"+n.img+".png",height:"450",width:"450"}),Object(f.jsxs)("h1",{children:[" ",n.text," "]})]}):Object(f.jsx)("h1",{children:"Nothing..."})}}]),n}(o.a.Component),_=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return console.log("render"),Object(f.jsx)(d.Container,{children:Object(f.jsx)(F,{})})}}]),n}(o.a.Component),T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,171)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),s(t),a(t)}))},B=n(51),I=n(50),D=n(2),z=n(15),E=Object(D.createGlobalStyle)(k||(k=Object(I.a)(["\n    html:root {\n        min-height: 100vh;\n        color: ",";\n        background-color: ",";\n        background-image: ",";\n    }\n"])),z.text,z.background,z.gradient),M=Object(D.createGlobalStyle)(S.darkSber),P=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(E,{}),Object(f.jsx)(M,{})]})};a.a.render(Object(f.jsxs)(o.a.StrictMode,{children:[Object(f.jsxs)(B.DeviceThemeProvider,{children:[Object(f.jsx)(P,{}),Object(f.jsx)(_,{})]}),","]}),document.getElementById("root")),T()},56:function(t,e,n){},98:function(t,e,n){}},[[168,1,2]]]);
//# sourceMappingURL=main.912e7dea.chunk.js.map