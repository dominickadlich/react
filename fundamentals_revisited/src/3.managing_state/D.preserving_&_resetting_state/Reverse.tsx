import { useState } from 'react';

export default function Reverse() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );

    return (
        <>
            {reverse ? ( 
                <>
                    <Field key='last name' label="Last name" /> 
                    <Field key='first name' label="First name" />
                </> 
            ) : (
                <>
                    <Field key='first name' label="First name" /> 
                    <Field key='last name' label="Last name" />
                </>
            )}
            {checkbox}
        </>
    )
  }


function Field({ label }: { label: string }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}
