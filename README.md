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

---

LICENCE MIT - Created by Timur Tokaev (@toombez)
