(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37a18be4"],{"615b":function(t,e,a){},"65e0":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{attrs:{icon:""},on:{click:t.toggleFavorite}},[void 0!=this.favorite?a("v-icon",{attrs:{color:"#91E0AC"}},[t._v("mdi-heart")]):a("v-icon",[t._v("mdi-heart")])],1)],1)},s=[],o=(a("7db0"),{props:["id"],computed:{favorite:function(){var t=this;return this.$store.state.favorites.find((function(e){var a=e.product_id;return a==t.id}))},user:function(){return this.$store.state.user}},methods:{toggleFavorite:function(){null==this.user?this.$store.dispatch("setMessage",{message:"Please Log In to Add Favorites",error:!0}):void 0!=this.favorite?this.$store.dispatch("removeFavorite",this.id):this.$store.dispatch("addFavorite",this.id)}}}),i=o,n=a("2877"),c=a("6544"),d=a.n(c),l=a("8336"),u=a("132d"),v=Object(n["a"])(i,r,s,!1,null,null,null);e["a"]=v.exports;d()(v,{VBtn:l["a"],VIcon:u["a"]})},"7b0f":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pt-5",attrs:{fluid:""}},[a("v-row",{staticClass:"px-5"},t._l(t.productList,(function(t){return a("v-col",{key:t.id,attrs:{cols:12,md:"3"}},[a("product-card",{attrs:{product:t}})],1)})),1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-card",{class:{"on-hover":r},attrs:{elevation:r?12:2}},[a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/product/"+t.product.id}},[a("v-img",{staticClass:"white--text align-end",attrs:{src:t.product.image,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"250px","data-test":"product-card-image"}},[a("v-card-title",{attrs:{"data-test":"product-card-title"},domProps:{textContent:t._s(t.product.title)}})],1)],1),a("v-card-actions",[a("div",{staticClass:"font-weight-medium ml-1"},[t._v(" $"+t._s(t.product.price)+" ")]),a("v-spacer"),a("add-favorite-icon",{attrs:{id:t.product.id}})],1)],1)]}}])})],1)},i=[],n=a("65e0"),c={props:["product"],components:{"add-favorite-icon":n["a"]}},d=c,l=a("2877"),u=a("6544"),v=a.n(u),h=a("b0af"),p=a("99d9"),f=a("16b7"),g=a("f2e7"),m=a("58df"),b=a("d9bd"),_=Object(m["a"])(f["a"],g["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(b["c"])("v-hover should only contain a single element",this),t)):(Object(b["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),y=a("adda"),C=a("2fa4"),$=Object(l["a"])(d,o,i,!1,null,null,null),j=$.exports;v()($,{VCard:h["a"],VCardActions:p["a"],VCardTitle:p["c"],VHover:_,VImg:y["a"],VSpacer:C["a"]});var k={props:["productList"],components:{"product-card":j}},x=k,O=a("62ad"),V=a("a523"),w=a("0fd9"),E=Object(l["a"])(x,r,s,!1,null,null,null);e["a"]=E.exports;v()(E,{VCol:O["a"],VContainer:V["a"],VRow:w["a"]})},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return c}));var r=a("b0af"),s=a("80d2"),o=Object(s["g"])("v-card__actions"),i=Object(s["g"])("v-card__subtitle"),n=Object(s["g"])("v-card__text"),c=Object(s["g"])("v-card__title");r["a"]},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var r=a("5530"),s=(a("615b"),a("10d2")),o=a("297c"),i=a("1c87"),n=a("58df");e["a"]=Object(n["a"])(o["a"],i["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-card":!0},i["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(r["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},d344:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("product-list",{attrs:{productList:t.products}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-center text-h4 mt-10"},[a("h1",[t._v("Inventory")])])}],o=a("7b0f"),i={components:{"product-list":o["a"]},data:function(){return{}},computed:{products:function(){return this.$store.state.products}}},n=i,c=a("2877"),d=Object(c["a"])(n,r,s,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-37a18be4.8bbdd0f0.js.map