import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
    id: string;
}

export default function PageTransition({ children, id }: PageTransitionProps) {
    return (
        <motion.div
            key={id}
            initial={{ opacity: 0, scale: 0.98, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(12px)" }}
            transition={{
                duration: 0.8,
                delay: 0.5, /* Increased delay for more 'empty' feel during wipe */
                ease: [0.22, 1, 0.36, 1]
            }}
            className="w-full min-h-full"
        >
            {/* Cinematic Film Wipe Overlay Effect */}
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "circIn" }}
                style={{ originX: 0 }}
                className="fixed inset-0 bg-primary z-[100] pointer-events-none"
            />
            {children}
        </motion.div>
    );
}
