
export default function NationTable(nation) {
    const cell = nation.nation


    return (<div>
        <table className="table align-middle table-dark">
            <thead>
                <tr><th scope="col" className= "text-center">{cell.title}</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td><img align="center" maxWidth="200px" maxHeight="200px" src={cell.images.map} alt={cell.images.mapAltText}/></td>
                </tr>
                <tr>
                    <th className="text-center">General Info</th>
                </tr>
                
                <table className="table table-dark overflow-wrap">
                    <tbody>
                        <tr>
                            <th className="text-center">Alias</th>
                            <td className="text-center">{cell.alias}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Pronounced</th>
                            <td className="text-center">{cell.pronounced}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Population</th>
                            <td className="text-center">{cell.population}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Type</th>
                            <td className="text-center">{cell.type}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Region</th>
                            <td className="text-center">{cell.region}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Language</th>
                            <td className="text-center">{cell.language}</td>
                        </tr>
                    </tbody>
                </table>
                
                <tr>
                    <th className="text-center">Socioeconomics & Culture</th>
                </tr>

                <table className="table table-dark">
                    <tbody>
                        <tr>
                            <th className="text-center">Military</th>
                            <td className="text-center">{cell.militaryForce}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Government Type</th>
                            <td className="text-center">{cell.governmentType}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Religion</th>
                            <td className="text-center">{cell.religion}</td>
                        </tr>
                        <tr>
                            <th className="text-center">Currency</th>
                            <td className="text-center">{cell.currency}</td>
                        </tr>
                    </tbody>
                </table>
            </tbody>

        </table>
    </div>
    )
}