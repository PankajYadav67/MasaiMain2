import { useState } from "react";

export const useDelayedApi = (getData) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const api = async (params) => {
        try {
            setLoading(true);
            let d = await getData(params);
            setData(d);
        } catch (error) {
            setError(true);
        }
        finally {
            setLoading(false);
            setError(false);
        }
    }


    return { loading, data, error, Refresh: api, mutate: api }
}