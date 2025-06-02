import './Home.css';
import CallToAction from '../calltoaction/CallToAction'
import ScrollableSection from '../ui/ux/scrollableSection/ScrollableSection';
import TypingTitle from '../ui/ux/typingTitle/TypingTitle';
import Section from '../ui/layouts/Section';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <Section>
            <Helmet defer={false}>
                <title>Constructora LYR - Inicio</title>
                <meta name="description" content="Constructora LYR es una empresa mexicana especializada en la edificación de casas en serie, con más de 20 años de experiencia en el sector." />
            </Helmet>
            
            <TypingTitle text="Bienvenidos a Constructora LYR" className="typing-title" />
            
            <ScrollableSection className="home-container" index={0}>
                <p>
                    <strong className='lyr'>LYR Constructora </strong> es una empresa mexicana con más de 7 años de trayectoria formal como constructora, especializada en el desarrollo de **viviendas en serie de alta calidad**. Surge respaldada por más de 20 años de experiencia de su fundador en el ramo de la construcción.
                </p>
                <p>
                    A lo largo de estos años, hemos participado en diversos proyectos residenciales, destacándonos por nuestro compromiso con la calidad, la puntualidad y la satisfacción de nuestros clientes. Nos enfocamos en crear espacios funcionales, accesibles y duraderos que se adapten a las necesidades de las familias mexicanas.
                </p>
                <p>
                    Nuestro equipo de trabajo está conformado por profesionales de la construcción comprometidos con la excelencia. Trabajamos de manera cercana con nuestros clientes y aliados para asegurar que cada proyecto se desarrolle con los más altos estándares técnicos y humanos.
                </p>

                <button className="request">
                    <CallToAction content="Solicita una consulta" />
                </button>
            </ScrollableSection>
        </Section>
    );
};

export default Home;
