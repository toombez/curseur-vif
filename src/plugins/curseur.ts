import type { Plugin } from "vue"
import { useCurseur } from "@/composables/useCurseur"
import { vCursorDirective } from "@/directives/vCursor"

declare module 'vue' {
    interface ComponentCustomProperties {
        $curseur: ReturnType<typeof useCurseur>;

        vCursor: typeof vCursorDirective
    }
}

interface PluginOptions {}

const curseurPlugin: Plugin<PluginOptions> = (app, options) => {
    app.config.globalProperties.$curseur = useCurseur()

    app.directive('cursor', vCursorDirective)
}

export default curseurPlugin
