import { computed, readonly, ref, shallowRef } from "vue"

interface HoverableElementData {
    self: boolean
    key?: string
}

document.addEventListener('mousemove', (event) => {
    if (event.target !== currentHoveredElement.value) {
        currentHoveredElement.value = event.target as NonNullable<HTMLElement>
    }
})

const currentHoveredElement = ref<NonNullable<HTMLElement>>(document.body)

const checkElementHoverable = (
    [element, data]: [HTMLElement, HoverableElementData]
) => (data.self
    ? element === currentHoveredElement.value
    : element.contains(currentHoveredElement.value)
)

const useHoverableElements = () => {
    const hoverableElements = shallowRef(
        new Map<HTMLElement, HoverableElementData>()
    )

    const addHoverableElement = (
        element: HTMLElement,
        data: HoverableElementData
    ) => {
        hoverableElements.value.set(element, data)
    }

    const removeHoverableElement = (element: HTMLElement) => {
        hoverableElements.value.delete(element)
    }

    const currentHoverableElement = computed(() => (
        [...hoverableElements.value].find(checkElementHoverable)?.[0] || null
    ))

    const isCurrentElementHoverable = computed(
        () => currentHoverableElement.value !== null
    )

    const currentHoverableElementData = computed(() => (
        isCurrentElementHoverable.value
            && hoverableElements.value.get(currentHoverableElement.value!)
            || null
    ))

    const isSelfHovered = computed<boolean | null>(() => (
        isCurrentElementHoverable.value !== null
            && hoverableElements.value.get(currentHoverableElement.value!)?.self
            || null
    ))

    const hoveredElementKey = computed<string | null>(() => (
        isCurrentElementHoverable.value
            && currentHoverableElementData.value!.key || null
            || null
    ))

    return {
        isCurrentElementHoverable: readonly(isCurrentElementHoverable),
        isSelfHovered: readonly(isSelfHovered),
        hoveredElementKey: readonly(hoveredElementKey),
        addHoverableElement,
        removeHoverableElement,
    }
}

export { useHoverableElements }
