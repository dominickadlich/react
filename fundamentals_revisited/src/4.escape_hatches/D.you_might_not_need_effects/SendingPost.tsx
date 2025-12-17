import { useEffect, useState } from "react";

export default function PostForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        post('/analytics/event', { eventName: 'visit_form'});
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        post('/api/register', { firstName, lastName });
    }
} 

function post(firstName: string, lastName: { eventName: string; }) {
    throw new Error("Function not implemented.");
}
