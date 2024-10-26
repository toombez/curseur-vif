import type { Plugin } from "vue"
import { useCurseur } from "@/composables/useCurseur"

declare module 'vue' {
    interface ComponentCustomProperties {
        $curseur: ReturnType<typeof useCurseur>;
    }
}

interface PluginOptions {}

const curseurPlugin: Plugin<PluginOptions> = (app, options) => {
    app.config.globalProperties.$curseur = useCurseur()
}

export default curseurPlugin
