//import info from '../db/info.json'
import React, {useState, useEffect} from "react"
import db from '../db/info.js'
import Table from './details-components/NationTable.js'


export default function Island({islandID}) {
    const[islandFetch, setInfo] = useState(islandID)

    useEffect( () => {
        const fetchData = async  () => {
            try {
                const jsonData = await fetch('./info.json')
                .then((data) => { return data.json()})
                
                    setInfo(jsonData);
                
            } catch (e) {
                console.log(e.stack);
            }

        };
         fetchData();
    }, [islandID]);
        const islandInfo = db.nations;

    
        return <div className="details-container">
                    <button className="close-button btn btn-danger" >X</button>
                    <h1 className="text-center">{islandInfo[islandID].title}</h1>
                    <div className="d-flex justify-content-around">
                        <p className="col-md-6">DESCWE</p>
                        <Table className="col-md-6" nation={islandInfo[islandID]}/>    
                    </div>
                </div>
}

