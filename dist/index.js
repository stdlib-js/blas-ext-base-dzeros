"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=a(function(g,u){
var y=require('@stdlib/blas-ext-base-dfill/dist').ndarray;function p(e,r,i,f){return y(e,0,r,i,f),r}u.exports=p
});var o=a(function(h,n){
var l=require('@stdlib/strided-base-stride2offset/dist'),z=s();function j(e,r,i){return z(e,r,i,l(e,i))}n.exports=j
});var q=a(function(k,d){
var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=o(),x=s();m(v,"ndarray",x);d.exports=v
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=q(),t,c=_(R(__dirname,"./native.js"));E(c)?t=O:t=c;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
