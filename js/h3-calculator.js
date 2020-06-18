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

const allSpells = document.querySelectorAll(".img-spell");
const fire = document.querySelectorAll(".fire");
const earth = document.querySelectorAll(".earth");
const air = document.querySelectorAll(".air");
const water = document.querySelectorAll(".water");
const magicFire = document.querySelector(".magic-fire");
const magicAir = document.querySelector(".magic-air");
const magicEarth = document.querySelector(".magic-earth");
const magicWater = document.querySelector(".magic-water");
const magicAll = document.querySelector(".magic-all");

const showFire = () => {
  allSpells.forEach((singleSpell) => (singleSpell.style.display = "none"));
  fire.forEach((fire) => (fire.style.display = "inline-flex"));
};
magicFire.addEventListener("click", showFire);

const showAir = () => {
  allSpells.forEach((singleSpell) => (singleSpell.style.display = "none"));
  air.forEach((air) => (air.style.display = "inline-flex"));
};
magicAir.addEventListener("click", showAir);

const showWater = () => {
  allSpells.forEach((singleSpell) => (singleSpell.style.display = "none"));
  water.forEach((water) => (water.style.display = "inline-flex"));
};
magicWater.addEventListener("click", showWater);

const showEarth = () => {
  allSpells.forEach((singleSpell) => (singleSpell.style.display = "none"));
  earth.forEach((earth) => (earth.style.display = "inline-flex"));
};
magicEarth.addEventListener("click", showEarth);

const showAll = () => {
  allSpells.forEach(
    (singleSpell) => (singleSpell.style.display = "inline-flex")
  );
};
magicAll.addEventListener("click", showAll);


allSpells.forEach((spell) =>
  spell.addEventListener("click", () => {
    console.log(spell.dataset.spellName);
  })
);

const allCreatures = document.querySelectorAll(".img-creature");
const castleCreatures = document.querySelectorAll(".castle-creature");
const rampartCreatures = document.querySelectorAll(".rampart-creature")
const towerCreatures = document.querySelectorAll(".tower-creature")
const infernoCreatures = document.querySelectorAll(".inferno-creature")
const necropolisCreatures = document.querySelectorAll(".necropolis-creature")
const dungeonCreatures = document.querySelectorAll(".dungeon-creature")
const strongholdCreatures = document.querySelectorAll(".stronghold-creature")
const fortressCreatures = document.querySelectorAll(".fortress-creature")
const confluxCreatures = document.querySelectorAll(".conflux-creature")
const coveCreatures = document.querySelectorAll(".cove-creature")
const neutralCreatures = document.querySelectorAll(".neutral-creature")
const townCastle = document.querySelector(".castle");
const townRampart = document.querySelector(".rampart");
const townTower = document.querySelector(".tower");
const townInferno = document.querySelector(".inferno");
const townNecropolis = document.querySelector(".necropolis");
const townDungeon = document.querySelector(".dungeon");
const townStronghold = document.querySelector(".stronghold");
const townFortress = document.querySelector(".fortress");
const townConflux = document.querySelector(".conflux");
const townCove = document.querySelector(".cove");
const townNeutral = document.querySelector(".neutral");
const showCastle = () => {
  allCreatures.forEach(
    (singleCreature) => (singleCreature.style.display = "none")
  );
  castleCreatures.forEach(
    (castleCreatures) => (castleCreatures.style.display = "inline-flex")
  );
};
townCastle.addEventListener("click", showCastle);

const showRampart = () => {
  allCreatures.forEach(
    (singleCreature) => (singleCreature.style.display = "none")
  );
  rampartCreatures.forEach(
    (rampartCreatures) => (rampartCreatures.style.display = "inline-flex")
  );
};
townRampart.addEventListener("click", showRampart);

const showTower = () => {
  allCreatures.forEach(
    (singleCreature) => (singleCreature.style.display = "none")
  );
  towerCreatures.forEach(
    (towerCreatures) => (towerCreatures.style.display = "inline-flex")
  );
};
townTower.addEventListener("click", showTower);

const showInferno = () => {
  allCreatures.forEach(
    (singleCreature) => (singleCreature.style.display = "none")
  );
  infernoCreatures.forEach(
    (infernoCreatures) => (infernoCreatures.style.display = "inline-flex")
  );
};
townInferno.addEventListener("click", showInferno);

const showNecropolis = () => {
  allCreatures.forEach(
    (singleCreature) => (singleCreature.style.display = "none")
  );
  necropolisCreatures.forEach(
    (necropolisCreatures) => (necropolisCreatures.style.display = "inline-flex")
  );
};
townNecropolis.addEventListener("click", showNecropolis);

const showDungeon = () => {
  allCreatures.forEach(
    (singleCreature) => (singleCreature.style.display = "none")
  );
  dungeonCreatures.forEach(
    (dungeonCreatures) => (dungeonCreatures.style.display = "inline-flex")
  );
};
townDungeon.addEventListener("click", showDungeon);

const showStronghold = () => {
  allCreatures.forEach(
    (singleCreature) => (singleCreature.style.display = "none")
  );
  strongholdCreatures.forEach(
    (strongholdCreatures) => (strongholdCreatures.style.display = "inline-flex")
  );
};
townStronghold.addEventListener("click", showStronghold);

const showFortress = () => {
  allCreatures.forEach(
    (singleCreature) => (singleCreature.style.display = "none")
  );
  fortressCreatures.forEach(
    (fortressCreatures) => (fortressCreatures.style.display = "inline-flex")
  );
};
townFortress.addEventListener("click", showFortress);

const showConflux = () => {
  allCreatures.forEach(
    (singleCreature) => (singleCreature.style.display = "none")
  );
  confluxCreatures.forEach(
    (confluxCreatures) => (confluxCreatures.style.display = "inline-flex")
  );
};
townConflux.addEventListener("click", showConflux);

const showCove = () => {
  allCreatures.forEach(
    (singleCreature) => (singleCreature.style.display = "none")
  );
  coveCreatures.forEach(
    (coveCreatures) => (coveCreatures.style.display = "inline-flex")
  );
};
townCove.addEventListener("click", showCove);

const showNeutral = () => {
  allCreatures.forEach(
    (singleCreature) => (singleCreature.style.display = "none")
  );
  neutralCreatures.forEach(
    (neutralCreatures) => (neutralCreatures.style.display = "inline-flex")
  );
};
townNeutral.addEventListener("click", showNeutral);