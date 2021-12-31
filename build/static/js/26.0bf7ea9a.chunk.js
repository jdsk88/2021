"use strict";(self.webpackChunk_010=self.webpackChunk_010||[]).push([[26],{5026:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var i=n(885),t=n(2791),l=n(4554),a=n(6151),o=n(7621),d=n(2363),s=n(9504),c=n(9585),u=n(1889),h=n(890),p=n(6030),x=n(9673),m=n(4795),f=n(4177),v=n(5705),j=n(1089),y=n(6951),b=n(184);function Z(){var e=(0,p.I0)(),r=(0,p.v9)((function(e){return e.pricing.cards})),n=(0,p.v9)((function(e){return e.pricing.descriptions})),Z=(0,y.Ds)().enqueueSnackbar,g=function(e,r){Z(e,{variant:r})};t.useEffect((function(){e({type:x.P3}),e({type:x.Dz})}),[e]);var C=t.useState({id:0,value:""}),w=(0,i.Z)(C,2),B=w[0],D=w[1],P=j.Ry({title:j.Z_().required("title is required"),subheader:j.Z_().min(5,"subheader should be of minimum 5 characters length").max(25,"subheader should be of minimum 25 characters length").required("subheader is required"),icon:j.Z_().required("icon is required"),price:j.Rx().min(1,"price must be more than 1").max(999999999).required("price is required"),peroid:j.Z_().required("peroid is required")}),q={title:"",subheader:"",icon:"",price:null,peroid:"",descriptions:n},k=(0,v.TA)({initialValues:q,validationSchema:P,onSubmit:function(){console.log(k.isValidating);var r,i,t={id:(r=0,i=999999999,r=Math.ceil(r),i=Math.floor(i),Math.floor(Math.random()*(i-r+1))+r),title:k.values.title,subheader:k.values.subheader,price:k.values.price,icon:k.values.icon,peroid:k.values.peroid,description:n,buttonText:"Contact us",buttonVariant:"contained"};e({type:x.lI,payload:t}),e({type:x.NN}),k.resetForm(),Array.from(document.querySelectorAll("input")).forEach((function(e){return e.value=""})),g("Success","success")}});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u.ZP,{item:!0,xs:12,sm:12,md:12,children:(0,b.jsx)("form",{onSubmit:k.handleSubmit,children:(0,b.jsxs)(o.Z,{children:[(0,b.jsxs)(s.Z,{children:[(0,b.jsxs)(l.Z,{sx:{mt:2,display:"flex",flexDirection:"row",width:"100%"},children:[(0,b.jsxs)(m.Z,{sx:{width:"80%"},id:"title",name:"title",onChange:k.handleChange,onBlur:k.handleBlur,value:k.values.title,error:k.touched.title&&Boolean(k.errors.title),children:[(0,b.jsx)("option",{value:"",children:"Version"}),[{value:"Normal",label:"Normal"},{value:"Pro",label:"Pro"}].map((function(e,r){return(0,b.jsx)("option",{value:e.value,children:e.label},e+r)}))]}),(0,b.jsxs)(m.Z,{sx:{width:"20%"},id:"icon",name:"icon",onChange:k.handleChange,onBlur:k.handleBlur,value:k.values.icon,error:k.touched.icon&&Boolean(k.errors.icon),children:[(0,b.jsx)("option",{value:"",children:"ico"}),["\ud83d\udcde","\u2b50"].map((function(e,r){return(0,b.jsx)("option",{value:e,children:e},e+r)}))]})]}),(0,b.jsx)(f.Z,{sx:{mt:2},fullWidth:!0,id:"subheader",name:"subheader",variant:"standard",placeholder:"About product short",onChange:k.handleChange,onBlur:k.handleBlur,error:k.touched.subheader&&Boolean(k.errors.subheader)}),(0,b.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"baseline",mb:2},children:[(0,b.jsx)(f.Z,{fullWidth:!0,id:"price",name:"price",type:"number",variant:"standard",onChange:k.handleChange,onBlur:k.handleBlur,defaultValue:k.values.price,placeholder:"Price:",error:k.touched.price&&Boolean(k.errors.price)}),(0,b.jsxs)(m.Z,{id:"peroid",name:"peroid",onChange:k.handleChange,onBlur:k.handleBlur,error:k.touched.peroid&&Boolean(k.errors.peroid),children:[(0,b.jsx)("option",{value:"",children:"*"}),["year","month","day"].map((function(e,r){return(0,b.jsx)("option",{value:e,children:e},e+r)}))]})]}),(0,b.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"row",width:"100%"},children:[(0,b.jsx)(f.Z,{sx:{width:"90%"},id:"description",name:"description",type:"text",variant:"standard",onChange:function(e){return function(e){var r=e.currentTarget.value;D({id:n.length,value:r})}(e)},placeholder:"Descritpions:"}),(0,b.jsx)(a.Z,{id:"description",name:"description",style:{width:"10%"},onClick:function(r){r.preventDefault(),""!==B.value?(e({type:x.b,payload:B}),e({type:x.Dz}),D({id:n.length,value:""}),document.getElementById("description").value=""):g("asdfghjkl","warning")},children:"+"})]}),(0,b.jsx)(l.Z,{sx:{display:"flex",flexDirection:"column",width:"100%"},children:n&&n.map((function(r,n){return(0,b.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"row",width:"100%"},children:[(0,b.jsx)(h.Z,{style:{width:"5%"},children:r.id},"id_"+r.id+n),(0,b.jsx)(h.Z,{style:{width:"85%"},children:r.value},"value="+r.id+n),(0,b.jsx)(a.Z,{style:{width:"10%"},onClick:function(n){n.preventDefault(),e({type:x.Mw,payload:r}),e({type:x.Dz})},children:"\ud83d\uddd1\ufe0f"})]},"box_"+r.id+n)}))})]}),(0,b.jsx)(d.Z,{children:(0,b.jsx)(a.Z,{type:"submit",fullWidth:!0,variant:"contained",children:"add"})})]})})}),r.map((function(r,n){return(0,b.jsx)(u.ZP,{item:!0,xs:12,sm:"Normal"===r.title?12:6,md:4,children:(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(c.Z,{title:r.title,subheader:r.subheader,titleTypographyProps:{align:"center"},action:"Pro"===r.title?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("p",{children:[r.icon," "]}),(0,b.jsx)(a.Z,{onClick:function(){e({type:x.PB,payload:r}),e({type:x.P3}),g("Item Deleted","error")},children:"delete"})]}):(0,b.jsx)(a.Z,{onClick:function(){e({type:x.PB,payload:r}),e({type:x.P3}),g("Item Deleted","error")},children:"delete"}),subheaderTypographyProps:{align:"center"},sx:{backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[200]:e.palette.grey[700]}}}),(0,b.jsxs)(s.Z,{children:[(0,b.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"baseline",mb:2},children:[(0,b.jsxs)(h.Z,{component:"h2",variant:"h3",color:"text.primary",children:["$",r.price]}),(0,b.jsxs)(h.Z,{variant:"h6",color:"text.secondary",children:["/",r.peroid]})]}),(0,b.jsx)("ul",{children:r.description.map((function(e,r){return(0,b.jsx)(h.Z,{component:"li",variant:"subtitle1",align:"center",children:e.value},e.id+r)}))})]}),(0,b.jsx)(d.Z,{children:(0,b.jsx)(a.Z,{fullWidth:!0,variant:r.buttonVariant,children:r.buttonText})})]})},r.title+n)}))]})}function g(){return(0,b.jsx)(Z,{})}}}]);
//# sourceMappingURL=26.0bf7ea9a.chunk.js.map