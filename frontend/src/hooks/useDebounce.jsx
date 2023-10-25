import { useEffect, useState } from "react";

// takes a value and returns it back after certain timer
const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    console.log("setting new timeout");
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      console.log("clearing the timeout");
      clearTimeout(id);
    };
  }, [value, delay]);
  console.log(debouncedValue, "debouncedValue");

  return debouncedValue;
};
export default useDebounce;
