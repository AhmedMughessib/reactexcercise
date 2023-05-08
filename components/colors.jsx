import React from "react";

const Color = () => {
    const [value, setValue] = React.useState('White');
    function changeColor(color) {
        setValue(color)
    }
    const colors = ['White', 'Black', 'Red', 'Green', 'Blue','Grey', 'Orange','Yellow', 'Pink'];
            
    return(     <div style={{backgroundColor: value}}>

        {colors.map(ele => <button onClick={() => changeColor(ele)}>{ele}</button>)}
        </div>

    )
        
    
}

export default Color