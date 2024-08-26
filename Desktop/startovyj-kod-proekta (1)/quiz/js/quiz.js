const cards = document.querySelectorAll('.plate');

let currentCard = 0;

// скрываем кнопку назад на первой карточке
cards[0].querySelector('[data-nav="prev"]').remove();

cards[currentCard].classList.add('visible');

window.addEventListener('click', function(event) {

    if (event.target.closest('[data-nav="next"]')) {
       
        const result = checkAnswer(cards[currentCard]); // передаем текущую карточку
        const answersWrapper = cards[currentCard].querySelector('[data-answers]');

        if (result) {
        
            // скрываем текущую карточку
            cards[currentCard].classList.remove('visible');

            // меняем индекс текущей карточки
            currentCard = currentCard + 1;

            // удаляем класс 'required' и форму об ошибке
            answersWrapper.classList.remove('required');

            // показываем новую карточку
            if (currentCard < cards.length) {
                cards[currentCard].classList.add('visible');
                
            }
        } else {
            console.log('error');
            // добавляем класс 'required' иформация об ошибке
            answersWrapper.classList.add('required');
        }
    }

    if (event.target.closest('[data-nav="prev"]')) {
        
        if (currentCard == 0) return;
            
        // скрываем текущую карточку
        cards[currentCard].classList.remove('visible');

        // меняем индекс текущей карточки
        currentCard = currentCard - 1;

        // показываем новую карточку
        cards[currentCard].classList.add('visible');
    }
});

function checkAnswer(currentCardElement) {
    // Проверка на активные радио-кнопки
    const radioBtns = currentCardElement.querySelectorAll('input[type="radio"]');
    
    if (radioBtns.length > 0) {
        for (let radio of radioBtns) if (radio.checked) return true;
    }

    // Если ни одна радио-кнопка не выбрана, проверяем чекбоксы
    const checkBoxes = currentCardElement.querySelectorAll('input[type="checkbox"]');

    if (checkBoxes.length > 0) {
        for (let checkbox of checkBoxes) if (checkbox.checked) return true;
    }

    // Возвращаем false, если ни одна радио-кнопка и ни один чекбокс не выбраны
    return false;
}

function updateProgressBar() {
    const progressValue = document.querySelector('.progress__label strong');
    console.log(progressValue);


    const progressBar = document.querySelector('.progress__line-bar');
    console.log(progressBar);
    
}

updateProgressBar();