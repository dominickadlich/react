export function CreateConnection({
  serverUrl,
  roomId,
}: {
  serverUrl: string;
  roomId: string;
}) {
  if (typeof serverUrl !== "string") {
    throw Error(`Expected serverUrl to a string. Received: ${serverUrl}`);
  }
  if (typeof roomId !== "string") {
    throw Error(`Exected roomId to be a string. Received: ${roomId}`);
  }
  return {
    connect() {
      console.log(`✅ Connecting to ${roomId} room at ${serverUrl}`);
    },
    disconnect() {
      console.log(`❌ Disconnected from ${roomId} room at ${serverUrl}`);
    },
  };
}
