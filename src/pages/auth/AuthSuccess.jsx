import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../components/ui/Loader';

const AuthSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
            localStorage.setItem('authToken', token);

            // decode token
            const user = jwtDecode(token);
            localStorage.setItem('user', JSON.stringify(user));

            navigate('/signup-role');
        }
    }, [location, navigate]);
    return (
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
            <Loader
                show={true}
                description="Registration successful. We're setting up your account…"
            />
        </div>
    );
};

export default AuthSuccess;
