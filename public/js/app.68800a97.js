(function(t){function e(e){for(var o,n,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],o=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(o=!1)}o&&(a.splice(e--,1),t=n(n.s=s[0]))}return t}var o={},i={app:0},a=[];function n(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=o,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"11cc":function(t,e,s){"use strict";s("1297")},1297:function(t,e,s){},"16e3":function(t,e,s){t.exports=s.p+"img/todo.b8e08cd1.svg"},2459:function(t,e,s){t.exports=s.p+"img/mobile-messages.61b74373.svg"},"28c1":function(t,e,s){t.exports=s.p+"img/empty.4eade343.svg"},"3fa0":function(t,e,s){t.exports=s.p+"img/inprogress.c3c06936.svg"},4304:function(t,e,s){t.exports=s.p+"img/survey.d7983ee6.svg"},4325:function(t,e,s){t.exports=s.p+"img/review.244323d8.svg"},4555:function(t,e,s){var o={"./code-review.svg":"8729","./design-notes.svg":"ce6e","./done.svg":"7317","./empty.svg":"28c1","./inprogress.svg":"3fa0","./login.svg":"ce03","./mobile-messages.svg":"2459","./mobile-testing.svg":"5bfd","./programming.svg":"9c74","./report.svg":"bbee","./review.svg":"4325","./survey.svg":"4304","./todo.svg":"16e3","./usability-testing.svg":"6147"};function i(t){var e=a(t);return s(e)}function a(t){if(!s.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=a,t.exports=i,i.id="4555"},5336:function(t,e,s){t.exports=s.p+"img/kanbant_logo.599e2bab.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e792"),s("0cdd");var o=s("2b0e"),i=s("5f5b");s("ab8b"),s("2dd8");o["default"].use(i["a"]);var a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],r={name:"App"},l=r,c=(s("86b9"),s("2877")),u=Object(c["a"])(l,a,n,!1,null,null,null),d=u.exports,p=s("8c4f"),m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"background-template h-100"},[e("b-container",{staticClass:"h-100"},[e("b-row",{staticClass:"h-100"},[e("b-col",{staticClass:"d-flex justify-content-center align-items-center"},[e("b-col",{staticClass:"col-12 col-lg-6 col-xl-4",staticStyle:{padding:"0"}},[e("b-card",{staticStyle:{height:"500px"}},[e("div",{staticClass:"logo p-3 text-center",staticStyle:{"overflow-y":"hidden"}},[e("img",{staticStyle:{height:"100px"},attrs:{src:s("5336")}})]),e("b-form",[e("b-form-group",{staticClass:"has-icon",attrs:{label:"Email address:"}},[e("span",{staticClass:"fa fa-envelope form-control-feedback"}),e("b-form-input",{attrs:{type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),e("b-form-group",{staticClass:"has-icon",attrs:{label:"Password:"}},[e("span",{staticClass:"fa fa-key form-control-feedback"}),e("b-form-input",{attrs:{type:"password",required:"",placeholder:"Enter password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),e("b-alert",{directives:[{name:"show",rawName:"v-show",value:t.isError,expression:"isError"}],staticStyle:{"font-size":"15px",padding:"10px"},attrs:{variant:"danger",show:"",fade:""}},[t._v(t._s(t.error_message))]),e("b-form-group",[e("b-button",{staticClass:"login-buttons",staticStyle:{color:"#9155FD"},attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[t._v("Login")]),e("b-button",{staticClass:"login-buttons",staticStyle:{color:"black"},attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.register.apply(null,arguments)}}},[t._v("Register")])],1)],1)],1)],1),e("b-col",{staticClass:"d-none d-xl-block col-xl-8",staticStyle:{padding:"0"}},[e("b-card",{staticStyle:{"background-color":"#17a2b869",height:"500px"}},[e("img",{staticClass:"todo-img",attrs:{src:s("ce03")}})])],1)],1)],1)],1)],1)},h=[],g=(s("14d9"),{data(){return{form:{email:"",password:""},isError:!1,error_message:""}},methods:{login(){this.$http.post("/auth/local",this.form).then(t=>{this.isError=!1,this.error_message="",!0===t.data.status&&(this.$router.push({path:"/dashboard"}),this.$swal({position:"bottom-end",icon:"success",toast:!0,title:"You successfully logged in",showConfirmButton:!1,timer:1500}))}).catch(t=>{this.isError=!0,this.error_message=t.response.data.message})},register(){this.$http.post("/auth/register",this.form).then(t=>{!0===t.data.status?(this.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Project successfully created",showConfirmButton:!1,timer:1500}),this.login()):(this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred creating the project",showConfirmButton:!1,timer:1500}),this.isError=!0,this.error_message=t.data.message)}).catch(t=>{this.isError=!0,this.error_message=t.response.data.message})}}}),b=g,f=(s("a6b1"),Object(c["a"])(b,m,h,!1,null,"555b8797",null)),_=f.exports,k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-100",style:t.getBackgroundCustomization},[e("Navbar",{attrs:{user_email:t.user_email}}),e("Sidebar",{attrs:{customization:t.customization}}),t.projects.options.length>0?[e("transition",{attrs:{name:t.customization.animations.selected}},[e("ProjectSelection",{attrs:{projects:t.projects}})],1),e("transition",{attrs:{name:t.customization.animations.selected}},[t.loaded?e("PerfectScrollbar",{staticClass:"scroll-area"},[e("b-container",{staticStyle:{"max-width":"none !important"}},[e("b-row",[e("div",{staticClass:"d-flex"},t._l(t.project_details.columns,(function(s,o){return e("b-col",{key:o,staticClass:"col kanban-widget"},[e("Column",{attrs:{customization:t.customization,column:s}})],1)})),1),e("span",{staticClass:"badge badge-info ml-2",staticStyle:{height:"fit-content","font-size":"20px","margin-top":"10px",cursor:"pointer"},on:{click:function(e){return t.createNewColumn()}}},[e("i",{staticClass:"fas fa-plus"})])])],1)],1):t._e()],1)]:[e("transition",{attrs:{name:t.customization.animations.selected}},[e("div",{staticClass:"text-center",staticStyle:{"margin-top":"5%"}},[e("b-img",{attrs:{src:s("28c1"),width:"500"}}),e("h3",{staticClass:"text-white",staticStyle:{"text-shadow":"black 0px 0px 10px"}},[t._v("Seems like you haven't got any projects")]),e("b-button",{staticClass:"mt-2",attrs:{variant:"success"},on:{click:t.createProject}},[t._v("Create Now")])],1)])],e("vue-simple-context-menu",{ref:"vueTaskContextMenu",attrs:{elementId:"taskMenu",options:t.options},on:{"option-clicked":t.taskOptionSelected}}),e("vue-simple-context-menu",{ref:"vueColumnContextMenu",attrs:{elementId:"columnMenu",options:t.options},on:{"option-clicked":t.columnOptionSelected}})],2)},v=[],w=function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{staticStyle:{"background-color":"rgba(0, 0, 0, 0) !important"},attrs:{toggleable:"lg",type:"dark"}},[e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-brand",{staticStyle:{width:"100%"}},[e("b-img",{attrs:{src:s("6bf6"),height:"35"}})],1),e("b-navbar-nav"),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[t._v(t._s(t.user_email))])]},proxy:!0}])},[e("b-dropdown-item",{on:{click:function(e){return t.logout()}}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},C=[],y={props:["user_email"],methods:{logout(){this.$http.get("/auth/logout").then(()=>{this.$router.push("/login")}).catch(t=>{500===t.response.status&&this.$router.push("/login")})}}},x=y,j=Object(c["a"])(x,w,C,!1,null,null,null),$=j.exports,S=function(){var t=this,e=t._self._c;return e("div",[e("b-sidebar",{attrs:{id:"sidebar-1",title:"Customization","bg-variant":t.getSidebarBGVariant,"text-variant":t.getSidebarTextVariant,backdrop:"",shadow:"",right:""}},[e("div",{staticClass:"px-3 py-2"},[e("p",[t._v("Kanbant provides lots of customizations. You can customize the appearance of your dashboard.")]),e("hr"),e("b-form-group",{attrs:{label:"Theme Mode:"}},[e("b-form-radio-group",{attrs:{options:t.customization.theme.options},model:{value:t.customization.theme.selected,callback:function(e){t.$set(t.customization.theme,"selected",e)},expression:"customization.theme.selected"}})],1),e("b-form-group",{attrs:{label:"Hide Icons:"}},[e("b-form-radio-group",{attrs:{options:t.customization.icons.options},model:{value:t.customization.icons.selected,callback:function(e){t.$set(t.customization.icons,"selected",e)},expression:"customization.icons.selected"}})],1),e("b-form-group",{attrs:{label:"Animations:"}},[e("b-form-radio-group",{attrs:{options:t.customization.animations.options},model:{value:t.customization.animations.selected,callback:function(e){t.$set(t.customization.animations,"selected",e)},expression:"customization.animations.selected"}})],1),e("b-form-group",{attrs:{label:"Background:"}},[e("b-form-radio-group",{staticStyle:{display:"grid"},attrs:{options:t.customization.background.options},model:{value:t.customization.background.selected,callback:function(e){t.$set(t.customization.background,"selected",e)},expression:"customization.background.selected"}})],1)],1)])],1)},z=[],T={props:["customization"],computed:{getSidebarBGVariant(){return"Dark"===this.customization.theme.selected?"dark":"light"},getSidebarTextVariant(){return"Dark"===this.customization.theme.selected?"light":"dark"}}},P=T,B=Object(c["a"])(P,S,z,!1,null,null,null),E=B.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3 mt-2"},[t.isEditing?[e("b-form-input",{staticClass:"ml-4 mt-2 mr-2",staticStyle:{width:"auto",display:"inline-block"},attrs:{type:"text",tabindex:"0"},on:{focusout:function(e){return t.updateProjectTitle()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateProjectTitle()}},model:{value:t.projects.selected.title,callback:function(e){t.$set(t.projects.selected,"title",e)},expression:"projects.selected.title"}})]:t._e(),t.isEditing?t._e():e("multiselect",{staticClass:"ml-4 mt-2",staticStyle:{width:"auto",display:"inline-block"},attrs:{"track-by":"_id",label:"title",placeholder:"",selectLabel:"",options:t.projects.options,searchable:!0,"allow-empty":!1,"deselect-label":"Selected","hide-selected":!1},on:{select:t.projectSelected},scopedSlots:t._u([{key:"option",fn:function(s){return[e("div",{staticClass:"option__desc"},[e("i",{staticClass:"fas fa-tasks",staticStyle:{"margin-right":"10px"}}),e("span",{staticClass:"option__title"},[t._v(t._s(s.option.title))])])]}}],null,!1,2008285723),model:{value:t.projects.selected,callback:function(e){t.$set(t.projects,"selected",e)},expression:"projects.selected"}}),t.isEditing?t._e():e("span",{staticClass:"badge badge-success mr-2",staticStyle:{"font-size":"14px",cursor:"pointer"}},[e("i",{staticClass:"fas fa-plus p-1",on:{click:t.createProject}})]),t.isEditing?t._e():e("span",{staticClass:"badge badge-dark mr-2",staticStyle:{"font-size":"14px",cursor:"pointer"}},[e("i",{staticClass:"fas fa-pen p-1",on:{click:function(e){t.isEditing=!0}}})]),e("span",{staticClass:"badge badge-danger",staticStyle:{"font-size":"14px",cursor:"pointer"}},[e("i",{staticClass:"fas fa-trash p-1",on:{click:t.deleteProject}})]),e("i",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],staticClass:"fas fa-cog text-white float-right mr-3 mt-3",staticStyle:{"font-size":"25px"}})],2)},M=[],L=s("8e5f"),D=s.n(L);const N=new o["default"];var A=N,I={props:["projects"],data(){return{isEditing:!1}},components:{Multiselect:D.a},methods:{projectSelected(t){A.$emit("load-project-with-id",t._id)},createProject(){A.$emit("create-project")},updateProjectTitle(){this.$http.put("/user/projects",{project_id:this.projects.selected._id,title:this.projects.selected.title}).then(t=>{!0===t.data.status?this.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Project title successfully updated",showConfirmButton:!1,timer:1500}):this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred updating project title",showConfirmButton:!1,timer:1500}),A.$emit("load-project-with-id",this.projects.selected._id),this.isEditing=!1}).catch(t=>{401===t.response.status&&this.$router.push("/login")})},deleteProject(){this.$swal({title:"Are you sure?",text:"Do you really want to delete the project?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.value&&this.$http.delete("/user/projects",{params:{project_id:this.projects.selected._id}}).then(t=>{!0===t.data.status?(this.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Project successfully deleted",showConfirmButton:!1,timer:1500}),A.$emit("project-deleted")):this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred deleting the project",showConfirmButton:!1,timer:1500}),A.$emit("load-project")}).catch(t=>{401===t.response.status&&this.$router.push("/login")})})}}},H=I,R=Object(c["a"])(H,O,M,!1,null,null,null),F=R.exports,U=function(){var t=this,e=t._self._c;return e("b-card",{staticClass:"mb-2 widget-img kanban-widget text-center p-2",class:t.getColumnCustomization,style:t.getColumnStyle,attrs:{tag:"article"}},[[[e("h4",{directives:[{name:"show",rawName:"v-show",value:t.edit_component.id_for_title!==t.column._id,expression:"edit_component.id_for_title !== column._id"}],staticClass:"card-title",on:{dblclick:function(e){t.edit_component.id_for_title=t.column._id}}},[t._v(t._s(t.column.title))]),t.edit_component.id_for_title===t.column._id?e("b-form-input",{staticStyle:{width:"auto",margin:"auto"},attrs:{type:"text",tabindex:"0"},on:{focusout:function(e){return t.updateColumnTitle(t.column._id,t.column.title)},keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.edit_component.id_for_title=null}},model:{value:t.column.title,callback:function(e){t.$set(t.column,"title",e)},expression:"column.title"}}):t._e()],[e("span",{staticStyle:{position:"absolute",top:"0px",right:"10px",cursor:"pointer"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.columnHandle(e,t.column)}}},[e("i",{staticClass:"fas fa-ellipsis-h"})])],[e("span",{staticClass:"mb-2",staticStyle:{display:"block"}},[t._v("("+t._s(t.column.tasks.length)+")")])],t.customization.icons.selected?t._e():[e("b-img",{staticClass:"mb-3",attrs:{src:t.getColumnIcon(t.column.icon)},on:{dblclick:function(e){return t.changeComponentIconStatus(t.column._id)}}}),t.edit_component.id_for_icon===t.column._id?e("div",[e("i",{staticClass:"fas fa-arrow-circle-left",staticStyle:{cursor:"pointer",position:"absolute",left:"5%",top:"150px","font-size":"25px"},on:{click:function(e){return t.updateColumnIcon("left",t.column.icon,t.column._id)}}}),e("i",{staticClass:"fas fa-arrow-circle-right",staticStyle:{cursor:"pointer",position:"absolute",right:"5%",top:"150px","font-size":"25px"},on:{click:function(e){return t.updateColumnIcon("right",t.column.icon,t.column._id)}}})]):t._e()]],[e("Task",{attrs:{tasks:t.column.tasks,column_id:t.column._id,customization:t.customization}})],[e("hr",{style:t.getHRStyle}),e("transition",{attrs:{name:"slide-fade"}},[t.new_task.column_id===t.column._id?e("div",{staticClass:"form",staticStyle:{"font-size":"smaller"}},[e("b-form-group",{staticClass:"text-left",attrs:{label:"What's must be done?","invalid-feedback":t.invalidTitleFeedback,state:t.taskTitleChecker}},[e("b-form-input",{attrs:{state:t.taskTitleChecker,trim:"",size:"sm"},model:{value:t.new_task.title,callback:function(e){t.$set(t.new_task,"title",e)},expression:"new_task.title"}})],1),e("b-form-group",{staticClass:"text-left",attrs:{label:"Expiration Date (optional)"}},[e("b-form-datepicker",{staticClass:"mb-2",attrs:{size:"sm"},model:{value:t.new_task.expireAt,callback:function(e){t.$set(t.new_task,"expireAt",e)},expression:"new_task.expireAt"}})],1),e("b-form-group",{staticClass:"text-left",attrs:{label:"Do you wanna label the task?"}},[e("b-form-radio-group",{attrs:{options:[{text:"Yes",value:!0},{text:"No",value:!1}]},model:{value:t.new_task.isLabeled,callback:function(e){t.$set(t.new_task,"isLabeled",e)},expression:"new_task.isLabeled"}})],1),t.new_task.isLabeled?[e("b-form-group",{staticClass:"text-left",attrs:{label:"Label","invalid-feedback":t.invalidLabelFeedback,state:t.taskLabelChecker}},[e("b-form-input",{attrs:{state:t.taskLabelChecker,trim:"",size:"sm"},model:{value:t.new_task.label,callback:function(e){t.$set(t.new_task,"label",e)},expression:"new_task.label"}})],1),e("b-form-group",{staticClass:"text-left",attrs:{label:"Label Type"}},[e("b-form-select",{attrs:{options:["danger","warning","primary","info","dark","success"],size:"sm"},model:{value:t.new_task.labelType,callback:function(e){t.$set(t.new_task,"labelType",e)},expression:"new_task.labelType"}})],1)]:t._e(),e("b-form-group",[t.taskTitleChecker?e("b-button",{staticClass:"float-left mt-3",staticStyle:{width:"48%"},attrs:{type:"submit",variant:"success"},on:{click:t.createNewTask}},[e("i",{staticClass:"fas fa-check mr-2"}),t._v("Save task ")]):t._e(),t.taskTitleChecker?e("b-button",{staticClass:"float-right mt-3",staticStyle:{width:"48%"},attrs:{type:"reset",variant:"danger"},on:{click:t.resetNewTask}},[e("i",{staticClass:"fas fa-times mr-2"}),t._v("Cancel ")]):t._e()],1)],2):t._e()]),e("i",{directives:[{name:"show",rawName:"v-show",value:t.new_task.column_id!==t.column._id,expression:"new_task.column_id !== column._id"}],staticClass:"fas fa-plus",staticStyle:{cursor:"pointer"},on:{click:e=>{t.resetNewTask(),t.new_task.column_id=t.column._id}}}),e("i",{directives:[{name:"show",rawName:"v-show",value:t.new_task.column_id===t.column._id&&!t.taskTitleChecker,expression:"new_task.column_id === column._id && !taskTitleChecker"}],staticClass:"fas fa-times",staticStyle:{cursor:"pointer"},on:{click:t.resetNewTask}})]],2)},V=[],Y=function(){var t=this,e=t._self._c;return e("div",[e("draggable",{staticClass:"list-group text-left mt-4",staticStyle:{cursor:"move","min-height":"100px"},attrs:{list:t.tasks,group:"people","ghost-class":"ghost",animation:200},on:{change:function(e){return t.changed(t.column_id,e)}}},t._l(t.tasks,(function(s){return e("b-card",{key:s._id,staticClass:"mb-2 text-left task",class:t.getTaskCustomization,style:t.getTaskHeight(s),on:{contextmenu:function(e){return e.preventDefault(),e.stopPropagation(),(o=>{s["column_id"]=t.column_id,t.taskHandle(e,s)}).apply(null,arguments)}}},[e("h4",{staticClass:"card-title"},[t._v(t._s(s.title))]),e("span",{staticStyle:{position:"absolute",top:"0px",cursor:"pointer"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),(o=>{s["column_id"]=t.column_id,t.taskHandle(e,s)}).apply(null,arguments)}}},[e("i",{staticClass:"fas fa-ellipsis-h"})]),s.expireAt?e("p",[e("i",{staticClass:"fa fa-clock"}),t._v(" "+t._s(t._f("moment")(s.expireAt,"MMMM D"))+" ")]):t._e(),s.labelType?e("span",{class:"badge badge-"+s.labelType,staticStyle:{"text-transform":"capitalize","font-size":"0.635rem"}},[e("i",{staticClass:"fas fa-circle"}),t._v(" "+t._s(s.label)+" ")]):t._e()])})),1)],1)},q=[],G=s("b76a"),J=s.n(G),K={props:["tasks","column_id","customization"],components:{draggable:J.a},computed:{getTaskCustomization(){return"Dark"===this.customization.theme.selected?"bg-dark text-white":""}},methods:{getTaskHeight(t){return t.date||t.label?"height: 90px":"height: 80px"},taskHandle(t,e){A.$emit("task-option-handled",{event:t,item:e})},changed:function(t,e){if(e.added){let s=e.added.element._id;this.$http.post("/user/addToColumn",{task_id:s,column_id:t}).then(t=>{console.log(t.data)}).catch(t=>{401===t.response.status&&this.$router.push("/login")})}else if(e.removed){let s=e.removed.element._id;this.$http.post("/user/removeFromColumn",{task_id:s,column_id:t}).then(t=>{console.log(t.data)}).catch(t=>{401===t.response.status&&this.$router.push("/login")})}else console.log("Unknown process.")}}},W=K,Q=Object(c["a"])(W,Y,q,!1,null,null,null),X=Q.exports,Z={props:["customization","column"],components:{Task:X},data(){return{available_icons:["todo","inprogress","done","programming","mobile-testing","usability-testing","mobile-messages","review","code-review","survey","report","design-notes"],edit_component:{id_for_title:"",id_for_icon:null},new_task:{title:"",label:"",labelType:null,expireAt:null,column_id:null,isLabeled:!1}}},computed:{taskTitleChecker(){return this.new_task.title.length>=3},taskLabelChecker(){return this.new_task.label.length>=3},invalidTitleFeedback(){return this.new_task.title.length>3?"":this.new_task.title.length>0?"Enter at least 3 characters":"Please enter something"},invalidLabelFeedback(){return this.new_task.label.length>3?"":this.new_task.label.length>0?"Enter at least 3 characters":"Please enter something"},getColumnCustomization(){return"Dark"===this.customization.theme.selected?"text-white":""},getColumnStyle(){return"Dark"===this.customization.theme.selected?"background-color: #1e242b; border: 2px double #ffffff1c;":"background-color: rgb(241, 241, 241);"},getHRStyle(){return"Dark"===this.customization.theme.selected?"border-top: 1px solid rgba(255, 255, 255, 0.21)":""}},methods:{createNewTask(){let{title:t,label:e,labelType:s,expireAt:o,column_id:i,isLabeled:a}=this.new_task,n={title:t,column_id:i};null!==i&&(null!==o&&(o=new Date(o),n["expireAt"]=o),null!==e&&a&&(n["label"]=e,n["labelType"]=null!==s?s:"dark"),this.$http.post("/user/tasks",n).then(t=>{!0===t.data.status?this.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Task successfully created",showConfirmButton:!1,timer:1500}):this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred creating the task",showConfirmButton:!1,timer:1500}),A.$emit("load-project"),this.resetNewTask()}).catch(t=>{401===t.response.status?this.$router.push("/login"):429===t.response.status&&this.$swal({position:"bottom-end",icon:"error",toast:!0,title:""+t.response.data.message,showConfirmButton:!1,timer:2e3})}))},resetNewTask(){this.new_task={title:"",label:"",labelType:null,expireAt:null,column_id:null,isLabeled:!1}},columnHandle(t,e){A.$emit("column-option-handled",{event:t,item:e})},getColumnIcon(t){return s("4555")(`./${t}.svg`)},updateColumnTitle(t,e){this.edit_component.id_for_title=null,this.$http.put("/user/columns",{column_id:t,title:e}).then(t=>{!0===t.data.status?this.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Column title updated",showConfirmButton:!1,timer:1500}):this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred updating column title",showConfirmButton:!1,timer:1500})}).catch(t=>{401===t.response.status&&this.$router.push("/login")})},changeComponentIconStatus(t){null===this.edit_component.id_for_icon?this.edit_component.id_for_icon=t:this.edit_component.id_for_icon=null},updateColumnIcon(t,e,s){let o=this.available_icons.indexOf(e),i="";i="right"===t?o<this.available_icons.length-1?this.available_icons[o+1]:this.available_icons[0]:0===o?this.available_icons[this.available_icons.length-1]:this.available_icons[o-1],this.$http.put("/user/columns",{column_id:s,icon:i}).then(t=>{!0===t.data.status?this.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Column icon successfully updated",showConfirmButton:!1,timer:1500}):this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred updating column icon",showConfirmButton:!1,timer:1500}),A.$emit("load-project")}).catch(t=>{401===t.response.status&&this.$router.push("/login")})}}},tt=Z,et=Object(c["a"])(tt,U,V,!1,null,null,null),st=et.exports,ot=s("a4a1"),it={components:{Navbar:$,Sidebar:E,ProjectSelection:F,Column:st,PerfectScrollbar:ot["PerfectScrollbar"]},watch:{"customization.theme.selected":{handler:t=>{localStorage.theme=t},deep:!0},"customization.background.selected":{handler:t=>{localStorage.bg=t},deep:!0},"customization.icons.selected":{handler:t=>{localStorage.icons=t},deep:!0},"customization.animations.selected":{handler:t=>{localStorage.animations=t},deep:!0}},data(){return{projects:{selected:{},options:[]},loaded:!1,project_details:{title:"",description:"",columns:[]},options:[{name:"Clone",slug:"clone"},{name:"Delete",slug:"delete"}],customization:{theme:{selected:"Light",options:["Dark","Light"]},background:{selected:"Mountain",options:["Random","Solid Dark","Blueish","Valley","Mountain","City","Seaside","Northen Lights"]},icons:{selected:!1,options:[{text:"Yes",value:!0},{text:"No",value:!1}]},animations:{selected:"bounce",options:["fade","slide-fade","bounce"]}},user_email:"",available_icons:["todo","inprogress","done","programming","mobile-testing","usability-testing","mobile-messages","review","code-review","survey","report","design-notes"]}},computed:{getBackgroundCustomization(){switch(this.customization.background.selected){case"Solid Dark":return"background: linear-gradient(140deg,#151a1f 4%,rgb(43, 41, 41) 13%,#102225 98%);";case"Blueish":return"background: linear-gradient(180deg,rgb(50, 43, 167) 0%,rgb(69, 69, 175) 53%,rgba(0, 212, 255, 1) 100%);";case"Valley":return"background-image: url('https://i.picsum.photos/id/1015/0/0.jpg');background-size: cover !important;";case"Mountain":return"background-image: url('https://i.picsum.photos/id/866/0/0.jpg');background-size: cover !important;";case"City":return"background-image: url('https://i.picsum.photos/id/122/4147/2756.jpg');background-size: cover !important;";case"Seaside":return"background-image: url('https://i.picsum.photos/id/1019/0/0.jpg');background-size: cover !important;";case"Northen Lights":return"background-image: url('https://i.picsum.photos/id/1022/0/0.jpg');background-size: cover !important;";default:return"background-image: url('https://picsum.photos/0/0');background-size: cover !important;"}}},methods:{checkLocalStorage(){localStorage.theme&&this.customization.theme.options.includes(localStorage.theme)&&(this.customization.theme.selected=localStorage.theme),localStorage.bg&&this.customization.background.options.includes(localStorage.bg)&&(this.customization.background.selected=localStorage.bg),localStorage.animations&&this.customization.animations.options.includes(localStorage.animations)&&(this.customization.animations.selected=localStorage.animations),localStorage.icons&&("true"===localStorage.icons?this.customization.icons.selected=!0:this.customization.icons.selected=!1)},taskOptionSelected(t){if("delete"===t.option.slug)this.$http.delete("/user/tasks",{params:{task_id:t.item._id,column_id:t.item.column_id}}).then(t=>{!0===t.data.status?this.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Task successfully deleted",showConfirmButton:!1,timer:1500}):this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred deleting the task",showConfirmButton:!1,timer:1500}),this.loadProject(this.projects.selected._id)}).catch(t=>{401===t.response.status&&this.$router.push("/login")});else if("clone"===t.option.slug){let{title:e,expireAt:s,label:o,labelType:i,column_id:a}=t.item;this.$http.post("/user/tasks",{title:e,expireAt:s,label:o,labelType:i,column_id:a}).then(t=>{!0===t.data.status?this.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Task successfully cloned",showConfirmButton:!1,timer:1500}):this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred cloning the task",showConfirmButton:!1,timer:1500}),this.loadProject(this.projects.selected._id)}).catch(t=>{401===t.response.status?this.$router.push("/login"):429===t.response.status&&this.$swal({position:"bottom-end",icon:"error",toast:!0,title:""+t.response.data.message,showConfirmButton:!1,timer:2e3})})}},getRandomInt(t){return Math.floor(Math.random()*Math.floor(t))},createNewColumn(){this.$http.post("/user/columns",{project_id:this.projects.selected._id,icon:this.available_icons[this.getRandomInt(this.available_icons.length)],title:"Column "+Math.random().toString().slice(2,5)}).then(t=>{!0===t.data.status?this.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Column successfully created",showConfirmButton:!1,timer:1500}):this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred creating the column",showConfirmButton:!1,timer:1500}),this.loadProject(this.projects.selected._id)}).catch(t=>{401===t.response.status?this.$router.push("/login"):429===t.response.status?this.$swal({position:"bottom-end",icon:"error",toast:!0,title:""+t.response.data.message,showConfirmButton:!1,timer:2e3}):this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred creating the column",showConfirmButton:!1,timer:500})})},columnOptionSelected(t){if("delete"===t.option.slug)console.log(t.item),this.$http.delete("/user/columns",{params:{column_id:t.item._id,project_id:this.projects.selected._id}}).then(t=>{!0===t.data.status?this.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Column successfully deleted",showConfirmButton:!1,timer:1500}):this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred deleting the column",showConfirmButton:!1,timer:1500}),this.loadProject(this.projects.selected._id)}).catch(t=>{401===t.response.status&&this.$router.push("/login")});else if("clone"===t.option.slug){let{title:e,icon:s}=t.item;this.$http.post("/user/columns",{title:e,icon:s,project_id:this.projects.selected._id}).then(t=>{!0===t.data.status?this.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Column successfully cloned",showConfirmButton:!1,timer:1500}):this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred cloning the column",showConfirmButton:!1,timer:1500}),this.loadProject(this.projects.selected._id)}).catch(t=>{401===t.response.status?this.$router.push("/login"):429===t.response.status&&this.$swal({position:"bottom-end",icon:"error",toast:!0,title:""+t.response.data.message,showConfirmButton:!1,timer:2e3})})}},createProject(){this.$swal({title:"Are you sure?",text:"Do you really want to create a new project?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create it!"}).then(t=>{t.value&&this.$http.post("/user/projects",{title:"Project "+Math.random().toString().slice(2,7)}).then(t=>{!0===t.data.status?this.$swal({position:"bottom-end",icon:"success",toast:!0,title:"Project successfully created",showConfirmButton:!1,timer:1500}):this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred creating the project",showConfirmButton:!1,timer:1500}),this.getProjects()}).catch(t=>{401===t.response.status?this.$router.push("/login"):429===t.response.status?this.$swal({position:"bottom-end",icon:"error",toast:!0,title:""+t.response.data.message,showConfirmButton:!1,timer:2e3}):this.$swal({position:"bottom-end",icon:"error",toast:!0,title:"Error occurred creating the project",showConfirmButton:!1,timer:2e3})})})},getProjects(){this.$http.get("/user/projects").then(t=>{t.data.status&&!0===t.data.status?(this.projects.selected={},this.projects.options=t.data.results,this.projects.options.length>0&&(this.projects.selected=t.data.results[0],this.loadProject(t.data.results[0]._id))):console.log("error occurred fetching projects.")})},loadProject(t){this.$http.get("/user/projects",{params:{project_id:t}}).then(t=>{this.project_details=t.data.result,this.loaded=!0}).catch(t=>{401===t.response.status&&this.$router.push("/login"),404===t.response.status&&this.getProjects()})},loadUserInformations(){this.$http.get("/auth/status").then(t=>{!0===t.data.status&&(this.user_email=t.data.user)}).catch(t=>{401===t.response.status&&this.$router.push("/login"),404===t.response.status&&this.getProjects()})}},created(){this.checkLocalStorage(),this.loadUserInformations(),this.getProjects(),A.$on("task-option-handled",t=>{try{this.$refs.vueTaskContextMenu.showMenu(t.event,t.item)}catch(e){console.log("Task context menu not initialized yet")}}),A.$on("column-option-handled",t=>{try{this.$refs.vueColumnContextMenu.showMenu(t.event,t.item)}catch(e){console.log("Column context menu not initialized yet")}}),A.$on("project-deleted",()=>{this.getProjects()}),A.$on("load-project",()=>{this.loadProject(this.projects.selected._id)}),A.$on("load-project-with-id",t=>{this.loadProject(t)}),A.$on("create-project",()=>{this.createProject()})}},at=it,nt=(s("c2c3"),s("1583"),s("11cc"),Object(c["a"])(at,k,v,!1,null,null,null)),rt=nt.exports,lt=s("bc3a"),ct=s.n(lt);const ut=ct.a.create({withCredentials:!0,baseURL:"/api"});var dt=[{path:"/login",component:_},{path:"/dashboard",component:rt,beforeEnter:(t,e,s)=>{ut.get("/auth/status").then(t=>{!0===t.data.status?s():s("/login")}).catch(t=>{console.log("Error occurred",t.response),s()})}},{path:"*",redirect:"/login"}],pt=s("2ead"),mt=s.n(pt),ht=(s("bd62"),s("2560")),gt=s("5886");const bt=ct.a.create({withCredentials:!0,baseURL:"/api"});o["default"].config.productionTip=!1,o["default"].use(p["a"]),o["default"].use(mt.a),o["default"].component("vue-simple-context-menu",ht["a"]),o["default"].use(gt["a"]),o["default"].prototype.$http=bt;const ft=new p["a"]({mode:"history",routes:dt});new o["default"]({router:ft,render:t=>t(d)}).$mount("#app")},"5bfd":function(t,e,s){t.exports=s.p+"img/mobile-testing.0b51bda8.svg"},6147:function(t,e,s){t.exports=s.p+"img/usability-testing.535250f3.svg"},"665e":function(t,e,s){},"6bf6":function(t,e,s){t.exports=s.p+"img/kanbant_logo_nav.e97578da.svg"},7317:function(t,e,s){t.exports=s.p+"img/done.23515a7d.svg"},"86b9":function(t,e,s){"use strict";s("665e")},8729:function(t,e,s){t.exports=s.p+"img/code-review.44e1babf.svg"},"9c74":function(t,e,s){t.exports=s.p+"img/programming.1e8ef79d.svg"},a6b1:function(t,e,s){"use strict";s("bb84")},bb84:function(t,e,s){},bbee:function(t,e,s){t.exports=s.p+"img/report.f83d90db.svg"},ce03:function(t,e,s){t.exports=s.p+"img/login.b5b65709.svg"},ce6e:function(t,e,s){t.exports=s.p+"img/design-notes.56c5d09d.svg"}});
//# sourceMappingURL=app.68800a97.js.map