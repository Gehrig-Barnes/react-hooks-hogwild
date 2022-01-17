import React, {useState} from 'react'

function Tile ({name, image, specialty, greased, weight, medal}){

    const [detail, setDetail] = useState(false);

    function handleClick () {
        setDetail((detail) => !detail)
    }

    function showDetail (){
        if(detail === true) {
            return (
                <>
                    <h5>{specialty}</h5>
                    <h5>{greased}</h5>
                    <h5>{weight}</h5>
                    <h5>{medal}</h5>
                </>
            )
        } else if(detail === false) {
            return ""
        }
    }


    return (
    <div onClick={handleClick} class="ui four wide column" >
        <h2>{name}</h2>
        <img className="size" src={image}/>
        {showDetail()}
        
        
        
    </div>
    
    )
}

export default Tile;