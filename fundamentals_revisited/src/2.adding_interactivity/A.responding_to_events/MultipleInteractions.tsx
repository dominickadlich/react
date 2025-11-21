function Button({
    onClick,
    children
}: {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    children: string
}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}


function Toolbar({
    onPlayMovie,
    onUploadImage,
}: {
    onPlayMovie:  React.MouseEventHandler<HTMLButtonElement>
    onUploadImage:  React.MouseEventHandler<HTMLButtonElement>
}) {
    return (
        <>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        </>
    )
}


export default function MultipleInteractions() {
    return (
        <Toolbar 
            onPlayMovie={() => alert('Playing!')}
            onUploadImage={() => alert('Uploading!')}
        />
    )
}