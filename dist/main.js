(()=>{console.log("test");const e={"clear sky":"./images/01d.png","few clouds":"./images/02d.png","scattered clouds":"./images/03d.png","broken clouds":"./images/04d.png","shower rain":"./images/09d.png",rain:"./images/10d.png",thunderstorm:"./images/11d.png",snow:"./images/13d.png",mist:"./images/01d.png"},t={metric:"°C",imperial:"°F"},n=(document.querySelector(".content"),document.querySelector(".main-content")),a=document.createElement("div");n.appendChild(a);const i=document.createElement("div");n.appendChild(i);const o=document.createElement("div");o.classList.add("main-temp"),n.appendChild(o);const c=document.createElement("div");c.classList.add("description");const d=document.createElement("img");n.appendChild(c);const s=document.createElement("div");n.appendChild(s);const r=document.createElement("div");r.classList.add("bi-temp");const m=document.createElement("div"),l=document.createElement("div");r.appendChild(m),r.appendChild(l),n.appendChild(r);const p=document.querySelector(".search"),u=document.createElement("input");u.classList.add("search_input"),u.setAttribute("placeholder","Melbourne"),u.setAttribute("type","text"),p.appendChild(u);const C=document.createElement("span");async function g(n,r){try{console.log(r);const p=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=7af91279945244b1cdc0b4f0fe9999aa&units=${r}`,{mode:"cors"}),u=await p.json();a.textContent=u.name+", "+u.sys.country;const C=new Date(Date.now()+1e3*u.timezone);i.textContent=C.toUTCString().slice(0,-7),o.textContent=`${h(u.main.temp)}${t[r]}`,c.textContent=`${u.weather[0].main} `,d.src=e[u.weather[0].description],c.appendChild(d),s.textContent=`Feels like ${h(u.main.feels_like)}${t[r]}`,m.textContent=`L: ${h(u.main.temp_min)}${t[r]}`,l.textContent=`H: ${h(u.main.temp_max)}${t[r]}`}catch(e){console.log("wrong city"),C.textContent="Enter a valid city 🙂"}}C.classList.add("error-message"),p.appendChild(C),u.addEventListener("keydown",(e=>{if("Enter"===e.key)if(""===u.value)C.textContent="Enter a city that is cool 🙂";else{const e="°C"===x.textContent.substr(-2)?"imperial":"metric";g(u.value,e),u.value="",C.textContent=""}})),g("Melbourne,au","metric");const h=e=>{const t=parseFloat(e);return Math.round(t).toString()},x=document.querySelector(".change-metric");x.addEventListener("click",(()=>{const e=a.textContent;"metric"==("°C"===x.textContent.substr(-2)?"imperial":"metric")?(g(e,"imperial"),x.textContent=`Change to ${t.metric}`):(g(e,"metric"),x.textContent=`Change to ${t.imperial}`)}))})();