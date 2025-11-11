function InlineMultiplicationText({children, isImportant}) {
    let defaultStyle = {color: 'black'};
    if (isImportant) {
         defaultStyle = {...defaultStyle, backgroundColor: 'red'};
    }
    return <p style={defaultStyle}>{children}</p>;
}