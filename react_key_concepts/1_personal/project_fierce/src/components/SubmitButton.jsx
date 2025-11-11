import { useFormStatus } from 'react-dom'

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <div className="mt-6 flex items-center justify-end gap-x-6">
            <button disabled={pending} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {pending ? 'Saving...' : 'Submit'} Memory
            </button>
        </div>
    );
}

export default SubmitButton;