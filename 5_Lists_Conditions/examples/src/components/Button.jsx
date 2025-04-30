function Button({isButton, config, children}) {
    if (isButton) {
        return <button{...config}>{children}</button>;
    }
    return <a {...config}>{children}</a>;
};