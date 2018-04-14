const hudState = {
  wait: delay => new Promise(resolve => setTimeout(resolve, delay)),

  init() {
    // this.render();
  },

  hide(elem) {
    const hideMoveUI = async () => {
      elem.classList.remove('is-invisible');
      elem.classList.remove('fadeIn');
      elem.classList.add('fadeOut');
    };
    hideMoveUI();
  },

  show(elem) {
    const hideMoveUI = async () => {
      await hudState.wait(300);
      elem.classList.remove('is-invisible');
      elem.classList.remove('fadeOut');
      elem.classList.add('fadeIn');
    };
    hideMoveUI();
  }
};

export default hudState;
