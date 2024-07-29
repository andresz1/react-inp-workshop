import { IdleQueue } from "idlefy";

export const compute = () => {
  let i = 0;
  while (i++ <= 100000000) {}
};

export const request = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

export function delayTask() {
  return new Promise((resolve) => {
    setTimeout(resolve, 100);
    requestAnimationFrame(() => {
      setTimeout(resolve, 0);
    });
  });
}

export interface DelayTaskUntilUrgentOptions {
  minTaskTime?: number | undefined;
}

export function delayTaskUntilUrgent(options?: DelayTaskUntilUrgentOptions) {
  const queue = new IdleQueue({ ensureTasksRun: true });

  return new Promise((resolve) => {
    queue.pushTask(resolve, options);
  });
}
