import { useCurseur } from "@/composables/useCurseur"
import type { AllComponentAttrs } from "@/composables/useDynamicComponent"
import type { Component, Directive } from "vue"

type DirectiveModifiers = 'self'

type DirectiveValue<
    C extends Component = Component
> =
    | { component: C, attrs?: AllComponentAttrs<C> }
    | C

type VCursorDirective = Directive<
    HTMLElement,
    DirectiveValue,
    DirectiveModifiers
>

const vCursorDirective: VCursorDirective = {
    mounted(el, binding) {
        const { value, modifiers } = binding
        const curseurApi = useCurseur()

        let Component: Component = 'component' in value
            ? value.component
            : value

        let attrs: Record<string, unknown> = 'attrs' in value
            ? value.attrs
            : {}

        const mouseoverHandler = (event: MouseEvent) => {
            if (modifiers.self && event.target !== el) {
                return
            }

            curseurApi.setCursorComponent(Component, attrs)
        }

        const mouseleaveHandler = (event: MouseEvent) => {
            if (modifiers.self && event.target !== el) {
                return
            }

            curseurApi.deleteCursorComponent()
        }

        // element might be empty if page is just loaded
        if (typeof el === 'undefined') {
            return
        }

        el.addEventListener('mouseover', mouseoverHandler)
        el.addEventListener('mouseleave', mouseleaveHandler)
    }
}

export { vCursorDirective }
