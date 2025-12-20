import { useEffect, useEffectEvent, useState  } from "react";

export default function Timer() {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);
    const [delay, setDelay] = useState(100);

    const onIncrement = useEffectEvent(() => {
        setCount(c => c + increment)
    })

    useEffect(() => {
        const id = setInterval(() => {
            onIncrement();
        }, delay);
        return () => {
            clearInterval(id);
        }
    }, [])

    return (
        <>
            <h1>
                Counter: {count}
                <button onClick={() => setCount(0)}>
                    Reset
                </button>
            </h1>
            <hr />
            <p>
                Every second, increment by:
                <button disabled={increment === 0} onClick={() => {
                        setIncrement(i => i - 1);
                }}>-</button>
                <button onClick={() => {
                    setIncrement(i => i + 1)
                }}>+</button>
            </p>
            <p>
                Increment delay:
                <button disabled={delay === 100} onClick={() => {
                setDelay(d => d - 100);
                }}>-100 ms</button>
                <b>{delay} ms</b>
                <button onClick={() => {
                setDelay(d => d + 100);
                }}>+100 ms</button>
            </p>
        </>
    );
}