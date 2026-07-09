// 1. Находим абсолютно все блоки каруселей на странице
const carousels = document.querySelectorAll(".carousel");

// 2. Перебираем каждую карусель отдельно
carousels.forEach((carousel) => {
  // Находим элементы конкретно внутри ЭТОЙ текущей карусели
  const slides = carousel.querySelectorAll(".slide");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");

  // У каждой карусели будет свой собственный независимый счетчик слайдов
  let currentIndex = 0;

  function changeSlide(index) {
    // Удаляем активный класс у текущего слайда этой карусели
    slides[currentIndex].classList.remove("active");

    // Зацикливаем индекс в зависимости от количества слайдов в этой карусели
    currentIndex = (index + slides.length) % slides.length;

    // Добавляем активный класс новому слайду
    slides[currentIndex].classList.add("active");
  }

  // Навешиваем события на кнопки именно этой карусели
  nextBtn.addEventListener("click", () => changeSlide(currentIndex + 1));
  prevBtn.addEventListener("click", () => changeSlide(currentIndex - 1));
});
