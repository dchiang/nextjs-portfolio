(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(751)}])},751:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return k}});var n=i(5893),a=i(7852),c=i.n(a),r=function(e){return(0,n.jsx)("footer",{className:c().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:c().logo,children:(0,n.jsx)("img",{src:i(6181),alt:"Vercel Logo",width:72,height:16})})]})})},o=i(7294),s=i(888),l=i(8947),u=i(5697),M=i.n(u);function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function j(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function I(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?j(Object(i),!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):j(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function N(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)i=c[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function L(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var i,n=t.indexOf(":"),a=L(t.slice(0,n)),c=t.slice(n+1).trim();return a.startsWith("webkit")?e[(i=a,i.charAt(0).toUpperCase()+i.slice(1))]=c:e[a]=c,e}),{})}var f=!1;try{f=!0}catch(z){}function C(e){return e&&"object"===g(e)&&e.prefix&&e.iconName&&e.icon?e:l.Qc.icon?l.Qc.icon(e):null===e?null:e&&"object"===g(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function p(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?d({},e,t):{}}function m(e){var t=e.forwardedRef,i=N(e,["forwardedRef"]),n=i.icon,a=i.mask,c=i.symbol,r=i.className,o=i.title,s=i.titleId,u=C(n),M=p("classes",[].concat(h(function(e){var t,i=e.spin,n=e.pulse,a=e.fixedWidth,c=e.inverse,r=e.border,o=e.listItem,s=e.flip,l=e.size,u=e.rotation,M=e.pull,g=(d(t={"fa-spin":i,"fa-pulse":n,"fa-fw":a,"fa-inverse":c,"fa-border":r,"fa-li":o,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(l),"undefined"!==typeof l&&null!==l),d(t,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),d(t,"fa-pull-".concat(M),"undefined"!==typeof M&&null!==M),d(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(g).map((function(e){return g[e]?e:null})).filter((function(e){return e}))}(i)),h(r.split(" ")))),g=p("transform","string"===typeof i.transform?l.Qc.transform(i.transform):i.transform),j=p("mask",C(a)),L=(0,l.qv)(u,I({},M,{},g,{},j,{symbol:c,title:o,titleId:s}));if(!L)return function(){var e;!f&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var y=L.abstract,x={ref:t};return Object.keys(i).forEach((function(e){m.defaultProps.hasOwnProperty(e)||(x[e]=i[e])})),A(y[0],x)}m.displayName="FontAwesomeIcon",m.propTypes={border:M().bool,className:M().string,mask:M().oneOfType([M().object,M().array,M().string]),fixedWidth:M().bool,inverse:M().bool,flip:M().oneOf(["horizontal","vertical","both"]),icon:M().oneOfType([M().object,M().array,M().string]),listItem:M().bool,pull:M().oneOf(["right","left"]),pulse:M().bool,rotation:M().oneOf([0,90,180,270]),size:M().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M().bool,symbol:M().oneOfType([M().bool,M().string]),title:M().string,transform:M().oneOfType([M().string,M().object]),swapOpacity:M().bool},m.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var A=function e(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof i)return i;var a=(i.children||[]).map((function(i){return e(t,i)})),c=Object.keys(i.attributes||{}).reduce((function(e,t){var n=i.attributes[t];switch(t){case"class":e.attrs.className=n,delete i.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[L(t)]=n}return e}),{attrs:{}}),r=n.style,o=void 0===r?{}:r,s=N(n,["style"]);return c.attrs.style=I({},c.attrs.style,{},o),t.apply(void 0,[i.tag,I({},c.attrs,{},s)].concat(h(a)))}.bind(null,o.createElement),x=function(e){var t=(0,o.useState)(!1),i=t[0],a=t[1],c=e.style,r=e.defaultChecked;return(0,n.jsx)("label",{className:e.className,children:(0,n.jsx)(s.Z,{defaultChecked:r,icons:{checked:(0,n.jsx)(m,{icon:c.checked.icon,style:c.checked.iconStyle}),unchecked:(0,n.jsx)(m,{icon:c.unchecked.icon,style:c.unchecked.iconStyle})},onChange:function(t){a(!i),e.onChange()}})})},T=i(3374),b=function(e){var t=(0,o.useContext)(T.N).toggleFunction,i="is-dark",a=e.style?e.style:{checked:{icon:"moon",background:i,iconStyle:{color:"White"}},unchecked:{icon:"sun",background:i,iconStyle:{color:"Yellow"}}};return(0,n.jsx)(x,{defaultChecked:!1,style:a,onChange:t,className:e.className})},D=function(e){var t=(0,o.useContext)(T.N).toggle,a=(0,o.useState)(""),c=a[0],r=a[1],s=(0,o.useState)("is-hidden-mobile"),l=s[0],u=s[1];return(0,n.jsxs)("nav",{className:"navbar is-fixed-top is-".concat(t?"dark":"white"),role:"navigation","aria-label":"main navigation",children:[(0,n.jsxs)("div",{className:"navbar-brand",children:[(0,n.jsx)("a",{className:"navbar-item",href:"https://dchiang.github.io",children:(0,n.jsx)("img",{src:i(6581)("./Portfolio-".concat(t?"Light-":"","logo.svg")),width:"112",height:"28",alt:"https://dchiang.github.io"})}),(0,n.jsxs)("a",{role:"button",className:"navbar-burger ".concat(c),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:function(e){var t="";""===c&&(t="is-active"),r(t)},children:[(0,n.jsx)("span",{"aria-hidden":"true"}),(0,n.jsx)("span",{"aria-hidden":"true"}),(0,n.jsx)("span",{"aria-hidden":"true"})]})]}),(0,n.jsxs)("div",{id:"navbarBasicExample",className:"navbar-menu ".concat(c),children:[(0,n.jsxs)("div",{className:"navbar-start",children:[(0,n.jsx)("a",{className:"navbar-item",children:"Experience"}),(0,n.jsx)("a",{className:"navbar-item",children:"Projects"}),(0,n.jsx)("a",{className:"navbar-item",children:"About"}),(0,n.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[(0,n.jsx)("a",{className:"navbar-link",onClick:function(e){var t="is-hidden-mobile";""!==l&&(t=""),u(t)},children:"More"}),(0,n.jsxs)("div",{className:"navbar-dropdown ".concat(l),children:[(0,n.jsx)("a",{className:"navbar-item",children:"Leave your feedback"}),(0,n.jsx)("hr",{className:"navbar-divider"}),(0,n.jsx)("a",{className:"navbar-item",children:"Report an issue"})]})]})]}),(0,n.jsxs)("div",{className:"navbar-end",children:[(0,n.jsx)("a",{className:"navbar-item",href:"https://github.com/dchiang",children:(0,n.jsx)("img",{src:i(5144)("./GitHub-Mark-".concat(t?"Light-":"","120px-plus.svg")),alt:"https://github.com/dchiang"})}),(0,n.jsx)("a",{className:"navbar-item",href:"https://www.linkedin.com/in/daniel-chiang-guerrero/",children:(0,n.jsx)("img",{src:i(8669)("./LI-In-".concat(t?"Light-":"","Bug.svg")),alt:"https://www.linkedin.com/in/daniel-chiang-guerrero/"})}),(0,n.jsx)(b,{className:"navbar-item"})]})]})]})},v=function(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(D,{}),e.children]})},w=(i(3794),i(9008)),O=function(e){return(0,n.jsxs)(w.default,{children:[(0,n.jsx)("title",{children:e.title}),(0,n.jsx)("meta",{name:"description",content:e.description}),(0,n.jsx)("link",{rel:"icon",href:"../pictures/favicon.ico"})]})};function k(){return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsx)(O,{title:"Daniel Chiang",description:"Portfolio developed using next js"}),(0,n.jsx)(v,{children:(0,n.jsxs)("main",{className:c().main,children:[(0,n.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,n.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,n.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,n.jsx)("code",{className:c().code,children:"pages/index.js"})]}),(0,n.jsxs)("div",{className:c().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,n.jsx)("h2",{children:"Documentation \u2192"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,n.jsx)("h2",{children:"Learn \u2192"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:c().card,children:[(0,n.jsx)("h2",{children:"Examples \u2192"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:c().card,children:[(0,n.jsx)("h2",{children:"Deploy \u2192"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]})}),(0,n.jsx)(r,{})]})}},7852:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},9008:function(e,t,i){e.exports=i(5443)},5224:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=i(7294),c=(n=a)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},888:function(e,t,i){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),c=i(7294),r=g(c),o=g(i(9121)),s=g(i(5697)),l=g(i(5224)),u=g(i(6963)),M=i(1520);function g(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.handleClick=i.handleClick.bind(i),i.handleTouchStart=i.handleTouchStart.bind(i),i.handleTouchMove=i.handleTouchMove.bind(i),i.handleTouchEnd=i.handleTouchEnd.bind(i),i.handleFocus=i.handleFocus.bind(i),i.handleBlur=i.handleBlur.bind(i),i.previouslyChecked=!(!e.checked&&!e.defaultChecked),i.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},i}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var i=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:i})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,M.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,M.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var i=(0,M.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>i?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<i&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var i=this.props.icons;return i?void 0===i[e]?t.defaultProps.icons[e]:i[e]:null}},{key:"render",value:function(){var e=this,t=this.props,i=t.className,a=(t.icons,function(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},i);return r.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},r.default.createElement("div",{className:"react-toggle-track"},r.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),r.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),r.default.createElement("div",{className:"react-toggle-thumb"}),r.default.createElement("input",n({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.Z=d,d.displayName="Toggle",d.defaultProps={icons:{checked:r.default.createElement(l.default,null),unchecked:r.default.createElement(u.default,null)}},d.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},1520:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var i=t[0];return{x:i.clientX,y:i.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},6963:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=i(7294),c=(n=a)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},9121:function(e,t){var i;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var c=typeof i;if("string"===c||"number"===c)e.push(i);else if(Array.isArray(i)){if(i.length){var r=a.apply(null,i);r&&e.push(r)}}else if("object"===c)if(i.toString===Object.prototype.toString)for(var o in i)n.call(i,o)&&i[o]&&e.push(o);else e.push(i.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(i=function(){return a}.apply(t,[]))||(e.exports=i)}()},6706:function(e){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNDIuNjA3MDg2bW0iCiAgIGhlaWdodD0iNDEuNTU0OTI4bW0iCiAgIHZpZXdCb3g9IjAgMCA0Mi42MDcwODYgNDEuNTU0OTI4IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc3MzYiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMS4xICgxOjEuMSsyMDIxMDkyODE5NDkrYzMwODRlZjVlZCkiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkdpdEh1Yi1NYXJrLTEyMHB4LXBsdXMuc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3NzM4IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjU5MTUyNjM3IgogICAgIGlua3NjYXBlOmN4PSI4MS45OTEyNzIiCiAgICAgaW5rc2NhcGU6Y3k9IjE2OC4yMDg5IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTUyOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4MzYiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjcyIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyNyIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgLz4KICA8ZGVmcwogICAgIGlkPSJkZWZzNzMzIiAvPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04My4zNjAzMTYsLTkxLjUwNzQ1NykiPgogICAgPGcKICAgICAgIGlkPSJnMjQiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywxMDQuNjYzODYsOTEuNTA3NDU3KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMCwwIGMgLTMzLjM0NywwIC02MC4zODgsLTI3LjAzNSAtNjAuMzg4LC02MC4zODggMCwtMjYuNjggMTcuMzAzLC00OS4zMTYgNDEuMjk3LC01Ny4zMDEgMy4wMTgsLTAuNTU5IDQuMTI2LDEuMzEgNC4xMjYsMi45MDUgMCwxLjQzOSAtMC4wNTYsNi4xOTcgLTAuMDgyLDExLjI0MyAtMTYuOCwtMy42NTMgLTIwLjM0NSw3LjEyNSAtMjAuMzQ1LDcuMTI1IC0yLjc0Nyw2Ljk3OSAtNi43MDUsOC44MzYgLTYuNzA1LDguODM2IC01LjQ3OSwzLjc0OCAwLjQxMywzLjY3MSAwLjQxMywzLjY3MSA2LjA2NCwtMC40MjYgOS4yNTcsLTYuMjI0IDkuMjU3LC02LjIyNCA1LjM4NiwtOS4yMzEgMTQuMTI3LC02LjU2MiAxNy41NzMsLTUuMDE5IDAuNTQzLDMuOTAyIDIuMTA3LDYuNTY3IDMuODM0LDguMDc1IC0xMy40MTMsMS41MjYgLTI3LjUxMyw2LjcwNSAtMjcuNTEzLDI5Ljg0NCAwLDYuNTkyIDIuMzU5LDExLjk4IDYuMjIyLDE2LjIwOSAtMC42MjcsMS41MjEgLTIuNjk0LDcuNjYzIDAuNTg2LDE1Ljk4MSAwLDAgNS4wNzEsMS42MjIgMTYuNjEsLTYuMTkxIDQuODE3LDEuMzM4IDkuOTgzLDIuMDA5IDE1LjExNSwyLjAzMyA1LjEzMiwtMC4wMjQgMTAuMzAyLC0wLjY5NSAxNS4xMjgsLTIuMDMzIDExLjUyNiw3LjgxMyAxNi41OSw2LjE5MSAxNi41OSw2LjE5MSAzLjI4NywtOC4zMTggMS4yMiwtMTQuNDYgMC41OTMsLTE1Ljk4MSAzLjg3MiwtNC4yMjkgNi4yMTQsLTkuNjE3IDYuMjE0LC0xNi4yMDkgMCwtMjMuMTk1IC0xNC4xMjcsLTI4LjMwMSAtMjcuNTc0LC0yOS43OTYgMi4xNjYsLTEuODc0IDQuMDk2LC01LjU0OSA0LjA5NiwtMTEuMTgzIDAsLTguMDggLTAuMDY5LC0xNC41ODMgLTAuMDY5LC0xNi41NzIgMCwtMS42MDggMS4wODYsLTMuNDkgNC4xNDcsLTIuODk4IDIzLjk4Miw3Ljk5NCA0MS4yNjMsMzAuNjIyIDQxLjI2Myw1Ny4yOTQgQyA2MC4zODgsLTI3LjAzNSAzMy4zNTEsMCAwLDAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMxYjE4MTc7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoMjYiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"},9508:function(e){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNDIuNjA3MTU5bW0iCiAgIGhlaWdodD0iNDEuNTU1MDM4bW0iCiAgIHZpZXdCb3g9IjAgMCA0Mi42MDcxNTkgNDEuNTU1MDM4IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4MTciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMS4xICgxOjEuMSsyMDIxMDkyODE5NDkrYzMwODRlZjVlZCkiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkdpdEh1Yi1NYXJrLUxpZ2h0LTEyMHB4LXBsdXMuc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3ODE5IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjU5MTUyNjM3IgogICAgIGlua3NjYXBlOmN4PSI3My41Mzg1NjQiCiAgICAgaW5rc2NhcGU6Y3k9IjE2OS44OTk0NCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE1MjgiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODM2IgogICAgIGlua3NjYXBlOndpbmRvdy14PSI3MiIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjciCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiIC8+CiAgPGRlZnMKICAgICBpZD0iZGVmczgxNCIgLz4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODUuNDM4NjEyLC0xMDMuOTM1MDcpIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDEwNi43NDIxNiwxMDMuOTM1MDcgYyAtMTEuNzY0MDg1LDAgLTIxLjMwMzU0OCw5LjUzNzM1IC0yMS4zMDM1NDgsMjEuMzAzNTUgMCw5LjQxMjExIDYuMTA0MTEzLDE3LjM5NzU5IDE0LjU2ODY1OCwyMC4yMTQ1MiAxLjA2NDY5LDAuMTk3MiAxLjQ1NTU3LC0wLjQ2MjE0IDEuNDU1NTcsLTEuMDI0ODIgMCwtMC41MDc2NSAtMC4wMTk4LC0yLjE4NjE2IC0wLjAyODksLTMuOTY2MjggLTUuOTI2NjcxLDEuMjg4NyAtNy4xNzcyNjgsLTIuNTEzNTQgLTcuMTc3MjY4LC0yLjUxMzU0IC0wLjk2OTA4MSwtMi40NjIwNCAtMi4zNjUzNzUsLTMuMTE3MTQgLTIuMzY1Mzc1LC0zLjExNzE0IC0xLjkzMjg3LC0xLjMyMjIyIDAuMTQ1Njk3LC0xLjI5NTA1IDAuMTQ1Njk3LC0xLjI5NTA1IDIuMTM5MjQ0LDAuMTUwMjggMy4yNjU2NjQsMi4xOTU2OSAzLjI2NTY2NCwyLjE5NTY5IDEuOTAwMDYxLDMuMjU2NDkgNC45ODM2OTIsMi4zMTQ5MiA2LjE5OTM2MiwxLjc3MDU5IDAuMTkxNTYsLTEuMzc2NTQgMC43NDMzLC0yLjMxNjY5IDEuMzUyNTUsLTIuODQ4NjggLTQuNzMxODA3LC0wLjUzODM0IC05LjcwNTk3MywtMi4zNjUzOCAtOS43MDU5NzMsLTEwLjUyODMgMCwtMi4zMjU1MSAwLjgzMjIwMywtNC4yMjU5MyAyLjE5NDk4MywtNS43MTc4MiAtMC4yMjExOTIsLTAuNTM2OTMgLTAuOTUwMzgzLC0yLjcwMzcgMC4yMDY3MjgsLTUuNjM4MSAwLDAgMS43ODg5MzYsLTAuNTcyMjEgNS44NTk2NDIsMi4xODQwNCAxLjY5OTMzLC0wLjQ3MjAxIDMuNTIxNzgsLTAuNzA4NzMgNS4zMzIyMywtMC43MTcxOSAxLjgxMDQ2LDAuMDA4IDMuNjM0MzIsMC4yNDUxOCA1LjMzNjgyLDAuNzE3MTkgNC4wNjYxMiwtMi43NTYyNSA1Ljg1MjU5LC0yLjE4NDA0IDUuODUyNTksLTIuMTg0MDQgMS4xNTk1OCwyLjkzNDQgMC40MzAzOSw1LjEwMTE3IDAuMjA5MTksNS42MzgxIDEuMzY1OTYsMS40OTE4OSAyLjE5MjE3LDMuMzkyMzEgMi4xOTIxNyw1LjcxNzgyIDAsOC4xODI2OCAtNC45ODM3LDkuOTgzOTYgLTkuNzI3NSwxMC41MTEzNiAwLjc2NDEyLDAuNjYxMTEgMS40NDQ5OCwxLjk1NzU3IDEuNDQ0OTgsMy45NDUxMiAwLDIuODUwNDQgLTAuMDI0Myw1LjE0NDU2IC0wLjAyNDMsNS44NDYyMyAwLDAuNTY3MjcgMC4zODMxMiwxLjIzMTU1IDEuNDYyOTcsMS4wMjIzNSA4LjQ2MDMyLC0yLjgyMDEgMTQuNTU2NjcsLTEwLjgwMjc2IDE0LjU1NjY3LC0yMC4yMTIwNSAwLC0xMS43NjYyIC05LjUzODA1LC0yMS4zMDM1NSAtMjEuMzAzNTUsLTIxLjMwMzU1IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4zNTI3NzgiCiAgICAgICBpZD0icGF0aDIwMCIgLz4KICA8L2c+Cjwvc3ZnPgo="},4039:function(e){e.exports="./_next/static/images/LI-In-Bug-6bd1a4f93cdf84fa327faa42e717d3b1.svg"},439:function(e){e.exports="./_next/static/images/LI-In-Light-Bug-f7fd5104754389cb8a2ec60b6418002d.svg"},3684:function(e){e.exports="./_next/static/images/Portfolio-Light-logo-57f2b927eda2a04066b5737c50f7d6dc.svg"},2439:function(e){e.exports="./_next/static/images/Portfolio-logo-031f08ab97e08fa2ed1c4adb390975cc.svg"},6181:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgzIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgMjgzIDY0IiBmaWxsPSJub25lIiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMTQxLjA0IDE2Yy0xMS4wNCAwLTE5IDcuMi0xOSAxOHM4Ljk2IDE4IDIwIDE4YzYuNjcgMCAxMi41NS0yLjY0IDE2LjE5LTcuMDlsLTcuNjUtNC40MmMtMi4wMiAyLjIxLTUuMDkgMy41LTguNTQgMy41LTQuNzkgMC04Ljg2LTIuNS0xMC4zNy02LjVoMjguMDJjLjIyLTEuMTIuMzUtMi4yOC4zNS0zLjUgMC0xMC43OS03Ljk2LTE3Ljk5LTE5LTE3Ljk5em0tOS40NiAxNC41YzEuMjUtMy45OSA0LjY3LTYuNSA5LjQ1LTYuNSA0Ljc5IDAgOC4yMSAyLjUxIDkuNDUgNi41aC0xOC45ek0yNDguNzIgMTZjLTExLjA0IDAtMTkgNy4yLTE5IDE4czguOTYgMTggMjAgMThjNi42NyAwIDEyLjU1LTIuNjQgMTYuMTktNy4wOWwtNy42NS00LjQyYy0yLjAyIDIuMjEtNS4wOSAzLjUtOC41NCAzLjUtNC43OSAwLTguODYtMi41LTEwLjM3LTYuNWgyOC4wMmMuMjItMS4xMi4zNS0yLjI4LjM1LTMuNSAwLTEwLjc5LTcuOTYtMTcuOTktMTktMTcuOTl6bS05LjQ1IDE0LjVjMS4yNS0zLjk5IDQuNjctNi41IDkuNDUtNi41IDQuNzkgMCA4LjIxIDIuNTEgOS40NSA2LjVoLTE4Ljl6TTIwMC4yNCAzNGMwIDYgMy45MiAxMCAxMCAxMCA0LjEyIDAgNy4yMS0xLjg3IDguOC00LjkybDcuNjggNC40M2MtMy4xOCA1LjMtOS4xNCA4LjQ5LTE2LjQ4IDguNDktMTEuMDUgMC0xOS03LjItMTktMThzNy45Ni0xOCAxOS0xOGM3LjM0IDAgMTMuMjkgMy4xOSAxNi40OCA4LjQ5bC03LjY4IDQuNDNjLTEuNTktMy4wNS00LjY4LTQuOTItOC44LTQuOTItNi4wNyAwLTEwIDQtMTAgMTB6bTgyLjQ4LTI5djQ2aC05VjVoOXpNMzYuOTUgMEw3My45IDY0SDBMMzYuOTUgMHptOTIuMzggNWwtMjcuNzEgNDhMNzMuOTEgNUg4NC4zbDE3LjMyIDMwIDE3LjMyLTMwaDEwLjM5em01OC45MSAxMnY5LjY5Yy0xLS4yOS0yLjA2LS40OS0zLjItLjQ5LTUuODEgMC0xMCA0LTEwIDEwVjUxaC05VjE3aDl2OS4yYzAtNS4wOCA1LjkxLTkuMiAxMy4yLTkuMnoiIGZpbGw9IiMwMDAiLz4KPC9zdmc+"},5144:function(e,t,i){var n={"./GitHub-Mark-120px-plus.svg":6706,"./GitHub-Mark-Light-120px-plus.svg":9508};function a(e){var t=c(e);return i(t)}function c(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id=5144},8669:function(e,t,i){var n={"./LI-In-Bug.svg":4039,"./LI-In-Light-Bug.svg":439};function a(e){var t=c(e);return i(t)}function c(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id=8669},6581:function(e,t,i){var n={"./Portfolio-Light-logo.svg":3684,"./Portfolio-logo.svg":2439};function a(e){var t=c(e);return i(t)}function c(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id=6581}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);