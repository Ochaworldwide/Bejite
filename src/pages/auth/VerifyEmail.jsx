import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../components/ui/Loader';
import useApi from '../../hooks/useApi';
import { toast } from 'react-toastify';

const VerifyEmail = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { loading, data, error, getData } = useApi();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const fullPath = location.pathname + location.search;
        const token = params.get('token');
        const email = params.get('email');

        if (token && email) {
            getData(fullPath);
        }
    }, [getData, location, navigate]);

    useEffect(() => {
        if (data) {
            navigate('/');
        }

        if (error) {
            toast(error, { type: 'error' });
        }
    }, [data, error, navigate]);
    return (
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
            {
                <Loader
                    show={true}
                    description={
                        loading
                            ? 'Verifying your email, please wait…'
                            : 'We need to verify your email to continue.'
                    }
                    spin={loading}
                />
            }
        </div>
    );
};

export default VerifyEmail;
