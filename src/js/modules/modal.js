const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) { /* функция отвечающая за привязку модального окна к тригеру */
    const trigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    close = document.querySelector(closeSelector);


        trigger.forEach(item => {
            item.addEventListener('click', (e)=> {
                if(e.target){
                    e.preventDefault(); /* отмена стандартного поведения */
                }
                modal.style.display = 'block';
               /*  document.body.classList.add('modal-open'); */ /* второй способ открытия модалки */
                document.body.style.overflow = 'hidden'; /* чтобы нельзя было скроллить при открытии модалки убираем скролл */
    
            });
        });


        close.addEventListener('click', () => {
            modal.style.display = 'none';
           /*  document.body.classList.remove('modal-open'); */
            document.body.style.overflow = ''; 
        });

        modal.addEventListener('click', (e) => { /* если клик за область модалки закрывает ее */
            if(e.target === modal){
                modal.style.display = 'none';
               /*  document.body.classList.remove('modal-open'); */
                document.body.style.overflow = '';
            }
        });


    }

    function showModalByTime(selector, time){
        setTimeout(function() {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = 'hidden'; 
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup_engineer .popup_close');
    /* showModalByTime('.popup', 60000); */
};

export default modals;