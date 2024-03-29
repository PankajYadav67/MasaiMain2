import { useEffect, useState } from "react";

export const useApi = (getData ) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const api = async () => {
        try {
            setLoading(true);
            let d = await getData();
            setData(d);
        } catch (error) {
            setError(true);
        }
        finally {
            setLoading(false);
            setError(false);
        }
    }
    useEffect(() => {
        api();
    }, []);

    return { loading, data, error, Refresh : api }
}