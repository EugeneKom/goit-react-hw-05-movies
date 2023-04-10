"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[624],{9674:function(e,t,n){function r(e,t,n,r,c,a,o){try{var s=e[a](o),u=s.value}catch(i){return void n(i)}s.done?t(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var o=e.apply(t,n);function s(e){r(o,c,a,s,u,"next",e)}function u(e){r(o,c,a,s,u,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return v}});var a=n(7757),o=n.n(a),s="https://api.themoviedb.org/3",u="api_key=6628254a4cb0b774890e6f0759ab9dd7",i=function(){var e=c(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("\n  ".concat(s).concat("/trending/movie/day","?").concat(u,"&language=en"));case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n.results);case 11:throw new Error("Bad request".concat(t.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=c(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s).concat("/search/movie","?").concat(u,"&language=en&query=").concat(t));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r.results);case 11:throw new Error("Bad request".concat(n.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=c(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/movie/").concat(t,"?").concat(u,"&language=en-US"));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:throw new Error("Bad request".concat(n.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=c(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/movie/").concat(t,"/credits?").concat(u,"&language=en-US"));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:throw new Error("Bad request".concat(n.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=c(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/movie/").concat(t,"/reviews?").concat(u,"&language=en-US"));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r.results);case 11:throw new Error("Bad request".concat(n.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),v={fetchTopMovies:i,fetchFindMovies:p,fetchMovieToId:f,fetchActorMovieToId:h,fetchMovieReviewsToId:l}},5624:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r,c=n(9439),a=n(9674),o=n(2791),s=n(7689),u=n(168),i=n(6444).ZP.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-auto-rows: minmax(100px, auto);\n  list-style-type: none;\n  flex-wrap: wrap;\n  h3 {\n    margin: 5px 0px;\n  }\n"]))),p=n(184),f=function(e){var t=e.actors;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(i,{children:t.map((function(e){return e.profile_path?(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:e.name,width:90,height:120}),(0,p.jsx)("h3",{children:e.name}),(0,p.jsx)("span",{children:e.character})]},e.id):[]}))})})},h=function(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],r=t[1],u=(0,s.UO)().moviesId;return(0,o.useEffect)((function(){a.Z.fetchActorMovieToId(u).then((function(e){var t=e.cast;return r(t)}))}),[u]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"CAST"}),(0,p.jsx)(f,{actors:n})]})}}}]);
//# sourceMappingURL=624.4ca3c0d7.chunk.js.map