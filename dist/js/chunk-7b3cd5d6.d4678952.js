(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b3cd5d6"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,c){try{var i=t[a](c),l=i.value}catch(s){return void r(s)}i.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var c=t.apply(e,r);function i(t){n(c,o,a,i,l,"next",t)}function l(t){n(c,o,a,i,l,"throw",t)}i(void 0)}))}}},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof O?e:O,a=Object.create(o.prototype),c=new E(n||[]);return a._invoke=k(t,r,c),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var d="suspendedStart",f="suspendedYield",b="executing",h="completed",p={};function O(){}function j(){}function m(){}var v={};l(v,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(R([])));g&&g!==r&&n.call(g,a)&&(v=g);var w=m.prototype=O.prototype=Object.create(v);function T(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,a,c,i){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(d).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,i)}))}i(l.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function k(t,e,r){var n=d;return function(o,a){if(n===b)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return q()}r.method=o,r.arg=a;while(1){var c=r.delegate;if(c){var i=L(c,r);if(i){if(i===p)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=b;var l=u(t,e,r);if("normal"===l.type){if(n=r.done?h:f,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=h,r.method="throw",r.arg=l.arg)}}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function R(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:q}}function q(){return{value:e,done:!0}}return j.prototype=m,l(w,"constructor",m),l(m,"constructor",j),j.displayName=l(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,i,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},T(x.prototype),l(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new x(s(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},T(w),l(w,i,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=R,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(z),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var l=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(l&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),z(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},a1c6:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o=Object(n["f"])("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[Object(n["f"])("li",{class:"nav-item",role:"presentation"},[Object(n["f"])("button",{class:"nav-link active",id:"providers-tab","data-bs-toggle":"tab","data-bs-target":"#providers",type:"button",role:"tab","aria-controls":"providers","aria-selected":"true"}," Provider Findings ")]),Object(n["f"])("li",{class:"nav-item",role:"presentation"},[Object(n["f"])("button",{class:"nav-link",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#provreq",type:"button",role:"tab","aria-controls":"home","aria-selected":"false"}," Provider requests ")]),Object(n["f"])("li",{class:"nav-item",role:"presentation"},[Object(n["f"])("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#accept",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"}," Accepted ")]),Object(n["f"])("li",{class:"nav-item",role:"presentation"},[Object(n["f"])("button",{class:"nav-link",id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#reject",type:"button",role:"tab","aria-controls":"contact","aria-selected":"false"}," Rejected ")])],-1),a={class:"tab-content",id:"myTabContent"},c={class:"tab-pane fade show active",id:"providers",role:"tabpanel","aria-labelledby":"providers-tab"},i={class:"table"},l=Object(n["f"])("thead",null,[Object(n["f"])("tr",null,[Object(n["f"])("th",{scope:"col"},"Date"),Object(n["f"])("th",{scope:"col"},"Provider"),Object(n["f"])("th",{scope:"col"},"Recommendation"),Object(n["f"])("th",{scope:"col"},"Summary"),Object(n["f"])("th",{scope:"col"},"Explanation"),Object(n["f"])("th",{scope:"col"},"Others")])],-1),s={scope:"row"},u={class:"tab-pane fade",id:"provreq",role:"tabpanel","aria-labelledby":"home-tab"},d={class:"table"},f=Object(n["f"])("thead",null,[Object(n["f"])("tr",null,[Object(n["f"])("th",{scope:"col"},"Date"),Object(n["f"])("th",{scope:"col"},"Provider"),Object(n["f"])("th",{scope:"col"},"Company"),Object(n["f"])("th",{scope:"col"},"Recommendation"),Object(n["f"])("th",{scope:"col"},"Summary"),Object(n["f"])("th",{scope:"col"},"Explanation"),Object(n["f"])("th",{scope:"col"},"FIles"),Object(n["f"])("th",{scope:"col"},"Response"),Object(n["f"])("th",{scope:"col"},"Recommendation to")])],-1),b={scope:"row"},h={class:"tab-pane fade",id:"accept",role:"tabpanel","aria-labelledby":"profile-tab"},p={class:"table"},O=Object(n["f"])("thead",null,[Object(n["f"])("tr",null,[Object(n["f"])("th",{scope:"col"},"Date"),Object(n["f"])("th",{scope:"col"},"Provider"),Object(n["f"])("th",{scope:"col"},"Recommendation"),Object(n["f"])("th",{scope:"col"},"Medical Order"),Object(n["f"])("th",{scope:"col"},"Others")])],-1),j={scope:"row"},m={class:"tab-pane fade",id:"reject",role:"tabpanel","aria-labelledby":"contact-tab"},v={class:"table"},y=Object(n["f"])("thead",null,[Object(n["f"])("tr",null,[Object(n["f"])("th",{scope:"col"},"Date"),Object(n["f"])("th",{scope:"col"},"Provider"),Object(n["f"])("th",{scope:"col"},"Recommendation"),Object(n["f"])("th",{scope:"col"},"Medical Order"),Object(n["f"])("th",{scope:"col"},"Others")])],-1),g={scope:"row"};function w(t,e,r,w,T,x){return Object(n["r"])(),Object(n["e"])("div",null,[o,Object(n["f"])("div",a,[Object(n["f"])("div",c,[Object(n["f"])("table",i,[l,Object(n["f"])("tbody",null,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(T.request.providerFunding,(function(t,e){return Object(n["r"])(),Object(n["e"])("tr",{key:e},[Object(n["f"])("th",s,Object(n["z"])(t.date),1),Object(n["f"])("td",null,Object(n["z"])(t.provider),1),Object(n["f"])("td",null,Object(n["z"])(t.recommendation),1),Object(n["f"])("td",null,Object(n["z"])(t.summary),1),Object(n["f"])("td",null,Object(n["z"])(t.explanation),1),Object(n["f"])("td",null,Object(n["z"])(t.others),1)])})),128))])])]),Object(n["f"])("div",u,[Object(n["f"])("table",d,[f,Object(n["f"])("tbody",null,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(T.request.providerRequest,(function(t,e){return Object(n["r"])(),Object(n["e"])("tr",{key:e},[Object(n["f"])("th",b,Object(n["z"])(t.date),1),Object(n["f"])("td",null,Object(n["z"])(t.provider),1),Object(n["f"])("td",null,Object(n["z"])(t.company),1),Object(n["f"])("td",null,Object(n["z"])(t.recommendation),1),Object(n["f"])("td",null,Object(n["z"])(t.summary),1),Object(n["f"])("td",null,Object(n["z"])(t.explanation),1),Object(n["f"])("td",null,Object(n["z"])(t.files),1),Object(n["f"])("td",null,Object(n["z"])(t.respone),1),Object(n["f"])("td",null,Object(n["z"])(t.recommendation_to),1)])})),128))])])]),Object(n["f"])("div",h,[Object(n["f"])("table",p,[O,Object(n["f"])("tbody",null,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(T.request.accepted,(function(t,e){return Object(n["r"])(),Object(n["e"])("tr",{key:e},[Object(n["f"])("th",j,Object(n["z"])(t.date),1),Object(n["f"])("td",null,Object(n["z"])(t.provider),1),Object(n["f"])("td",null,Object(n["z"])(t.recommendation),1),Object(n["f"])("td",null,Object(n["z"])(t.medical_orders),1),Object(n["f"])("td",null,Object(n["z"])(t.others),1)])})),128))])])]),Object(n["f"])("div",m,[Object(n["f"])("table",v,[y,Object(n["f"])("tbody",null,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["v"])(T.request.rejected,(function(t,e){return Object(n["r"])(),Object(n["e"])("tr",{key:e},[Object(n["f"])("th",g,Object(n["z"])(t.date),1),Object(n["f"])("td",null,Object(n["z"])(t.provider),1),Object(n["f"])("td",null,Object(n["z"])(t.recommendation),1),Object(n["f"])("td",null,Object(n["z"])(t.medical_orders),1),Object(n["f"])("td",null,Object(n["z"])(t.others),1)])})),128))])])])])])}var T=r("1da1"),x=(r("96cf"),r("bc3a")),k=r.n(x),L={name:"rphpatients",data:function(){return{request:{providerFunding:[{id:1,date:"2022/01/01",provider:"Jon",recommendation:"OTTO",summary:"Mark",explanation:"OTTO",others:"@mdo"},{id:2,date:"2022/01/01",provider:"Doe",recommendation:"OTTO",summary:"Mark",explanation:"OTTO",others:"@mdo"}],providerRequest:[{id:1,date:"2022/01/01",provider:"Jon",company:"OTTO",recommendation:"OTTO",summary:"Mark",explanation:"OTTO",files:"@mdo",respone:"response",recommendation_to:"12345"},{id:2,date:"2022/01/01",provider:"Rok",company:"OTTO",recommendation:"OTTO",summary:"Mark",explanation:"OTTO",files:"@mdo",respone:"response",recommendation_to:"12345"}],accepted:[{id:1,date:"2022/01/01",provider:"Rok",recommendation:"OTTO",medical_orders:"Mark",others:"@mdo"},{id:2,date:"2022/01/01",provider:"Jon",recommendation:"OTTO",medical_orders:"Mark",others:"@mdo"}],rejected:[{id:1,date:"2022/01/01",provider:"Rok",recommendation:"OTTO",medical_orders:"Mark",others:"@mdo"},{id:2,date:"2022/01/01",provider:"Jon",recommendation:"OTTO",medical_orders:"Mark",others:"@mdo"}]},request_num:""}},components:{},mounted:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t,n={headers:{Authorization:"Token ".concat(localStorage.getItem("Token"))},query_params:{accid:"".concat(t.$store.state.user.id)}},e.next=4,k.a.get("https://jirroreo.pythonanywhere.com/request/details",n).then((function(t){console.log(t)}));case 4:return e.next=6,k.a.get("https://jirroreo.pythonanywhere.com/request/details",n).then((function(t){r.request_num=t.data.data}));case 6:case"end":return e.stop()}}),e)})))()}},_=r("6b0d"),z=r.n(_);const E=z()(L,[["render",w]]);e["default"]=E}}]);
//# sourceMappingURL=chunk-7b3cd5d6.d4678952.js.map