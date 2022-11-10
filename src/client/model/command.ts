import {Object} from './object';

/**
 * Command class used to perform several actions on an Object
 */
export abstract class Command {
  protected object: Object;

  /**
   * Constructor
   * @param {Object} object
   * @protected
   */
  protected constructor(object: Object) {
    this.object = object;
  }

  abstract execute(): void;
}

/**
 * Command to move the Object
 */
export class MoveCommand extends Command {
  /**
   *
   * @param {Object} object
   */
  constructor(object: Object) {
    super(object);
  }

  /**
   * Execute the MoveCommand action on the Object
   */
  execute(): void {
    this.object.move();
  }
}
