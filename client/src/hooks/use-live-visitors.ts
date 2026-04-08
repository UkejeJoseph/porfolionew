import { useState, useEffect } from "react";
import { getWsUrl } from "@/lib/api";

export function useLiveVisitors() {
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        const wsUrl = getWsUrl();
        const socket = new WebSocket(wsUrl);

        socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.type === "visitor_count") {
                    setCount(data.count);
                }
            } catch (e) {
                console.error("Failed to parse websocket message", e);
            }
        };

        return () => {
            socket.close();
        };
    }, []);

    return count;
}
