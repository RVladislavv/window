import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    modals(); //1 и 2 п
    //5 п headerSelector, tabSelector, contentSelector, activeClass
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    //7 п
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    //10 п временно отключен в modals
});