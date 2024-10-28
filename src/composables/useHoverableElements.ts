import { computed, ref, shallowRef } from "vue"

document.addEventListener('mousemove', (event) => {
    if (event.target !== currentHoveredElement.value) {
        currentHoveredElement.value = event.target as HTMLElement
    }
})

const currentHoveredElement = ref<HTMLElement>()

const useHoverableElements = () => {
    const hoverableElements = new Map<HTMLElement, boolean>()

    const addHoverableElement = (element: HTMLElement, self: boolean = false) => {
        hoverableElements.set(element, self)
    }

    const removeHoverableElement = (element: HTMLElement) => {
        hoverableElements.delete(element)
    }

    const isCurrentElementHoverable = computed(() => {
        if (typeof currentHoveredElement.value === 'undefined') {
            return false
        }

        return [...hoverableElements]
            .filter(([element, self]) => (self
                ? element === currentHoveredElement.value
                : element.contains(currentHoveredElement.value!)
            )).length > 0
    })

    return {
        isCurrentElementHoverable: shallowRef(isCurrentElementHoverable),
        addHoverableElement,
        removeHoverableElement,
    }
}

export { useHoverableElements }
