"use client";
import { IdleQueue } from "idlefy/idleQueue.js";
import { startTransition, useState } from "react";

const queue = new IdleQueue({ ensureTasksRun: true });

export const TestButton = () => {
  const [counter, setCounter] = useState(0);

  const doStuff = () => {
    let i = 0;

    while (i++ <= 10000000000000) {}
  };

  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  doStuff();

  return <button onClick={handleClick}>Count: {counter}</button>;
};
