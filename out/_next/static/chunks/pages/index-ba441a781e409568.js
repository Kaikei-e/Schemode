(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9861)}])},9861:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var r=t(5893),l=t(532),i=t(2321),o=t(3058),a=t(7294),s=t(6554),d=t(6914),c=(0,s.G)(function(e,n){let{direction:t,align:l,justify:i,wrap:o,basis:a,grow:s,shrink:c,...u}=e;return(0,r.jsx)(d.m.div,{ref:n,__css:{display:"flex",flexDirection:t,alignItems:l,justifyContent:i,flexWrap:o,flexBasis:a,flexGrow:s,flexShrink:c},...u})});c.displayName="Flex";var u=t(7030),h=t(3179),m=t(5432),x=(0,s.G)(function(e,n){let t=(0,u.mq)("Heading",e),{className:l,...i}=(0,h.Lr)(e);return(0,r.jsx)(d.m.h2,{ref:n,className:(0,m.cx)("chakra-heading",e.className),...i,__css:t})});x.displayName="Heading";var f=t(5227),[p,j]=(0,f.k)({strict:!1,name:"ButtonGroupContext"});function g(e){let{children:n,className:t,...l}=e,i=(0,a.isValidElement)(n)?(0,a.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,o=(0,m.cx)("chakra-button__icon",t);return(0,r.jsx)(d.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...l,className:o,children:i})}g.displayName="ButtonIcon";var v=t(1136);function b(e){let{label:n,placement:t,spacing:l="0.5rem",children:i=(0,r.jsx)(v.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:s,...c}=e,u=(0,m.cx)("chakra-button__spinner",o),h="start"===t?"marginEnd":"marginStart",x=(0,a.useMemo)(()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[h]:n?l:0,fontSize:"1em",lineHeight:"normal",...s}),[s,n,h,l]);return(0,r.jsx)(d.m.div,{className:u,...c,__css:x,children:i})}function y(...e){return n=>{e.forEach(e=>{!function(e,n){if(null!=e){if("function"==typeof e){e(n);return}try{e.current=n}catch(t){throw Error(`Cannot assign value '${n}' to ref '${e}'`)}}}(e,n)})}}b.displayName="ButtonSpinner";var w=(0,s.G)((e,n)=>{let t=j(),l=(0,u.mq)("Button",{...t,...e}),{isDisabled:i=null==t?void 0:t.isDisabled,isLoading:o,isActive:s,children:c,leftIcon:x,rightIcon:f,loadingText:p,iconSpacing:g="0.5rem",type:v,spinner:w,spinnerPlacement:C="start",className:_,as:k,...N}=(0,h.Lr)(e),M=(0,a.useMemo)(()=>{let e={...null==l?void 0:l._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...l,...!!t&&{_focus:e}}},[l,t]),{ref:T,type:B}=function(e){let[n,t]=(0,a.useState)(!e);return{ref:(0,a.useCallback)(e=>{e&&t("BUTTON"===e.tagName)},[]),type:n?"button":void 0}}(k),F={rightIcon:f,leftIcon:x,iconSpacing:g,children:c};return(0,r.jsxs)(d.m.button,{ref:function(...e){return(0,a.useMemo)(()=>y(...e),e)}(n,T),as:k,type:null!=v?v:B,"data-active":(0,m.PB)(s),"data-loading":(0,m.PB)(o),__css:M,className:(0,m.cx)("chakra-button",_),...N,disabled:i||o,children:[o&&"start"===C&&(0,r.jsx)(b,{className:"chakra-button__spinner--start",label:p,placement:"start",spacing:g,children:w}),o?p||(0,r.jsx)(d.m.span,{opacity:0,children:(0,r.jsx)(S,{...F})}):(0,r.jsx)(S,{...F}),o&&"end"===C&&(0,r.jsx)(b,{className:"chakra-button__spinner--end",label:p,placement:"end",spacing:g,children:w})]})});function S(e){let{leftIcon:n,rightIcon:t,children:l,iconSpacing:i}=e;return(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsx)(g,{marginEnd:i,children:n}),l,t&&(0,r.jsx)(g,{marginStart:i,children:t})]})}w.displayName="Button";var C=(0,d.m)("div");C.displayName="Box";var _=(0,s.G)(function(e,n){let{size:t,centerContent:l=!0,...i}=e;return(0,r.jsx)(C,{ref:n,boxSize:t,__css:{...l?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});_.displayName="Square",(0,s.G)(function(e,n){let{size:t,...l}=e;return(0,r.jsx)(_,{size:t,ref:n,borderRadius:"9999px",...l})}).displayName="Circle";var k=(0,s.G)(function(e,n){let t=(0,u.mq)("Text",e),{className:l,align:i,decoration:o,casing:a,...s}=(0,h.Lr)(e),c=function(e){let n=Object.assign({},e);for(let e in n)void 0===n[e]&&delete n[e];return n}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,r.jsx)(d.m.p,{ref:n,className:(0,m.cx)("chakra-text",e.className),...c,...s,__css:t})});k.displayName="Text";var N=e=>e.isTheMode?(0,r.jsx)(v.$,{margin:2,thickness:"4px",speed:"2.5s",emptyColor:"gray.200",color:"blue.500",size:"md"}):(0,r.jsx)("div",{});let M=["Healthy Adult Mode","Vulnerable Child Mode","Dysfunctional Parent Mode"];var T=e=>(0,r.jsxs)(x,{fontSize:"x-large",textAlign:"center",fontStyle:"normal",fontWeight:"medium",m:"5",children:["Now, you're :"," ",M[e.mode]]}),B=t(4480);let F=(0,B.cn)({key:"opinionState",default:[]}),D=(0,B.cn)({key:"count",default:0});var I=e=>{let[n,t]=(0,B.FV)(F);return(0,r.jsx)(C,{borderRadius:"xl",w:"fit-content",h:"fit-content",m:5,padding:"2",children:(0,r.jsx)("ul",{children:(0,r.jsx)(c,{flexDir:"column-reverse",children:n.map(n=>{if(n.mode===e.whichMode)return(0,r.jsx)("li",{children:n.text},n.id)})})})})},[P,R]=(0,f.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[E,q]=(0,f.k)({strict:!1,name:"FormControlContext"});(0,s.G)(function(e,n){let t=(0,u.jC)("Form",e),{getRootProps:l,htmlProps:i,...o}=function(e){let{id:n,isRequired:t,isInvalid:r,isDisabled:l,isReadOnly:i,...o}=e,s=(0,a.useId)(),d=n||`field-${s}`,c=`${d}-label`,u=`${d}-feedback`,h=`${d}-helptext`,[x,f]=(0,a.useState)(!1),[p,j]=(0,a.useState)(!1),[g,v]=(0,a.useState)(!1),b=(0,a.useCallback)((e={},n=null)=>({id:h,...e,ref:y(n,e=>{e&&j(!0)})}),[h]),w=(0,a.useCallback)((e={},n=null)=>({...e,ref:n,"data-focus":(0,m.PB)(g),"data-disabled":(0,m.PB)(l),"data-invalid":(0,m.PB)(r),"data-readonly":(0,m.PB)(i),id:void 0!==e.id?e.id:c,htmlFor:void 0!==e.htmlFor?e.htmlFor:d}),[d,l,g,r,i,c]),S=(0,a.useCallback)((e={},n=null)=>({id:u,...e,ref:y(n,e=>{e&&f(!0)}),"aria-live":"polite"}),[u]),C=(0,a.useCallback)((e={},n=null)=>({...e,...o,ref:n,role:"group","data-focus":(0,m.PB)(g),"data-disabled":(0,m.PB)(l),"data-invalid":(0,m.PB)(r),"data-readonly":(0,m.PB)(i)}),[o,l,g,r,i]);return{isRequired:!!t,isInvalid:!!r,isReadOnly:!!i,isDisabled:!!l,isFocused:!!g,onFocus:()=>v(!0),onBlur:()=>v(!1),hasFeedbackText:x,setHasFeedbackText:f,hasHelpText:p,setHasHelpText:j,id:d,labelId:c,feedbackId:u,helpTextId:h,htmlProps:o,getHelpTextProps:b,getErrorMessageProps:S,getRootProps:C,getLabelProps:w,getRequiredIndicatorProps:(0,a.useCallback)((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[])}}((0,h.Lr)(e)),s=(0,m.cx)("chakra-form-control",e.className);return(0,r.jsx)(E,{value:o,children:(0,r.jsx)(P,{value:t,children:(0,r.jsx)(d.m.div,{...l({},n),className:s,__css:t.container})})})}).displayName="FormControl",(0,s.G)(function(e,n){let t=q(),l=R(),i=(0,m.cx)("chakra-form__helper-text",e.className);return(0,r.jsx)(d.m.div,{...null==t?void 0:t.getHelpTextProps(e,n),__css:l.helperText,className:i})}).displayName="FormHelperText";var G=["h","minH","height","minHeight"],O=(0,s.G)((e,n)=>{let t=(0,u.mq)("Textarea",e),{className:l,rows:i,...o}=(0,h.Lr)(e),a=function(e){let{isDisabled:n,isInvalid:t,isReadOnly:r,isRequired:l,...i}=function(e){var n,t,r;let l=q(),{id:i,disabled:o,readOnly:a,required:s,isRequired:d,isInvalid:c,isReadOnly:u,isDisabled:h,onFocus:x,onBlur:f,...p}=e,j=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==l?void 0:l.hasFeedbackText)&&(null==l?void 0:l.isInvalid)&&j.push(l.feedbackId),(null==l?void 0:l.hasHelpText)&&j.push(l.helpTextId),{...p,"aria-describedby":j.join(" ")||void 0,id:null!=i?i:null==l?void 0:l.id,isDisabled:null!=(n=null!=o?o:h)?n:null==l?void 0:l.isDisabled,isReadOnly:null!=(t=null!=a?a:u)?t:null==l?void 0:l.isReadOnly,isRequired:null!=(r=null!=s?s:d)?r:null==l?void 0:l.isRequired,isInvalid:null!=c?c:null==l?void 0:l.isInvalid,onFocus:(0,m.v0)(null==l?void 0:l.onFocus,x),onBlur:(0,m.v0)(null==l?void 0:l.onBlur,f)}}(e);return{...i,disabled:n,readOnly:r,required:l,"aria-invalid":(0,m.Qm)(t),"aria-required":(0,m.Qm)(l),"aria-readonly":(0,m.Qm)(r)}}(o),s=i?function(e,n=[]){let t=Object.assign({},e);for(let e of n)e in t&&delete t[e];return t}(t,G):t;return(0,r.jsx)(d.m.textarea,{ref:n,rows:i,...a,className:(0,m.cx)("chakra-textarea",l),__css:s})});O.displayName="Textarea";var A=e=>{let[n,t]=(0,a.useState)(""),[l,i]=(0,B.FV)(F),[o,s]=(0,B.FV)(D),d=e=>e+1,u=e=>{t(e.target.value)},h=()=>{n&&(s(d),i([{text:n,id:o,mode:e.whichMode},...l]),t(""))};return e.isTheMode?(0,r.jsxs)(C,{borderRadius:"xl",w:"fit-content",h:"fit-content",m:5,padding:"2",children:[(0,r.jsx)(c,{flexDir:"column"}),(0,r.jsx)(c,{flexDir:"column",alignItems:"center",children:(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault(),h()},children:[(0,r.jsx)(O,{bgColor:"gray.200",borderRadius:"xl",w:"min",h:"20",marginBottom:"2",isRequired:!0,onChange:e=>u(e)}),(0,r.jsx)("br",{}),(0,r.jsx)(w,{type:"submit",w:"fit-content",bgColor:"gray.200",borderRadius:"xl",onSubmit:h,children:"Submit"})]})})]}):(0,r.jsx)("div",{})};let H=async e=>{let n=JSON.stringify(e.opinions),t={path:"",filename:""};try{let r=await fetch(e.targetURL,{method:"POST",headers:{"Content-Type":"application/json"},body:n});if(!r.ok)throw Error("Network response was not ok");let l=await r.json();t={path:l.path,filename:l.filename},console.log("Success:",t)}catch(e){console.error("Error:",e)}return t};var z=()=>{var e,n,t,s,d,u;let h=function(e){let{theme:n}=(0,o.uP)(),t=(0,l.OX)();return(0,a.useMemo)(()=>(0,i.Cj)(n.direction,{...t}),[void 0,n.direction,t])}(),[m,f]=(0,a.useState)(0),[p,j]=(0,a.useState)(""),[g,v]=(0,B.FV)(F);return(0,r.jsxs)(c,{bgColor:"blackAlpha.100",flexDir:"column",w:"100%",h:"100%",overflow:"hidden",children:[(0,r.jsxs)(c,{textAlign:"center",w:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[(0,r.jsx)(x,{size:"lg",textAlign:"center",fontStyle:"normal",fontWeight:"medium",m:"5",children:"Schemode: The virtual chair work"}),(0,r.jsx)(c,{flexDir:"row",children:(0,r.jsx)(w,{width:"30%",onClick:async()=>{j((await H({targetURL:"http://localhost:9000/api/v1/exportCBTSession",opinions:g})).path)},w:"20%",children:"Export Session Log"})}),p||(0,r.jsx)("p",{children:"Not yet created"})]}),(0,r.jsx)(T,{mode:m}),(0,r.jsxs)(c,{flexDir:"row",alignItems:"stretch",children:[(0,r.jsxs)(C,{bgColor:"green.200",w:"30%",ml:"5",mr:"5",h:"65vh",borderRadius:"3xl",overflow:"auto",children:[(0,r.jsx)(x,{fontSize:"2xl",textAlign:"center",fontStyle:"normal",fontWeight:"medium",m:"4",children:"Healthy Adult Mode"}),(0,r.jsxs)(c,{flexDir:"row",m:"5",children:[(0,r.jsx)(k,{children:"Hi, I'm healthy adult mode!"}),(0,r.jsx)(N,{isTheMode:0==m})]}),(0,r.jsx)(I,{whichMode:0}),(0,r.jsx)(A,{whichMode:m,isTheMode:0==m})]}),(0,r.jsxs)(C,{bgColor:"yellow.100",w:"30%",ml:"5",mr:"5",h:"65vh",borderRadius:"3xl",children:[(0,r.jsx)(x,{fontSize:"2xl",textAlign:"center",fontStyle:"normal",fontWeight:"medium",m:"4",children:"Vulnerable Child Mode"}),(0,r.jsxs)(c,{flexDir:"row",m:"5",children:[(0,r.jsx)(k,{children:"I'm vulnerable child mode"}),(0,r.jsx)(N,{isTheMode:1==m})]}),(0,r.jsx)(I,{whichMode:1}),(0,r.jsx)(A,{whichMode:m,isTheMode:1==m})]}),(0,r.jsxs)(C,{bgColor:"red.100",w:"30%",ml:"5",mr:"5",h:"65vh",borderRadius:"3xl",overflow:"auto",scrollBehavior:"smooth",children:[(0,r.jsx)(x,{fontSize:"2xl",textAlign:"center",fontStyle:"normal",fontWeight:"medium",m:"4",children:"Dysfunctional Parent Mode"}),(0,r.jsxs)(c,{flexDir:"row",m:"5",children:[(0,r.jsx)(k,{children:"I'm dysfunctional Parent mode"}),(0,r.jsx)(N,{isTheMode:2==m})]}),(0,r.jsx)(I,{whichMode:2}),(0,r.jsx)(A,{whichMode:m,isTheMode:2==m})]})]}),(0,r.jsx)(c,{flexDir:"column",align:"center",w:"100vw",children:(0,r.jsx)(w,{m:"10",fontSize:"3xl",bgColor:"blue.200",w:"md",borderRadius:"2xl",onClick:()=>{var e;h({position:"bottom-left",render:()=>(0,r.jsx)(C,{color:"white",p:3,bg:"blue.300",borderRadius:"2xl",children:"Mode changed!!"}),title:"",description:"Changed to next mode.",status:"success",duration:4e3,isClosable:!0}),f((e=m)>=2?e=0:e+=1)},children:"Switch!!"})})]})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);