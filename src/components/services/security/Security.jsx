import './Security.css';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import TypingTitle from '../../ui/ux/typingTitle/TypingTitle';
import Section from '../../ui/layouts/Section';

const Security = () => {
    return (
        <Section> 
            <TypingTitle text="Mantenimiento Industrial"/>

            <ScrollableSection className="security-section" index={0}>
                <div className="security-content">
                    <div className="security-text">
                        <h2 className="security-title text-center">Mantenimiento Preventivo</h2>
                        <p className="security-paragraph">
                            El mantenimiento preventivo es fundamental para asegurar el correcto funcionamiento y la vida útil de la maquinaria industrial, evitando fallas inesperadas y costosos tiempos muertos.
                        </p>
                        <p className="security-paragraph">
                            Consiste en la inspección, limpieza, lubricación y ajustes periódicos programados para anticipar y corregir posibles problemas antes de que ocurran.
                        </p>
                        <p className="security-paragraph">
                            En nuestra empresa diseñamos programas personalizados que se adaptan a las necesidades específicas de cada planta o equipo, garantizando máxima eficiencia y seguridad.
                        </p>
                    </div>

                    <div className="security-image">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeUY6MfOhYZs7V-rJy0cP6TzxM_U035CeTQ&s" 
                            alt="Mantenimiento Preventivo" 
                            className="security-img"
                        />
                    </div>
                </div>
            </ScrollableSection>

            <ScrollableSection className="security-section" index={1}>
                <div className="security-content">
                 
                    <div className="security-image">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeUY6MfOhYZs7V-rJy0cP6TzxM_U035CeTQ&s" 
                            alt="Mantenimiento Correctivo" 
                            className="security-img"
                        />
                    </div>
                    <div className="security-text">
                        <h2 className="security-title text-center">Mantenimiento Correctivo</h2>
                        <p className="security-paragraph">
                            El mantenimiento correctivo se lleva a cabo cuando se detecta una falla o avería en el equipo, con el objetivo de reparar y restaurar su funcionamiento normal lo antes posible.
                        </p>
                        <p className="security-paragraph">
                            Nuestro equipo de técnicos especializados responde de manera rápida y eficiente, minimizando el impacto en la producción y asegurando la calidad de la reparación.
                        </p>
                        <p className="security-paragraph">
                            Contamos con un amplio inventario de repuestos y herramientas para ofrecer soluciones inmediatas y duraderas a las necesidades de tu planta industrial.
                        </p>
                    </div>
  
                </div>

            </ScrollableSection>
        </Section>
    );
}

export default Security;
