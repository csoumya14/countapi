(this.webpackJsonpcountapi=this.webpackJsonpcountapi||[]).push([[0],{47:function(e,t,a){e.exports=a(76)},53:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),o=a.n(r),c=(a(52),a(53),a(13)),i=a(39),u=a.n(i),m=a(11),s=a(4),h=a(17),E=a(46),g=[{value:"Asia",label:"Asia"},{value:"Europe",label:"Europe"},{value:"America",label:"America"},{value:"Oceania",label:"Oceania"},{value:"Africa",label:"Africa"}],d={container:function(e,t){return Object(h.a)({marginTop:"12px"},e,{className:"float-md-right",border:(t.isFocused,null),transition:"border-color 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease","&:hover":{boxShadow:"0 2px 4px 0 rgba(41, 56, 78, 0.1)"}})},option:function(e,t){return Object(h.a)({},e,{className:"float-right",backgroundColor:"hsl(209, 23%, 22%)",color:"white"})},control:function(e,t){return Object(h.a)({},e,{className:"float-md-right",background:"hsl(209, 23%, 22%)"})},valueContainer:function(e,t){return Object(h.a)({},e,{className:"float-right",background:"hsl(209, 23%, 22%)"})}},p=function(e){var t=e.chosenRegion,a=e.handleRegionChange;return l.a.createElement("div",{style:{maxWidth:"40% ",marginLeft:"210px",marginRight:"0px"}},l.a.createElement(E.a,{placeholder:"Filter by Region",styles:d,options:g,onChange:a,value:g.filter((function(e){return e.value===t}))}))},f=function(e){var t=e.chosenCountry,a=e.handleFilterChange;return l.a.createElement("div",{className:"filter"},l.a.createElement("input",{id:"search",value:t,onChange:a,placeholder:"Search for a country"}))},v=a(81),b=a(82),y=a(77),C=a(78),x=a(79),w=function(e){var t=e.countriesToShow,a=e.setChosenCountry;switch(!0){case t.length>10:var n=t.slice(0,8);return l.a.createElement("div",{className:"grid-container"},l.a.createElement(y.a,null,l.a.createElement(C.a,{xs:"1",md:"4"},n.map((function(e){return l.a.createElement(x.a,{key:e.name},l.a.createElement(v.a,{style:{width:"12rem",height:"20rem",marginBottom:"50px",marginRight:"10px"}},l.a.createElement(v.a.Img,{variant:"top",src:e.flag,style:{height:"10rem"}}),l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Title,{style:{fontSize:"18px",width:"100%",color:"hsl(200, 15%, 8%)"}},e.name),l.a.createElement(v.a.Text,{style:{fontSize:"10px",width:"80%",color:"hsl(200, 15%, 8%)"}},"Population:",e.population,"\n","Region:",e.region,"\n","Capital:",e.capital,"\n"),l.a.createElement(m.a,{to:"/country"},l.a.createElement(b.a,{onClick:function(){a(e.name)},variant:"secondary",size:"sm"},"show")))))})))));case t.length>1&&t.length<10:return l.a.createElement("div",{className:"grid-container"},l.a.createElement(y.a,{fluid:!0,style:{lineHeight:"32px"}},l.a.createElement(C.a,{xs:"1",md:"4"},t.map((function(e){return l.a.createElement(x.a,{key:e.name},l.a.createElement(v.a,{style:{width:"15rem",marginBottom:"50px"}},l.a.createElement(v.a.Img,{variant:"top",src:e.flag,style:{height:"10rem"}}),l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Title,null,e.name),l.a.createElement(v.a.Text,null,l.a.createElement("div",null,"Population:",e.population),l.a.createElement("div",null,"Region:",e.region),l.a.createElement("div",null,"Capital:",e.capital)),l.a.createElement(m.a,{to:"/country"},l.a.createElement(b.a,{onClick:function(){a(e.name)}},"show")))))})))));case 1===t.length:return l.a.createElement("div",{className:"grid-container"},l.a.createElement(y.a,null,l.a.createElement(C.a,{md:"1"},l.a.createElement(x.a,{md:{span:3,offset:5},key:t[0].name},l.a.createElement(v.a,{style:{width:"15rem",marginBottom:"50px"}},l.a.createElement(v.a.Img,{variant:"top",src:t[0].flag,style:{height:"10rem"}}),l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Title,null,t[0].name),l.a.createElement(v.a.Text,null,l.a.createElement("div",null,"Population:",t[0].population),l.a.createElement("div",null,"Region:",t[0].region),l.a.createElement("div",null,"Capital:",t[0].capital)),l.a.createElement(m.a,{to:"/country"},l.a.createElement(b.a,{onClick:function(){a(t[0].name)}},"show"))))))));default:return null}},k=a(80),O=function(e){var t=e.countriesToShow,a=e.setChosenCountry;return l.a.createElement(y.a,null,l.a.createElement(C.a,null,l.a.createElement(x.a,{md:4},l.a.createElement(m.a,{to:"/"},l.a.createElement("button",{onClick:function(){a("")}},"Back")))),l.a.createElement(C.a,{md:3,xs:1},l.a.createElement(x.a,null,l.a.createElement(k.a,{src:t[0].flag,alt:"flag",fluid:!0,style:{marginTop:"50px"}})),l.a.createElement(x.a,null,l.a.createElement("div",{style:{marginTop:"80px",marginLeft:"50px"}},l.a.createElement("h2",null,t[0].name),l.a.createElement("div",{style:{fontSize:"11px",lineHeight:"1.6"}},l.a.createElement("div",null,"Native Name: ",t[0].nativeName),l.a.createElement("div",null,"Population: ",t[0].population),l.a.createElement("div",null,"Region: ",t[0].region),l.a.createElement("div",null,"Sub Region: ",t[0].subregion),l.a.createElement("div",null,"Capital: ",t[0].capital),"\n"))),l.a.createElement(x.a,null,l.a.createElement("div",{style:{marginTop:"125px"}},l.a.createElement("div",{style:{fontSize:"11px",lineHeight:"1.6"}},l.a.createElement("div",null,"Top Level Domain:",t[0].topLevelDomain),l.a.createElement("div",null,"Currencies: ",t[0].currencies.map((function(e){return e.name}))),l.a.createElement("div",null,"Languages:"," ",t[0].languages.map((function(e){return e.name})).join(",")))))))},S=a(22),j={backgroundColor:"hsl(0, 0%, 98%)",text:"hsl(200, 15%, 8%)"},T={backgroundColor:"hsl(207, 26%, 17%)",text:"hsl(0, 0%, 100%)"},N=a(42);function R(){var e=Object(N.a)(["\n\n  body {\n    \n    background: ",";\n    color: ",";\n    \n  }\n  "]);return R=function(){return e},e}var z=Object(S.b)(R(),(function(e){return e.theme.backgroundColor}),(function(e){return e.theme.text})),L=a(44),B=a(45),I={backgroundColor:"hsl(209, 23%, 22%)",color:"hsl(0, 0%, 100%)"},A=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(c.a)(o,2),h=i[0],E=i[1],g=Object(n.useState)(""),d=Object(c.a)(g,2),v=d[0],k=d[1],N=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=window.localStorage.getItem("theme");e&&l(e)}),[]),[a,function(){"light"===a?(window.localStorage.setItem("theme","dark"),l("dark")):(window.localStorage.setItem("theme","light"),l("light"))}]}(),R=Object(c.a)(N,2),A=R[0],F=R[1];Object(n.useEffect)((function(){u.a.get("https://restcountries.eu/rest/v2/all").then((function(e){r(e.data)}))}),[]),console.log("render",a.length,"countries");var P=a.filter((function(e){return e.region.toLowerCase().includes(v.toLowerCase())})).filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return l.a.createElement(S.a,{theme:"light"===A?j:T},l.a.createElement(m.a,{basename:"/countapi"},l.a.createElement(y.a,null,l.a.createElement(C.a,{style:I},l.a.createElement(x.a,null,l.a.createElement("h1",{style:{fontWeight:"800",fontSize:"16px",marginTop:"20px"}},"Where in the world?")),l.a.createElement(x.a,null,l.a.createElement(b.a,{className:"float-right",style:{background:"hsl(209, 23%, 22%)",border:"none"},onClick:F},l.a.createElement(L.a,{icon:B.a}),"Dark Mode"))),l.a.createElement("div",null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/country"},l.a.createElement(C.a,null,l.a.createElement(x.a,null,l.a.createElement(O,{countriesToShow:P,setChosenCountry:E})))),l.a.createElement(s.a,{path:"/"},l.a.createElement(C.a,null,l.a.createElement(x.a,{sm:{size:"auto"}},l.a.createElement(f,{chosenCountry:h,handleFilterChange:function(e){E(e.target.value)}})),l.a.createElement(x.a,{sm:{size:"auto"}},l.a.createElement(p,{handleRegionChange:function(e){k(e.value)},chosenRegion:v}))),l.a.createElement(C.a,null,l.a.createElement(x.a,{sm:{size:"auto"}},l.a.createElement(w,{countriesToShow:P,setChosenCountry:E})))))))),l.a.createElement(z,null))};o.a.render(l.a.createElement(A,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.b2f504f4.chunk.js.map