(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),c=a(4),o=a(7),s=a(1),l=(a(14),a(9)),u=a.n(l),d=a(0),m=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todo;return Object(d.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":!0===t.completed}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(d.jsx)(m,{user:t.user})]})},b=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(j,{todo:e})}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function O(e){return h.find((function(t){return t.id===e}))||null}var f=function(e){var t=e.onSubmit,a=Object(s.useState)(""),n=Object(r.a)(a,2),i=n[0],c=n[1],o=Object(s.useState)(!1),l=Object(r.a)(o,2),u=l[0],m=l[1],j=Object(s.useState)(0),b=Object(r.a)(j,2),f=b[0],p=b[1],x=Object(s.useState)(!1),v=Object(r.a)(x,2),S=v[0],y=v[1];return Object(d.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),m(!i),y(!f),i&&f&&(t({id:0,title:i,completed:!1,userId:f,user:O(f)}),c(""),m(!1),p(0),y(!1))},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:"todo-title",children:"Title:\xa0"}),Object(d.jsx)("input",{id:"todo-title",type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:i,onChange:function(e){var t=e.currentTarget.value.replace(/[^A-Za-z0-9\u0400-\u04FF ]/g,"");c(t),m(!1)},onBlur:function(){return m(!i)}}),u&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"todo-userId",children:"User:\xa0"}),Object(d.jsxs)("select",{id:"todo-userId","data-cy":"userSelect",value:f,onChange:function(e){p(+e.currentTarget.value),y(!1)},children:[Object(d.jsx)("option",{value:"0",children:"Choose a user"}),h.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),S&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})};function p(e){return Math.max.apply(Math,Object(o.a)(e.map((function(e){return e.id}))))+1}var x=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId)})})),v=function(){var e=Object(s.useState)(x),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsx)(f,{onSubmit:function(e){n((function(t){var n=Object(c.a)(Object(c.a)({},e),{},{id:p(a)});return[].concat(Object(o.a)(t),[n])}))}}),Object(d.jsx)(b,{todos:a})]})};i.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.16285331.chunk.js.map