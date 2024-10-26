<script setup lang="ts">
import { useCurseur } from '@/composables/useCurseur'
import { computed } from 'vue'

const {
    cursorX,
    cursorY,
} = useCurseur()

const translateStyles = computed(() => {
    const translateX = `calc(${cursorX.value}px - 50%)`
    const translateY = `calc(${cursorY.value}px - 50%)`

    return `${translateX} ${translateY}`
})
</script>

<template>
    <div
        v-if="$curseur.isCursorVisible"
        :style="{ translate: translateStyles }"
        :class="$style.cursor"
    >
        {{ cursorX }} | {{ cursorY }}
    </div>
</template>

<style module>
.cursor {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
}
</style>
