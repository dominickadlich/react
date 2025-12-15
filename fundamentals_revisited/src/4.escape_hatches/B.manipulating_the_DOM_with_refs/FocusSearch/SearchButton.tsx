type OnClickType = () => void;

export default function SearchButton({ onClick }: { onClick: OnClickType}) {
    return (
        <button onClick={onClick}>
            Search
        </button>
    )
}