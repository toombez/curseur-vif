import { useCurseur } from "@/composables/useCurseur"
import type { Directive } from "vue"

type DirectiveModifier = 'self'

type VCursorHoverDirective = Directive<
    HTMLElement,
    any,
    DirectiveModifier
>

const curseurApi = useCurseur()

const vCursorHoverDirective: VCursorHoverDirective = {
    mounted(el, binding) {
        curseurApi.addHoverableElement(el, binding.modifiers.self)
    },

    unmounted(el) {
        curseurApi.removeHoverableElement(el)
    }
}

export { vCursorHoverDirective }
