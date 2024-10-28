import { useCurseur } from "@/composables/useCurseur"
import type { Directive } from "vue"

type DirectiveModifier = 'self'

type DirectiveValue = string | undefined

type VCurseurHoverDirective = Directive<
    HTMLElement,
    DirectiveValue,
    DirectiveModifier
>

const curseurApi = useCurseur()

const vCurseurHoverDirective: VCurseurHoverDirective = {
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

export { vCurseurHoverDirective }
