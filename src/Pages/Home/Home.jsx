import About from "./About";
import Banner from "./Banner";
import Service from "./Service";


const Home = () => {
    return (
        <div className="mt-8">
            <Banner></Banner>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;