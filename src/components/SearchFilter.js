import {useState} from "react";
import {logDOM} from "@testing-library/react";

export default function SearchFilter({placeholder, data}){

    const [search, setSearch] = useState([]);


    const matchName = function (event) {
        const result = event.target.value;
        const filtered = data.filter(res => {
            return res.first_name.toLowerCase().includes(result.toLowerCase());
        })
        setSearch(filtered)
        console.log(search)
    }


    return(
        <div className="search-form">
            <form>
                <input placeholder={placeholder} onChange={matchName}/>
            </form>
            <div className="results">
                {search.length !== 0 &&
                <div>
                    {
                        search.slice(0,10).map((res) => {
                            return <div>
                                {res.first_name}
                            </div>
                        })
                    }
                </div>
                }
            </div>
        </div>
    )
}