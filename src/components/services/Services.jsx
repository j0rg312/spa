import './Services.css';
import ScrollableSection from '../ui/ux/scrollableSection/ScrollableSection';
import { FaHammer, FaBuilding, FaDraftingCompass, FaHardHat, FaTruckMoving, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import TypingTitle from '../ui/ux/typingTitle/TypingTitle';
import Section from '../ui/layouts/Section';
import { Helmet } from 'react-helmet-async';

const Services = () => {
const services = [
  {
    title: 'Construcción',
    description: 'Construcción de infraestructuras resistentes y de alta calidad.',
    icon: <FaHammer />,
    path: '/services/support'
  },
  {
    title: 'Diseño Arquitectónico',
    description: 'Desarrollo de viviendas modernas, seguras y funcionales.',
    icon: <FaBuilding />,
    path: '/services/networks'
  },
  {
    title: 'Protección y Seguridad',
    description: 'Planes arquitectónicos personalizados para cada proyecto.',
    icon: <FaDraftingCompass />,
    path: '/services/telefonia'
  },
  {
    title: 'Ingeniería Estructural',
    description: 'Control y seguimiento profesional durante todo el proceso constructivo.',
    icon: <FaHardHat />,
    path: '/services/equipment'
  },
  {
    title: 'Gestión de Obras',
    description: 'Preparación del terreno para asegurar una base sólida y estable.',
    icon: <FaTruckMoving />,
    path: '/services/digital'
  },
  {
    title: 'Equipos y Servicios',
    description: 'Servicios de mantenimiento para instalaciones industriales.',
    icon: <FaTools />,
    path: '/services/security'
  },
];

  return (
    <Section>
                    <Helmet>
                <title>IKA - Soluciones</title>
                <meta name="description" content="IKA es una empresa mexicana especializada en consultoría y soporte de TI." />
            </Helmet>
      <TypingTitle text="Servicios"/>
<ScrollableSection id="services">
      <div className="services-grid">
        {services.map((service, index) => (
            <Link to={service.path} key={index} className="service-card">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <div className="service-info">
              <p>{service.description}</p>
              <div className="service-icon">{service.icon}</div>
            </div>
            </Link>
        ))}
      </div>
    </ScrollableSection>
    </Section>
   
  );
};

export default Services;
