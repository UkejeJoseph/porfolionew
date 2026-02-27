import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    // Direct mouse position (zero lag for the dot)
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring position (smooth lag for the glow aura)
    const springX = useSpring(mouseX, { stiffness: 400, damping: 30, mass: 0.8 });
    const springY = useSpring(mouseY, { stiffness: 400, damping: 30, mass: 0.8 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        // Guard against weird jumps
        if (e.clientX === 0 && e.clientY === 0 && (mouseX.get() !== 0 || mouseY.get() !== 0)) return;

        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    }, [mouseX, mouseY]);

    const handleMouseOver = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target) return;

        // Fast detection using binary checks and data attributes
        const isInteractive =
            target.hasAttribute('data-cursor-hover') ||
            target.tagName === "BUTTON" ||
            target.tagName === "A" ||
            target.closest("[data-cursor-hover]") ||
            target.closest("button") ||
            target.closest("a");

        setIsHovering(!!isInteractive);
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mouseover", handleMouseOver, { passive: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [handleMouseMove, handleMouseOver]);

    return (
        <>
            {/* Main glowing orb - smooth follow with spring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 bg-primary/25 rounded-full blur-md pointer-events-none z-[9999]"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 2 : 1,
                }}
            />
            {/* Sharp center dot - instant follow with MotionValue */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[10000]"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
}
