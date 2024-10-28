import { useCurseur } from "@/composables/useCurseur"
import type { Directive } from "vue"

type DirectiveModifier = 'self'

type DirectiveValue = string | undefined

type VCursorHoverDirective = Directive<
    HTMLElement,
    DirectiveValue,
    DirectiveModifier
>

const curseurApi = useCurseur()

const vCursorHoverDirective: VCursorHoverDirective = {
    mounted(el, binding) {
        const { value } = binding

        curseurApi.addHoverableElement(el, {
            key: value,
            self: binding.modifiers.self
        })
    },

    unmounted(el) {
        curseurApi.removeHoverableElement(el)
    }
}

export { vCursorHoverDirective }
