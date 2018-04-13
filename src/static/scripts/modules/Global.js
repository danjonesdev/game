const Global = {
  elem: document.querySelector('#js-tabs'),
  item: document.querySelectorAll('[data-tab-item]'),
  btn: document.querySelectorAll('[data-tab-target]'),
  p1: {
    name: null,
    hp: null,
    mp: null,
    type: null,
    weapons: {
      weapon1: null,
      weapon2: null
    },
    armour: {
      head: null,
      body: null,
      legs: null
    },
    abilities: {
      ability1: null,
      ability2: null,
      ability3: null
    }
  },
  p2: {
    name: null,
    hp: null,
    mp: null,
    type: null,
    weapons: {
      weapon1: null,
      weapon2: null
    },
    armour: {
      head: null,
      body: null,
      legs: null
    },
    abilities: {
      ability1: null,
      ability2: null,
      ability3: null
    }
  },

  init() {
    // this.render();
  }
};

export default Global;
