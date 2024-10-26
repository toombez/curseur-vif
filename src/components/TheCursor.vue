<script setup lang="ts">
import { useCurseur } from '@/composables/useCurseur'
import { computed, onMounted } from 'vue'

const props = withDefaults(defineProps<{
    setVisibleOnMounted?: boolean
}>(), {
    setVisibleOnMounted: true
})

const curseurApi = useCurseur()

if (props.setVisibleOnMounted) {
    onMounted(() => curseurApi.toggleCursorVisibility(true))
}

const {
    cursorX,
    cursorY,
    CursorComponent,
    cursorAttrs,
} = curseurApi

const translateStyles = computed(() => {
    const translateX = `calc(${cursorX.value}px - 50%)`
    const translateY = `calc(${cursorY.value}px - 50%)`

    return `${translateX} ${translateY}`
})
</script>

<template>
    <div
        v-if="$curseur.isCursorVisible.value"
        :style="{ translate: translateStyles }"
        :class="$style.cursor"
    >
        <slot v-if="!$curseur.isHaveCursorComponent.value" />

        <CursorComponent v-else :="cursorAttrs" />
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
