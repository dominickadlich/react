import { useEffect } from "react";

export function useInterval(onTick: TimerHandler, delay: number) {
    useEffect(() => {
        const id = setInterval(onTick, delay)
        return () => clearInterval(id);
    }, []);
}