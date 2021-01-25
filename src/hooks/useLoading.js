import { useState } from "react";

export default function useLoading() {
  const [isLoading, setState] = useState(false);

  const load = (fn) => {
    setState(true);
    fn.finally(() => setState(false));
  };

  return [isLoading, load];
}
