const BACKGROUND = {
    red50: "red50",
    red60: "red60",
    red70: "red70",
    yellow50: "yellow50",
    yellow60: "yellow60",
    yellow70: "yellow70",
    blue50: "blue50",
    blue60: "blue60",
    blue70: "blue70",
    green50: "green50",
    green60: "green60",
    green70: "green70",
    darkblue30: "darkblue30",
    darkblue50: "darkblue50",
    darkblue70: "darkblue70",
    grey40: "grey40",
    grey70: "grey70",
    grey80: "grey80",
}
const HAIR = {
    default: "default",
    curls: "curls",
    short: "short",
    bang: "bang",
    elegant: "elegant",
    quiff: "quiff",
    fancy: "fancy"
}
const EARS = {
    default: "default",
    tiltBackward: "tilt-backward",
    tiltForward: "tilt-forward",
}
const LEG = {
    default: "default",
    bubbleTea: "bubble-tea",
    cookie: "cookie",
    gameConsole: "game-console",
    tiltBackward: "tilt-backward",
    tiltForward: "tilt-forward"
}
const MOUTH = {
    default: "default",
    astonished: "astonished",
    eating: "eating",
    laugh: "laugh",
    tongue: "tongue",
}
const ACCESSORIES = {
    default: "",
    flower: "flower",
    earings: "earings",
    headphone: "headphone",
    glasses: "glasses",
}
const EYES = {
    default: "default",
    angry: "angry",
    naughty: "naughty",
    panda: "panda",
    smart: "smart",
    star: "star",
};
const NECK = {
    default: "default",
    bendBackward: "bend-backward",
    bendForward: "bend-forward",
    thick: "thick",
}
const NOSE = {
    default: "default",
}
export const ALPACA_ATTRIBUTES = {
    backgrounds: BACKGROUND.darkblue50,
    ears: EARS.default,
    leg: LEG.default,
    neck: NECK.default,
    mouth: MOUTH.default,
    nose: NOSE.default,
    hair: HAIR.default,
    accessories: ACCESSORIES.default,
    eyes: EYES.default,
}
export const ATTRIBUTE_MAP = {
    backgrounds: Object.keys(BACKGROUND),
    leg: Object.values(LEG),
    neck: Object.values(NECK),
    mouth: Object.values(MOUTH),
    ears: Object.values(EARS),
    hair: Object.values(HAIR),
    accessories: Object.values(ACCESSORIES),
    nose: Object.values(NOSE),
    eyes: Object.values(EYES),
};
