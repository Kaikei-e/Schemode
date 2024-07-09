(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9861)}])},9861:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var l=t(5893),r=t(532),i=t(2321),o=t(3058),a=t(7294),s=t(6554),d=t(6914),c=(0,s.G)(function(e,n){let{direction:t,align:r,justify:i,wrap:o,basis:a,grow:s,shrink:c,...u}=e;return(0,l.jsx)(d.m.div,{ref:n,__css:{display:"flex",flexDirection:t,alignItems:r,justifyContent:i,flexWrap:o,flexBasis:a,flexGrow:s,flexShrink:c},...u})});c.displayName="Flex";var u=t(7030),h=t(3179),m=t(5432),x=(0,s.G)(function(e,n){let t=(0,u.mq)("Heading",e),{className:r,...i}=(0,h.Lr)(e);return(0,l.jsx)(d.m.h2,{ref:n,className:(0,m.cx)("chakra-heading",e.className),...i,__css:t})});x.displayName="Heading";var f=t(5227),[p,j]=(0,f.k)({strict:!1,name:"ButtonGroupContext"});function g(e){let{children:n,className:t,...r}=e,i=(0,a.isValidElement)(n)?(0,a.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,m.cx)("chakra-button__icon",t);return(0,l.jsx)(d.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:o,children:i})}g.displayName="ButtonIcon";var v=t(1136);function b(e){let{label:n,placement:t,spacing:r="0.5rem",children:i=(0,l.jsx)(v.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:s,...c}=e,u=(0,m.cx)("chakra-button__spinner",o),h="start"===t?"marginEnd":"marginStart",x=(0,a.useMemo)(()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[h]:n?r:0,fontSize:"1em",lineHeight:"normal",...s}),[s,n,h,r]);return(0,l.jsx)(d.m.div,{className:u,...c,__css:x,children:i})}function y(...e){return n=>{e.forEach(e=>{!function(e,n){if(null!=e){if("function"==typeof e){e(n);return}try{e.current=n}catch(t){throw Error(`Cannot assign value '${n}' to ref '${e}'`)}}}(e,n)})}}b.displayName="ButtonSpinner";var w=(0,s.G)((e,n)=>{let t=j(),r=(0,u.mq)("Button",{...t,...e}),{isDisabled:i=null==t?void 0:t.isDisabled,isLoading:o,isActive:s,children:c,leftIcon:x,rightIcon:f,loadingText:p,iconSpacing:g="0.5rem",type:v,spinner:w,spinnerPlacement:C="start",className:_,as:k,...N}=(0,h.Lr)(e),M=(0,a.useMemo)(()=>{let e={...null==r?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!t&&{_focus:e}}},[r,t]),{ref:T,type:B}=function(e){let[n,t]=(0,a.useState)(!e);return{ref:(0,a.useCallback)(e=>{e&&t("BUTTON"===e.tagName)},[]),type:n?"button":void 0}}(k),D={rightIcon:f,leftIcon:x,iconSpacing:g,children:c};return(0,l.jsxs)(d.m.button,{ref:function(...e){return(0,a.useMemo)(()=>y(...e),e)}(n,T),as:k,type:null!=v?v:B,"data-active":(0,m.PB)(s),"data-loading":(0,m.PB)(o),__css:M,className:(0,m.cx)("chakra-button",_),...N,disabled:i||o,children:[o&&"start"===C&&(0,l.jsx)(b,{className:"chakra-button__spinner--start",label:p,placement:"start",spacing:g,children:w}),o?p||(0,l.jsx)(d.m.span,{opacity:0,children:(0,l.jsx)(S,{...D})}):(0,l.jsx)(S,{...D}),o&&"end"===C&&(0,l.jsx)(b,{className:"chakra-button__spinner--end",label:p,placement:"end",spacing:g,children:w})]})});function S(e){let{leftIcon:n,rightIcon:t,children:r,iconSpacing:i}=e;return(0,l.jsxs)(l.Fragment,{children:[n&&(0,l.jsx)(g,{marginEnd:i,children:n}),r,t&&(0,l.jsx)(g,{marginStart:i,children:t})]})}w.displayName="Button";var C=(0,d.m)("div");C.displayName="Box";var _=(0,s.G)(function(e,n){let{size:t,centerContent:r=!0,...i}=e;return(0,l.jsx)(C,{ref:n,boxSize:t,__css:{...r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});_.displayName="Square",(0,s.G)(function(e,n){let{size:t,...r}=e;return(0,l.jsx)(_,{size:t,ref:n,borderRadius:"9999px",...r})}).displayName="Circle";var k=(0,s.G)(function(e,n){let t=(0,u.mq)("Text",e),{className:r,align:i,decoration:o,casing:a,...s}=(0,h.Lr)(e),c=function(e){let n=Object.assign({},e);for(let e in n)void 0===n[e]&&delete n[e];return n}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,l.jsx)(d.m.p,{ref:n,className:(0,m.cx)("chakra-text",e.className),...c,...s,__css:t})});k.displayName="Text";var N=e=>e.isTheMode?(0,l.jsx)(v.$,{margin:2,thickness:"4px",speed:"2.5s",emptyColor:"gray.200",color:"blue.500",size:"md"}):(0,l.jsx)("div",{});let M=["Healthy Adult Mode","Vulnerable Child Mode","Dysfunctional Parent Mode"];var T=e=>(0,l.jsxs)(x,{fontSize:"x-large",textAlign:"center",fontStyle:"normal",fontWeight:"medium",m:"5",children:["Now, you're :"," ",M[e.mode]]}),B=t(4480);let D=(0,B.cn)({key:"opinionState",default:[]}),F=(0,B.cn)({key:"count",default:0});var I=e=>{let[n,t]=(0,B.FV)(D);return(0,l.jsx)(C,{borderRadius:"xl",w:"fit-content",h:"fit-content",m:5,padding:"2",children:(0,l.jsx)("ul",{children:(0,l.jsx)(c,{flexDir:"column-reverse",children:n.map(n=>{if(n.mode===e.whichMode)return(0,l.jsx)("li",{children:n.text},n.id)})})})})},[P,R]=(0,f.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[E,q]=(0,f.k)({strict:!1,name:"FormControlContext"});(0,s.G)(function(e,n){let t=(0,u.jC)("Form",e),{getRootProps:r,htmlProps:i,...o}=function(e){let{id:n,isRequired:t,isInvalid:l,isDisabled:r,isReadOnly:i,...o}=e,s=(0,a.useId)(),d=n||`field-${s}`,c=`${d}-label`,u=`${d}-feedback`,h=`${d}-helptext`,[x,f]=(0,a.useState)(!1),[p,j]=(0,a.useState)(!1),[g,v]=(0,a.useState)(!1),b=(0,a.useCallback)((e={},n=null)=>({id:h,...e,ref:y(n,e=>{e&&j(!0)})}),[h]),w=(0,a.useCallback)((e={},n=null)=>({...e,ref:n,"data-focus":(0,m.PB)(g),"data-disabled":(0,m.PB)(r),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(i),id:void 0!==e.id?e.id:c,htmlFor:void 0!==e.htmlFor?e.htmlFor:d}),[d,r,g,l,i,c]),S=(0,a.useCallback)((e={},n=null)=>({id:u,...e,ref:y(n,e=>{e&&f(!0)}),"aria-live":"polite"}),[u]),C=(0,a.useCallback)((e={},n=null)=>({...e,...o,ref:n,role:"group","data-focus":(0,m.PB)(g),"data-disabled":(0,m.PB)(r),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(i)}),[o,r,g,l,i]);return{isRequired:!!t,isInvalid:!!l,isReadOnly:!!i,isDisabled:!!r,isFocused:!!g,onFocus:()=>v(!0),onBlur:()=>v(!1),hasFeedbackText:x,setHasFeedbackText:f,hasHelpText:p,setHasHelpText:j,id:d,labelId:c,feedbackId:u,helpTextId:h,htmlProps:o,getHelpTextProps:b,getErrorMessageProps:S,getRootProps:C,getLabelProps:w,getRequiredIndicatorProps:(0,a.useCallback)((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[])}}((0,h.Lr)(e)),s=(0,m.cx)("chakra-form-control",e.className);return(0,l.jsx)(E,{value:o,children:(0,l.jsx)(P,{value:t,children:(0,l.jsx)(d.m.div,{...r({},n),className:s,__css:t.container})})})}).displayName="FormControl",(0,s.G)(function(e,n){let t=q(),r=R(),i=(0,m.cx)("chakra-form__helper-text",e.className);return(0,l.jsx)(d.m.div,{...null==t?void 0:t.getHelpTextProps(e,n),__css:r.helperText,className:i})}).displayName="FormHelperText";var G=["h","minH","height","minHeight"],O=(0,s.G)((e,n)=>{let t=(0,u.mq)("Textarea",e),{className:r,rows:i,...o}=(0,h.Lr)(e),a=function(e){let{isDisabled:n,isInvalid:t,isReadOnly:l,isRequired:r,...i}=function(e){var n,t,l;let r=q(),{id:i,disabled:o,readOnly:a,required:s,isRequired:d,isInvalid:c,isReadOnly:u,isDisabled:h,onFocus:x,onBlur:f,...p}=e,j=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==r?void 0:r.hasFeedbackText)&&(null==r?void 0:r.isInvalid)&&j.push(r.feedbackId),(null==r?void 0:r.hasHelpText)&&j.push(r.helpTextId),{...p,"aria-describedby":j.join(" ")||void 0,id:null!=i?i:null==r?void 0:r.id,isDisabled:null!=(n=null!=o?o:h)?n:null==r?void 0:r.isDisabled,isReadOnly:null!=(t=null!=a?a:u)?t:null==r?void 0:r.isReadOnly,isRequired:null!=(l=null!=s?s:d)?l:null==r?void 0:r.isRequired,isInvalid:null!=c?c:null==r?void 0:r.isInvalid,onFocus:(0,m.v0)(null==r?void 0:r.onFocus,x),onBlur:(0,m.v0)(null==r?void 0:r.onBlur,f)}}(e);return{...i,disabled:n,readOnly:l,required:r,"aria-invalid":(0,m.Qm)(t),"aria-required":(0,m.Qm)(r),"aria-readonly":(0,m.Qm)(l)}}(o),s=i?function(e,n=[]){let t=Object.assign({},e);for(let e of n)e in t&&delete t[e];return t}(t,G):t;return(0,l.jsx)(d.m.textarea,{ref:n,rows:i,...a,className:(0,m.cx)("chakra-textarea",r),__css:s})});O.displayName="Textarea";var A=e=>{let[n,t]=(0,a.useState)(""),[r,i]=(0,B.FV)(D),[o,s]=(0,B.FV)(F),d=e=>e+1,u=e=>{t(e.target.value)},h=()=>{n&&(s(d),i([{text:n,id:o,mode:e.whichMode},...r]),t(""))};return e.isTheMode?(0,l.jsxs)(C,{borderRadius:"xl",w:"fit-content",h:"fit-content",m:5,padding:"2",children:[(0,l.jsx)(c,{flexDir:"column"}),(0,l.jsx)(c,{flexDir:"column",alignItems:"center",children:(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),h()},children:[(0,l.jsx)(O,{bgColor:"gray.200",borderRadius:"xl",w:"min",h:"20",marginBottom:"2",isRequired:!0,onChange:e=>u(e)}),(0,l.jsx)("br",{}),(0,l.jsx)(w,{type:"submit",w:"fit-content",bgColor:"gray.200",borderRadius:"xl",onSubmit:h,children:"Submit"})]})})]}):(0,l.jsx)("div",{})};let H=async e=>{let n=JSON.stringify(e.opinions),t={path:"",filename:""};try{let l=await fetch(e.targetURL,{method:"POST",headers:{"Content-Type":"application/json"},body:n});if(!l.ok)throw Error("Network response was not ok");let r=await l.json();t={path:r.path,filename:r.filename},console.log("Success:",t)}catch(e){console.error("Error:",e)}return t};var z=()=>{var e,n,t,s,d,u;let h=function(e){let{theme:n}=(0,o.uP)(),t=(0,r.OX)();return(0,a.useMemo)(()=>(0,i.Cj)(n.direction,{...t}),[void 0,n.direction,t])}(),[m,f]=(0,a.useState)(0),[p,j]=(0,a.useState)(""),[g,b]=(0,B.FV)(D);return(0,l.jsxs)(c,{bgColor:"blackAlpha.100",flexDir:"column",w:"100%",h:"100%",overflow:"hidden",children:[(0,l.jsxs)(c,{textAlign:"center",w:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,l.jsx)(x,{size:"lg",textAlign:"center",fontStyle:"normal",fontWeight:"medium",m:"5",children:"Schemode: The virtual chair work"}),(0,l.jsx)(c,{flexDir:"row",children:(0,l.jsx)(w,{width:"30%",onClick:async()=>{j((await H({targetURL:"http://localhost:9000/api/v1/exportCBTSession",opinions:g})).path)},w:"20%",children:"Export Session Log"})}),p?(0,l.jsx)("a",{href:p,download:!0,children:"Download"}):(0,l.jsx)(v.$,{})]}),(0,l.jsx)(T,{mode:m}),(0,l.jsxs)(c,{flexDir:"row",alignItems:"stretch",children:[(0,l.jsxs)(C,{bgColor:"green.200",w:"30%",ml:"5",mr:"5",h:"65vh",borderRadius:"3xl",overflow:"auto",children:[(0,l.jsx)(x,{fontSize:"2xl",textAlign:"center",fontStyle:"normal",fontWeight:"medium",m:"4",children:"Healthy Adult Mode"}),(0,l.jsxs)(c,{flexDir:"row",m:"5",children:[(0,l.jsx)(k,{children:"Hi, I'm healthy adult mode!"}),(0,l.jsx)(N,{isTheMode:0==m})]}),(0,l.jsx)(I,{whichMode:0}),(0,l.jsx)(A,{whichMode:m,isTheMode:0==m})]}),(0,l.jsxs)(C,{bgColor:"yellow.100",w:"30%",ml:"5",mr:"5",h:"65vh",borderRadius:"3xl",children:[(0,l.jsx)(x,{fontSize:"2xl",textAlign:"center",fontStyle:"normal",fontWeight:"medium",m:"4",children:"Vulnerable Child Mode"}),(0,l.jsxs)(c,{flexDir:"row",m:"5",children:[(0,l.jsx)(k,{children:"I'm vulnerable child mode"}),(0,l.jsx)(N,{isTheMode:1==m})]}),(0,l.jsx)(I,{whichMode:1}),(0,l.jsx)(A,{whichMode:m,isTheMode:1==m})]}),(0,l.jsxs)(C,{bgColor:"red.100",w:"30%",ml:"5",mr:"5",h:"65vh",borderRadius:"3xl",overflow:"auto",scrollBehavior:"smooth",children:[(0,l.jsx)(x,{fontSize:"2xl",textAlign:"center",fontStyle:"normal",fontWeight:"medium",m:"4",children:"Dysfunctional Parent Mode"}),(0,l.jsxs)(c,{flexDir:"row",m:"5",children:[(0,l.jsx)(k,{children:"I'm dysfunctional Parent mode"}),(0,l.jsx)(N,{isTheMode:2==m})]}),(0,l.jsx)(I,{whichMode:2}),(0,l.jsx)(A,{whichMode:m,isTheMode:2==m})]})]}),(0,l.jsx)(c,{flexDir:"column",align:"center",w:"100vw",children:(0,l.jsx)(w,{m:"10",fontSize:"3xl",bgColor:"blue.200",w:"md",borderRadius:"2xl",onClick:()=>{var e;h({position:"bottom-left",render:()=>(0,l.jsx)(C,{color:"white",p:3,bg:"blue.300",borderRadius:"2xl",children:"Mode changed!!"}),title:"",description:"Changed to next mode.",status:"success",duration:4e3,isClosable:!0}),f((console.log(e=m),e>=2)?e=0:e+=1)},children:"Switch!!"})})]})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);