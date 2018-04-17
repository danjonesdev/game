const hudState = {
  wait: delay => new Promise(resolve => setTimeout(resolve, delay)),

  init() {
    // this.render();
  },

  hide(elem) {
    const hideUI = async () => {
      // elem.classList.remove('is-invisible');
      // elem.classList.remove('fadeIn');
      elem.classList.add('fadeOut');
    };
    hideUI();
  },

  show(elem) {
    const showUI = async () => {
      await hudState.wait(300);
      elem.classList.remove('is-invisible');
      elem.classList.remove('fadeOut');
      elem.classList.add('fadeIn');
    };
    showUI();
  }
};

export default hudState;
