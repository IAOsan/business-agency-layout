class UI{constructor(){this.menu=document.querySelector(".navbar__button "),this.navbar=document.querySelector(".navbar"),this.video=document.querySelector(".videoBox__video"),this.videoBtn=document.querySelector(".videoBox__btn"),this.videoBarProgess=document.querySelector(".videoBox__bar")}showNavigation(){this.menu.addEventListener("click",(()=>{this.navbar.classList.toggle("navbar--change")}))}videoControl(){const e=e=>{this.videoBtn.firstElementChild.className=`${e} videoBox__icon`},t=e=>{this.video.style.opacity=`${e}`},i=()=>{this.video.paused?(this.video.play(),t(.7),e("far fa-pause-circle")):(e("far fa-play-circle"),t(.3),this.video.pause())},o=()=>{const i=this.video.currentTime/this.video.duration*100;this.videoBarProgess.style.width=`${i}%`,100===i&&(e("fas fa-redo-alt"),t(.3))};this.videoBtn.addEventListener("click",(()=>{i(),this.video.addEventListener("timeupdate",o)}))}}window.addEventListener("DOMContentLoaded",(()=>{const e=new UI;e.showNavigation(),e.videoControl();new Swiper(".swiper-container",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:70,stretch:0,depth:100,modifier:1,slideShadows:!0}})}));