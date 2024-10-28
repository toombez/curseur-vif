<script setup lang="ts">
import { useCurseur } from '@/composables/useCurseur';
import { computed } from 'vue';

const api = useCurseur()

const isScale = computed(() => api.hoveredElementKey.value === 'scale')
</script>

<template>
    <div :class="[$style.cursor, { [$style.scale]: isScale }]">
    </div>
</template>

<style module>
.cursor {
    transition: scale 0.2s ease-in-out;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid black;
}
.scale {
    scale: 4;
}
</style>
