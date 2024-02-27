import { useEffect, useState } from "react";

export const useApi = (getData) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const api = async () => {
        try {
            setLoading(true);
            let d = await getData();
            setData(d);

        } catch (e) {
            setError(true);
        } finally {
          
            setLoading(false);
        }
    }
    useEffect(() => {
        api();

    }, []);

    return { loading, error, data }
}