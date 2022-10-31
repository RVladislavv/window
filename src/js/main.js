import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    //для расчёта в калькуляторе
    let modalState = {};

    changeModalState(modalState);
    modals(); //1 и 2 п
    //5 п headerSelector, tabSelector, contentSelector, activeClass
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    //7 п
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    //10 п временно отключен в modals
    //6
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState); //3 4 6
});

//для работы нужно прописать gulp
//а так же держать весь проект в опенсервере, открыть папку dist - это финальный вариант