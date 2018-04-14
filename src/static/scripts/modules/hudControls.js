/* eslint-disable import/no-named-as-default, import/no-named-as-default-member */
import hudState from './hudState';
import Players from './Players';

const hudControls = {
  classControl: document.querySelectorAll('[data-player-class-control]'),

  init() {
    this.render();
  },

  classPick(elem) {
    async function printAll() {
      const classPicker = document.querySelector('[data-hud="class-picker"]');
      const weaponPicker = document.querySelector('[data-hud="weapon-picker"]');
      const classVal = elem.getAttribute('data-player-class-control');
      await hudState.hide(classPicker);
      Players.p1.class = classVal;
      await hudState.show(weaponPicker);
      console.log(Players.p1.class);
    }
    printAll();
  },

  render() {
    // Hide class picker > Set class > Show weapon picker
    for (let i = 0; i < this.classControl.length; i += 1) {
      this.classControl[i].addEventListener('click', () => {
        hudControls.classPick(this.classControl[i]);
      }, false);
    }
  }
};

export default hudControls;
