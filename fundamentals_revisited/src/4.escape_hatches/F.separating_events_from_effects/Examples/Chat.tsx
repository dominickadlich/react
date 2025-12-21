export function sendMessage(message: string) {
  console.log(`🔵 You sent: ${message}`);
}

export function createConnection(serverUrl: string, roomId: string) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log(`✅ Connecting to ${roomId} room at ${serverUrl}`);
    },
    disconnect() {
      console.log(`❌ Disconnected from ${roomId} room room at ${serverUrl}`);
    },
  };
}
