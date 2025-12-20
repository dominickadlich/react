export function createConnectionTwo(_serverUrl: string, _roomId: string) {
    // A real implementation would actually connect to the server
    let connectedCallback: () => void;
    let timeout: number | undefined;
    return {
        connect() {
            timeout = setTimeout(() => {
                if (connectedCallback) {
                    connectedCallback();
                }
            }, 100);
        },
        on(event: string, callback: () => void) {
            if (event !== 'connected')    {
                throw Error('Only "connected" event is supported.')
            }
            connectedCallback = callback;
        },
        disconnect() {
            clearTimeout(timeout)
        }
    }
}