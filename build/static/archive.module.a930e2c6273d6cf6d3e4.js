(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[1],{226:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(2),i=r(334),s=r(215),a=r(54),l=r(0);const o=e=>d[e.size]||d.medium,d={thin:"58rem",small:"80rem",medium:"100rem"},h={name:"1r5gb7q",styles:"display:inline-block"},m=Object(n.styled)("div",{target:"euzzpev5"})("font-size:1em;font-weight:600;margin:0 auto;line-height:30px;width:calc(100% - 4rem);max-width:",o,";@media (min-width: 700px){display:flex;align-items:center;justify-content:space-between;width:calc(100% - 8rem);font-size:1.3em;font-weight:700;}"),j=Object(n.styled)("ul",{target:"euzzpev4"})({name:"1c2hn16",styles:"list-style:none;margin:0 2rem"}),b=Object(n.styled)("li",{target:"euzzpev3"})({name:"5ths8r",styles:"display:inline-block;margin:0;&:not(:last-of-type){margin-right:2rem;}"}),u=Object(n.styled)("div",{target:"euzzpev2"})({name:"1r5gb7q",styles:"display:inline-block"}),p=Object(n.styled)("span",{target:"euzzpev1"})({name:"vlp44u",styles:'@media (min-width: 700px){&:after{content:" Posts";}}'}),x=Object(n.styled)(a.a,{target:"euzzpev0"})({name:"9x8bsw",styles:"text-decoration:none;&:hover{text-decoration:underline;}"});var O=Object(n.connect)(({state:e,actions:t,libraries:r})=>{const{route:n,query:i,totalPages:s,next:a,previous:o,page:d}=e.source.get(e.router.link),O=e=>r.source.stringify({route:n,query:i,page:e}),g=((e,t)=>{const r=[];for(let n=Math.max(2,t-1);n<=Math.min(e-1,t+1);n++)r.push(n);return t-1>2&&r.unshift("..."),t+1<e-1&&r.push("..."),r.unshift(1),r.push(e),r})(s,d);return Object(c.useEffect)(()=>{a&&t.source.fetch(a)},[]),Object(l.jsxs)(m,{children:[Object(l.jsx)(u,{children:o&&Object(l.jsxs)(x,{link:o,children:["← ",Object(l.jsx)(p,{children:"Newer"})]})}),Object(l.jsx)("div",{css:h,children:Object(l.jsx)(j,{children:g.map((e,t)=>"..."===e?Object(l.jsx)(b,{children:"..."},t):e===d?Object(l.jsx)(b,{children:e},t):Object(l.jsx)(b,{children:Object(l.jsx)(x,{link:O(e),children:e})},t))})}),Object(l.jsx)(u,{children:a&&Object(l.jsxs)(x,{link:a,children:[Object(l.jsx)(p,{children:"Older"})," →"]})})]})});var g=Object(n.styled)("hr",{target:"e1dbkvv00"})({name:"1jbnsxs",styles:'color:#6d6d6d;margin-left:auto;margin-right:auto;width:calc(100% - 4rem);opacity:0.6;background:linear-gradient(\n    to left,\n    currentColor calc(50% - 16px),\n    transparent calc(50% - 16px),\n    transparent calc(50% + 16px),\n    currentColor calc(50% + 16px)\n  );background-color:transparent!important;border:none;height:0.1rem;overflow:visible;position:relative;max-width:120rem;@media (min-width: 700px){width:calc(100% - 8rem);margin:8rem auto;}&:before,&:after{background:currentColor;content:"";display:block;height:1.6rem;position:absolute;top:calc(50% - 0.8rem);transform:rotate(22.5deg);width:0.1rem;}&:before{left:calc(50% - 0.5rem);}&:after{right:calc(50% - 0.5rem);}'}),y=r(214);t.default=Object(n.connect)(({state:e,showExcerpt:t,showMedia:r})=>{const a=e.source.get(e.router.link),{primary:o}=e.theme.colors,d=t||!e.theme.showAllContentOnArchive;return Object(c.useEffect)(()=>{y.a.preload()},[]),Object(l.jsxs)(l.Fragment,{children:[a.isTaxonomy&&Object(l.jsx)(s.a,{labelColor:o,label:a.taxonomy,children:Object(l.jsx)("span",{children:Object(n.decode)(e.source[a.taxonomy][a.id].name)})}),a.isAuthor&&Object(l.jsx)(s.a,{labelColor:o,label:"Author",children:Object(l.jsx)("b",{children:Object(n.decode)(e.source.author[a.id].name)})}),a.items.map(({type:t,id:n},s)=>{const o=s===a.items.length-1,h=e.source[t][n];return Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)(i.h,{item:h,showExcerpt:d,showMedia:r},h.id),!o&&Object(l.jsx)(g,{})]},h.id)}),a.totalPages>1&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{}),Object(l.jsx)(O,{size:"thin"})]})]})})}}]);