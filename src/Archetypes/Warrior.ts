import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Warrior.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
