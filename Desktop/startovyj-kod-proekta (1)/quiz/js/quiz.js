const cards = document.querySelectorAll('.plate');

let currentCard = 0;

//скрываем кнопку назад на первой карточке
cards[0].querySelector('[data-nav="prev"]').remove();

cards[currentCard].classList.add('visible')



window.addEventListener('click', function(event) {

    if (event.target.closest('[data-nav="next"]')) {
       
        //скрываем текущую карточку
        cards[currentCard].classList.remove('visible');

        // меняем индекс текущей карточки
        currentCard = currentCard + 1;

        // показываем новую карточку
        cards[currentCard].classList.add('visible');
    }

    if (event.target.closest('[data-nav="prev"]')) {
        
        if (currentCard == 0) {
            return
        }
        // скрываем текущую карточку
        cards[currentCard].classList.remove('visible');

        // меняем индекс текущей карточки
        currentCard = currentCard - 1;

        

        // показываем новую карточку
        cards[currentCard].classList.add('visible');
    }
    
});