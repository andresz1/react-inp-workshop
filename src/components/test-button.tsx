"use client";

import { startTransition, useEffect, memo, useState } from "react";
import { IdleQueue } from "idlefy/idleQueue.js";

const queue = new IdleQueue({ ensureTasksRun: true });

const doStuff = () => {
  let i = 0;

  while (i++ <= 1000000000) {}
};

const fetchSomething = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

const Listing = () => {
  doStuff();

  return null;
};

export const TestButton = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = async () => {
    startTransition(() => {
      setCounter((counter) => counter + 1);
      doStuff();
    });
  };

  // useEffect
  // render
  // listener after setState

  return (
    <>
      <button
        className="border border-neutral-500 rounded-md p-4"
        onClick={handleClick}
      >
        Count: {counter}
      </button>
    </>
  );
};
