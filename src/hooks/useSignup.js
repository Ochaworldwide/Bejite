import { useState } from 'react';
import axiosInstance from '../services/axios';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const signup = async (url, payload) => {
        setLoading(true);
        setData(null);
        setError(null);

        try {
            const response = await axiosInstance.post(url, payload);
            const result = response.data;
            setData(result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { loading, data, error, signup };
};

export default useSignup;
