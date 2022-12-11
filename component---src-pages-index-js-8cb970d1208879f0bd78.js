"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[678],{3723:function(e,t,i){i.d(t,{G:function(){return b},L:function(){return L},M:function(){return C},P:function(){return D},_:function(){return M},a:function(){return o},b:function(){return c},c:function(){return l},g:function(){return g},h:function(){return s}});var a=i(7294),r=(i(2369),i(5697)),n=i.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},o.apply(this,arguments)}function M(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t.indexOf(i=n[a])>=0||(r[i]=e[i]);return r}const s=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const l=e=>{var t;return(e=>{var t,i;return Boolean(null==e||null==(t=e.images)||null==(i=t.fallback)?void 0:i.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function c(e,t,i,a,r){return void 0===r&&(r={}),o({},i,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function g(e,t,i,a,r,n,M,s){const l={};n&&(l.backgroundColor=n,"fixed"===i?(l.width=a,l.height=r,l.backgroundColor=n,l.position="relative"):("constrained"===i||"fullWidth"===i)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),M&&(l.objectFit=M),s&&(l.objectPosition=s);const c=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return c}const u=["children"],I=function(e){let{layout:t,width:i,height:r}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:i,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+i+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},L=function(e){let{children:t}=e,i=M(e,u);return a.createElement(a.Fragment,null,a.createElement(I,o({},i)),t,null)},N=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],A=function(e){let{src:t,srcSet:i,loading:r,alt:n="",shouldLoad:s}=e,l=M(e,N);return a.createElement("img",o({},l,{decoding:"async",loading:r,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?i:void 0,"data-srcset":s?void 0:i,alt:n}))},d=function(e){let{fallback:t,sources:i=[],shouldLoad:r=!0}=e,n=M(e,y);const s=n.sizes||(null==t?void 0:t.sizes),l=a.createElement(A,o({},n,t,{sizes:s,shouldLoad:r}));return i.length?a.createElement("picture",null,i.map((e=>{let{media:t,srcSet:i,type:n}=e;return a.createElement("source",{key:t+"-"+n+"-"+i,type:n,media:t,srcSet:r?i:void 0,"data-srcset":r?void 0:i,sizes:s})})),l):l};var j;A.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},d.displayName="Picture",d.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const m=["fallback"],D=function(e){let{fallback:t}=e,i=M(e,m);return t?a.createElement(d,o({},i,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},i))};D.displayName="Placeholder",D.propTypes={fallback:r.string,sources:null==(j=d.propTypes)?void 0:j.sources,alt:function(e,t,i){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+i+"`. Validation failed."):null}};const C=function(e){return a.createElement(a.Fragment,null,a.createElement(d,o({},e)),a.createElement("noscript",null,a.createElement(d,o({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=d.propTypes;const T=function(e,t,i){for(var a=arguments.length,r=new Array(a>3?a-3:0),o=3;o<a;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?n().string.apply(n(),[e,t,i].concat(r)):new Error('The "alt" prop is required in '+i+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},p={image:n().object.isRequired,alt:T},E=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],z=new Set;let x,h;const w=function(e){let{as:t="div",image:r,style:n,backgroundColor:l,className:c,class:g,onStartLoad:u,onLoad:I,onError:L}=e,N=M(e,E);const{width:y,height:A,layout:d}=r,j=function(e,t,i){const a={};let r="gatsby-image-wrapper";return"fixed"===i?(a.width=e,a.height=t):"constrained"===i&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:a}}(y,A,d),{style:m,className:D}=j,C=M(j,S),T=(0,a.useRef)(),p=(0,a.useMemo)((()=>JSON.stringify(r.images)),[r.images]);g&&(c=g);const w=function(e,t,i){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+i/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+i+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(d,y,A);return(0,a.useEffect)((()=>{x||(x=Promise.all([i.e(774),i.e(223)]).then(i.bind(i,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:i}=e;return h=t,{renderImageToString:t,swapPlaceholderImage:i}})));const e=T.current.querySelector("[data-gatsby-image-ssr]");if(e&&s())return e.complete?(null==u||u({wasCached:!0}),null==I||I({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==I||I({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(p);if(h&&z.has(p))return;let t,a;return x.then((e=>{let{renderImageToString:i,swapPlaceholderImage:M}=e;T.current&&(T.current.innerHTML=i(o({isLoading:!0,isLoaded:z.has(p),image:r},N)),z.has(p)||(t=requestAnimationFrame((()=>{T.current&&(a=M(T.current,p,z,n,u,I,L))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[r]),(0,a.useLayoutEffect)((()=>{z.has(p)&&h&&(T.current.innerHTML=h(o({isLoading:z.has(p),isLoaded:z.has(p),image:r},N)),null==u||u({wasCached:!0}),null==I||I({wasCached:!0}))}),[r]),(0,a.createElement)(t,o({},C,{style:o({},m,n,{backgroundColor:l}),className:D+(c?" "+c:""),ref:T,dangerouslySetInnerHTML:{__html:w},suppressHydrationWarning:!0}))},b=(0,a.memo)((function(e){return e.image?(0,a.createElement)(w,e):null}));b.propTypes=p,b.displayName="GatsbyImage";const k=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],f=function(e,t){for(var i=arguments.length,a=new Array(i>2?i-2:0),r=2;r<i;r++)a[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),v={src:n().string.isRequired,alt:T,width:f,height:f,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},Q=(Y=b,function(e){let{src:t,__imageData:i,__error:r}=e,n=M(e,k);return r&&console.warn(r),i?a.createElement(Y,o({image:i},n)):(console.warn("Image not loaded",t),null)});var Y;Q.displayName="StaticImage",Q.propTypes=v},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,i=!1,a=!1;for(let r=0;r<e.length;r++){const n=e[r];t&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,a=i,i=!0,r++):i&&a&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(e=e.slice(0,r-1)+"-"+e.slice(r-1),a=i,i=!1,t=!0):(t=n.toLowerCase()===n&&n.toUpperCase()!==n,a=i,i=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),i=e,t.pascalCase?i.charAt(0).toUpperCase()+i.slice(1):i;var i};e.exports=t,e.exports.default=t},3332:function(e,t,i){i.r(t),i.d(t,{Head:function(){return j},default:function(){return m}});var a=i(7294),r=i(2943);const n=[{label:"Home",href:"#home"},{label:"About Me",href:"#about"},{label:"Featured Projects",href:"#featured-projects"}];function o(){const{0:e,1:t}=(0,a.useState)(!1),i=()=>t(!1);return a.createElement(a.Fragment,null,a.createElement("input",{id:"menu-toggle",className:"hidden","aria-hidden":"true",type:"checkbox",checked:e,onChange:()=>t(!e)}),a.createElement("div",{id:"nav-underlay","aria-hidden":"true",onClick:i}),a.createElement("label",{id:"menu-icon",htmlFor:"menu-toggle"},a.createElement("div",{id:"menu-icon-container"},a.createElement("div",{className:"menu-icon-div"}),a.createElement("div",{className:"menu-icon-div"}),a.createElement("div",{className:"menu-icon-div"}))),a.createElement("nav",null,a.createElement("div",{id:"nav-padding"},n.map((e=>{let{label:t,href:r}=e;return a.createElement("a",{href:r,onClick:i,key:t},a.createElement("span",null,t))})))))}function M(e){const{className:t="",children:i,natural:r,...n}=e;return a.createElement("section",Object.assign({className:"screen-section column-center "+(r?"screen-section-natural":"")+" "+t},n),i)}function s(e){const{to:t,className:i="",children:r,...n}=e;return a.createElement("a",Object.assign({className:"scroll-banner "+i,href:t},n),a.createElement("div",{className:"scroll-banner-content"},r))}const l=a.lazy((()=>Promise.all([i.e(774),i.e(737),i.e(812)]).then(i.bind(i,1812))));function c(){return a.createElement(M,{id:"home",natural:!0,className:"column-center column-align"},a.createElement(g,null,a.createElement(a.Suspense,{fallback:null},a.createElement(l,{fallback:null}))),a.createElement(s,{to:"#about"},"▼"))}function g(e){let{children:t}=e;return a.createElement("div",{className:"splash-overlay"},a.createElement("div",{className:"splash-overlay-content"},a.createElement("p",{className:"splash-mini-intro"},"Developed and "),a.createElement("h1",{className:"splash-mini-title"},"Designed by Marvin"),a.createElement("p",{className:"splash-mini-subtitle"},"A Full Stack Developer with some UI/UX knowledge"),a.createElement("p",{className:"splash-mini-text"})),a.createElement("div",{className:"splash-overlay-visual"},t))}function u(){return a.createElement(M,{id:"about",className:"column-center about-container"},a.createElement("h1",{className:"about-heading"},"About Me"),a.createElement("div",{className:"about-content"},a.createElement("img",{className:"about-profile-picture",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjY4NiIgaGVpZ2h0PSI2ODYiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY4NiA2ODYiCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxkZWZzPgoJCTxmaWx0ZXIgaWQ9ImZpbHRlcjY3NDM5IiB4PSItLjA0OSIgeT0iLS4wNzkiIHdpZHRoPSIxLjEiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CgkJCTxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEuMDA5NjQyNSIvPgoJCTwvZmlsdGVyPgoJCTxmaWx0ZXIgaWQ9ImZpbHRlcjcwMDA3IiB4PSItLjA1NCIgeT0iLS4wNzkiIHdpZHRoPSIxLjEiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CgkJCTxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjAuOTEzMzgxMDgiLz4KCQk8L2ZpbHRlcj4KCTwvZGVmcz4KCTxnPgoJCTxwYXRoIGQ9Im0yMzggNDI2czQ0LTMuOSA4NS0xLjJjNTUgMy42IDgwIDE1IDgzIDE4IDYuMiA1LjUgMzAgODAgMjYgODktMy44IDkuNC0xMyAzMy00MSAzNi0yOSAyLjgtMTUyLTkyLTE1OS0xMDUtNi4zLTEzIDYtMzYgNi0zNnoiCgkJCSAgZmlsbD0iI2NjZDZlNSIvPgoJCTxwYXRoIGQ9Im0wIDY2OHYtMThsNS00LjljMTItMTIgMjUtMjEgNDAtMzEgOC4xLTQuOSAyNC0xMyAzMy0xN2w2LjEtMi42IDMuOC00LjJjNy41LTguMiA5LjQtMTEgOS45LTE3IDAuNDUtNC45IDIuMi04LjYgNS42LTEyIDQuOS00LjggOS45LTYuNSAyMS03LjFsNi41LTAuMzggMTItNS45YzEyLTUuOCAxMi01LjkgMTMtNy45IDEuOC0zLjQgNy4zLTEyIDExLTE2IDkuNi0xMiAyMy0yMiAzNS0yN2wyLjQtMC45OCAyLjgtNi41YzguMi0xOSAyNC01MiAyOS02MWwyLTMuNSAwLjU1IDEuM2MwLjM1IDAuODQgMC42MiA0LjcgMC43NCAxMWwwLjIgOS40IDMuNCA0LjZjNS42IDcuNCAxNSAxNyAyNCAyNSA2LjMgNS4zIDE0IDExIDMxIDIzIDguMiA1LjcgMTkgMTMgMjMgMTYgMTEgNy40IDEzIDguOCA0MiAyM2wyMyAxMSAxLjMtMS40YzEuOS0yLjEgMTctMjMgMjEtMjkgOS4xLTEzIDkuOC0xNSA5LTIyLTAuODktNy43LTUuMi0yMy0xMC0zNi0xLjgtNC42LTIuNi05LjItMi42LTE1IDAtNy4xIDAuNy02LjUgNy44IDYuMiA4LjIgMTUgMTUgMzAgMTggMzhsMC45NCAzLjIgOS4zIDIuM2M1MiAxMyA5NCAzMiAxMTQgNTIgNiA1LjkgNy41IDguMSAxMSAxNiAyLjIgNSAzLjggOC4xIDUuMyAxMCA3LjQgOS4zIDE5IDI1IDIzIDMzIDQuMyA2LjkgNS41IDkuNiAxMiAyNyA3LjggMjIgMTMgMzggMTYgNDUgMS4xIDMgMiA1LjYgMiA1LjYgMCAwLjA4LTE0MSAwLjE0LTMxMiAwLjE0aC0zMTJ6IgoJCQkgIGZpbGw9IiNmMmY3ZmEiIHN0cm9rZS13aWR0aD0iLjQ0Ii8+CgkJPHBhdGggZD0ibTIwNCA0OTRzOTQgOTEgMTA0IDk2IDQ5IDU0IDUyIDgwYzAgMC0yNS03MS04My04NHoiIGZpbGw9IiNkNmRiZWUiLz4KCQk8cGF0aCBkPSJtMzY0IDY2OSA2LjEgMTcgNzktMC4xNi0xLjMtNjlzLTkuOC0xNy0xNi0zNGMwIDAtMC43Ny0yOS0zNi0yOSAwIDAgMC4wNDkgNjUtMzIgMTE1eiIgZmlsbD0iI2Q2ZGJlZSIvPgoJCTxwYXRoIGQ9Im00NTkgNjI3cy0xNi01Ny0yMy02NWMwIDAgNi45LTMxIDQuOS00MSAwIDAgMy4zIDMxIDAgNDMgMCAwIDE5IDQ1IDE4IDY0eiIgZmlsbD0iI2UzZTlmMiIvPgoJPC9nPgoJPHBhdGggZD0ibTM5NiA1NTNzMS4yIDI1LTIuOSAzOGMtNiAyMC01LjcgMjQtMTEgMzkgMCAwLTMgNC4zIDEwIDE2IDAgMC0wLjU1IDYuOS0wLjc3IDE1LTAuMjIgNy43LTMuMiAxOS0yLjMgMjVsNjgtMC4zM3MtMi44LTI1LTEzLTQwYzAgMC01LjItNS42LTcuNS05LjMgMCAwLTAuNjYtNi4xLTEuNy03LjQgMCAwIDAuNzgtMC4wNTUgMC45NC01LjIgMC4xMS0zLjggMy40LTQ3LTkuNC02MS02LjQtNi42LTE3LTEyLTMwLTExeiIKCQkgIGZpbGw9IiM1ZTYzNzgiLz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJtMzg4IDU1MHM3LjQtMTUgMTQtMjNjMCAwIDQtNzkgMy4zLTg0bC0xNjYtNDlzMC4zOCA1MSAxIDU0YzAuNjMgMi41IDU0IDYyIDE0OCAxMDJ6IgoJCQkJICBmaWxsPSIjYjI4ZTgxIi8+CgkJCTxwYXRoIGQ9Im0yMjEgMzUwcy0yNi05LjktMzItMTctMTItMjEtMTYtMjUtMTUtMTYtMTUtMjUgMC42Ni0yMSAxMS0yNGMwIDAgMi40LTEuMiAxMSA0LjYgMCAwIDcgMy45IDEzIDUuMiAwIDAgNSAyLjcgOSAxNSA0LjEgMTIgMTEgNDMgMTIgNDUgMC42MyAxLjcgNy40IDIxIDcuNCAyMXoiCgkJCQkgIGZpbGw9IiNiMzhjODAiLz4KCQkJPHBhdGggZD0ibTQ1NyAyODFzMTEtMTQgMTMtMjJjMS45LTguMiAwLjMxLTE3LTAuNTUtMTlzLTYuMS03LjQtMTEtMC41NWMtMi41IDMuMy0zLjIgNC45LTMuMiA0LjlzMC43IDM2IDEuNyAzN3oiCgkJCQkgIGZpbGw9IiM5MTY2NWYiLz4KCQkJPHBhdGggZD0ibTI0MSA0MDlzMTkgMjIgMzAgMjhjMTEgNS42IDQ4IDI5IDY2IDMyIDE5IDMuNiAzMyAxLjQgNTMtMTEgMjAtMTIgNTItNTcgNjAtODQgMCAwIDQuMi0xNiA1LTIzIDAuNzctNyA1LjQtNjcgNS4zLTcxdi0xLjhzLTEuMyAxLjQtMy4yIDEuN2MwIDAtMS42LTQyLTEuNy01MC0wLjE2LTcuNCA1LjYtMTM2LTEzNC0xMzEtMTQwIDQuNy0xMzMgMTQ0LTEzMyAxNDRzNDMgMTUzIDUzIDE2NXoiCgkJCQkgIGZpbGw9IiNiODkzODkiLz4KCQk8L2c+Cgk8L2c+Cgk8ZyBmaWxsPSIjMTYxMjEzIiBzdHJva2Utd2lkdGg9IjYiPgoJCTxwYXRoIGQ9Im0xNTkgMjc1cy0yOC05NSAxNy0xMzljNDUtNDUgOTAtODIgMTU5LTcxIDY5IDExIDEzMiA3MCAxMzkgMTY1IDAgMC0wLjQgMS41LTMuMiA0LjYgMCAwIDAuOTQtNS41LTAuNjMtNy4yLTEuNi0xLjctMTI3LTEwNi0yNTQgMjggMCAwLTkuMSA3LjMtMTAgMTItMC41MiAyLjYtNy40IDMuNS05LjUgNy40LTMuNC0xLTUuOS0xLjEtOC40LTMuMi02LTQuOS0zMC0xNC0yOSA0LjR6Ii8+CgkJPHBhdGggZD0ibTIzNiAyMzJzNS44IDEuMyA3LjMgMy4zYzAgMC0wLjYxLTMuMS0xLjItMy42LTAuNTUtMC41IDIuMiAyLjcgMi4yIDMuOSAwIDAtMC4xMS00LjMtMC41LTUuMyAwIDAgMy4yIDQgMi45IDUuMSAwIDAgMS45LTYuNyAxLjUtOS4zbDAuMjEgMi45czAuMTUgMS42IDAuMzUgMS45IDMgMi45IDMuNyAzLjJjMCAwLTIuMS02LjgtMi04IDAgMCAwLjk0IDAuMTEgMS42IDAuNXM0LjUgMS43IDUgMy45YzAgMC0wLjIxLTIuOS0xLTMuOSAwIDAgMi45IDIuMSAzLjEgMyAwIDAgMi43LTQuOCAxLjUtNi43IDAgMCAyLjYgMy41IDUgNC4zIDAgMCA2LjEgMC4xNCA3LjUtMC43NiAwIDAtMy43LTIuNi0zLjktNC4yIDAgMCA2IDQgNy4zIDQuMSAwIDAgMTEgMy4xIDE0IDIuNCAwIDAtNC4xLTMuNi00LjQtNi45IDAgMCA4LjIgMy42IDE2IDIuOCA3LjQtMC43OCA3LjYtMS42IDcuNi0xLjZzLTQuOC0zLjEtNC44LTQuNGMwIDAgMyAzIDEzIDUuMyAxMCAyLjIgMTEgMS44IDExIDEuOHMtNC40LTMuOS03LjctOC4yYy0zZS0zIC00ZS0zIDIgMC4xNSAyIDAuMTVzOS40IDcuMyA5LjUgOC44YzAgMCAwLjE3LTEuMS0wLjUtMS45IDAgMCAxLjUgMS45IDEuNSAyLjUgMCAwIDMuNiAwLjExIDQuOC0wLjQ0bDAuMDU1LTAuOTRzMC43MiAwLjM5IDAuNjYgMC44OWMwIDAtMC4xNy04LjktMy4zLTEzIDAgMCA0LjcgNi45IDUgNy43czcuNiA2IDcuNiA2LTIuNy04LTIuNy0xMGMwIDAgNS4zIDUuOCA2LjQgNi4zIDAgMCAyLjctNC41IDIuNC02LjggMCAwIDkuNyA2LjYgMTAgOC4xIDAgMC0wLjcyLTExLTIuNC0xMyAwIDAgMTMgNi45IDE4IDcuNyAwIDAtNS43LTguNS01LjctMTAgMCAwIDkuMiA2LjggMTEgNy41IDAgMCAxLjYtNS41IDEuNS03LjcgMCAwIDExIDkuNSAxNiAxMSAwIDAtNS45LTcuMi01LjItOC44IDAgMCA1LjUgNC4xIDkuNyA2LjQtMC40MS0xLjYtMC4wMTctMS44LTAuMDE3LTEuOCAzLjYgMi4zIDEzIDUuNyAxMyA1LjdzLTIuMS03LjktMi43LTguNmMwIDAgMTEgNy42IDEyIDkuNyAwIDAgMC44LTggMC4zOS04LjcgMCAwIDExIDEwIDEyIDEybDAuOTItMS4zcy0xLjQtNy44LTEuOS04LjljMCAwIDExIDcuOSAxMiA5LjNsLTIuMiAwLjExczcuNCA5LjYgNy4xIDEyYzAgMCAxLjktMTEgMS41LTEybDEuOCAwLjIyczAuNzItMy4zIDAuNzItNC4yYzAgMCAxMCA3LjYgMTAgOS4yIDAgMC0wLjctMzAtNS41LTM3LTQuOS03LjQtNTEtNzQtMTQwLTczLTg5IDAuNjMtMTI4IDU1LTE0MCA3NyAwIDAgMC45NCAzMiAzLjEgNDNsMzgtMi41cy0wLjktMi4yIDguOC01LjZ6Ii8+Cgk8L2c+Cgk8Zz4KCQk8ZyBmaWxsPSJub25lIiBzdHJva2U9IiNiZTk3OTAiIHN0cm9rZS13aWR0aD0iNiI+CgkJCTxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KC45OCAwIDAgLjk4IDMuNyA0LjEpIgoJCQkJICBkPSJtMzM0IDI0NXM1LjMgNC0xLjMgMzBjMCAwLTUuMSAxMS05LjIgMTYtNC4xIDUuMy0xMyA4LjUtMTcgOS41cy0zOCAzLjktNDIgMy44Yy0zLjctMC4xMS0xOC0xLjctMjEtMi40LTIuNy0wLjc3LTguOS01LjMtMTAtNy40LTEuMy0yLjEtNy43LTI3LTguMS0zMC0wLjMzLTMgMC42Ni0xNCAyLjktMTcgMi4yLTMuMiAyLjItMy4yIDIuMi0zLjJzMTgtNi43IDIyLTcuMWM0LjQtMC4zMyA0OS01LjIgNjUgMC4xMSAxNiA1LjMgMTIgNCAxNiA2LjZ6IgoJCQkJICBmaWx0ZXI9InVybCgjZmlsdGVyNjc0MzkpIi8+CgkJCTxwYXRoIGQ9Im0zNzAgMjQ2Yy0xLjQgNy4xIDUuNCAzMCA4LjEgMzMgMi43IDMuNCA4LjQgOC45IDEyIDExIDMuNSAyIDM0IDEuNSA0MyAwIDkuMS0xLjUgMjItNi43IDI1LTguN3M3LjYtMTQgNy43LTMxYzAuMTEtMTctMi44LTE4LTcuMi0yMS00LjQtMi41LTI2LTQtMzAtMy41cy0zMyAzLjktNDUgOC42Yy0xMiA0LjgtMTEgNy0xMiA4LjQtMSAxLjQtMS43IDMuMy0xLjcgMy4zeiIKCQkJCSAgZmlsdGVyPSJ1cmwoI2ZpbHRlcjcwMDA3KSIvPgoJCTwvZz4KCQk8ZyBmaWxsPSIjMDkwOTA3Ij4KCQkJPHBhdGggZD0ibTE5MSAyNjktNS41LTIgNS44LTUgMjQtMTEgMC4yOCA4LjJzLTE2IDEuOS0yNCAxMHoiLz4KCQkJPHBhdGggZD0ibTIxNCAyNDUgMC42MSAxNHM0LjktMS44IDggNi42YzAgMCAwLjgzIDAuNTUgMi44IDAuNzIgMCAwLTEuNy0xOCA4LTIzIDAgMCAyMy03LjYgNDEtNi45IDE4IDAuNjYgNDAtMi44IDU3IDcuMyAwIDAgMi43IDAuOTQgMi40IDguOHMtMi43IDIxLTIuOCAyMmMtMC4wNzggMS4xIDEuOCAxLjUgMi4zLTAuMzlzNS43LTIxIDYuNC0yNSAzLjEtNSA2LjctNC45YzMuNiAwLjA3OCAxMC0wLjQ3IDEzLTAuMzkgMi43IDAuMDc4IDQuOSAxLjcgNS4zIDRzNi43IDIyIDcuMiAyNCAxLjkgMC4zOSAxLjctMS4xYy0wLjE2LTEuNS01LjEtMjEtNC44LTI0czIuOC05IDEwLTExIDQ3LTE3IDgyLTYuNWMwIDAgNSAzLjQgNS40IDYuOXMxIDEyIDEgMTJsMy0wLjA3OCAwLjk4LTE2IDAuODYtNS44cy05LjgtMy41LTI0LTMuNGMtMTQgMC4wNzgtMTEtMC4zMS0yMC0wLjA3OC04LjQgMC4yMy0zNCAzLTQxIDYuNi03LjEgMy42LTE2IDYuOS0xOCA4LjUtMS42IDEuNi0zLjQgMS4xLTUuNiAxLjEtMi4xIDAtMjMgMS4xLTI0IDEuNi0xLjkgMC41NS0zLjQtMC4xNi00LjgtMC43LTEuNC0wLjU1LTExLTQuNS0xOC01LjMtNi42LTAuNzgtMjktMi4zLTQ3LTAuNzgtMTcgMS42LTMyIDQuNy00MSA2LjQtOSAxLjctMTUgNS0xNSA1eiIvPgoJCQk8cGF0aCBkPSJtNDcyIDIyNi0xLjMgOC4zIDMuNi0wLjk3YzZlLTMgLTMuNyAwLjA2Mi02LjgtMi4zLTcuM3oiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo=",alt:"Profile"}),a.createElement("p",{className:"about-desc"},"I enjoy building interactive responsive websites and tools using various frameworks like React. I currently write most of my web projects with NodeJS alongside React frameworks like Gatsby, React Native, or NextJS but I also have some projects in Python and normal HTML/CSS/JS.",a.createElement("br",null),a.createElement("span",{className:"about-desc-spacer"}),"Although my language of choice is JavaScript, I am also very familiar with C, C++, Java, and Python and constantly look out for new tools, libraries, and frameworks to learn.",a.createElement("br",null),a.createElement("span",{className:"about-desc-spacer"}),"I value turning ideas into websites that are comfortable to interact with, using the right tools for each job, and creating clean, well-documented code.",a.createElement("br",null))),a.createElement(s,{to:"#featured-projects",className:"about-desc-scroll-banner"},"▼"))}var I=i(1883),L=i(3723);function N(e){const{image:t,title:i,description:r,repoLink:n,demoLink:o,backgroundColor:M="#AAAAAA",textColor:s="#191816",className:l="",...c}=e,{0:g,1:u}=(0,a.useState)(!1),{0:I,1:N}=(0,a.useState)(!0),y=()=>u(!g),A=(0,a.useRef)();return(0,a.useEffect)((()=>{N(!1)}),[]),a.createElement("div",Object.assign({className:"repo-card-container "+(I?"repo-card-container-focus-flip-enabled":"")+" "+l+" "+(g?"repo-card-container-force-flip":""),role:"menuitem","aria-label":i,"aria-haspopup":"menu",tabIndex:"0",ref:A,onClick:y,onKeyDown:e=>{"Space"!==e.code&&"Enter"!==e.code||e.target!==A.current&&"Enter"===e.code||(e.preventDefault(),y())}},c),a.createElement("div",{className:"repo-card repo-card-front","aria-hidden":g||I,title:i},a.createElement(L.G,{className:"featured-card-img",alt:i+" Demo Image",image:t})),a.createElement("div",{className:"repo-card column-center repo-card-back","aria-hidden":!g&&!I},a.createElement("h3",{className:"repo-card-title",style:{backgroundColor:M,color:s}},i),a.createElement("p",{className:"repo-card-description"},r),a.createElement("div",{className:"repo-card-links",style:{backgroundColor:M,color:s}},n&&a.createElement("a",{role:"menuitem",href:n,tabIndex:g||I?0:-1,style:{color:s}},"Open in GitHub"),o&&a.createElement("a",{role:"menuitem",href:o,tabIndex:g||I?0:-1,style:{color:s}},"Try Demo"))))}const y=[{title:"Pantry Cabinet",description:"[WIP] A site for displaying what is available in your pantry and how many of each item you have",repoLink:"https://github.com/malee31/the-pantry-cabinet",demoLink:"https://pantry-cabinet.vercel.app/",imageSrc:"repositories/PantryCabinet.png",backgroundColor:"#BA8C63",textColor:"#342918"},{title:"CardinalHours App",description:"An Expo App written in React Native for logging hours into the CardinalBotics CardinalHours server. (Upgrade password: bob)",repoLink:"https://github.com/malee31/ReactNativeCardinalBoticsApp",demoLink:"https://malee31.github.io/ReactNativeCardinalBoticsApp",imageSrc:"repositories/ReactNativeCardinalBoticsApp.png",backgroundColor:"#973337",textColor:"#F5F5F5"},{title:"Asteroids Game",description:"A recreation of Asteroids from 1979! Controls are listed in the footer below so enjoy!",repoLink:"https://github.com/malee31/Processing-Java-Projects/tree/AsteroidsGame",demoLink:"https://malee31.github.io/Processing-Java-Projects/AsteroidsGame",imageSrc:"repositories/AsteroidsGame.png",backgroundColor:"#262626",textColor:"#D6D6D6"},{title:"Starfield",description:"A mesmerizing canvas with a calming sea of stars",repoLink:"https://github.com/malee31/Processing-Java-Projects/tree/Starfield",demoLink:"https://malee31.github.io/Processing-Java-Projects/Starfield",imageSrc:"repositories/Starfield.png",backgroundColor:"#470B33",textColor:"#EBEBEB"},{title:"Slack to Discord Bridge",description:"Creates a Discord archive by forwarding Slack messages and files to a Discord Server of your choosing",repoLink:"https://github.com/malee31/Slack-to-Discord-Bridge",imageSrc:"repositories/SlackToDiscordBridge.png",backgroundColor:"#431F4F",textColor:"#E8E8FD"},{title:"Canvas Helpers",description:"Python CLI tool for automatically creating study groups on Canvas based on student preferences (See other contributors on GitHub)",repoLink:"https://github.com/malee31/CanvasHelpers/tree/better-study-groups",imageSrc:"repositories/CanvasHelpers.png",backgroundColor:"#C55B43",textColor:"#FFFFFF"},{title:"EduConnect",description:"A chatroom created using WebSockets and Google Authentication that allows teachers to answer questions from students in real time!",repoLink:"https://github.com/malee31/EduConnect",demoLink:"https://educonnect-hyphen-hacks.herokuapp.com/chatroom/chatroom.html",imageSrc:"repositories/EduConnect.png",backgroundColor:"#5175E8",textColor:"#FFFFFF"},{title:"Custom Form Maker",description:"Build custom forms that forward data to a spreadsheet using the Google Sheets NodeJS API",repoLink:"https://github.com/malee31/Custom-Form-Maker",demoLink:"https://custom-google-form.herokuapp.com/",imageSrc:"repositories/CustomFormMaker.png",backgroundColor:"#1786F1",textColor:"#FFFFFF"},{title:"Cube Color Picker",description:"A color picker that uses WebGL to allow you to better choose from hues of the same color by presenting it as a lit cube",demoLink:"https://malee31.github.io/CubeColorPicker",imageSrc:"repositories/CubeColorPicker.png",backgroundColor:"#3D93E7",textColor:"#E9EDFA"},{title:"Halloween Discord Bot",description:"A Discord Bot I made for a one-off Halloween Event on a specific Discord Server!",repoLink:"https://github.com/malee31/HalloweenDiscordBot",imageSrc:"repositories/HalloweenBot.png",backgroundColor:"#303135",textColor:"#E2E3E5"},{title:"Data Visualization",description:"A nice animated chart for random data that can be changed and adapted for different data sets",repoLink:"https://github.com/malee31/Processing-Java-Projects/tree/DataVisualization",demoLink:"https://malee31.github.io/Processing-Java-Projects/DataVisualization",imageSrc:"repositories/DataVisualization.png",backgroundColor:"#646464",textColor:"#FFFFFF"}];function A(){const e=(0,I.useStaticQuery)("2069197559");return a.createElement("div",{id:"featured"},a.createElement("h1",null,"Featured Projects"),a.createElement("div",{id:"featured-container",role:"menu"},y.map((t=>{var i;const{imageSrc:r,...n}=t,o=null===(i=e.allFile.edges.find((e=>e.node.relativePath===r)))||void 0===i?void 0:i.node,M=(0,L.c)(o);return a.createElement(N,Object.assign({key:n.title},n,{image:M}))}))))}function d(){return a.createElement("footer",{className:"column-align"},a.createElement("h2",{id:"lower-name"},"Marvin Lee"),a.createElement("div",{id:"socials",className:"row-center"},a.createElement("a",{href:"https://github.com/malee31",className:"logoLink"},a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJjdXJyZW50Q29sb3IiPgoJPHRpdGxlPgoJCUdpdEh1YiBpY29uCgk8L3RpdGxlPgoJPHBhdGggZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIvPgo8L3N2Zz4K",alt:"Github"})),a.createElement("a",{href:"https://linkedin.com/in/marvin-lee~",className:"logoLink"},a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJjdXJyZW50Q29sb3IiPgoJPHRpdGxlPgoJCUxpbmtlZEluIGljb24KCTwvdGl0bGU+Cgk8cGF0aCBkPSJNMjAuNDQ3IDIwLjQ1MmgtMy41NTR2LTUuNTY5YzAtMS4zMjgtLjAyNy0zLjAzNy0xLjg1Mi0zLjAzNy0xLjg1MyAwLTIuMTM2IDEuNDQ1LTIuMTM2IDIuOTM5djUuNjY3SDkuMzUxVjloMy40MTR2MS41NjFoLjA0NmMuNDc3LS45IDEuNjM3LTEuODUgMy4zNy0xLjg1IDMuNjAxIDAgNC4yNjcgMi4zNyA0LjI2NyA1LjQ1NXY2LjI4NnpNNS4zMzcgNy40MzNjLTEuMTQ0IDAtMi4wNjMtLjkyNi0yLjA2My0yLjA2NSAwLTEuMTM4LjkyLTIuMDYzIDIuMDYzLTIuMDYzIDEuMTQgMCAyLjA2NC45MjUgMi4wNjQgMi4wNjMgMCAxLjEzOS0uOTI1IDIuMDY1LTIuMDY0IDIuMDY1em0xLjc4MiAxMy4wMTlIMy41NTVWOWgzLjU2NHYxMS40NTJ6TTIyLjIyNSAwSDEuNzcxQy43OTIgMCAwIC43NzQgMCAxLjcyOXYyMC41NDJDMCAyMy4yMjcuNzkyIDI0IDEuNzcxIDI0aDIwLjQ1MUMyMy4yIDI0IDI0IDIzLjIyNyAyNCAyMi4yNzFWMS43MjlDMjQgLjc3NCAyMy4yIDAgMjIuMjIyIDBoLjAwM3oiLz4KPC9zdmc+Cg==",alt:"LinkedIn"}))))}const j=r.Z;function m(){return a.createElement(a.Fragment,null,a.createElement(o,null),a.createElement(c,null),a.createElement("main",null,a.createElement(u,null),a.createElement("section",{id:"featured-projects"},a.createElement(A,null))),a.createElement(d,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-8cb970d1208879f0bd78.js.map