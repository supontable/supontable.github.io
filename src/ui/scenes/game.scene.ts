import { PixiContainer, PixiSprite } from "../../plugins/engine";
import { Manager, SceneInterface } from "../../entities/manager";
import * as PIXI from 'pixi.js';

export class GameScene extends PixiContainer implements SceneInterface {
    //you can  remove all of this variable
    private _background: PixiSprite;
    private _overlay: PIXI.Graphics;
    private _msg: PIXI.Text;

    constructor() {
        super();

        this.position.x = 0;
        this.position.y = 0;
        const parentWidth = Manager.width;
        const parentHeight = Manager.height;
        
        //you can remove all of this code
        //initialize sprites
        this._background = PixiSprite.from("bar");
        this._background.anchor.set(0.5);
        this._background.width = this._background.width * parentWidth / this._background.width;
        this._background.height = this._background.height * parentHeight / this._background.height;
        this._background.position.x = parentWidth/2;
        this._background.position.y = parentHeight/2;
        this.addChild(this._background);
        
        this._overlay = new PIXI.Graphics();
        this._overlay.beginFill(0x222222, 0.7);
        this._overlay.drawRect(0, 0, parentWidth, parentHeight);
        this.addChild(this._overlay);

        this._msg = new PIXI.Text("under construction", { fill: 0xffffff, fontFamily: "Lucida Console", fontSize: 100});
        this._msg.position.x = parentWidth / 2 - this._msg.width / 2;
        this._msg.position.y = parentHeight/2 - this._msg.height / 2;
        this.addChild(this._msg);
    }

    update(framesPassed: number): void {
        framesPassed = 0;
    }

    resize(parentWidth: number, parentHeight: number): void {
        //
        this._background.position.x = parentWidth/2 - 120;
        this._background.position.y = parentHeight/2;
    }
}