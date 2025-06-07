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

    return (
        <>
        </>
    )
}