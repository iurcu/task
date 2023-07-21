(function(t){function e(e){for(var n,o,c=e[0],i=e[1],l=e[2],u=0,p=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var i=a[c];0!==s[i]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},6407:function(t,e,a){},7057:function(t,e,a){"use strict";var n=a("bb2d"),s=a.n(n);s.a},"85ec":function(t,e,a){},bb2d:function(t,e,a){},c1d5:function(t,e,a){"use strict";var n=a("6407"),s=a.n(n);s.a},cd49:function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),s=a("bc3a"),r=a.n(s);const o={},c=r.a.create(o);c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=c,window.axios=c,Object.defineProperties(t.prototype,{axios:{get(){return c}},$axios:{get(){return c}}})},n["a"].use(Plugin);Plugin;var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app-container"}},[a("Main")],1)},l=[],d=a("9ab4"),u=a("60a3"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto mt-4",attrs:{id:"task-container"}},[a("v-app-bar",{attrs:{dark:"",elevation:"1",color:"#58adbe"}},[a("v-toolbar-title",{staticClass:"mx-auto"},[t._v("TO DO")])],1),a("v-container",{staticClass:"d-flex flex-column",attrs:{id:"list-container"}},[t.tasks.length>0?a("h2",{staticClass:"ml-4 mt-3"},[t._v("Upcoming")]):t._e(),t._l(t.tasks,(function(e){return a("task",{key:e.id,attrs:{task:e},on:{delete:t.deleteById,update:t.update}})})),t.completed.length>0?a("h2",{staticClass:"ml-4 mt-3"},[t._v("Finished")]):t._e(),t._l(t.completed,(function(e){return a("completed-tasks",{key:e.id,attrs:{task:e},on:{delete:t.deleteById,update:t.update}})})),a("v-dialog",{attrs:{width:"700"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mt-auto mx-auto mt-7 mb-3",attrs:{id:"add-task-btn",fab:""}},"v-btn",s,!1),n),[a("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.showAddDialog,callback:function(e){t.showAddDialog=e},expression:"showAddDialog"}},[a("add-task",{on:{create:t.createTodo}})],1)],2)],1)},v=[],h=(a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mt-3"},[a("v-card-title",{staticClass:"headline"},[t._v(" "+t._s(t.task.name)+" "),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.moveToDone(t.task)}}},[a("v-icon",[t._v("mdi-check")])],1),a("v-btn",{staticClass:"ml-4",attrs:{icon:""},on:{click:function(e){return t.$emit("delete",t.task.id)}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-subtitle",[t._v(" "+t._s(t.task.description)+" ")])],1)}),f=[];let m=class extends u["d"]{moveToDone(t){return t.completed=!0,t}};Object(d["a"])([Object(u["c"])()],m.prototype,"task",void 0),Object(d["a"])([Object(u["b"])("update")],m.prototype,"moveToDone",null),m=Object(d["a"])([u["a"]],m);var b=m,k=b,y=a("2877"),_=a("6544"),O=a.n(_),w=a("8336"),x=a("b0af"),T=a("99d9"),g=a("132d"),j=a("2fa4"),C=Object(y["a"])(k,h,f,!1,null,"714cc040",null),V=C.exports;O()(C,{VBtn:w["a"],VCard:x["a"],VCardSubtitle:T["b"],VCardTitle:T["c"],VIcon:g["a"],VSpacer:j["a"]});const A=r.a.create({baseURL:"/"});A.defaults.headers.common["Content-Type"]="application/json";var P=A;class D{constructor(){this.completed=!1}}class $ extends D{constructor(t){super(),Object.assign(this,t)}}class S{static async getAll(){const t=await P.get(this.URL);return t.data.map(t=>new $(t))}static async update(t){return await P.put(`${this.URL}/${t.id}`,t).then(t=>new $(t.data)).catch(t=>{throw console.error(t),t})}static async create(t){return await P.post(this.URL,t).then(t=>new $(t.data)).catch(t=>{throw console.error(t),t})}static async delete(t){return await P.delete(this.URL+"/"+t).then().catch(t=>{throw console.error(t),t})}}S.URL="tasks";var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mt-3",attrs:{color:"#a0d0dc",dark:""}},[a("v-card-title",{staticClass:"headline"},[a("span",{staticClass:"text-decoration-line-through"},[t._v(t._s(t.task.name))]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.moveToNew(t.task)}}},[a("v-icon",[t._v("mdi-arrow-up")])],1),a("v-btn",{staticClass:"ml-4",attrs:{icon:""},on:{click:function(e){return t.$emit("delete",t.task.id)}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-subtitle",[t._v(" "+t._s(t.task.description)+" ")])],1)},E=[];let R=class extends u["d"]{moveToNew(t){return t.completed=!1,t}};Object(d["a"])([Object(u["c"])()],R.prototype,"task",void 0),Object(d["a"])([Object(u["b"])("update")],R.prototype,"moveToNew",null),R=Object(d["a"])([u["a"]],R);var I=R,U=I,L=Object(y["a"])(U,B,E,!1,null,"7c826894",null),M=L.exports;O()(L,{VBtn:w["a"],VCard:x["a"],VCardSubtitle:T["b"],VCardTitle:T["c"],VIcon:g["a"],VSpacer:j["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{staticClass:"headline",attrs:{id:"add-card-title"}},[t._v(" Add a TO DO ")]),a("div",{staticClass:"pa-2 mt-2"},[a("v-text-field",{staticClass:"mx-2",attrs:{label:"Name",color:"#58adbe",autofocus:"",rules:t.nameRules},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createTodo(e)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{staticClass:"mx-2",attrs:{label:"Description",color:"#58adbe"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createTodo(e)}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{id:"confirm-add-task-btn",tile:""},on:{click:t.createTodo}},[a("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1)},q=[];let F=class extends u["d"]{constructor(){super(...arguments),this.name="",this.description="",this.nameRules=[t=>!!t||"Name is required",t=>t&&t.length<=30||"Name must be less than 30 characters"]}createTodo(){if(this.name){const t=new D;t.name=this.name,t.description=this.description,this.$emit("create",t),this.name="",this.description=""}}};F=Object(d["a"])([u["a"]],F);var J=F,z=J,G=(a("7057"),a("8654")),H=Object(y["a"])(z,N,q,!1,null,"9b3279d6",null),K=H.exports;O()(H,{VBtn:w["a"],VCard:x["a"],VCardActions:T["a"],VCardTitle:T["c"],VIcon:g["a"],VSpacer:j["a"],VTextField:G["a"]});let Q=class extends u["d"]{constructor(){super(...arguments),this.tasks=new Array,this.completed=new Array,this.allTasks=new Array,this.showAddDialog=!1}mounted(){S.getAll().then(t=>{this.allTasks=t,this.updateArrays()})}update(t){S.update(t).then(t=>{this.allTasks=this.allTasks.map(e=>t.id==e.id?t:e),this.updateArrays()})}deleteById(t){S.delete(t).then(()=>{this.allTasks=this.allTasks.filter(e=>e.id!=t),this.updateArrays()})}updateArrays(){this.completed=[],this.tasks=[],this.allTasks.forEach(t=>{t.completed?this.completed.push(t):this.tasks.push(t)})}createTodo(t){this.showAddDialog=!1,S.create(t).then(t=>{this.allTasks.push(t),this.tasks.push(t)})}};Q=Object(d["a"])([Object(u["a"])({components:{AddTask:K,CompletedTasks:M,Task:V}})],Q);var W=Q,X=W,Y=(a("c1d5"),a("40dc")),Z=a("a523"),tt=a("169a"),et=a("2a7f"),at=Object(y["a"])(X,p,v,!1,null,"25563423",null),nt=at.exports;O()(at,{VAppBar:Y["a"],VBtn:w["a"],VCard:x["a"],VContainer:Z["a"],VDialog:tt["a"],VIcon:g["a"],VToolbarTitle:et["a"]});let st=class extends u["d"]{};st=Object(d["a"])([Object(u["a"])({components:{Main:nt}})],st);var rt=st,ot=rt,ct=(a("034f"),a("7496")),it=Object(y["a"])(ot,i,l,!1,null,null,null),lt=it.exports;O()(it,{VApp:ct["a"]});var dt=a("f309");n["a"].use(dt["a"]);var ut=new dt["a"]({});a("d5e8"),a("5363");n["a"].config.productionTip=!1,new n["a"]({vuetify:ut,render:t=>t(lt)}).$mount("#app")}});
//# sourceMappingURL=app.1d881646.js.map