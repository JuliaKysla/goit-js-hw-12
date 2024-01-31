import{i as l,S as L,a as b}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const S=document.querySelector(".search-form"),p=document.querySelector(".pictures-list"),u=document.querySelector(".js-load-btn"),m=document.querySelector(".js-loader");let n=1,d=null;function f(){const e="https://pixabay.com/api/",t={key:"42110209-7b075b8eaa13f3df464bddae0",q:d,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:n};return b.get(e,{params:t}).then(i=>i.data)}S.addEventListener("submit",q);async function q(e){if(e.preventDefault(),d=e.target.elements.query.value,n=1,y(),d===""){l.error({position:"topRight",message:"Enter a word to search for"}),c();return}try{const t=await f();if(t.totalHits===0){l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}n===1&&(p.innerHTML="",g(t.hits),h(t.totalHits),c())}catch(t){console.log(`Error: ${t}`)}}function w({largeImageURL:e,webformatURL:t,tags:i,likes:a,views:r,comments:o,downloads:s}){return` <li class="picture-card">
<a class="gallary-card-link" href="${e}">
  <img src="${t}" alt="${i}" />
  <ul class="image-info">
    <li class="image-item-info">
      <p>Likes</p>
      <p>${a}</p>
    </li>
    <li class="image-item-info">
      <p>Views</p>
      <p>${r}</p>
    </li>
    <li class="image-item-info">
      <p>Comments</p>
      <p>${o}</p>
    </li>
    <li class="image-item-info">
      <p>Downloads</p>
      <p>${s}</p>
    </li>
  </ul>
</a>
</li>`}function v(e){return e.map(w).join("")}function g(e){const t=v(e);p.insertAdjacentHTML("beforeend",t),$.refresh()}u.addEventListener("click",P);async function P(){n+=1,y();const e=await f();g(e.hits),h(e.totalHits),c(),E()}function h(e){const t=Math.ceil(e/40);n>=t?(l.info({position:"topRight",message:"We're sorry, there are no more posts to load"}),u.classList.add("is-hidden")):u.classList.remove("is-hidden")}function y(){m.classList.remove("is-hidden")}function c(){m.classList.add("is-hidden")}const $=new L(".pictures-list a",{captionDelay:250,captionsData:"alt"});function C(){return document.querySelector(".picture-card").getBoundingClientRect().height}function E(){const e=C();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
