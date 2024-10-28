import { ref } from "vue"

document.addEventListener('mousemove', (event) => {
    if (event.target !== currentHoveredElement.value) {
        currentHoveredElement.value = event.target as HTMLElement
    }
})

const currentHoveredElement = ref<HTMLElement>()
