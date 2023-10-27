import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
