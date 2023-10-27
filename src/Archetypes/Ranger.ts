import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Ranger.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
