import hudState from './hudState';

const hudControls = {
  classControl: document.querySelector('[data-player-classControl]'),

  init() {
    this.render();
  },

  render() {
    for (let i = 0; i < this.classControl.length; i += 1) {
      this.classControl[i].addEventListener('click', () => {
        // TODO: set player class
        // hide class picker
        hudState.hide();
        // TODO: show weapon picker
      }, false);
    }
  }
};

export default hudControls;
