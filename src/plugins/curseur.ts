import type { Plugin } from "vue"
import { useCurseur } from "@/composables/useCurseur"
import { vCursorDirective } from "@/directives/vCursor"
import { vCursorHoverDirective } from "@/directives/vCursorHover"

declare module 'vue' {
    interface ComponentCustomProperties {
        $curseur: ReturnType<typeof useCurseur>;

        vCursor: typeof vCursorDirective

        vCursorHover: typeof vCursorHoverDirective
    }
}

interface PluginOptions {}

const curseurPlugin: Plugin<PluginOptions> = (app, options) => {
    app.config.globalProperties.$curseur = useCurseur()

    app.directive('cursor', vCursorDirective)
    app.directive('cursor-hover', vCursorHoverDirective)
}

export default curseurPlugin
