(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),i=c(4),s=c(1),b=(c(9),c(10),c(11),c(0)),d=function(t){var e=t.tabs,c=t.selectedTab,a=t.onTabSelected;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"Tab",className:c.id===t.id?"is-active":"",children:Object(b.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){return a(t)},children:t.title})},t.id)}))})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],l=function(){var t=Object(s.useState)(o[0]),e=Object(i.a)(t,2),c=e[0],a=e[1];return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(b.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)(d,{selectedTab:c,tabs:o,onTabSelected:function(t){c!==t&&a(t)}})}),Object(b.jsx)("div",{className:"block","data-cy":"tab-content",children:c.content})]})]})};n.a.render(Object(b.jsx)(l,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d7f3fdd4.chunk.js.map