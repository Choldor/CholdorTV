import {spells, creatures} from "./constans.js";
const magicLvl = document.querySelector(".magic-lvl");
const magic = document.querySelector(".magic");
const magicLvlCointainer = document.querySelector(".magic-lvl-container");
const spellpower = document.querySelector(".spellpower");
const spell = document.querySelector(".spell");
const finalButton = document.querySelector(".final-button");
const result = document.querySelector(".result");
const magicLvLImg = document.querySelectorAll(".left-img");
const basicMagic = document.querySelector(".basic-magic");
const advanedMagic = document.querySelector(".advanced_magic");
const expertMagic = document.querySelector(".expert_magic");
const orbAir = document.querySelector(".orb-air")
const orbEarth = document.querySelector(".orb-earth")
const orbFire = document.querySelector(".orb-fire")
const orbWater = document.querySelector(".orb-water")
console.log(orbAir)

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
  removeClassFromMagicLvl()
 } else {
    magicLvlCointainer.classList.remove("hide");
 }
 };
const removeClassFromMagicLvl = () => {
  magicLvLImg.forEach(magicLvlImg => magicLvlImg.classList.remove('magic-img-active'))
  }
const showBasicMagic = () => {
  removeClassFromMagicLvl()
  basicMagic.classList.add('magic-img-active')

};
const showAdvancedMagic = () => {
  removeClassFromMagicLvl()
  advanedMagic.classList.add('magic-img-active')
};
const showExpertMagic = () => {
  removeClassFromMagicLvl()
  expertMagic.classList.add('magic-img-active')
};
basicMagic.addEventListener("click", showBasicMagic
);
advanedMagic.addEventListener("click", showAdvancedMagic);
expertMagic.addEventListener("click", showExpertMagic);
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
const changeImg = document.querySelector(".change-img");

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
    console.log(changeImg);
    changeImg.src=spell.src;
  })
);

const allCreatures = document.querySelectorAll(".img-creature");
const allTowns = document.querySelectorAll(".town-img");
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
const creatureAnimation = document.querySelector(".creature-animation")

const removeClassFromTowns = () => {
  allTowns.forEach(town => town.classList.remove('town-active'))
  }
const removeClassFromCreatures = () => {
  allCreatures.forEach(creature => creature.classList.remove('creatures-active'))
} 
const showCastle = () => {
  removeClassFromTowns()
  townCastle.classList.add('town-active')
  allCreatures.forEach(
    (singleCreature) => (singleCreature.classList.remove('creature-active')));
    castleCreatures.forEach(
    (castleCreatures) => (castleCreatures.classList.add('creature-active')));
};
const showCreature = (creature) => {
  removeClassFromCreatures()
  allCreatures.forEach(
    (creature) => (creature.classList.remove('creatures-active'))
  )
  creature.classList.add('creatures-active')
  const getCreatureUrl = creatures.find(({name}) => name === creature.dataset.creatureName).imgUrl;
  const getCreatureHealth = creatures.find(({name}) => name === creature.dataset.creatureName)["health"];
  console.log(creature.dataset.creatureName, getCreatureUrl, getCreatureHealth)
  console.log(creatureAnimation)
  creatureAnimation.src=getCreatureUrl
}


allCreatures.forEach(creature => creature.addEventListener("click",() => showCreature(creature)))
townCastle.addEventListener("click", showCastle);

const showRampart = () => {
  removeClassFromTowns()
  townRampart.classList.add('town-active')
  allCreatures.forEach(
    (singleCreature) => (singleCreature.classList.remove('creature-active')));
    rampartCreatures.forEach(
    (rampartCreatures) => (rampartCreatures.classList.add('creature-active')));
};
townRampart.addEventListener("click", showRampart);

const showTower = () => {
  removeClassFromTowns()
  townTower.classList.add('town-active')
  allCreatures.forEach(
    (singleCreature) => (singleCreature.classList.remove('creature-active')));
    towerCreatures.forEach(
    (towerCreatures) => (towerCreatures.classList.add('creature-active')));
};
townTower.addEventListener("click", showTower);

const showInferno = () => {
  removeClassFromTowns()
  townInferno.classList.add('town-active')
  allCreatures.forEach(
    (singleCreature) => (singleCreature.classList.remove('creature-active')));
    infernoCreatures.forEach(
    (infernoCreatures) => (infernoCreatures.classList.add('creature-active')));
};
townInferno.addEventListener("click", showInferno);

const showNecropolis = () => {
  removeClassFromTowns()
  townNecropolis.classList.add('town-active')
  allCreatures.forEach(
    (singleCreature) => (singleCreature.classList.remove('creature-active')));
    necropolisCreatures.forEach(
    (necropolisCreatures) => (necropolisCreatures.classList.add('creature-active')));
};
townNecropolis.addEventListener("click", showNecropolis);

const showDungeon = () => {
  removeClassFromTowns()
  townDungeon.classList.add('town-active')
  allCreatures.forEach(
    (singleCreature) => (singleCreature.classList.remove('creature-active')));
    dungeonCreatures.forEach(
    (dungeonCreatures) => (dungeonCreatures.classList.add('creature-active')));
};
townDungeon.addEventListener("click", showDungeon);

const showStronghold = () => {
  removeClassFromTowns()
  townStronghold.classList.add('town-active')
  allCreatures.forEach(
    (singleCreature) => (singleCreature.classList.remove('creature-active')));
    strongholdCreatures.forEach(
    (strongholdCreatures) => (strongholdCreatures.classList.add('creature-active')));
};
townStronghold.addEventListener("click", showStronghold);

const showFortress = () => {
  removeClassFromTowns()
  townFortress.classList.add('town-active')
  allCreatures.forEach(
    (singleCreature) => (singleCreature.classList.remove('creature-active')));
    fortressCreatures.forEach(
    (fortressCreatures) => (fortressCreatures.classList.add('creature-active')));
};
townFortress.addEventListener("click", showFortress);

const showConflux = () => {
  removeClassFromTowns()
  townConflux.classList.add('town-active')
  allCreatures.forEach(
    (singleCreature) => (singleCreature.classList.remove('creature-active'))
  );
  confluxCreatures.forEach(
    (confluxCreatures) => (confluxCreatures.classList.add('creature-active')));
};
townConflux.addEventListener("click", showConflux);

const showCove = () => {
    removeClassFromTowns()
    townCove.classList.add('town-active')
    allCreatures.forEach(
      (singleCreature) => (singleCreature.classList.remove('creature-active')));
    coveCreatures.forEach(
      (coveCreatures) => (coveCreatures.classList.add('creature-active')));
};
townCove.addEventListener("click", showCove);

const showNeutral = () => {
  removeClassFromTowns()
  townNeutral.classList.add('town-active')
  allCreatures.forEach(
    (singleCreature) => (singleCreature.classList.remove('creature-active')));
  neutralCreatures.forEach(
    (neutralCreatures) => (neutralCreatures.classList.add('creature-active')));
};
townNeutral.addEventListener("click", showNeutral);

