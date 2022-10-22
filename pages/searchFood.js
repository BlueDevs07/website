import Navbar from "../components/Navbar/Navbar";
import Ingredient from "../components/Ingredient/Ingredient";
import axios from "axios";
import {useState,useEffect} from "react"

function SearchFood(){

    const [macro , setMacro]= useState("")
    const [searchValue, setsearchValue] = useState("")
    const getMacroMore=async(food)=>{
        const options = {
          method: 'GET',
          url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
          params: {query: food},
          headers: {
            'X-RapidAPI-Key': '59cd76b86emshecab81e15bd3916p10e59cjsnb4316be59509',
            'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
          }
        };
        
        await axios.request(options).then(function (res) {
          setMacro(res.data[0])
        }).catch(function (error) {
          console.error(error);
        });
      }
    return (
        <div>
            <Navbar/>
            <div className="bar flex mx-9 my-9">
                <input value={searchValue} onChange={(e)=>{setsearchValue(e.target.value)}} class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for food items..." type="text" name="search"/>
                <button onClick={() => {getMacroMore(searchValue)}} className="btn py-2">Search</button>
            </div>
            {macro?<Ingredient macro={macro}/>:""}
        </div>
    )
}

export default SearchFood