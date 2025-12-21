import { useEffect, useRef } from "react";

interface MyInputProps {
  shouldFocus: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function MyInput({
  shouldFocus,
  value,
  onChange,
}: MyInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  // TODO: call focus() only if shouldFocus is true.
  if (shouldFocus) {
    useEffect(() => {
      if (shouldFocus) {
        ref.current?.focus();
      }
    }, [shouldFocus]);
  }

  return <input ref={ref} value={value} onChange={onChange} />;
}
