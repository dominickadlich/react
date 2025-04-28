function Math({
    onVariableOneChange,
    onVariableTwoChange,
    onOperatorChange
}) {
    return (
        <p>
            <input 
                type="number"
                onChange={onVariableOneChange}
            />
            {' '} 
            <select onChange={onOperatorChange}>
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                    <option value="divide">/</option>
                    <option value="multiply">*</option>
            </select>
            {' '}
            <input 
                type="number"
                onChange={onVariableTwoChange}
            />
        </p>
    );
};

export default Math;