/*
*					[HOAKHUYA] (C) 2010-2099 Lengend Hackers World~
*
*			1)	This script powered by HoaKhuya Group and for internal circulation only.
*			If you get this script on the Internet. We cannot ensure or warrant the
*			security of this scripts, so use at your own risk. We're not responsible for
*			anything that happens due to you using this script!
*
*			2)	For license payto ethereum: 0x530B01846185a5CD40ce805fC0808aa3F8DDC2d3
*			3)	Developers : execs@qq.com;yuna.elin@yandex.ru;tonghua@dr.com;
*
*
*		Id: haes.js [BuildDB.665000254] 12/11/2020 7:02 CH $
*/
	
"use strict";if("undefined"!=typeof module&&module.exports)var Aes=require("./aes");Aes.Ctr={},Aes.Ctr.encrypt=function(e,r,o){if(128!=o&&192!=o&&256!=o)return"";e=String(e).utf8Encode(),r=String(r).utf8Encode();for(var t=o/8,n=new Array(t),i=0;i<t;i++)n[i]=isNaN(r.charCodeAt(i))?0:r.charCodeAt(i);var a=Aes.cipher(n,Aes.keyExpansion(n));a=a.concat(a.slice(0,t-16));var f=new Array(16),c=(new Date).getTime(),d=c%1e3,s=Math.floor(c/1e3),u=Math.floor(65535*Math.random());for(i=0;i<2;i++)f[i]=d>>>8*i&255;for(i=0;i<2;i++)f[i+2]=u>>>8*i&255;for(i=0;i<4;i++)f[i+4]=s>>>8*i&255;var p="";for(i=0;i<8;i++)p+=String.fromCharCode(f[i]);for(var h=Aes.keyExpansion(a),y=Math.ceil(e.length/16),A=new Array(y),g=0;g<y;g++){for(var v=0;v<4;v++)f[15-v]=g>>>8*v&255;for(v=0;v<4;v++)f[15-v-4]=g/4294967296>>>8*v;var l=Aes.cipher(f,h),C=g<y-1?16:(e.length-1)%16+1,S=new Array(C);for(i=0;i<C;i++)S[i]=l[i]^e.charCodeAt(16*g+i),S[i]=String.fromCharCode(S[i]);A[g]=S.join("")}var w=p+A.join("");return w=w.base64Encode()},Aes.Ctr.decrypt=function(e,r,o){if(128!=o&&192!=o&&256!=o)return"";e=String(e).base64Decode(),r=String(r).utf8Encode();for(var t=o/8,n=new Array(t),i=0;i<t;i++)n[i]=isNaN(r.charCodeAt(i))?0:r.charCodeAt(i);var a=Aes.cipher(n,Aes.keyExpansion(n));a=a.concat(a.slice(0,t-16));var f=new Array(8),c=e.slice(0,8);for(i=0;i<8;i++)f[i]=c.charCodeAt(i);for(var d=Aes.keyExpansion(a),s=Math.ceil((e.length-8)/16),u=new Array(s),p=0;p<s;p++)u[p]=e.slice(8+16*p,8+16*p+16);e=u;var h=new Array(e.length);for(p=0;p<s;p++){for(var y=0;y<4;y++)f[15-y]=p>>>8*y&255;for(y=0;y<4;y++)f[15-y-4]=(p+1)/4294967296-1>>>8*y&255;var A=Aes.cipher(f,d),g=new Array(e[p].length);for(i=0;i<e[p].length;i++)g[i]=A[i]^e[p].charCodeAt(i),g[i]=String.fromCharCode(g[i]);h[p]=g.join("")}var v=h.join("");return v=v.utf8Decode()},void 0===String.prototype.utf8Encode&&(String.prototype.utf8Encode=function(){return unescape(encodeURIComponent(this))}),void 0===String.prototype.utf8Decode&&(String.prototype.utf8Decode=function(){try{return decodeURIComponent(escape(this))}catch(e){return this}}),void 0===String.prototype.base64Encode&&(String.prototype.base64Encode=function(){if("undefined"!=typeof btoa)return btoa(this);if("undefined"!=typeof Buffer)return new Buffer.from(this,"binary").toString("base64");throw new Error("No Base64 Encode")}),void 0===String.prototype.base64Decode&&(String.prototype.base64Decode=function(){if("undefined"!=typeof atob)return atob(this);if("undefined"!=typeof Buffer)return new Buffer.from(this,"base64").toString("binary");throw new Error("No Base64 Decode")}),"undefined"!=typeof module&&module.exports&&(module.exports=Aes.Ctr);