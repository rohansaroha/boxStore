
// @ts-nocheck
/* tslint:disable */
/* eslint-disable */

const k3dHelper = () => {
    const Start = () => {
        K3D.load("lexus.3ds", loaded);     // loading file ...
    };
    const loaded = (data) => {
        console.log('data is', data)
        var m = K3D.parse.from3DS(data);   // done !
        console.log(m);
        var stage = new Stage("c");
        var s = new Sprite();
        stage.addChild(s);
        s.x = stage.stageWidth / 2;
        s.y = stage.stageHeight / 2 + 200;
        s.z = 300;
        s.scaleX = s.scaleY = s.scaleZ = 10;
        var mesh = m.edit.objects[0].mesh;
        K3D.edit.transform(mesh.vertices, K3D.mat.rotateDeg(-90,0,0));

        s.graphics.beginBitmapFill(new BitmapData("lexus.jpg"));
        s.graphics.drawTriangles3D(mesh.vertices, mesh.indices, mesh.uvt);
        stage.addEventListener(Event.ENTER_FRAME,
            function(e) { s.rotationY += 0.01 * (stage.mouseX - stage.stageWidth / 2); } );
    };
    return {
        start: Start,
        p: (data) => loaded(data)
    }
};

export default k3dHelper;
