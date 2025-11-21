function Button({
    onClick,
    children
}:{
    onClick: React.MouseEventHandler<HTMLButtonElement>
    children: string
}) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick(e);
        }}>
            {children}
        </button>
    )
}


export default function ToolbarStopPropagation() {
    return (
        <div className="Toolbar" onClick={() => {
            alert('You clicked on the Toolbar!')
        }}>
            <Button onClick={() => {alert('Playing Movie!')}}>
                Play Movie
            </Button>
            <Button onClick={() => alert('Uploading Picture of your motha!')}>
                Upload Image
            </Button>
        </div>       
    );
}