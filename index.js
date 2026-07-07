import{a as u,S as he,i as x,b as A,N as H,P as N,A as fe}from"./assets/vendor-CjAeEpu3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const M=document.getElementById("navbar-menu"),we=document.getElementById("open-menu"),ye=document.getElementById("close-menu"),ke=M.querySelector(".nav-list"),be=M.querySelector(".mobile-menu-btn"),X=document.querySelector(".header .consultation-btn"),B=document.getElementById("event-list");function P(){M.classList.add("is-hidden"),document.body.style.overflow=""}we.addEventListener("click",function(){M.classList.remove("is-hidden"),document.body.style.overflow="hidden"});ye.addEventListener("click",P);ke.addEventListener("click",P);be.addEventListener("click",function(){P(),B&&B.scrollIntoView({behavior:"smooth"})});X&&X.addEventListener("click",function(){B&&B.scrollIntoView({behavior:"smooth"})});window.addEventListener("keydown",function(e){e.key==="Escape"&&P()});const te="https://events-store.b.goit.study/api",v={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};u.defaults.baseURL=te;async function Le(){return(await u.get(v.CATEGORIES)).data}async function j(e=1,t="",n=v.LIMIT){return t==="all"||!t?(await u.get(`${v.EVENTS}?page=${e}&limit=${n}`)).data:(await u.get(`${v.EVENTS}?page=${e}&limit=${n}&category=${t}`)).data}const a={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function Se(e,t){const n=e%4,s=e-n;return n===0||t<s?"row-of-4":n===3?"row-last-3":n===2?"row-last-2":n===1?"row-last-1":""}function R(){a.loader.classList.remove("is-hidden")}function V(){a.loader.classList.add("is-hidden")}let Ee=!1;function xe(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],n=t.map(({_id:s,name:o,tags:i},r)=>{const c=Se(t.length,r),m=i.map(L=>`#${L} `).join("");return`<li class="event-category-item ${c}" data-category="${s}">
          <p class="event-category-title">${o}</p>
          <p class="event-category-tags">${m}</p>
        </li>`}).join("");a.categoriesListEl.innerHTML=n,a.firstCategoryButton&&a.firstCategoryButton.classList.add("categories__btn--active")}a.caregoryListSelect.addEventListener("click",Be);function Be(e){a.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),a.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!Ee&&!a.categoriesListOpen.classList.contains("is-hidden")&&window.innerWidth<768&&!a.categoriesListEl.SimpleBar&&new he(a.categoriesScroll,{autoHide:!1}).recalculate()}function F(e){const t="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWTCjrYnFjj8EYfWdauJQ3dcybEFwaAIuRbQd8SQxu09hdbyzPESKpqs&s=10",n=e.map(({_id:s,name:o,price:i,category:r,image:c})=>`<li class="event-item">
        <img
          src="${c||t}"
          alt="${o}"
          width="335"
          height="251"
          onerror="this.onerror=null;this.src='${t}'"
        />
        <div class="event-info">
          <p class="event-title">${o}</p>
          <p class="event-text">${r.name}</p>
          <p class="event-price">від ${i.value} грн</p>
        </div>
        <button
          type="button"
          class="event-details-btn"
          data-event-id="${s}"
        >
          Детальніше
        </button>
      </li>`).join("");a.eventsList.insertAdjacentHTML("beforeend",n)}const E="/project-1-JS-copy/assets/sprite-kFDfZW0W.svg",_e="https://events-store.b.goit.study";async function $e(e){try{const{data:t}=await u.get(`${_e}/api/events/${e}`);return t}catch(t){throw t}}function Ie(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:n,name:s,description:o,image:i,durationHours:r,rate:c,price:m,audience:L,category:ce,program:de,inclusions:ue}=e;let h="";const D=Math.floor(c),S=c-D,z=S>=.25&&S<.75,me=D+(z||S>=.75?1:0);for(let d=0;d<D;d+=1)h+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${E}#icon-full-star"></use>
      </svg>
    `;S>=.75?h+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${E}#icon-full-star"></use>
      </svg>
    `:z&&(h+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${E}#icon-half-star"></use>
      </svg>
    `);for(let d=me;d<5;d+=1)h+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${E}#icon-star"></use>
      </svg>
    `;const ge=de.map(d=>`<li>${d}</li>`).join(""),ve=ue.map(d=>`<li>${d}</li>`).join(""),pe=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${i}" alt="${s}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${ce.name}</span>
          <div class="modal-event__stars">${h}</div>
        </div>
        
        <h2 class="modal-event__title">${s}</h2>
        <p class="modal-event__desc">${o}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${ge}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${ve}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${r} години</p>
          <p><b>Кількість учасників:</b> від ${L.min} до ${L.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${m.prefix} ${m.value} ${m.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${n}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=pe}const qe="https://events-store.b.goit.study/api",f=document.querySelector(".booking-modal"),se=document.querySelector(".booking-modal-close-btn"),l=document.querySelector(".booking-modal-form"),_=document.querySelector(".booking-modal-submit-btn"),y=l.querySelector('[name="name"]'),k=l.querySelector('[name="phone"]'),b=l.querySelector('[name="comment"]'),$=y.closest(".booking-modal-field").querySelector(".booking-modal-error"),I=k.closest(".booking-modal-field").querySelector(".booking-modal-error"),q=b.closest(".booking-modal-field").querySelector(".booking-modal-error");l.addEventListener("submit",Te);let W=null;function Ce(e){W=e,document.body.style.overflow="hidden",f.classList.add("is-open"),document.addEventListener("keydown",ne),se.addEventListener("click",oe),f.addEventListener("click",ie),Ae()}function T(){f.classList.remove("is-open"),l.reset(),Q(),W=null,document.body.style.overflow="",document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",ne),se.removeEventListener("click",oe),f.removeEventListener("click",ie)}function ne(e){e.code==="Escape"&&T()}function oe(){T()}function ie(e){e.target===f&&T()}function Me(){const e={},t=y.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const n=k.value.trim().replace(/\D/g,"");n?n.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const s=b.value.trim();return s?s.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${s.length}`):e.comment="Введіть коментар",e}function Pe(e){Q(),e.name&&(y.classList.add("is-error"),$.textContent=e.name,$.classList.add("is-visible")),e.phone&&(k.classList.add("is-error"),I.textContent=e.phone,I.classList.add("is-visible")),e.comment&&(b.classList.add("is-error"),q.textContent=e.comment,q.classList.add("is-visible"))}function Q(){y.classList.remove("is-error"),k.classList.remove("is-error"),b.classList.remove("is-error"),$.textContent="",I.textContent="",q.textContent="",$.classList.remove("is-visible"),I.classList.remove("is-visible"),q.classList.remove("is-visible")}async function Te(e){e.preventDefault();const t=Me();if(t.name||t.phone||t.comment){Pe(t);return}Q();const n={name:y.value.trim(),phone:k.value.trim().replace(/\D/g,""),eventId:W,comment:b.value.trim()};try{De(),Re(),_.disabled=!0;const{data:s}=await u.post(`${qe}/orders`,n),{eventName:o,orderNum:i}=s;x.success({message:`Дякуємо! Ви замовили івент до ${o}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),T(),Ne()}catch(s){s.status===400&&(x.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),console.log(s)),s.status===404&&(x.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3}),console.log(s))}finally{Oe(),Ve(),_.disabled=!1}}function Oe(){_.classList.remove("is-hidden")}function De(){_.classList.add("is-hidden")}const K="dataBooking",g={name:"",phone:"",comment:""};function Ae(){He(),l.addEventListener("input",je)}function He(){const e=JSON.parse(localStorage.getItem(K));console.log(e),e&&(l.elements.name.value=e.name,l.elements.phone.value=e.phone,l.elements.comment.value=e.comment)}function Ne(){localStorage.removeItem(K),l.name="",l.phone="",l.comment=""}function je(e){console.log(e.target),e.target===l.elements.name&&(g.name=e.target.value,console.log(g.name)),e.target===l.elements.phone&&(g.phone=e.target.value,console.log(g.phone)),e.target===l.elements.comment&&(g.comment=e.target.value,console.log(g.comment)),localStorage.setItem(K,JSON.stringify(g))}const ae=document.querySelector(".loader-booking");function Re(){ae.classList.remove("is-hidden")}function Ve(){ae.classList.add("is-hidden")}let p=1,C="all",w=0,O=0;function U(){return window.innerWidth<768?v.LIMIT/2:v.LIMIT}async function Fe(){try{R();const e=U(),[t,n]=await Promise.all([Le(),j(p,C,e)]);xe(t),a.eventsList.innerHTML="",F(n.events),w=n.events.length,O=n.totalItems,G()}catch(e){console.log("error events list",e)}finally{V()}}async function We(e){a.showMoreBtn.classList.add("is-hidden-btn-more");const t=e.target.closest(".event-category-item");if(t)try{R(),C=t.dataset.category,p=1,w=0,a.eventsList.innerHTML="";const n=U(),s=await j(p,C,n);F(s.events),w=s.events.length,O=s.totalItems,G()}catch(n){console.log("error during getting events by category",n)}finally{V()}}async function Qe(){try{R(),a.showMoreBtn.disabled=!0,p+=1;const e=U();a.showMoreBtn.style.opacity="0";const t=await j(p,C,e);if(!t.events.length){a.showMoreBtn.disabled=!0;return}F(t.events),w+=t.events.length,O=t.totalItems,G()}catch(e){console.log("error during getting more events by category",e),p-=1}finally{V(),a.showMoreBtn.style.opacity="1"}}function G(){a.showMoreBtn.classList.remove("is-hidden-btn-more"),w>=O?a.showMoreBtn.disabled=!0:a.showMoreBtn.disabled=!1}async function re(e){const t=e.target.closest(".event-details-btn");if(!t)return;const n=t.dataset.eventId;if(n)try{const s=await $e(n);Ie(s);const o=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");o&&i&&(o.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",J),window.addEventListener("keydown",Y);const r=i.querySelector(".modal-event__order-btn");r&&r.addEventListener("click",Ke)}catch(s){console.log("error during opening event modal",s)}}function J(e){const t=document.querySelector(".event-modal-overlay"),n=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),s=e.target===t;(n||s)&&le()}function Y(e){e.code==="Escape"&&le()}function le(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",J),window.removeEventListener("keydown",Y);const n=t.querySelector(".modal-product");n&&(n.innerHTML="")}}function Ke(e){const t=e.currentTarget.dataset.eventId,n=document.querySelector(".section.event-details-modal"),s=document.querySelector(".event-modal-overlay");if(n&&s){n.classList.add("is-hidden"),s.classList.remove("is-open"),s.removeEventListener("click",J),window.removeEventListener("keydown",Y);const i=s.querySelector(".modal-product");i&&(i.innerHTML="")}Ce(t);const o=document.querySelector(".section.booking-modal");if(o){o.classList.remove("is-hidden"),o.classList.add("is-open"),document.body.classList.add("no-scroll");const i=o.querySelector(".booking-modal_form");if(i){let r=i.querySelector('input[name="eventId"]');r||(r=document.createElement("input"),r.type="hidden",r.name="eventId",i.appendChild(r)),r.value=t}}}u.defaults.baseURL=te;const Z="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWTCjrYnFjj8EYfWdauJQ3dcybEFwaAIuRbQd8SQxu09hdbyzPESKpqs&s=10";async function Ue(){return(await u.get(`${v.EVENTS}?type=popular`)).data}function Ge(e){const t=document.querySelector(".popular-list"),n=e.map(({_id:s,name:o,price:i,category:r,image:c})=>`<li class="swiper-slide event-item">
        <img
          src="${c||Z}"
          alt="${o}"
          width="335"
          height="251"
          onerror="this.onerror=null;this.src='${Z}'"
        />
        <div class="event-info">
          <p class="event-title">${o}</p>
          <p class="event-text">${r.name}</p>
          <p class="event-price">від ${i.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${s}">
          Детальніше
        </button>
      </li>`).join("");t.insertAdjacentHTML("beforeend",n)}async function Je(){try{const t=(await Ue()).events.slice(0,5);Ge(t),document.querySelector(".popular-list").addEventListener("click",re),new A(".popular-swiper",{modules:[H,N],slidesPerView:1,spaceBetween:24,navigation:{prevEl:".popular-button-prev",nextEl:".popular-button-next"},pagination:{el:".popular-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}}})}catch(e){console.log("error popular events",e)}}Je();document.addEventListener("DOMContentLoaded",Fe);a.categoriesListEl.addEventListener("click",We);a.showMoreBtn.addEventListener("click",Qe);a.eventsList.addEventListener("click",re);const ee=document.querySelector(".about-us-slider");ee&&new A(ee,{modules:[H,N],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new fe(".accordion-container",{showMultiple:!1});const Ye=document.querySelector(".feedback-swiper"),ze=document.querySelector(".js-feedback-list"),Xe=375,Ze=768,et=1440,tt="/feedbacks",st={spaceBetween:32,breakpoints:{[Xe]:{slidesPerView:1},[Ze]:{slidesPerView:2},[et]:{slidesPerView:3}},pagination:{el:".feedback-pagination",dynamicBullets:!0},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},modules:[H,N]};new A(Ye,st);ot();async function nt(e=10,t=1){const s={params:{limit:e,page:t}},{data:o}=await u.get(tt,s);return o}async function ot(){try{const{feedbacks:e}=await nt();it(e)}catch(e){x.error({message:"Помилка отримання відгуків",position:"topRight"}),console.log(e)}}function it(e){const t=e.map(at).join("");ze.innerHTML=t}function at({author:e,date:t,description:n,rate:s}){const r=s%1>=.5?"half":"";return`<li class="feedback-item swiper-slide">
  <div class="feedback-content">
    <div class="feedback-raiting rating value-${Math.floor(s)} ${r} ">
      <ul class="star-container">
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
      </ul>
    </div>
    <p class="feedback-text">${n}</p>
  </div>
  <div class="feedback-avatar">
    <p class="feedback-author">${e}</p>
    <p class="feedback-date">${t}</p>
  </div>
</li>`}
//# sourceMappingURL=index.js.map
