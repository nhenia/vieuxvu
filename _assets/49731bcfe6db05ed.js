(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[97668],{

/***/ 634217:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var zFc=__webpack_require__(186901).EW;__c.tZ=class{static G(a){__c.M(a,{step:zFc})}get kind(){return"point"}clone({mc:a=this.mc,xc:b=this.xc,Ui:c=this.Ui,Sd:d=this.Sd,inverse:e=this.inverse}){return new __c.tZ({mc:a,xc:b,Ui:c,Sd:d,inverse:e})}snapshot(){const a=this.mc(),b=this.xc();return new __c.tZ({mc:()=>a,xc:()=>b,Ui:this.Ui,Sd:this.Sd,inverse:this.inverse})}get(a){const b=this.mc();var c=b.indexOf(a);c=this.inverse?b.length-1-c:c;__c.v(c!==-1,`value ${a} must exist in domain`);const [d,e]=this.xc();a=b.length===1?.5:this.Ui();return d+
(a*this.step+c*this.step)*Math.sign(e-d)}get step(){const a=this.mc().length+2*this.Ui(),[b,c]=this.xc();return Math.abs(c-b)/Math.max(a-1,1)}CX(a,b,c){__c.v(a.index!==b.index);const d=this.Ui(),e=(b.center-a.center)/(b.index-a.index);return[a.center-(d+a.index)*e,b.center+(d+c-b.index-1)*e]}BX(a,b,c){const d=this.Ui();return[b,a.center+(a.center-b)/(a.index+d)*(d+c-a.index-1)]}AX(a,b,c){const d=this.Ui();return[a.center-(b-a.center)/(c-a.index-1+d)*(d+a.index),b]}constructor({mc:a,xc:b,Ui:c,Sd:d,
inverse:e=!1}){__c.tZ.G(this);this.mc=a;this.xc=b;this.Ui=c;this.Sd=d;this.inverse=e}};
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/49731bcfe6db05ed.js.map