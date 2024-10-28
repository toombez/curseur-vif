import { shallowReadonly } from "vue"
import { useMouse, useToggle } from "@vueuse/core"
import { useDynamicComponent } from "@/composables/useDynamicComponent"
import { useHoverableElements } from "@/composables/useHoverableElements"

const useCursor = () => {
    const {
        attrs,
        component,
        isHaveDynamicComponent,
        deleteDynamicComponent,
        setDynamicComponent,
    } = useDynamicComponent()

    const [isCursorVisible, toggleCursorVisibility] = useToggle(false)

    const hoverableElementsApi = useHoverableElements()

    const { x: cursorX, y: cursorY } = useMouse({
        touch: false,
        type: 'client',
    })

    return {
        ...hoverableElementsApi,

        CursorComponent: component,
        cursorAttrs: attrs,
        cursorX: shallowReadonly(cursorX),
        cursorY: shallowReadonly(cursorY),
        isCursorVisible: shallowReadonly(isCursorVisible),
        isHaveCursorComponent: isHaveDynamicComponent,
        toggleCursorVisibility,
        deleteCursorComponent: deleteDynamicComponent,
        setCursorComponent: setDynamicComponent,
    }
}

export { useCursor }
