import { useActionState ,useOptimistic, useState } from "react";

import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";

async function submitForm(title, text, rate) {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a slow network or server
    console.log(`Feedback: ${title} - ${text} - ${rate}`);
    return { title, text, rate, id: new Date().getTime() };
}

function FierceForm() {
    const [memories, setMemories] = useState([]);

    const [optimisticMemory, addMemoryOptimistically] = useOptimistic(
        memories,
        (currentState, optimisticValue) => [
            ...currentState,
            { ...optimisticValue, id: 'temp' }
        ]
    );

    async function storeMemory(prevState, formData) {
        const title = formData.get('title');
        const text = formData.get('text');
        const rate = formData.get('rate');

        if (!title?.trim() && !text?.trim() && !rate?.trim()) {
            return {
                errors: {
                    title: 'Please give your memory a title',
                    text: 'Please describe your memory',
                    rate: 'Please rate your memory'
                }
            };
        }
        if (!title?.trim()) {
            return {
                errors: {
                    title: 'Please give your memory a title'
                }
            };
        }
        if (!text?.trim()) {
            return {
                errors: {
                    text: 'Please describe your memory'
                }
            };
        }
        if (!rate?.trim()) {
            return {
                errors: {
                    rate: 'Please rate your memory'
                }
            }
        }

        addMemoryOptimistically({ title, text, rate })

        const savedMemory = await submitForm(title, text, rate);

        setMemories((prevMemories) => [
            ...prevMemories,
            savedMemory,
        ]);
    }

    const [formState, formAction] = useActionState(storeMemory, {
        error: null,
    })

    const [rate, setRate] = useState('5');

    function handleSetRate(event) {
        setRate(event.target.value);
    };

    return (
        <>
            <form action={formAction}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h1 className="text-base/7 font-semibold text-violet-900">Leave a Memory</h1>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="title" className="block text-sm/6 font-medium text-white-900">
                                    Memory Name
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                        <div className="shrink-0 text-base text-violet-500 select-none sm:text-sm/6">Title</div>
                                        <input 
                                            type="text"
                                            id="title"
                                            name="title"
                                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                {formState.errors?.title && (
                                    <span className="error">{formState.errors.title}</span>
                                )}
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="text" className="block text-sm/6 font-medium text-white-900">
                                Memory Description
                            </label>
                            <div className="mt-2"> 
                                <textarea 
                                    id="text"
                                    name="text" 
                                    rows={3}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-violet-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    defaultValue={'Remember a time when...'}
                                />
                            </div>
                            {formState.errors?.text && (
                                <span className="errors">{formState.errors.text}</span>
                            )}
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="rate" className="block text-sm/6 font-medium text-white-900">
                                Memory Rating: {rate}
                            </label>
                            <div className="mt-2">
                                <input 
                                    type="range"
                                    id="rate"
                                    name="rate"
                                    min="0"
                                    max="10" 
                                    step="1"
                                    onChange={handleSetRate}
                                    />
                            </div>
                            {formState.errors?.rate && (
                                <span className="errors">{formState.errors.rate}</span>
                            )}
                        </div>
                        <SubmitButton />
                    </div>
                </div>
            </form>
            <div>
                <h2>Your Memories</h2>
                {optimisticMemory.length === 0 && (
                    <p>Remember a time when...</p>
                )}
                {optimisticMemory.length > 0 && (
                    <ul>
                        {optimisticMemory.map((mem) => (
                            <li key={mem.id}>
                                <h3>{mem.title}</h3>
                                <p>{mem.text}</p>
                                <p>{mem.rate}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default FierceForm;