import { useEffect, useEffectEvent } from 'react';
import { createConnection } from "./ChatTrillion";

export function useChatRoom({ 
    serverUrl,
    roomId,
    onReceiveMessage
}: {
    serverUrl: string,
    roomId: string,
    onReceiveMessage: (msg: string) => void;
}) {
    const onMessage = useEffectEvent(onReceiveMessage)

    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        };
        const connection = createConnection(options);
        connection.on('message', (msg) => {
            onMessage(msg)
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, serverUrl])
}