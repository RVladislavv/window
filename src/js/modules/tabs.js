const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    //заголовок, таб, контент, активный класс - селекторы
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    //5 и 7 пункты
    //реализовать две функции для скрытия и показа контента табов(по умолчания добавить 0)
    function hideTabContent() {
        //сначала перебираем все табы и удаляем класс активности
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
        //потом перебираем весь контент и ставим дисплей ноно
        content.forEach(item => {
            item.style.display = 'none';
        });
    }

    function showTabContent(i = 0) {
        //у таба добавляем класс активности
        tab[i].classList.add(activeClass);
        //у i-того элемента из массива контента ставим дисплей блок
        content[i].style.display = 'block';
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const el = e.target;
        const elClass = tabSelector.replace(/\./, ''); //убираем точку перед классом через регулярку
        //проверка на существование и что попали на элемент или его дочерний элемент(проверка через класс)
        if (el && (el.classList.contains(elClass) || el.parentNode.classList.contains(elClass))) {
            //перебираем все табы, если нужный равен евент таргету, то берём его порядковый номер(в фо ич итем и)
            tab.forEach((item, i) => {
                if (item == el || item == el.parentNode) {
                    //и вызваем функцию скрытия и показа(с передачей и)
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;