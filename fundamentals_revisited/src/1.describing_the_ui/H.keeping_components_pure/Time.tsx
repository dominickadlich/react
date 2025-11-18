export default function Clock({ time }: { time: Date}) {
    const hours = time.getHours();

  if (hours >= 0 && hours <= 6) {
    return (
    <h1 className="night">
        {time.toLocaleTimeString()}
    </h1>
    )
  } else {
    return (
    <h1 className="day">
        {time.toLocaleTimeString()}
    </h1>
    )
  }
}

