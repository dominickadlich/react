const today = new Date

function formatDate(date: Date) {
    return new Intl.DateTimeFormat(
        'en-US',
        // { weekday: 'long' }
    ).format(date);
}

export default function FormatDate() {
    return (
        <h1>Clubs go up on: {formatDate(today)}</h1>
    )
}