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
