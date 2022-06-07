import "./slider";
import tabs from './modules/tabs';
import modals from "./modules/modal"; 
import timer from './modules/timer';
window.addEventListener("DOMContentLoaded", () =>{
    "use strict";

    let deadline = '2020-02-01';

    
 modals();
 tabs('.glazing_slider','.glazing_block','.glazing_content','active');
 tabs('.decoration_slider',".no_click",".decoration_content > div > div",'after_click');
 timer('.container1', deadline);
});


