(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),s=n(20),o=n.n(s),u=(n(29),n(14)),i=n(23),j=n(6),l=n.n(j),d=n(11),b=n(10),h=n(8),f=n(2),p=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(r.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};p.defaultProps={color:"steelBlue"};var O=p,x=function(e){var t=e.title,n=e.onAdd,c=e.showAdd,a=Object(f.e)();return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{children:t}),"/"===a.pathname&&Object(r.jsx)(O,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};x.defaultProps={title:"Task Tracker"};var m=x,v=function(){var e=Object(f.e)();return Object(r.jsxs)("footer",{children:[Object(r.jsx)("p",{children:"Copyright \xa9 2021"}),"/"===e.pathname&&Object(r.jsx)(h.b,{to:"/about",children:"About"})]})},k=n(22),g=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(r.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(r.jsxs)("h3",{children:[t.text,Object(r.jsx)(k.a,{style:{color:"red"},onClick:function(){return n(t.id)}})]}),Object(r.jsxs)("p",{children:[t.day," Edit TimeBtn"]})]})},y=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(r.jsx)(r.Fragment,{children:t.map((function(e,t){return Object(r.jsx)(g,{task:e,onDelete:n,onToggle:c},t)}))})},w=function(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(b.a)(n,2),s=a[0],o=a[1],u=Object(c.useState)(""),i=Object(b.a)(u,2),j=i[0],l=i[1],d=Object(c.useState)(!1),h=Object(b.a)(d,2),f=h[0],p=h[1];return Object(r.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),s?(t({text:s,day:j,reminder:f}),o(""),l(""),p("")):alert("Please add a task")},children:[Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{children:"Task"}),Object(r.jsx)("input",{type:"text",placeholder:"Add task",value:s,onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{children:"Day & Time"}),Object(r.jsx)("input",{type:"text",placeholder:"Add day & time",value:j,onChange:function(e){return l(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-control form-control-check",children:[Object(r.jsx)("label",{children:"Set Reminder"}),Object(r.jsx)("input",{type:"checkbox",checked:f,value:f,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(r.jsx)("input",{type:"submit",value:"Save task",className:"btn btn-block"})]})},C=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Version 1.0.0"}),Object(r.jsx)(h.b,{to:"/",children:"Go Back"})]})},T=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),o=Object(b.a)(s,2),j=o[0],p=o[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,p([].concat(Object(i.a)(j),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:p(j.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,r=Object(u.a)(Object(u.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,p(j.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(h.a,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(m,{onAdd:function(){return a(!n)},showAdd:n}),Object(r.jsx)(f.a,{path:"/",exact:!0,render:function(e){return Object(r.jsxs)(r.Fragment,{children:[n&&Object(r.jsx)(w,{onAdd:k}),Object(r.jsx)("hr",{}),Object(r.jsx)("h3",{style:{margin:"10px"},children:"Tasks"}),j.length>0?Object(r.jsx)(y,{tasks:j,onDelete:g,onToggle:T}):"No tasks to do"]})}}),Object(r.jsx)(f.a,{path:"/about",component:C}),Object(r.jsx)(v,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root")),S()}},[[39,1,2]]]);
//# sourceMappingURL=main.1cb8b505.chunk.js.map