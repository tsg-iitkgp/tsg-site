(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},"20a2":function(e,t,r){e.exports=r("nOHt")},"48fX":function(e,t,r){var n=r("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"5fIB":function(e,t,r){var n=r("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"8Kt/":function(e,t,r){"use strict";var n=r("oI91");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),c=(a=r("Xuae"))&&a.__esModule?a:{default:a},s=r("lwAK"),l=r("FYa8"),u=r("/0+H");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function j(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,l=h.length;s<l;s++){var u=h[s];if(o.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?a=!1:r.add(u);else{var f=o.props[u],p=n[u]||new Set;"name"===u&&i||!p.has(f)?(p.add(f),n[u]=p):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function b(e){var t=e.children,r=(0,i.useContext)(s.AmpStateContext),n=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:j,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}b.rewind=function(){};var O=b;t.default=O},CafY:function(e,t,r){"use strict";r.d(t,"b",(function(){return V})),r.d(t,"a",(function(){return J}));var n=r("nKUr"),o=r("g4pe"),a=r.n(o),i=r("q1tI"),c=r.n(i),s=r("20a2"),l=r("YFqc"),u=r.n(l),f=r("17x9"),p=r.n(f);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var j=Object(i.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,a=void 0===o?24:o,i=h(e,["color","size"]);return c.a.createElement("svg",d({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),c.a.createElement("polyline",{points:"6 9 12 15 18 9"}))}));j.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},j.displayName="ChevronDown";var b=j;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var x=Object(i.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,a=void 0===o?24:o,i=v(e,["color","size"]);return c.a.createElement("svg",O({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),c.a.createElement("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),c.a.createElement("polyline",{points:"15 3 21 3 21 9"}),c.a.createElement("line",{x1:"10",y1:"14",x2:"21",y2:"3"}))}));x.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},x.displayName="ExternalLink";var g=x;function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var w=Object(i.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,a=void 0===o?24:o,i=y(e,["color","size"]);return c.a.createElement("svg",m({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),c.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));w.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},w.displayName="ChevronLeft";var k=w;function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var I=Object(i.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,a=void 0===o?24:o,i=_(e,["color","size"]);return c.a.createElement("svg",C({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),c.a.createElement("polyline",{points:"9 18 15 12 9 6"}))}));I.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},I.displayName="ChevronRight";var S=I;function M(){var e=Object(i.useState)(!1),t=e[0],r=e[1],o=Object(i.useState)(!1),a=o[0],c=o[1],l=Object(i.useState)(!1),f=l[0],p=l[1],d=Object(i.useState)(!1),h=d[0],j=d[1],O=Object(i.useState)(!1),v=O[0],x=O[1],m=Object(i.useState)(!1),y=m[0],w=m[1],C=Object(i.useState)(!1),_=C[0],I=C[1],M=Object(s.useRouter)(),P=function(e){switch(e){case 1:c(!a);break;case 2:p(!f);break;case 3:j(!h);break;case 4:x(!v);break;case 5:w(!y);break;case 6:I(!_)}};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("nav",{className:"menu",children:Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("div",{className:"logo",children:"/"!==M.pathname?Object(n.jsx)(u.a,{href:"/",children:Object(n.jsxs)("a",{children:[Object(n.jsx)("img",{src:"/IIT_Kharagpur_Logo.svg"})," \u2009 TSG"]})}):""}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{"data-text":"about",className:"dropdown-title",children:["About ",Object(n.jsx)(b,{}),Object(n.jsxs)("ul",{className:"dropdown-content",children:[Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/about",children:"About Us"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/societies",children:"Societies"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/committees",children:"Committees"})})]})]}),Object(n.jsxs)("li",{"data-text":"GC",className:"dropdown-title",children:["Results ",Object(n.jsx)(b,{}),Object(n.jsxs)("ul",{className:"dropdown-content",children:[Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/gcResults",children:"General Championship"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/interIITResults",children:"Inter IIT Meet"})})]})]}),Object(n.jsxs)("li",{"data-text":"Links",className:"dropdown-title",children:["Links ",Object(n.jsx)(b,{}),Object(n.jsxs)("ul",{className:"dropdown-content",children:[Object(n.jsx)("li",{"data-text":"Blog",children:Object(n.jsxs)("a",{href:"https://tsgblog.iitkgp.ac.in",target:"_blank",rel:"noopener noreferrer",children:["TSG Blog \u2009 ",Object(n.jsx)(g,{})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"/files/Gymkhana_Constitution.pdf",target:"_blank",rel:"noopener noreferrer",children:["TSG Constitution \u2009 ",Object(n.jsx)(g,{})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"https://forms.gle/AaPmckUVsQyPY43v5",target:"_blank",rel:"noopener noreferrer",children:["Grievance Form \u2009 ",Object(n.jsx)(g,{})]})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/samyog",children:"Samyog - Connect IITKGP"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/pastOfficeBearers",children:"Past Office Bearers"})})]})]}),Object(n.jsxs)("li",{"data-text":"GC",className:"dropdown-title",children:["Hall of Fame ",Object(n.jsx)(b,{}),Object(n.jsx)("ul",{className:"dropdown-content",children:Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/tsgAwards",children:"TSG Awards"})})})]}),Object(n.jsxs)("li",{"data-text":"GC",className:"dropdown-title",children:["Contacts ",Object(n.jsx)(b,{}),Object(n.jsxs)("ul",{className:"dropdown-content",children:[Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/contacts",children:"Current Office Bearers"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/staff",children:"TSG Staff"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/secretaries",children:"Secretaries"})})]})]}),Object(n.jsx)("li",{"data-text":"GC",className:"dropdown-title",children:Object(n.jsx)(u.a,{href:"/opportunities",children:"Opportunities"})}),Object(n.jsx)("li",{"data-text":"GC",className:"dropdown-title",children:Object(n.jsx)(u.a,{href:"/events",children:"Events"})})]})]})}),Object(n.jsxs)("div",{className:"mobile-navbar",children:[Object(n.jsxs)("div",{className:"bar",children:[Object(n.jsx)("div",{className:"logo",children:"/"!==M.pathname?Object(n.jsx)(u.a,{href:"/",children:Object(n.jsx)("a",{children:Object(n.jsx)("img",{src:"/IIT_Kharagpur_Logo.svg"})})}):""}),Object(n.jsxs)("div",{className:"mobile-navbar-icon ".concat(t?"out":"nope"),onClick:function(){r(!t)},children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]})]}),Object(n.jsx)("div",{className:"wrapper ".concat(t?"active":""),children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{"data-text":"About",className:"dropdown-title ".concat(a?"down":""),onClick:function(){return P(1)},children:["About ",a?Object(n.jsx)(k,{}):Object(n.jsx)(S,{}),Object(n.jsxs)("ul",{className:"dropdown-content",children:[Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/about",children:"About Us"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/societies",children:"Societies"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"",children:"Committees"})})]})]}),Object(n.jsxs)("li",{"data-text":"GC",className:"dropdown-title ".concat(f?"down":""),onClick:function(){return P(2)},children:["Results ",f?Object(n.jsx)(k,{}):Object(n.jsx)(S,{}),Object(n.jsxs)("ul",{className:"dropdown-content",children:[Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/gcResults",children:"General Championship"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/interIITResults",children:"Inter IIT Meet"})})]})]}),Object(n.jsxs)("li",{"data-text":"GC",className:"dropdown-title ".concat(h?"down":""),onClick:function(){return P(3)},children:["Links ",h?Object(n.jsx)(k,{}):Object(n.jsx)(S,{}),Object(n.jsxs)("ul",{className:"dropdown-content",children:[Object(n.jsx)("li",{"data-text":"Blog",children:Object(n.jsxs)("a",{href:"https://tsgblog.iitkgp.ac.in",target:"_blank",rel:"noopener noreferrer",children:["TSG Blog \u2009 ",Object(n.jsx)(g,{})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"/files/Gymkhana_Constitution.pdf",target:"_blank",rel:"noopener noreferrer",children:["TSG Constitution \u2009 ",Object(n.jsx)(g,{})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"https://forms.gle/AaPmckUVsQyPY43v5",target:"_blank",rel:"noopener noreferrer",children:["Grievance Form \u2009 ",Object(n.jsx)(g,{})]})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/samyog",children:"Samyog - Connect IITKGP"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/pastOfficeBearers",children:"Past Office Bearers"})})]})]}),Object(n.jsxs)("li",{"data-text":"GC",className:"dropdown-title ".concat(y?"down":""),onClick:function(){return P(5)},children:["Hall of Fame ",f?Object(n.jsx)(k,{}):Object(n.jsx)(S,{}),Object(n.jsx)("ul",{className:"dropdown-content",children:Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/tsgAwards",children:"TSG Awards"})})})]}),Object(n.jsxs)("li",{"data-text":"GC",className:"dropdown-title ".concat(v?"down":""),onClick:function(){return P(4)},children:["Contacts ",v?Object(n.jsx)(k,{}):Object(n.jsx)(S,{}),Object(n.jsxs)("ul",{className:"dropdown-content",children:[Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/contacts",children:"Current Office Bearers"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/staff",children:"TSG Staff"})}),Object(n.jsx)("li",{children:Object(n.jsx)(u.a,{href:"/secretaries",children:"Secretaries"})})]})]}),Object(n.jsx)("li",{"data-text":"GC",className:"",children:Object(n.jsx)(u.a,{href:"/opportunities",children:"Opportunities"})}),Object(n.jsx)("li",{"data-text":"GC",className:"",children:Object(n.jsx)(u.a,{href:"/events",children:"Events"})})]})})]})]})}var P=r("jtf1"),E=r("UUHW");function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var A=Object(i.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,a=void 0===o?24:o,i=T(e,["color","size"]);return c.a.createElement("svg",N({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),c.a.createElement("path",{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}),c.a.createElement("polygon",{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}))}));A.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},A.displayName="Youtube";var G=A;function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var z=Object(i.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,o=e.size,a=void 0===o?24:o,i=R(e,["color","size"]);return c.a.createElement("svg",L({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),c.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}));z.propTypes={color:p.a.string,size:p.a.oneOfType([p.a.string,p.a.number])},z.displayName="GitHub";var H=z;function B(){return Object(n.jsxs)("section",{className:"footer",children:[Object(n.jsx)("ul",{children:Object(n.jsxs)("li",{children:[Object(n.jsxs)("p",{children:["Technology Students' Gymkhana ",Object(n.jsx)("br",{})," IIT Kharagpur, Kharagpur ",Object(n.jsx)("br",{}),"West Bengal - 721302"]}),Object(n.jsx)("a",{href:"https://www.facebook.com/TSG.IITKharagpur",target:"_blank",rel:"noreferrer noopener",children:Object(n.jsx)(P.a,{size:24})}),Object(n.jsx)("a",{href:"https://twitter.com/tsg_iitkgp",target:"_blank",rel:"noreferrer noopener",children:Object(n.jsx)(E.a,{size:24})}),Object(n.jsx)("a",{href:"https://www.youtube.com/channel/UCuTNELMlkNfJxAQ2vGJIe5Q",target:"_blank",rel:"noreferrer noopener",children:Object(n.jsx)(G,{size:24})}),Object(n.jsx)("a",{href:"https://github.com/tsg-iitkgp/tsg-site",target:"_blank",rel:"noreferrer noopener",children:Object(n.jsx)(H,{size:24})})]})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"http://www.iitkgp.ac.in/",target:"_blank",rel:"noopener noreferrer",children:"IITKGP Website"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://erp.iitkgp.ernet.in/",target:"_blank",rel:"noopener noreferrer",children:"ERP"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://iitkgpmail.iitkgp.ac.in/",target:"_blank",rel:"noopener noreferrer",children:"Zimbra webmail"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSft9FXZYvLiNt3oy0K3Iu4d6HoE830RhNWFHMXx1R4IjlhHKA/viewform",target:"_blank",rel:"noopener noreferrer",children:"Grievance Form"})})]}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://wiki.metakgp.org/w/Yellow_pages/",target:"_blank",rel:"noopener noreferrer",children:"Your Dost"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"http://www.hmc.iitkgp.ac.in/web/",target:"_blank",rel:"noopener noreferrer",children:"Hall Management Centre"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://wiki.metakgp.org/w/Yellow_pages",target:"_blank",rel:"noopener noreferrer",children:"Yellow Pages"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"http://www.counsellingcentre.iitkgp.ac.in/",target:"_blank",rel:"noopener noreferrer",children:"Counselling Centre"})})]})]})}function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}var q=["style","className","fill","paused","children","id","d","ref"],D=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).t=function(){return r.i.current.offsetWidth},r.h=function(){return r.i.current.offsetHeight},r.i=c.a.createRef(),r.state={path:""},r.u=0,r.o=0,r.l=0,r.v=r.v.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,W(t,r);var o=n.prototype;return o.p=function(){for(var e=[],t=0;t<=Math.max(this.props.points,1);t++){var r=t/this.props.points*this.t(),n=(this.l+(t+t%this.props.points))*this.props.speed*100,o=Math.sin(n/100)*this.props.amplitude,a=Math.sin(n/100)*o+this.props.height;e.push({x:r,y:a})}return e},o.m=function(e){var t="M "+e[0].x+" "+e[0].y,r={x:(e[1].x-e[0].x)/2,y:e[1].y-e[0].y+e[0].y+(e[1].y-e[0].y)},n=function(e,t){return" C "+e.x+" "+e.y+" "+e.x+" "+e.y+" "+t.x+" "+t.y};t+=n(r,e[1]);for(var o=r,a=1;a<e.length-1;a++)t+=n(o={x:e[a].x-o.x+e[a].x,y:e[a].y-o.y+e[a].y},e[a+1]);return(t+=" L "+this.t()+" "+this.h())+" L 0 "+this.h()+" Z"},o.g=function(){this.setState({path:this.m(this.p())})},o.j=function(){if(!this.props.paused){var e=new Date;this.o+=e-this.u,this.u=e}this.l=this.o*Math.PI/1e3,this.g()},o.v=function(){this.j(),this.M&&this.O()},o.O=function(){this.M=window.requestAnimationFrame(this.v),this.u=new Date},o.componentDidMount=function(){this.M||this.O()},o.componentWillUnmount=function(){window.cancelAnimationFrame(this.M),this.M=0},o.render=function(){var e=this.props,t=e.style,r=e.className,n=e.fill,o=e.children,a=e.id,i=F(e,q);return c.a.createElement("div",{style:K({width:"100%",display:"inline-block"},t),className:r,id:a,ref:this.i},c.a.createElement("svg",{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o,c.a.createElement("path",K({d:this.state.path,fill:n},i))))},n}(i.Component),U=["options"],Y={height:20,amplitude:20,speed:.15,points:3},X=function(e){var t=e.options,r=F(e,U);return c.a.createElement(D,K({},Y,t,r))};X.defaultProps={paused:!1,fill:"#fff"};var Q=X,V="TSG";function J(e){var t=e.children,r=Object(s.useRouter)();return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)(a.a,{children:[Object(n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(n.jsx)("meta",{name:"title",content:"Technology Students' Gymkhana"}),Object(n.jsx)("meta",{name:"description",content:"Indian Institute of Technology, Kharagpur"}),Object(n.jsx)("meta",{property:"og:type",content:"website"}),Object(n.jsx)("meta",{property:"og:url",content:"http://www.gymkhana.iitkgp.ac.in/"}),Object(n.jsx)("meta",{property:"og:title",content:"Technology Students' Gymkhana"}),Object(n.jsx)("meta",{property:"og:description",content:"Indian Institute of Technology, Kharagpur"}),Object(n.jsx)("meta",{property:"og:image",content:"/site_preview.png"}),Object(n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),Object(n.jsx)("meta",{property:"twitter:url",content:"http://www.gymkhana.iitkgp.ac.in/"}),Object(n.jsx)("meta",{property:"twitter:title",content:"Technology Students' Gymkhana"}),Object(n.jsx)("meta",{property:"twitter:description",content:"Indian Institute of Technology, Kharagpur"}),Object(n.jsx)("meta",{property:"twitter:image",content:"/site_preview.png"})]}),Object(n.jsx)(Q,{className:"wave",fill:"#67ECFD",paused:!1,options:{height:40,amplitude:40,speed:.2,points:3}}),Object(n.jsx)(M,{}),Object(n.jsx)("main",{children:t}),"/hallOfFame"!=r.pathname&&Object(n.jsx)("div",{className:"footer-container",children:Object(n.jsx)(B,{})})]})}},FYa8:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},T0f4:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},UUHW:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("17x9"),i=r.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="Twitter",t.a=l},Xuae:function(e,t,r){"use strict";var n=r("mPvQ"),o=r("/GRZ"),a=r("i2R6"),i=(r("qXWd"),r("48fX")),c=r("tCBg"),s=r("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var u=r("q1tI"),f=function(e){i(r,e);var t=l(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=f},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("zoAU"),o=r("7KCV");t.__esModule=!0,t.default=void 0;var a=o(r("q1tI")),i=r("elyg"),c=r("nOHt"),s=r("vNVm"),l={};function u(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),o=r&&r.asPath||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),r=n(t,2),a=r[0],c=r[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,j=e.replace,b=e.shallow,O=e.scroll,v=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var x=a.Children.only(h),g=x&&"object"===typeof x&&x.ref,m=(0,s.useIntersection)({rootMargin:"200px"}),y=n(m,2),w=y[0],k=y[1],C=a.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,a.useEffect)((function(){var e=k&&t&&(0,i.isLocalURL)(p),n="undefined"!==typeof v?v:r&&r.locale,o=l[p+"%"+d+(n?"%"+n:"")];e&&!o&&u(r,p,d,{locale:n})}),[d,p,k,v,t,r]);var _={ref:C,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:c}))}(e,r,p,d,j,b,O,v)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(r,p,d,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var I="undefined"!==typeof v?v:r&&r.locale,S=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(d,I,r&&r.locales,r&&r.domainLocales);_.href=S||(0,i.addBasePath)((0,i.addLocale)(d,I,r&&r.defaultLocale))}return a.default.cloneElement(x,_)};t.default=f},g4pe:function(e,t,r){e.exports=r("8Kt/")},jtf1:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("17x9"),i=r.n(a);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,i=void 0===a?24:a,l=s(e,["color","size"]);return o.a.createElement("svg",c({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),o.a.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="Facebook",t.a=l},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,r){var n=r("5fIB"),o=r("rlHP"),a=r("KckH"),i=r("kG2m");e.exports=function(e){return n(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,r){var n=r("C+bE"),o=r("qXWd");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},vNVm:function(e,t,r){"use strict";var n=r("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=n(l,2),f=u[0],p=u[1],d=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),r||f||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=r("q1tI"),a=r("0G5g"),i="undefined"!==typeof IntersectionObserver;var c=new Map}}]);