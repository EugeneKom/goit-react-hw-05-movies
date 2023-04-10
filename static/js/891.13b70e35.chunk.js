"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[891],{9674:function(e,t,n){function r(e,t,n,r,c,a,o){try{var s=e[a](o),u=s.value}catch(i){return void n(i)}s.done?t(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var o=e.apply(t,n);function s(e){r(o,c,a,s,u,"next",e)}function u(e){r(o,c,a,s,u,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return h}});var a=n(7757),o=n.n(a),s="https://api.themoviedb.org/3",u="api_key=6628254a4cb0b774890e6f0759ab9dd7",i=function(){var e=c(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("\n  ".concat(s).concat("/trending/movie/day","?").concat(u,"&language=en"));case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n.results);case 11:throw new Error("Bad request".concat(t.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=c(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s).concat("/search/movie","?").concat(u,"&language=en&query=").concat(t));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r.results);case 11:throw new Error("Bad request".concat(n.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=c(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/movie/").concat(t,"?").concat(u,"&language=en-US"));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:throw new Error("Bad request".concat(n.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=c(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/movie/").concat(t,"/credits?").concat(u,"&language=en-US"));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:throw new Error("Bad request".concat(n.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=c(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/movie/").concat(t,"/reviews?").concat(u,"&language=en-US"));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r.results);case 11:throw new Error("Bad request".concat(n.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),h={fetchTopMovies:i,fetchFindMovies:f,fetchMovieToId:l,fetchActorMovieToId:p,fetchMovieReviewsToId:v}},7316:function(e,t,n){n.d(t,{Z:function(){return i}});var r,c=n(1087),a=n(7689),o=n(168),s=n(6444).ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n"]))),u=n(184),i=function(e){var t=e.films,n=(0,a.TH)();return(0,u.jsx)(s,{children:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})}},4891:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(3433),c=n(9439),a=n(2791),o=n(9674),s=n(1933),u=n(7316),i=n(184),f=function(e){var t=e.films;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)(u.Z,{films:t})]})},l=function(){var e=(0,a.useState)([]),t=(0,c.Z)(e,2),n=t[0],u=t[1],l=(0,s.useQuery)("movies",o.Z.fetchTopMovies),p=l.data,v=l.status;return(0,a.useEffect)((function(){u([]),"success"===v&&p.map((function(e){return u((function(t){return[].concat((0,r.Z)(t),[e])}))}))}),[p,v]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{films:n}),"loading"===v&&(0,i.jsx)("p",{children:"Loading..."})]})}}}]);
//# sourceMappingURL=891.13b70e35.chunk.js.map