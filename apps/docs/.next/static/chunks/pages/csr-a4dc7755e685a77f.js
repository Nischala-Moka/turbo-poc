(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6],{3503:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/csr",function(){return t(5962)}])},5962:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(2322),s=t(2784);let o=()=>(0,r.jsx)("button",{style:{backgroundColor:"green",padding:"0.8rem",border:"none",borderRadius:"0.5rem",color:"white",fontWeight:"bold",cursor:"pointer"},onClick:()=>console.log("event triggred!"),children:"shareBtn"});var a=t(4194),c=t.n(a),i=t(6635),l=t.n(i);let _=((e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((e,n)=>((n&=63)<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),""))();function d(){let[e,n]=(0,s.useState)([]);return(0,s.useEffect)(()=>{let e=async()=>{let e=await fetch("https://jsonplaceholder.typicode.com/users"),t=await e.json();n(t)};return setTimeout(()=>e(),3e3),()=>{}},[]),console.log(_),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h2",{children:["Nextjs CSR : ",(0,r.jsx)("span",{style:{color:"red"},children:l().capitalize("turborepo")})]}),(0,r.jsx)("h3",{children:0===e.length&&"Loading... ...."}),(0,r.jsx)("div",{className:c().card_one,children:e.map(e=>(0,r.jsxs)("div",{className:c().card,children:[(0,r.jsx)("h4",{children:e.email}),(0,r.jsx)("p",{children:e.username}),(0,r.jsx)(o,{})]},e.id))})]})}},4194:function(e){e.exports={nav_wrapper:"style_nav_wrapper__7fdyZ",nav_ulist:"style_nav_ulist__nM21P",mainContent:"style_mainContent__IUNHX",para:"style_para__yZtpa",card_one:"style_card_one__cwxZg",card:"style_card__4bDq8"}}},function(e){e.O(0,[774,182,888,179],function(){return e(e.s=3503)}),_N_E=e.O()}]);