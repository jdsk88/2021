"use strict";(self.webpackChunk_010=self.webpackChunk_010||[]).push([[86],{1712:function(e,t,n){var r=n(1413),a=n(3496),s=n(7621),i=n(184);t.Z=function(e){var t=e.data;return(0,i.jsx)(s.Z,{children:(0,i.jsx)(a.Z,(0,r.Z)({},t))})}},2086:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(885),a=n(2791),s=n(1889),i=n(7621),l=n(890),c=n(8096),o=n(4795),d=n(6030),h=n(1712),x=n(9673),u=n(1169),m=n(2426),p=n.n(m),g=n(9276),j=n(184),f=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.Z,{sx:{width:450,minHeight:150,background:"#070d3e",color:"#67ff43",border:"2px solid #67ff43"}})})};function Z(){var e=(0,d.I0)();a.useEffect((function(){u.Z.getWidgetData(e,Z[0]||"btc"),u.Z.getSymbols(e),u.Z.getAllHistoryData(e,Z[0]||"btc",1e12),u.Z.getAllData(e),u.Z.getChart(e,"bitcoin"),e({type:x.J}),e({type:x.sq}),e({type:x.Ik}),e({type:x.S4}),e({type:x.AS}),e({type:x.IA}),e({type:x.gW}),e({type:x.Ft})}),[e]);var t=(0,d.v9)((function(e){return e.crypto.chart}));(0,d.v9)((function(e){return e.crypto.data}));console.log(t[0]);var n=(0,d.v9)((function(e){return e.crypto.widgets})),m=n[0]?n[0].price.usd:0,g=n[0]?n[0].name:void 0,Z=(0,d.v9)((function(e){return e.crypto.item})),y=(0,d.v9)((function(e){return e.crypto.symbols})),v=(0,d.v9)((function(e){return e.crypto.history})),b=[],k=[],F=[];v.length>0&&v.forEach((function(e){e.forEach((function(e){b.push(e.market_data.current_price.usd);var t=e.time.replace(/T/g," "),n=e.time.replace(/.000Z/g," ");"".concat(t," ").concat(n);k.push(Date.parse(e.time))}))})),k.length>0&&k.forEach((function(e){F.push(p()(e).format("YYYY MMM Do, h:mm:ss"))}));var w={height:400,type:"bar",options:{chart:{id:"crypto-chart",zoom:{enabled:!1}},plotOptions:{bar:{distributed:!0,horizontal:!1}},dataLabels:{enabled:!1},stroke:{width:2},xaxis:{categories:n.length>0?n[0].exchange:null}},series:[{name:n.length>0?n[0].name:null,data:n.length>0?n[0].current:null}]},P={series:[{data:t[0]&&t[0].prices}],type:"area",height:400,options:{chart:{id:"item_chart",toolbar:{show:!0},zoom:{enabled:!0},sparkline:{enabled:!1}},dataLabels:{enabled:!1},stroke:{show:!0,curve:"smooth",lineCap:"butt",colors:void 0,width:2,dashArray:0},title:{text:Z?Z[0]:"",align:"center"},grid:{row:{colors:["black","transparent"],opacity:.04}},xaxis:{categories:t[0]&&t[0].timeline}}},D={type:"bar",height:400,options:{plotOptions:{bar:{borderRadius:4,horizontal:!1}},dataLabels:{enabled:!1},xaxis:{categories:[g]}},series:[{name:g,data:[m.toFixed(2)]}]},A=a.useState(!1),C=(0,r.Z)(A,2),z=C[0],E=C[1];return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:(0,j.jsx)(i.Z,{children:(0,j.jsx)(l.Z,{textAlign:"center",variant:"h6",children:"Choose cryptocurrency"})})}),(0,j.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,sx:{mt:1,position:"sticky",top:30,zIndex:1030},children:(0,j.jsx)(c.Z,{fullWidth:!0,children:(0,j.jsxs)(o.Z,{sx:{background:"white"},value:Z.length<0?null:Z[0],onChange:function(t){return n=t.currentTarget.value,e({type:x.DU}),u.Z.getAllHistoryData(e,n),e({type:x.Js}),void u.Z.getWidgetData(e,n);var n},children:[(0,j.jsx)("option",{disabled:!0,value:"btc",children:"Choose cryptocurrency (default: btc)"}),y[0]&&y[0].map((function(e){return(0,j.jsx)("option",{value:e,children:e})}))]})})}),(0,j.jsxs)(s.ZP,{item:!0,xs:12,sm:12,md:2,xl:2,children:[(0,j.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:n.length<1?(0,j.jsx)(j.Fragment,{}):(0,j.jsx)(i.Z,{children:(0,j.jsx)(l.Z,{children:g})})}),(0,j.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:n.length<1?(0,j.jsx)(j.Fragment,{}):(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(h.Z,{data:D})})})]}),(0,j.jsxs)(s.ZP,{item:!0,xs:12,sm:12,md:10,xl:10,children:[(0,j.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:n.length<1?(0,j.jsx)(j.Fragment,{}):(0,j.jsx)(i.Z,{children:(0,j.jsx)(l.Z,{children:n[0].name})})}),(0,j.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:n.length<1?(0,j.jsx)(j.Fragment,{}):(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(h.Z,{data:w})})})]}),(0,j.jsxs)(s.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:[(0,j.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:n.length<1?(0,j.jsx)(j.Fragment,{}):(0,j.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,j.jsxs)(l.Z,{children:[n[0].name," timeline chart"]}),(0,j.jsx)(c.Z,{children:(0,j.jsx)(o.Z,{variant:"filled",onChange:function(t){return function(t){u.Z.getAllHistoryData(e,n[0].symbol,t).then((function(){return E(!0)})).finally((function(){E(!1)})),e({type:x.Js})}(t.currentTarget.value)},children:[{name:"1 hour",value:10},{name:"5 hour",value:50},{name:"1 day",value:240},{name:"1 month",value:7200},{name:"1 year",value:87600}].map((function(e){return(0,j.jsx)("option",{value:e.value,children:e.name})}))})})]})}),(0,j.jsxs)(s.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:[n.length<1?(0,j.jsx)(j.Fragment,{}):(0,j.jsx)(j.Fragment,{children:1==z?(0,j.jsx)("h1",{children:"LOADER"}):(0,j.jsx)(h.Z,{data:P})}),(0,j.jsx)(s.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:(0,j.jsx)(f,{})})]})]})]})}function y(){return(0,j.jsx)(Z,{})}},9276:function(e,t,n){var r=(0,n(3814).Z)();t.Z=r}}]);
//# sourceMappingURL=86.9d2a3455.chunk.js.map