import{o as m,c as L,r as o,b as u,w as r,a,D as p,t as c,d as i,f as b}from"./vue.runtime.esm-bundler.ba5c08e0.js";import{_ as g}from"./_plugin-vue_export-helper.80405f63.js";import{f as B}from"./links.4c32e7b9.js";import{_ as t,s as V}from"./default-i18n.3881921e.js";import{C as w}from"./Blur.36d19f95.js";import{C as M}from"./SettingsRow.d0f3e207.js";import{S as I}from"./External.b6186288.js";import{B as A}from"./RadioToggle.07085555.js";import{R as G}from"./RequiredPlans.cbedd1ac.js";import{C as R}from"./Card.95fd844a.js";import{C as N}from"./ProBadge.a2777953.js";import{C as D}from"./Index.f352280d.js";import{A as P}from"./AddonConditions.50466020.js";import"./isArrayLikeObject.ab8f4241.js";import"./Row.76881ed1.js";import"./addons.2b4a9919.js";import"./upperFirst.7faab9f8.js";import"./_stringToArray.4de3b1f3.js";import"./toString.7b877a36.js";import"./license.afc1306d.js";import"./index.df267eaa.js";import"./Caret.da0d1a59.js";import"./Tooltip.d28f6bf4.js";import"./Slide.3af65e43.js";import"./constants.238e5b7b.js";const s="all-in-one-seo-pack",$=()=>({strings:{customFieldSupport:t("Custom Field Support",s),exclude:t("Exclude Pages/Posts",s),video:t("Video Sitemap",s),description:t("The Video Sitemap generates an XML Sitemap for video content on your site. Search engines use this information to display rich snippet information in search results.",s),extendedDescription:t("The Video Sitemap works in much the same way as the XML Sitemap module, it generates an XML Sitemap specifically for video content on your site. Search engines use this information to display rich snippet information in search results.",s),enableSitemap:t("Enable Sitemap",s),openSitemap:t("Open Video Sitemap",s),noIndexDisplayed:t("Noindexed content will not be displayed in your sitemap.",s),doYou404:t("Do you get a blank sitemap or 404 error?",s),ctaButtonText:t("Unlock Video Sitemaps",s),ctaHeader:V(t("Video Sitemaps is a %1$s Feature",s),"PRO"),linksPerSitemap:t("Links Per Sitemap",s),maxLinks:t("Allows you to specify the maximum number of posts in a sitemap (up to 50,000).",s),enableSitemapIndexes:t("Enable Sitemap Indexes",s)}}),H={};function O(e,S){return m(),L("div")}const U=g(H,[["render",O]]),E={setup(){const{strings:e}=$();return{strings:e}},components:{CoreBlur:w,CoreSettingsRow:M,SvgExternal:I,BaseRadioToggle:A}},F={class:"aioseo-settings-row aioseo-section-description"},q=["innerHTML"],X={class:"aioseo-sitemap-preview"},z={class:"aioseo-description"},Y=a("br",null,null,-1),j=["innerHTML"],J={class:"aioseo-description"},K=["innerHTML"],Q={class:"aioseo-description"},W=["innerHTML"];function Z(e,S,v,n,k,y){const d=o("base-toggle"),l=o("core-settings-row"),_=o("svg-external"),f=o("base-button"),h=o("base-radio-toggle"),T=o("base-input"),C=o("core-blur");return m(),u(C,null,{default:r(()=>[a("div",F,[p(c(n.strings.extendedDescription)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"videoSitemaps",!0)},null,8,q)]),i(l,{name:n.strings.enableSitemap},{content:r(()=>[i(d,{modelValue:!0})]),_:1},8,["name"]),i(l,{name:e.$constants.GLOBAL_STRINGS.preview},{content:r(()=>[a("div",X,[i(f,{size:"medium",type:"blue"},{default:r(()=>[i(_),p(" "+c(n.strings.openSitemap),1)]),_:1})]),a("div",z,[p(c(n.strings.noIndexDisplayed)+" ",1),Y,p(" "+c(n.strings.doYou404)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0)},null,8,j)])]),_:1},8,["name"]),i(l,{name:n.strings.enableSitemapIndexes},{content:r(()=>[i(h,{name:"sitemapIndexes",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["options"]),a("div",J,[p(c(n.strings.sitemapIndexes)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"sitemapIndexes",!0)},null,8,K)])]),_:1},8,["name"]),i(l,{name:n.strings.linksPerSitemap},{content:r(()=>[i(T,{class:"aioseo-links-per-site",type:"number",size:"medium",min:1,max:5e4}),a("div",Q,[p(c(n.strings.maxLinks)+" ",1),a("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"maxLinks",!0)},null,8,W)])]),_:1},8,["name"])]),_:1})}const ee=g(E,[["render",Z]]);const ne={setup(){const{strings:e}=$();return{licenseStore:B(),strings:e}},components:{Blur:ee,RequiredPlans:G,CoreCard:R,CoreProBadge:N,Cta:D}},oe={class:"aioseo-video-sitemap-lite"};function te(e,S,v,n,k,y){const d=o("core-pro-badge"),l=o("blur"),_=o("required-plans"),f=o("cta"),h=o("core-card");return m(),L("div",oe,[i(h,{slug:"videoSitemap",noSlide:!0},{header:r(()=>[a("span",null,c(n.strings.video),1),i(d)]),default:r(()=>[i(l),i(f,{"feature-list":[n.strings.customFieldSupport,n.strings.exclude],"cta-link":e.$links.getPricingUrl("video-sitemap","video-sitemap-upsell"),"button-text":n.strings.ctaButtonText,"learn-more-link":e.$links.getUpsellUrl("video-sitemap",null,e.$isPro?"pricing":"liteUpgrade"),"hide-bonus":!n.licenseStore.isUnlicensed},{"header-text":r(()=>[p(c(n.strings.ctaHeader),1)]),description:r(()=>[i(_,{addon:"aioseo-video-sitemap"}),p(" "+c(n.strings.description),1)]),_:1},8,["feature-list","cta-link","button-text","learn-more-link","hide-bonus"])]),_:1})])}const x=g(ne,[["render",te]]);const se={mixins:[P],components:{Cta:U,Lite:x,VideoSitemap:x},data(){return{addonSlug:"aioseo-video-sitemap"}}},ie={class:"aioseo-video-sitemap"};function ae(e,S,v,n,k,y){const d=o("video-sitemap",!0),l=o("cta"),_=o("lite");return m(),L("div",ie,[e.shouldShowMain?(m(),u(d,{key:0})):b("",!0),e.shouldShowUpdate||e.shouldShowActivate?(m(),u(l,{key:1})):b("",!0),e.shouldShowLite?(m(),u(_,{key:2})):b("",!0)])}const Ie=g(se,[["render",ae]]);export{Ie as default};
