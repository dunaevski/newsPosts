import {useState, useEffect} from 'react';
import axios from "axios";
import {ErrorsType} from "../types/apiResponse";

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = 'a154a7fb5a9e4ac9a6afd4fec4d11370';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = API_KEY;

type FetchParams = Record<string, any>

export const useFetch = <T>(url = '/', params: FetchParams = {}) => {
    const [response, setResponse] = useState<T | null>(null);
    const [error, setError] = useState<ErrorsType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async (params: FetchParams) => {
            setLoading(true);
            try {
                const res = await axios.get<T>(url, {params});
                setResponse(res.data);
                setError(null);
            } catch (err) {
                if (axios.isAxiosError(err) && err.response) {
                    setError((err.response?.data as ErrorsType));
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData(params);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.from, params.to]);

    return {response, loading, error};
};
