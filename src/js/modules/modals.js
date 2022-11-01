const modals = () => {
    //создать функцию для реализации 1 и 2 пункта ТЗ
    function modal(openSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        //сначала получить элементы со страницы
        const open = document.querySelectorAll(openSelector);
        const mod = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]'); //передача дата атрибута, чтоб закрыть все окна
        const scroll = calcScroll();
        
        
        open.forEach(item => {
            //для элементов, которые ссылки(а не кнопки - отключить стандартное поведение) - if(e.target) через него 
            item.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }
                //закрытие всех модальных окон(если например в следствии перехода/попапа вылезло несколько)
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                mod.style.display = 'block';
                //чтоб не листалось всё для бади сделать стайл оверфлоу в хайдн
                document.body.style.overflow = 'hidden';
                //при исчезновении прокрутки, чтоб страница не дёргалась
                document.body.style.marginRight = `${scroll}px`;
            });
        });
        
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            mod.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });

        

        mod.addEventListener('click', (e) => {
            //тут как раз определяется подложка, а само модальное окно уже будет то, что внутри
            if(e.target === mod && closeClickOverlay) { //последнее - параметр, если не надо закрывать
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                mod.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
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

    //фича, чтоб сделать отступ справа, при вылезании модальных окон, 
    //чтоб не дергалась страница при исчезании прокрутки
    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    //1 пункт
    modal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    //2 пункт
    modal('.phone_link', '.popup', '.popup_close');
    //10 пункт
    //showModalAfterOpen('.popup', 6000);
    //6
    modal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    modal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    modal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close');
};

export default modals;