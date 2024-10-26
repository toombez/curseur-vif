import { useMouse, useToggle } from "@vueuse/core"
import { useDynamicComponent } from "./useDynamicComponent"
import { shallowReadonly } from "vue"

const useCursor = () => {
    const {
        attrs,
        component,
        isHaveDynamicComponent,
        deleteDynamicComponent,
        setDynamicComponent,
    } = useDynamicComponent()

    const [isCursorVisible, toggleCursorVisibility] = useToggle(false)

    const { x: cursorX, y: cursorY } = useMouse({
        touch: false,
        type: 'client',
    })

    return {
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
