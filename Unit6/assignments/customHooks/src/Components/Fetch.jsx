import axios from "axios";
import { useCustomFetch } from "../Hooks/useCustomFetch";

export const getData = async () => {
    let r = await axios.get("http://localhost:8080/countries");
    return r.data;
}

export const Fetch = () => {
    
    let { loading, data, error, Refresh } = useCustomFetch(getData);


    return (
        <div>
            <h2 style={{ gap: "10px" }}>Fetch
                <button onClick={Refresh}>Refresh</button>
            </h2>
            <div>

                {loading && <div>Loading..</div>}
                {error && <div>Error..</div>}
                {!loading && !error && (
                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Country Name</th>
                                <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>City Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <tr key={index} style={{ border: '1px solid #dddddd' }}>
                                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{row.country}</td>
                                    <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{row.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}


            </div>
        </div>
    )
}