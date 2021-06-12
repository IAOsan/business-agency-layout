class UI {
   constructor() {
      this.menu = document.querySelector('.navbar__button ');
      this.navbar = document.querySelector('.navbar');
      this.video = document.querySelector('.videoBox__video');
      this.videoBtn = document.querySelector('.videoBox__btn');
      this.videoBarProgess = document.querySelector('.videoBox__bar');
   }

   showNavigation() {
      this.menu.addEventListener('click', () => {
         this.navbar.classList.toggle('navbar--change');
      });
   }

   videoControl() {
      const changeIcon = newIcon => {
         const icon = this.videoBtn.firstElementChild;
         icon.className = `${newIcon} videoBox__icon`;
      };
      const changeOpacity = fill => {
         this.video.style.opacity = `${fill}`;
      };
      const playPause = () => {
         if (this.video.paused) {
            this.video.play();
            changeOpacity(0.7);
            changeIcon('far fa-pause-circle');
         } else {
            changeIcon('far fa-play-circle');
            changeOpacity(0.3);
            this.video.pause();
         }
      };
      const progress = () => {
         // calc the width
         const percentage =
            (this.video.currentTime / this.video.duration) * 100;
         // define width of the element
         this.videoBarProgess.style.width = `${percentage}%`;
         // change icon to reload
         if (percentage === 100) {
            changeIcon('fas fa-redo-alt');
            changeOpacity(0.3);
         }
      };

      this.videoBtn.addEventListener('click', () => {
         playPause();
         this.video.addEventListener('timeupdate', progress); // executes every time reproduction changes
      });
   }
}

window.addEventListener('DOMContentLoaded', () => {
   const ui = new UI();
   // navigation
   ui.showNavigation();
   // video
   ui.videoControl();
   // pricing cards
   let swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
         rotate: 70,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
      },
   });
});
