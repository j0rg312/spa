import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

import aws from '../../../assets/aws_logo_smile_1200x630.png';
import cloud from '../../../assets/cloundLoginLogo.png';
import google from '../../../assets/google-workspace-logo.svg';
import phone from '../../../assets/net2phone-logo.svg';

import FooterMovil from '../footerMovil/FooterMovil';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 940);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 941);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) return <FooterMovil />;

  return (
    <footer>
      <div className="footer-content">
        <div className="expanded-content">
          <div className="contact-info">
            <h2 style={{ color: '#010a1f' }}>Contáctanos</h2>
            <p className="footer-text">Antílope y Cebra #3700</p>
            <p className="footer-text">Col. Lomas del Sol, Chihuahua, México</p>
            <p className="footer-text">Teléfono: +52 (614) 111 111</p>
            <p className="footer-text">
              Email: <a href="mailto:contacto@lyr.mx">contacto@lyr.mx</a>
            </p>
            <p className="footer-text">
              Soporte: <a href="mailto:soporte@lyr.mx">soporte@lyr.mx</a>
            </p>

            <div className="container-info">
              <div className="company-info">
                <h3>Sobre LYR Constructora</h3>
                <p className="footer-text">
                  En LYR Constructora nos especializamos en el desarrollo y construcción de viviendas en serie, comprometidos con la calidad, innovación y bienestar de las familias mexicanas. Nuestra experiencia garantiza proyectos duraderos, funcionales y accesibles.
                </p>
              </div>

              <div className="comercial-aliance">
                <h2 style={{ textAlign: 'center', color: '#010a1f' }}>Alianzas Tecnológicas</h2>
                <ul className="comercial-list">
                  <li><img src={aws} alt="Amazon Web Services" /></li>
                  <li><img src={cloud} alt="Soluciones Cloud" /></li>
                  <li><img src={google} alt="Google Workspace" /></li>
                  <li><img src={phone} alt="Net2Phone" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="compact-content">
          <p className="footer-text">&copy; {currentYear} LYR Constructora - Todos los derechos reservados.</p>

          <div className="social-icons">
            <a href="https://www.facebook.com/InternetKnowledgeApplied" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/InternetKnowledgeApplied" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>

          <div className="hover">
            <p className="footer-text">Conoce más sobre nuestros proyectos</p>
          </div>

          <div className="schedule">
            <p className="footer-text">Horario: Lunes a Viernes de 9:00 a 18:00, Sábados de 9:00 a 14:00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
