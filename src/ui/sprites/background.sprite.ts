import { PixiTexture, PixiSprite } from "../../plugins/engine";

export class BackgroundSprite extends PixiSprite {
    constructor(source: string) {
        const pixiTexture = PixiTexture.from(source);
        super(pixiTexture);
    }
}