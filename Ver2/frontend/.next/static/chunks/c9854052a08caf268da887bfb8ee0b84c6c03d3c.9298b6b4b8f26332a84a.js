(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{vL9u:function(e,t,n){"use strict";n.r(t);var r=n("rt45"),o=n("q1tI"),a=n.n(o),u=n("Vl3Y"),l=n("5rEg"),c=n("17x9"),i=n.n(c),s=n("VCL8"),p=n("TSYQ"),f=n.n(p),d=n("jo6Y"),b=n.n(d),h=n("QbLZ"),v=n.n(h),y=n("iCc5"),m=n.n(y),g=n("FYw3"),O=n.n(g),k=n("mRg0"),C=n.n(k),x=function(e){function t(n){m()(this,t);var r=O()(this,e.call(this,n));r.handleChange=function(e){var t=r.props,n=t.disabled,o=t.onChange;n||("checked"in r.props||r.setState({checked:e.target.checked}),o&&o({target:v()({},r.props,{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var o="checked"in n?n.checked:n.defaultChecked;return r.state={checked:o},r}return C()(t,e),t.getDerivedStateFromProps=function(e,t){return"checked"in e?v()({},t,{checked:e.checked}):null},t.prototype.focus=function(){this.input.focus()},t.prototype.blur=function(){this.input.blur()},t.prototype.render=function(){var e,t=this.props,n=t.prefixCls,r=t.className,o=t.style,u=t.name,l=t.id,c=t.type,i=t.disabled,s=t.readOnly,p=t.tabIndex,d=t.onClick,h=t.onFocus,y=t.onBlur,m=t.autoFocus,g=t.value,O=b()(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value"]),k=Object.keys(O).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=O[t]),e}),{}),C=this.state.checked,x=f()(n,r,((e={})[n+"-checked"]=C,e[n+"-disabled"]=i,e));return a.a.createElement("span",{className:x,style:o},a.a.createElement("input",v()({name:u,id:l,type:c,readOnly:s,disabled:i,tabIndex:p,className:n+"-input",checked:!!C,onClick:d,onFocus:h,onBlur:y,onChange:this.handleChange,autoFocus:m,ref:this.saveInput,value:g},k)),a.a.createElement("span",{className:n+"-inner"}))},t}(o.Component);x.propTypes={prefixCls:i.a.string,className:i.a.string,style:i.a.object,name:i.a.string,id:i.a.string,type:i.a.string,defaultChecked:i.a.oneOfType([i.a.number,i.a.bool]),checked:i.a.oneOfType([i.a.number,i.a.bool]),disabled:i.a.bool,onFocus:i.a.func,onBlur:i.a.func,onChange:i.a.func,onClick:i.a.func,tabIndex:i.a.oneOfType([i.a.string,i.a.number]),readOnly:i.a.bool,autoFocus:i.a.bool,value:i.a.any},x.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},Object(s.polyfill)(x);var j=x,w=n("Gytx"),S=n.n(w),E=n("H84U"),P=n("6CfX");function V(e){return(V="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},D=function(e){function t(){var e,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=T(t).apply(this,arguments),(e=!r||"object"!==V(r)&&"function"!==typeof r?G(n):r).saveCheckbox=function(t){e.rcCheckbox=t},e.renderCheckbox=function(t){var n,r=t.getPrefixCls,a=G(e),u=a.props,l=a.context,c=u.prefixCls,i=u.className,s=u.children,p=u.indeterminate,d=u.style,b=u.onMouseEnter,h=u.onMouseLeave,v=B(u,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),y=l.checkboxGroup,m=r("checkbox",c),g=F({},v);y&&(g.onChange=function(){v.onChange&&v.onChange.apply(v,arguments),y.toggleOption({label:s,value:u.value})},g.name=y.name,g.checked=-1!==y.value.indexOf(u.value),g.disabled=u.disabled||y.disabled);var O=f()(i,(_(n={},"".concat(m,"-wrapper"),!0),_(n,"".concat(m,"-wrapper-checked"),g.checked),_(n,"".concat(m,"-wrapper-disabled"),g.disabled),n)),k=f()(_({},"".concat(m,"-indeterminate"),p));return o.createElement("label",{className:O,style:d,onMouseEnter:b,onMouseLeave:h},o.createElement(j,F({},g,{prefixCls:m,className:k,ref:e.saveCheckbox})),void 0!==s&&o.createElement("span",null,s))},e}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props.value,t=(this.context||{}).checkboxGroup,n=void 0===t?{}:t;n.registerValue&&n.registerValue(e),Object(P.a)("checked"in this.props||(this.context||{}).checkboxGroup||!("value"in this.props),"Checkbox","`value` is not validate prop, do you mean `checked`?")}},{key:"shouldComponentUpdate",value:function(e,t,n){return!S()(this.props,e)||!S()(this.state,t)||!S()(this.context.checkboxGroup,n.checkboxGroup)}},{key:"componentDidUpdate",value:function(e){var t=e.value,n=this.props.value,r=(this.context||{}).checkboxGroup,o=void 0===r?{}:r;n!==t&&o.registerValue&&o.cancelValue&&(o.cancelValue(t),o.registerValue(n))}},{key:"componentWillUnmount",value:function(){var e=this.props.value,t=(this.context||{}).checkboxGroup,n=void 0===t?{}:t;n.cancelValue&&n.cancelValue(e)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){return o.createElement(E.a,null,this.renderCheckbox)}}])&&N(n.prototype,r),a&&N(n,a),t}(o.Component);D.__ANT_CHECKBOX=!0,D.defaultProps={indeterminate:!1},D.contextTypes={checkboxGroup:c.any},Object(s.polyfill)(D);var M=D,A=n("BGR+");function L(e){return(L="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Q=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=Y(t).call(this,e),(n=!a||"object"!==L(a)&&"function"!==typeof a?H(r):a).cancelValue=function(e){n.setState((function(t){return{registeredValues:t.registeredValues.filter((function(t){return t!==e}))}}))},n.registerValue=function(e){n.setState((function(t){var n=t.registeredValues;return{registeredValues:[].concat(R(n),[e])}}))},n.toggleOption=function(e){var t=n.state.registeredValues,r=n.state.value.indexOf(e.value),o=R(n.state.value);-1===r?o.push(e.value):o.splice(r,1),"value"in n.props||n.setState({value:o});var a=n.props.onChange;if(a){var u=n.getOptions();a(o.filter((function(e){return-1!==t.indexOf(e)})).sort((function(e,t){return u.findIndex((function(t){return t.value===e}))-u.findIndex((function(e){return e.value===t}))})))}},n.renderGroup=function(e){var t=e.getPrefixCls,r=H(n),a=r.props,u=r.state,l=a.prefixCls,c=a.className,i=a.style,s=a.options,p=K(a,["prefixCls","className","style","options"]),d=t("checkbox",l),b="".concat(d,"-group"),h=Object(A.a)(p,["children","defaultValue","value","onChange","disabled"]),v=a.children;s&&s.length>0&&(v=n.getOptions().map((function(e){return o.createElement(M,{prefixCls:d,key:e.value.toString(),disabled:"disabled"in e?e.disabled:a.disabled,value:e.value,checked:-1!==u.value.indexOf(e.value),onChange:e.onChange,className:"".concat(b,"-item")},e.label)})));var y=f()(b,c);return o.createElement("div",q({className:y,style:i},h),v)},n.state={value:e.value||e.defaultValue||[],registeredValues:[]},n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,e),n=t,a=[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value||[]}:null}}],(r=[{key:"getChildContext",value:function(){return{checkboxGroup:{toggleOption:this.toggleOption,value:this.state.value,disabled:this.props.disabled,name:this.props.name,registerValue:this.registerValue,cancelValue:this.cancelValue}}}},{key:"shouldComponentUpdate",value:function(e,t){return!S()(this.props,e)||!S()(this.state,t)}},{key:"getOptions",value:function(){return this.props.options.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))}},{key:"render",value:function(){return o.createElement(E.a,null,this.renderGroup)}}])&&U(n.prototype,r),a&&U(n,a),t}(o.Component);Q.defaultProps={options:[]},Q.propTypes={defaultValue:c.array,value:c.array,options:c.array.isRequired,onChange:c.func},Q.childContextTypes={checkboxGroup:c.any},Object(s.polyfill)(Q);var X=Q;M.Group=X;var W=M,Z=n("2/Rp"),z=n("LAVF"),$=n("/MKj"),ee=n("nOHt"),te=n.n(ee),ne=n("vOnD");n.d(t,"userInput",(function(){return ue}));var re=a.a.createElement;function oe(){var e=Object(r.a)(["\n  color: red;\n"]);return oe=function(){return e},e}var ae=ne.a.div(oe()),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(o.useState)(e),n=t[0],r=t[1],a=Object(o.useCallback)((function(e){r(e.target.value)}),[]);return[n,a]};t.default=function(){var e=Object(o.useState)(""),t=e[0],n=e[1],r=Object(o.useState)(""),c=r[0],i=r[1],s=Object(o.useState)(""),p=s[0],f=s[1],d=Object(o.useState)(""),b=d[0],h=d[1],v=Object(o.useState)(!1),y=v[0],m=v[1],g=Object(o.useState)(!1),O=g[0],k=g[1],C=Object(o.useState)(!1),x=C[0],j=C[1],w=Object($.b)(),S=Object($.c)((function(e){return e.user})),E=S.isSigningUp,P=S.me;Object(o.useEffect)((function(){P&&(alert("\ub85c\uadf8\uc778 \uc131\uacf5"),te.a.push("/"))}),[P&&P.id]);var V=Object(o.useCallback)((function(e){return e.preventDefault(),console.log({id:t,nick:c,password:p,passwordCheck:b,term:y}),p!==b?k(!0):y?w({type:z.B,data:{userId:t,password:p,nickname:c}}):j(!0)}),[t,c,p,b,y]),_=Object(o.useCallback)((function(e){k(e.target.value!==p),h(e.target.value)}),[p]),F=Object(o.useCallback)((function(e){j(!1),m(e.target.checked)}),[]);return P?null:re(a.a.Fragment,null,re(u.a,{onSubmit:V,style:{padding:10}},re("div",null,re("label",{htmlFor:"user-id"},"\uc544\uc774\ub514"),re("br",null),re(l.a,{name:"user-id",required:!0,value:t,onChange:function(e){n(e.target.value)}})),re("div",null,re("label",{htmlFor:"user-nick"},"\ub2c9\ub124\uc784"),re(l.a,{name:"user-nick",required:!0,value:c,onChange:function(e){i(e.target.value)}})),re("div",null,re("label",{htmlFor:"user-pass"},"\ube44\ubc00\ubc88\ud638"),re("br",null),re(l.a,{name:"user-pass",type:"password",required:!0,value:p,onChange:function(e){f(e.target.value)}})),re("div",null,re("label",{htmlFor:"user-pass-chk"},"\ube44\ubc00\ubc88\ud638 \uccb4\ud06c"),re("br",null),re(l.a,{name:"user-pass-chk",type:"password",required:!0,value:b,onChange:_}),O&&re(ae,null," \ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),re("div",null,re(W,{name:"user-term",value:y,onChange:F},"\ub3d9\uc758\ud569\ub2c8\ub2e4."),x&&re(ae,null," \uc57d\uad00\uc5d0 \ub3d9\uc758 \ud574\uc8fc\uc138\uc694.")),re("div",null,re("div",{style:{marginTop:10}}),re(Z.a,{type:"primary",htmlType:"submit",loading:E},"\uac00\uc785\ud558\uae30"))))}}}]);