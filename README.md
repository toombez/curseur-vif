# CurseurVif (Vif meaning lively)

Vue.js library for creating custom cursors

## Usage

Add the following code to your `main.ts`

```ts
import { createApp } from 'vue'
import App from './App.vue'

// curseur-vif
import 'curseur-vif/style.css'
import curseurPlugin from 'curseur-vif/plugin'

createApp(App).use(curseurPlugin, {}).mount('#app')
```

Then in App.vue use `TheCursor` component

```vue
<script setup lang="ts">
import { TheCursor } from 'curseur-vif'
</script>

<template>
  <div>
    <TheCursor>
      <!-- Provide default cursor component -->
    </TheCursor>
  </div>
</template>
```

## Curseur global API

For cursor API curseur provides two options:

- global property `$curseur` for `template` section;
- composable `useCurseur` for `script` section.

## Creating cursor component

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useCurseur } from 'curseur-vif'

const isScaled = computed(() => {
  // Handling hovering elements with v-curseur-hover="'scale'" directive
  return useCurseur().hoveredElementKey.value === 'scale'
})
</script>

<template>
  <div
    :class="[
      $style.cursor,
      { [$style.scaled]: isScaled },
    ]"
  />
</template>

<style module>
.cursor {
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: 1px solid darkgray;
  transition: scale 0.2s ease-in-out;
}
.scaled {
  scale: 1.2;
}
</style>
```

## Directive usage

### v-curseur

Directive `v-curseur` allow to change cursor component when hovered element. Can be passed new cursor component or component with attrs object that will be applyed.

Only cursor component:

```vue
<template>
  <div v-curseur="NewCursorComponent">
    <!-- ... -->
  </div>
</template>
```

Cursor component and itself attrs:

```vue
<template>
  <div v-curseur="{ component: NewCursorComponent, attrs: { style: 'background: red;' } }">

    <!-- ... -->
  </div>
</template>
```

### v-curseur-hover

Directive `v-curseur-hover` allow to handle hovering state of elements. Can be passed `string` key for identify hover state.

Just handle element hovering:

```vue
<template>
  <div v-curseur-hover>
    <!-- ... -->
  </div>
</template>
```

Pass `string` key for hovering state:

```vue
<template>
  <div v-curseur-hover="'scale'">
    <!-- ... -->
  </div>
</template>
```

---

LICENCE MIT - Created by Timur Tokaev (@toombez)
