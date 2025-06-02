import './Support.css';
import { FaTools, FaHardHat, FaShieldAlt } from 'react-icons/fa';
import ScrollableSection from '../../ui/ux/scrollableSection/ScrollableSection';
import TypingTitle from '../../ui/ux/typingTitle/TypingTitle';
import Section from '../../ui/layouts/Section';

const Support = () => {
    return (
        <Section>
            <TypingTitle text="Servicios de Obra Civil" />

            <ScrollableSection className="section-obra-civil" index={0}>
                <h2 className='text-center'>Construcción y Supervisión</h2>
                <p>
                    En <strong>IKA</strong>, brindamos soluciones integrales en el desarrollo de proyectos de obra civil, desde la planeación hasta la ejecución y supervisión final.
                </p>
                <p>
                    Nuestro objetivo es garantizar la calidad, seguridad y cumplimiento de plazos en cada una de las obras que realizamos, ajustándonos a las necesidades específicas de cada cliente.
                </p>
                <p>
                    Con más de 20 años de experiencia en el sector, en <strong>IKA</strong> somos el aliado ideal para asegurar el éxito de tu proyecto de construcción.
                </p>
            </ScrollableSection>

            <ScrollableSection className="section-urbanismo" index={1}>
                <h2 className='text-center'>Infraestructura y Urbanización</h2>
                <p>
                    Nos especializamos en proyectos de urbanización, pavimentación, instalación de drenajes pluviales y sanitarios, así como en redes hidráulicas.
                </p>
                <p>
                    Implementamos tecnología de vanguardia y las mejores prácticas del sector para garantizar resultados eficientes y sustentables.
                </p>
            </ScrollableSection>

            <ScrollableSection className="support-features" index={2}>
                <div className="feature">
                    <FaHardHat className="feature-icon" />
                    <h3 className='text-center'>Supervisión de Obra</h3>
                    <p>Verificamos que la ejecución del proyecto cumpla con los planos, especificaciones y normativas.</p>
                </div>

                <div className="feature">
                    <FaTools className="feature-icon" />
                    <h3 className='text-center'>Mantenimiento Correctivo</h3>
                    <p>Realizamos reparaciones estructurales o estéticas en edificaciones e infraestructura.</p>
                </div>

                <div className="feature">
                    <FaTools className="feature-icon" />
                    <h3 className='text-center'>Mantenimiento Preventivo</h3>
                    <p>Programamos inspecciones regulares para asegurar la conservación de la obra.</p>
                </div>

                <div className="feature">
                    <FaShieldAlt className="feature-icon" />
                    <h3 className='text-center'>Seguridad en el Sitio</h3>
                    <p>Implementamos medidas estrictas de seguridad industrial en cada etapa del proyecto.</p>
                </div>
            </ScrollableSection>

            <ScrollableSection index={3}> 
                <h3 className='text-center'>Contratos de Mantenimiento</h3>
                <h4>¿Por qué contratar un servicio de mantenimiento?</h4>
                <p>
                    Contar con un contrato de mantenimiento con <strong>IKA</strong> asegura la preservación de tus instalaciones, reduce el riesgo de fallas y prolonga la vida útil de tu infraestructura.
                </p>
                <p>
                    Ofrecemos diferentes tipos de contratos ajustados a tus necesidades, que incluyen revisiones periódicas, informes técnicos y atención inmediata en caso de emergencias.
                </p>

                <h4>Beneficios</h4>
                <ul>
                    <li>Reducción de costos por reparaciones mayores.</li>
                    <li>Atención personalizada y continua.</li>
                    <li>Equipos certificados y con experiencia en obra civil.</li>
                    <li>Mejora de la seguridad estructural.</li>
                    <li>Documentación técnica actualizada.</li>
                </ul>
            </ScrollableSection>

            <ScrollableSection index={4}>
                <table>
                    <thead>
                        <tr> 
                            <th>SERVICIO</th>
                            <th>PLAN PLATINUM</th>
                            <th>PLAN GOLD</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Duración del contrato</td>
                            <td>1 año mínimo</td>
                            <td>1 año mínimo</td>
                        </tr>
                        <tr>
                            <td>Disponibilidad</td>
                            <td>24/7</td>
                            <td>Lun - Vie (8:00 a 18:00)</td>
                        </tr>
                        <tr>
                            <td>Tiempo de respuesta</td>
                            <td>Hasta 2 horas</td>
                            <td>Hasta 4 horas</td>
                        </tr>
                        <tr>
                            <td>Inspecciones programadas</td>
                            <td>Trimestrales</td>
                            <td>Semestrales</td>
                        </tr>
                        <tr>
                            <td>Reportes técnicos</td>
                            <td>Detallados y mensuales</td>
                            <td>Resumen trimestral</td>
                        </tr>
                        <tr>
                            <td>Reparaciones incluidas</td>
                            <td>Sí</td>
                            <td>Parciales</td>
                        </tr>
                    </tbody>
                </table>
            </ScrollableSection>

            <ScrollableSection className="section-respaldos" index={5}>
                <div className="section-content">
                    <div className="section-header">
                        <h3 className="title-respaldos text-center">Levantamiento y Documentación</h3>
                    </div>
                    <div className="row">
                        <div className="column-left">
                            <p>
                                Realizamos levantamientos topográficos y estructurales precisos para respaldar cada fase del proyecto.
                            </p>
                            <p>
                                Garantizamos una trazabilidad completa y actualizada, necesaria para auditorías y control de calidad.
                            </p>
                        </div>
                        <div className="column-right">
                            <img src="https://www.ika.mx/wp-content/uploads/2016/11/acronis-570x380.jpg" alt="Levantamiento" className="image-responsive" />
                        </div>
                    </div>
                </div>
            </ScrollableSection>

            <ScrollableSection className="section-recuperacion" index={6}>
                <div className="section-content">
                    <div className="section-header">
                        <h3 className="title-recuperacion text-center">Gestión de Proyectos</h3>
                    </div>
                    <div className="row">
                        <div className="column-left">
                            <img src="https://www.ika.mx/wp-content/uploads/2016/11/backup-570x380.png" alt="Gestión" className="image-responsive" />
                        </div>
                        <div className="column-right">
                            <p>
                                Nuestro equipo de ingenieros civiles, arquitectos y supervisores gestiona cada etapa del proyecto para asegurar eficiencia y cumplimiento normativo.
                            </p>
                            <p>
                                La ética y el compromiso con la calidad son los pilares de nuestro servicio. Supervisamos cada detalle para garantizar resultados duraderos y de alto nivel técnico.
                            </p>
                        </div>
                    </div>
                </div>
            </ScrollableSection>
        </Section>
    );
};

export default Support;
