import { startTransition, useEffect, useState } from "react";

export function useDebauncedValue<T>(value: T, delay: number) {
  const [debauncedValue, setDebauncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(
      () => startTransition(() => setDebauncedValue(value)),
      delay,
    );

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debauncedValue;
}
