import React, {useState} from "react";
import Nav from "./Nav";
import TileList from './TileList'
import Filter from "./Filter";

import hogs from "../porkers_data";

import HogForm from './HogForm'

function App() {

	const [hogData, setHogData] = useState(hogs)
	
	
	function handleFilter(e){
		
	
		if (e.target.checked){
			const hogsFiltered = hogData.filter(hog => {
				return hog.greased === true 
			})
			setHogData(hogsFiltered)
		}
		else
			setHogData(hogs)
		}
	
	function handleSort(e){
		
	
		if (e.target.checked){
			let sortedHogs = hogData.slice().sort( (a,b) => {
				if(a.name < b.name) return -1
				if(a.name > b.name) return 1
				return 0
			})
			setHogData(sortedHogs)
		}
		else
			setHogData(hogs)
		
	}


	function handleSortByWeight (e){
		if(e.target.checked) {
			let sortWeight = hogData.slice().sort((a,b) => {
				return a.weight - b.weight
			})
			setHogData(sortWeight)
		}
		else setHogData(hogs)
			
	}


	function handleNewHog(newHog){
		const newHogArray = [...hogData, newHog]
		return setHogData(newHogArray)
	}
	
		return (
			<div className="App">
				<Nav />
				<Filter handleFilter={handleFilter} handleSort={handleSort} handleSortByWeight={handleSortByWeight}/>
				<TileList hogData={hogData}/>
				<HogForm hogData={hogData} handleNewHog={handleNewHog}/>
			</div>
		);
	}
	
	export default App;