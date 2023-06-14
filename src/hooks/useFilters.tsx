import { useState } from "react";

const useFilters = (filterData:any) => {
   const [filters, setFilters] = useState({...filterData});

    function shouldDisableFilterButton() {
        return Object.values(filters).every((value) => value === null);

    }


    function applyFilters(filters:any) {
        setFilters((prevState:any) => { 
            return {...prevState, ...filters};
        })
    }

    function clearAllFilters() {
        const keys  = Object.keys(filters);
        const emptyFilters = {} as Record<string,null>

      keys.forEach((key) => {
        emptyFilters[key] = null;
      })

        setFilters(emptyFilters);

    }


   
 return {
    filters,
    shouldDisableFilterButton,
    applyFilters,
    clearAllFilters
 }
}

export default useFilters