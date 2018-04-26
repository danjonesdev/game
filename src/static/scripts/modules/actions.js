import Players from './Players';
import hudControls from './hudControls';

const Actions = {

  init() {
    // this.render();
  },

  renderAttributes() {
    const attrUi = document.querySelector('[data-hud-node="attr-ui"]');
    const curse1 =
    `<div class="attr  attr1" data-attr-ui-evt='{ "node":"attr-ui", "val":"${Players.p1.curse1}", "target":"attr-ui" }'>
    ${Players.p1.curse1}
    </div>`;
    const curse2 =
    `<div class="attr  attr1" data-attr-ui-evt='{ "node":"attr-ui", "val":"${Players.p1.curse2}", "target":"attr-ui" }'>
    ${Players.p1.curse2}
    </div>`;
    const curse3 =
    `<div class="attr  attr1" data-attr-ui-evt='{ "node":"attr-ui", "val":"${Players.p1.curse3}", "target":"attr-ui" }'>
    ${Players.p1.curse3}
    </div>`;

    // Parse
    attrUi.insertAdjacentHTML('beforeend', `${curse1}${curse2}${curse3}`);
    // enable click events for Attributes UI
    hudControls.renderAttrUi();
  }
};

export default Actions;
