(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(751)}])},751:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var a=n(5893),i=n(7852),r=n.n(i),c=function(e){return(0,a.jsx)("footer",{className:r().footer,children:(0,a.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,a.jsx)("span",{className:r().logo,children:(0,a.jsx)("img",{src:n(6181),alt:"Vercel Logo",width:72,height:16})})]})})},s=n(7294),o=n(888),l=n(8947),u=n(5697),d=n.n(u);function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function M(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function I(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,a=t.indexOf(":"),i=y(t.slice(0,a)),r=t.slice(a+1).trim();return i.startsWith("webkit")?e[(n=i,n.charAt(0).toUpperCase()+n.slice(1))]=r:e[i]=r,e}),{})}var m=!1;try{m=!0}catch(D){}function N(e){return e&&"object"===h(e)&&e.prefix&&e.iconName&&e.icon?e:l.Qc.icon?l.Qc.icon(e):null===e?null:e&&"object"===h(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?g({},e,t):{}}function L(e){var t=e.forwardedRef,n=p(e,["forwardedRef"]),a=n.icon,i=n.mask,r=n.symbol,c=n.className,s=n.title,o=n.titleId,u=N(a),d=b("classes",[].concat(M(function(e){var t,n=e.spin,a=e.pulse,i=e.fixedWidth,r=e.inverse,c=e.border,s=e.listItem,o=e.flip,l=e.size,u=e.rotation,d=e.pull,h=(g(t={"fa-spin":n,"fa-pulse":a,"fa-fw":i,"fa-inverse":r,"fa-border":c,"fa-li":s,"fa-flip-horizontal":"horizontal"===o||"both"===o,"fa-flip-vertical":"vertical"===o||"both"===o},"fa-".concat(l),"undefined"!==typeof l&&null!==l),g(t,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),g(t,"fa-pull-".concat(d),"undefined"!==typeof d&&null!==d),g(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(h).map((function(e){return h[e]?e:null})).filter((function(e){return e}))}(n)),M(c.split(" ")))),h=b("transform","string"===typeof n.transform?l.Qc.transform(n.transform):n.transform),f=b("mask",N(i)),y=(0,l.qv)(u,j({},d,{},h,{},f,{symbol:r,title:s,titleId:o}));if(!y)return function(){var e;!m&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var I=y.abstract,C={ref:t};return Object.keys(n).forEach((function(e){L.defaultProps.hasOwnProperty(e)||(C[e]=n[e])})),x(I[0],C)}L.displayName="FontAwesomeIcon",L.propTypes={border:d().bool,className:d().string,mask:d().oneOfType([d().object,d().array,d().string]),fixedWidth:d().bool,inverse:d().bool,flip:d().oneOf(["horizontal","vertical","both"]),icon:d().oneOfType([d().object,d().array,d().string]),listItem:d().bool,pull:d().oneOf(["right","left"]),pulse:d().bool,rotation:d().oneOf([0,90,180,270]),size:d().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d().bool,symbol:d().oneOfType([d().bool,d().string]),title:d().string,transform:d().oneOfType([d().string,d().object]),swapOpacity:d().bool},L.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var x=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var i=(n.children||[]).map((function(n){return e(t,n)})),r=Object.keys(n.attributes||{}).reduce((function(e,t){var a=n.attributes[t];switch(t){case"class":e.attrs.className=a,delete n.attributes.class;break;case"style":e.attrs.style=I(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[y(t)]=a}return e}),{attrs:{}}),c=a.style,s=void 0===c?{}:c,o=p(a,["style"]);return r.attrs.style=j({},r.attrs.style,{},s),t.apply(void 0,[n.tag,j({},r.attrs,{},o)].concat(M(i)))}.bind(null,s.createElement),C=function(e){var t=(0,s.useState)(!1),n=t[0],i=t[1],r=e.style,c=e.defaultChecked;return(0,a.jsx)("label",{className:e.className,children:(0,a.jsx)(o.Z,{defaultChecked:c,icons:{checked:(0,a.jsx)(L,{icon:r.checked.icon,style:r.checked.iconStyle}),unchecked:(0,a.jsx)(L,{icon:r.unchecked.icon,style:r.unchecked.iconStyle})},onChange:function(e){i(!n)}})})},v=function(e){var t="is-dark",n={color:"Yellow"},i=e.style?e.style:{checked:{icon:"moon",background:t,iconStyle:n},unchecked:{icon:"sun",background:t,iconStyle:n}};return(0,a.jsx)(C,{defaultChecked:!1,style:i,onChange:function(){},className:e.className})},A=function(e){var t=(0,s.useState)(""),i=t[0],r=t[1],c=(0,s.useState)("is-hidden-mobile"),o=c[0],l=c[1];return(0,a.jsxs)("nav",{className:"navbar is-fixed-top is-".concat(e.theme),role:"navigation","aria-label":"main navigation",children:[(0,a.jsxs)("div",{className:"navbar-brand",children:[(0,a.jsx)("a",{className:"navbar-item",href:"https://dchiang.github.io",children:(0,a.jsx)("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28",alt:"https://dchiang.github.io"})}),(0,a.jsxs)("a",{role:"button",className:"navbar-burger ".concat(i),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:function(e){var t="";""===i&&(t="is-active"),r(t)},children:[(0,a.jsx)("span",{"aria-hidden":"true"}),(0,a.jsx)("span",{"aria-hidden":"true"}),(0,a.jsx)("span",{"aria-hidden":"true"})]})]}),(0,a.jsxs)("div",{id:"navbarBasicExample",className:"navbar-menu ".concat(i),children:[(0,a.jsxs)("div",{className:"navbar-start",children:[(0,a.jsx)("a",{className:"navbar-item",children:"Experience"}),(0,a.jsx)("a",{className:"navbar-item",children:"Projects"}),(0,a.jsx)("a",{className:"navbar-item",children:"About"}),(0,a.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[(0,a.jsx)("a",{className:"navbar-link",onClick:function(e){var t="is-hidden-mobile";""!==o&&(t=""),l(t)},children:"More"}),(0,a.jsxs)("div",{className:"navbar-dropdown ".concat(o),children:[(0,a.jsx)("a",{className:"navbar-item",children:"Leave your feedback"}),(0,a.jsx)("hr",{className:"navbar-divider"}),(0,a.jsx)("a",{className:"navbar-item",children:"Report an issue"})]})]})]}),(0,a.jsxs)("div",{className:"navbar-end",children:[(0,a.jsx)("a",{className:"navbar-item",href:"https://github.com/dchiang",children:(0,a.jsx)("img",{src:n(6706),alt:"https://github.com/dchiang"})}),(0,a.jsx)("a",{className:"navbar-item",href:"https://www.linkedin.com/in/daniel-chiang-guerrero/",children:(0,a.jsx)("img",{src:n(4039),alt:"https://www.linkedin.com/in/daniel-chiang-guerrero/"})}),(0,a.jsx)(v,{className:"navbar-item"})]})]})]})},T=function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A,{onThemeChange:function(e){var t="";""===state&&(t="checked"),setState(t)}}),e.children]})},k=(n(3794),n(9008)),w=function(e){return(0,a.jsxs)(k.default,{children:[(0,a.jsx)("title",{children:e.title}),(0,a.jsx)("meta",{name:"description",content:e.description}),(0,a.jsx)("link",{rel:"icon",href:"../pictures/favicon.ico"})]})};function O(){return(0,a.jsxs)("div",{className:r().container,children:[(0,a.jsx)(w,{title:"Daniel Chiang",description:"Portfolio developed using next js"}),(0,a.jsx)(T,{children:(0,a.jsxs)("main",{className:r().main,children:[(0,a.jsxs)("h1",{className:r().title,children:["Welcome to ",(0,a.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,a.jsxs)("p",{className:r().description,children:["Get started by editing"," ",(0,a.jsx)("code",{className:r().code,children:"pages/index.js"})]}),(0,a.jsxs)("div",{className:r().grid,children:[(0,a.jsxs)("a",{href:"https://nextjs.org/docs",className:r().card,children:[(0,a.jsx)("h2",{children:"Documentation \u2192"}),(0,a.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,a.jsxs)("a",{href:"https://nextjs.org/learn",className:r().card,children:[(0,a.jsx)("h2",{children:"Learn \u2192"}),(0,a.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,a.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:r().card,children:[(0,a.jsx)("h2",{children:"Examples \u2192"}),(0,a.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,a.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:r().card,children:[(0,a.jsx)("h2",{children:"Deploy \u2192"}),(0,a.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]})}),(0,a.jsx)(c,{})]})}},7852:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},9008:function(e,t,n){e.exports=n(5443)},5224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=n(7294),r=(a=i)&&a.__esModule?a:{default:a};t.default=function(){return r.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},r.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},888:function(e,t,n){"use strict";var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(7294),c=h(r),s=h(n(9121)),o=h(n(5697)),l=h(n(5224)),u=h(n(6963)),d=n(1520);function h(e){return e&&e.__esModule?e:{default:e}}var g=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,i=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),r=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return c.default.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",a({},i,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(r.PureComponent);t.Z=g,g.displayName="Toggle",g.defaultProps={icons:{checked:c.default.createElement(l.default,null),unchecked:c.default.createElement(u.default,null)}},g.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},1520:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},6963:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=n(7294),r=(a=i)&&a.__esModule?a:{default:a};t.default=function(){return r.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},r.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},9121:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var c=i.apply(null,n);c&&e.push(c)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var s in n)a.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},6706:function(e){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iNDIuNjA3MDg2bW0iCiAgIGhlaWdodD0iNDEuNTU0OTI4bW0iCiAgIHZpZXdCb3g9IjAgMCA0Mi42MDcwODYgNDEuNTU0OTI4IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc3MzYiCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMS4xICgxOjEuMSsyMDIxMDkyODE5NDkrYzMwODRlZjVlZCkiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkdpdEh1Yi1NYXJrLTEyMHB4LXBsdXMuc3ZnIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3NzM4IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjU5MTUyNjM3IgogICAgIGlua3NjYXBlOmN4PSI4MS45OTEyNzIiCiAgICAgaW5rc2NhcGU6Y3k9IjE2OC4yMDg5IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTUyOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4MzYiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjcyIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyNyIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIgLz4KICA8ZGVmcwogICAgIGlkPSJkZWZzNzMzIiAvPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04My4zNjAzMTYsLTkxLjUwNzQ1NykiPgogICAgPGcKICAgICAgIGlkPSJnMjQiCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywxMDQuNjYzODYsOTEuNTA3NDU3KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Im0gMCwwIGMgLTMzLjM0NywwIC02MC4zODgsLTI3LjAzNSAtNjAuMzg4LC02MC4zODggMCwtMjYuNjggMTcuMzAzLC00OS4zMTYgNDEuMjk3LC01Ny4zMDEgMy4wMTgsLTAuNTU5IDQuMTI2LDEuMzEgNC4xMjYsMi45MDUgMCwxLjQzOSAtMC4wNTYsNi4xOTcgLTAuMDgyLDExLjI0MyAtMTYuOCwtMy42NTMgLTIwLjM0NSw3LjEyNSAtMjAuMzQ1LDcuMTI1IC0yLjc0Nyw2Ljk3OSAtNi43MDUsOC44MzYgLTYuNzA1LDguODM2IC01LjQ3OSwzLjc0OCAwLjQxMywzLjY3MSAwLjQxMywzLjY3MSA2LjA2NCwtMC40MjYgOS4yNTcsLTYuMjI0IDkuMjU3LC02LjIyNCA1LjM4NiwtOS4yMzEgMTQuMTI3LC02LjU2MiAxNy41NzMsLTUuMDE5IDAuNTQzLDMuOTAyIDIuMTA3LDYuNTY3IDMuODM0LDguMDc1IC0xMy40MTMsMS41MjYgLTI3LjUxMyw2LjcwNSAtMjcuNTEzLDI5Ljg0NCAwLDYuNTkyIDIuMzU5LDExLjk4IDYuMjIyLDE2LjIwOSAtMC42MjcsMS41MjEgLTIuNjk0LDcuNjYzIDAuNTg2LDE1Ljk4MSAwLDAgNS4wNzEsMS42MjIgMTYuNjEsLTYuMTkxIDQuODE3LDEuMzM4IDkuOTgzLDIuMDA5IDE1LjExNSwyLjAzMyA1LjEzMiwtMC4wMjQgMTAuMzAyLC0wLjY5NSAxNS4xMjgsLTIuMDMzIDExLjUyNiw3LjgxMyAxNi41OSw2LjE5MSAxNi41OSw2LjE5MSAzLjI4NywtOC4zMTggMS4yMiwtMTQuNDYgMC41OTMsLTE1Ljk4MSAzLjg3MiwtNC4yMjkgNi4yMTQsLTkuNjE3IDYuMjE0LC0xNi4yMDkgMCwtMjMuMTk1IC0xNC4xMjcsLTI4LjMwMSAtMjcuNTc0LC0yOS43OTYgMi4xNjYsLTEuODc0IDQuMDk2LC01LjU0OSA0LjA5NiwtMTEuMTgzIDAsLTguMDggLTAuMDY5LC0xNC41ODMgLTAuMDY5LC0xNi41NzIgMCwtMS42MDggMS4wODYsLTMuNDkgNC4xNDcsLTIuODk4IDIzLjk4Miw3Ljk5NCA0MS4yNjMsMzAuNjIyIDQxLjI2Myw1Ny4yOTQgQyA2MC4zODgsLTI3LjAzNSAzMy4zNTEsMCAwLDAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMxYjE4MTc7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmUiCiAgICAgICAgIGlkPSJwYXRoMjYiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"},4039:function(e){e.exports="./_next/static/images/LI-In-Bug-6bd1a4f93cdf84fa327faa42e717d3b1.svg"},6181:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgzIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgMjgzIDY0IiBmaWxsPSJub25lIiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMTQxLjA0IDE2Yy0xMS4wNCAwLTE5IDcuMi0xOSAxOHM4Ljk2IDE4IDIwIDE4YzYuNjcgMCAxMi41NS0yLjY0IDE2LjE5LTcuMDlsLTcuNjUtNC40MmMtMi4wMiAyLjIxLTUuMDkgMy41LTguNTQgMy41LTQuNzkgMC04Ljg2LTIuNS0xMC4zNy02LjVoMjguMDJjLjIyLTEuMTIuMzUtMi4yOC4zNS0zLjUgMC0xMC43OS03Ljk2LTE3Ljk5LTE5LTE3Ljk5em0tOS40NiAxNC41YzEuMjUtMy45OSA0LjY3LTYuNSA5LjQ1LTYuNSA0Ljc5IDAgOC4yMSAyLjUxIDkuNDUgNi41aC0xOC45ek0yNDguNzIgMTZjLTExLjA0IDAtMTkgNy4yLTE5IDE4czguOTYgMTggMjAgMThjNi42NyAwIDEyLjU1LTIuNjQgMTYuMTktNy4wOWwtNy42NS00LjQyYy0yLjAyIDIuMjEtNS4wOSAzLjUtOC41NCAzLjUtNC43OSAwLTguODYtMi41LTEwLjM3LTYuNWgyOC4wMmMuMjItMS4xMi4zNS0yLjI4LjM1LTMuNSAwLTEwLjc5LTcuOTYtMTcuOTktMTktMTcuOTl6bS05LjQ1IDE0LjVjMS4yNS0zLjk5IDQuNjctNi41IDkuNDUtNi41IDQuNzkgMCA4LjIxIDIuNTEgOS40NSA2LjVoLTE4Ljl6TTIwMC4yNCAzNGMwIDYgMy45MiAxMCAxMCAxMCA0LjEyIDAgNy4yMS0xLjg3IDguOC00LjkybDcuNjggNC40M2MtMy4xOCA1LjMtOS4xNCA4LjQ5LTE2LjQ4IDguNDktMTEuMDUgMC0xOS03LjItMTktMThzNy45Ni0xOCAxOS0xOGM3LjM0IDAgMTMuMjkgMy4xOSAxNi40OCA4LjQ5bC03LjY4IDQuNDNjLTEuNTktMy4wNS00LjY4LTQuOTItOC44LTQuOTItNi4wNyAwLTEwIDQtMTAgMTB6bTgyLjQ4LTI5djQ2aC05VjVoOXpNMzYuOTUgMEw3My45IDY0SDBMMzYuOTUgMHptOTIuMzggNWwtMjcuNzEgNDhMNzMuOTEgNUg4NC4zbDE3LjMyIDMwIDE3LjMyLTMwaDEwLjM5em01OC45MSAxMnY5LjY5Yy0xLS4yOS0yLjA2LS40OS0zLjItLjQ5LTUuODEgMC0xMCA0LTEwIDEwVjUxaC05VjE3aDl2OS4yYzAtNS4wOCA1LjkxLTkuMiAxMy4yLTkuMnoiIGZpbGw9IiMwMDAiLz4KPC9zdmc+"}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);