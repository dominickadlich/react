interface ButtonInterface {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    children: string | string[]
}

function Button({ onClick, children }: ButtonInterface) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

function PlayButton({movieName}: {movieName: string}) {
    function handlePlayClick() {
        alert(`Playing ${movieName}`)
    }

    return (
        <Button onClick={handlePlayClick}>
            Play {movieName}
        </Button>
    )
}


function UploadButton() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    )
}


export default function Toolbar() {
    return (
        <div>
            <PlayButton movieName="Violet's Day with Dad" />
            <UploadButton />
        </div>
    )
}