"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8610],{37542:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(63366),n=a(67294),l=a(86010),i=a(4398),s=a(88746),o="sidebar_a9qW",m="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",d="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD",p=a(11614);function h(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var E=["sidebar","toc","children"];var f=function(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,r.Z)(e,E),m=t&&t.items.length>0;return n.createElement(i.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},82100:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(67294),n=a(88746),l=a(37542),i=a(52133),s=a(11614),o=a(12829);function m(e){var t,a=e.metadata,m=e.items,c=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,p=(t=(0,o.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(g),tagName:d});return r.createElement(l.Z,{title:h,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:c},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(n.Z,{href:u},r.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),m.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},63865:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),n=a(86010),l=a(88746),i="tag_hD8n",s="tagRegular_D6E_",o="tagWithCount_i0QQ";var m=function(e){var t,a=e.permalink,m=e.name,c=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(i,(t={},t[s]=!c,t[o]=c,t))},m,c&&r.createElement("span",null,c))}},41921:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(67294),n=a(86010),l=a(11614),i=a(63865),s="tags_XVD_",o="tag_JSN8";function m(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:o},r.createElement(i.Z,{name:t,permalink:a}))}))))}},52133:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(67294),n=a(86010),l=a(3905),i=a(11614),s=a(88746),o=a(51402),m=a(12829),c=a(77216),u=a(79197),d={blogHeader:"blogHeader_DLm6",blogPostTitle:"blogPostTitle_uMeh",blogPost__body:"blogPost__body_teCM",blogPostData:"blogPostData_Vfxe",blogPostDetailsFull:"blogPostDetailsFull_enUA",blogPostDataContainer:"blogPostDataContainer_yN0d"},g=a(41921),p="image_o0gy";var h=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:p,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},E="authorCol_FlmR",f="imageOnlyAuthorRow_trpF",v="imageOnlyAuthorCol_S2np";function b(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?f:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?v:E),key:t},r.createElement(h,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var Z=function(e){var t,a,p,h,E=(p=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return p(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),f=(0,o.C)().withBaseUrl,v=e.children,Z=e.frontMatter,_=e.assets,N=e.metadata,P=e.truncated,k=e.isBlogPostPage,T=void 0!==k&&k,y=N.date,w=N.formattedDate,C=N.permalink,D=N.tags,x=N.readingTime,L=N.title,U=N.editUrl,M=N.authors,R=null!=(t=_.image)?t:Z.image,F=Z.url;return r.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(h=T?"h1":"h2",r.createElement("header",{className:d.blogHeader},r.createElement(h,{className:d.blogPostTitle,itemProp:"headline"},T?L:r.createElement(s.Z,{itemProp:"url",to:F||C},L)),r.createElement("div",{className:"row row--no-gutters"},r.createElement("div",{className:"col"},r.createElement(b,{authors:M,assets:_})),r.createElement("div",{className:(0,n.Z)(d.blogPostData,"margin-vert--md","col")},r.createElement("div",{className:d.blogPostDataContainer},r.createElement("time",{dateTime:y,itemProp:"datePublished"},w),void 0!==x&&r.createElement(r.Fragment,null," \xb7 ",E(x))))))),R&&r.createElement("meta",{itemProp:"image",content:f(R,{absolute:!0})}),r.createElement("div",{className:(0,n.Z)("markdown",[d.blogPost__body]),itemProp:"articleBody"},r.createElement(l.Zo,{components:c.Z},v)),(D.length>0||P)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[d.blogPostDetailsFull]=T,a))},D.length>0&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":!T})},r.createElement("div",{className:d.tagsList},r.createElement(g.Z,{tags:D}))),T&&U&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:U})),!T&&P&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(s.Z,{to:N.permalink,"aria-label":"Read more about "+L},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},79197:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(67294),n=a(11614),l=a(87462),i=a(63366),s=a(86010),o="iconEdit_dcUD",m=["className"];var c=function(e){var t=e.className,a=(0,i.Z)(e,m);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(76775),d=a(51402),g=a(52426),p=a(35601);function h(e){var t=e.editUrl,a=(0,u.TH)().pathname,l=(0,p.useActivePlugin)(),i=(0,g.usePluginData)("docusaurus-plugin-docs-editor"),s=function(){if(l){var e=a;return a.startsWith("/")&&(e=e.slice(1)),"/"+i.route+"/"+e}}();return r.createElement(r.Fragment,null,s&&r.createElement(r.Fragment,null,r.createElement("a",{href:(0,d.Z)(s),target:"_blank",rel:"noreferrer noopener"},"Open in editor"),r.createElement("span",{className:"margin-horiz--sm"},"|")),r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Open on GitHub")))}function E(e){var t=e.editUrl,a=function(e){var t=new RegExp("external/[^/]*/","i");return e.replace(t,"")}(t);return r.createElement(r.Fragment,null,function(e){return new RegExp("external/[^/]*/","i").test(e)}(t)?r.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},r.createElement(c,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page")):r.createElement(h,{editUrl:t}))}},77216:function(e,t,a){var r=a(87462),n=a(63366),l=a(67294),i=a(51300),s=a(88746),o=a(66110),m=a(38676),c=a(75835),u=a(70650),d=["originalType"];var g={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){delete e.props.mdxType;var r=e.props,i=r.originalType,s=(0,n.Z)(r,d);return l.createElement(i,s)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(o.Z,e):l.createElement("code",e)},a:function(e){return l.createElement(s.Z,e)},pre:function(e){var t,a=e.children;return(0,l.isValidElement)(a)&&(0,l.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?a.props.children:l.createElement(o.Z,(0,l.isValidElement)(a)?null==a?void 0:a.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),n=l.createElement(l.Fragment,null,t.filter((function(e){return e!==a})));return l.createElement(u.Z,(0,r.Z)({},e,{summary:a}),n)},h1:function(e){return l.createElement(m.Z,(0,r.Z)({as:"h1"},e))},h2:function(e){return l.createElement(m.Z,(0,r.Z)({as:"h2"},e))},h3:function(e){return l.createElement(m.Z,(0,r.Z)({as:"h3"},e))},h4:function(e){return l.createElement(m.Z,(0,r.Z)({as:"h4"},e))},h5:function(e){return l.createElement(m.Z,(0,r.Z)({as:"h5"},e))},h6:function(e){return l.createElement(m.Z,(0,r.Z)({as:"h6"},e))},img:function(e){return l.createElement(c.Z.Source,e)}};t.Z=g}}]);