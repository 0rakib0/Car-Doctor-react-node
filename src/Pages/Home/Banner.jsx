
import image1 from '../../../src/assets/images/banner/1.jpg'
import image2 from '../../../src/assets/images/banner/2.jpg'
import image3 from '../../../src/assets/images/banner/3.jpg'
import image4 from '../../../src/assets/images/banner/4.jpg'
import image5 from '../../../src/assets/images/banner/5.jpg'
import image6 from '../../../src/assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full rounded-lg" />
                <div className="absolute items-center h-full rounded-lg left-0 space-y-4 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-7 transform translate-y-[30%] pl-12 w-1/2'>
                        <h4 className='text-6xl font-bold'>Affordable Price For Car Servicing</h4>
                        <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='bg-[#FF3811] p-4 rounded-lg hover:bg-transparent hover:border hover:border-white'>Discover More</button>
                            <button className='p-4 border border-white rounded-lg hover:border-[#FF3811] hover:bg-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform gap-4 -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn hover:bg-red-500 hover:border-red-500 hover:text-white btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-red-500 text-white hover:text-black border-red-500">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full rounded-lg" />
                <div className="absolute items-center h-full rounded-lg left-0 space-y-4 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-7 transform translate-y-[30%] pl-12 w-1/2'>
                        <h4 className='text-6xl font-bold'>Affordable Price For Car Servicing</h4>
                        <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='bg-[#FF3811] p-4 rounded-lg hover:bg-transparent hover:border hover:border-white'>Discover More</button>
                            <button className='p-4 border border-white rounded-lg hover:border-[#FF3811] hover:bg-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform gap-4 -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn hover:bg-red-500 hover:border-red-500 hover:text-white btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-red-500 text-white hover:text-black border-red-500">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full rounded-lg" />
                <div className="absolute items-center rounded-lg h-full left-0 space-y-4 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-7 transform translate-y-[30%] pl-12 w-1/2'>
                        <h4 className='text-6xl font-bold'>Affordable Price For Car Servicing</h4>
                        <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='bg-[#FF3811] p-4 rounded-lg hover:bg-transparent hover:border hover:border-white'>Discover More</button>
                            <button className='p-4 border border-white rounded-lg hover:border-[#FF3811] hover:bg-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform gap-4 -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn hover:bg-red-500 hover:border-red-500 hover:text-white btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-red-500 text-white hover:text-black border-red-500">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className="w-full rounded-lg" />
                <div className="absolute items-center h-full rounded-lg left-0 space-y-4 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white space-y-7 transform translate-y-[30%] pl-12 w-1/2'>
                        <h4 className='text-6xl font-bold'>Affordable Price For Car Servicing</h4>
                        <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-4'>
                            <button className='bg-[#FF3811] p-4 rounded-lg hover:bg-transparent hover:border hover:border-white'>Discover More</button>
                            <button className='p-4 border border-white rounded-lg hover:border-[#FF3811] hover:bg-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform gap-4 -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn hover:bg-red-500 hover:border-red-500 hover:text-white btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-red-500 text-white hover:text-black border-red-500">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;