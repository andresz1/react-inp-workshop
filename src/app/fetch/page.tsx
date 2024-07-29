"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { compute, request } from "@/utils";

export default function FetchExamplePage() {
  const [counter, setCounter] = useState(0);

  const handleClick = async () => {
    setCounter((counter) => counter + 1);

    await request();

    compute();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Fetch example</h1>

        <p className="text-muted-foreground">
          Open the developer tools, slow down the CPU by 4x, start recording,
          and then click on the counter button. Check the profiler traces.
        </p>
      </div>

      <Button onClick={handleClick}>{counter}</Button>
    </div>
  );
}
