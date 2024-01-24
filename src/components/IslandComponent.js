//import info from '../db/info.json'
import React, {useState, useEffect} from "react"
import db from '../db/info.js'
import Table from './details-components/NationTable.js'
import ReactMarkdown from 'react-markdown'

export default function Island({islandID}) {
    const islandInfo = db.nations;
    const[markdown, setContent] = useState('')
    const[isVisible, setVisibility] = useState('true')

    useEffect( () => {
                fetch(islandInfo[islandID].markdown)
                .then((response) => { return response.text()})
                .then((data) => setContent(data))
                .catch((e) => console.error('Error during Markdown file fetching and reading:'+ e))

        },[]);

        const closeDetails = () => {setVisibility(false)}
    
        return <div> {
            isVisible && (
            <div className="details-container">
                    <button className="close-button btn btn-danger" onClick={closeDetails} >X</button>
                    <h1 className="text-center">{islandInfo[islandID].title}</h1>
                    <div className="d-flex justify-content-around">
                        <div className="col-md-9">
                            <ReactMarkdown children={markdown}/>
                        </div>
                        <Table className="col-md-2" nation={islandInfo[islandID]}/>    
                    </div>
                </div>)}
                </div>
}

