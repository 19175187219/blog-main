webpackJsonp([6],{"4X//":function(t,a){},P95v:function(t,a){},gejy:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("Cz8s"),n=e("MQwy"),s={data:function(){return{rewardData:"",tableData:[{payTime:"2021-10-23",name:"智障少女欢乐多",money:"188"},{payTime:"2021-10-28",name:"刺猬",money:"50"},{payTime:"2021-11-03",name:"迅捷小鹿",money:"30"}]}},methods:{showInitDate:function(t,a){return initDate(t,a)}},components:{},created:function(){}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tRewardBox tcommonBox"},[t._m(0),t._v(" "),e("section",[t._m(1),t._v(" "),e("h1",[t._v("赞赏说明：")]),t._v(" "),e("p",[t._v("\n      如果我的课程对你有所帮助，你可以请作者喝杯咖啡表示鼓励\n      ☕️)请备注留下你的姓名/昵称方便我公布赞赏记录。\n    ")]),t._v(" "),e("hr"),t._v(" "),e("h1",[t._v("赞赏方式：")]),t._v(" "),e("el-row",{attrs:{gutter:30}},[e("el-col",{staticClass:"donate-item",attrs:{span:12}},[e("div",{staticClass:"donate-tip"},[e("img",{attrs:{src:t.rewardData.wechat_image?t.rewardData.wechat_image:"static/img/wx_pay.png",onerror:t.$store.state.errorImg}}),t._v(" "),e("span",[t._v("微信扫一扫，请我喝杯咖啡")])])]),t._v(" "),e("el-col",{staticClass:"donate-item",attrs:{span:12}},[e("div",{staticClass:"donate-tip"},[e("img",{attrs:{src:t.rewardData.alipay_image?t.rewardData.alipay_image:"static/img/ali_pay.png",onerror:t.$store.state.errorImg}}),t._v(" "),e("span",{staticStyle:{"padding-top":"14px"}},[t._v("支付宝扫一扫，请我喝杯咖啡")])])])],1),t._v(" "),e("h1",[t._v("@赞赏记录：")]),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{prop:"payTime",label:"日期",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"name",label:"赞赏人",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{prop:"money",label:"金额",align:"center"}})],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("header",[a("h1",[a("a",{attrs:{href:"#/DetailShare",target:"_blank"}},[this._v(" 赞赏 ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("img",{staticClass:"coffee",staticStyle:{"max-width":"20%"},attrs:{src:"static/img/coffee.jpg",alt:""}})])}]};var l=e("VU/8")(s,i,!1,function(t){e("P95v")},null,null).exports,o={name:"Reward",data:function(){return{}},methods:{},components:{"sg-nav":r.a,"sg-reward":l,"sg-rightlist":n.a},created:function(){}},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("sg-nav"),this._v(" "),a("div",{staticClass:"container"},[a("el-row",{attrs:{gutter:30}},[a("el-col",{staticStyle:{transition:"all .5s ease-out","margin-bottom":"30px"},attrs:{sm:24,md:16}},[a("sg-reward")],1),this._v(" "),a("el-col",{attrs:{sm:24,md:8}},[a("sg-rightlist")],1)],1)],1)],1)},staticRenderFns:[]};var m=e("VU/8")(o,c,!1,function(t){e("4X//")},null,null);a.default=m.exports}});