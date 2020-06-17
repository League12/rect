import React from 'react';
import './index.css';

class Model extends React.Component {

    constructor() {
        super();
        this.container = React.createRef();
        this.scene = new window.THREE.Scene();
        this.speedX = 0;
        this.speedY = 0;
        this.speedZ = 0.3;
        this.rotateX = 0.01;
        this.rotateY = 0.1;
        this.rotateZ = 0.1;
    }

    initScene = () => {
        this.scene.background = new window.THREE.Color(0x6495ED);

        const axes = new window.THREE.AxesHelper(200);
        this.scene.add(axes);

        const ambientLight = new window.THREE.AmbientLight({color: 0x888888});
        this.scene.add(ambientLight);

        const pointLight = new window.THREE.PointLight({color: 0xffffff});
        pointLight.position.set(-50, 50, 50);
        this.scene.add(pointLight);

        // const boxGeometry = new window.THREE.BoxGeometry(50, 50, 50);
        // const boxMaterial = new window.THREE.MeshPhongMaterial({color: 0xff0000});
        // const box = new window.THREE.Mesh(boxGeometry, boxMaterial);
        // box.position.y = 10;

        // this.scene.add(box);
    }

    drawLine_01 = () => {
        this.group_01 = new window.THREE.Group();

        const geometry_line_01 = new window.THREE.Geometry();
        geometry_line_01.vertices.push(
            new window.THREE.Vector3(25, -25, -25),
            new window.THREE.Vector3(25, 25, -25),
            new window.THREE.Vector3(-25, 25, -25),
            new window.THREE.Vector3(-25, -25, -25),
            new window.THREE.Vector3(25, -25, -25),

            new window.THREE.Vector3(25, -25, 25),
            new window.THREE.Vector3(25, 25, 25),
            new window.THREE.Vector3(-25, 25, 25),
            new window.THREE.Vector3(-25, -25, 25),
            new window.THREE.Vector3(25, -25, 25)
        );
        const geometry_line_02 = new window.THREE.Geometry();
        geometry_line_02.vertices.push(
            new window.THREE.Vector3(25, 25, -25),
            new window.THREE.Vector3(25, 25, 25)
        );
        const geometry_line_03 = new window.THREE.Geometry();
        geometry_line_03.vertices.push(
            new window.THREE.Vector3(-25, 25, -25),
            new window.THREE.Vector3(-25, 25, 25)
        );
        const geometry_line_04 = new window.THREE.Geometry();
        geometry_line_04.vertices.push(
            new window.THREE.Vector3(-25, -25, -25),
            new window.THREE.Vector3(-25, -25, 25)
        );

        const lineMaterial = new window.THREE.LineBasicMaterial({color: 0xff00ff, linewidth: 5});

        const line_01 = new window.THREE.Line(geometry_line_01, lineMaterial);
        const line_02 = new window.THREE.Line(geometry_line_02, lineMaterial);
        const line_03 = new window.THREE.Line(geometry_line_03, lineMaterial);
        const line_04 = new window.THREE.Line(geometry_line_04, lineMaterial);

        const geometry_ball_01 = new window.THREE.SphereGeometry(1, 32, 32);
        const ball_material = new window.THREE.MeshBasicMaterial({color: 0xffff00});
        const ball = new window.THREE.Mesh(geometry_ball_01, ball_material);
        ball.name = 'monitorPoint_01'
        ball.position.set(0, 25, 25);

        this.group_01.add(line_01, line_02, line_03, line_04, ball);
        this.scene.add(this.group_01);
    }

    drawLine_02 = () => {
        this.group_02 = new window.THREE.Group();

        const geometry_line_01 = new window.THREE.Geometry();
        geometry_line_01.vertices.push(
            new window.THREE.Vector3(25, -25, -25),
            new window.THREE.Vector3(25, 25, -25),
            new window.THREE.Vector3(-25, 25, -25),
            new window.THREE.Vector3(-25, -25, -25),
            new window.THREE.Vector3(25, -25, -25),

            new window.THREE.Vector3(25, -25, 25),
            new window.THREE.Vector3(25, 25, 25),
            new window.THREE.Vector3(-25, 25, 25),
            new window.THREE.Vector3(-25, -25, 25),
            new window.THREE.Vector3(25, -25, 25)
        );
        const geometry_line_02 = new window.THREE.Geometry();
        geometry_line_02.vertices.push(
            new window.THREE.Vector3(25, 25, -25),
            new window.THREE.Vector3(25, 25, 25)
        );
        const geometry_line_03 = new window.THREE.Geometry();
        geometry_line_03.vertices.push(
            new window.THREE.Vector3(-25, 25, -25),
            new window.THREE.Vector3(-25, 25, 25)
        );
        const geometry_line_04 = new window.THREE.Geometry();
        geometry_line_04.vertices.push(
            new window.THREE.Vector3(-25, -25, -25),
            new window.THREE.Vector3(-25, -25, 25)
        );

        const lineMaterial = new window.THREE.LineBasicMaterial({color: 0x00ffff, linewidth: 5});

        const line_01 = new window.THREE.Line(geometry_line_01, lineMaterial);
        const line_02 = new window.THREE.Line(geometry_line_02, lineMaterial);
        const line_03 = new window.THREE.Line(geometry_line_03, lineMaterial);
        const line_04 = new window.THREE.Line(geometry_line_04, lineMaterial);

        const geometry_ball_01 = new window.THREE.SphereGeometry(1, 32, 32);
        const ball_material = new window.THREE.MeshBasicMaterial({color: 0xffff00});
        const ball = new window.THREE.Mesh(geometry_ball_01, ball_material);
        ball.name = 'monitorPoint_01_01';
        ball.position.set(0, 25, 25);

        this.group_02.add(line_01, line_02, line_03, line_04, ball);

        this.group_02.position.set(10, 10, 10);
        this.scene.add(this.group_02);
    }

    dynamicLine = () => {
        if (this.dynamicLineObj) {
            this.scene.remove(this.dynamicLineObj);
        }

        const ball01 = this.scene.getObjectByName('monitorPoint_01');
        const ball02 = this.scene.getObjectByName('monitorPoint_01_01');

        const vector01 = new window.THREE.Vector3();
        ball01.getWorldPosition(vector01);

        const vector02 = new window.THREE.Vector3();
        ball02.getWorldPosition(vector02);

        const dynamicGeometry = new window.THREE.Geometry();
        dynamicGeometry.vertices.push(
            vector01,
            vector02
        );


        const dashLineMaterial = new window.THREE.LineDashedMaterial({color: 0xffff00, 
            dashSize: 10, gapSize: 10, linewidth: 3});

        this.dynamicLineObj = new window.THREE.Line(dynamicGeometry, dashLineMaterial);
        this.scene.add(this.dynamicLineObj);
    }

    getObj = (x, y, z, obj) => {
        const object = new window.THREE.Object3D();
        object.position.set(x, y, z);
        object.add(obj);
        obj.position.set(-x, -y, -z);
        return object;
    }

    initRenderer = () => {
        this.renderer = new window.THREE.CanvasRenderer({antialias:true, alpha:true});
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.current.appendChild(this.renderer.domElement);
    }

    initControler = () => {
        this.orbitControler = new window.THREE.OrbitControls(this.camera, this.renderer.domElement);
    }

    initCamera = () => {
        if (this.camera) {
            this.scene.remove(this.camera);
        }
        let { current } = this.container;
        this.camera = new window.THREE.PerspectiveCamera(45, 
            current.offsetWidth / current.offsetHeight, 0.0001, 100000);
        this.camera.position.set(200, 100, 500);
        this.camera.lookAt(this.scene.position);
        this.scene.add(this.camera);
    }

    componentDidMount() {
        this.initScene();
        this.initCamera();
        this.drawLine_01();
        this.drawLine_02();
        this.initRenderer();
        this.initControler();

        this.renderScene();
    }

    renderScene = () => {
        this.timer = setTimeout(() => {
            this.renderer.render(this.scene, this.camera);
            if (this.group_02.position.z >= 30 || this.group_02.position.z <= -30) {
                this.speedZ *= -1;
            }
            if (this.group_02.rotation.x >= Math.PI / 6 || this.group_02.rotation.x <= -Math.PI / 6) {
                this.rotateX *= -1;
            }
            this.group_02.position.z += this.speedZ;
            this.group_02.rotation.x += this.rotateX;

            this.dynamicLine();

            this.renderScene();
        }, 1000 / 60);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return <div ref={this.container} className="modle-container" id="container"></div>
    }
}

export default Model;