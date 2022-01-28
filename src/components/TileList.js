import React, {useState} from "react"
import Tile from './Tile'
import Filter from "./Filter";

function TileList ({hogData}){


    
    return (
    <div>
        
        
        <tile class="ui grid container"  >
            
            {hogData.map((hog) => {
            return( 
               
               <Tile
                    key={hog.id}
                    name={hog.name}
                    image={hog.image}
                    specialty={hog.specialty}
                    greased={hog.greased ? "greased" : "Not Greased"}
                    weight={parseInt(hog.weight) + " lbs"}
                    medal={hog["highest medal achieved"]}
                    
                    
                />
               );
            })}
        </tile>
        
    </div>
    )
}


export default TileList;