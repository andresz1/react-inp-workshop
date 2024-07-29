"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { compute, delayTask } from "@/utils";

export default function TaskExamplePage() {
  const [counter, setCounter] = useState(0);

  const handleClick = async () => {
    setCounter((counter) => counter + 1);

    await delayTask();

    compute();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Task example</h1>

        <p className="text-muted-foreground">Explore the examples</p>
      </div>

      <Button onClick={handleClick}>{counter}</Button>
    </div>
  );
}
