import { useFormStatus } from 'react-dom'

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending}>
            {pending ? 'Saving...' : 'Submit'} Todo
        </button>
    );
}

export default SubmitButton;