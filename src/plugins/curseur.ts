import type { Plugin } from "vue"
import { useCurseur } from "@/composables/useCurseur"
import { vCurseurDirective } from "@/directives/vCurseur"
import { vCurseurHoverDirective } from "@/directives/vCurseurHover"

declare module 'vue' {
    interface ComponentCustomProperties {
        $curseur: ReturnType<typeof useCurseur>;

        vCurseur: typeof vCurseurDirective

        vCurseurHover: typeof vCurseurHoverDirective
    }
}

interface PluginOptions {}

const curseurPlugin: Plugin<PluginOptions> = (app, options) => {
    app.config.globalProperties.$curseur = useCurseur()

    app.directive('curseur', vCurseurDirective)
    app.directive('curseur-hover', vCurseurHoverDirective)
}

export default curseurPlugin
