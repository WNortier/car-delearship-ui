(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/car-delearship-ui/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"2af4":function(t,e,a){"use strict";var n=a("b2e6"),s=a.n(n);s.a},"3d70":function(t,e,a){"use strict";var n=a("d034"),s=a.n(n);s.a},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var n=a("2b0e"),s=a("5f5b");a("ab8b"),a("2dd8");n["default"].use(s["a"]);var r,o,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-container",[a("b-navbar-brand",{attrs:{href:"#",to:"/"}},[t._v("Autos Inventory")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"#",to:"/"}},[t._v("Home")]),a("b-nav-item",{attrs:{href:"#",to:"inventory"}},[t._v("Inventory")]),a("b-nav-item",{attrs:{href:"#",to:"statistics"}},[t._v("Statistics")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1),a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("em",[t._v("User")])]},proxy:!0}])},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1),a("b-nav-form")],1)],1)],1)],1)],1),a("header",{staticClass:"py-2 bg-info"},[a("b-container",[a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("h1",{staticClass:"text-left text-white"},[a("i",{class:t.icon}),t._v(" "+t._s(t.menuName)+" "),a("i",{staticClass:"icon"})])]),a("b-col",{attrs:{cols:"4"}}),a("b-col",{attrs:{cols:"4"}},[t.searchBar?a("b-nav-form",[a("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"text"},on:{click:function(e){return e.preventDefault(),t.emitSearch("Volkswagen")}}},[t._v("Search ")])],1):t._e()],1)],1)],1)],1),a("router-view")],1)},c=[],l=(a("b0c0"),{data:function(){return{search:"",value:"",icon:"fas fa-home",menuName:"Home",searchBar:!1}},watch:{$route:function(t,e){console.log(e.name),"Inventory"==t.name?(this.icon="fas fa-car",this.menuName="Inventory",this.searchBar=!0):"Home"==t.name?(this.icon="fas fa-home",this.menuName="Home",this.searchBar=!1):"Statistics"==t.name&&(this.icon="fas fa-chart-bar",this.searchBar=!1,this.menuName="Statistics")}}}),u=l,d=(a("034f"),a("2877")),f=Object(d["a"])(u,i,c,!1,null,null,null),b=f.exports,h=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("section",{staticClass:"py-4 mb-4 bg-light",attrs:{id:"actions"}},[a("b-container",[a("b-row",[a("div",{staticClass:"col-md-3 my-1"},[a("router-link",{staticClass:"btn btn-primary btn-block text-white",attrs:{to:"/inventory"}},[a("i",{staticClass:"fas fa-plus"}),t._v(" View Inventory")])],1),a("div",{staticClass:"col-md-3 my-1"},[a("router-link",{staticClass:"btn btn-warning btn-block text-white",attrs:{to:"/statistics"}},[a("i",{staticClass:"fas fa-plus"}),t._v(" View Statistics ")])],1),a("div",{staticClass:"col-md-3 my-1"},[a("router-link",{staticClass:"btn btn-success btn-block text-white",attrs:{to:"/"}},[a("i",{staticClass:"fas fa-plus"}),t._v(" View Staff ")])],1)])],1)],1),a("Jumbotron",{attrs:{msg:"Welcome to Autos Inventory"}})],1)},v=[],p=a("5530"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("b-jumbotron",{attrs:{header:"",lead:t.msg}},[a("p",[t._v("Welcome")])])],1)])},g=[],y={data:function(){return{}},props:{msg:String}},k=y,w=(a("2af4"),Object(d["a"])(k,j,g,!1,null,"68573932",null)),C=w.exports,_=a("2f62"),x={data:function(){return{partnerz:[]}},components:{Jumbotron:C},computed:Object(p["a"])({},Object(_["b"])(["inventory"]))},O=x,D=Object(d["a"])(O,m,v,!1,null,null,null),S=D.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Inventory"},[a("section",{staticClass:"py-4 mb-4 bg-light",attrs:{id:"actions"}},[a("b-container",[a("b-row",[a("div",{staticClass:"col-md-3 my-1"},[a("button",{staticClass:"btn btn-primary btn-block text-white",on:{click:function(e){return t.getInventory()}}},[a("i",{staticClass:"fas fa-plus"}),t._v(" Total Inventory ")])]),a("div",{staticClass:"col-md-3 my-1"},[a("b-dropdown",{staticClass:"text-white",attrs:{id:"dropdown-1",text:t.colorDropDownText,block:"",variant:"warning"}},t._l(t.colors,(function(e,n){return a("b-dropdown-item",{key:n,attrs:{varient:"dark",value:e},on:{click:function(a){t.colorDropDownText=e,t.applyColorFilter()}}},[t._v(t._s(e))])})),1)],1),a("div",{staticClass:"col-md-3 my-1"},[a("b-dropdown",{attrs:{id:"dropdown-1",text:t.makeDropDownText,block:"",variant:"success"}},t._l(t.makes,(function(e,n){return a("b-dropdown-item",{key:n,staticClass:"text-white",attrs:{varient:"",value:e,"text-white":""},on:{click:function(a){t.makeDropDownText=e,t.applyMakeFilter()}}},[t._v(t._s(e))])})),1)],1)]),a("b-row",[a("div",{staticClass:"col-md-9"},[[a("div",[a("b-form-input",{attrs:{id:"range-1",type:"range",min:"0",max:"100"},on:{change:function(e){return t.getRangeOnCurrentFilter()}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("div",{staticClass:"float-left"},[t._v("Results: "+t._s(t.value))])],1)]],2)])],1)],1),a("b-container",{staticClass:"bv-example-row"},[a("b-row",[a("b-col",{attrs:{cols:"12"},scopedSlots:t._u([{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-danger my-2"},[a("b-spinner",{staticClass:"align-middle"}),a("strong",[t._v("Loading...")])],1)]},proxy:!0}])},[t.totalInventory&&!t.rangeFilter?a("b-table",{attrs:{refs:"table",id:"my-table",items:t.inventory}}):t.rangeFilter?a("b-table",{attrs:{refs:"table",id:"my-table",items:t.range}}):t._e()],1)],1)],1)],1)},F=[],E=(a("4de4"),a("caad"),a("b64b"),a("2532"),{data:function(){return{cars:[],colorDropDownText:"Select Color",makeDropDownText:"Select Make",testItems:[{make:"Volkswagen",model:"Jetta",color:"Blue",price:147285,reg_number:"CY 73015"}],totalInventory:!0,rangeFilter:!1,value:void 0}},watch:{value:function(){var t=this.$store.getters.inventory;console.log(t.length),this.value=t.length}},mounted:function(){this.totalInventory=!0,this.$store.dispatch("getInventory"),this.$store.dispatch("setColors"),this.$store.dispatch("setMakes")},methods:{applyColorFilter:function(){this.rangeFilter=!1,this.$store.dispatch("getColors",this.colorDropDownText),this.value=this.filterCount,this.value=this.filterCount},applyMakeFilter:function(){this.rangeFilter=!1,this.$store.dispatch("getMakes",this.makeDropDownText);var t=this.$store.getters.inventory;console.log(t.length),this.value=t.length},getInventory:function(){this.rangeFilter=!1,this.$store.dispatch("getInventory"),this.$store.dispatch("getFilterCount"),this.value=this.filterCount},getRangeOnCurrentFilter:function(){var t={colors:this.colorFilter,makes:this.makesFilter,inventory:this.totalInventory},e=Object.keys(t),a=e.filter((function(e){return t[e]}));switch(console.log(a),a){case a.includes("colors"):this.rangeFilter=!0,this.$store.dispatch("getRangeOnCurrentFilter",{colors:this.colorFilter,makes:this.makesFilter,inventory:this.totalInventory,amount:this.value});break;case a.includes("makes"):this.rangeFilter=!0,this.$store.dispatch("getRangeOnCurrentFilter",{colors:this.colorFilter,makes:this.makesFilter,inventory:this.totalInventory,amount:this.value});break;default:this.rangeFilter=!0,this.$store.dispatch("getRangeOnCurrentFilter",{colors:this.colorFilter,makes:this.makesFilter,inventory:this.totalInventory,amount:this.value})}}},computed:Object(_["c"])(["inventory","colors","makes","range","filterCount"])}),I=E,z=(a("884b"),Object(d["a"])(I,T,F,!1,null,"0298fd72",null)),M=z.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("stats",{attrs:{stock:t.inventory}})],1)},N=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Statistics"},[a("section",{staticClass:"py-4 mb-4 bg-light",attrs:{id:"actions"}},[a("b-container",[a("b-row",[a("div",{staticClass:"col-md-3 my-1"},[a("button",{staticClass:"btn btn-primary btn-block text-white"},[a("i",{staticClass:"fas fa-plus"}),t._v(" Total Inventory ")])]),a("div",{staticClass:"col-md-3 my-1"},[a("b-dropdown",{staticClass:"text-white",attrs:{id:"dropdown-1",text:t.colorDropDownText,block:"",variant:"warning"}},t._l(t.colors,(function(e,n){return a("b-dropdown-item",{key:n,attrs:{varient:"dark",value:e},on:{click:function(a){t.colorDropDownText=e,t.applyColorFilter()}}},[t._v(t._s(e))])})),1)],1),a("div",{staticClass:"col-md-3 my-1"},[a("b-dropdown",{attrs:{id:"dropdown-1",text:t.makeDropDownText,block:"",variant:"success"}},t._l(t.makes,(function(e,n){return a("b-dropdown-item",{key:n,staticClass:"text-white",attrs:{varient:"",value:e,"text-white":""},on:{click:function(a){t.makeDropDownText=e,t.applyMakeFilter()}}},[t._v(t._s(e))])})),1)],1)])],1)],1),a("b-container",[t.loaded?a("bar-chart",{ref:"chart",attrs:{chartData:t.chartData,labels:t.labels}}):t._e(),t.loaded?a("bar-chart",{ref:"chart",attrs:{chartData:t.colorData,labels:t.colorLabels}}):t._e()],1)],1)},A=[],L=(a("d81d"),a("d3b7"),a("07ac"),a("25f0"),a("1fca")),P=(L["b"].reactiveProp,{extends:L["a"],mixins:[L["b"].reactiveProp],props:{chartData:{type:Array,default:null},labels:{type:Array,default:null}},mounted:function(){this.render()},watch:{chartData:function(t,e){console.log("here"),this.render()}},methods:{render:function(){this.renderChart({labels:this.labels,datasets:this.chartData},{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}})}}}),G=P,B=Object(d["a"])(G,r,o,!1,null,null,null),V=B.exports,U=a("bc3a"),H=a.n(U),J={props:["stock"],components:{BarChart:V},data:function(){return{colorDropDownText:"Select Color",makeDropDownText:"Select Make",loaded:!1,chartData:[],labels:[],colorData:[],colorLabels:[]}},methods:{generateColor:function(){for(var t=0;t<this.chartData.length;t++)this.chartData[t].backgroundColor.push("#"+(16777215*Math.random()<<0).toString(16))},applyMakeFilter:function(){this.loaded=!1,this.chartData.length=0,this.colorData.length=0;for(var t=this,e=this.stock.filter((function(e){return e.make==t.makeDropDownText})),a=e.map((function(t){return t.model})),n=e.map((function(t){return t.color})),s={},r=0,o=n.length;r<o;r++)s[n[r]]=(s[n[r]]||0)+1;console.log(s);var i={};for(r=0,o=a.length;r<o;r++)i[a[r]]=(i[a[r]]||0)+1;n=Object.keys(s);for(var c=Object.values(s),l=0;l<Object.keys(s).length;l++)this.colorData.push({label:n[l],backgroundColor:[],data:[c[l]]});this.colorLabels[0]="Colors";for(var u=Object.keys(i),d=Object.values(i),f=0;f<Object.keys(i).length;f++)this.chartData.push({label:u[f],backgroundColor:[],data:[d[f]]});this.labels[0]="Makes",this.generateColor(),this.loaded=!0,console.log(this.colorData),console.log(this.colorLabels)}},mounted:function(){this.$store.dispatch("setColors"),this.$store.dispatch("setMakes")},created:function(){},computed:Object(_["c"])(["inventory","colors","makes","range"])},Y=J,K=(a("3d70"),Object(d["a"])(Y,R,A,!1,null,null,null)),q=K.exports,W={data:function(){return{}},components:{Stats:q},mounted:function(){this.$store.dispatch("getInventory")},computed:Object(p["a"])({},Object(_["b"])(["inventory"]))},Z=W,Q=Object(d["a"])(Z,$,N,!1,null,null,null),X=Q.exports;n["default"].use(h["a"]);var tt=[{path:"/",name:"Home",component:S},{path:"/inventory",name:"Inventory",component:M},{path:"/statistics",name:"Statistics",component:X}],et=new h["a"]({mode:"history",base:"/car-delearship-ui/",routes:tt}),at=et;a("fb6a"),a("a9e3");n["default"].use(_["a"]);var nt=new _["a"].Store({state:{inventory:[],filteredColors:[],filteredMakes:[],colors:[],makes:[],range:[],filterCount:0},getters:{inventory:function(t){return t.inventory},filterCount:function(t){return t.filterCount}},mutations:{GET_FILTERCOUNT:function(t){t.filterCount=t.inventory.length,console.log(t.filterCount)},GET_INVENTORY:function(t,e){t.inventory=e,console.log(t.inventory),console.log(t.inventory.length)},GET_COLORS:function(t,e){t.inventory=e},GET_MAKES:function(t,e){t.inventory=e,console.log(t.inventory),console.log(t.inventory.length)},SET_COLORS:function(t,e){e.pop();e.unshift("Select Color"),t.colors=e},SET_MAKES:function(t,e){e.unshift("Select Make"),t.makes=e},APPLY_RANGE:function(t,e){console.log(e);var a=Object.keys(e),n=a.filter((function(t){return e[t]}));switch(n){case n.includes("colors"):t.range=t.filteredColors.slice(0,Number(e.amount));break;case n.includes("makes"):t.range=t.filteredMakes.slice(0,Number(e.amount));break;default:t.range=t.inventory.slice(0,Number(e.amount))}console.log(t.range)}},actions:{getInventory:function(t){var e=t.commit;H.a.get("https://api-tutor.herokuapp.com/v1/cars").then((function(t){return t.data})).then((function(t){e("GET_INVENTORY",t)}))},getColors:function(t,e){var a=t.commit;H.a.get("https://api-tutor.herokuapp.com/v1/cars/color/"+e).then((function(t){return t.data})).then((function(t){a("GET_COLORS",t)}))},getMakes:function(t,e){var a=t.commit;H.a.get("https://api-tutor.herokuapp.com/v1/cars/make/"+e).then((function(t){return t.data})).then((function(t){a("GET_MAKES",t)}))},getFilterCount:function(t){var e=t.commit;e("GET_FILTERCOUNT")},setColors:function(t){var e=t.commit;H.a.get("https://api-tutor.herokuapp.com/v1/colors").then((function(t){return t.data})).then((function(t){e("SET_COLORS",t)}))},setMakes:function(t){var e=t.commit;H.a.get("https://api-tutor.herokuapp.com/v1/makes").then((function(t){return t.data})).then((function(t){e("SET_MAKES",t)}))},getRangeOnCurrentFilter:function(t,e){var a=t.commit;a("APPLY_RANGE",e)}},modules:{}});n["default"].config.productionTip=!1,new n["default"]({router:at,store:nt,render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,a){},"884b":function(t,e,a){"use strict";var n=a("9541"),s=a.n(n);s.a},9541:function(t,e,a){},b2e6:function(t,e,a){},d034:function(t,e,a){}});
//# sourceMappingURL=app.333f92fd.js.map