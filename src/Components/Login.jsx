import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleLogin = async () => {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('grant_type', 'password');

        try {
            const response = await fetch('https://apiv2stg.promilo.com/user/oauth/token', {
                method: 'POST',
                body: formData,
            });

            console.log('Response Headers:', response.headers);

            if (response.ok) {
                const data = await response.json();
                console.log('Access Token:', data.access_token);
                navigate('/product-list')
            } else {
                console.error('Failed to login:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
