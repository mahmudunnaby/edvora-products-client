import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [users, setUsers] = useState([])
    const refName = useRef('')
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://assessment.api.vweb.app/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const name = refName.current.value


        if (users.filter(user => user.name === name)) {
            navigate('/products')
        }
        else { toast("The user does not exists") }
    }


    // const { isLoading, error, data: user } = useQuery('user', () =>
    //     fetch('https://assessment.api.vweb.app/users').then(res =>
    //         res.json()
    //     )
    // )
    // if (isLoading) {
    //     return <Loading></Loading>
    // }






    return (

        <div className='flex justify-center items-center mt-96'>
            <form onSubmit={handleLoginSubmit} >
                <input ref={refName} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className="btn btn-sm mt-5">Login</button>
            </form>
            <ToastContainer />
        </div>



    );
};

export default Login;