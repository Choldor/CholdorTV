import {
  spells,
  creatures,
  skill,
  orb,
  protections,
} from "./constans.js";
const magicSkill = document.querySelector(".magic-skill");
const magicSkillCointainer = document.querySelector(".magic-skill-container");
const spellpower = document.querySelector(".spell-power-values");
const spell = document.querySelector(".spell");
const finalButton = document.querySelector(".final-button");
const result = document.querySelector(".result");
const magicSkillImg = document.querySelectorAll(".left-img");
const basicMagic = document.querySelector(".basic-magic");
const advanedMagic = document.querySelector(".advanced-magic");
const expertMagic = document.querySelector(".expert-magic");
const orbAir = document.querySelector(".orb-air");
const orbEarth = document.querySelector(".orb-earth");
const orbFire = document.querySelector(".orb-fire");
const orbWater = document.querySelector(".orb-water");
const protectionSpellsContainer = document.querySelector(".protection-spells");
const protection = document.querySelector(".protection");
const allMagicLvl = document.querySelectorAll(".magic-lvl-img");
const magicLvlEarth = document.querySelectorAll(".magic-lvl-earth");
const magicLvlAir = document.querySelectorAll(".magic-lvl-air");
const magicLvlFire = document.querySelectorAll(".magic-lvl-fire");
const magicLvlWater = document.querySelectorAll(".magic-lvl-water");
const basicMagicAir = document.querySelector(".basic-magic-air");
const basicMagicEarth = document.querySelector(".basic-magic-earth");
const basicMagicFire = document.querySelector(".basic-magic-fire");
const basicMagicWater = document.querySelector(".basic-magic-water");
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
const changeImg = document.querySelector(".change-img");
const protectionSpells = document.querySelectorAll(".protection-spell");
const firstCheckboxAir = document.querySelector(".first-checkbox-air");
const secondCheckboxAir = document.querySelector(".second-checkbox-air");
const firstCheckboxEarth = document.querySelector(".first-checkbox-earth");
const secondCheckboxEarth = document.querySelector(".second-checkbox-earth");
const firstCheckboxFire = document.querySelector(".first-checkbox-fire");
const secondCheckboxFire = document.querySelector(".second-checkbox-fire");
const firstCheckboxWater = document.querySelector(".first-checkbox-water");
const secondCheckboxWater = document.querySelector(".second-checkbox-water");

// const calculateValue = () => {
// const spellObj = spells.find((el) => el.name === spell.value);
// const spellRate = parseInt(spellObj.rate);
// let finalValue = spellRate * parseInt(spellpower.value)

// if (magic.checked === false) {
// finalValue = spellRate * parseInt(spellpower.value) + spellObj.power[0];
// } else {
// finalValue =
// spellRate * parseInt(spellpower.value) +
// spellObj.power[parseInt(magicLvl.value) - 1];
// }
// console.log(parseInt(spellObj.rate));
// result.innerHTML = finalValue;
// console.log(
// spellRate * parseInt(spellpower.value)
// );
// };
const toggleMagicSkill = () => {
  if (magicSkill.checked === false) {
    magicSkillCointainer.classList.add("hide-magic-skill");
    removeClassFromMagicSkill();
  } else {
    magicSkillCointainer.classList.remove("hide-magic-skill");
  }
};
const toggleProtectionSpells = () => {
  if (protection.checked === false) {
    protectionSpellsContainer.classList.add("hide-protection");
  } else {
    protectionSpellsContainer.classList.remove("hide-protection");
  }
};
const removeClassFromMagicSkill = () => {
  magicSkillImg.forEach((magicSkillImg) =>
    magicSkillImg.classList.remove("magic-skill-img-active")
  );
};
const showBasicMagic = () => {
  removeClassFromMagicSkill();
  basicMagic.classList.add("magic-skill-img-active");
};
const showAdvancedMagic = () => {
  removeClassFromMagicSkill();
  advanedMagic.classList.add("magic-skill-img-active");
};
const showExpertMagic = () => {
  removeClassFromMagicSkill();
  expertMagic.classList.add("magic-skill-img-active");
};
const removeClassFromMagic = () => {
  allMagicLvl.forEach((magic) => magic.classList.remove("magic-lvl-active"));
};
const removeClassFromMagicLvl = () => {
  allMagicLvl.forEach((oneMagic) =>
    oneMagic.classList.remove("magic-lvl-img-active")
  );
};
const showOneMagicLvl = (oneMagic) => {
  removeClassFromMagicLvl();
  oneMagic.classList.add("magic-lvl-img-active");
};
allMagicLvl.forEach((oneMagic) =>
  oneMagic.addEventListener("click", () => showOneMagicLvl(oneMagic))
);
const showMagicEarth = () => {
  removeClassFromMagic();
  removeClassFromMagicLvl();
  magicLvlEarth.forEach((oneEarthSkill) =>
    oneEarthSkill.classList.add("magic-lvl-active")
  );
  basicMagicEarth.classList.add("magic-lvl-img-active");
};

earth.forEach((oneEarth) => oneEarth.addEventListener("click", showMagicEarth));

const showMagicAir = () => {
  removeClassFromMagic();
  removeClassFromMagicLvl();
  magicLvlAir.forEach((oneAirSkill) =>
    oneAirSkill.classList.add("magic-lvl-active")
  );
  basicMagicAir.classList.add("magic-lvl-img-active");
};

air.forEach((oneAir) => oneAir.addEventListener("click", showMagicAir));

const showMagicFire = () => {
  removeClassFromMagic();
  removeClassFromMagicLvl();
  magicLvlFire.forEach((oneFireSkill) =>
    oneFireSkill.classList.add("magic-lvl-active")
  );
  basicMagicFire.classList.add("magic-lvl-img-active");
};

fire.forEach((oneFire) => oneFire.addEventListener("click", showMagicFire));

const showMagicWater = () => {
  removeClassFromMagic();
  removeClassFromMagicLvl();
  magicLvlWater.forEach((oneWaterSkill) =>
    oneWaterSkill.classList.add("magic-lvl-active")
  );
  basicMagicWater.classList.add("magic-lvl-img-active");
};

water.forEach((oneWater) => oneWater.addEventListener("click", showMagicWater));

basicMagic.addEventListener("click", showBasicMagic);
advanedMagic.addEventListener("click", showAdvancedMagic);
expertMagic.addEventListener("click", showExpertMagic);
magicSkill.addEventListener("change", toggleMagicSkill);
protection.addEventListener("change", toggleProtectionSpells);

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

const removeClassFromSpells = () => {
  allSpells.forEach((spell) => spell.classList.remove("active-spell"));
};
allSpells.forEach((spell) =>
  spell.addEventListener("click", () => {
    removeClassFromSpells();
    console.log(changeImg);
    changeImg.src = spell.src;
    spell.classList.add("active-spell");
  })
);
const removeClassFromProtectionSpell = () => {
  protectionSpells.forEach((protection) =>
    protection.classList.remove("protection-spell-active")
  );
};
protectionSpells.forEach((protection) =>
  protection.addEventListener("click", () => {
    removeClassFromProtectionSpell();
    protection.classList.add("protection-spell-active");
  })
);
const calculateValue = () => {
  const clickedSpellName = document.querySelector(".active-spell").dataset
    .spellName;
  const clickedSpellProperties = spells.find(
    (el) => el.name === clickedSpellName
  );
  const clickedOrbActive = document.querySelector(".orb").dataset.orbName;
  const clickedOrbActiveProperties = orb.find(
    (el) => el.name === clickedOrbActive
  );
  let magicLvlValue = 0;
  if (document.querySelectorAll(".basic.magic-lvl-img-active").length === 1) {
    magicLvlValue = 0;
  } else if (
    document.querySelectorAll(".advanced.magic-lvl-img-active").length === 1
  ) {
    magicLvlValue = 1;
  } else if (
    document.querySelectorAll(".expert.magic-lvl-img-active").length === 1
  ) {
    magicLvlValue = 2;
  }
  let protectionValue = 0;
  if (magicLvlValue === 0) {
    protectionValue = 0;
  } else if (magicLvlValue === 1) {
    protectionValue = 1;
  } else if (magicLvlValue === 2) {
    protectionValue = 1;
  }
  console.log(protectionValue);
  const basicCalculate =
    clickedSpellProperties.rate * parseInt(spellpower.value) +
    clickedSpellProperties.power[magicLvlValue];
  let finalValue = basicCalculate;
  result.innerHTML = finalValue;
  if (magicSkill.checked === true) {
    const clickedSkillLvl = document.querySelector(".magic-skill-img-active")
      .dataset.skillName;
    const clickedSkillLvlProperties = skill.find(
      (el) => el.name === clickedSkillLvl
    );
    finalValue =
      basicCalculate + basicCalculate * clickedSkillLvlProperties.value;
    finalValue = Math.round(finalValue * 1);
    result.innerHTML = finalValue;
  }
  if (
    (orbAir.checked === true && clickedSpellProperties.type === "air") ||
    (orbEarth.checked === true && clickedSpellProperties.type === "earth") ||
    (orbFire.checked === true && clickedSpellProperties.type === "fire") ||
    (orbWater.checked === true && clickedSpellProperties.type === "water")
  ) {
    finalValue =
      basicCalculate + basicCalculate * clickedOrbActiveProperties.value;
    finalValue = Math.round(finalValue * 1);
    result.innerHTML = finalValue;
  }
  if (
    (orbAir.checked === true &&
      clickedSpellProperties.type === "air" &&
      magicSkill.checked === true) ||
    (orbEarth.checked === true &&
      clickedSpellProperties.type === "earth" &&
      magicSkill.checked) ||
    (orbFire.checked === true &&
      clickedSpellProperties.type === "fire" &&
      magicSkill.checked) ||
    (orbWater.checked === true &&
      clickedSpellProperties.type === "water" &&
      magicSkill.checked)
  ) {
    const clickedSkillLvl = document.querySelector(".magic-skill-img-active")
      .dataset.skillName;
    const clickedSkillLvlProperties = skill.find(
      (el) => el.name === clickedSkillLvl
    );
    finalValue =
      basicCalculate +
      basicCalculate * clickedSkillLvlProperties.value +
      basicCalculate * clickedOrbActiveProperties.value;
    finalValue = Math.round(finalValue * 1);
    result.innerHTML = finalValue;
  }
  if (magicSkill.checked === false || orbAir.checked === false) {
    finalValue = basicCalculate;
  }
  if (
    (protection.checked &&
      firstCheckboxAir.checked === true &&
      clickedSpellProperties.type === "air") ||
    (protection.checked &&
      firstCheckboxEarth.checked === true &&
      clickedSpellProperties.type === "earth") ||
    (protection.checked &&
      firstCheckboxFire.checked === true &&
      clickedSpellProperties.type === "fire") ||
    (protection.checked &&
      firstCheckboxWater.checked === true &&
      clickedSpellProperties.type === "water")
  ) 
  {
    finalValue = basicCalculate * 0.5;
    finalValue = Math.round(finalValue * 1);
    result.innerHTML = finalValue;
  }
  if (
    (protection.checked &&
      secondCheckboxAir.checked === true &&
      clickedSpellProperties.type === "air") ||
    (protection.checked &&
      secondCheckboxEarth.checked === true &&
      clickedSpellProperties.type === "earth") ||
    (protection.checked &&
      secondCheckboxFire.checked === true &&
      clickedSpellProperties.type === "fire") ||
    (protection.checked &&
      secondCheckboxWater.checked === true &&
      clickedSpellProperties.type === "water")
  ) {
    finalValue = basicCalculate * 0.25;
    finalValue = Math.round(finalValue * 1);
    result.innerHTML = finalValue;
  }
};
finalButton.addEventListener("click", calculateValue);
console.log(basicMagic);
const firstCheckBoxAirClick = () => {
  if (firstCheckboxAir.checked === true) {
    firstCheckboxAir.checked = true;
    secondCheckboxAir.checked = false;
  }
};
const secondCheckBoxAirClick = () => {
  if (secondCheckboxAir.checked === true) {
    firstCheckboxAir.checked = false;
    secondCheckboxAir.checked = true;
  }
};
const firstCheckBoxEarthClick = () => {
  if (firstCheckboxEarth.checked === true) {
    firstCheckboxEarth.checked = true;
    secondCheckboxEarth.checked = false;
  }
};
const secondCheckBoxEarthClick = () => {
  if (secondCheckboxEarth.checked === true) {
    firstCheckboxEarth.checked = false;
    secondCheckboxEarth.checked = true;
  }
};
const firstCheckBoxFireClick = () => {
  if (firstCheckboxFire.checked === true) {
    firstCheckboxFire.checked = true;
    secondCheckboxFire.checked = false;
  }
};
const secondCheckBoxFireClick = () => {
  if (secondCheckboxFire.checked === true) {
    firstCheckboxFire.checked = false;
    secondCheckboxFire.checked = true;
  }
};
const firstCheckBoxWaterClick = () => {
  if (firstCheckboxWater.checked === true) {
    firstCheckboxWater.checked = true;
    secondCheckboxWater.checked = false;
  }
};
const secondCheckBoxWaterClick = () => {
  if (secondCheckboxWater.checked === true) {
    firstCheckboxWater.checked = false;
    secondCheckboxWater.checked = true;
  }
};
firstCheckboxAir.addEventListener("click", firstCheckBoxAirClick);
firstCheckboxEarth.addEventListener("click", firstCheckBoxEarthClick);
firstCheckboxFire.addEventListener("click", firstCheckBoxFireClick);
firstCheckboxWater.addEventListener("click", firstCheckBoxWaterClick);
secondCheckboxAir.addEventListener("click", secondCheckBoxAirClick);
secondCheckboxEarth.addEventListener("click", secondCheckBoxEarthClick);
secondCheckboxFire.addEventListener("click", secondCheckBoxFireClick);
secondCheckboxWater.addEventListener("click", secondCheckBoxWaterClick);

const allCreatures = document.querySelectorAll(".img-creature");
const allTowns = document.querySelectorAll(".town-img");
const castleCreatures = document.querySelectorAll(".castle-creature");
const rampartCreatures = document.querySelectorAll(".rampart-creature");
const towerCreatures = document.querySelectorAll(".tower-creature");
const infernoCreatures = document.querySelectorAll(".inferno-creature");
const necropolisCreatures = document.querySelectorAll(".necropolis-creature");
const dungeonCreatures = document.querySelectorAll(".dungeon-creature");
const strongholdCreatures = document.querySelectorAll(".stronghold-creature");
const fortressCreatures = document.querySelectorAll(".fortress-creature");
const confluxCreatures = document.querySelectorAll(".conflux-creature");
const coveCreatures = document.querySelectorAll(".cove-creature");
const neutralCreatures = document.querySelectorAll(".neutral-creature");
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
const creatureAnimation = document.querySelector(".creature-animation");

const removeClassFromTowns = () => {
  allTowns.forEach((town) => town.classList.remove("town-active"));
};
const removeClassFromCreatures = () => {
  allCreatures.forEach((creature) =>
    creature.classList.remove("creatures-active")
  );
};
const showCastle = () => {
  removeClassFromTowns();
  townCastle.classList.add("town-active");
  allCreatures.forEach((singleCreature) =>
    singleCreature.classList.remove("creature-active")
  );
  castleCreatures.forEach((castleCreatures) =>
    castleCreatures.classList.add("creature-active")
  );
};
const showCreature = (creature) => {
  removeClassFromCreatures();
  creature.classList.add("creatures-active");
  const getCreatureUrl = creatures.find(
    ({ name }) => name === creature.dataset.creatureName
  ).imgUrl;
  const getCreatureHealth = creatures.find(
    ({ name }) => name === creature.dataset.creatureName
  )["health"];
  console.log(creature.dataset.creatureName, getCreatureUrl, getCreatureHealth);
  console.log(creatureAnimation);
  creatureAnimation.src = getCreatureUrl;
};

allCreatures.forEach((creature) =>
  creature.addEventListener("click", () => showCreature(creature))
);
townCastle.addEventListener("click", showCastle);

const showRampart = () => {
  removeClassFromTowns();
  townRampart.classList.add("town-active");
  allCreatures.forEach((singleCreature) =>
    singleCreature.classList.remove("creature-active")
  );
  rampartCreatures.forEach((rampartCreatures) =>
    rampartCreatures.classList.add("creature-active")
  );
};
townRampart.addEventListener("click", showRampart);

const showTower = () => {
  removeClassFromTowns();
  townTower.classList.add("town-active");
  allCreatures.forEach((singleCreature) =>
    singleCreature.classList.remove("creature-active")
  );
  towerCreatures.forEach((towerCreatures) =>
    towerCreatures.classList.add("creature-active")
  );
};
townTower.addEventListener("click", showTower);

const showInferno = () => {
  removeClassFromTowns();
  townInferno.classList.add("town-active");
  allCreatures.forEach((singleCreature) =>
    singleCreature.classList.remove("creature-active")
  );
  infernoCreatures.forEach((infernoCreatures) =>
    infernoCreatures.classList.add("creature-active")
  );
};
townInferno.addEventListener("click", showInferno);

const showNecropolis = () => {
  removeClassFromTowns();
  townNecropolis.classList.add("town-active");
  allCreatures.forEach((singleCreature) =>
    singleCreature.classList.remove("creature-active")
  );
  necropolisCreatures.forEach((necropolisCreatures) =>
    necropolisCreatures.classList.add("creature-active")
  );
};
townNecropolis.addEventListener("click", showNecropolis);

const showDungeon = () => {
  removeClassFromTowns();
  townDungeon.classList.add("town-active");
  allCreatures.forEach((singleCreature) =>
    singleCreature.classList.remove("creature-active")
  );
  dungeonCreatures.forEach((dungeonCreatures) =>
    dungeonCreatures.classList.add("creature-active")
  );
};
townDungeon.addEventListener("click", showDungeon);

const showStronghold = () => {
  removeClassFromTowns();
  townStronghold.classList.add("town-active");
  allCreatures.forEach((singleCreature) =>
    singleCreature.classList.remove("creature-active")
  );
  strongholdCreatures.forEach((strongholdCreatures) =>
    strongholdCreatures.classList.add("creature-active")
  );
};
townStronghold.addEventListener("click", showStronghold);

const showFortress = () => {
  removeClassFromTowns();
  townFortress.classList.add("town-active");
  allCreatures.forEach((singleCreature) =>
    singleCreature.classList.remove("creature-active")
  );
  fortressCreatures.forEach((fortressCreatures) =>
    fortressCreatures.classList.add("creature-active")
  );
};
townFortress.addEventListener("click", showFortress);

const showConflux = () => {
  removeClassFromTowns();
  townConflux.classList.add("town-active");
  allCreatures.forEach((singleCreature) =>
    singleCreature.classList.remove("creature-active")
  );
  confluxCreatures.forEach((confluxCreatures) =>
    confluxCreatures.classList.add("creature-active")
  );
};
townConflux.addEventListener("click", showConflux);

const showCove = () => {
  removeClassFromTowns();
  townCove.classList.add("town-active");
  allCreatures.forEach((singleCreature) =>
    singleCreature.classList.remove("creature-active")
  );
  coveCreatures.forEach((coveCreatures) =>
    coveCreatures.classList.add("creature-active")
  );
};
townCove.addEventListener("click", showCove);

const showNeutral = () => {
  removeClassFromTowns();
  townNeutral.classList.add("town-active");
  allCreatures.forEach((singleCreature) =>
    singleCreature.classList.remove("creature-active")
  );
  neutralCreatures.forEach((neutralCreatures) =>
    neutralCreatures.classList.add("creature-active")
  );
};
townNeutral.addEventListener("click", showNeutral);
