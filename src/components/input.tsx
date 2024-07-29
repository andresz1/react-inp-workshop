"use client";

import { memo, startTransition, useEffect, useState } from "react";

const doStuff = () => {
  let i = 0;

  while (i++ <= 100000000) {}
};

const Listing = memo(() => {
  console.log("xd");
  doStuff();
  return null;
});

export const Input = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  const handleChange = async (event) => {
    setValue(event.target.value);

    setTimeout(() => {
      startTransition(() => {
        setValue2(event.target.value);
      });
    }, 300);
  };

  return (
    <>
      <input value={value} onChange={handleChange} />
      <Listing value={value2} />
    </>
  );
};
