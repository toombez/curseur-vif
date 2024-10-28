import { useDynamicComponent } from "@/composables/useDynamicComponent";
import { useHoverableElements } from "@/composables/useHoverableElements";
import { useCursor } from "@/composables/useCursor";
import { useCurseur } from "@/composables/useCurseur";

import TheCursor from "@/components/TheCursor.vue";

import { vCursorDirective } from "@/directives/vCursor";
import { vCursorHoverDirective } from "@/directives/vCursorHover";

import curseurPlugin from "@/plugins/curseur";

export {
    useDynamicComponent,
    useHoverableElements,
    useCursor,
    useCurseur,
    vCursorDirective,
    vCursorHoverDirective,
    TheCursor,
    curseurPlugin,
}
