/* eslint-disable import/no-named-as-default, import/no-named-as-default-member */
import hudState from './hudState';
import Players from './Players';

const hudControls = {
  hudEvtElem: document.querySelectorAll('[data-hud-evt]'),

  init() {
    this.render();
  },

  hudEvt(elem) {
    const item = JSON.parse(elem.getAttribute('data-hud-evt'));
    const node = document.querySelector(`[data-hud-node="${item.node}"]`);
    const attrType = item.attrType;
    const val = item.val;
    const target = document.querySelector(`[data-hud-node="${item.target}"]`);

    // checks if current elem disabled
    if (hudState.disabledEvts.includes(node)) return;

    async function go() {
      // hide + disable curent node
      await hudState.hide(node);
      // set val
      Players.p1[attrType] = val;
      // show + re-enable target node
      await hudState.show(node, target);
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
