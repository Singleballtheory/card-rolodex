import kirby from '../../img/kirbyGif.gif';
import sprites from '../../img/sprite.jpeg';
const sampleCardList = [
  {
    name: "Tom",
    level: "5",
    img: kirby,
    description: "That dude",
    attack1: "Attack",
    attack1Stats: "-2",
    attack1Description: "do the attack",
    attack2: "Heals",
    attack2Stats: "+2",
    attack2Description: "Heal yourself 2 hp",
    id: "5",
  },
  {
    name: "Tom2",
    level: "51",
    img: sprites,
    description: "That other dude",
    attack1: "Big Attack",
    attack1Stats: "-10",
    attack1Description: "do the attack",
    attack2: "Big Heals",
    attack2Stats: "+20",
    attack2Description: "Heal yourself 20 hp",
    id: "51",
  },
];

export function getSampleCards() {
  return sampleCardList;
}