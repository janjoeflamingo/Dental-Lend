import style from "./assets/styles/main.scss";
import MainSlider from "./blocks/main-slider/MainSlider.js";
//*****************************************************************

//               remove comment to support pwa

// import runtime from 'serviceworker-webpack-plugin/lib/runtime';

// if ('serviceWorker' in navigator) {
//     const registration = runtime.register();
// }



//*****************************************************************

new MainSlider();
