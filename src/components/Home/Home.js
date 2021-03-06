import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { userContext } from '../../App';
import About from '../About/About';
import Hero from '../Hero/Hero';
import News from '../News/News';
import Service from '../Service/Service';

const Home = () => {
    // fetch data using context api
    const [news, services] = useContext(userContext);

    return (
        <div>
            <Hero />
            <Container>
                <h1 className="mt-5 text-danger fw-bold">Pathshala Coaching News</h1>
                <div className="row g-5 my-4">
                    {
                        // data pass by props and use slice to show only 3 news
                        news.slice(0, 3).map(newses => <News key={newses.id} news={newses}></News>)
                    }
                </div>

                <h1 className="my-5 text-danger fw-bold">Our Services</h1>
                <div className="row g-3 my-4">
                    {
                        // data pass by props and use slice to show only 4 services
                        services.slice(0, 4).map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
                <About></About>
            </Container>
        </div>
    );
};

export default Home;