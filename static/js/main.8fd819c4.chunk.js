(this.webpackJsonpkollegen=this.webpackJsonpkollegen||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(7),s=n.n(r),o=(n(13),n(8)),a=n(3),j=n(6),u=(n(14),n(15),n(0)),l=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)(""),o=Object(a.a)(s,2),j=o[0],l=o[1];return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"neuerkollege",children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:Math.random().toString(),rufname:i,sektor:j};e.beimSpeichern(n),r(""),l("")},children:[Object(u.jsx)("label",{children:"Name des neuen Kollegen: "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",value:i,onChange:function(e){r(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"T\xe4tigkeit des neuen Kollegen: "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",value:j,onChange:function(e){l(e.target.value),console.log(i.trim().length)}}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",children:"Speichern"})]})})})},b=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(l,{beimSpeichern:function(t){var n=Object(j.a)(Object(j.a)({},t),{},{id:Math.random().toString()});e.beimHinzufuegenKollege(n)}})})},d=(n(17),function(e){return Object(u.jsxs)("div",{className:"ausgabe-item",children:[Object(u.jsxs)("div",{children:["Name: ",e.rufnameProp]}),Object(u.jsxs)("div",{children:["Abteilung: ",e.sektorProp]})]})});var O=function(e){return 0!==e.itemsApp.length?Object(u.jsx)("div",{children:e.itemsApp.map((function(e){return Object(u.jsx)(d,{rufnameProp:e.rufname,sektorProp:e.sektor},e.id)}))}):Object(u.jsx)("div",{children:"Nix anzuzeigen!"})};n(18);var h=function(e){return Object(u.jsx)("div",{className:"card",children:e.children})},f=[{id:"1",rufname:"\u0395\u03ba\u03c4\u03bf\u03c1\u03b1\u03c2",sektor:"\u03a4\u03c1\u03bf\u03af\u03b1"},{id:"2",rufname:"Hermes",sektor:"Nachrichten"},{id:"3",rufname:"\u039b\u03ad\u03b1\u03bd\u03b4\u03c1\u03bf\u03c2",sektor:"Relations"}];var m=function(){var e=Object(c.useState)(f),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(h,{children:[Object(u.jsx)(b,{beimHinzufuegenKollege:function(e){i((function(t){return[e].concat(Object(o.a)(t))})),console.log("Innerhalb der App.js"),console.log(n)}}),Object(u.jsx)(O,{itemsApp:n})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),g()}],[[19,1,2]]]);
//# sourceMappingURL=main.8fd819c4.chunk.js.map