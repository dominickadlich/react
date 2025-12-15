import { useEffect, useRef } from 'react';


interface MyInputProps {
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function MyInput({
    value,
    onChange
}: MyInputProps) {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        ref.current?.focus()
    }, [])

    return (
        <input 
            ref={ref}
            value={value}
            onChange={onChange}
        />
    )
}