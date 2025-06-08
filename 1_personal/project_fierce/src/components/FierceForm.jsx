import { useActionState ,useOptimistic, useState } from "react";

import SubmitButton from "./SubmitButton";

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

        const savedMemory = await storeMemory(title, text, rate);

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
            <header>
                <h1>Leave a Memory</h1>
            </header>
            <form action={formAction}>
                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                </p>
                <p>
                    <label htmlFor="text">Describe your memory</label>
                    <textarea id="text" name="text" rows={3}/>
                </p>
                <p>
                    <label htmlFor="rate">Rate your memory?</label>
                    <input 
                        type="range"
                        id="rate"
                        name="rate"
                        min="0"
                        max="10" 
                        step="1"
                        onChange={handleSetRate}
                    />
                    <label>{rate}</label>
                </p>
            <SubmitButton />
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