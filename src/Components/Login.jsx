import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Invalid email format');
                return;
            }

            // Validate password
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(password)) {
                alert('Invalid password format');
                return;
            }

            // Convert password to sha256 format

            // Call login API
            const loginResponse = await axios.post('https://apiv2stg.promilo.com/user/oauth/token', {
                username: email,
                password: password,
                grant_type: 'password',
            });

            const accessToken = loginResponse.data.access_token;

            // Call product list API with access token in header
            const productListResponse = await axios.get('https://api.kalpav.com/api/v1/product/category/retail', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            console.log('Product List:', productListResponse.data);
            navigate('/product-list')
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
