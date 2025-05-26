function CrClCalculator({
    onAgeChange,
    onWeightChange,
    onCreatinineChange,
    onGenderChange
}) {
    return (
        <>
            <select onChange={onGenderChange}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
            </select>
            {' '}
            <input 
                type="number"
                placeholder="Age"
                onChange={onAgeChange}
            />
            {' '}
            <input 
                type="number"
                placeholder="Weight (kg)"
                onChange={onWeightChange}
            />
            {' '}
            <input 
                type="number"
                placeholder="Scr"
                onChange={onCreatinineChange}
            />
        </>
    );
};

export default CrClCalculator;