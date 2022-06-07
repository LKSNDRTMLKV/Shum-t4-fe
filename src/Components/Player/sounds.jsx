const sounds = [
  {
    id: 0,
    name: "birds",
    url: require("../../sounds/birds.ogg").default,
    volume: 100,
    loopStart: 500,
    loopEnd: 377000,
    category: ["forest",],
    icon:  require(`../../imgs/icons/birds.svg`).default,
    main: false
  },

  {
    id: 1,
    name: "cars",
    url: require("../../sounds/cars.ogg").default,
    volume: 100,
    loopStart: 500,
    loopEnd: 70000,
    category: ["coffeeshop",],
    icon:  require(`../../imgs/icons/cars.svg`).default,
    main: false
  },

  {
    id: 2,
    name: "coffeeshop",
    url: require("../../sounds/coffeeshop.ogg").default,
    volume: 100,
    loopStart: 500,
    loopEnd: 29000,
    category: ["coffeeshop",],
    icon:  require(`../../imgs/icons/volume.svg`).default,
    main: true
  },
  {
    id: 3,
    name: "fireplace",
    url: require("../../sounds/fireplace.ogg").default,
    volume: 100,
    loopStart: 500,
    loopEnd: 60000,
    category: ["fireplace",],
    icon:  require(`../../imgs/icons/volume.svg`).default,
    main: true
  },
  {
    id: 4,
    name: "forest",
    url: require("../../sounds/forest.ogg").default,
    volume: 100,
    loopStart: 500,
    loopEnd: 218000,
    category: ["forest",],
    icon:  require(`../../imgs/icons/volume.svg`).default,
    main: true
  },
  {
    id: 5,
    name: "keyboard",
    url: require("../../sounds/keyboard.ogg").default,
    volume: 100,
    loopStart: 500,
    loopEnd: 30000,
    category: ["office",],
    icon:  require(`../../imgs/icons/keyboard.svg`).default,
    main: false
  },
  {
    id: 6,
    name: "music",
    url: require("../../sounds/music.ogg").default,
    volume: 100,
    loopStart: 500,
    loopEnd: 110000,
    category: ["coffeeshop", "office", "fireplace"],
    icon:  require(`../../imgs/icons/music.svg`).default,
    main: false
  },
  {
    id: 7,
    name: "office",
    url: require("../../sounds/office.ogg").default,
    volume: 100,
    loopStart: 500,
    loopEnd: 243000,
    category: ["office",],
    icon:  require(`../../imgs/icons/volume.svg`).default,
    main: true
  },
  {
    id: 8,
    name: "rain",
    url: require("../../sounds/rain.ogg").default,
    volume: 100,
    loopStart: 500,
    loopEnd: 4000,
    category: ["coffeeshop", "office", "fireplace"],
    icon:  require(`../../imgs/icons/rain.svg`).default,
    main: false
  },
  {
    id: 9,
    name: "thunder",
    url: require("../../sounds/thunder.ogg").default,
    volume: 100,
    loopStart: 500,
    loopEnd: 11000,
    category: ["fireplace",],
    icon:  require(`../../imgs/icons/thunder.svg`).default,
    main: false
  },
  {
    id: 10,
    name: "wind",
    url: require("../../sounds/wind.ogg").default,
    volume: 100,
    loopStart: 500,
    loopEnd: 89000,
    category: ["fireplace", "forest"],
    icon:  require(`../../imgs/icons/wind.svg`).default,
    main: false
  },

];

export default sounds;