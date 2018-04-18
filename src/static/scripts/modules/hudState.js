const hudState = {
  wait: delay => new Promise(resolve => setTimeout(resolve, delay)),
  disabledEvts: [],

  init() {
    // this.render();
  },

  hide(node) {
    const hideUI = async () => {
      // disable node
      hudState.disabledEvts.push(node);
      // hide node
      node.classList.add('fadeOut');
    };
    hideUI();
  },

  show(disabledNode, target) {
    const showUI = async () => {
      await hudState.wait(300);
      // show node
      target.classList.remove('is-invisible');
      target.classList.remove('fadeOut');
      target.classList.add('fadeIn');

      // re-enable node
      const index = hudState.disabledEvts.indexOf(disabledNode);
      if (index !== -1) {
        hudState.disabledEvts.splice(index, 1);
      }
    };
    showUI();
  }
};

export default hudState;
