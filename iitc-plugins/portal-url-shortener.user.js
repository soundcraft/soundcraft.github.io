// ==UserScript==
// @id             iitc-plugin-portal-url-shortener
// @name           IITC plugin: Portal URL Shortener
// @version        0.1.0.20161204.3
// @namespace      https://azuki.tk/
// @updateURL      https://azuki.tk/plugin/portal-url-shortener.user.js
// @downloadURL    https://azuki.tk/plugin/portal-url-shortener.user.js
// @description    Portal URL Shortener
// @include        https://www.ingress.com/intel*
// @include        http://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// @match          http://www.ingress.com/intel*
// @grant          none
// ==/UserScript==
function wrapper(t){"function"!=typeof window.plugin&&(window.plugin=function(){}),window.plugin.portalUrlShortener=function(){},window.plugin.portalUrlShortener.addLink=function(){$(".linkdetails").append("<aside><a onclick=\"window.plugin.portalUrlShortener.showPortalLink('"+window.selectedPortal+'\')" title="Display Shorten URL of the portal">Shorten URL</a></aside>')},window.plugin.portalUrlShortener.showPortalLink=function(t){if(!window.portals[t])return void console.warn("portalUrlShortener: guid "+t+" not found");var o=window.portals[t].options.data;if(void 0===o.title)return void console.warn("portalUrlShortener: portal detail "+t+" not loaded");var n=o.title,e=o.latE6/1e6,i=o.lngE6/1e6,r="https://www.ingress.com/intel?ll="+e+","+i+"&z=17&pll="+e+","+i,l="https://maps.google.com/maps?ll="+e+","+i+"&q="+e+","+i+"%20("+encodeURIComponent(n)+")",a=dialog({html:["<div>","<p>Select all(CTRL+A) and press CTRL+C to copy it.</p>",'<textarea id="portal-url-shortener-result" readonly="" style="width: 98%; height: 60px">',"shortening...","</textarea>","</div>"].join(""),title:"Portal URL Shortener"}),p={title:n,dialog:a},d=function(t){var o=p.title+"\nintel: "+p.intel+"\ngmap: "+t.shorturl;$(p.dialog).find("#portal-url-shortener-result").text(o)},s=function(t){p.intel=t.shorturl,$.ajax({type:"GET",dataType:"json",url:"https://is.gd/create.php?format=json&url="+encodeURIComponent(l)}).done(d)};$.ajax({type:"GET",dataType:"json",url:"https://is.gd/create.php?format=json&url="+encodeURIComponent(r)}).done(s)},window.plugin.portalUrlShortener.setup=function(){addHook("portalDetailsUpdated",window.plugin.portalUrlShortener.addLink)};var o=plugin.portalUrlShortener.setup;o.info=t,window.bootPlugins||(window.bootPlugins=[]),window.bootPlugins.push(o),window.iitcLoaded&&"function"==typeof o&&o()}var script=document.createElement("script"),info={};"undefined"!=typeof GM_info&&GM_info&&GM_info.script&&(info.script={version:GM_info.script.version,name:GM_info.script.name,description:GM_info.script.description}),script.appendChild(document.createTextNode("("+wrapper+")("+JSON.stringify(info)+");")),(document.body||document.head||document.documentElement).appendChild(script);
