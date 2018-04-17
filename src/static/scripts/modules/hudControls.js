/* eslint-disable import/no-named-as-default, import/no-named-as-default-member */
import hudState from './hudState';
import Players from './Players';

const hudControls = {
  hudPlayerConfig: document.querySelectorAll('[data-hud-type="player-config"]'),

  init() {
    this.render();
  },

  hudEvt(elem) {
    const item = JSON.parse(elem.getAttribute('data-hud-evt'));

    const node = document.querySelector(`[data-hud-node="${item.node}"]`);
    const attrType = item.attrType;
    const val = item.val;
    const target = document.querySelector(`[data-hud-node="${item.target}"]`);

    async function go() {
      // TODO: disable current node

      // hide curent node
      await hudState.hide(node);
      // set val
      Players.p1[attrType] = val;
      // show target node
      await hudState.show(target);
    }
    go();
  },

  render() {
    for (let i = 0; i < this.hudPlayerConfig.length; i += 1) {
      this.hudPlayerConfig[i].addEventListener('click', () => {
        hudControls.hudEvt(this.hudPlayerConfig[i]);
      }, false);
    }
  }
};

export default hudControls;
