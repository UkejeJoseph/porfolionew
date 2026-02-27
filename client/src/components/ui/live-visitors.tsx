import { useLiveVisitors } from "@/hooks/use-live-visitors";

export default function LiveVisitors() {
    const count = useLiveVisitors();

    return (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium animate-in fade-in" title="Live visitors viewing this portfolio">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {count} {count === 1 ? "person" : "people"} viewing right now
        </div>
    );
}
