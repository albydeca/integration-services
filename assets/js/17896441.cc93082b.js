"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[7918],{30846:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var n=a(67294),l=a(86010),r=a(27213),i=a(88746),s=a(11614);var o=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},c=a(6832),d=a(57617),m=a(59137);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.className,r=e.versionMetadata,i=(0,c.Z)().siteConfig.title,s=(0,d.gA)({failfast:!0}).pluginId,o=(0,m.J)(s).savePreferredVersionName,u=(0,d.Jo)(s),p=u.latestDocSuggestion,h=u.latestVersionSuggestion,E=null!=p?p:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:i,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:h.label,to:E.path,onClick:function(){return o(h.name)}})))}function h(e){var t=e.className,a=(0,m.E6)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}function E(e){var t=e.className,a=(0,m.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var b=a(37027);function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function N(e){var t=e.lastUpdatedBy;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(N,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(80098),Z=a(41921),L="lastUpdated_13-_";function U(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(Z.Z,e)))}function T(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(_.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",L)},(a||r)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function C(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||r||s);return c||d?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(U,{tags:o}),d&&n.createElement(T,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:s,formattedLastUpdatedAt:i})):null}var w=a(78473),y="tocCollapsible_1PrD",A="tocCollapsibleButton_2O1e",H="tocCollapsibleContent_2Ydz",x="tocCollapsibleExpanded_3GYr",M=a(14569);function O(e){var t,a=e.toc,r=e.className,i=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,m.uR)({initialState:!0}),d=c.collapsed,u=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(y,(t={},t[x]=!d,t),r)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",A),onClick:u},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:H,collapsed:d},n.createElement(M.Z,{toc:a,minHeadingLevel:i,maxHeadingLevel:o})))}var B=a(38676),D="docItemContainer_33ec",F="docItemCol_3FnS",S="tocMobile_3Hoh";function V(e){var t,a=e.content,i=a.metadata,s=a.frontMatter,c=s.image,d=s.keywords,u=s.hide_title,v=s.hide_table_of_contents,g=s.toc_min_heading_level,p=s.toc_max_heading_level,f=i.description,N=i.title,k=!u&&void 0===a.contentTitle,_=(0,r.Z)(),Z=!v&&a.toc&&a.toc.length>0,L=Z&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(b.Z,{title:N,description:f,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[F]=!v,t))},n.createElement(h,null),n.createElement("div",{className:D},n.createElement("article",null,n.createElement(E,null),Z&&n.createElement(O,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:p,className:(0,l.Z)(m.kM.docs.docTocMobile,S)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},k&&n.createElement(B.N,null,N),n.createElement(a,null)),n.createElement(C,e)),n.createElement(o,{previous:i.previous,next:i.next}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(w.Z,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:p,className:m.kM.docs.docTocDesktop}))))}},38676:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(80102),l=a(83117),r=a(67294),i=a(86010),s=a(11614),o=a(59137),c="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",m=["id"],u=function(e){var t=Object.assign({},e);return r.createElement("header",null,r.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),g=(0,o.LU)().navbar.hideOnScroll;return u?r.createElement(t,(0,l.Z)({},v,{className:(0,i.Z)("anchor",(a={},a[d]=g,a[c]=!g,a)),id:u}),v.children,r.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,v)});var t}},78473:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(83117),l=a(80102),r=a(67294),i=a(86010),s=a(14569),o="tableOfContents_35-E",c=["className"];var d=function(e){var t=e.className,a=(0,l.Z)(e,c);return r.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",t)},r.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},14569:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(83117),l=a(80102),r=a(67294),i=a(59137),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,g=e.minHeadingLevel,p=e.maxHeadingLevel,h=(0,l.Z)(e,s),E=(0,i.LU)(),b=null!=g?g:E.tableOfContents.minHeadingLevel,f=null!=p?p:E.tableOfContents.maxHeadingLevel,N=(0,i.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:f}),k=(0,r.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:b,maxHeadingLevel:f}}),[m,v,b,f]);return(0,i.Si)(k),r.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:m},h))}},63865:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),l=a(86010),r=a(88746),i="tag_1Okp",s="tagRegular_3MiF",o="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,d=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(i,(t={},t[s]=!d,t[o]=d,t))},c,d&&n.createElement("span",null,d))}},41921:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),l=a(86010),r=a(11614),i=a(63865),s="tags_2ga9",o="tag_11ep";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o},n.createElement(i.Z,{name:t,permalink:a}))}))))}},80098:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(67294),l=a(11614),r=a(83117),i=a(80102),s=a(86010),o="iconEdit_2_ui",c=["className"];var d=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},m=a(76775),u=a(51402),v=a(52426),g=a(57617);function p(e){var t=e.editUrl,a=(0,m.TH)().pathname,r=(0,g.gA)(),i=(0,v.usePluginData)("docusaurus-plugin-docs-editor"),s=function(){if(r){var e=a;return a.startsWith("/")&&(e=e.slice(1)),"/"+i.route+"/"+e}}();return n.createElement(n.Fragment,null,s&&n.createElement(n.Fragment,null,n.createElement("a",{href:(0,u.Z)(s),target:"_blank",rel:"noreferrer noopener"},"Open in editor"),n.createElement("span",{className:"margin-horiz--sm"},"|")),n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Open on GitHub")))}var h=a(45697),E=a.n(h);function b(e){var t=e.editUrl,a=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(t);return n.createElement(n.Fragment,null,function(e){return new RegExp("external/[^/]*/","i").test(e)}(t)?n.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):n.createElement(p,{editUrl:t}))}b.propTypes={editUrl:E().string};var f=b}}]);