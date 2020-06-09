const spells = [
  { name: "Magic Arrow", rate: 10, power: [10, 20, 30] },
  { name: "Fire Wall", rate: 10, power: [10, 20, 30] },
  { name: "Fire Ball", rate: 10, power: [15, 30, 60] },
  { name: "Land Mine", rate: 10, power: [25, 50, 100] },
  { name: "Armageddon", rate: 50, power: [30, 60, 120] },
  { name: "Inferno", rate: 10, power: [25, 50, 80] },
  { name: "Lightning Bolt", rate: 25, power: [10, 20, 30] },
  { name: "Chain Lightning", rate: 40, power: [25, 50, 100] },
  { name: "Ice Bolt", rate: 20, power: [10, 20, 30] },
  { name: "Frost Ring", rate: 10, power: [15, 30, 60] },
  { name: "Death Ripple", rate: 5, power: [10, 20, 30] },
  { name: "Meteor Shower", rate: 25, power: [25, 50, 100] },
  { name: "Implosion", rate: 75, power: [100, 200, 300] },
];
const magicLvl = document.querySelector(".magic-lvl");
const magic = document.querySelector(".magic");
const magicLvlCointainer = document.querySelector(".magic-lvl-container");
const spellpower = document.querySelector(".spellpower");

const spell = document.querySelector(".spell");
const finalButton = document.querySelector(".final-button");
const result = document.querySelector(".result");
console.log(spellpower);
console.log(spell);
console.log(magic.checked);

const calculateValue = () => {
  const spellObj = spells.find((el) => el.name === spell.value);
  const spellRate = parseInt(spellObj.rate);
  let finalValue;
  if (magic.checked === false) {
    finalValue = spellRate * parseInt(spellpower.value) + spellObj.power[0];
  } else {
    finalValue =
      spellRate * parseInt(spellpower.value) +
      spellObj.power[parseInt(magicLvl.value) - 1];
  }
  console.log(parseInt(spellObj.rate));
  result.innerHTML = finalValue;
  console.log(
    spellRate * parseInt(spellpower.value) + parseInt(magicLvl.value)
  );
};
const toggleMagicLvl = () => {
  if (magic.checked === false) {
    magicLvlCointainer.classList.add("hide");
  } else {
    magicLvlCointainer.classList.remove("hide");
  }
};
finalButton.addEventListener("click", calculateValue);
magic.addEventListener("change", toggleMagicLvl);

const allSpells = document.querySelectorAll(".img-spell")
const fire = document.querySelectorAll(".fire");
const earth = document.querySelectorAll(".earth");
const air = document.querySelectorAll(".air");
const water = document.querySelectorAll(".water");

allSpells.forEach(singleSpell => singleSpell.style.display = "none" );
fire.forEach(fire => fire.style.display = "inline-flex");