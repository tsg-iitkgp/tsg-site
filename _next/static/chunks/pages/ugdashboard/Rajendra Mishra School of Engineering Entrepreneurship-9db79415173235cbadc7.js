_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[136],{gYzp:function(e,t,n){e.exports={cell:"dashboard_cell__3Vj3w",loading:"dashboard_loading__3s6OW",error:"dashboard_error__30Vj5",formContainer:"dashboard_formContainer__24Hhh"}},niMR:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("q1tI"),c=n("20a2"),s=n("g4pe"),o=n.n(s),i=n("CafY"),d=n("gYzp"),u=n.n(d);t.default=function(){var e=Object(c.useRouter)(),t=e.query.dep,n=Object(a.useState)(!1),s=n[0],d=n[1],j=Object(a.useState)(""),l=j[0],b=j[1],h=Object(a.useState)(""),p=h[0],f=h[1],O=Object(a.useState)(),x=O[0],m=O[1],g=Object(a.useState)(""),_=g[0],w=g[1],v=Object(a.useState)(""),C=v[0],N=v[1];Object(a.useEffect)(function(){fetch("https://script.google.com/macros/s/AKfycbzM_cPnLCbg1tqk3pUA3rY5TKoLvNVcaZuVTCypC08A4MqFkIg8CykDzEqL-7pRhnRf/exec?sheetName=Form Responses 1").then(function(e){return e.json()}).then(function(e){return m(function(n){var r=e.data.header.findIndex(function(e){return"department"===e});return{header:e.data.header,data:e.data.data.filter(function(e){return e[r]===t})}})}).catch(function(e){return console.log(e)})},[t]);return Object(r.jsxs)(i.a,{children:[Object(r.jsx)(o.a,{children:Object(r.jsx)("title",{children:"Login | Dashboard"})}),s?Object(r.jsx)("section",{className:"awards content",children:Object(r.jsx)("div",{className:"table-container",style:{overflow:"auto"},children:void 0!=x&&0!=x.length?Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:x.header.map(function(e){return Object(r.jsx)("th",{className:u.a.cell,children:e.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ")})})})}),Object(r.jsx)("tbody",{children:x.data.map(function(e){return Object(r.jsx)("tr",{children:e.map(function(e){return Object(r.jsx)("td",{className:u.a.cell,children:e||"-"})})})})})]}):Object(r.jsx)("div",{className:u.a.loading,children:"Loading..."})})}):Object(r.jsx)("section",{className:u.a.formContainer,children:Object(r.jsxs)("div",{children:[_&&Object(r.jsx)("div",{className:u.a.error,children:_}),Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),w(""),N("Signing you in...");fetch("https://script.google.com/macros/s/AKfycbzM_cPnLCbg1tqk3pUA3rY5TKoLvNVcaZuVTCypC08A4MqFkIg8CykDzEqL-7pRhnRf/exec?sheetName=Login Creds").then(function(e){return e.json()}).then(function(e){var t=e.data.data.findIndex(function(e){return e[0]===l});return!(t<0)&&e.data.data[t]}).then(function(n){n&&p===n[2]?t===n[1]?(console.log(t),d(!0)):(e.push("/ugdashboard/".concat(n[1])),d(!0)):w("Invalid Credentials"),N("")})},children:[Object(r.jsx)("label",{htmlFor:"username",children:"Username"})," ",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",id:"username",name:"username",onChange:function(e){return b(e.target.value)}}),Object(r.jsx)("br",{})," ",Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"password",children:"Password"})," ",Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"password",id:"password",name:"password",onChange:function(e){return f(e.target.value)}})," ",Object(r.jsx)("br",{}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"Submit"})})]}),C&&Object(r.jsx)("div",{children:C})]})})]})}},qpQK:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ugdashboard/Rajendra Mishra School of Engineering Entrepreneurship",function(){return n("niMR")}])}},[["qpQK",0,2,1,3]]]);