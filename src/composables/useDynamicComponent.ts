import { computed, shallowReadonly, shallowRef, type Component } from "vue"

export type AllComponentAttrs<
    C extends Component
> = C extends new (...args: any) => any
    ? InstanceType<C>['$props']
    : never

interface UseDynamicComponentOptions<C extends Component = Component> {
    initialComponent?: C
    initialAttrs?: AllComponentAttrs<C>
}

const useDynamicComponent = (options: UseDynamicComponentOptions = {}) => {
    const {
        initialAttrs = {},
        initialComponent = null
    } = options

    const dynamicComponent = shallowRef<Component | null>(initialComponent)
    const dynamicomponentAttrs = shallowRef<Record<string, unknown> | null>(initialAttrs)

    const isHaveDynamicComponent = computed(() => dynamicComponent.value !== null)

    const setDynamicComponent = <C extends Component = Component>(
        component: C,
        attrs: AllComponentAttrs<C> = {} as AllComponentAttrs<C>,
    ) => {
        if (component === dynamicComponent.value) {
            return
        }

        dynamicComponent.value = component
        dynamicomponentAttrs.value = attrs
    }

    const deleteDynamicComponent = () => {
        dynamicComponent.value = null
        dynamicomponentAttrs.value = null
    }

    return {
        isHaveDynamicComponent: shallowReadonly(isHaveDynamicComponent),
        component: shallowReadonly(dynamicComponent),
        attrs: shallowReadonly(dynamicomponentAttrs),
        setDynamicComponent,
        deleteDynamicComponent,
    }
}

export { useDynamicComponent }
