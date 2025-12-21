export default function SearchInput({
  ref,
}: {
  ref: React.Ref<HTMLInputElement>;
}) {
  return <input ref={ref} placeholder="Looking for something?" />;
}
