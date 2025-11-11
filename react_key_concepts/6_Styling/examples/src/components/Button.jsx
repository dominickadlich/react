function Button({children, config, className}) {
    return <button {...config} className={`btn ${className}`}>{children}</button>;
};