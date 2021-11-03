import React,{ useState, useEffect } from "react";

const ShelterContext = React.createContext()

const ShelterProvider = props => {
    const [shelters, setShelters] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:9129/shelters")
        .then((r) => r.json())
        .then((shelters) => setShelters(shelters));
    }, [])

    
    return(
        <div>
            <ShelterContext.Provider  value={{shelters}}>
                {props.children} 
            </ShelterContext.Provider>
        </div>

    )
}

export { ShelterProvider, ShelterContext }