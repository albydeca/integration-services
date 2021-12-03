"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[5022],{78198:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"shimmer",title:"Shimmer",description:"Introduction to the emerging incentivized staging network",keywords:["Incentivized","staking","SMR"]},l=void 0,c={unversionedId:"future/shimmer",id:"future/shimmer",isDocsHomePage:!1,title:"Shimmer",description:"Introduction to the emerging incentivized staging network",source:"@site/internal/learn/future/shimmer.md",sourceDirName:"future",slug:"/future/shimmer",permalink:"/integration-services/learn/future/shimmer",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/future/shimmer.md",tags:[],version:"current",lastUpdatedAt:1638470679,formattedLastUpdatedAt:"12/2/2021",frontMatter:{id:"shimmer",title:"Shimmer",description:"Introduction to the emerging incentivized staging network",keywords:["Incentivized","staking","SMR"]},sidebar:"learn",previous:{title:"Community Tutorials",permalink:"/integration-services/learn/future/smart-contracts/smart-contracts-community-tutorials"},next:{title:"Dust Protection",permalink:"/integration-services/learn/future/dust-protection"}},u=[{value:"Pre-launch staking",id:"pre-launch-staking",children:[{value:"Technical overview",id:"technical-overview",children:[],level:3}],level:2},{value:"Post-launch staking",id:"post-launch-staking",children:[],level:2}],h={toc:u};function m(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Shimmer",src:n(73444).Z,title:"Click to see the full-size image."})),(0,o.kt)("p",null,"In November 2021, IOTA Foundation ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/introducing-iota-staking/"},"introduced")," Shimmer, an incentivized staging network. Shimmer will function as a validation and staging network for upcoming IOTA updates before they arrive on the mainnet. It will also have its own token called ",(0,o.kt)("a",{parentName:"p",href:"https://shimmer.network/token"},"SMR"),". To fairly distribute Shimmer tokens on the new network, you can stake your IOTA tokens before the launch of Shimmer, and will receive Shimmer tokens once the new network starts."),(0,o.kt)("h2",{id:"pre-launch-staking"},"Pre-launch staking"),(0,o.kt)("p",null,"During 90 days before the launch of the Shimmer network, you will be able to stake your IOTA tokens to receive SMR tokens on the Shimmer network upon launch. The IOTA Foundation will announce the start date 24 hours in advance. During these 90 days, you will earn 1 SMR for every 1Mi IOTA you staked every 10 seconds. There is no risk involved in staking your IOTA tokens. You will remain in control of your tokens and won't have to transfer them to a third party. Let's take a closer (simplified) look at the technology behind the process."),(0,o.kt)("h3",{id:"technical-overview"},"Technical overview"),(0,o.kt)("p",null,"Staking will happen using the official IOTA ",(0,o.kt)("a",{parentName:"p",href:"https://firefly.iota.org/"},"Firefly Wallet"),". To stake your IOTA tokens in return for SMR tokens, you create a special staking transaction with a specific payload. This declares that you want to stake that amount of IOTA tokens to receive SMR tokens. The Hornet node uses a plugin to register which addresses have staked IOTA and for how long - node owners can opt in to enable this plugin."),(0,o.kt)("p",null,"Those who are already familiar with the upcoming Build/Burn Vote process will recognize the similarities between that voting process and the Shimmer staking process, as the same Hornet plugin performs it."),(0,o.kt)("p",null,"Here is ",(0,o.kt)("strong",{parentName:"p"},"an example")," of how this would work: Bob has 1Mi on an address and uses Firefly, the official IOTA wallet. He wants to use his IOTA tokens to stake for some Shimmer tokens (SMR). He clicks the stake button in Firefly, which generates the staking transaction. Hornet sees this message and starts monitoring how long the IOTA tokens are staked on that address. If the tokens are moved from that address, then the staking period for that address ends."),(0,o.kt)("p",null,"For every milestone, 1 Mi staked returns 1 SMR token. So after the first milestone, the returned amount will be 1 SMR. Ten seconds later, after the second milestone, it will be 2 SMR and so on. As long as his IOTA tokens stay on the address used for staking, the number of SMR tokens will accumulate."),(0,o.kt)("p",null,"If Bob stakes 1 Mi for the full period of 90 days, he will receive 777,600 SMR tokens. On the Shimmer network, Bob can now claim his real SMR tokens using the Firefly wallet."),(0,o.kt)("p",null,"The initial token supply of SMR is defined by the amount of IOTA tokens staked, and for how long they were staked, during the 90 day staking period."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Staking Example",src:n(59734).Z,title:"Click to see the full-size image."})),(0,o.kt)("h2",{id:"post-launch-staking"},"Post-launch staking"),(0,o.kt)("p",null,'Once the Shimmer network is live, you will be able to stake your SMR tokens directly. An initial APY of 8% is planned. This can be changed later by the community. More information on "post-launch" staking will follow.'))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,p=m["".concat(l,".").concat(d)]||m[d]||h[d]||o;return n?r.createElement(p,a(a({ref:t},u),{},{components:n})):r.createElement(p,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73444:function(e,t,n){t.Z=n.p+"assets/images/shimmer-3e665f0886c10b6ede5c924ec662184f.svg"},59734:function(e,t,n){t.Z=n.p+"assets/images/staking_example-338974604e0fe5cbcd4e3b6c875db8bd.svg"}}]);