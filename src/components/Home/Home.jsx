import Award from '../Award/Award';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import AboutUs from '../AboutUs/AboutUs';
import FAQ from '../FAQ/FAQ';
import Partner from './Partner/Partner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <Chef></Chef>
                <Award></Award>
                <FAQ></FAQ>
                <Partner></Partner>
            </div>
                <AboutUs></AboutUs>
        </div>
    );
};

export default Home;