(()=>{console.log("test"),document.querySelector(".content");const e=document.querySelector(".main-content"),t=document.createElement("div");t.textContent="Melbourne",e.appendChild(t);const n=document.createElement("div"),d=(new Date).toLocaleString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"numeric"});n.textContent=d,e.appendChild(n);const c=document.createElement("div");c.textContent="31°C",c.classList.add("main-temp"),e.appendChild(c);const o=document.createElement("div");o.textContent="Cloudy ";const l=document.createElement("span");l.textContent="☁️",o.appendChild(l),e.appendChild(o);const a=document.createElement("div");a.textContent="Feels like 35°C",e.appendChild(a);const i=document.createElement("div");i.classList.add("bi-temp");const m=document.createElement("div"),r=document.createElement("div");i.appendChild(m),i.appendChild(r),m.textContent="L: 12°C",r.textContent="H: 33°C",e.appendChild(i);const u=document.querySelector(".search"),p=document.createElement("input");p.classList.add("search_input"),p.setAttribute("placeholder","Melbourne"),p.setAttribute("type","text"),u.appendChild(p)})();