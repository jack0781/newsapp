(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{65:function(e,t,a){e.exports=a.p+"static/media/news-default-image.013fb4a1.jpg"},66:function(e,t,a){e.exports=a(98)},71:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(20),l=a.n(o),s=(a(71),a(30)),m=a(6),u=a(14),i=a(21),E=a(61),p=a(62),d=a(26),b=a(5),f={newsLoading:!1,newsSourceLoading:!1,newsSource:[],newsItems:[],newsItemsTotal:null,pageSize:50,theme:null,newsSourceError:!1,topNewsError:!1},g={bookmarkItems:[]},k=Object(i.combineReducers)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_THEME":case"CHANGE_THEME":return Object(b.a)(Object(b.a)({},e),{},{theme:n});case"SET_NEWS_LOADING":return Object(b.a)(Object(b.a)({},e),{},{newsLoading:!0});case"SET_TOP_NEWS":return Object(b.a)(Object(b.a)({},e),{},{topNewsError:!1,newsItems:[].concat(Object(d.a)(e.newsItems),Object(d.a)(n.articles)),newsItemsTotal:n.totalResults,newsLoading:!1});case"CLEAR_TOP_NEWS":return Object(b.a)(Object(b.a)({},e),{},{newsItems:[],newsItemsTotal:null});case"TOP_NEWS_ERROR":return Object(b.a)(Object(b.a)({},e),{},{newsItems:[],newsLoading:!1,newsItemsTotal:0,topNewsError:!0});case"SET_SOURCE_LOADING":return Object(b.a)(Object(b.a)({},e),{},{newsSourceLoading:!0});case"GET_NEWS_SOURCE":return Object(b.a)(Object(b.a)({},e),{},{newsSourceError:!1,newsSourceLoading:!1,newsSource:n});case"NEWS_SOURCE_ERROR":return Object(b.a)(Object(b.a)({},e),{},{newsSourceLoading:!1,newsSource:[],newsSourceError:!0});default:return e}},bookmarks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"BOOKMARK_ITEM":return Object(b.a)(Object(b.a)({},e),{},{bookmarkItems:[n].concat(Object(d.a)(e.bookmarkItems))});case"UNBOOKMARK_ITEM":return Object(b.a)(Object(b.a)({},e),{},{bookmarkItems:e.bookmarkItems.filter(function(e){return e.title!==n.title})});case"GET_BOOKMARK_ITEMS":return Object(b.a)(Object(b.a)({},e),{},{bookmarkItems:n});default:return e}}}),h=[p.a],O=Object(i.createStore)(k,{},Object(E.composeWithDevTools)(i.applyMiddleware.apply(void 0,h))),v=a(19),w=a(16),S=a(11),y=a(8),N=a(17),j=a(24),I=a(38),T=a(25),_=Object(u.b)(function(e){return{news:e.news}},null)(function(e){var t=e.onCategorySourceSearch,a=e.news,n=Object(r.useState)("category"),o=Object(v.a)(n,2),l=o[0],s=o[1],m=Object(r.useState)(""),u=Object(v.a)(m,2),i=u[0],E=u[1],p=Object(r.useState)(""),d=Object(v.a)(p,2),b=d[0],f=d[1],g=Object(r.useState)(""),k=Object(v.a)(g,2),h=k[0],O=k[1],_=Object(r.useState)(""),C=Object(v.a)(_,2),R=C[0],x=C[1];return c.a.createElement(w.a,{fluid:!0,className:"heroContainer-".concat(a.theme)},c.a.createElement(S.a,{className:"justify-content-md-center"},c.a.createElement(y.a,{xs:!0,lg:"8"},c.a.createElement(N.a,{className:"mt-3",onSubmit:function(e){e.preventDefault(),(i||h)&&t("top-headlines?country=".concat(i,"&category=").concat(b,"&sources=").concat(h,"&q=").concat(R))}},c.a.createElement(N.a.Row,null,"category"===l&&c.a.createElement(r.Fragment,null,c.a.createElement(y.a,{md:"4",sm:"4"},c.a.createElement(N.a.Group,null,c.a.createElement(N.a.Control,{as:"select",defaultValue:i,onChange:function(e){return E(e.target.value)}},c.a.createElement("option",{value:""},"Select Country"),c.a.createElement("option",{value:"in"},"India"),c.a.createElement("option",{value:"us"},"United States of America"),c.a.createElement("option",{value:"gb"},"United Kingdom"),c.a.createElement("option",{value:"ca"},"Canada"),c.a.createElement("option",{value:"cn"},"China"),c.a.createElement("option",{value:"ru"},"Russia"),c.a.createElement("option",{value:"fr"},"France"),c.a.createElement("option",{value:"ph"},"Philippines"),c.a.createElement("option",{value:"ae"},"United Arab Emirates"),c.a.createElement("option",{value:"au"},"Australia"),c.a.createElement("option",{value:"ar"},"Argentina"),c.a.createElement("option",{value:"kr"},"South Korea"),c.a.createElement("option",{value:"id"},"Indonesia")))),c.a.createElement(y.a,{md:"3",sm:"3"},c.a.createElement(N.a.Group,null,c.a.createElement(N.a.Control,{as:"select",defaultValue:b,onChange:function(e){return f(e.target.value)}},c.a.createElement("option",{value:""},"All Category"),c.a.createElement("option",{value:"business"},"Business"),c.a.createElement("option",{value:"entertainment"},"Entertainment"),c.a.createElement("option",{value:"general"},"General"),c.a.createElement("option",{value:"health"},"Health"),c.a.createElement("option",{value:"science"},"Science"),c.a.createElement("option",{value:"sports"},"Sports"),c.a.createElement("option",{value:"technology"},"Technology"))))),"source"===l&&c.a.createElement(r.Fragment,null,c.a.createElement(y.a,{md:"7",sm:"7"},c.a.createElement(N.a.Group,null,c.a.createElement(N.a.Control,{as:"select",defaultValue:h,onChange:function(e){return O(e.target.value)}},c.a.createElement("option",{value:""}," Choose Source"),a.newsSource.map(function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)}),0===a.newsSource.length&&!a.newsSourceError&&c.a.createElement("option",{value:""},"Loading News Source..."),0===a.newsSource.length&&a.newsSourceError&&c.a.createElement("option",{value:""},"Error Loading News Source"))))),c.a.createElement(y.a,{md:"3",sm:"3",className:"mb-3 "},c.a.createElement(N.a.Control,{placeholder:"Keywords (optional)",name:"searchQuery",value:R,onChange:function(e){return x(e.target.value)}})),c.a.createElement(y.a,{md:"2",sm:"2",className:"mb-3 "},c.a.createElement(j.a,{variant:a.theme,type:"submit",className:"mr-1"},a.newsLoading?c.a.createElement(r.Fragment,null,c.a.createElement(I.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),c.a.createElement("span",{className:"sr-only"},"Loading...")):c.a.createElement(T.d,null)),c.a.createElement(j.a,{variant:a.theme,onClick:function(){"category"===l?(E(""),f(""),s("source")):(O(""),s("category"))}},c.a.createElement(T.b,null))))))))}),C=a(31),R=a.n(C),x=a(46),L=a(63),A=a.n(L).a.create({baseURL:"https://newsapi.org/v2/"});n="27ed44df19df4acda05a1d8ded16d302";var M=a(27),B=a(47),K=a(64),W=a.n(K),G=a(65),U=a.n(G),F=Object(u.b)(function(e){return{bookmarkItems:e.bookmarks.bookmarkItems}},{bookmarkItem:function(e){return function(t,a){var n=a().bookmarks.bookmarkItems;localStorage.setItem("bookmarks",JSON.stringify([e].concat(Object(d.a)(n)))),t({type:"BOOKMARK_ITEM",payload:e})}},unBookmarkItem:function(e){return function(t,a){var n=a().bookmarks.bookmarkItems.filter(function(t){return t!==e});localStorage.setItem("bookmarks",JSON.stringify(n)),t({type:"UNBOOKMARK_ITEM",payload:e})}}})(function(e){var t=e.item,a=e.theme,n=e.bookmarkItem,r=e.unBookmarkItem,o=e.bookmarkItems;return c.a.createElement(y.a,{xs:12,sm:6,md:6,lg:4,xl:4,className:"my-2"},c.a.createElement(M.a,null,t.urlToImage?c.a.createElement("div",{className:"urlImage",style:{backgroundImage:"url(".concat(t.urlToImage,")")}}):c.a.createElement("div",{className:"urlImage",style:{backgroundImage:"url(".concat(U.a,")")}}),c.a.createElement(M.a.Body,null,c.a.createElement(M.a.Title,null,c.a.createElement(B.a,{lines:2,ellipsis:c.a.createElement("span",null,"...")},t.title)),c.a.createElement(M.a.Subtitle,{className:"mb-2 text-muted"},t.source.name," ",c.a.createElement("br",null),c.a.createElement("span",{style:{fontWeight:"normal"}},t.author)),c.a.createElement(M.a.Text,null,c.a.createElement(B.a,{lines:3,ellipsis:c.a.createElement("span",null,"...")},t.description)),c.a.createElement(j.a,{variant:a,href:t.url,target:"_blank"},"Go to Page"),function(e){if(null!==o)return o.findIndex(function(t){return t.title===e.title})>-1}(t)?c.a.createElement(T.a,{className:"float-right mt-2 icon-button",size:"1.5em",onClick:function(){return function(e){r(e)}(t)}}):c.a.createElement(T.c,{className:"float-right mt-2 icon-button",size:"1.5em",onClick:function(){return function(e){n(e)}(t)}})),c.a.createElement(M.a.Footer,null,c.a.createElement("small",{className:"text-muted"},"Published: ",c.a.createElement(W.a,{format:"YYYY/MM/DD",date:t.publishedAt})))))}),P=function(e){var t=e.newsItems,a=e.loading,n=e.newsItemsTotal,r=e.theme,o=e.loadMore;return c.a.createElement(w.a,null,null===n||a?null:c.a.createElement(S.a,{className:"py-3"},c.a.createElement(y.a,{xs:12,sm:12},c.a.createElement("p",{className:"h5  text-center"},n," News Result(s)"))),null!==n&&c.a.createElement(S.a,{className:"justify-content-md-center mb-4"},t.map(function(e,t){return c.a.createElement(F,{key:t,item:e,theme:r})})),a&&c.a.createElement(S.a,{className:"justify-content-md-center py-4"},c.a.createElement(y.a,{xs:12,sm:8,className:"text-center"},c.a.createElement(I.a,{animation:"border",size:"lg"}))),t.length<n&&!a&&c.a.createElement(S.a,{className:"justify-content-md-center py-2"},c.a.createElement(y.a,{xs:12,sm:12,className:"text-center"},c.a.createElement(j.a,{className:"py-2",variant:r,onClick:o},"Load More"))))},D=Object(u.b)(function(e){return{news:e.news}},{setTopNews:function(e,t){return function(){var a=Object(x.a)(R.a.mark(function a(r,c){var o,l;return R.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:"SET_NEWS_LOADING"}),a.prev=1,1===t&&r({type:"CLEAR_TOP_NEWS"}),o=c().news.pageSize,a.next=6,A.get("".concat(e,"&apiKey=").concat(n,"&page=").concat(t,"&pageSize=").concat(o));case 6:(l=a.sent)&&r({type:"SET_TOP_NEWS",payload:l.data}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),r({type:"TOP_NEWS_ERROR"});case 13:case"end":return a.stop()}},a,null,[[1,10]])}));return function(e,t){return a.apply(this,arguments)}}()},clearTopNews:function(){return{type:"CLEAR_TOP_NEWS"}}})(function(e){var t=e.setTopNews,a=e.news,n=e.clearTopNews,o=Object(r.useState)(1),l=Object(v.a)(o,2),s=l[0],m=l[1],u=Object(r.useState)(""),i=Object(v.a)(u,2),E=i[0],p=i[1];return Object(r.useEffect)(function(){if(E){var e="".concat(E);t(e,s)}return function(){n()}},[E,s]),c.a.createElement(r.Fragment,null,c.a.createElement(_,{onCategorySourceSearch:function(e){!function(e){m(1),p(e)}(e)}}),c.a.createElement(P,{newsItemsTotal:a.newsItemsTotal,loading:a.newsLoading,newsItems:a.newsItems,theme:a.theme,loadMore:function(){m(s+1)}}))}),z=Object(u.b)(function(e){return{bookmarkItems:e.bookmarks.bookmarkItems,theme:e.news.theme}},null)(function(e){var t=e.bookmarkItems,a=e.theme;return c.a.createElement(r.Fragment,null,c.a.createElement(w.a,{fluid:!0,className:"heroContainer-".concat(a)},c.a.createElement(S.a,{className:"justify-content-md-center py-4"},c.a.createElement(y.a,{xs:!0,lg:"8"},c.a.createElement("p",{className:"h3 text-center"},"Bookmarks")))),c.a.createElement(w.a,null,c.a.createElement(S.a,{className:"py-4"},c.a.createElement(y.a,{xs:12,sm:12},c.a.createElement("p",{className:"h5  text-center"},0===t.length?c.a.createElement(r.Fragment,null,"You have ",t.length," Bookmarks(s)"):c.a.createElement(r.Fragment,null," ",t.length," Bookmarks(s)")))),c.a.createElement(S.a,{className:"justify-content-md-center mb-4 pb-4"},t.map(function(e,t){return c.a.createElement(F,{key:t,item:e,theme:a})}))))}),H=function(){return c.a.createElement(w.a,null,c.a.createElement(S.a,{className:"justify-content-md-center my-5"},c.a.createElement(y.a,{sm:8},c.a.createElement("p",{className:"h3 text-center"},"Page Not Found"))))},J=a(32),Y=a(33),V=Object(u.b)(function(e){return{news:e.news}},{changeTheme:function(e){return localStorage.setItem("theme",e),document.body.style.backgroundColor="dark"===e?"#ccc":"#fff",{type:"CHANGE_THEME",payload:e}}})(function(e){var t=e.news,a=e.changeTheme;return c.a.createElement(J.a,{collapseOnSelect:!0,expand:"lg",bg:t.theme,variant:t.theme},c.a.createElement(w.a,null,c.a.createElement(J.a.Brand,{href:"/"},"News App"),c.a.createElement(J.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),c.a.createElement(J.a.Collapse,{id:"responsive-navbar-nav"},c.a.createElement(Y.a,{className:"ml-auto"},c.a.createElement(Y.a.Link,{activeClassName:"active",exact:!0,as:s.b,to:"/"},"Top News"),c.a.createElement(Y.a.Link,{activeClassName:"active",as:s.b,to:"/bookmarks"},"Bookmarks"),c.a.createElement(Y.a.Link,null,c.a.createElement("div",{onClick:function(){return a("dark"===t.theme?"light":"dark")},className:"circle-".concat("dark"===t.theme?"light":"dark")}))))))}),q=function(){return Object(r.useEffect)(function(){O.dispatch(function(){var e=Object(x.a)(R.a.mark(function e(t){var a;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"SET_SOURCE_LOADING"}),e.prev=1,e.next=4,A.get("sources?apiKey=".concat(n));case 4:(a=e.sent)&&t({type:"GET_NEWS_SOURCE",payload:a.data.sources}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"NEWS_SOURCE_ERROR"});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()),O.dispatch(function(){var e=localStorage.getItem("theme");return void 0!==e&&null!==e||(e="dark",document.body.style.backgroundColor="#ccc",localStorage.setItem("theme",e)),document.body.style.backgroundColor="dark"===e?"#ccc":"#fff",{type:"SET_THEME",payload:e}}()),O.dispatch(function(){var e=localStorage.getItem("bookmarks");return{type:"GET_BOOKMARK_ITEMS",payload:e=null===e?[]:JSON.parse(e)}}())},[]),c.a.createElement(u.a,{store:O},c.a.createElement(s.a,null,c.a.createElement(r.Fragment,null,c.a.createElement(V,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:D}),c.a.createElement(m.a,{path:"/bookmarks",exact:!0,component:z}),c.a.createElement(m.a,{component:H})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[66,1,2]]]);
//# sourceMappingURL=main.1b9fcb25.chunk.js.map