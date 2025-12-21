import { useOnlineStatus } from "./UseOnlineStatus";
import SaveButton from "./SaveButton";

export default function StatusBar() {
  const isOnline = useOnlineStatus();

  return (
    <>
      <h1>{isOnline ? "✅ Online" : "❌ offline"}</h1>
      <SaveButton />
    </>
  );
}
