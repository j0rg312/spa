import ScrollableSection from '../ui/ux/scrollableSection/ScrollableSection';
import './About.css';
import TypingTitle from '../ui/ux/typingTitle/TypingTitle';
import Section from '../ui/layouts/Section';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <Section>
            <Helmet>
                <title>LYR Constructora - Nosotros</title>
                <meta name="description" content="LYR Constructora es una empresa mexicana especializada en la construcción de viviendas en serie." />
            </Helmet>

            <TypingTitle text="Quiénes Somos" />

            <ScrollableSection index={0}>
                <p>
                    <strong>LYR Constructora</strong> es una empresa mexicana fundada con el propósito de brindar soluciones habitacionales de calidad a las familias del país. Nos especializamos en la <strong>construcción de viviendas en serie</strong>, combinando funcionalidad, diseño y accesibilidad.
                </p>
                <p>
                    Nuestro equipo está conformado por profesionales con amplia experiencia en el sector de la construcción, comprometidos con la excelencia en cada proyecto. A través de procesos optimizados, garantizamos desarrollos eficientes, seguros y duraderos.
                </p>
                <p>
                    LYR Constructora participa activamente en cada etapa del proyecto: desde la planeación hasta la entrega. Nuestro objetivo es construir comunidades sólidas, cómodas y adaptadas a las necesidades de quienes las habitan.
                </p>
            </ScrollableSection>

            <ScrollableSection className="values" index={1}>
                <h3 className='text-center'>Nuestros Valores</h3>
                <ul>
                    <li><strong>🏗️ Compromiso:</strong> Nos esforzamos por cumplir cada proyecto en tiempo y forma, con calidad garantizada.</li>
                    <li><strong>📐 Profesionalismo:</strong> Contamos con personal capacitado y procesos bien establecidos.</li>
                    <li><strong>🏠 Responsabilidad social:</strong> Buscamos crear espacios dignos, seguros y sostenibles para las familias mexicanas.</li>
                </ul>
            </ScrollableSection>

            <ScrollableSection className="mission-vision" index={2}>
                <h3 className='text-center'>Misión</h3>
                <p>
                    Diseñar y construir viviendas accesibles, funcionales y de calidad, promoviendo el bienestar y el desarrollo de nuestras comunidades.
                </p>
                <h3>Visión</h3>
                <p>
                    Ser la constructora líder en México en el desarrollo de fraccionamientos habitacionales en serie, reconocida por su innovación, eficiencia y compromiso social.
                </p>
            </ScrollableSection>
        </Section>
    );
};

export default About;
