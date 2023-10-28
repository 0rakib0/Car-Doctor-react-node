
import image1 from '../../assets/images/about_us/person.jpg'
import image2 from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content justify-between flex-col lg:flex-row">
                <div className='relative lg:w-1/2'>
                    <img src={image1} className="max-w-sm rounded-lg shadow-2xl" />
                    <img src={image2} className="max-w-sm rounded-lg shadow-2xl absolute w-3/4 left-44 top-1/2 border-8 border-white" />
                </div>
                <div className='lg:1/2 md:ml-24'>
                    <h4 className='text-2xl font-bold text-[#FF3811]'>About Us</h4>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="bg-[#FF3811] text-white py-3 px-6 rounded-lg">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;