window.Thread=function(){function c(a){if("function"!==typeof a)throw"[concurrent.js] threadFunction must be a function!";a=a.toString();for(var c=-1,b=0;b<a.length;b++){var d=a.charAt(b);if("{"===d){c=b;break}}for(var f=-1,b=a.length;0<b;b--)if(d=a.charAt(b),"}"===d){f=b;break}a=a.substring(c+1,f);this.onmessages=[];a=new Blob([a]);a=new Worker(URL.createObjectURL(a));var e=this;a.onmessage=function(a){for(var b=0;b<e.onmessages.length;b++)e.onmessages[b].call(e,a)};this.worker=a}if("undefined"===
    typeof window.Worker)throw"[concurrent.js] Webworkers are not available but required!";window.URL=window.URL||window.webkitURL;if("undefined"===typeof window.Blob)throw"[concurrent.js] Blob required!";if("undefined"===typeof window.URL)throw"[concurrent.js] URL required!";c.prototype.onmessage=function(a){this.onmessages.push(a)};c.prototype.postMessage=function(a){this.worker.postMessage(a)};c.prototype.terminate=function(){Worker.prototype.terminate.call(this.worker)};return c}();