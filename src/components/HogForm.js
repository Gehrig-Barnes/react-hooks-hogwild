import React, {useState} from 'react';



function HogForm ({hogData, handleNewHog}){

    const [name, setName] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [greased, setGreased] = useState(true)
    const [weight, setWeight] = useState(0)
    const [medal, setMedal] = useState('')
    const [image, setImage] = useState('')

    function manageName (e){
        const value = e.target.value
        setName(value)
    }

    function manageSpecialty(e){
        const value = e.target.value
        setSpecialty(value)
    }

    function manageGreased(e){
        const value = e.target.value
        const greaseBool = value === "true" ? true : false 
        setGreased(greaseBool)
    }

    function manageWeight(e){
        const value = e.target.value
        setWeight(value)
    }

    function manageMedal(e){
        const value = e.target.value
        setMedal(value)
    }

    function manageImage(e){
        const value = e.target.value
        setImage(value)
    }


    function handleSubmit (e){
        e.preventDefault();
        const newID = hogData.length + 1
        const newHog = {
            id: newID,
            name: name,
            specialty: specialty,
            greased: greased,
            weight: weight,
            "highest medal achieved": medal,
            image: image
        }
        handleNewHog(newHog)
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Submit a New Hog</h3>
                <label>
                    Hog's Name: 
                    <input 
                    type="text"
                    name="name"
                    onChange={manageName}
                    />
                </label>
                <label>
                    Specialty: 
                    <input 
                    type="text"
                    name="specialty"
                    onChange={manageSpecialty}
                    />
                </label>
                <label>
                    Greased?: 
                    <select name="true or false" onChange={manageGreased}> 
                    <option>true</option>
                    <option>false</option>
                    </select>
                </label>
                <label>
                    Weight: 
                    <input 
                    type="number"
                    name="weight"
                    onChange={manageWeight}
                    />
                </label>
                <label>
                    Medal Achieved: 
                    <select name="medal" onChange={manageMedal}> 
                    <option>Gold</option>
                    <option>Silver</option>
                    <option>Bronze</option>
                    </select>
                </label>
                <label>
                    Image: 
                    <input 
                    type="text"
                    name="image"
                    onChange={manageImage}
                    />
                </label>
                <input
                    type="submit"
                    name="submit"
                    value="Enter NewHog"
                    className="submit"
          
                />
            </form>
        </div>
    )
}

export default HogForm