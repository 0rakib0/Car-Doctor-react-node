import image from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100 border border-gray-600">
                    <h4 className='text-center text-4xl pt-4 font-bold'>Registration</h4>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile pic</span>
                            </label>
                            <input type="text" placeholder="Profile Pic URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white hover:text-black hover:border">Register</button>
                        </div>
                    </form>
                    <p className='text-center mb-4'>Already Have Account? <Link to='/login' className='font-bold text-[#FF3811]'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;