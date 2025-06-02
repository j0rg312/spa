import './Equipment.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import TypingTitle from '../../ui/ux/typingTitle/TypingTitle';
import Section from '../../ui/layouts/Section';

const Equipment = () => {
  return (
    <Section>
      <TypingTitle text="Supervisión de Obra" />

      <ScrollableSection className="service-section" index={0}>
        <div className="content">
          <div className="service-text">
            <h2 className='text-center'>Control y Seguimiento de Proyectos</h2>
            <p>
              En IKA nos encargamos de la supervisión integral de obra, garantizando que cada etapa del proyecto cumpla con los estándares de calidad, tiempos y presupuesto establecidos.
            </p>
            <p>
              Nuestro equipo especializado realiza visitas periódicas, revisa avances y coordina con contratistas para asegurar que el desarrollo de la obra sea óptimo y sin contratiempos.
            </p>
            <p>
              Implementamos herramientas tecnológicas para monitorear en tiempo real el progreso, detectando riesgos potenciales y facilitando la toma de decisiones informadas.
            </p>
          </div>
          <div className="service-image">
            <img
              src="https://psiconcreto.com/wp-content/uploads/2021/08/supervision-de-obra-1.jpg"
              alt="Supervisión de obra"
              width="570"
              height="380"
            />
          </div>
        </div>
      </ScrollableSection>

      <ScrollableSection className="service-section" index={1}>
        <div className="content">
          <div className="service-image">
            <img
              src="https://psiconcreto.com/wp-content/uploads/2021/08/supervision-de-obra-1.jpg"
              alt="Gestión y control de obra"
              width="570"
              height="380"
            />
          </div>
          <div className="service-text">
            <h2 className='text-center'>Gestión y Control de Calidad</h2>
            <p>
              Supervisamos cada detalle de la obra para asegurar la correcta ejecución conforme a los planos, especificaciones y normativas vigentes.
            </p>
            <p>
              Aseguramos el uso adecuado de materiales y la aplicación de procesos certificados para entregar proyectos seguros, funcionales y duraderos.
            </p>
            <p>
              En <strong>IKA</strong> brindamos informes claros y oportunos que facilitan la comunicación entre todas las partes involucradas y garantizan el éxito del proyecto.
            </p>
          </div>
        </div>
      </ScrollableSection>
    </Section>
  );
};

export default Equipment;
