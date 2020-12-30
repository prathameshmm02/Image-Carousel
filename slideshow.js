var slidenos = [0, 1, 2, 3, 4];
const slides = document.querySelectorAll(".slide-container img");
const background = document.querySelector(".background-img");
backNext();
function plusSlides(n) {
  showSlides((slidenos[2] += n));
}
function showSlides(n) {
  if (slidenos[2] > 4) {
    slidenos[2] = 0;
  }
  if (slidenos[2] < 0) {
    slidenos[2] = 4;
  }
  switch (slidenos[2]) {
    case 0:
      slidenos = [3, 4, 0, 1, 2];
      background.src = "./assets/picture1.jpg";
      break;
    case 1:
      slidenos = [4, 0, 1, 2, 3];
      background.src = "./assets/picture2.jpg";
      break;
    case 2:
      slidenos = [0, 1, 2, 3, 4];
      background.src = "./assets/picture3.jpg";
      break;
    case 3:
      slidenos = [1, 2, 3, 4, 0];
      background.src = "./assets/picture4.jpg";
      break;
    case 4:
      slidenos = [2, 3, 4, 0, 1];
      background.src = "./assets/picture5.jpg";
      break;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove(
      "first-slide",
      "prev-slide",
      "slide",
      "next-slide",
      "last-slide"
    );
    slides[slidenos[i]].removeEventListener("click", nextSlide);
    slides[slidenos[i]].removeEventListener("click", prevSlide);
  }

  slides[slidenos[0]].classList.add("first-slide");
  slides[slidenos[1]].classList.add("prev-slide");
  slides[slidenos[2]].classList.add("slide");
  slides[slidenos[3]].classList.add("next-slide");
  slides[slidenos[4]].classList.add("last-slide");
  backNext();
}
function backNext() {
  slides[slidenos[1]].addEventListener("click", prevSlide);
  slides[slidenos[3]].addEventListener("click", nextSlide);
}
function nextSlide() {
  plusSlides(+1);
}
function prevSlide() {
  plusSlides(-1);
}
