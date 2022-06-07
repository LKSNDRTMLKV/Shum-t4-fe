import axios from 'axios';
import { useEffect, useState } from 'react';

const useEndpoint = (req) => {
    
    const [response, setResponse] = useState({
        data: null,
        pending: false,
        complete: false,
        error: false,
    });

    useEffect(() => {
        setResponse({
            data: null,
            pending: true,
            complete: false,
            error: false,
        })

        axios(req)
        .then(res => {
            setResponse({
                data: res.data,
                pending: false,
                complete: true,
                error: false,
            })
        })
        .catch(() => {
            setResponse({
                data: null,
            pending: false,
            complete: false,
            error: true,
            })
        })

    },[req.url])

    

    return response;
};

export default useEndpoint;