import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseAxiosFetch = (dataURL) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoading(true)
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                })
                if(isMounted) {
                    setData(response.data)
                    setFetchError(null)
                    setIsLoading(false)
                }
            } catch (err) {
                if(isMounted) {
                    setFetchError(err.message)
                    setData([]);
                }
            }
        }

        fetchData(dataURL);

        const cleanUp = () => {
            console.log('clean up function');
            isMounted = false;
            source.cancel()
        }

        return cleanUp;
    },[dataURL])

    return {
        data,
        fetchError,
        isLoading
    }
}

export default UseAxiosFetch