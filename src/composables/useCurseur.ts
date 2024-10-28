import { createGlobalState } from "@vueuse/core"
import { useCursor } from "@/composables/useCursor"

const useCurseur = createGlobalState(useCursor)

export { useCurseur }
