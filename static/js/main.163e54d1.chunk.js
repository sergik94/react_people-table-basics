(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),s=(c(20),c(21),c(2)),r=(c(22),c(8)),i=c(11),j=c(4),l=c(1),o=(c(23),c(0)),b=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},d=function(e){var t=e.person;return Object(o.jsx)(a.b,{to:"/people/".concat(t.slug),className:"f"===t.sex?"has-text-danger":"",children:t.name})};function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var O=function(){var e=Object(l.useState)(null),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!1),O=Object(j.a)(a,2),x=O[0],u=O[1],p=Object(l.useState)(!1),m=Object(j.a)(p,2),f=m[0],v=m[1],g=Object(s.h)().personData,N=void 0===g?"":g;function y(){return(y=Object(i.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,h();case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v(!0);case 11:return e.prev=11,u(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}return Object(l.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),x&&Object(o.jsx)(b,{}),f&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!!c&&0===c.length&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!f&&!!c&&c.length>0&&Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:null===c||void 0===c?void 0:c.map((function(e){var t=c.find((function(t){return t.name===e.motherName})),n=c.find((function(t){return t.name===e.fatherName}));return Object(o.jsxs)("tr",{"data-cy":"person",className:N===e.slug?"has-background-warning":"",children:[Object(o.jsx)("td",{children:Object(o.jsx)(d,{person:e})}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),!!t&&Object(o.jsx)("td",{children:Object(o.jsx)(d,{person:t})}),e.motherName&&!t?Object(o.jsx)("td",{children:e.motherName}):null,!!n&&Object(o.jsx)("td",{children:Object(o.jsx)(d,{person:n})}),e.fatherName&&!n?Object(o.jsx)("td",{children:e.fatherName}):null]},e.slug)}))})]})]})})},x=c(7),u=c.n(x),p=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return u()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(o.jsx)(a.c,{to:"/people",className:function(e){var t=e.isActive;return u()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})})},m=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(p,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(s.d,{children:[Object(o.jsx)(s.b,{path:"/",element:Object(o.jsx)("h1",{className:"title",children:"Home Page"})}),Object(o.jsx)(s.b,{path:"home",element:Object(o.jsx)(s.a,{to:"/",replace:!0})}),Object(o.jsxs)(s.b,{path:"/people",children:[Object(o.jsx)(s.b,{index:!0,element:Object(o.jsx)(O,{})}),Object(o.jsx)(s.b,{path:":personData",element:Object(o.jsx)(O,{})})]}),Object(o.jsx)(s.b,{path:"*",element:Object(o.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(m,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.163e54d1.chunk.js.map