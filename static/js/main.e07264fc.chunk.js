(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(83)},51:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),o=a.n(c),l=(a(51),a(53),a(3)),s=a(4),i=a(6),m=a(5),u=a(7),p=a(85),d=a(87),h=a(86),b=a(44),E=a(15),f=a(41),v={},y=Object(E.c)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return(arguments.length>1?arguments[1]:void 0).type,e}}),O=[f.a],g=Object(E.e)(y,{},Object(E.d)(E.a.apply(void 0,O),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),j=a(84),C=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark mb-3"},r.a.createElement("div",{className:"container d-flex justify-content-between"},r.a.createElement(j.a,{to:"/",className:"navbar-brand mb-0 h1"},r.a.createElement("span",{className:"text-danger"},"Contact")," Manager"),r.a.createElement(j.a,{to:"/about",className:"text-light navbar-brand"},"About")))}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))}}]),t}(n.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"display-3"},"404 Page Not Found")),r.a.createElement("div",{className:"col-12"},r.a.createElement("p",{className:"lead"},"Sorry, that page does not exists.")))}}]),t}(n.Component),x=a(10),k=a.n(x),S=a(13),T=a(14),A=a.n(T),_=a(45),D=a(21),F=r.a.createContext(),P=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(D.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(D.a)({},e,{contacts:[t.payload].concat(Object(_.a)(e.contacts))});case"UPDATE_CONTACT":return Object(D.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},q=(n.Component,F.Consumer),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onDelete=function(e,t){t({type:"DELETE_CONTACT",payload:e})},a.state={showContact:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.name,c=t.email,o=t.phone,l=t.deleteClickHandle,s=this.state.showContact;return r.a.createElement(q,null,function(t){t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title d-flex justify-content-between align-items-center"},r.a.createElement("div",null,n," ",r.a.createElement("i",{onClick:function(){return e.setState({showContact:!s})},className:"fas fa-sort-down"})),r.a.createElement("div",null,r.a.createElement(j.a,{to:"/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",fontSize:"20px"}}))," ",r.a.createElement("i",{onClick:l,className:"fas fa-times text-danger mt-1",style:{cursor:"pointer",fontSize:"25px"}}))),s?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Email : "),c),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("strong",null,"Phone : "),o)):null))})}}]),t}(n.Component),U=a(18),X=(a(36),a(17)),I=a(2),M=a.n(I),V=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.id,n=e.placeholder,c=e.error,o=e.value,l=e.onChange,s=e.label,i=e.name;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},s),r.a.createElement("input",{type:t,className:M()("form-control",{"is-invalid":c}),placeholder:n,id:a,value:o,onChange:l,name:i}),c?r.a.createElement("div",{className:"invalid-feedback"},c):null)}}]),t}(n.Component);V.defaultProps={type:"text"};var z=V,B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.toggle=function(){a.setState({showForm:!a.state.showForm,name:"",email:"",phone:"",errors:{}})},a.onChange=function(e){a.setState(Object(U.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(S.a)(k.a.mark(function e(t,n){var r,c,o,l,s,i;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return a.setState({showForm:!a.state.showForm}),s={name:c,email:o,phone:l},e.next=15,A.a.post("https://jsonplaceholder.typicode.com/users",s);case 15:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}});case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(q,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"Contact")," list")),r.a.createElement("div",{className:"col-md-6 d-flex align-items-center justify-content-end"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:e.toggle},r.a.createElement("i",{className:"fas fa-plus"})," Add Contact"),r.a.createElement(X.b,{isOpen:e.state.showForm,toggle:e.toggle,className:e.props.className},r.a.createElement(X.d,{toggle:e.showForm},"Add Contact"),r.a.createElement(X.c,null,r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(z,{id:"name",name:"name",placeholder:"Enter name ...",value:a,error:o.name,onChange:e.onChange,label:"Name"}),r.a.createElement(z,{id:"email",name:"email",type:"email",placeholder:"Enter email ...",value:n,error:o.email,onChange:e.onChange,label:"Email"}),r.a.createElement(z,{id:"phone",name:"phone",placeholder:"Enter phone ...",value:c,error:o.phone,onChange:e.onChange,label:"Phone"}),r.a.createElement("div",{className:"text-center"},r.a.createElement(X.a,{color:"success",type:"submit"},"Save")," ",r.a.createElement(X.a,{color:"danger",onClick:e.toggle},"Cancel")))))))})}}]),t}(n.Component);B.defaultProps={};var H=B,J=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).deleteContact=function(){var e=Object(S.a)(k.a.mark(function e(t,a){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(q,null,function(t){var a=t.contacts,n=t.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),a.map(function(t){return r.a.createElement(L,{key:t.id,id:t.id,name:t.name,email:t.email,phone:t.phone,deleteClickHandle:e.deleteContact.bind(e,t.id,n)})}))})}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.toggle=function(){a.setState({showForm:!a.state.showForm,name:"",email:"",phone:"",errors:{}})},a.onChange=function(e){a.setState(Object(U.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(S.a)(k.a.mark(function e(t,n){var r,c,o,l,s,i,m;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},a.setState({showForm:!a.state.showForm}),i=a.props.match.params.id,e.next=16,A.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 16:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 20:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(k.a.mark(function e(){var t,a,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,A.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(q,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"card col-12 p-0"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h1",{className:"display-6"},r.a.createElement("span",{className:"text-danger"},"Edit")," Contact")),r.a.createElement("div",{className:"list-group list-group-flush p-3"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(z,{id:"name",name:"name",placeholder:"Enter name ...",value:a,error:o.name,onChange:e.onChange,label:"Name"}),r.a.createElement(z,{id:"email",name:"email",type:"email",placeholder:"Enter email ...",value:n,error:o.email,onChange:e.onChange,label:"Email"}),r.a.createElement(z,{id:"phone",name:"phone",placeholder:"Enter phone ...",value:c,error:o.phone,onChange:e.onChange,label:"Phone"}),r.a.createElement("div",{className:"text-center"},r.a.createElement(X.a,{color:"success",type:"submit"},"Update")," ",r.a.createElement(j.a,{className:"btn btn-secondary",to:"/"},"Cancel"))))))})}}]),t}(n.Component);R.defaultProps={};var W=R,$=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{store:g},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:J}),r.a.createElement(h.a,{exact:!0,path:"/about",component:N}),r.a.createElement(h.a,{exact:!0,path:"/edit/:id",component:W}),r.a.createElement(h.a,{component:w}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,2,1]]]);
//# sourceMappingURL=main.e07264fc.chunk.js.map