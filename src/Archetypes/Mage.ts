import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Mage.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
