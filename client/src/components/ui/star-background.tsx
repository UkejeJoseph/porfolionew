import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Scene set up
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer({
            antialias: false,
            alpha: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Stars geometry
        const starsCount = 5000;
        const positions = new Float32Array(starsCount * 3);

        for (let i = 0; i < starsCount; i++) {
            const i3 = i * 3;
            const r = 1.5 * Math.pow(Math.random(), 1 / 3);
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = r * Math.cos(phi);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0x34d399,
            size: 0.003,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.85,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Handle mouse movement
        const onMouseMove = (event: MouseEvent) => {
            mouseRef.current = {
                x: (event.clientX / window.innerWidth - 0.5) * 2,
                y: (event.clientY / window.innerHeight - 0.5) * 2
            };
        };
        window.addEventListener('mousemove', onMouseMove);

        // Handle resize
        const onResize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', onResize);

        // Animation loop
        let animationFrameId: number;
        let time = 0;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            time += 0.005;

            // Continuous auto-rotation (fast, like the reference site)
            points.rotation.y = time * 0.8;
            points.rotation.x = Math.sin(time * 0.5) * 0.3;
            points.rotation.z = Math.cos(time * 0.3) * 0.1;

            // Subtle mouse parallax on top of auto-rotation
            points.rotation.x += mouseRef.current.y * 0.03;
            points.rotation.y += mouseRef.current.x * 0.03;

            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            cancelAnimationFrame(animationFrameId);
            container.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[-1] pointer-events-none bg-background overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.08)_0%,transparent_100%)] pointer-events-none"></div>
        </div>
    );
}
