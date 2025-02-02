let lastClickTime = 0; // Время последнего клика
const doubleClickThreshold = 300; // Порог времени для быстрого нажатия (300 мс)

const coin = document.getElementById("coin");
const coinContainer = document.getElementById("coin-container");

coin.addEventListener("click", function(e) {
    const currentTime = Date.now();
    
    // Проверка, если время между кликами меньше порога
    if (currentTime - lastClickTime <= doubleClickThreshold) {
        // Если быстрое нажатие, добавляем класс для изменения цвета
        coin.classList.add("red");

        // Убираем красный цвет через 0.2 секунды (анимированный эффект)
        setTimeout(() => {
            coin.classList.remove("red");
        }, 200); // 0.2 секунды
    }

    // Создаем элемент "+1"
    const plus = document.createElement("div");
    plus.classList.add("plus-animation");
    plus.textContent = "+1";
    
    // Получаем координаты нажатия относительно родительского контейнера
    const rect = coin.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    // Позиционируем его относительно места нажатия
    plus.style.left = ${offsetX}px;
    plus.style.top = ${offsetY}px;

    // Добавляем элемент "+1" на страницу
    coinContainer.appendChild(plus);

    // Убираем элемент "+1" через 1 секунду
    setTimeout(() => {
        plus.remove();
    }, 1000);

    // Создаем анимацию для какашки
    const poop = document.createElement("div");
    poop.classList.add("poop-animation");
    poop.textContent = "💩"; // Эмодзи какашки

    // Позиционируем какашку в том месте, где произошло нажатие
    poop.style.left = ${offsetX + (Math.random() - 0.5) * 50}px; // Немного случайного смещения
    poop.style.top = ${offsetY + (Math.random() - 0.5) * 50}px; // Немного случайного смещения

    // Добавляем какашку в контейнер
    coinContainer.appendChild(poop);

    // Убираем какашку через 2 секунды (анимированный эффект)
    setTimeout(() => {
        poop.remove();
    }, 2000);

    // Обновляем время последнего клика
    lastClickTime = currentTime;
});