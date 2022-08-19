(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"12e7":function(e,t,i){"use strict";i("999a")},"2a6a":function(e,t,i){"use strict";i("ab9a")},"4d3b":function(e,t,i){"use strict";i("72fd")},"55a5":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container-custom"},[i("div",{staticClass:"col-fill col"},[i("div",{staticClass:"paper"},[i("h2",{staticClass:"header-corner"},[e._v("Library")]),i("library-list")],1),i("div",{staticClass:"paper"},[i("h2",{staticClass:"header-corner"},[e._v("Recipes")]),i("recipe-list")],1)])])},o=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"grid"},[i("recipe-create-form"),e._l(e.getViewRecipes,(function(t){return[t.editMode?e._e():i("div",{key:t.recipe.name,staticClass:"card"},[i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"},[e._v(e._s(t.recipe.name))]),i("h5",{staticClass:"card-subtitle"},[i("strong",[e._v(e._s(t.recipe.amount)+"x")]),e._v(" in "),i("strong",[e._v(e._s(t.recipe.time))]),e._v(" seconds")]),t.recipe.inputs.length>0?i("div",{staticClass:"collapsible"},[i("input",{attrs:{id:"collapsible"+t.recipe.name,type:"checkbox",name:"collapsible"}}),i("label",{staticStyle:{padding:"0.15rem"},attrs:{for:"collapsible"+t.recipe.name}},[e._v("Ingredients")]),i("div",{staticClass:"collapsible-body"},e._l(t.recipe.inputs,(function(t){return i("h6",{key:t.recipeName,staticStyle:{margin:"0.15rem"}},[i("strong",[e._v(e._s(t.amount)+"x")]),e._v(" "+e._s(t.recipeName)+" ")])})),0)]):e._e(),e.isRecipeDeletable(t)?i("button",{staticClass:"btn-small btn-secondary",staticStyle:{position:"absolute",top:"2px",right:"50px"},on:{click:function(i){return e.deleteEntry(t)}}},[e._v("Delete")]):e._e(),i("button",{staticClass:"btn-small btn-secondary",staticStyle:{position:"absolute",top:"2px",right:"2px"},on:{click:function(i){return e.changeMode(t)}}},[e._v("Edit")])])]),t.editMode?i("recipe-edit-form",{key:t.recipe.name,attrs:{recipe:t.recipe},on:{submit:function(e){t.editMode=!1}}}):e._e()]}))],2)},a=[],r=i("9ab4"),c=i("60a3"),l=i("b850"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card",staticStyle:{width:"100%",margin:"10px 0 10px 0"}},[i("div",{staticClass:"card-body"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.name,expression:"recipe.name"}],staticClass:"disabled",staticStyle:{margin:"0 0 5px 0",width:"100%"},attrs:{readonly:"",placeholder:"Name"},domProps:{value:e.recipe.name},on:{input:function(t){t.target.composing||e.$set(e.recipe,"name",t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.time,expression:"recipe.time"}],staticStyle:{margin:"0 0 5px 0",width:"100%"},attrs:{placeholder:"Time (seconds)",type:"number"},domProps:{value:e.recipe.time},on:{input:function(t){t.target.composing||e.$set(e.recipe,"time",t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.amount,expression:"recipe.amount"}],staticStyle:{margin:"0 0 5px 0",width:"100%"},attrs:{placeholder:"Amount",type:"number"},domProps:{value:e.recipe.amount},on:{input:function(t){t.target.composing||e.$set(e.recipe,"amount",t.target.value)}}}),i("div",{staticClass:"clearfix"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedInput,expression:"selectedInput"}],staticStyle:{margin:"0 0 5px 0",width:"calc(100% - 35px)",float:"left"},attrs:{placeholder:"Select Inputs",list:"recipes-create"},domProps:{value:e.selectedInput},on:{keyup:e.onKeyUp,input:function(t){t.target.composing||(e.selectedInput=t.target.value)}}}),i("button",{staticClass:"btn-small",staticStyle:{float:"left","font-size":"19px"},on:{click:e.addSelectedInput}},[e._v("+")]),i("datalist",{attrs:{id:"recipes-create"}},e._l(e.store.book.getRecipes(),(function(e){return i("option",{key:e.name,attrs:{"data-id":e.id},domProps:{value:e.name}})})),0)]),e.recipe.inputs.length>0?i("div",{staticStyle:{float:"none",width:"100%"}},[i("hr"),i("label",{staticClass:"header-border"},[e._v("Ingredients")]),i("div",{staticStyle:{padding:"10px","background-color":"var(--white-dark-light-80)"}},e._l(e.recipe.inputs,(function(t){return i("ingredient-list-item",{key:t.name,attrs:{ingredient:t},on:{"ingredient-amount-modify":function(i){return e.modifyInputAmount(t,i)}}})})),1)]):e._e(),i("br"),i("div",{staticClass:"action-bar"},[i("button",{staticClass:"btn-secondary action-bar-item",on:{click:function(t){return e.submit()}}},[e._v("Save")])])])])},u=[],p=i("4fd4"),m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("label",{staticStyle:{margin:"0.15rem"}},[i("strong",[e._v(e._s(e.ingredient.amount)+"x")]),e._v(" "+e._s(e.ingredient.recipeName))]),i("button",{staticClass:"btn-small action-btn",on:{mousedown:function(t){return e.onMouseDown(t,1)}}},[e._v("+")]),i("button",{staticClass:"btn-small action-btn",on:{mousedown:function(t){return e.onMouseDown(t,-1)}}},[e._v("-")])])},h=[];class v{static onPress(e,t,i=1e3,n=1.5,o=5){let s;const a=function(){t(),s=setTimeout(a,i),i=Math.max(i/n,o)};function r(){clearTimeout(s),e.removeEventListener("mouseup",r)}e.addEventListener("mouseup",r),a()}}var b=i("2b0e");let f=class extends b["a"]{ingredientAmountModify(e){}onMouseDown(e,t){v.onPress(e.target,()=>{this.$emit("ingredient-amount-modify",t)})}};Object(r["a"])([Object(c["d"])({required:!0})],f.prototype,"ingredient",void 0),Object(r["a"])([Object(c["b"])("ingredient-amount-modify")],f.prototype,"ingredientAmountModify",null),f=Object(r["a"])([Object(c["a"])({})],f);var g=f,y=g,k=(i("2a6a"),i("0c7c")),w=Object(k["a"])(y,m,h,!1,null,"c64e339a",null),S=w.exports;let _=class extends(Object(c["c"])(l["a"])){constructor(){super(...arguments),this.selectedInput=""}submitted(){}submit(){""!=this.recipe.name&&this.recipe.time>=0&&this.recipe.amount>=0&&this.store.saveBook(),this.$emit("submit")}addSelectedInput(){const e=this.store.book.findRecipe(this.selectedInput);if(null!=e){for(let t=0;t<this.recipe.inputs.length;t++)if(this.recipe.inputs[t].recipeName==e.name)return this.recipe.inputs[t].amount++,void(this.selectedInput="");this.recipe.inputs.push(new p["c"](1,e.name)),this.selectedInput=""}}modifyInputAmount(e,t){e.amount+t>0?e.amount+=t:this.recipe.inputs.splice(this.recipe.inputs.indexOf(e),1)}onKeyUp(e){"Enter"==e.key&&this.addSelectedInput()}};Object(r["a"])([Object(c["d"])({required:!0})],_.prototype,"recipe",void 0),Object(r["a"])([Object(c["b"])("submit")],_.prototype,"submitted",null),_=Object(r["a"])([Object(c["a"])({components:{IngredientListItem:S}})],_);var x=_,C=x,I=(i("720e"),Object(k["a"])(C,d,u,!1,null,null,null)),E=I.exports,M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card",staticStyle:{cursor:"pointer"},on:{click:function(t){e.adding=!0}}},[e.adding?e._e():[e._m(0)],e.adding?[i("div",{staticClass:"card-body"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticStyle:{margin:"0 0 5px 0",width:"100%"},attrs:{placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],staticStyle:{margin:"0 0 5px 0",width:"100%"},attrs:{placeholder:"Time (seconds)",type:"number"},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticStyle:{margin:"0 0 5px 0",width:"100%"},attrs:{placeholder:"Amount",type:"number"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}}),i("div",{staticClass:"clearfix"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedInput,expression:"selectedInput"}],staticStyle:{margin:"0 0 5px 0",width:"calc(100% - 35px)",float:"left"},attrs:{placeholder:"Select Inputs",list:"recipes-create"},domProps:{value:e.selectedInput},on:{keyup:e.onKeyUp,input:function(t){t.target.composing||(e.selectedInput=t.target.value)}}}),i("button",{staticClass:"btn-small",staticStyle:{float:"left","font-size":"19px"},on:{click:e.addSelectedInput}},[e._v("+")]),i("datalist",{attrs:{id:"recipes-create"}},e._l(e.store.book.getRecipes(),(function(e){return i("option",{key:e.name,attrs:{"data-id":e.id},domProps:{value:e.name}})})),0)]),e.input.length>0?i("div",{staticStyle:{float:"none",width:"100%"}},[i("hr"),i("label",{staticClass:"header-border"},[e._v("Ingredients")]),i("div",{staticStyle:{padding:"10px","background-color":"var(--white-dark-light-80)"}},e._l(e.input,(function(t){return i("ingredient-list-item",{key:t.name,attrs:{ingredient:t},on:{"ingredient-amount-modify":function(i){return e.modifyInputAmount(t,i)}}})})),1)]):e._e(),i("br"),i("button",{staticClass:"btn-danger",staticStyle:{width:"50%"},on:{click:function(t){return t.stopPropagation(),e.cancel()}}},[e._v("Cancel")]),i("button",{staticClass:"btn-secondary",staticStyle:{width:"50%"},on:{click:function(t){return t.stopPropagation(),e.submit()}}},[e._v("Save")])])]:e._e()],2)},O=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card-body card-add",staticStyle:{margin:"0 auto"}},[i("span",{staticClass:"material-icons material-icons-large"},[e._v("add_circle_outline")])])}],B=i("2fe1");let A=class extends(Object(c["c"])(l["a"])){constructor(){super(...arguments),this.adding=!1,this.name="",this.time="",this.amount="",this.input=new Array,this.selectedInput=""}submit(){""!=this.name&&""!=this.time&&""!=this.amount&&(this.store.book.addRecipe(this.name,Number(this.time),Number(this.amount),this.input),this.store.saveBook(),this.clearFields()),this.adding=!1}cancel(){this.clearFields(),this.adding=!1}clearFields(){this.name="",this.time="",this.amount="",this.input=[]}addSelectedInput(){const e=this.store.book.findRecipe(this.selectedInput);if(null!=e){for(let t=0;t<this.input.length;t++)if(this.input[t].recipeName==e.name)return this.input[t].amount++,void(this.selectedInput="");this.input.push(new p["c"](1,e.name)),this.selectedInput=""}}modifyInputAmount(e,t){e.amount+t>0?e.amount+=t:this.input.splice(this.input.indexOf(e),1)}onKeyUp(e){"Enter"==e.key&&this.addSelectedInput()}};A=Object(r["a"])([Object(B["b"])({components:{IngredientListItem:S}})],A);var N=A,j=N,$=(i("9900"),Object(k["a"])(j,M,O,!1,null,"01229e4f",null)),L=$.exports;class P{constructor(e,t){this.recipe=e,this.editMode=t}}let D=class extends(Object(c["c"])(l["a"])){changeMode(e){e.editMode=!e.editMode}isRecipeDeletable(e){return this.store.book.isRecipeDeletable(e.recipe)}deleteEntry(e){this.store.book.deleteRecipe(e.recipe),this.store.saveBook()}get getViewRecipes(){return this.store.book.getRecipes().map(e=>b["a"].observable(new P(e,!1)))}};D=Object(r["a"])([Object(c["a"])({components:{RecipeEditForm:E,RecipeCreateForm:L}})],D);var R=D,T=R,F=(i("12e7"),Object(k["a"])(T,s,a,!1,null,"05e7f798",null)),V=F.exports,U=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"clearfix"},[i("library-create-form",{ref:"cf",on:{added:e.addedBook}}),e._l(e.booksViewModel,(function(t){return i("div",{key:t.name,staticClass:"card",class:{"card-selected":t.bookInfo.name==e.store.book.name},staticStyle:{width:"10rem"},on:{click:function(i){return e.selectedBook(t.bookInfo)},contextmenu:function(i){return i.preventDefault(),e.openContextMenu(t.bookInfo,i)}}},[t.editing?e._e():i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"},[e._v(e._s(t.bookInfo.name))]),i("h5",{staticClass:"card-subtitle"},[e._v(e._s(t.bookInfo.desc))]),i("button",{staticClass:"btn-small btn-secondary btn-corner",on:{click:function(i){return i.stopPropagation(),e.startEditModeBookInfo(t)}}},[e._v("Edit")])]),t.editing?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newBookInfo.name,expression:"vm.newBookInfo.name"}],staticStyle:{width:"100%"},attrs:{placeholder:"Name"},domProps:{value:t.newBookInfo.name},on:{input:function(i){i.target.composing||e.$set(t.newBookInfo,"name",i.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.newBookInfo.desc,expression:"vm.newBookInfo.desc"}],staticStyle:{width:"100%"},attrs:{placeholder:"Description"},domProps:{value:t.newBookInfo.desc},on:{input:function(i){i.target.composing||e.$set(t.newBookInfo,"desc",i.target.value)}}}),i("div",{staticClass:"action-bar"},[i("button",{staticClass:"action-bar-item btn-secondary btn-small",on:{click:function(i){return i.stopPropagation(),e.endEditModeBookInfo(t)}}},[e._v("Save")])])]):e._e()])})),i("vue-context",{ref:"menu",staticClass:"border border-primary",staticStyle:{width:"auto"}},[i("li",{on:{click:function(t){return t.preventDefault(),e.deleteBookCM()}}},[i("i",{staticClass:"material-icons"},[e._v("delete")]),e._v(" Delete ")]),i("li",{on:{click:function(t){return t.preventDefault(),e.copyBookCM()}}},[i("i",{staticClass:"material-icons"},[e._v("content_copy")]),e._v(" Copy ")]),i("li",{on:{click:function(t){return t.preventDefault(),e.shareBookCM()}}},[i("i",{staticClass:"material-icons"},[e._v("share")]),e._v(" Share ")])])],2)},H=[],W="2.2.2",z=/^2\./.test(b["a"].version);z||b["a"].util.warn("VueClickaway "+W+" only supports Vue 2.x, and does not support Vue "+b["a"].version);var K="_vue_clickaway_handler";function q(e,t,i){G(e);var n=i.context,o=t.value;if("function"===typeof o){var s=!1;setTimeout((function(){s=!0}),0),e[K]=function(t){var i=t.path||(t.composedPath?t.composedPath():void 0);if(s&&(i?i.indexOf(e)<0:!e.contains(t.target)))return o.call(n,t)},document.documentElement.addEventListener("click",e[K],!1)}}function G(e){document.documentElement.removeEventListener("click",e[K],!1),delete e[K]}var J={bind:q,update:function(e,t){t.value!==t.oldValue&&q(e,t)},unbind:G};Array.from||(Array.from=e=>[].slice.call(e)),Array.isArray||(Array.isArray=e=>"[object Array]"===Object.prototype.toString.call(e));const X=Array.from,Y=Array.isArray,Q={ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40},Z=(e,t)=>!(!e||"function"!==typeof e.contains)&&e.contains(t),ee=(e,t,i)=>{e&&e.addEventListener&&e.addEventListener(t,i)},te=(e,t,i)=>{e&&e.removeEventListener&&e.removeEventListener(t,i)},ie=e=>(e||[]).filter(se),ne=e=>oe(e)?e.getBoundingClientRect():null,oe=e=>Boolean(e&&e.nodeType===Node.ELEMENT_NODE),se=e=>{if(!oe(e)||!Z(document.body,e))return!1;if("none"===e.style.display)return!1;const t=ne(e);return Boolean(t&&t.height>0&&t.width>0)},ae=(e,t)=>X((oe(t)?t:document).querySelectorAll(e)),re=(e,t,i)=>{t&&oe(e)&&e.setAttribute(t,i)},ce=(e,t)=>{let i=e.parentElement;while(null!==i&&!i.classList.contains(t))i=i.parentElement;return i},le=(e,t={},i={},n={})=>{const o=i[e]||n[e];return"function"===typeof o?o(t):o};var de,ue={directives:{onClickaway:J},props:{closeOnClick:{type:Boolean,default:!0},closeOnScroll:{type:Boolean,default:!0},lazy:{type:Boolean,default:!1},itemSelector:{type:[String,Array],default:()=>[".v-context-item",".v-context > li > a"]},role:{type:String,default:"menu"},subMenuOffset:{type:Number,default:10},useScrollHeight:{type:Boolean,default:!1},useScrollWidth:{type:Boolean,default:!1},heightOffset:{type:Number,default:25},widthOffset:{type:Number,default:25},tag:{type:String,default:"ul"}},computed:{style(){return this.show?{top:this.top+"px",left:this.left+"px"}:null}},data(){return{top:null,left:null,show:!1,data:null,localItemSelector:"",activeSubMenu:null}},created(){this.localItemSelector=this.mapItemSelector(this.itemSelector)},beforeDestroy(){this.closeOnScroll&&this.removeScrollEventListener()},methods:{addScrollEventListener(){ee(window,"scroll",this.close)},addHoverEventListener(e){e.querySelectorAll(".v-context__sub").forEach(e=>{ee(e,"mouseenter",this.openSubMenu),ee(e,"mouseleave",this.closeSubMenu)})},close(){if(this.show){while(null!==this.activeSubMenu)ce(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));this.resetData(),this.removeHoverEventListener(this.$el),this.closeOnScroll&&this.removeScrollEventListener(),this.$emit("close")}},focusItem(e,t){const i=t.find((t,i)=>i===e);i&&i.focus()},focusNext(e,t){this.show&&(e.preventDefault(),e.stopPropagation(),this.$nextTick(()=>{const i=this.getItems();if(i.length<1)return;let n=i.indexOf(e.target);t&&n>0?n--:!t&&n<i.length-1&&n++,n<0&&(n=0),this.focusItem(n,i)}))},getItems(){return ie(ae(this.localItemSelector,this.activeSubMenu||this.$el))},mapItemSelector(e){return Y(e)&&(e=e.map(e=>e+":not(.disabled):not([disabled])").join(", ")),e},onClick(){this.close()},onKeydown(e){const t=e.keyCode;if(t===Q.ESC)this.close();else if(t===Q.DOWN)this.focusNext(e,!1);else if(t===Q.UP)this.focusNext(e,!0);else if(t===Q.RIGHT){const t=ce(e.target,"v-context__sub");t&&t.getElementsByClassName("v-context")[0]!==this.activeSubMenu&&(t.dispatchEvent(new Event("mouseenter")),this.focusNext(e,!1))}else if(t===Q.LEFT){if(!this.activeSubMenu)return;const e=ce(this.activeSubMenu,"v-context__sub");e.dispatchEvent(new Event("mouseleave"));const t=this.getItems(),i=t.indexOf(e.getElementsByTagName("a")[0]);this.focusItem(i,t)}},open(e,t){this.data=t,this.show=!0,this.$nextTick(()=>{[this.top,this.left]=this.positionMenu(e.clientY,e.clientX,this.$el),this.$el.focus(),this.setItemRoles(),this.addHoverEventListener(this.$el),this.closeOnScroll&&this.addScrollEventListener(),this.$emit("open",e,this.data,this.top,this.left)})},openSubMenu(e){const t=this.getSubMenuElementByEvent(e),i=ce(t.parentElement,"v-context"),n=ne(e.target);if(this.activeSubMenu!==i)while(null!==this.activeSubMenu&&this.activeSubMenu!==i&&this.activeSubMenu!==t)ce(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));t.style.display="block";let[o,s]=this.positionMenu(n.top,n.right-this.subMenuOffset,t);t.style.left=s+"px",t.style.top=o+"px",this.activeSubMenu=t},closeSubMenu(e){const t=this.getSubMenuElementByEvent(e),i=ce(t,"v-context");if(this.activeSubMenu!==t)while(null!==this.activeSubMenu&&this.activeSubMenu!==t)ce(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));t.style.display="none",this.activeSubMenu=i&&ce(i,"v-context__sub")?i:null},getSubMenuElementByEvent(e){return e.target.getElementsByTagName("ul")[0]},positionMenu(e,t,i){const n=this.useScrollHeight?i.scrollHeight:i.offsetHeight,o=window.innerHeight-n-this.heightOffset,s=this.useScrollWidth?i.scrollWidth:i.offsetWidth,a=window.innerWidth-s-this.widthOffset;return e>o&&(e=o),t>a&&(t=a),[e,t]},removeScrollEventListener(){te(window,"scroll",this.close)},removeHoverEventListener(e){e.querySelectorAll(".v-context__sub").forEach(e=>{te(e,"mouseenter",this.openSubMenu),te(e,"mouseleave",this.closeSubMenu)})},resetData(){this.top=null,this.left=null,this.data=null,this.show=!1},setItemRoles(){ae(this.localItemSelector,this.$el).forEach(e=>{re(e,"role","menuitem"),re(e,"tabindex","-1")})}},watch:{closeOnScroll(e,t){e!==t&&(e&&this.show?this.addScrollEventListener():this.removeScrollEventListener())},itemSelector(e,t){e!==t&&(this.localItemSelector=this.mapItemSelector(e))}},render(e){if(this.lazy&&!this.show)return e(!1);const t={"!contextmenu":e=>{e.preventDefault()},keydown:this.onKeydown};this.closeOnClick&&(t.click=this.onClick);const i=[{name:"on-clickaway",value:this.close,rawName:"v-on-clickaway"}];return this.lazy||i.push({name:"show",value:this.show,rawName:"v-show",expression:"show"}),e(this.tag,{staticClass:"v-context",style:this.style,attrs:{tabindex:"-1",role:this.role,"aria-hidden":this.lazy?null:String(!this.show)},on:t,directives:i},[le("default",{data:this.data},this.$scopedSlots,this.$slots)])}},pe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card",on:{click:function(t){e.isAdding=!0}}},[[e.isAdding?e._e():i("div",{staticClass:"card-body card-add"},[i("span",{staticClass:"material-icons material-icons-large"},[e._v("add_circle_outline")])])],[e.isAdding?i("div",{staticClass:"card-body",staticStyle:{padding:"0"}},[e.modeSelection?i("div",[i("button",{staticClass:"button button-primary",staticStyle:{width:"100%"},on:{click:function(t){return e.addEmpty()}}},[e._v("Empty")]),i("button",{staticClass:"button button-primary",staticStyle:{width:"100%"},on:{click:function(t){return e.importFromClipboard()}}},[e._v("Import from clipboard")])]):e._e(),e.modeSelection?e._e():i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.bookAdding.name,expression:"bookAdding.name"}],staticStyle:{width:"100%"},attrs:{placeholder:"Name"},domProps:{value:e.bookAdding.name},on:{input:function(t){t.target.composing||e.$set(e.bookAdding,"name",t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.bookAdding.desc,expression:"bookAdding.desc"}],staticStyle:{width:"100%"},attrs:{placeholder:"Description"},domProps:{value:e.bookAdding.desc},on:{input:function(t){t.target.composing||e.$set(e.bookAdding,"desc",t.target.value)}}}),i("div",{staticClass:"action-bar"},[i("button",{staticClass:"action-bar-item btn-danger btn-small",on:{click:function(t){t.stopPropagation(),e.isAdding=!1}}},[e._v("Cancel")]),i("button",{staticClass:"action-bar-item btn-secondary btn-small",on:{click:function(t){return t.stopPropagation(),e.addBook()}}},[e._v("Save")])])])]):e._e()]],2)},me=[];(function(e){e[e["Chrome"]=0]="Chrome",e[e["EdgeChromium"]=1]="EdgeChromium",e[e["Edge"]=2]="Edge",e[e["Firefox"]=3]="Firefox",e[e["Opera"]=4]="Opera",e[e["IE"]=5]="IE",e[e["Safari"]=6]="Safari",e[e["Unknown"]=7]="Unknown"})(de||(de={}));class he{static checkBrowser(){return navigator.userAgent.search("MSIE")?de.IE:navigator.userAgent.search("Chrome")?de.Chrome:navigator.userAgent.search("Firefox")?de.Firefox:navigator.userAgent.search("Safari")?de.Safari:navigator.userAgent.search("Opera")?de.Opera:de.Unknown}}let ve=class extends(Object(c["c"])(l["a"])){constructor(){super(...arguments),this.isAdding=!1,this.modeSelection=!0,this.bookAdding={}}added(e){}addEmpty(){this.modeSelection=!1}importFromClipboard(){const e=he.checkBrowser();switch(e){case de.Firefox:alert("Get a good browser"),this.endAdd(null);break;default:navigator.clipboard.readText().then(e=>{const t=this.store.library.importBook(e);this.endAdd(t)});break}}tryParseText(e){try{const t=JSON.parse(e),i=t.name+"_Import";null!=t.name&&null!=t.desc&&null!=t.recipes&&this.store.library.addBook(i,t.desc,t.recipes),this.endAdd(i)}catch(t){this.endAdd(null)}}addBook(){const e=this.store.library.addBook(this.bookAdding.name,this.bookAdding.desc,[]);e&&this.endAdd(this.bookAdding.name)}endAdd(e){this.isAdding=!1,this.modeSelection=!0,this.$emit("added",e)}};Object(r["a"])([Object(c["b"])("added")],ve.prototype,"added",null),ve=Object(r["a"])([Object(c["a"])({})],ve);var be=ve,fe=be,ge=(i("88ba"),Object(k["a"])(fe,pe,me,!1,null,"07142a4a",null)),ye=ge.exports;class ke{constructor(e,t,i){this.bookInfo=e,this.editing=t,this.newBookInfo=i}}let we=class extends(Object(c["c"])(l["a"])){constructor(){super(...arguments),this.isAdding=!1}created(){this.store.book;this.booksViewModel=b["a"].observable(this.store.library.getBookInfos().map(e=>new ke(e,!1,null)))}addedBook(e){if(null==e)return;const t=this.store.library.tryGetBookInfo(e);this.booksViewModel.splice(0,0,new ke(t,!1,null)),this.$forceUpdate()}startEditModeBookInfo(e){e.editing=!0,e.newBookInfo=JSON.parse(JSON.stringify(e.bookInfo))}endEditModeBookInfo(e){e.editing=!1,this.store.library.updateBookInfo(e.bookInfo.name,e.newBookInfo),e.newBookInfo=null}selectedBook(e){const t=this.store.library.loadBook(e.name);this.store.book=t}openContextMenu(e,t){this.bookCM=e;const i=this.$refs.menu;i.open(t)}deleteBookCM(){this.store.library.removeBook(this.bookCM.name),this.booksViewModel=b["a"].observable(this.booksViewModel.filter(e=>e.bookInfo.name!=this.bookCM.name)),this.$forceUpdate()}shareBookCM(){this.store.library.shareBook(this.bookCM.name)}copyBookCM(){const e=this.store.library.copyBook(this.bookCM.name),t=this.store.library.tryGetBookInfo(e);null!=t&&(this.booksViewModel.splice(0,0,new ke(t,!1,null)),this.$forceUpdate())}};we=Object(r["a"])([Object(c["a"])({components:{VueContext:ue,LibraryCreateForm:ye}})],we);var Se=we,_e=Se,xe=(i("4d3b"),Object(k["a"])(_e,U,H,!1,null,"3b7984ef",null)),Ce=xe.exports,Ie={components:{RecipeList:V,LibraryList:Ce}},Ee=Ie,Me=Object(k["a"])(Ee,n,o,!1,null,null,null);t["default"]=Me.exports},"5d7d":function(e,t,i){},"720e":function(e,t,i){"use strict";i("5d7d")},"72fd":function(e,t,i){},"88ba":function(e,t,i){"use strict";i("e81d")},9900:function(e,t,i){"use strict";i("fa3b")},"999a":function(e,t,i){},ab9a:function(e,t,i){},e81d:function(e,t,i){},fa3b:function(e,t,i){}}]);
//# sourceMappingURL=about.05a46903.js.map