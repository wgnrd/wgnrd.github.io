document.addEventListener("DOMContentLoaded",function(){const s=document.querySelectorAll(".photos .card"),e=document.createElement("div");e.className="photo_modal",e.innerHTML=`
    <span class="photo_modal_close">&times;</span>
    <img class="photo_modal_image" src="" alt="" />
    <div class="photo_modal_info">
      <div class="photo_modal_date"></div>
      <div class="photo_modal_description"></div>
    </div>
  `,document.body.appendChild(e);const n=e.querySelector(".photo_modal_image"),o=e.querySelector(".photo_modal_date"),i=e.querySelector(".photo_modal_description"),a=e.querySelector(".photo_modal_close");s.forEach(t=>{t.style.cursor="pointer",t.addEventListener("click",function(){const s=t.querySelector(".card_image"),a=t.querySelector(".card_date"),r=t.querySelector(".card_text");n.src=s.src,n.alt=s.alt,o.textContent=a.textContent,i.textContent=r.textContent,e.classList.add("photo_modal_active"),document.body.style.overflow="hidden"})});function t(){e.classList.remove("photo_modal_active"),document.body.style.overflow=""}a.addEventListener("click",t),e.addEventListener("click",function(n){n.target===e&&t()}),document.addEventListener("keydown",function(n){n.key==="Escape"&&e.classList.contains("photo_modal_active")&&t()})})