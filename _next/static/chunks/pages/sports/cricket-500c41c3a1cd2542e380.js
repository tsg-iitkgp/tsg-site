_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[93],{"d92/":function(e,c,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sports/cricket",function(){return a("kozj")}])},gHii:function(e,c,a){e.exports={matchesSection:"cricket_matchesSection__22nAD",matchesNavMenu:"cricket_matchesNavMenu__pMdv2",navItem:"cricket_navItem__2I1ek",active:"cricket_active__33Zf0"}},kozj:function(e,c,a){"use strict";a.r(c),a.d(c,"default",(function(){return g}));var t=a("nKUr"),s=a("jT3O"),n=a("g4pe"),i=a.n(n),r=a("CafY"),j=(a("YFqc"),a("cBwE")),l=a("gHii"),o=a.n(l),m=a("q1tI"),d=a("AeFk"),h=a("JZzq"),b=a.n(h);var O=function(e){var c=e.match;return Object(t.jsxs)("div",{className:b.a.highlightCard,children:[Object(t.jsx)("div",{className:b.a.topContainer,children:Object(t.jsx)("p",{className:b.a.date,children:c.timing})}),Object(t.jsxs)("div",{className:b.a.scoreContainer,children:[Object(t.jsx)("div",{className:"".concat(b.a.teamContainer," ").concat(b.a.upcomingTeamContainer),children:Object(t.jsx)("div",{className:b.a.teamName,children:c.team1})}),Object(t.jsx)("div",{className:b.a.vs,children:"Vs"}),Object(t.jsx)("div",{className:"".concat(b.a.teamContainer," ").concat(b.a.upcomingTeamContainer),children:Object(t.jsx)("div",{className:b.a.teamName,children:c.team2})})]})]})},u=a("FXfL"),v=a("mAhU");function x(){var e=Object(s.a)(["\n  display: block;\n  margin: auto;\n"]);return x=function(){return e},e}Object(d.css)(x());var N=function(e){var c=e.match,a=Object(m.useState)(!1),s=a[0],n=a[1];return console.log(c),Object(t.jsxs)(t.Fragment,{children:[c&&Object(t.jsxs)("div",{className:b.a.highlightCard,children:[Object(t.jsxs)("div",{className:b.a.topContainer,children:[Object(t.jsx)("p",{className:b.a.date,children:c.timing}),Object(t.jsxs)("p",{className:b.a.description,children:["- ",c.result_line," -"]})]}),Object(t.jsxs)("div",{className:b.a.scoreContainer,children:[Object(t.jsxs)("div",{className:b.a.teamContainer,children:[Object(t.jsx)("div",{className:b.a.teamName,children:c.team1}),Object(t.jsx)("div",{className:b.a.overs,children:c.team1_score})]}),Object(t.jsx)("div",{className:b.a.vs,children:"Vs"}),Object(t.jsxs)("div",{className:b.a.teamContainer,children:[Object(t.jsx)("div",{className:b.a.teamName,children:c.team2}),Object(t.jsx)("div",{className:b.a.overs,children:c.team2_score})]})]}),Object(t.jsxs)("div",{className:b.a.bottomContainer,children:[Object(t.jsxs)("div",{className:b.a.bestPlayer,children:[Object(t.jsxs)("div",{className:b.a.iconContainer,children:[Object(t.jsx)(v.a,{size:32,className:b.a.awardIcon}),"Best Player of the Match"]}),Object(t.jsx)("div",{className:b.a.bestPlayerName,children:c.best_player})]}),Object(t.jsx)("button",{className:b.a.scorecardBtn,onClick:function(e){n(!0),console.log(s)},children:"Score Card"})]})]}),Object(t.jsx)("div",{className:b.a.modalContainer,children:c&&Object(t.jsx)(u.a,{matchData:c,isOpen:s,onRequestClose:function(){return n(!1)}})})]})};function p(){var e=Object(s.a)(["\n  display: block;\n  margin: auto;\n"]);return p=function(){return e},e}Object(d.css)(p());function g(){var e=Object(m.useState)(!0),c=(e[0],e[1]),a=Object(m.useState)(!1),s=(a[0],a[1],Object(m.useState)([])),n=s[0],l=s[1],d=Object(m.useState)(),h=(d[0],d[1],Object(m.useState)("upcoming")),b=h[0],u=h[1];Object(m.useEffect)((function(){fetch("https://script.google.com/macros/s/AKfycbzBMcvAFVr5IVC3KWDusLdZP-ZiEQ16Ngnpqj9RWgmteasFtGGqL1XHVAOXOQKaEgs/exec?sheetName=Matches").then((function(e){return e.json()})).then((function(e){l(e.data),console.log(e.data),c(!1)}))}),[]);return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)(r.a,{children:[Object(t.jsx)(i.a,{children:Object(t.jsxs)("title",{children:["Inter Hall Cricket Gymkhana Championship 2022 | ",r.b]})}),Object(t.jsx)("section",{className:"m-content",children:Object(t.jsxs)("div",{className:"facilities",children:[Object(t.jsx)("section",{children:Object(t.jsx)("h2",{children:"Inter Hall Cricket Gymkhana Championship 2022"})}),Object(t.jsxs)("section",{children:[Object(t.jsx)(j.a,{sheetName:"Highlight1"}),Object(t.jsx)(j.a,{sheetName:"Highlight2"}),Object(t.jsx)(j.a,{sheetName:"Highlight3"})]}),Object(t.jsx)("section",{className:o.a.matchesSection,children:Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Matches"}),Object(t.jsxs)("div",{className:o.a.matchesNavMenu,children:[Object(t.jsx)("div",{onClick:function(){return u("upcoming")},className:"".concat(o.a.navItem," ").concat("upcoming"===b?o.a.active:""),children:"Upcoming"}),Object(t.jsx)("div",{onClick:function(){return u("past")},className:"".concat(o.a.navItem," ").concat("past"===b?o.a.active:""),children:"Past"})]}),Object(t.jsx)("div",{children:n&&n.map((function(e,c){return e.status===b?"upcoming"===b?Object(t.jsx)(O,{match:e},c):Object(t.jsx)(N,{match:e},c):Object(t.jsx)(t.Fragment,{})}))})]})})]})})]})})}}},[["d92/",0,1,2,3,4,7,8]]]);