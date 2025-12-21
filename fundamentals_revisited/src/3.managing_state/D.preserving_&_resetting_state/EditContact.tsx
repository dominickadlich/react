import { useState } from "react";

interface InitialDataInterface {
  id: number;
  name: string;
  email: string;
}

type onSaveType = (updatedData: InitialDataInterface) => void;

export default function EditContact({
  initialData,
  onSave,
}: {
  initialData: InitialDataInterface;
  onSave: onSaveType;
}) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);
  return (
    <section>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          const updatedData = {
            id: initialData.id,
            name: name,
            email: email,
          };
          onSave(updatedData);
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          setName(initialData.name);
          setEmail(initialData.email);
        }}
      >
        Reset
      </button>
    </section>
  );
}
