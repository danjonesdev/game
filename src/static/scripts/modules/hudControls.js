/* eslint-disable import/no-named-as-default, import/no-named-as-default-member */
import hudState from './hudState';
import Players from './Players';

const hudControls = {
  hudEvtElem: document.querySelectorAll('[data-hud-evt]'),

  init() {
    this.render();
  },

  hudEvt(elem) {
    // checks if current elem disabled
    if (hudState.disabledEvts.includes(elem)) {
      console.log('disabled');
      return;
    }

    const item = JSON.parse(elem.getAttribute('data-hud-evt'));
    const node = document.querySelector(`[data-hud-node="${item.node}"]`);
    const attrType = item.attrType;
    const val = item.val;
    const target = document.querySelector(`[data-hud-node="${item.target}"]`);

    async function go() {
      // hide curent node
      await hudState.hide(elem, node);
      // set val
      Players.p1[attrType] = val;
      // show target node
      await hudState.show(elem, target);
      // TODO: re-enable current node
    }
    go();
  },

  render() {
    for (let i = 0; i < this.hudEvtElem.length; i += 1) {
      this.hudEvtElem[i].addEventListener('click', () => {
        hudControls.hudEvt(this.hudEvtElem[i]);
      }, false);
    }
  }
};

export default hudControls;
