function Button({
  onSmash,
  children,
}: {
  onSmash: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
}) {
  return <button onClick={onSmash}>{children}</button>;
}

export default function AppSmash() {
  return (
    <div>
      <Button onSmash={() => alert("Playing")}>Play Movie</Button>
      <Button onSmash={() => alert("Uploading")}>Upload Image</Button>
    </div>
  );
}
