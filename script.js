const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function changeSlide(index) {
  // Удаляем класс active у текущего слайда
  slides[currentIndex].classList.remove("active");

  // Обновляем индекс (если вышли за пределы 0 или 1, возвращаем в начало/конец)
  currentIndex = (index + slides.length) % slides.length;

  // Добавляем класс active новому слайду
  slides[currentIndex].classList.add("active");
}

// События для кнопок
nextBtn.addEventListener("click", () => changeSlide(currentIndex + 1));
prevBtn.addEventListener("click", () => changeSlide(currentIndex - 1));
