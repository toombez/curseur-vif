<script setup lang="ts">
import BorderCursor from './components/BorderCursor.vue';
import CircleCursor from './components/CircleCursor.vue';
import DefaultCursor from './components/DefaultCursor.vue';
import SquareCursor from './components/SquareCursor.vue';
import TheCursor from './components/TheCursor.vue';
</script>

<template>
    <main>
        <div
            :class="[$style.square, $style['outer-square']]"
            v-cursor.self="SquareCursor"
        >
            <div
                :class="[$style.square, $style['inner-square']]"
                v-cursor.self="BorderCursor"
            >
                <div
                    :class="[$style.square, $style['deep-inner-square']]"
                    v-cursor.self="CircleCursor"
                ></div>
            </div>
        </div>

        <div
            :class="[$style.square, $style['outer-square']]"
        >

        </div>

        <div
            style="width: 200px; aspect-ratio: 1; background-color: blue;"
            v-cursor="{ attrs: {}, component: CircleCursor }"
        >
        </div>

        <div
            style="width: 200px; aspect-ratio: 1; background-color: brown;"
            :class="$style.square"
            v-cursor-hover="'scale'"
        >
            <div style="width: 100px; aspect-ratio: 1; background-color: cadetblue"></div>
        </div>

        <TheCursor>
            <DefaultCursor />
        </TheCursor>
    </main>
</template>

<style module>
html {
    height: 1000vh;
}
.square {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1;
}
.outer-square {
    width: 500px;
    background-color: chocolate;
}
.inner-square {
    width: 200px;
    background-color: burlywood;
}
.deep-inner-square {
    width: 100px;
    background-color: brown;
}
</style>
