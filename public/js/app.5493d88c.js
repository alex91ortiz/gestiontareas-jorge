(function(e){function t(t){for(var s,n,o=t[0],l=t[1],u=t[2],c=0,p=[];c<o.length;c++)n=o[c],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},i={app:0},r=[];function n(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5f814e71"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=i[e]=[t,s]}));t.push(a[2]=s);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=n(e);var u=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(c);var a=i[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",u.name="ChunkLoadError",u.type=s,u.request=r,a[1](u)}i[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0a41":function(e,t,a){"use strict";a("45aa")},"0e87":function(e,t,a){"use strict";a("e2bd")},"45aa":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"main-container"},[a("router-view")],1)])},r=[],n=(a("5c0b"),a("2877")),o={},l=Object(n["a"])(o,i,r,!1,null,null,null),u=l.exports,c=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Navigation")],1)},p=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",[a("input",{attrs:{type:"checkbox",id:"check"}}),e._m(0),a("label",{staticClass:"logo"},[e._v("Tareas")]),a("ul",[a("li",[a("router-link",{staticClass:"active",attrs:{to:"/"}},[e._v("Inicio")])],1),a("li",[a("router-link",{attrs:{to:"/tareas"}},[e._v("Tareas")])],1),a("li",[a("router-link",{attrs:{to:"/usuarios"}},[e._v("Usuarios")])],1),a("li",[a("a",{attrs:{href:"#"},on:{click:e.logout}},[e._v("Salir")])])])])])},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"checkbtn",attrs:{for:"check"}},[a("i",{staticClass:"pi pi-bars"})])}],h=a("d4ec"),v=a("bee2"),b=a("ade3"),g=a("bc3a"),k=a.n(g),y=function(){function e(){Object(h["a"])(this,e),Object(b["a"])(this,"header",{}),k.a.defaults.withCredentials=!0,k.a.defaults.baseURL="https://gestiontareas-jorge.herokuapp.com";var t=localStorage.getItem("user-token");this.header={headers:{Authorization:"Bearer "+t,"Content-type":"application/json"}}}return Object(v["a"])(e,[{key:"logout",value:function(){return k.a.post("/api/salir",this.header)}}]),e}(),C={data:function(){return{loginServices:null}},name:"navigation",created:function(){this.loginServices=new y},methods:{logout:function(){this.loginServices.logout().then((function(){localStorage.removeItem("user-token"),localStorage.removeItem("user-name"),window.location.href="/"}))}}},_=C,S=(a("0a41"),Object(n["a"])(_,f,m,!1,null,null,null)),w=S.exports,x={name:"Home",components:{Navigation:w}},D=x,P=Object(n["a"])(D,d,p,!1,null,null,null),T=P.exports,I=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"p-grid"},[s("div",{staticClass:"p-col-12 p-md-4 p-lg-4 p-md-offset-4 "},[s("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[s("Card",{scopedSlots:e._u([{key:"header",fn:function(){return[s("img",{staticStyle:{width:"50px"},attrs:{alt:"user header",src:a("cf05")}})]},proxy:!0},{key:"title",fn:function(){return[e._v(" Gestion de Tareas ")]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"p-fluid p-formgrid p-column"},[s("div",{staticClass:"p-field p-col"},[s("label",{attrs:{for:"email"}},[e._v("Correo Electronico")]),s("InputText",{staticClass:"p-mb-2 p-d-block",attrs:{id:"email",placeholder:"Ingrese correo"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),s("div",{staticClass:"p-field p-col"},[s("label",{attrs:{for:"password"}},[e._v("Contraseña")]),s("Password",{staticClass:"p-d-block",attrs:{id:"password",placeholder:"Ingrese Contraseña"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)]),e.validate?e._e():s("Message",{attrs:{severity:"error"}},[e._v(e._s(e.message))])]},proxy:!0},{key:"footer",fn:function(){return[e.form.email.length>0&&e.form.password.length>0?s("Button",{attrs:{type:"submit",icon:"pi pi-check",label:"Ingresar"}}):e._e(),e.form.email.length<=0||e.form.password.length<=0?s("Button",{attrs:{type:"submit",disabled:"disabled",icon:"pi pi-check",label:"Ingresar"}}):e._e()]},proxy:!0}])})],1)])])},j=[];k.a.defaults.withCredentials=!0,k.a.defaults.baseURL="https://gestiontareas-jorge.herokuapp.com";var B={data:function(){return{user:{},validate:!0,message:"",form:{email:"",password:""}}},created:function(){},methods:{login:function(){var e=this;this.validate=!0,k.a.get("/sanctum/csrf-cookie/").then((function(){k.a.post("/api/login/",e.form).then((function(t){e.user=t.data.data,localStorage.setItem("user-token",e.user.token),localStorage.setItem("user-name",e.user.nombre),window.location.href="/"})).catch((function(t){404==t.response.status&&(e.validate=t.response.data.success,e.message=t.response.data.message)}))}))}}},O=B,$=Object(n["a"])(O,I,j,!1,null,null,null),L=$.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"task"},[a("Navigation"),a("Toast",{attrs:{position:"top-left",group:"tl"}}),a("div",[a("div",{staticClass:"card"},[a("DataTable",{ref:"dt",attrs:{value:e.tasks,dataKey:"id",paginator:!0,rows:10,filters:e.filters,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Mostrar {first} hasta {last} de {totalRecords} tareas",responsiveLayout:"scroll"},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"table-header"},[e.security.crear?a("Button",{staticClass:"p-button-primary p-mr-2",attrs:{label:"Nueva",icon:"pi pi-plus"},on:{click:e.openNew}}):e._e(),e.security.consultar?a("div",{staticClass:"p-input-icon-center"},[a("ToggleButton",{attrs:{onLabel:"Finalizadas",offLabel:"Activas"},on:{change:e.filterQuery},model:{value:e.finished,callback:function(t){e.finished=t},expression:"finished"}}),a("ToggleButton",{attrs:{onLabel:"Todos",offLabel:"Mias"},on:{change:e.filterQuery},model:{value:e.alltask,callback:function(t){e.alltask=t},expression:"alltask"}})],1):e._e(),a("h5",{staticClass:"p-m-0"},[e._v("Consultar tareas")]),e.security.consultar?a("span",{staticClass:"p-input-icon-left"},[a("i",{staticClass:"pi pi-search"}),a("InputText",{attrs:{placeholder:"Search..."},model:{value:e.filters["global"],callback:function(t){e.$set(e.filters,"global",t)},expression:"filters['global']"}})],1):e._e()],1)]},proxy:!0}]),model:{value:e.tasks,callback:function(t){e.tasks=t},expression:"tasks"}},[a("Column",{staticStyle:{"min-width":"8rem"},attrs:{field:"nombre",header:"Nombre",sortable:!0}}),a("Column",{staticStyle:{"min-width":"16rem"},attrs:{field:"descripcion",header:"Descripcion",sortable:!0}}),a("Column",{staticStyle:{"min-width":"10rem"},attrs:{field:"fechavencimiento",header:"Fecha Vencimiento",sortable:!0,dataType:"date"}}),a("Column",{staticStyle:{"min-width":"5rem"},attrs:{field:"estado",header:"Estado",sortable:!0},scopedSlots:e._u([{key:"body",fn:function(t){return[a("span",{class:"task-badge status-"+(t.data.estado?t.data.estado.toLowerCase():"")},[e._v(e._s("N"==t.data.estado?"Activa":"Finalizado")+" ")])]}}])}),a("Column",{attrs:{exportable:!1},scopedSlots:e._u([{key:"body",fn:function(t){return[e.security.modificar?a("Button",{staticClass:"p-button-rounded p-button-info p-mr-2",attrs:{icon:"pi pi-pencil"},on:{click:function(a){return e.edittask(t.data)}}}):e._e(),e.security.borrar?a("Button",{staticClass:"p-button-rounded p-button-warning",attrs:{icon:"pi pi-trash"},on:{click:function(a){return e.confirmDeletetask(t.data)}}}):e._e()]}}])})],1)],1),a("Dialog",{staticClass:"p-fluid",style:{width:"450px"},attrs:{visible:e.taskDialog,header:"Tarea",modal:!0},scopedSlots:e._u([{key:"footer",fn:function(){return[a("Button",{staticClass:"p-button-text",attrs:{label:"Cancelar",icon:"pi pi-times"},on:{click:e.hideDialog}}),a("Button",{staticClass:"p-button-text",attrs:{label:"Guardar",icon:"pi pi-check"},on:{click:e.savetask}})]},proxy:!0}])},[a("div",{staticClass:"p-fluid p-column p-formgrid"},[a("div",{staticClass:"p-field"},[a("label",{attrs:{for:"name"}},[e._v("Nombre")]),a("InputText",{class:{"p-invalid":e.submitted&&!e.task.nombre},attrs:{id:"name",required:"true",autofocus:""},model:{value:e.task.nombre,callback:function(t){e.$set(e.task,"nombre",t)},expression:"task.nombre"}}),e.submitted&&!e.task.nombre?a("small",{staticClass:"p-error"},[e._v("Nombre es requerida.")]):e._e()],1),a("div",{staticClass:"p-field"},[a("label",{attrs:{for:"description"}},[e._v("Description")]),a("Textarea",{class:{"p-invalid":e.submitted&&!e.task.descripcion},attrs:{id:"description",required:"true",rows:"3",cols:"20"},model:{value:e.task.descripcion,callback:function(t){e.$set(e.task,"descripcion",t)},expression:"task.descripcion"}}),e._v(" "),e.submitted&&!e.task.descripcion?a("small",{staticClass:"p-error"},[e._v("Descripción es requerida.")]):e._e()],1),a("div",{staticClass:"p-field"},[a("label",{attrs:{for:"fechavencimiento"}},[e._v("Fecha Vencimiento")]),a("Calendar",{class:{"p-invalid":e.submitted&&!e.task.fechavencimiento},attrs:{id:"fechavencimiento",required:"true",dateFormat:"yy-mm-dd"},model:{value:e.task.fechavencimiento,callback:function(t){e.$set(e.task,"fechavencimiento",t)},expression:"task.fechavencimiento"}}),e.submitted&&!e.task.fechavencimiento?a("small",{staticClass:"p-error"},[e._v("Fecha es requerida.")]):e._e()],1),a("div",{staticClass:"p-field"},[a("div",{staticClass:"p-fluid p-formgrid p-column"},[a("div",{staticClass:"p-field p-col"},[e._v("Finalizar")]),a("div",{staticClass:"p-field p-col"},[a("InputSwitch",{attrs:{id:"estado"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1)])])])]),a("Dialog",{style:{width:"450px"},attrs:{visible:e.deletetaskDialog,header:"Confirmar",modal:!0},scopedSlots:e._u([{key:"footer",fn:function(){return[a("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:function(t){e.deletetaskDialog=!1}}}),a("Button",{staticClass:"p-button-text",attrs:{label:"Si",icon:"pi pi-check"},on:{click:e.deletetask}})]},proxy:!0}]),model:{value:e.deletetaskDialog,callback:function(t){e.deletetaskDialog=t},expression:"deletetaskDialog"}},[a("div",{staticClass:"confirmation-content"},[a("i",{staticClass:"pi pi-exclamation-triangle p-mr-3",staticStyle:{"font-size":"2rem"}}),e.task?a("span",[e._v("Estas seguro de eliminar la tarea "),a("b",[e._v(e._s(e.task.name))]),e._v("?")]):e._e()])])],1)],1)},q=[],A=a("5530"),E=(a("498a"),a("4de4"),a("c740"),function(){function e(){Object(h["a"])(this,e),Object(b["a"])(this,"header",{}),k.a.defaults.withCredentials=!0,k.a.defaults.baseURL="https://gestiontareas-jorge.herokuapp.com";var t=localStorage.getItem("user-token");this.header={headers:{Authorization:"Bearer "+t,"Content-type":"application/json"}}}return Object(v["a"])(e,[{key:"getAll",value:function(){return k.a.get("/api/tareas",this.header)}},{key:"getId",value:function(e){return k.a.get("/api/tareas/mostrar/".concat(e),this.header)}},{key:"create",value:function(e){return k.a.post("/api/tareas/crear",e,this.header)}},{key:"update",value:function(e,t){return k.a.put("/api/tareas/actualizar/".concat(e),t,this.header)}},{key:"delete",value:function(e){return k.a.delete("/api/tareas/borrar/".concat(e),this.header)}},{key:"filterQuery",value:function(e){return k.a.get("/api/tareas/consultar".concat(e),this.header)}}]),e}()),U=function(){function e(){Object(h["a"])(this,e),Object(b["a"])(this,"modules",[{id:1,modulo:"USUARIOS",crear:!1,modificar:!1,borrar:!1,consultar:!1,user_id:""},{id:2,modulo:"TAREAS",crear:!1,modificar:!1,borrar:!1,consultar:!1,user_id:""}]),Object(b["a"])(this,"header",{}),k.a.defaults.withCredentials=!0,k.a.defaults.baseURL="https://gestiontareas-jorge.herokuapp.com";var t=localStorage.getItem("user-token");this.header={headers:{Authorization:"Bearer "+t,"Content-type":"application/json"}}}return Object(v["a"])(e,[{key:"getModules",value:function(){return this.modules}},{key:"getAll",value:function(){return k.a.get("/api/permisos/",this.header)}},{key:"getByUser",value:function(e){return k.a.get("/api/permisos/mostrar/".concat(e),this.header)}},{key:"create",value:function(e){return k.a.post("/api/permisos/crear",e,this.header)}}]),e}(),M="TAREAS",R={name:"Task",components:{Navigation:w},data:function(){return{tasks:null,taskDialog:!1,deletetaskDialog:!1,deletetasksDialog:!1,security:{},task:{},selectedtasks:null,taskService:null,permissionService:null,filters:{},status:!1,finished:!1,alltask:!1,submitted:!1}},created:function(){var e=this;this.taskService=new E,this.permissionService=new U,this.permissionService.getAll().then((function(t){var a=t.data.data;for(var s in a)a[s].modulo==M&&(e.security=a[s])}))},mounted:function(){this.retrieveTask()},methods:{retrieveTask:function(){var e=this;this.taskService.getAll().then((function(t){e.tasks=t.data.data}))},formatCurrency:function(e){if(e)return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},openNew:function(){this.task={},this.submitted=!1,this.taskDialog=!0},hideDialog:function(){this.taskDialog=!1,this.submitted=!1},savetask:function(){var e=this;this.submitted=!0,this.task.estado=this.status?"S":"N";var t=this.task.fechavencimiento.getFullYear(),a=this.task.fechavencimiento.getMonth()+1,s=this.task.fechavencimiento.getDate();if(this.task.fechavencimiento=t+"-"+(a>9?a:"0"+a)+"-"+(s>9?s:"0"+s),this.task.nombre.trim()){if(this.task.id)this.$set(this.tasks,this.findIndexById(this.task.id),this.task),this.taskService.update(this.task.id,this.task).then((function(t){console.log(t),e.$toast.add({severity:"success",summary:"Successful",detail:"Tarea Actualizada",life:3e3})})).catch((function(e){return console.log(e)}));else{this.tasks.push(this.task);var i=this.task;this.taskService.create(i).then((function(){e.$toast.add({severity:"success",summary:"Successful",detail:"Tarea Creada",life:3e3})}))}this.taskDialog=!1,this.task={}}},edittask:function(e){this.task=Object(A["a"])({},e),this.taskDialog=!0,this.status="S"==this.task.estado},confirmDeletetask:function(e){this.task=e,this.deletetaskDialog=!0},deletetask:function(){var e=this;this.tasks=this.tasks.filter((function(t){return t.id!==e.task.id})),this.deletetaskDialog=!1,this.$toast.add({severity:"success",summary:"Successful",detail:"task Deleted",life:3e3}),this.taskService.delete(this.task.id).then((function(){})),this.task={}},confirmDeleteSelected:function(){this.deletetasksDialog=!0},findIndexById:function(e){return this.tasks.findIndex((function(t){return t.id==e}))},filterQuery:function(){var e=this,t="";this.finished?t+="?estado=S":t+="?estado=N",this.alltask||(t+="&user_id=S"),this.taskService.filterQuery(t).then((function(t){e.tasks=t.data.data}))}}},z=R,F=(a("f95e"),Object(n["a"])(z,N,q,!1,null,"346234dc",null)),G=F.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("Navigation"),a("Toast",{attrs:{position:"top-left",group:"tl"}}),a("div",[a("div",{staticClass:"card"},[a("DataTable",{ref:"dt",attrs:{value:e.users,dataKey:"id",paginator:!0,rows:10,filters:e.filters,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Mostrar {first} hasta {last} de {totalRecords} tareas",responsiveLayout:"scroll"},scopedSlots:e._u([{key:"header",fn:function(){return[a("div",{staticClass:"table-header"},[e.security.crear?a("Button",{staticClass:"p-button-primary p-mr-2",attrs:{label:"Nuevo",icon:"pi pi-plus"},on:{click:e.openNew}}):e._e(),a("h5",{staticClass:"p-m-0"},[e._v("Consultar tareas")]),e.security.consultar?a("span",{staticClass:"p-input-icon-left"},[a("i",{staticClass:"pi pi-search"}),a("InputText",{attrs:{placeholder:"Search..."},model:{value:e.filters["global"],callback:function(t){e.$set(e.filters,"global",t)},expression:"filters['global']"}})],1):e._e()],1)]},proxy:!0}])},[a("Column",{staticStyle:{"min-width":"8rem"},attrs:{field:"name",header:"Nombre",sortable:!0}}),a("Column",{staticStyle:{"min-width":"16rem"},attrs:{field:"email",header:"Correo",sortable:!0}}),a("Column",{staticStyle:{"min-width":"5rem"},attrs:{field:"administrador",header:"Administrador",sortable:!0},scopedSlots:e._u([{key:"body",fn:function(t){return[a("span",{class:"user-badge status-"+(t.data.estado?t.data.estado.toLowerCase():"")},[e._v(e._s(t.data.administrador?"Si":"No")+" ")])]}}])}),a("Column",{attrs:{exportable:!1},scopedSlots:e._u([{key:"body",fn:function(t){return[e.security.modificar?a("Button",{staticClass:"p-button-rounded p-button-info p-mr-2",attrs:{icon:"pi pi-lock"},on:{click:function(a){return e.editPermission(t.data)}}}):e._e(),e.security.modificar?a("Button",{staticClass:"p-button-rounded p-button-info p-mr-2",attrs:{icon:"pi pi-pencil"},on:{click:function(a){return e.edituser(t.data)}}}):e._e(),e.security.borrar?a("Button",{staticClass:"p-button-rounded p-button-warning",attrs:{icon:"pi pi-trash"},on:{click:function(a){return e.confirmDeleteuser(t.data)}}}):e._e()]}}])})],1)],1),a("Dialog",{staticClass:"p-fluid",style:{width:"450px"},attrs:{visible:e.userDialog,header:"Usuario",modal:!0},scopedSlots:e._u([{key:"footer",fn:function(){return[a("Button",{staticClass:"p-button-text",attrs:{label:"Cancelar",icon:"pi pi-times"},on:{click:e.hideDialog}}),a("Button",{staticClass:"p-button-text",attrs:{label:"Guardar",icon:"pi pi-check"},on:{click:e.saveuser}})]},proxy:!0}])},[a("div",{staticClass:"p-fluid p-column p-formgrid"},[a("div",{staticClass:"p-field"},[a("label",{attrs:{for:"name"}},[e._v("Nombre")]),a("InputText",{class:{"p-invalid":e.submitted&&!e.user.name},attrs:{id:"name",required:"true",autofocus:""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),e.submitted&&!e.user.name?a("small",{staticClass:"p-error"},[e._v("Nombre es requerida.")]):e._e()],1),a("div",{staticClass:"p-field"},[a("label",{attrs:{for:"email"}},[e._v("Correo")]),a("InputText",{class:{"p-invalid":e.submitted&&!e.user.email},attrs:{id:"email",required:"true",autofocus:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e.submitted&&!e.user.email?a("small",{staticClass:"p-error"},[e._v("Correo es requerido.")]):e._e()],1),a("div",{staticClass:"p-field p-col"},[a("label",{attrs:{for:"administrador"}},[e._v("Es administrador?")]),a("SelectButton",{class:{"p-invalid":e.submitted&&!e.user.administrador},attrs:{options:e.options,id:"administrador",optionLabel:"name"},model:{value:e.user.administrador,callback:function(t){e.$set(e.user,"administrador",t)},expression:"user.administrador"}}),e.submitted&&!e.user.administrador?a("small",{staticClass:"p-error"},[e._v("Tipo de usuario es requerido.")]):e._e()],1),a("div",{staticClass:"p-field p-col"},[a("label",{attrs:{for:"password"}},[e._v("Contraseña")]),a("Password",{staticClass:"p-d-block",class:{"p-invalid":e.submitted&&!e.user.password&&1==e.requesttype.value},attrs:{id:"password",placeholder:"Ingrese Contraseña"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e.submitted&&!e.user.password&&1==e.requesttype.value?a("small",{staticClass:"p-error"},[e._v("Contraseña es requerida.")]):e._e()],1),a("div",{staticClass:"p-field p-col"},[a("label",{attrs:{for:"password"}},[e._v("Confirmar Contraseña")]),a("Password",{staticClass:"p-d-block",class:{"p-invalid":e.submitted&&!e.user.confirmation_password&&1==e.requesttype.value},attrs:{id:"password",placeholder:"Ingrese Contraseña"},model:{value:e.user.confirmation_password,callback:function(t){e.$set(e.user,"confirmation_password",t)},expression:"user.confirmation_password"}}),e.submitted&&!e.user.confirmation_password&&1==e.requesttype.value?a("small",{staticClass:"p-error"},[e._v("Confirmacion de contraseña es requerida.")]):e._e()],1)])]),a("Dialog",{staticClass:"p-fluid",style:{width:"450px"},attrs:{visible:e.userDialogPermits,header:"Permisos",modal:!0},scopedSlots:e._u([{key:"footer",fn:function(){return[a("Button",{staticClass:"p-button-text",attrs:{label:"Cancelar",icon:"pi pi-times"},on:{click:e.hideDialogPermits}}),a("Button",{staticClass:"p-button-text",attrs:{label:"Guardar",icon:"pi pi-check"},on:{click:e.savePermission}})]},proxy:!0}])},[a("table",{staticClass:"permission-table"},[a("thead",[a("tr",[a("th",[e._v("Modulo")]),a("th",[e._v("Crear")]),a("th",[e._v("Modificar")]),a("th",[e._v("Borrar")]),a("th",[e._v("Consultar")])])]),a("tbody",e._l(e.permissions,(function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.modulo))]),a("td",[a("ToggleButton",{attrs:{onIcon:"pi pi-check",offIcon:"pi pi-times"},model:{value:t.crear,callback:function(a){e.$set(t,"crear",a)},expression:"item.crear"}})],1),a("td",[a("ToggleButton",{attrs:{onIcon:"pi pi-check",offIcon:"pi pi-times"},model:{value:t.modificar,callback:function(a){e.$set(t,"modificar",a)},expression:"item.modificar"}})],1),a("td",[a("ToggleButton",{attrs:{onIcon:"pi pi-check",offIcon:"pi pi-times"},model:{value:t.borrar,callback:function(a){e.$set(t,"borrar",a)},expression:"item.borrar"}})],1),a("td",[a("ToggleButton",{attrs:{onIcon:"pi pi-check",offIcon:"pi pi-times"},model:{value:t.consultar,callback:function(a){e.$set(t,"consultar",a)},expression:"item.consultar"}})],1)])})),0)])]),a("Dialog",{style:{width:"450px"},attrs:{visible:e.deleteuserDialog,header:"Confirmar",modal:!0},scopedSlots:e._u([{key:"footer",fn:function(){return[a("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:function(t){e.deleteuserDialog=!1}}}),a("Button",{staticClass:"p-button-text",attrs:{label:"Si",icon:"pi pi-check"},on:{click:e.deleteuser}})]},proxy:!0}]),model:{value:e.deleteuserDialog,callback:function(t){e.deleteuserDialog=t},expression:"deleteuserDialog"}},[a("div",{staticClass:"confirmation-content"},[a("i",{staticClass:"pi pi-exclamation-triangle p-mr-3",staticStyle:{"font-size":"2rem"}}),e.user?a("span",[e._v("Estas seguro de eliminar el usuario "),a("b",[e._v(e._s(e.user.name))]),e._v("?")]):e._e()])])],1)],1)},K=[],H=(a("d81d"),a("b0c0"),a("7db0"),function(){function e(){Object(h["a"])(this,e),Object(b["a"])(this,"header",{}),k.a.defaults.withCredentials=!0,k.a.defaults.baseURL="https://gestiontareas-jorge.herokuapp.com";var t=localStorage.getItem("user-token");this.header={headers:{Authorization:"Bearer "+t,"Content-type":"application/json"}}}return Object(v["a"])(e,[{key:"getAll",value:function(){return k.a.get("/api/usuarios",this.header)}},{key:"create",value:function(e){return k.a.post("/api/usuarios/crear",e,this.header)}},{key:"update",value:function(e,t){return k.a.put("/api/usuarios/actualizar/".concat(e),t,this.header)}},{key:"delete",value:function(e){return k.a.delete("/api/usuarios/borrar/".concat(e),this.header)}},{key:"findByTitle",value:function(e){return k.a.get("/api/usuarios?title=".concat(e),this.header)}}]),e}()),J="USUARIOS",V={name:"User",components:{Navigation:w},data:function(){return{users:null,permissions:null,userDialog:!1,deleteuserDialog:!1,deleteusersDialog:!1,userDialogPermits:!1,user:{},permission:{},security:{},options:[{name:"Si",value:!0},{name:"No",value:!1}],selectedusers:null,selectedPermission:null,userService:null,permissionService:null,filters:{},item:{},submitted:!1,requesttype:{name:"",value:0},statuses:[{label:"INSTOCK",value:"S"},{label:"LOWSTOCK",value:"N"}]}},created:function(){this.userService=new H,this.permissionService=new U},mounted:function(){var e=this;this.retrieveUser(),this.permissionService.getAll().then((function(t){var a=t.data.data;for(var s in a)a[s].modulo==J&&(e.security=a[s])}))},methods:{retrieveUser:function(){var e=this;this.userService.getAll().then((function(t){e.users=t.data.data}))},retrievePermission:function(){var e=this,t=(new U).getModules(),a=[];this.permissionService.getByUser(this.user.id).then((function(s){var i=s.data.data;i&&i.length>0?a=t.map((function(e){for(var t in i)i[t].modulo==e.modulo&&(e.crear=i[t].crear,e.modificar=i[t].modificar,e.borrar=i[t].borrar,e.consultar=i[t].consultar);return e})):t.map((function(e){a.push(e)})),e.permissions=a}))},formatCurrency:function(e){if(e)return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},openNew:function(){this.user={administrador:{name:"No",value:!1}},this.submitted=!1,this.userDialog=!0,this.requesttype.name="Nuevo",this.requesttype.value=1},hideDialog:function(){this.userDialog=!1,this.submitted=!1},hideDialogPermits:function(){this.userDialogPermits=!1,this.submitted=!1},saveuser:function(){var e=this;if(this.submitted=!0,this.user.name.trim()){if(this.user.administrador=this.user.administrador.value,this.user.id)this.$set(this.users,this.findIndexById(this.user.id),this.user),this.userService.update(this.user.id,this.user).then((function(){return e.$toast.add({severity:"success",summary:"Successful",detail:"user Updated",life:3e3}),!0}));else{this.users.push(this.user);var t=this.user;this.userService.create(t).then((function(){e.$toast.add({severity:"success",summary:"Successful",detail:"user Created",life:3e3})}))}this.userDialog=!1,this.user={}}},savePermission:function(){var e=this;this.permissionService.create({permisos:this.permissions,user_id:this.user.id}).then((function(){e.$toast.add({severity:"success",summary:"Successful",detail:"permission Created",life:3e3})})),this.userDialogPermits=!1},editPermission:function(e){this.user=Object(A["a"])({},e),this.userDialogPermits=!0,this.retrievePermission()},edituser:function(e){var t=this;this.user=Object(A["a"])({},e),this.user.administrador=this.options.find((function(e){return e.value==t.user.administrador})),this.userDialog=!0,this.requesttype.name="Editar",this.requesttype.value=2},confirmDeleteuser:function(e){this.user=e,this.deleteuserDialog=!0},deleteuser:function(){var e=this;this.users=this.users.filter((function(t){return t.id!==e.user.id})),this.deleteuserDialog=!1,this.$toast.add({severity:"success",summary:"Successful",detail:"user Deleted",life:3e3}),this.userService.delete(this.user.id).then((function(){})),this.user={}},confirmDeleteSelected:function(){this.deleteusersDialog=!0},findIndexById:function(e){return this.users.findIndex((function(t){return t.id==e}))}}},W=V,Y=(a("0e87"),Object(n["a"])(W,Q,K,!1,null,"6e5e3f50",null)),X=Y.exports;s["default"].use(c["a"]);var Z=localStorage.getItem("user-token")||"",ee=function(e,t,a){Z?a("/"):a()},te=function(e,t,a){Z?a():a("/login")},ae=[{path:"/login",name:"Login",component:L,beforeEnter:ee},{path:"/",name:"Home",component:T,beforeEnter:te},{path:"/tareas",name:"Task",component:G,beforeEnter:te},{path:"/usuarios",name:"User",component:X,beforeEnter:te},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))},beforeEnter:te}],se=new c["a"]({mode:"history",base:"/",routes:ae}),ie=se,re=a("87e8"),ne=a.n(re),oe=a("ae6c"),le=a.n(oe),ue=a("f97a"),ce=a.n(ue),de=a("b7ec"),pe=a.n(de),fe=a("d7a9"),me=a.n(fe),he=a("174c"),ve=a.n(he),be=a("fa67"),ge=a.n(be),ke=a("2ccb"),ye=a.n(ke),Ce=a("2bc7"),_e=a.n(Ce),Se=a("1506"),we=a.n(Se),xe=a("885b"),De=a.n(xe),Pe=a("257a"),Te=a.n(Pe),Ie=a("ef85"),je=a.n(Ie),Be=a("935c"),Oe=a.n(Be),$e=a("9960"),Le=a.n($e),Ne=a("4af6"),qe=a.n(Ne),Ae=a("3b46"),Ee=a.n(Ae),Ue=a("1890"),Me=a.n(Ue),Re=a("9465"),ze=a.n(Re),Fe=a("896c"),Ge=a.n(Fe),Qe=a("3ce4"),Ke=a.n(Qe);a("098b"),a("e1ae"),a("4121"),a("bddf");s["default"].config.productionTip=!1,s["default"].use(ne.a),s["default"].component("Card",le.a),s["default"].component("Button",ce.a),s["default"].component("InputText",pe.a),s["default"].component("InputMask",me.a),s["default"].component("Password",ve.a),s["default"].component("Message",ye.a),s["default"].component("MegaMenu",ge.a),s["default"].component("DataTable",_e.a),s["default"].component("Column",we.a),s["default"].component("ColumnGroup",De.a),s["default"].component("Toolbar",Te.a),s["default"].component("Dialog",je.a),s["default"].component("Textarea",Oe.a),s["default"].component("Calendar",Le.a),s["default"].component("Toast",Ee.a),s["default"].component("SelectButton",Me.a),s["default"].component("Checkbox",ze.a),s["default"].component("ToggleButton",Ge.a),s["default"].component("InputSwitch",Ke.a),s["default"].use(qe.a),new s["default"]({router:ie,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d469:function(e,t,a){},e2bd:function(e,t,a){},f95e:function(e,t,a){"use strict";a("d469")}});
//# sourceMappingURL=app.5493d88c.js.map