"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { compute } from "@/utils";

export default function EffectExamplePage() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  useEffect(() => {
    compute();
  }, [counter]);

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Effect example</h1>

        <p className="text-muted-foreground">
          Open the developer tools, slow down the CPU by 4x, start recording,
          and then click on the counter button. Check the profiler traces.
        </p>
      </div>

      <Button onClick={handleClick}>{counter}</Button>
    </div>
  );
}
