import{i as c,S as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="https://pixabay.com/api",m="46431994-a635163271497b221c43ba27b";function d(s){document.getElementById("loader").style.display="flex";const r=`${u}/?key=${m}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.json()}).catch(o=>{console.error("There has been a problem with your fetch operation:",o)})}function p(s){return s.map(({webformatURL:r,largeImageURL:o,tags:n,likes:e,views:t,comments:i,downloads:l})=>`
        <li class="gallery-card">
           <a class="gallery-link" href="${o}">
                <img
                class="gallery-img"
                src="${r}"
                alt="${n}"
                />
           </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${e}</p>
            <p class="info-item"><b>Views</b> ${t}</p>
            <p class="info-item"><b>Comments</b> ${i}</p>
            <p class="info-item"><b>Downloads</b> ${l}</p>
          </div>
        </li>`).join("")}const h={ok:new URL("/goit-advancedjs-hw-03/assets/ok-ca2057af.svg",self.location).href,error:new URL("/goit-advancedjs-hw-03/assets/error-3353b5c5.svg",self.location).href};function g(s){c.error({title:"",backgroundColor:"#ef4040",iconUrl:h.error,timeout:3e3,messageColor:"#fff",titleColor:"#fff",maxWidth:"438px",messageSize:"16px",titleSize:"16px",position:"topRight",message:s,close:!1})}const y=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery");y.addEventListener("submit",b);function b(s){s.preventDefault();const r=s.currentTarget,o=r.elements.user_query.value.trim();d(o).then(n=>{if(n.total===0){a.innerHTML="",g("Sorry, there are no images matching your search query. Please try again!");return}a.innerHTML=p(n.hits),new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}).catch(console.error).finally(()=>{document.getElementById("loader").style.display="none",r.reset()})}
//# sourceMappingURL=commonHelpers.js.map
