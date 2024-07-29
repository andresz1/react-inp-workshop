import { IdleQueue } from "idlefy/idleQueue.js";

export class Scheduler {
  public idleQueue: IdleQueue;

  constructor() {
    this.idleQueue = new IdleQueue({ ensureTasksRun: true });
  }

  yieldToMain() {
    return new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
  }
}
