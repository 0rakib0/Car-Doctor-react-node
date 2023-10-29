
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import image from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
const Login = () => {
    const {name} = useContext(AuthContext)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100 border border-gray-600">
                    <h4 className='text-center text-4xl pt-4 font-bold'>Login</h4>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white hover:text-black hover:border">Login</button>
                        </div>
                    </form>
                    <p className='text-center mb-4'>Do Not Have Account? <Link to='/register' className='font-bold text-[#FF3811]'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;