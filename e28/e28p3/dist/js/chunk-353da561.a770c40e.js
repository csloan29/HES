(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-353da561"],{"615b":function(t,e,r){},"65e0":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-btn",{attrs:{icon:""},on:{click:t.toggleFavorite}},[void 0!=this.favorite?r("v-icon",{attrs:{color:"#91E0AC"}},[t._v("mdi-heart")]):r("v-icon",[t._v("mdi-heart")])],1)],1)},s=[],o=(r("7db0"),{props:["id"],computed:{favorite:function(){var t=this;return this.$store.state.favorites.find((function(e){var r=e.product_id;return r==t.id}))},user:function(){return this.$store.state.user}},methods:{toggleFavorite:function(){null==this.user?this.$store.dispatch("setMessage",{message:"Please Log In to Add Favorites",error:!0}):void 0!=this.favorite?this.$store.dispatch("removeFavorite",this.id):this.$store.dispatch("addFavorite",this.id)}}}),i=o,n=r("2877"),c=r("6544"),d=r.n(c),u=r("8336"),l=r("132d"),v=Object(n["a"])(i,a,s,!1,null,null,null);e["a"]=v.exports;d()(v,{VBtn:u["a"],VIcon:l["a"]})},"7b0f":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pt-5",attrs:{fluid:""}},[r("v-row",{staticClass:"px-5"},t._l(t.productList,(function(t){return r("v-col",{key:t.id,attrs:{cols:12,md:"3"}},[r("product-card",{attrs:{product:t}})],1)})),1)],1)},s=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return[r("v-card",{class:{"on-hover":a},attrs:{elevation:a?12:2}},[r("router-link",{staticClass:"text-decoration-none",attrs:{to:"/product/"+t.product.id}},[r("v-img",{staticClass:"white--text align-end",attrs:{src:t.product.image,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"250px"}},[r("v-card-title",{domProps:{textContent:t._s(t.product.title)}})],1)],1),r("v-card-actions",[r("div",{staticClass:"font-weight-medium ml-1"},[t._v(" $"+t._s(t.product.price)+" ")]),r("v-spacer"),r("add-favorite-icon",{attrs:{id:t.product.id}})],1)],1)]}}])})],1)},i=[],n=r("65e0"),c={props:["product"],components:{"add-favorite-icon":n["a"]}},d=c,u=r("2877"),l=r("6544"),v=r.n(l),h=r("b0af"),f=r("99d9"),p=r("16b7"),g=r("f2e7"),b=r("58df"),m=r("d9bd"),_=Object(b["a"])(p["a"],g["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(m["c"])("v-hover should only contain a single element",this),t)):(Object(m["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),y=r("adda"),$=r("2fa4"),C=Object(u["a"])(d,o,i,!1,null,null,null),j=C.exports;v()(C,{VCard:h["a"],VCardActions:f["a"],VCardTitle:f["c"],VHover:_,VImg:y["a"],VSpacer:$["a"]});var k={props:["productList"],components:{"product-card":j}},x=k,O=r("62ad"),E=r("a523"),V=r("0fd9"),w=Object(u["a"])(x,a,s,!1,null,null,null);e["a"]=w.exports;v()(w,{VCol:O["a"],VContainer:E["a"],VRow:V["a"]})},"7d16":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("product-list",{attrs:{productList:t.favoriteProducts}})],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-center text-h4 mt-10"},[r("h1",[t._v("Favorites")])])}],o=(r("4160"),r("159b"),r("7b0f")),i={components:{"product-list":o["a"]},data:function(){return{}},computed:{products:function(){return this.$store.state.products},favorites:function(){return this.$store.state.favorites},favoriteProducts:function(){var t=this,e=[];return this.favorites.forEach((function(r){t.products.forEach((function(t){r.product_id==t.id&&e.push(t)}))})),e}}},n=i,c=r("2877"),d=Object(c["a"])(n,a,s,!1,null,null,null);e["default"]=d.exports},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return c}));var a=r("b0af"),s=r("80d2"),o=Object(s["g"])("v-card__actions"),i=Object(s["g"])("v-card__subtitle"),n=Object(s["g"])("v-card__text"),c=Object(s["g"])("v-card__title");a["a"]},b0af:function(t,e,r){"use strict";r("0481"),r("4069"),r("a9e3");var a=r("5530"),s=(r("615b"),r("10d2")),o=r("297c"),i=r("1c87"),n=r("58df");e["a"]=Object(n["a"])(o["a"],i["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},i["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=o["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-353da561.a770c40e.js.map