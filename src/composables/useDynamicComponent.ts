import type { Component } from "vue"

export type AllComponentAttrs<
    C extends Component
> = C extends new (...args: any) => any
    ? InstanceType<C>['$props']
    : never
