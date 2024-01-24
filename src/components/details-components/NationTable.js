
export default function NationTable(nation) {
    const cell = nation.nation


    return (<div>
        <table className="table align-middle table-dark">
            <thead>
                <tr><th scope="col" className= "text-center">{cell.title}</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src='nordansk.png' alt={cell.images.mapAltText}/></td>
                </tr>
                <tr>
                    <th className="text-center">General Info</th>
                </tr>
                <table className="table table-dark">
                    <tbody>
                        <tr>
                            <th className="text-center">Alias</th>
                            <td className="text-center">{cell.alias}</td>
                        </tr>
                    </tbody>
                </table>
            </tbody>

        </table>
    </div>
    )
}