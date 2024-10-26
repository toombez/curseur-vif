import { createGlobalState } from "@vueuse/core"
import { useCursor } from "./useCursor"

const useCurseur = createGlobalState(useCursor)

export { useCurseur }
