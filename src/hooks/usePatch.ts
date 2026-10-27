import { useSyncExternalStore } from "react";
import { getInstrument, subscribeInstrument } from "../motion/instrument";

export function usePatch() {
  return useSyncExternalStore(
    subscribeInstrument,
    () => getInstrument().patch,
    () => "fraudlens",
  );
}
