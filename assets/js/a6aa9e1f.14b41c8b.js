"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3089],{37542:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(80102),n=a(67294),l=a(86010),i=a(90748),o=a(88746),s="sidebar_2ahu",m="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",p=a(11614);function h(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var v=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,v),m=t&&t.items.length>0;return n.createElement(i.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},9410:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var r=a(67294),n=a(6832),l=a(37542),i=a(23579),o=a(88746),s=a(11614);var m=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(o.Z,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.createElement(o.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},r.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=a(59137);var u=function(e){var t=e.metadata,a=e.items,o=e.sidebar,s=(0,n.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?s:d;return r.createElement(l.Z,{title:g,description:u,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:o},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(m,{metadata:t}))}},63865:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),n=a(86010),l=a(88746),i="tag_1Okp",o="tagRegular_3MiF",s="tagWithCount_1HU1";var m=function(e){var t,a=e.permalink,m=e.name,c=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[o]=!c,t[s]=c,t))},m,c&&r.createElement("span",null,c))}},41921:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),n=a(86010),l=a(11614),i=a(63865),o="tags_2ga9",s="tag_11ep";function m(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:s},r.createElement(i.Z,{name:t,permalink:a}))}))))}},23579:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(67294),n=a(45697),l=a.n(n),i=a(86010),o=a(3905),s=a(11614),m=a(88746),c=a(51402),u=a(59137),d=a(27996),g=a(80098),p={blogHeader:"blogHeader_11Jz",blogPostTitle:"blogPostTitle_nmLu",blogPost__body:"blogPost__body_1F6N",blogPostData:"blogPostData_3WzT",blogPostDetailsFull:"blogPostDetailsFull_3bEF",blogPostDataContainer:"blogPostDataContainer_1pWc"},h=a(41921),v="image_1yU8";var E=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(m.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:v,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(m.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},b="authorCol_1R69";function f(e){var t=e.authors,a=e.assets;return 0===t.length?null:r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var n;return r.createElement("div",{className:(0,i.Z)("col col--6",b),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(n=a.authorsImageUrls[t])?n:e.imageURL})}))})))}function _(e){var t,a,n,l,v=(n=(0,u.c2)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=(0,c.C)().withBaseUrl,b=e.children,_=e.frontMatter,Z=e.assets,N=e.metadata,P=e.truncated,T=e.isBlogPostPage,k=void 0!==T&&T,y=N.date,w=N.formattedDate,x=N.permalink,U=N.tags,C=N.readingTime,L=N.title,D=N.editUrl,M=N.authors,F=null!=(t=Z.image)?t:_.image,R=_.url;return r.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(l=k?"h1":"h2",r.createElement("header",{className:p.blogHeader},r.createElement(l,{className:p.blogPostTitle,itemProp:"headline"},k?L:r.createElement(m.Z,{itemProp:"url",to:R||x},L)),r.createElement("div",{className:"row row--no-gutters"},r.createElement("div",{className:"col"},r.createElement(f,{authors:M,assets:Z})),r.createElement("div",{className:(0,i.Z)(p.blogPostData,"margin-vert--md","col")},r.createElement("div",{className:p.blogPostDataContainer},r.createElement("time",{dateTime:y,itemProp:"datePublished"},w),void 0!==C&&r.createElement(r.Fragment,null," \xb7 ",v(C))))))),F&&r.createElement("meta",{itemProp:"image",content:E(F,{absolute:!0})}),r.createElement("div",{className:(0,i.Z)("markdown",[p.blogPost__body]),itemProp:"articleBody"},r.createElement(o.Zo,{components:d.Z},b)),(U.length>0||P)&&r.createElement("footer",{className:(0,i.Z)("row docusaurus-mt-lg",(a={},a[p.blogPostDetailsFull]=k,a))},U.length>0&&r.createElement("div",{className:(0,i.Z)("col",{"col--9":!k})},r.createElement("div",{className:p.tagsList},r.createElement(h.Z,{tags:U}))),k&&D&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:D})),!k&&P&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(m.Z,{to:N.permalink,"aria-label":"Read more about "+L},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}_.propTypes={children:l().node,frontMatter:l().object,assets:l().object,metadata:l().shape({date:l().string,formattedDate:l().string,permalink:l().string,tags:l().arrayOf(l().object),readingTime:l().string,title:l().string,editUrl:l().string,authors:l().arrayOf(l().object)}),truncated:l().bool,isBlogPostPage:l().bool},_.defaultProps={isBlogPostPage:!1};var Z=_},80098:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(67294),n=a(11614),l=a(83117),i=a(80102),o=a(86010),s="iconEdit_2_ui",m=["className"];var c=function(e){var t=e.className,a=(0,i.Z)(e,m);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(76775),d=a(51402),g=a(52426),p=a(57617);function h(e){var t=e.editUrl,a=(0,u.TH)().pathname,l=(0,p.gA)(),i=(0,g.usePluginData)("docusaurus-plugin-docs-editor"),o=function(){if(l){var e=a;return a.startsWith("/")&&(e=e.slice(1)),"/"+i.route+"/"+e}}();return r.createElement(r.Fragment,null,o&&r.createElement(r.Fragment,null,r.createElement("a",{href:(0,d.Z)(o),target:"_blank",rel:"noreferrer noopener"},"Open in editor"),r.createElement("span",{className:"margin-horiz--sm"},"|")),r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Open on GitHub")))}var v=a(45697),E=a.n(v);function b(e){var t=e.editUrl,a=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(t);return r.createElement(r.Fragment,null,function(e){return new RegExp("external/[^/]*/","i").test(e)}(t)?r.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):r.createElement(h,{editUrl:t}))}b.propTypes={editUrl:E().string};var f=b},27996:function(e,t,a){var r=a(83117),n=a(80102),l=a(67294),i=a(51300),o=a(88746),s=a(34369),m=a(38676),c=a(24593),u=a(70650),d=["mdxType","originalType"];var g={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var r=e.props,i=(r.mdxType,r.originalType,(0,n.Z)(r,d));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(s.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(o.Z,e)},pre:function(e){var t,a=e.children;return(0,l.isValidElement)(a)&&(0,l.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?a.props.children:l.createElement(s.Z,(0,l.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),n=l.createElement(l.Fragment,null,t.filter((function(e){return e!==a})));return l.createElement(u.Z,(0,r.Z)({},e,{summary:a}),n)},h1:(0,m.Z)("h1"),h2:(0,m.Z)("h2"),h3:(0,m.Z)("h3"),h4:(0,m.Z)("h4"),h5:(0,m.Z)("h5"),h6:(0,m.Z)("h6"),img:function(e){return l.createElement(c.Z.Source,e)}};t.Z=g}}]);