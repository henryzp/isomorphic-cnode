webpackJsonp([2],{269:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,a){try{var u=t[o](a),i=u.value}catch(c){return void r(c)}return u.done?void e(i):Promise.resolve(i).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=r(262),l=o(s),f=r(270),p=o(f),h=r(271),v=n(h),y=r(267),d=function(e){function t(){var e,r,n,o;u(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return r=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.name="Add",n.needLogin=!0,n.View=p["default"],n.actions=v,n.initialState={showMenu:!1,tabs:[{type:"share",text:"分享"},{type:"ask",text:"问答"},{type:"job",text:"招聘"}],tab:"share",title:"",content:"",err:"",topic_id:"",suffix:'\n        <br/>\n        来自 <a class="from" href="https://github.com/Lucifier129/isomorphic-cnode">isomorphic-cnode</a>\n        '},n.methods={openMenu:y.openMenu,closeMenu:y.closeMenu,addTopic:function(){var e=this;return a(regeneratorRuntime.mark(function t(){var r,n,o,a,u,i,c,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store.actions,n=r.UPDATE_FIELD,o=r.ADD_TOPIC,a=e.store.getState(),u=a.title,i=a.content,!(u.trim().length<10)){t.next=10;break}return t.abrupt("return",n({key:"err",value:"title"}));case 10:if(""!==i.trim()){t.next=12;break}return t.abrupt("return",n({key:"err",value:"content"}));case 12:return t.prev=12,t.next=15,o();case 15:c=t.sent,s=c.topic_id,e.goReplace("/topic/"+s),t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](12),alert(t.t0.message);case 23:case"end":return t.stop()}},t,e,[[12,20]])}))()},updateTitle:function(e){var t=e.currentTarget,r=this.store.actions.UPDATE_FIELDS,n=t.value;r([{key:"title",value:n},{key:"err",value:""}])},updateContent:function(e){var t=e.currentTarget,r=this.store.actions.UPDATE_FIELDS,n=t.value;r([{key:"content",value:n},{key:"err",value:""}])},updateTab:function(e){var t=e.currentTarget,r=this.store.actions.UPDATE_FIELDS,n=t.value;r([{key:"tab",value:n},{key:"err",value:""}])}},o=r,i(n,o)}return c(t,e),t}(l["default"]);t["default"]=d}});