/* eslint-disable import/no-named-as-default, import/no-named-as-default-member */
import hudState from './hudState';
import Players from './Players';
import actions from './actions';

const hudControls = {
  init() {
    this.renderPlayerConfig();
  },

  playerConfigHudEvt(elem) {
    const item = JSON.parse(elem.getAttribute('data-player-config-evt'));
    const node = document.querySelector(`[data-hud-node="${item.node}"]`);
    const val = item.val;
    const target = document.querySelector(`[data-hud-node="${item.target}"]`);

    // checks if current elem disabled
    if (hudState.disabledEvts.includes(node)) return;

    async function action() {
      // hide + disable curent node
      await hudState.hide(node);
      // Sets player attribute
      Players.p1[node.getAttribute('data-hud-node')] = val;
      // show + re-enable target node
      await hudState.show(node, target);

      // init game
      if (target.getAttribute('data-hud-node') === 'attr-ui') {
        // TODO: Sets player2 attributes
        // TODO: Parses attributes to attributes UI
        actions.renderAttributes();
        // Shows attributes UI
        await hudState.show(node, target);
        // TODO: Start round 1
      }
    }
    action();
  },

  attrUiHudEvt(elem) {
    console.log(elem);
  },

  renderPlayerConfig() {
    // player config evt
    const playerConfigHud = document.querySelectorAll('[data-player-config-evt]');
    for (let i = 0; i < playerConfigHud.length; i += 1) {
      playerConfigHud[i].addEventListener('click', () => {
        hudControls.playerConfigHudEvt(playerConfigHud[i]);
      }, false);
    }
  },

  renderAttrUi() {
    // player config evt
    const attrUiHud = document.querySelectorAll('[data-attr-ui-evt]');
    for (let i = 0; i < attrUiHud.length; i += 1) {
      attrUiHud[i].addEventListener('click', () => {
        hudControls.attrUiHudEvt(attrUiHud[i]);
      }, false);
    }
  }
};

export default hudControls;
