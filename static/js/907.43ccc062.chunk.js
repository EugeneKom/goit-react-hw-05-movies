"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[907],{9674:function(e,n,t){function r(e,n,t,r,c,a,o){try{var s=e[a](o),i=s.value}catch(u){return void t(u)}s.done?n(i):Promise.resolve(i).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var o=e.apply(n,t);function s(e){r(o,c,a,s,i,"next",e)}function i(e){r(o,c,a,s,i,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return f}});var a=t(7757),o=t.n(a),s="https://api.themoviedb.org/3",i="api_key=6628254a4cb0b774890e6f0759ab9dd7",u=function(){var e=c(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("\n  ".concat(s).concat("/trending/movie/day","?").concat(i,"&language=en"));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t.results);case 11:throw new Error("Bad request".concat(n.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=c(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s).concat("/search/movie","?").concat(i,"&language=en&query=").concat(n));case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r.results);case 11:throw new Error("Bad request".concat(t.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=c(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/movie/").concat(n,"?").concat(i,"&language=en-US"));case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:throw new Error("Bad request".concat(t.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=c(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/movie/").concat(n,"/credits?").concat(i,"&language=en-US"));case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:throw new Error("Bad request".concat(t.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=c(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/movie/").concat(n,"/reviews?").concat(i,"&language=en-US"));case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r.results);case 11:throw new Error("Bad request".concat(t.status));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),f={fetchTopMovies:u,fetchFindMovies:l,fetchMovieToId:d,fetchActorMovieToId:h,fetchMovieReviewsToId:p}},7907:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,c,a=t(9439),o=t(7689),s=t(2791),i=t(9674),u=t(1087),l=t(168),d=t(6444),h=d.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  gap: 10px;\n  h2 {\n    text-align: center;\n  }\n  ul {\n    list-style-type: none;\n    display: flex;\n    gap: 20px;\n  }\n  a {\n    width: 130px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    border: 1px solid;\n    border-radius: 15px;\n    text-decoration: none;\n    text-transform: uppercase;\n    font-weight: bold;\n    color: blueviolet;\n  }\n"]))),p=d.ZP.ul(c||(c=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  & > ul {\n  }\n"]))),f=t(184),v=function(e){var n,t,r=e.detailsMovie,c=r.title,a=r.overview,s=r.genres,i=r.backdrop_path,l=r.vote_average,d=null!==(n=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies",v="".concat(l.toFixed(1)).replace(".","");return(0,f.jsxs)(h,{children:[(0,f.jsx)(u.rU,{to:d,children:"Go back"}),(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(i),alt:c,width:330,height:240}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:c}),(0,f.jsxs)(p,{children:[(0,f.jsxs)("li",{children:["User Score ",v,"%"]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:a})]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("ul",{children:s.map((function(e){var n=e.id,t=e.name;return(0,f.jsx)("li",{children:t},n)}))})]})]})]}),(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"cast",state:{from:d},children:"cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"reviews",state:{from:d},children:"reviews"})})]})]})},x=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],r=n[1],c=(0,o.UO)().moviesId;return(0,s.useEffect)((function(){i.Z.fetchMovieToId(c).then(r)}),[c]),(0,f.jsxs)(f.Fragment,{children:[0===t.length?(0,f.jsx)("div",{children:"Loading..."}):(0,f.jsx)(v,{detailsMovie:t}),(0,f.jsx)(o.j3,{})]})}}}]);
//# sourceMappingURL=907.43ccc062.chunk.js.map