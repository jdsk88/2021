"use strict";(self.webpackChunk_010=self.webpackChunk_010||[]).push([[443],{1712:function(e,n,t){var r=t(1413),a=t(3496),s=t(7621),i=t(184);n.Z=function(e){var n=e.data;return(0,i.jsx)(s.Z,{children:(0,i.jsx)(a.Z,(0,r.Z)({},n))})}},9021:function(e,n,t){t.d(n,{Z:function(){return m}});t(2791);var r=t(9836),a=t(3382),s=t(3994),i=t(9281),l=t(6890),c=t(5855),d=t(703),h=t(6030),o=t(890),x=t(184);function m(e){e.data;var n=e.name,t=(0,h.v9)((function(e){return e.crypto.data})),m=[];return t[0].length>1&&t[0].forEach((function(e,n){m.push({name:e.name.name,image:e.name.image.small,LastPrice:e.marketData.current_price.usd,prc:e.marketData.price_change_percentage_24h,Symbol:e.name.symbol,dayHigh:e.marketData.high_24h.usd,dayLow:e.marketData.low_24h.usd,dayPriceChart:e.marketData.market_cap_change_24h_in_currency.usd,Coins:e.marketData.total_supply,MarketCup:e.marketData.total_volume.usd})})),(0,x.jsx)(i.Z,{component:d.Z,children:(0,x.jsxs)(r.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,x.jsx)(l.Z,{children:(0,x.jsxs)(c.Z,{children:[(0,x.jsx)(s.Z,{sx:{display:"flex"},children:(0,x.jsx)(o.Z,{children:n})}),(0,x.jsx)(s.Z,{children:"Last Price"}),(0,x.jsx)(s.Z,{children:"%"}),(0,x.jsx)(s.Z,{children:"Symbol"}),(0,x.jsx)(s.Z,{children:"24 High"}),(0,x.jsx)(s.Z,{children:"24 Low"}),(0,x.jsx)(s.Z,{children:"Coins"}),(0,x.jsx)(s.Z,{children:"Market Cup"})]})}),(0,x.jsx)(a.Z,{children:m.map((function(e){return(0,x.jsxs)(c.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,x.jsxs)(s.Z,{component:"th",scope:"row",sx:{display:"flex",justifyContent:"space-evenly"},children:[(0,x.jsx)("img",{src:e.image,style:{width:"30%",height:"25px",objectFit:"scale-down"}}),(0,x.jsx)(o.Z,{sx:{width:"70%"},children:e.name})]}),(0,x.jsx)(s.Z,{children:e.LastPrice}),(0,x.jsx)(s.Z,{children:e.prc}),(0,x.jsx)(s.Z,{children:e.Symbol}),(0,x.jsx)(s.Z,{children:e.dayHigh}),(0,x.jsx)(s.Z,{children:e.dayLow}),(0,x.jsx)(s.Z,{children:e.Coins}),(0,x.jsx)(s.Z,{children:e.MarketCup})]},e.name)}))})]})})}},3443:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(2791),a=t(1889),s=t(7621),i=t(890),l=t(8096),c=t(4795),d=t(6030),h=t(184),o=t(1712),x=t(9673),m=t(1169),u=t(9021);function j(){var e=(0,d.I0)(),n=(0,d.v9)((function(e){return e.crypto.widgets})),t=(0,d.v9)((function(e){return e.crypto.data})),j=(0,d.v9)((function(e){return e.crypto.symbols})),g=(0,d.v9)((function(e){return e.crypto.lineChart}));console.log(g[0]);var Z=(0,d.v9)((function(e){return e.global.clicks})),p=[];Z.forEach((function(e,n){p.push(n)}));var y=[];Z.forEach((function(e,n){y.push(e.clientX)}));var f=[];Z.forEach((function(e,n){f.push(e.clientY)}));var b={height:400,type:"bar",options:{chart:{id:"crypto-chart",zoom:{enabled:!0}},plotOptions:{bar:{distributed:!0,horizontal:!1}},dataLabels:{enabled:!1},stroke:{width:2},xaxis:{categories:n.length>0?n[0].exchange:null}},series:[{data:n.length>0?n[0].current:null}]},v=(n.length>0&&n[0].exchange,n.length>0&&n[0].current,{height:400,type:"area",options:{chart:{id:"market-sale-chart",toolbar:{show:!0},zoom:{enabled:!0},sparkline:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.5,opacityTo:0,stops:[0,10,20,30,40,50,60,70,80,90,100]}},legend:{show:!1},yaxis:{min:1,max:100,labels:{show:!1}}},series:[{name:n[0]?n[0].name:null,data:n.length>0?n[0].current:null}]}),k={height:window.innerHeight-165,type:"area",options:{chart:{id:"market-sale-chart",toolbar:{show:!0},zoom:{enabled:!0},sparkline:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.5,opacityTo:0,stops:[0,10,20,30,40,50,60,70,80,90,100]}},legend:{show:!1},yaxis:{min:1,max:100,labels:{show:!1}}},series:[{name:n[0]?n[0].name:null,data:n.length>0?n[0].current:null}]};return r.useEffect((function(){m.Z.getAllData(e),m.Z.getSymbols(e),m.Z.getLineChartData(e),e({type:x.S4}),e({type:x.AS}),e({type:x.IA}),e({type:x.gW}),e({type:x.sq})}),[e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:(0,h.jsx)(s.Z,{children:(0,h.jsx)(i.Z,{textAlign:"center",variant:"h6"})})}),(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:t.length<1?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)(s.Z,{children:(0,h.jsx)(u.Z,{name:"Currency"})})}),(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:(0,h.jsx)(s.Z,{children:(0,h.jsx)(i.Z,{textAlign:"center",variant:"h6",children:"Choose cryptocurrency"})})}),(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,sx:{mt:1,position:"sticky",top:30,zIndex:1030,background:"white"},children:(0,h.jsx)(l.Z,{fullWidth:!0,children:(0,h.jsxs)(c.Z,{variant:"filled",fullWidth:!0,onChange:function(n){return t=n.currentTarget.value,void m.Z.getWidgetData(e,t);var t},children:[(0,h.jsx)("option",{disabled:!0,value:"btc",children:"Choose cryptocurrency (default: btc)"}),j[0]&&j[0].map((function(e){return(0,h.jsx)("option",{value:e,children:e})}))]})})}),(0,h.jsxs)(a.ZP,{item:!0,xs:12,sm:12,md:2,xl:2,children:[(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:n.length<1?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)(s.Z,{children:(0,h.jsx)(i.Z,{children:n[0].name})})}),(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:n.length<1?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(o.Z,{data:v})})})]}),(0,h.jsxs)(a.ZP,{item:!0,xs:12,sm:12,md:10,xl:10,children:[(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:n.length<1?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)(s.Z,{children:(0,h.jsx)(i.Z,{children:n[0].name})})}),(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:n.length<1?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(o.Z,{data:b})})})]}),(0,h.jsxs)(a.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:[(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:n.length<1?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)(s.Z,{children:(0,h.jsx)(i.Z,{children:n[0].name})})}),(0,h.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:12,xl:12,children:n.length<1?(0,h.jsx)(h.Fragment,{}):(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(o.Z,{data:k})})})]})]})}function g(){return(0,h.jsx)(j,{})}var Z=function(){return(0,h.jsx)(g,{})}}}]);
//# sourceMappingURL=443.3db72919.chunk.js.map