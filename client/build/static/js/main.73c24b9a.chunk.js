(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{116:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=a(18),l=a(24),s=a(75),u=a(20),m=Object(l.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"CREATE":return[].concat(Object(u.a)(e),[t.payload]);case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"UPDATE":return console.log(e.map((function(e){return e.createdAt}))),e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),p=a(16),d=a(161),f=a(162),g=a(157),b=a(166),v=a(163),E=a(21),h=a(14),y=a.n(h),x=a(25),j=a(119),O=a(164),C=a(165),k=a(66),w=a.n(k),I=a(153),T=Object(I.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),N=a(36),A=a.n(N),D="https://sentimedia-web.herokuapp.com/posts",S=function(e){return A.a.patch("".concat(D,"/").concat(e,"/likePost"))},_=function(e,t){return A.a.patch("".concat(D,"/").concat(e),t)},L=function(e){return A.a.delete("".concat(D,"/").concat(e))},W=function(e){return function(){var t=Object(x.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,A.a.post(D,c);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},F=function(e,t){return function(){var a=Object(x.a)(y.a.mark((function a(n){var r,c;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,_(e,t);case 3:r=a.sent,c=r.data,n({type:"UPDATE",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},z=function(e){var t=e.currentId,a=e.setCurrentId,c=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),i=Object(p.a)(c,2),l=i[0],s=i[1],u=Object(o.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),m=Object(o.b)(),d=T();Object(n.useEffect)((function(){u&&s(u)}),[u]);var f=function(){a(0),s({creator:"",title:"",message:"",tags:"",selectedFile:""})},b=function(){var e=Object(x.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t?(m(W(l)),f()):(m(F(t,l)),f());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(j.a,{className:d.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:b},r.a.createElement(g.a,{variant:"h6"},t?"Editing":"What is on your Mind?"),r.a.createElement(O.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:l.creator,onChange:function(e){return s(Object(E.a)(Object(E.a)({},l),{},{creator:e.target.value}))}}),r.a.createElement(O.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:l.title,onChange:function(e){return s(Object(E.a)(Object(E.a)({},l),{},{title:e.target.value}))}}),r.a.createElement(O.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:l.message,onChange:function(e){return s(Object(E.a)(Object(E.a)({},l),{},{message:e.target.value}))}}),r.a.createElement("div",{className:d.fileInput},r.a.createElement(w.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return s(Object(E.a)(Object(E.a)({},l),{},{selectedFile:t}))}})),r.a.createElement(C.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(C.a,{variant:"contained",color:"secondary",size:"small",onClick:f,fullWidth:!0},"Clear")))},B=Object(I.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"mint",fontWeight:800,fontStyle:"italic"},image:{marginLeft:"15px"}}})),R=a(71),H=a.n(R),M=a(158),P=a(159),J=a(160),K=a(73),U=a.n(K),q=a(45),V=a(72),G=a.n(V),Q=Object(I.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"10px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px"},overlay2:{position:"absolute",top:"20px",right:"20px"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},content:{display:"flex",alignItems:"center",justifyContent:"center"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),X=a(74),Y=a.n(X),Z=function(e){var t=e.post,a=e.setCurrentId,n=Object(o.b)(),c=Q(),i=null;return i=t.sentiment>=0&&t.sentiment<1?"\ud83d\ude42":t.sentiment>=1&&t.sentiment<2?"\ud83d\ude03":t.sentiment>=2?"\ud83d\ude06":t.sentiment<0&&t.sentiment>-.5?"\ud83d\ude10":t.sentiment<=-.5&&t.sentiment>-1?"\ud83d\ude41":t.sentiment<=-1&&t.sentiment>-2?"\ud83d\ude2b":t.sentiment<=-2?"\ud83e\udd2f":"\ud83d\ude42",void 0===t.createdAt&&(t.createdAt=q.DateTime.now()),r.a.createElement(j.a,{className:c.card,elevation:24,square:!0},r.a.createElement(M.a,{className:c.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),r.a.createElement("div",{className:c.overlay},r.a.createElement(g.a,{variant:"h4"},t.creator),r.a.createElement(g.a,{variant:"body2"},"Created on ",q.DateTime.fromISO(t.createdAt).toLocaleString(q.DateTime.DATETIME_SHORT))),r.a.createElement("div",{className:c.overlay2},r.a.createElement(C.a,{style:{color:"primary"},size:"small",onClick:function(){return a(t._id)}},"Edit")),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(g.a,{className:c.title,gutterBottom:!0,variant:"h5",component:"h2"},t.title)),r.a.createElement(P.a,null,r.a.createElement(g.a,{variant:"subtitle1",component:"p"},t.message),r.a.createElement(G.a,{options:{className:"twemoji"}},r.a.createElement("p",null,i))),r.a.createElement(J.a,{className:c.cardActions},r.a.createElement(C.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(x.a)(y.a.mark((function t(a){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:n=t.sent,r=n.data,a({type:"LIKE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(U.a,{fontSize:"small"})," Like ",t.likeCount," "),r.a.createElement(C.a,{size:"small",color:"default",onClick:function(){return n((e=t._id,function(){var t=Object(x.a)(y.a.mark((function t(a){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(Y.a,null)," Delete")))},$=function(){var e=Object(n.useState)(0),t=Object(p.a)(e,2),a=t[0],c=t[1],i=Object(o.b)(),l=B();Object(n.useEffect)((function(){i(function(){var e=Object(x.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get(D);case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,i]);var s=Object(o.c)((function(e){return e.posts}));return r.a.createElement(d.a,{maxWidth:"lg"},r.a.createElement(f.a,{className:l.appBar,position:"static",color:"inherit"},r.a.createElement(g.a,{sx:{fontWeight:500,fontStyle:"italic"},className:l.heading,variant:"h2",align:"center"},"Sentimedia"),r.a.createElement("img",{className:l.image,src:H.a,alt:"icon",height:"60"})),r.a.createElement(b.a,{in:!0},r.a.createElement(d.a,null,r.a.createElement(v.a,{className:l.container,container:!0,alignItems:"stretch",spacing:3},r.a.createElement(v.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(z,{currentId:a,setCurrentId:c})),s.slice(0).reverse().map((function(e){return r.a.createElement(v.a,{key:e._id,item:!0,xs:12,sm:6,md:4},r.a.createElement(Z,{post:e,setCurrentId:c}))}))))))},ee=(a(116),Object(l.e)(m,Object(l.d)(Object(l.a)(s.a))));i.a.render(r.a.createElement(o.a,{store:ee},r.a.createElement($,null)),document.getElementById("root"))},71:function(e,t,a){e.exports=a.p+"static/media/logo.5b9643d8.png"},83:function(e,t,a){e.exports=a(118)}},[[83,1,2]]]);
//# sourceMappingURL=main.73c24b9a.chunk.js.map