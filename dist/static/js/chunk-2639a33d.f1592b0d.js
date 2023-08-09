(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2639a33d"],{1:function(e,t){},2:function(e,t){},3:function(e,t){},"706a":function(e,t,l){},"7cb5":function(e,t,l){"use strict";l("706a")},"800b":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-row",{staticStyle:{"margin-top":"10px"},attrs:{gutter:20}},[l("el-col",{staticStyle:{"margin-bottom":"20px"},attrs:{md:24,lg:8}},[l("el-card",[l("totBudget")],1)],1),l("el-col",{staticStyle:{"margin-bottom":"20px"},attrs:{md:24,lg:16}},[l("el-card",[l("barChart")],1)],1)],1),l("el-row",[l("el-col",[l("el-card",[l("budgetTab",{staticStyle:{height:"800px"}})],1)],1)],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("span",[e._v("项目总预算")]),l("el-divider",{attrs:{direction:"vertical"}}),l("span",[e._v("999,999,999")])],1)},n=[],i={data:function(){return{}}},s=i,c=l("2877"),d=Object(c["a"])(s,r,n,!1,null,null,null),u=d.exports,p=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticStyle:{height:"300px"},attrs:{id:"barChart"}})},m=[],_=l("313e"),f={data:function(){return{myChart:""}},mounted:function(){this.$nextTick((function(){this.myChart=_["a"](document.getElementById("barChart")),this.myChart.showLoading();var e=this.getBarChart();this.myChart.setOption(e),this.myChart.hideLoading()}))},methods:{getBarChart:function(){return{type:"bar",xAxis:{type:"category",data:["Labor","Materials","Outsourcing","Expense"]},yAxis:{type:"value"},series:[{data:[100,2e3,300,500],type:"bar"}]}}}},b=f,w=Object(c["a"])(b,p,m,!1,null,null,null),h=w.exports,g=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-tabs",{staticStyle:{height:"100%"}},[l("el-tab-pane",{attrs:{label:"人力费"}},[l("laborTab",{staticStyle:{width:"100%"}})],1),l("el-tab-pane",{attrs:{label:"外包费"}},[l("outsourcingTab",{staticStyle:{width:"100%"}})],1),l("el-tab-pane",{attrs:{label:"材料费"}},[l("materialsTab",{staticStyle:{width:"100%"}})],1),l("el-tab-pane",{attrs:{label:"经费"}},[e._v("经费")])],1)],1)},v=[],y=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-container",[l("el-header",[l("el-button-group",{staticStyle:{float:"right"}},[l("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.showDialog}},[e._v("添加")]),l("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.delLabor}},[e._v("删除")])],1)],1),l("el-main",[l("el-table",{ref:"laborsRef",staticStyle:{width:"100%"},attrs:{height:"600",border:"","show-summary":"",data:e.tableData,"summary-method":e.getSummaries},on:{select:e.handleTbChk}},[l("el-table-column",{attrs:{type:"selection",width:"50%",align:"center"}}),l("el-table-column",{attrs:{label:"PM",width:"50%",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-radio",{attrs:{label:t.$index},nativeOn:{change:function(l){return e.singleElection(t.row)}},model:{value:e.tempRadio,callback:function(t){e.tempRadio=t},expression:"tempRadio"}},[l("span")])]}}])}),l("el-table-column",{attrs:{label:"序列",width:"70%",align:"center",prop:"id"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.id))])]}}])}),l("el-table-column",{attrs:{label:"姓名",width:"80%",align:"center",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-popover",{attrs:{trigger:"hover",placement:"top"}},[l("p",[e._v("年龄: "+e._s(t.row.person.age))]),l("p",[e._v("性别: "+e._s(t.row.person.gender))]),l("p",[e._v("生日: "+e._s(t.row.person.birthday))]),l("p",[e._v("地址: "+e._s(t.row.person.address))]),l("p",[e._v("邮箱: "+e._s(t.row.person.email))]),l("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[l("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.person.name))])],1)])]}}])}),l("el-table-column",{attrs:{label:"其他信息",align:"center"}},[e._v(" TBD ")]),l("el-table-column",{attrs:{label:"职位",width:"110%",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("i",{staticClass:"el-icon-postcard"}),t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.pos_cd))]),t.row.rowEdit?l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择职位"},model:{value:t.row.pos_cd,callback:function(l){e.$set(t.row,"pos_cd",l)},expression:"scope.row.pos_cd"}},[l("el-option",{attrs:{label:"intern",value:"intern"}}),l("el-option",{attrs:{label:"staff",value:"staff"}}),l("el-option",{attrs:{label:"director",value:"director"}}),l("el-option",{attrs:{label:"manager",value:"manager"}}),l("el-option",{attrs:{label:"chief",value:"chief"}}),l("el-option",{attrs:{label:"ceo",value:"ceo"}})],1):e._e()]}}])}),l("el-table-column",{attrs:{label:"状态",width:"70%",align:"center",prop:"apr_cd"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-popover",{attrs:{trigger:"hover",placement:"top"}},[l("p",[e._v("状态: "+e._s(t.row.apr_cd))]),l("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},["approved"===t.row.apr_cd?l("i",{staticClass:"el-icon-check"}):e._e(),"waiting"===t.row.apr_cd?l("i",{staticClass:"el-icon-loading"}):e._e(),"cancel"===t.row.apr_cd?l("i",{staticClass:"el-icon-close"}):e._e()])])]}}])}),l("el-table-column",{attrs:{label:"单价",width:"100%",align:"center",prop:"unit"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("i",{staticClass:"el-icon-money"}),t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.unit))]),t.row.rowEdit?l("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入金额"},model:{value:t.row.unit,callback:function(l){e.$set(t.row,"unit",l)},expression:"scope.row.unit"}}):e._e()]}}])}),l("el-table-column",{attrs:{label:"工作天数",width:"100%",align:"center",prop:"work_day"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("i",{staticClass:"el-icon-date"}),l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.work_day)+"天")])]}}])}),l("el-table-column",{attrs:{label:"level",width:"150%",align:"center",prop:"level_cd"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-popover",{attrs:{trigger:"hover",placement:"top"}},[l("p",[e._v("level: "+e._s(t.row.level_cd)+" ")]),l("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[l("el-rate",{attrs:{disabled:!t.row.rowEdit,"text-color":"#ff9900"},model:{value:t.row.level_cd,callback:function(l){e.$set(t.row,"level_cd",l)},expression:"scope.row.level_cd"}})],1)])]}}])}),l("el-table-column",{attrs:{label:"开始日期",width:"130%",align:"center",prop:"iv_str_dt"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("i",{staticClass:"el-icon-time"}),t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.iv_str_dt))]),t.row.rowEdit?l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择开始日期"},model:{value:t.row.iv_end_dt,callback:function(l){e.$set(t.row,"iv_end_dt",l)},expression:"scope.row.iv_end_dt"}}):e._e()]}}])}),l("el-table-column",{attrs:{label:"结束日期",width:"130%",align:"center",prop:"iv_end_dt"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("i",{staticClass:"el-icon-time"}),t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.iv_end_dt))]),t.row.rowEdit?l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择结束日期"},model:{value:t.row.iv_end_dt,callback:function(l){e.$set(t.row,"iv_end_dt",l)},expression:"scope.row.iv_end_dt"}}):e._e()]}}])}),l("el-table-column",{attrs:{width:"90%",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("el-button",{attrs:{size:"mini",disabled:"waiting"===t.row.apr_cd},on:{click:function(e){t.row.rowEdit=!t.row.rowEdit}}},[e._v("编辑")]),t.row.rowEdit?l("el-button",{attrs:{size:"mini"},on:{click:function(e){t.row.rowEdit=!t.row.rowEdit}}},[e._v("确认")]):e._e()]}}])})],1),l("LaborPopup",{ref:"laborDialogRef"})],1),l("el-footer",[e._v("Footer")])],1)],1)},S=[],k=(l("d81d"),l("d3b7"),l("159b"),l("a434"),l("b775"));function E(e){return Object(k["a"])({url:"/goldstrongXXXI.github.io/labor/list",method:"get",params:e})}var x=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{title:"人力信息",size:"tiny",visible:e.dialogFormVisible,"before-close":e.handleClose}},[l("el-form",{ref:"laborInfo",attrs:{model:e.laborForm,"label-width":"80px",rules:e.rules}},[l("el-form-item",{attrs:{label:"姓名",prop:"name"}},[l("el-input",{staticStyle:{width:"100%"},model:{value:e.laborForm.person.name,callback:function(t){e.$set(e.laborForm.person,"name",t)},expression:"laborForm.person.name"}})],1),l("el-form-item",{attrs:{label:"性别",prop:"gender"}},[l("el-radio-group",{model:{value:e.laborForm.person.gender,callback:function(t){e.$set(e.laborForm.person,"gender",t)},expression:"laborForm.person.gender"}},[l("el-radio",{attrs:{label:"男"}}),l("el-radio",{attrs:{label:"女"}})],1)],1),l("el-form-item",{attrs:{label:"生日",prop:"birthday"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.laborForm.person.birthday,callback:function(t){e.$set(e.laborForm.person,"birthday",t)},expression:"laborForm.person.birthday"}})],1),l("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[l("el-input",{staticStyle:{width:"100%"},model:{value:e.laborForm.person.email,callback:function(t){e.$set(e.laborForm.person,"email",t)},expression:"laborForm.person.email"}})],1),l("el-form-item",{attrs:{label:"职位",prop:"pos_cd"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择职位"},model:{value:e.laborForm.pos_cd,callback:function(t){e.$set(e.laborForm,"pos_cd",t)},expression:"laborForm.pos_cd"}},[l("el-option",{attrs:{label:"intern",value:"intern"}}),l("el-option",{attrs:{label:"staff",value:"staff"}}),l("el-option",{attrs:{label:"director",value:"director"}}),l("el-option",{attrs:{label:"manager",value:"manager"}}),l("el-option",{attrs:{label:"chief",value:"chief"}}),l("el-option",{attrs:{label:"ceo",value:"ceo"}})],1)],1),l("el-form-item",{attrs:{label:"PM",prop:"pm_yn"}},[l("el-switch",{model:{value:e.laborForm.pm_yn,callback:function(t){e.$set(e.laborForm,"pm_yn",t)},expression:"laborForm.pm_yn"}})],1),l("el-form-item",{attrs:{label:"审批状态",prop:"apr_cd"}},[l("el-input",{staticStyle:{width:"100%"},attrs:{disabled:""},model:{value:e.laborForm.apr_cd,callback:function(t){e.$set(e.laborForm,"apr_cd",t)},expression:"laborForm.apr_cd"}})],1),l("el-form-item",{attrs:{label:"投入期间",required:""}},[l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{prop:"iv_str_dt"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.laborForm.iv_str_dt,callback:function(t){e.$set(e.laborForm,"iv_str_dt",t)},expression:"laborForm.iv_str_dt"}})],1)],1),l("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{prop:"iv_end_dt"}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.laborForm.iv_end_dt,callback:function(t){e.$set(e.laborForm,"iv_end_dt",t)},expression:"laborForm.iv_end_dt"}})],1)],1)],1),l("el-form-item",{attrs:{label:"工作天数"}},[l("el-input",{staticStyle:{width:"100%"},model:{value:e.laborForm.work_day,callback:function(t){e.$set(e.laborForm,"work_day",t)},expression:"laborForm.work_day"}})],1),l("el-form-item",{attrs:{label:"单价",prop:"unit"}},[l("el-input",{staticStyle:{width:"100%"},model:{value:e.laborForm.unit,callback:function(t){e.$set(e.laborForm,"unit",t)},expression:"laborForm.unit"}})],1),l("el-form-item",{attrs:{label:"Level"}},[l("el-rate",{staticStyle:{width:"100%"},model:{value:e.laborForm.level_cd,callback:function(t){e.$set(e.laborForm,"level_cd",t)},expression:"laborForm.level_cd"}})],1),l("el-form-item",{attrs:{label:"其他"}},[l("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("laborInfo")}}},[e._v("确认")]),l("el-button",{on:{click:e.handleClose}},[e._v("取消")])],1)],1)],1)],1)},C=[],F={props:{dialogVisible:{type:Boolean,default:!1}},data:function(){return{dialogFormVisible:!1,laborForm:{pos_cd:"",unit:"",work_day:"",level_cd:"",pm_yn:!1,apr_cd:"new",iv_dt:"",iv_str_dt:"",iv_end_dt:"",birthday:"",person:{name:"",age:"",gender:"",address:"",birthday:"",email:""}},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],pos_cd:[{required:!0,message:"请选择职位",trigger:"change"}],birthday:[{type:"date",required:!0,message:"请选择生日",trigger:"change"}],gender:[{required:!0,message:"请选择时间",trigger:"change"}],address:[{required:!0,message:"请选择时间",trigger:"blur"}],email:[{required:!0,message:"请填写单价",trigger:"blur"}]}}},methods:{openDialog:function(){this.dialogFormVisible=!0},submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},handleClose:function(){var e=this;console.log(this.$refs["laborInfo"]),this.$confirm("确认关闭？").then((function(t){e.$refs["laborInfo"].resetFields(),e.dialogFormVisible=!1})).catch((function(e){}))}}},D=F,$=Object(c["a"])(D,x,C,!1,null,null,null),T=$.exports,O={components:{LaborPopup:T},data:function(){return{tempRadio:!1,tempSelectRow:"",tableData:[],tempSelectedData:[]}},mounted:function(){var e=this;console.log("laborTab >>>"),E().then((function(t){e.tableData=t.data.items.map((function(t){return e.$set(t,"rowEdit",!1),t}))}))},methods:{getSummaries:function(e,t){console.log("columns, data",e,t);var l=[];return l},singleElection:function(e){this.tempSelectRow=this.tableData.indexOf(e)},handleTbChk:function(e,t){console.log("handleTbChk >>>>",e,t),this.tempSelectedData=e,console.log("tempSelectedData >>>>",this.tempSelectedData)},showDialog:function(){this.$refs.laborDialogRef.openDialog()},delLabor:function(){var e=this;this.tempSelectedData&&0!==this.tempSelectedData.length&&this.tableData.forEach((function(t,l){e.tempSelectedData.some((function(e){return e.id===t.id}))&&e.tableData.splice(l,1)}))},handleEdit:function(e,t){console.log("handleEdit >>>",e,t),console.log("laborsRef >>>",this.$refs.laborsRef),t.rowEdit=!1}}},R=O,j=Object(c["a"])(R,y,S,!1,null,null,null),I=j.exports,L=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-container",[l("el-header",[l("el-button-group",{staticStyle:{float:"right"}},[l("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.showDialog}},[e._v("添加")]),l("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.delOc}},[e._v("删除")])],1)],1),l("el-main",[l("el-table",{ref:"osRef",staticStyle:{width:"100%"},attrs:{height:"600",border:"","show-summary":"",data:e.tableData,"summary-method":e.getSummaries},on:{select:e.handleTbChk}},[l("el-table-column",{attrs:{type:"selection",width:"50%",align:"center"}}),l("el-table-column",{attrs:{label:"序列",width:"70%",align:"center",prop:"id"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.id))])]}}])}),l("el-table-column",{attrs:{label:"姓名",width:"70%",align:"center",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-popover",{attrs:{trigger:"hover",placement:"top"}},[l("p",[e._v("年龄: "+e._s(t.row.person.age))]),l("p",[e._v("性别: "+e._s(t.row.person.gender))]),l("p",[e._v("生日: "+e._s(t.row.person.birthday))]),l("p",[e._v("地址: "+e._s(t.row.person.address))]),l("p",[e._v("邮箱: "+e._s(t.row.person.email))]),l("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[l("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.person.name))])],1)])]}}])}),l("el-table-column",{attrs:{label:"公司",width:"100%",align:"center",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-popover",{attrs:{trigger:"hover",placement:"top"}},[l("p",[e._v("评价等级: "+e._s(t.row.company.rate))]),l("p",[e._v("外企与否: "+e._s(t.row.company.foreign_yn))]),l("p",[e._v("地址: "+e._s(t.row.company.address))]),l("p",[e._v("邮箱: "+e._s(t.row.company.email))]),l("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[l("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.company.name))])],1)])]}}])}),l("el-table-column",{attrs:{label:"职位",width:"110%",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("i",{staticClass:"el-icon-postcard"}),t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.pos_cd))]),t.row.rowEdit?l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择职位"},model:{value:t.row.pos_cd,callback:function(l){e.$set(t.row,"pos_cd",l)},expression:"scope.row.pos_cd"}},[l("el-option",{attrs:{label:"intern",value:"intern"}}),l("el-option",{attrs:{label:"staff",value:"staff"}}),l("el-option",{attrs:{label:"director",value:"director"}}),l("el-option",{attrs:{label:"manager",value:"manager"}}),l("el-option",{attrs:{label:"chief",value:"chief"}}),l("el-option",{attrs:{label:"ceo",value:"ceo"}})],1):e._e()]}}])}),l("el-table-column",{attrs:{label:"其他信息",align:"center"}},[e._v(" TBD ")]),l("el-table-column",{attrs:{label:"状态",width:"70%",align:"center",prop:"apr_cd"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-popover",{attrs:{trigger:"hover",placement:"top"}},[l("p",[e._v("状态: "+e._s(t.row.apr_cd))]),l("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},["approved"===t.row.apr_cd?l("i",{staticClass:"el-icon-check"}):e._e(),"waiting"===t.row.apr_cd?l("i",{staticClass:"el-icon-loading"}):e._e(),"cancel"===t.row.apr_cd?l("i",{staticClass:"el-icon-close"}):e._e()])])]}}])}),l("el-table-column",{attrs:{label:"单价",width:"110%",align:"center",prop:"unit"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("i",{staticClass:"el-icon-money"}),t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.unit))]),t.row.rowEdit?l("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入金额"},model:{value:t.row.unit,callback:function(l){e.$set(t.row,"unit",l)},expression:"scope.row.unit"}}):e._e()]}}])}),l("el-table-column",{attrs:{label:"汇率",width:"70%",align:"center",prop:"exchange_rate"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.exchange_rate))])]}}])}),l("el-table-column",{attrs:{label:"工作天数",width:"110%",align:"center",prop:"work_day"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("i",{staticClass:"el-icon-date"}),l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.work_day)+"天")])]}}])}),l("el-table-column",{attrs:{label:"开始日期",width:"130%",align:"center",prop:"iv_str_dt"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("i",{staticClass:"el-icon-time"}),t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.iv_str_dt))]),t.row.rowEdit?l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择开始日期"},model:{value:t.row.iv_end_dt,callback:function(l){e.$set(t.row,"iv_end_dt",l)},expression:"scope.row.iv_end_dt"}}):e._e()]}}])}),l("el-table-column",{attrs:{label:"结束日期",width:"130%",align:"center",prop:"iv_end_dt"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("i",{staticClass:"el-icon-time"}),t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.iv_end_dt))]),t.row.rowEdit?l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择结束日期"},model:{value:t.row.iv_end_dt,callback:function(l){e.$set(t.row,"iv_end_dt",l)},expression:"scope.row.iv_end_dt"}}):e._e()]}}])}),l("el-table-column",{attrs:{width:"90%",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("el-button",{attrs:{size:"mini",disabled:"waiting"===t.row.apr_cd},on:{click:function(e){t.row.rowEdit=!t.row.rowEdit}}},[e._v("编辑")]),t.row.rowEdit?l("el-button",{attrs:{size:"mini"},on:{click:function(e){t.row.rowEdit=!t.row.rowEdit}}},[e._v("确认")]):e._e()]}}])})],1),l("OutsourcingPopup",{ref:"ocDialogRef"})],1),l("el-footer",[e._v("Footer")])],1)],1)},P=[];function z(e){return Object(k["a"])({url:"/goldstrongXXXI.github.io/outsourcing/list",method:"get",params:e})}var X=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{title:"外包信息",size:"tiny",visible:e.dialogFormVisible,"before-close":e.handleClose}},[l("el-form",{ref:"outsourcingInfo",attrs:{model:e.outsourcingForm,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"公司名称",prop:"name"}},[l("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择公司"},on:{change:e.onChangeCompany},model:{value:e.outsourcingForm.company.name,callback:function(t){e.$set(e.outsourcingForm.company,"name",t)},expression:"outsourcingForm.company.name"}},e._l(e.tmpCompanies,(function(e){return l("el-option",{key:e.company_id,attrs:{label:e.name,value:e}})})),1)],1),l("el-form-item",{attrs:{label:"公司邮箱",prop:"email"}},[l("span",[e._v(e._s(e.outsourcingForm.company.email))])]),l("el-form-item",{attrs:{label:"公司地址",prop:"address"}},[l("span",[e._v(e._s(e.outsourcingForm.company.address))])]),l("el-form-item",{attrs:{label:"评价",prop:"rate"}},[l("span",[e._v(e._s(e.outsourcingForm.company.rate))])]),l("el-form-item",{attrs:{label:"外企与否",prop:"foreign_yn"}},[l("span",[e._v(e._s(e.outsourcingForm.company.foreign_yn))])]),l("el-table",{ref:"ocPopRef",staticStyle:{width:"100%"},attrs:{height:"600",border:"",data:e.tmpPeople},on:{select:e.handleTbChk}},[l("el-table-column",{attrs:{type:"selection",align:"center",selectable:e.getChkInputYn}}),l("el-table-column",{attrs:{label:"序列",width:"60",align:"center",prop:"emp_id"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.emp_id))])]}}])}),l("el-table-column",{attrs:{label:"姓名",align:"center",prop:"name",width:"70%"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.name))])]}}])}),l("el-table-column",{attrs:{label:"年龄",align:"center",width:"70%"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.age))])]}}])}),l("el-table-column",{attrs:{label:"性别",align:"center",width:"70%"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.gender))])]}}])}),l("el-table-column",{attrs:{label:"生日",align:"center",width:"95%"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.birthday))])]}}])}),l("el-table-column",{staticStyle:{width:"100%"},attrs:{label:"邮箱",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.email))])]}}])}),l("el-table-column",{attrs:{label:"地址",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.address))])]}}])}),l("el-table-column",{attrs:{label:"已投入",align:"center",width:"70%"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.isInputed))])]}}])})],1),l("el-form-item"),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ocPopRef")}}},[e._v("确认")]),l("el-button",{on:{click:e.handleClose}},[e._v("取消")])],1)],1)],1)],1)},B=[];function U(e){return Object(k["a"])({url:"/goldstrongXXXI.github.io/companies/list",method:"get",params:e})}function V(e){return Object(k["a"])({url:"/goldstrongXXXI.github.io/people/list",method:"get",params:e})}var q={props:{dialogVisible:{type:Boolean,default:!1}},data:function(){return{tmpCompanies:[],tmpPeople:[],dialogFormVisible:!1,outsourcingForm:{apr_cd:"new",person:{name:"",age:"",gender:"",address:"",birthday:"",email:""},company:{company_id:"",name:"",rate:"",foreign_yn:"",email:"",address:""}}}},methods:{getDataList:function(){var e=this;U().then((function(t){e.tmpCompanies=t.data.items})),V().then((function(t){e.tmpPeople=t.data.items}))},openDialog:function(){this.dialogFormVisible=!0},submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},handleClose:function(){var e=this;console.log(this.$refs["outsourcingInfo"]),this.$confirm("确认关闭？").then((function(t){e.$refs["outsourcingInfo"].resetFields(),e.dialogFormVisible=!1})).catch((function(e){}))},onChangeCompany:function(e){this.outsourcingForm.company=Object.assign(this.outsourcingForm.company,e),console.log("onChangeCompany >>>",e)},handleTbChk:function(e){console.log("handleTbChk >>>",e)},getChkInputYn:function(e){return!e.isInputed}}},M=q,A=Object(c["a"])(M,X,B,!1,null,null,null),N=A.exports,H={components:{OutsourcingPopup:N},data:function(){return{tempRadio:!1,tempSelectRow:"",tableData:[],tempSelectedData:[]}},mounted:function(){var e=this;console.log("outsourcingTab >>>"),z().then((function(t){e.tableData=t.data.items.map((function(t){return e.$set(t,"rowEdit",!1),t}))}))},methods:{getSummaries:function(e,t){console.log("columns, data",e,t);var l=[];return l},singleElection:function(e){this.tempSelectRow=this.tableData.indexOf(e)},handleTbChk:function(e,t){console.log("handleTbChk >>>>",e,t),this.tempSelectedData=e,console.log("tempSelectedData >>>>",this.tempSelectedData)},showDialog:function(){this.$refs.ocDialogRef.getDataList(),this.$refs.ocDialogRef.openDialog()},delOc:function(){var e=this;this.tempSelectedData&&0!==this.tempSelectedData.length&&this.tableData.forEach((function(t,l){e.tempSelectedData.some((function(e){return e.id===t.id}))&&e.tableData.splice(l,1)}))},handleEdit:function(e,t){console.log("handleEdit >>>",e,t),console.log("laborsRef >>>",this.$refs.laborsRef),t.rowEdit=!1}}},W=H,J=Object(c["a"])(W,L,P,!1,null,null,null),Q=J.exports,Y=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-container",[l("el-header",[l("el-button-group",{staticStyle:{float:"right"}},[l("updateItem",{attrs:{"on-success":e.afterSuccess}}),l("div",{staticStyle:{display:"inline-block"}},[l("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.delMa}},[e._v("删除")])],1)],1)],1),l("el-main",[l("el-table",{ref:"osRef",staticStyle:{width:"100%"},attrs:{height:"600",border:"","show-summary":"",data:e.tableData,"summary-method":e.getSummaries},on:{select:e.handleTbChk}},[l("el-table-column",{attrs:{type:"selection",width:"50%",align:"center"}}),l("el-table-column",{attrs:{label:"序列",width:"70%",align:"center",prop:"id"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.id))])]}}])}),l("el-table-column",{attrs:{label:"大分类",width:"100%",align:"center",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.large_type.value))]),t.row.rowEdit?l("el-select",{attrs:{size:"medium"},model:{value:t.row.large_type.value,callback:function(l){e.$set(t.row.large_type,"value",l)},expression:"scope.row.large_type.value"}},e._l(e.largeTypeList,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e()]}}])}),l("el-table-column",{attrs:{label:"小分类",width:"120%",align:"center",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.small_type.value))]),t.row.rowEdit?l("el-select",{attrs:{size:"medium"},model:{value:t.row.small_type.value,callback:function(l){e.$set(t.row.small_type,"value",l)},expression:"scope.row.small_type.value"}},e._l(e.smallTypeList,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e()]}}])}),l("el-table-column",{attrs:{label:"详细分类",width:"150%",align:"center",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.detail_type.value))]),t.row.rowEdit?l("el-select",{attrs:{size:"medium"},model:{value:t.row.detail_type.value,callback:function(l){e.$set(t.row.detail_type,"value",l)},expression:"scope.row.detail_type.value"}},e._l(e.detailTypeList,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e()]}}])}),l("el-table-column",{attrs:{label:"公司",width:"100%",align:"center",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-popover",{attrs:{trigger:"hover",placement:"top"}},[l("p",[e._v("评价等级: "+e._s(t.row.company.rate))]),l("p",[e._v("外企与否: "+e._s(t.row.company.foreign_yn))]),l("p",[e._v("地址: "+e._s(t.row.company.address))]),l("p",[e._v("邮箱: "+e._s(t.row.company.email))]),l("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[l("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.company.name))])],1)])]}}])}),l("el-table-column",{attrs:{label:"其他信息",align:"center"}},[e._v(" TBD ")]),l("el-table-column",{attrs:{label:"状态",width:"70%",align:"center",prop:"apr_cd"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-popover",{attrs:{trigger:"hover",placement:"top"}},[l("p",[e._v("状态: "+e._s(t.row.apr_cd))]),l("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},["approved"===t.row.apr_cd?l("i",{staticClass:"el-icon-check"}):e._e(),"waiting"===t.row.apr_cd?l("i",{staticClass:"el-icon-loading"}):e._e(),"cancel"===t.row.apr_cd?l("i",{staticClass:"el-icon-close"}):e._e()])])]}}])}),l("el-table-column",{attrs:{label:"个数",width:"70%",align:"center",prop:"count"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("i",{staticClass:"el-icon-money"}),t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.count))]),t.row.rowEdit?l("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入个数"},model:{value:t.row.count,callback:function(l){e.$set(t.row,"count",l)},expression:"scope.row.count"}}):e._e()]}}])}),l("el-table-column",{attrs:{label:"单价",width:"110%",align:"center",prop:"unit"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("i",{staticClass:"el-icon-money"}),t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.unit))]),t.row.rowEdit?l("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入金额"},model:{value:t.row.unit,callback:function(l){e.$set(t.row,"unit",l)},expression:"scope.row.unit"}}):e._e()]}}])}),l("el-table-column",{attrs:{label:"汇率",width:"70%",align:"center",prop:"exchange_rate"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.exchange_rate))])]}}])}),l("el-table-column",{attrs:{label:"开始日期",width:"130%",align:"center",prop:"iv_str_dt"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("i",{staticClass:"el-icon-time"}),t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.iv_str_dt))]),t.row.rowEdit?l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择开始日期"},model:{value:t.row.iv_str_dt,callback:function(l){e.$set(t.row,"iv_str_dt",l)},expression:"scope.row.iv_str_dt"}}):e._e()]}}])}),l("el-table-column",{attrs:{label:"结束日期",width:"130%",align:"center",prop:"iv_end_dt"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("i",{staticClass:"el-icon-time"}),t.row.rowEdit?e._e():l("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.iv_end_dt))]),t.row.rowEdit?l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择结束日期"},model:{value:t.row.iv_end_dt,callback:function(l){e.$set(t.row,"iv_end_dt",l)},expression:"scope.row.iv_end_dt"}}):e._e()]}}])}),l("el-table-column",{attrs:{width:"90%",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.rowEdit?e._e():l("el-button",{attrs:{size:"mini",disabled:"waiting"===t.row.apr_cd},on:{click:function(e){t.row.rowEdit=!t.row.rowEdit}}},[e._v("编辑")]),t.row.rowEdit?l("el-button",{attrs:{size:"mini"},on:{click:function(e){t.row.rowEdit=!t.row.rowEdit}}},[e._v("确认")]):e._e()]}}])})],1)],1),l("el-footer",[e._v("Footer")])],1)],1)},K=[];l("7db0");function G(e){return Object(k["a"])({url:"/goldstrongXXXI.github.io/materials/list",method:"get",params:e})}var Z=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticStyle:{display:"inline-block"}},[l("el-button",{attrs:{type:"primary",icon:"el-icon-edit",loading:e.loading},on:{click:e.handleUpdate}},[e._v("UPLOAD")]),l("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{click:e.onUpload}})],1)},ee=[],te=l("1146"),le=l.n(te),ae={props:{onSuccess:Function},data:function(){return{loading:!1}},methods:{handleUpdate:function(){console.log("handleUpdate >>>"),this.$refs["excel-upload-input"].click()},onUpload:function(e){console.log("onUpload >>>",e);var t=e.target.files,l=t[0];l&&(this.$refs["excel-upload-input"].value=null,this.readFile(l))},readFile:function(e){var t=this;return console.log("readFile >>>",le.a),this.loading=!0,new Promise((function(l,a){var o=new FileReader;o.onload=function(e){var a=e.target.result,o=le.a.read(a,{type:"array"}),r=o.SheetNames[0],n=o.Sheets[r],i=t.getHeaderRow(n),s=le.a.utils.sheet_to_json(n);console.log("results >>>",s),t.generateData({header:i,results:s}),t.loading=!1,l()},o.readAsArrayBuffer(e)}))},getHeaderRow:function(e){console.log("getHeaderRow >>>",e);var t,l=[],a=le.a.utils.decode_range(e["!ref"]);console.log("range >>>",a);var o=a.s.r;for(t=a.s.c;t<=a.e.c;++t){var r=e[le.a.utils.encode_cell({c:t,r:o})],n="UNKNOWN "+t;r&&r.t&&(n=le.a.utils.format_cell(r)),l.push(n)}return l},generateData:function(e){e.header;var t=e.results;this.onSuccess&&this.onSuccess(t)}}},oe=ae,re=(l("7cb5"),Object(c["a"])(oe,Z,ee,!1,null,null,null)),ne=re.exports,ie={components:{updateItem:ne},data:function(){return{loading:!1,tempRadio:!1,tempSelectRow:"",tableData:[],tempSelectedData:[],largeTypeList:[{label:"IT",value:"it"},{label:"OTHER",value:"other"}],smallTypeList:[{label:"hardware",value:"hardware"},{label:"software",value:"software"},{label:"office_supplies",value:"office_supplies"},{label:"personal_items",value:"personal_items"}],detailTypeList:[{label:"CPU",value:"cpu"},{label:"CPU_cooler",value:"cpu_cooler"},{label:"mainboard",value:"mainboard"},{label:"display",value:"display"},{label:"peripheral",value:""},{label:"hard_disk",value:"hard_disk"},{label:"graphics_card",value:"graphics_card"},{label:"Chassis",value:"chassis"},{label:"power_supply",value:"power_supply"},{label:"Windows11",value:"windows11"},{label:"MSDN",value:"msdn"},{label:"Chrome",value:"chorme"},{label:"Edge",value:"edge"},{label:"QQ",value:"qq"},{label:"Wechat",value:"wechat"},{label:"IDM",value:"idm"},{label:"FTP",value:"ftp"},{label:"7-zip",value:"7zip"},{label:"landline",value:"landline"},{label:"air_conditioner",value:"air_conditioner"},{label:"copier",value:"copier"},{label:"water_dispenser",value:"water_dispenser"},{label:"printer",value:"printer"},{label:"coffee_machine",value:"coffee_machine"},{label:"shredder",value:"shredder"},{label:"refrigerator",value:"refrigerator"},{label:"wordPad",value:"wordPad"},{label:"office_chair",value:"office_chair"},{label:"toothbrush",value:"toothbrush"},{label:"toothpaste",value:"toothpaste"},{label:"towel",value:"towel"},{label:"nail_clippers",value:"nail_clippers"},{label:"workwear",value:"workwear"}]}},mounted:function(){var e=this;console.log("outsourcingTab >>>"),G().then((function(t){e.tableData=t.data.items.map((function(t){return e.$set(t,"rowEdit",!1),t}))}))},methods:{getSummaries:function(e,t){console.log("columns, data",e,t);var l=[];return l},singleElection:function(e){this.tempSelectRow=this.tableData.indexOf(e)},handleTbChk:function(e,t){console.log("handleTbChk >>>>",e,t),this.tempSelectedData=e,console.log("tempSelectedData >>>>",this.tempSelectedData)},delMa:function(){var e=this;this.tempSelectedData&&0!==this.tempSelectedData.length&&this.tableData.forEach((function(t,l){e.tempSelectedData.some((function(e){return e.id===t.id}))&&e.tableData.splice(l,1)}))},afterSuccess:function(e){var t=this;console.log("afterSuccess >>>",e);var l=e.map((function(e){var l={company_id:"",name:"",rate:"",foreign_yn:"",email:"",address:""};return l=Object.assign(l,e),e["company"]=l,e["large_type"]=t.getTyleObjData(t.largeTypeList,e.large_type),e["small_type"]=t.getTyleObjData(t.smallTypeList,e.small_type),e["detail_type"]=t.getTyleObjData(t.detailTypeList,e.detail_type),e}));console.log("newFileData >>>",l),this.setFileData(l)},setFileData:function(e){var t=this;console.log("setFileData >>>",e),e.forEach((function(e){t.$set(e,"rowEdit",!1),e.id=t.tableData.length+1,console.log("setFileData, element >>>",e),t.tableData.push(e)}))},getTyleObjData:function(e,t){return e.find((function(e){return e.value===t}))}}},se=ie,ce=Object(c["a"])(se,Y,K,!1,null,null,null),de=ce.exports,ue={components:{laborTab:I,outsourcingTab:Q,materialsTab:de},data:function(){return{}}},pe=ue,me=Object(c["a"])(pe,g,v,!1,null,null,null),_e=me.exports,fe={components:{totBudget:u,barChart:h,budgetTab:_e},data:function(){return{}},mounted:function(){console.log("pjtInformation")}},be=fe,we=Object(c["a"])(be,a,o,!1,null,null,null);t["default"]=we.exports}}]);