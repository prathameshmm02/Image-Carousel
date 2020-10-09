var slidenos = [0, 1, 2, 3, 4];
const slides = document.getElementsByTagName("img");
console.log(slides);
var scroll = true;
function plusSlides(n) {
  showSlides((slidenos[2] += n));
}
function showSlides(n) {
  console.log(slides);
  if (slidenos[2] > 4) {
    slidenos[2] = 0;
  }
  if (slidenos[2] < 0) {
    slidenos[2] = 4;
  }
  switch (slidenos[2]) {
    case 0:
      slidenos = [3, 4, 0, 1, 2];
      break;
    case 1:
      slidenos = [4, 0, 1, 2, 3];
      break;
    case 2:
      slidenos = [0, 1, 2, 3, 4];
      break;
    case 3:
      slidenos = [1, 2, 3, 4, 0];
      break;
    case 4:
      slidenos = [2, 3, 4, 0, 1];
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
  }
  slides[slidenos[0]].classList.add("first-slide");
  slides[slidenos[1]].classList.add("prev-slide");
  slides[slidenos[2]].classList.add("slide");
  slides[slidenos[3]].classList.add("next-slide");
  slides[slidenos[4]].classList.add("last-slide");
}
