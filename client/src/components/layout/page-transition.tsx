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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
                duration: 0.3,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1]
            }}
            className="w-full min-h-full"
        >
            {/* Quick wipe overlay */}
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 0.35, ease: "circIn" }}
                style={{ originX: 0 }}
                className="fixed inset-0 bg-foreground z-[100] pointer-events-none"
            />
            {children}
        </motion.div>
    );
}
