const cards = document.querySelectorAll('.plate');

cards.forEach(function(card) {card.classList.add('none')}); 

let currentCard = 0; // для перемещений по карточкам
let currentCardIndex = 0; // для прогресс бара

// скрываем кнопку назад на первой карточке
cards[0].querySelector('[data-nav="prev"]').remove();

cards[currentCard].classList.remove('none');
cards[currentCard].classList.add('visible');

updateProgressBar();

window.addEventListener('click', function(event) {

    if (event.target.closest('[data-nav="next"]')) {
       
        const result = checkAnswer(cards[currentCard]); // передаем текущую карточку
        const answersWrapper = cards[currentCard].querySelector('[data-answers]');

        if (result) {
            // увеличиваем индекс текущего прогресс бара
            updateProgressBar('next');
            
            setTimeout(function () {
                // скрываем текущую карточку
                cards[currentCard].classList.remove('visible');
        
                setTimeout(function () {
                    // добавляем класс 'none' для скрытия текущей карточки
                    cards[currentCard].classList.add('none');
        
                    // меняем индекс текущей карточки
                    currentCard = currentCard + 1;
        
                    // удаляем класс 'required' и форму об ошибке
                    answersWrapper.classList.remove('required');
        
                    // показываем новую карточку
                    if (currentCard < cards.length) {
                        cards[currentCard].classList.remove('none'); // удаляем класс 'none' с новой карточки
                        cards[currentCard].classList.add('visible'); // добавляем класс 'visible' к новой карточке
                    }
                }, 100); // задержка перед переключением карточек
            }, 500); // задержка перед скрытием текущей карточки
        
        } else {
            console.log('error');
            // добавляем класс 'required' иформация об ошибке
            answersWrapper.classList.add('required');
        }
    }        

    if (event.target.closest('[data-nav="prev"]')) {

        updateProgressBar('prev');
        
        setTimeout(function() {
            if (currentCard == 0) return;
            
            // скрываем текущую карточку
            cards[currentCard].classList.remove('visible');

            // меняем индекс текущей карточки
            currentCard = currentCard - 1;

            // показываем новую карточку
            cards[currentCard].classList.add('visible');
            
        }, 500);
    };
    
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

function updateProgressBar(direction = 'start') {

    
    if (direction === 'next') {
        currentCardIndex = currentCardIndex + 1;
    } else if (direction === 'prev') {
        currentCardIndex = currentCardIndex - 1;
    } 




    const progressValue = document.querySelectorAll('.progress__label strong');
    console.log(progressValue);


    const progressBar = document.querySelectorAll('.progress__line-bar');
    console.log(progressBar);

    const countProgCards = document.querySelectorAll('[data-progress]').length;
    console.log(countProgCards);

    const progress = Math.round((currentCardIndex * 100) / countProgCards);
    console.log(progress);


    progressValue.forEach(function(item) {
        item.innerText = progress + '%';
    });
    
    progressBar.forEach(function(item) {
        item.style.width = progress + '%';
    });
    
}


updateProgressBar();

const checkBoxPolicy = document.querySelector('#policy');

checkBoxPolicy.addEventListener('focus', function() {
    
    this.closest('label').classList.add('hovered');
});

checkBoxPolicy.addEventListener('blur', function() {
    
    this.closest('label').classList.remove('hovered');
});

mask('#tel');
const submitForm = document.querySelector('#submitForm');
const telInput = document.querySelector('#tel');

submitForm.onclick = function() {
    if (telInput.value === '+' || telInput.value.length < 6) {
        telInput.value = '';
    }
};