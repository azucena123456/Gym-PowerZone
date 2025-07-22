import { FAQContainer, FAQTitle, FAQSection, FAQQuestion } from './styles/preguntasFrecuentes.styles';

const PreguntasFrecuentes = () => {
  return (
    <FAQContainer>
      <FAQTitle>PREGUNTAS FRECUENTES</FAQTitle>

      <FAQSection>
        <h2>Membresías y Precios</h2>
        <FAQQuestion>¿Qué tipo de membresías ofrecen?</FAQQuestion>
        <FAQQuestion>¿Hay descuentos para estudiantes o grupos?</FAQQuestion>
      </FAQSection>

      <FAQSection>
        <h2>Horarios y Ubicación</h2>
        <FAQQuestion>¿Cuál es el horario de atención?</FAQQuestion>
        <FAQQuestion>¿Dónde se encuentran ubicados?</FAQQuestion>
      </FAQSection>

      <FAQSection>
        <h2>Entrenadores y Servicios</h2>
        <FAQQuestion>¿Ofrecen entrenamiento personalizado?</FAQQuestion>
        <FAQQuestion>¿Hay clases grupales disponibles?</FAQQuestion>
      </FAQSection>
    </FAQContainer>
  );
};

export default PreguntasFrecuentes;