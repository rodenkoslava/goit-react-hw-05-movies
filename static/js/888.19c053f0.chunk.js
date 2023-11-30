"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{6713:function(n,e,t){t.d(e,{Hx:function(){return f},Y5:function(){return p},cl:function(){return s},wr:function(){return o},xc:function(){return l}});var r=t(5861),a=t(7757),c=t.n(a),u=t(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="api_key=9ea4827a4458d4f248b702dc6c1b9923",o=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?".concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"?").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/credits?").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/reviews?").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2049:function(n,e,t){t.d(e,{Z:function(){return g}});var r,a,c,u,i,o=t(7689),s=t(1087),p=t(168),l=t(6444),f=l.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin: 0;\n  justify-content: center;\n"]))),d=l.ZP.li(a||(a=(0,p.Z)(["\n  list-style: none;\n  padding: 15px;\n  margin: 0;\n"]))),x=l.ZP.div(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  text-align: center;\n  width: 200px;\n  height: 355px;\n\n  :hover {\n    scale: 1.1;\n  }\n"]))),h=l.ZP.img(u||(u=(0,p.Z)(["\n  width: 250px;\n"]))),v=l.ZP.p(i||(i=(0,p.Z)(["\n  font-size: 20px;\n"]))),m=t(184),g=function(n){var e=n.movies,t=(0,o.TH)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(f,{children:e.map((function(n){var e=n.id,r=n.title,a=n.name,c=n.poster_path;return(0,m.jsx)(d,{children:(0,m.jsx)(s.rU,{to:"/movies/".concat(e),state:{from:t},children:(0,m.jsxs)(x,{children:[c?(0,m.jsx)(h,{src:"https://image.tmdb.org/t/p/w200".concat(c),alt:null!==r&&void 0!==r?r:a}):(0,m.jsx)(h,{src:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:null!==r&&void 0!==r?r:a}),(0,m.jsx)(v,{children:null!==r&&void 0!==r?r:a})]})})},e)}))})})}},1888:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,c,u,i=t(5861),o=t(9439),s=t(7757),p=t.n(s),l=t(2791),f=t(168),d=t(6444),x=d.ZP.form(r||(r=(0,f.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n"]))),h=d.ZP.input(a||(a=(0,f.Z)(["\n  flex: 1;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin-right: 10px;\n"]))),v=d.ZP.button(c||(c=(0,f.Z)(["\n  padding: 10px 20px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n"]))),m=t(184),g=function(n){var e=n.handleSearch,t=(0,l.useState)(""),r=(0,o.Z)(t,2),a=r[0],c=r[1];return(0,m.jsxs)(x,{onSubmit:function(n){n.preventDefault(),""!==a.trim()?(e(a.trim()),c("")):alert("Enter the title of the movie")},children:[(0,m.jsx)(h,{type:"text",name:"searchQuery",value:a,autoComplete:"off",autoFocus:!0,placeholder:"Search for a movie...",onChange:function(n){var e=n.target;return c(e.value)}}),(0,m.jsx)(v,{children:"Search"})]})},Z=t(2049),b=t(9154),w=t(1087),j=t(6713),y=d.ZP.div(u||(u=(0,f.Z)(["\n  text-align: center;\n  padding-top: 20px;\n  padding-bottom: 20px;\n\n  h1 {\n    margin-bottom: 20px;\n  }\n\n  p {\n    color: red;\n  }\n"]))),k=function(){var n=(0,w.lr)({query:""}),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)([]),c=(0,o.Z)(a,2),u=c[0],s=c[1],f=(0,l.useState)(!1),d=(0,o.Z)(f,2),x=d[0],h=d[1],v=(0,l.useState)(!1),k=(0,o.Z)(v,2),S=k[0],P=k[1],U=(0,l.useState)(!1),_=(0,o.Z)(U,2),q=_[0],C=_[1],E=t.get("query");return(0,l.useEffect)((function(){if(E){var n=function(){var n=(0,i.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h(!0),n.prev=1,n.next=4,(0,j.cl)(E);case 4:e=n.sent,s(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),P(n.t0);case 11:return n.prev=11,h(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[E,q]),(0,m.jsxs)(y,{children:[(0,m.jsx)("h1",{children:"Movies Search"}),(0,m.jsx)(g,{handleSearch:function(n){r({query:n}),C(!0)}}),x&&(0,m.jsx)(b.Z,{}),S&&(0,m.jsxs)("p",{children:["Error: ",S.message]}),0===u.length&&q&&!x&&(0,m.jsx)("p",{children:"No movies found."}),u.length>0&&(0,m.jsx)(Z.Z,{movies:u})]})}}}]);
//# sourceMappingURL=888.19c053f0.chunk.js.map