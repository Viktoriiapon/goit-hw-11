/* empty css                      */import{i as c}from"./assets/vendor-bee2f3af.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a={formEl:document.querySelector(".js-search-form"),infoEl:document.querySelector(".js-list-img"),loaderEl:document.querySelector(".loader")};a.formEl.addEventListener("submit",m);function m(s){s.preventDefault();const i=s.target.elements.query.value;if(!i){c.warning({position:"topRight",message:"Please enter a search query."});return}f(i).then(o=>{d(o)})}function f(s){const i="https://pixabay.com/",o="/api/",n=`?key=42187150-1e170edc08d41224404163b7f&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`,e=i+o+n;return fetch(e).then(t=>t.json())}function u(s){const{webformatURL:i,largeImageURL:o,tags:n,likes:e,views:t,comments:r,downloads:l}=s;return`<div class="image js-image">
    <div class="image-container">

    <a class="gallery-link" href="${o}">
    <img
    src="${i}"
    alt="${n}"
    class="image js-image"
  />
  </a>
    </div>
    <div class="image-body">
      <ul class="info">
    <li class ="info-item">
      <b class="info-item-title">Likes</b>
          <span class="info-item-value">${e}</span>
          </li>
          <li class ="info-item">
      <b class="info-item-title">Views</b>
          <span class="info-item-value">${t}</span>
          </li>
          <li class ="info-item">
      <b class="info-item-title">Comments</b>
          <span class="info-item-value">${r}</span>
          </li>
          <li class ="info-item">
      <b class="info-item-title">Downloads</b>
          <span class="info-item-value">${l}</span>
          </li>
      </ul>
    </div>
  </div>`}function d({hits:s}){const i=s.map(u).join("");a.infoEl.insertAdjacentHTML("beforeend",i),console.log(i)}
//# sourceMappingURL=commonHelpers2.js.map
