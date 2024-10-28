import { useDynamicComponent } from "@/composables/useDynamicComponent";
import { useHoverableElements } from "@/composables/useHoverableElements";
import { useCursor } from "@/composables/useCursor";
import { useCurseur } from "@/composables/useCurseur";
import TheCursor from "@/components/TheCursor.vue";
import curseurPlugin from "@/plugins/curseur";

export type { HoverableElementData } from '@/composables/useHoverableElements'

export {
    useDynamicComponent,
    useHoverableElements,
    useCursor,
    useCurseur,
    TheCursor,
    curseurPlugin,
}
