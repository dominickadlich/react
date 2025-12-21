import { useOnlineStatus } from "./UseOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress Saved!");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save" : "Reconnecting..."}
    </button>
  );
}
