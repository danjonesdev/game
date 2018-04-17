const hudState = {
  wait: delay => new Promise(resolve => setTimeout(resolve, delay)),
  disabledEvts: [],

  init() {
    // this.render();
  },

  hide(elem, node) {
    const hideUI = async () => {
      hudState.disabledEvts.push(elem);
      node.classList.add('fadeOut');
    };
    hideUI();
  },

  show(elem, target) {
    const showUI = async () => {
      await hudState.wait(300);
      target.classList.remove('is-invisible');
      target.classList.remove('fadeOut');
      target.classList.add('fadeIn');
      const index = hudState.disabledEvts.indexOf(elem);
      if (index !== -1) {
        console.log('remove');
        hudState.disabledEvts.splice(index, 1);
      }
    };
    showUI();
  }
};

export default hudState;
