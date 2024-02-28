import type { LoaderOptions } from "../../entities/loader";

export const options: LoaderOptions = {
    manifest: {
        bundles: [
            {
                name: "logo",
                assets: {
                    "vite-logo": "logo/vite-logo.png",
                    "ts-logo": "logo/ts-logo.png",
                    "pixi-logo": "logo/pixi-logo.png"
                }
            },
            {
                name: "assets",
                assets: {
                    "bar": "assets/bar.jpg"
                }
            }
        ]
    }
}