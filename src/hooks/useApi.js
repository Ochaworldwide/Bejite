import axios from 'axios';
import React, { useCallback, useState } from 'react';
import axiosInstance from '../services/axios';

const useApi = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const postData = useCallback(async (url, payload) => {
        try {
            setLoading(true);

            const response = await axiosInstance.post(url, payload);
            const result = await response.data;
            setData(result);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const message =
                    err.response.data.error || err.response.data.message;
                setError(message);
                return;
            } else if (err instanceof Error) {
                setError(err.message);
                return;
            } else {
                setError(String(err));
                return;
            }
        } finally {
            setLoading(false);
        }
    }, []);

    const getData = useCallback(async (url) => {
        try {
            setLoading(true);

            const response = await axiosInstance.get(url);
            const result = await response.data;
            setData(result);
        } catch (err) {
            console.log({ err });
            if (axios.isAxiosError(err)) {
                const message = err.response?.data.message || err.message;
                setError(message);
                return;
            } else if (err instanceof Error) {
                setError(err.message);
                return;
            } else {
                setError(String(err));
                return;
            }
        } finally {
            setLoading(false);
        }
    }, []);

    const postDataPromise = useCallback(async (url, payload) => {
        try {
            setLoading(true);

            const response = await axiosInstance.post(url, payload);
            const result = await response.data;
            setData(result);
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const message =
                    err.response.data.error || err.response.data.message;
                setError(message);
                throw new Error(message);
            } else if (err instanceof Error) {
                const message = err.message;
                setError(message);
                throw new Error(message);
            } else {
                const message = String(err);
                setError(message);
                throw new Error(message);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    return { loading, data, error, postData, getData, postDataPromise };
};

export default useApi;
