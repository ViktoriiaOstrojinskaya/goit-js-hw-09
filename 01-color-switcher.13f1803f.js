const e=document.querySelector("body"),t=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let a=null;d.disabled=!0,t.addEventListener("click",(function(){a=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.disabled=!0,d.disabled=!1}),1e3)})),d.addEventListener("click",(()=>{clearInterval(a),d.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.13f1803f.js.map
