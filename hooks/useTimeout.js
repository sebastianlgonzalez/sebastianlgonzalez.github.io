import { useEffect, useRef } from "react";

export function useTimeout() {
  const timeout = useRef();
  useEffect (() => {
    if (timeout.current)
      clearTimeout(timeout.current)
  },[])
  return timeout
}