import Fighter, { SimpleFighter } from './Fighter';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _lifePoints: number;
  private _strength: number;
  private _archetype: Archetype;
  private _race: Race;
  private _maxLifePoints: number;
  private _dexterity: number;
  private _defense: number;
  private _name: string;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity); 
    this._archetype = new Mage(name);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = { type_: this._archetype.energyType,
      amount: getRandomInt(1, 10) };
  }

  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get name(): string { return this._name; }
  get strength(): number { return this._strength; }
  get archetype(): Archetype { return this._archetype; }
  get race(): Race { return this._race; }
  get lifePoints(): number { return this._lifePoints; }
  get energy(): Energy { return { ...this._energy }; }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength); 
  }
  
  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) { this._lifePoints -= damage; } 
    if (damage <= 0) { this._lifePoints -= 1; }
    if (this.lifePoints <= 0) { this._lifePoints = -1; }
    return this._lifePoints;
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) { 
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }
}
