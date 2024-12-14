/*! For license information please see bundle.js.LICENSE.txt */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;(()=>{"use strict";var __webpack_modules__={333:(e,_,t)=>{t.d(_,{L:()=>o});var r=t(31);const a=FluentUIReactv940;class o extends r.Component{render(){return r.createElement(a.Label,{title:this.props.LabelText,style:{fontFamily:"Lato",fontSize:"16px",color:"#28313c",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}},this.props.LabelText)}}},31:e=>{e.exports=Reactv16}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(_,{a:_}),_},__webpack_require__.d=(e,_)=>{for(var t in _)__webpack_require__.o(_,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:_[t]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RegExValidator:()=>RegExValidator});var _RegExValidatorComponent__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(333),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(31),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);class RegExValidator{constructor(){this.RegExValidatorOutput=""}init(e,_,t){this.notifyOutputChanged=_}updateView(context){var regexPattern=context.parameters.RegEx.raw,LabelText=context.parameters.LabelText.raw;try{LabelText=regexPattern?eval(regexPattern):"Enter a regex pattern."}catch(e){LabelText="Invalid regex pattern: ".concat(regexPattern)}this.RegExValidatorOutput=LabelText,this.notifyOutputChanged();var props={LabelText};return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RegExValidatorComponent__WEBPACK_IMPORTED_MODULE_0__.L,props)}getOutputs(){return{RegExValidatorOutput:this.RegExValidatorOutput}}destroy(){}}pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad=__webpack_exports__})();
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('RegExValidatorNS.RegExValidator', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.RegExValidator);
} else {
	var RegExValidatorNS = RegExValidatorNS || {};
	RegExValidatorNS.RegExValidator = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.RegExValidator;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}