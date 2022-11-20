(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{214:function(t,s,e){},215:function(t,s,e){},217:function(t,s,e){"use strict";var a={props:{toPath:String,buttonText:String,variant:String,iconLeft:Boolean,iconRight:Boolean,iconCenter:Boolean,faClasses:String},name:"SlantedButton"},n=(e(218),e(25)),i=Object(n.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("g-link",{staticClass:"slanted-button",class:[{iconCenter:t.iconCenter},t.variant],attrs:{to:t.toPath}},[t.iconCenter?e("i",{staticClass:"iconCenter",class:t.faClasses}):t._e(),t.iconLeft?e("i",{staticClass:"iconLeft",class:t.faClasses}):t._e(),t._v("\n  "+t._s(t.buttonText)+"\n  "),t.iconRight?e("i",{staticClass:"iconRight",class:t.faClasses}):t._e()])}),[],!1,null,"2cc26bb5",null);s.a=i.exports},218:function(t,s,e){"use strict";var a=e(214);e.n(a).a},219:function(t,s,e){"use strict";var a=e(215);e.n(a).a},220:function(t,s,e){},221:function(t,s,e){"use strict";var a={components:{SlantedButton:e(217).a},props:["isHome"],name:"MainHeader",data:function(){return{isSticky:!1,mobileMenuOpen:!1}},computed:{buttonVariant:function(){return this.isSticky?"tertiary":"secondary"},mobileMenuButtonFaClasses:function(){return this.mobileMenuOpen?"fa-solid fa-xmark":"fa-solid fa-bars"}},mounted:function(){var t=this.$refs.navbar.offsetTop;this.updateSticky(t);var s=this;window.onscroll=function(){s.updateSticky(t)},window.onresize=function(){window.innerWidth>580&&(s.mobileMenuOpen=!1,document.body.style.overflow="auto")}},methods:{updateSticky:function(t){window.pageYOffset>=t+600?(this.isSticky=!0,this.$refs.navbar.classList.add("is-sticky")):(this.isSticky=!1,this.$refs.navbar.classList.remove("is-sticky"))},refreshHome:function(){window.scrollTo({top:0,behavior:"smooth"}),this.mobileMenuOpen=!1,document.body.style.overflow="auto"},toggleMenu:function(){this.mobileMenuOpen=!this.mobileMenuOpen,this.mobileMenuOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},closeMenu:function(){this.mobileMenuOpen=!1,document.body.style.overflow="auto"}}},n=(e(219),e(25)),i=Object(n.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"placeholder",class:{isHome:t.isHome}},[e("div",{ref:"navbar",staticClass:"links nav",class:{isHome:t.isHome},attrs:{id:"navbar"}},[e("div",{staticClass:"nav-wrapper"},[e("a",{staticClass:"nav-name",attrs:{href:"/"},on:{click:t.refreshHome}},[t._v("jackie liu")]),e("ul",{staticClass:"linkList"},[e("li",[e("SlantedButton",{attrs:{toPath:"/projects/",buttonText:"projects",variant:t.buttonVariant}})],1),e("li",[e("SlantedButton",{attrs:{toPath:"/about/",buttonText:"about",variant:t.buttonVariant}})],1),e("li",[e("g-link",{staticClass:"socialLink",attrs:{target:"_blank",to:"https://instagram.com/jackieis.online"}},[e("i",{staticClass:"fa-brands fa-instagram"})])],1),e("li",[e("g-link",{staticClass:"socialLink",attrs:{target:"_blank",to:"https://twitter.com/jackieis_online"}},[e("i",{staticClass:"fa-brands fa-twitter"})])],1)]),e("SlantedButton",{staticClass:"mobileMenuButton",attrs:{iconCenter:!0,variant:"secondary",faClasses:t.mobileMenuButtonFaClasses},nativeOn:{click:function(s){return t.toggleMenu(s)}}}),e("div",{ref:"mobileMenu",staticClass:"mobileMenu",class:{showMobileMenu:t.mobileMenuOpen}},[e("div",{staticClass:"mobileButtons"},[e("SlantedButton",{attrs:{toPath:"/",buttonText:"home",variant:"primary",iconLeft:!0,faClasses:"fa-solid fa-home"},nativeOn:{click:function(s){return t.refreshHome(s)}}}),e("SlantedButton",{attrs:{toPath:"/projects/",buttonText:"projects",variant:"primary",iconLeft:!0,faClasses:"fa-solid fa-palette"},nativeOn:{click:function(s){return t.closeMenu(s)}}}),e("SlantedButton",{attrs:{toPath:"/about/",buttonText:"about",variant:"primary",iconLeft:!0,faClasses:"fa-solid fa-face-smile-hearts"},nativeOn:{click:function(s){return t.closeMenu(s)}}}),e("SlantedButton",{attrs:{toPath:"https://instagram.com/jackieis.online/",buttonText:"jackieis.online",variant:"primary",iconLeft:!0,faClasses:"fa-brands fa-instagram"},nativeOn:{click:function(s){return t.closeMenu(s)}}}),e("SlantedButton",{attrs:{toPath:"https://twitter.com/jackieis_online/",buttonText:"jackieis_online",variant:"primary",iconLeft:!0,faClasses:"fa-brands fa-twitter"},nativeOn:{click:function(s){return t.closeMenu(s)}}})],1)])],1)])])}),[],!1,null,"a44c6232",null);s.a=i.exports},355:function(t,s,e){"use strict";var a=e(220);e.n(a).a},356:function(t,s,e){"use strict";var a={name:"MainHeader",mounted:function(){$(document).ready((function(){window.onscroll=function(){window.pageYOffset>=s+600?t.classList.add("is-sticky"):t.classList.remove("is-sticky")};var t=document.getElementById("navbar"),s=t.offsetTop;$(".home .nav-name").click((function(){console.log("nav name clicked"),$(window).scrollTop(0)}))}))}},n=(e(355),e(25)),i=Object(n.a)(a,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"placeholder"},[s("div",{staticClass:"links nav",attrs:{id:"navbar"}},[s("div",{staticClass:"nav-wrapper"},[s("a",{staticClass:"nav-name",attrs:{href:"/"}},[this._v("jackie liu")]),s("ul",{staticClass:"linkList"},[s("li",[s("a",{attrs:{href:"/projects",id:"workLink"}},[s("span",[this._v("projects")])])]),s("li",[s("a",{attrs:{href:"/blog",target:"_blank",id:"blog"}},[s("span",[this._v("blog")])])]),s("li",[s("a",{staticClass:"email",attrs:{target:"_blank",href:"",".":"emailLink"}},[s("i",{staticClass:"far fa-envelope"})]),s("a",{attrs:{href:"https://www.instagram.com/jacq_ilu/",target:"_blank"}},[s("i",{staticClass:"fab fa-instagram"})])])])])])])}],!1,null,"3e58017c",null);s.a=i.exports},372:function(t,s,e){},373:function(t,s){},374:function(t,s,e){var a={"./af":223,"./af.js":223,"./ar":224,"./ar-dz":225,"./ar-dz.js":225,"./ar-kw":226,"./ar-kw.js":226,"./ar-ly":227,"./ar-ly.js":227,"./ar-ma":228,"./ar-ma.js":228,"./ar-sa":229,"./ar-sa.js":229,"./ar-tn":230,"./ar-tn.js":230,"./ar.js":224,"./az":231,"./az.js":231,"./be":232,"./be.js":232,"./bg":233,"./bg.js":233,"./bm":234,"./bm.js":234,"./bn":235,"./bn.js":235,"./bo":236,"./bo.js":236,"./br":237,"./br.js":237,"./bs":238,"./bs.js":238,"./ca":239,"./ca.js":239,"./cs":240,"./cs.js":240,"./cv":241,"./cv.js":241,"./cy":242,"./cy.js":242,"./da":243,"./da.js":243,"./de":244,"./de-at":245,"./de-at.js":245,"./de-ch":246,"./de-ch.js":246,"./de.js":244,"./dv":247,"./dv.js":247,"./el":248,"./el.js":248,"./en-au":249,"./en-au.js":249,"./en-ca":250,"./en-ca.js":250,"./en-gb":251,"./en-gb.js":251,"./en-ie":252,"./en-ie.js":252,"./en-il":253,"./en-il.js":253,"./en-in":254,"./en-in.js":254,"./en-nz":255,"./en-nz.js":255,"./en-sg":256,"./en-sg.js":256,"./eo":257,"./eo.js":257,"./es":258,"./es-do":259,"./es-do.js":259,"./es-us":260,"./es-us.js":260,"./es.js":258,"./et":261,"./et.js":261,"./eu":262,"./eu.js":262,"./fa":263,"./fa.js":263,"./fi":264,"./fi.js":264,"./fil":265,"./fil.js":265,"./fo":266,"./fo.js":266,"./fr":267,"./fr-ca":268,"./fr-ca.js":268,"./fr-ch":269,"./fr-ch.js":269,"./fr.js":267,"./fy":270,"./fy.js":270,"./ga":271,"./ga.js":271,"./gd":272,"./gd.js":272,"./gl":273,"./gl.js":273,"./gom-deva":274,"./gom-deva.js":274,"./gom-latn":275,"./gom-latn.js":275,"./gu":276,"./gu.js":276,"./he":277,"./he.js":277,"./hi":278,"./hi.js":278,"./hr":279,"./hr.js":279,"./hu":280,"./hu.js":280,"./hy-am":281,"./hy-am.js":281,"./id":282,"./id.js":282,"./is":283,"./is.js":283,"./it":284,"./it-ch":285,"./it-ch.js":285,"./it.js":284,"./ja":286,"./ja.js":286,"./jv":287,"./jv.js":287,"./ka":288,"./ka.js":288,"./kk":289,"./kk.js":289,"./km":290,"./km.js":290,"./kn":291,"./kn.js":291,"./ko":292,"./ko.js":292,"./ku":293,"./ku.js":293,"./ky":294,"./ky.js":294,"./lb":295,"./lb.js":295,"./lo":296,"./lo.js":296,"./lt":297,"./lt.js":297,"./lv":298,"./lv.js":298,"./me":299,"./me.js":299,"./mi":300,"./mi.js":300,"./mk":301,"./mk.js":301,"./ml":302,"./ml.js":302,"./mn":303,"./mn.js":303,"./mr":304,"./mr.js":304,"./ms":305,"./ms-my":306,"./ms-my.js":306,"./ms.js":305,"./mt":307,"./mt.js":307,"./my":308,"./my.js":308,"./nb":309,"./nb.js":309,"./ne":310,"./ne.js":310,"./nl":311,"./nl-be":312,"./nl-be.js":312,"./nl.js":311,"./nn":313,"./nn.js":313,"./oc-lnc":314,"./oc-lnc.js":314,"./pa-in":315,"./pa-in.js":315,"./pl":316,"./pl.js":316,"./pt":317,"./pt-br":318,"./pt-br.js":318,"./pt.js":317,"./ro":319,"./ro.js":319,"./ru":320,"./ru.js":320,"./sd":321,"./sd.js":321,"./se":322,"./se.js":322,"./si":323,"./si.js":323,"./sk":324,"./sk.js":324,"./sl":325,"./sl.js":325,"./sq":326,"./sq.js":326,"./sr":327,"./sr-cyrl":328,"./sr-cyrl.js":328,"./sr.js":327,"./ss":329,"./ss.js":329,"./sv":330,"./sv.js":330,"./sw":331,"./sw.js":331,"./ta":332,"./ta.js":332,"./te":333,"./te.js":333,"./tet":334,"./tet.js":334,"./tg":335,"./tg.js":335,"./th":336,"./th.js":336,"./tl-ph":337,"./tl-ph.js":337,"./tlh":338,"./tlh.js":338,"./tr":339,"./tr.js":339,"./tzl":340,"./tzl.js":340,"./tzm":341,"./tzm-latn":342,"./tzm-latn.js":342,"./tzm.js":341,"./ug-cn":343,"./ug-cn.js":343,"./uk":344,"./uk.js":344,"./ur":345,"./ur.js":345,"./uz":346,"./uz-latn":347,"./uz-latn.js":347,"./uz.js":346,"./vi":348,"./vi.js":348,"./x-pseudo":349,"./x-pseudo.js":349,"./yo":350,"./yo.js":350,"./zh-cn":351,"./zh-cn.js":351,"./zh-hk":352,"./zh-hk.js":352,"./zh-mo":353,"./zh-mo.js":353,"./zh-tw":354,"./zh-tw.js":354};function n(t){var s=i(t);return e(s)}function i(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id=374},375:function(t,s,e){},376:function(t,s){},462:function(t,s,e){var a=e(0),n=e(16),i=e(62);a({target:"Object",stat:!0,forced:e(3)((function(){i(1)}))},{keys:function(t){return i(n(t))}})},463:function(t,s,e){"use strict";var a=e(372);e.n(a).a},464:function(t,s,e){"use strict";var a=e(373),n=e.n(a);s.default=n.a},465:function(t,s,e){"use strict";var a=e(375);e.n(a).a},466:function(t,s,e){"use strict";var a=e(376),n=e.n(a);s.default=n.a},492:function(t,s,e){"use strict";e.r(s);e(40),e(142),e(143),e(462),e(41);var a=e(356),n={props:["workId","workTitle","workSlug","coverPhotoPath","workType"],computed:{backgroundImage:function(){return"background-image: url("+this.coverPhotoPath+");"}}},i=(e(463),e(25)),o=e(464),r=Object(i.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"projectElement"},[t.workSlug.includes("http")?e("a",{staticClass:"projectListElement",attrs:{href:t.workSlug,target:"_blank"}},[e("div",{staticClass:" imageContainer",style:t.backgroundImage}),e("h4",{staticClass:"workTitle"},[t._v(t._s(t.workTitle)+" "),e("i",{staticClass:"fas fa-external-link-alt"})])]):e("a",{staticClass:"projectListElement",attrs:{href:"/projects/"+t.workSlug}},[e("div",{staticClass:"imageContainer",style:t.backgroundImage}),e("h4",{staticClass:"workTitle"},[t._v(t._s(t.workTitle))])]),e("h5",{staticClass:"work-detail"},[e("i",[t._v(t._s(t.workType))])])])}),[],!1,null,"376d7008",null);"function"==typeof o.default&&Object(o.default)(r);var l=r.exports,c=e(221),u=e(212),f=e.n(u),j={components:{WorkpageHeader:a.a,projectListElement:l,MainHeader:c.a},metaInfo:{title:"projects"},computed:{yearsToProjects:function(){for(var t={},s=this.$page.contentfulProjectsGallery.projectLink,e=0;e<s.length;e++){var a=s[e],n=f()(a.dateCreated),i=f()(n).format("YYYY");a.thisDate=n,null==t[i]?t[i]=[a]:t[i].push(a)}return Object.keys(t).forEach((function(s){var e=t[s];t[s]=e.sort((function(t,s){return f()(t.thisDate).unix()-f()(s.thisDate).unix()})).reverse()})),t}}},d=(e(465),e(466)),m=Object(i.a)(j,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Layout",[e("MainHeader",{attrs:{showNavName:!0}}),e("h1",{staticClass:"highlight"},[t._v("It's been a long life.")]),e("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],staticClass:"grid-container no-margin scroll-reveal"},[e("p",{staticClass:"whole"},[e("br"),t._v("\n      And it just keeps on going! Here's an (incomplete) collection of my work across web programming, product design, comics, and more.\n    ")])]),e("div",{attrs:{id:"listOfProjects"}},t._l(Object.keys(t.yearsToProjects).sort().reverse(),(function(s){return e("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal"}],key:s,staticClass:"gallerySection scroll-reveal grid-container no-margin"},[e("h3",{staticClass:"yearDivider whole"},[t._v("\n         "+t._s(s)+"\n       ")]),t._l(t.yearsToProjects[s],(function(t){return e("div",{key:t.dateCreated,staticClass:"itemWrapper third"},[e("projectListElement",{attrs:{workId:t.id,workTitle:t.title,workSlug:t.slug,coverPhotoPath:t.coverphoto.file.url,workType:t.workType}})],1)}))],2)})),0)],1)}),[],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(m);s.default=m.exports}}]);