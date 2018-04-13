// import Fetch from './containers/Fetch';
import Global from './modules/Global';

class App {
  constructor() {
    this.modules = [
      UI, Global
    ];

    document.documentElement.className = 'js';

    // init all necessary modules
    this.modules.forEach((module) => {
      module.init();
    });

    // this.loadAnalytics();
  }
}

window.addEventListener('load', () => new App());

// init() {
//   const wait = delay => new Promise(resolve => setTimeout(resolve, delay));
//
//   const hideMoveUI = async () => {
//     console.log('hideMoveUIs');
//     await wait(3000);
//     console.log('hideMoveUI');
//   };
//
//   const startAnim = async () => {
//     await wait(500);
//     console.log('startAnim');
//   };
//
//   const setstats = async () => {
//     console.log('setstats');
//   };
//
//   const startAnimPlayer2 = async () => {
//     await wait(500);
//     console.log('startAnimPlayer2');
//   };
//
//   async function printAll() {
//     await hideMoveUI();
//     await startAnim();
//     await setstats();
//     await startAnimPlayer2();
//   }
//
//   printAll().catch((e) => { console.log(e); });
// },
