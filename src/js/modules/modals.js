const modals = () => {
    //создать функцию для реализации 1 и 2 пункта ТЗ
    function modal(openSelector, modalSelector, closeSelector) {
        //сначала получить элементы со страницы
        const open = document.querySelectorAll(openSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        
        
        open.forEach(item => {
            //для элементов, которые ссылки(а не кнопки - отключить стандартное поведение) - if(e.target) через него 
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }
                modal.style.display = 'block';
                //чтоб не листалось всё для бади сделать стайл оверфлоу в хайдн
                document.body.style.overflow = 'hidden';
            });
        });
        
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            //тут как раз определяется подложка, а само модальное окно уже будет то, что внутри
            if(e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    
    }

    function showModalAfterOpen(selector, time) {
        setTimeout(() => {
            const module = document.querySelector(selector);
            module.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    //1 пункт
    modal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    //2 пункт
    modal('.phone_link', '.popup', '.popup_close');
    //10 пункт
    //showModalAfterOpen('.popup', 6000);
    
};

export default modals;