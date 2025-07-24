import React, { useState } from 'react';
import { View } from 'react-native';
import {
  FAQContainer,
  FAQTitle,
  FAQColumnsContainer,
  FAQColumn,
  FAQQuestion,
  QuestionText,
  FAQToggleButton,
  ToggleIcon,
  FAQAnswer,
  QuestionContainer,
  QuestionHighlight
} from './styles/preguntasFrecuentes.styles';

const PreguntasFrecuentes = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [hoveredQuestion, setHoveredQuestion] = useState<string | null>(null);

  const toggleQuestion = (index: string) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "¿Qué tipo de membresías ofrecen?",
      answer: "Nuestra membresía regular tiene un costo de $400 por mes. ¡Pero si eres nuevo, puedes obtener hasta 3 meses GRATIS! Esta membresía te da acceso completo a pesas, cardio, HIIT, la zona funcional y mucho más."
    },
    {
      question: "¿Hay descuentos para estudiantes o grupos?",
      answer: "Sí, ofrecemos descuentos especiales para estudiantes con credencial vigente y para grupos a partir de 5 personas. Por favor, contacta a nuestro equipo de ventas para más detalles sobre las tarifas grupales y los requisitos."
    },
    {
      question: "¿Cuál es el horario de atención?",
      answer: "Estamos abiertos de Lunes a Viernes de 6:00 AM a 10:00 PM, y los Sábados de 8:00 AM a 4:00 PM. Los Domingos, el gimnasio permanece cerrado."
    },
    {
      question: "¿Dónde se encuentran ubicados?",
      answer: "Nuestra sede principal está en el centro de la ciudad, en Av. Siempre Viva #123. También contamos con sucursales en las principales zonas de la ciudad. Puedes ver un mapa detallado en nuestra sección de Contacto."
    },
    {
      question: "¿Ofrecen entrenamiento personalizado?",
      answer: "Sí, en Gym-PowerZone ofrecemos programas especializados y atención personalizada con nuestros entrenadores certificados. Puedes agendar una sesión de prueba gratuita para conocer a tu futuro entrenador."
    },
    {
      question: "¿Hay clases grupales disponibles?",
      answer: "¡Absolutamente! Contamos con una amplia variedad de clases grupales como spinning, zumba, yoga, pilates y clases de alta intensidad. Puedes consultar el horario semanal de clases en nuestra página de clases."
    }
  ];

  // Dividir las preguntas en dos columnas
  const leftColumnQuestions = faqData.slice(0, 3);
  const rightColumnQuestions = faqData.slice(3, 6);

  return (
    <FAQContainer>
      <FAQTitle>PREGUNTAS FRECUENTES</FAQTitle>

      <FAQColumnsContainer>
        <FAQColumn>
          {leftColumnQuestions.map((item, index) => (
            <View key={`question-left-${index}`}>
              <FAQQuestion
                onPress={() => toggleQuestion(`left-${index}`)}
                onPressIn={() => setHoveredQuestion(`left-${index}`)}
                onPressOut={() => setHoveredQuestion(null)}
              >
                <QuestionContainer>
                  <QuestionHighlight style={{
                    backgroundColor: hoveredQuestion === `left-${index}` ? '#ff5722' : 'transparent'
                  }} />
                  <QuestionText>{item.question}</QuestionText>
                </QuestionContainer>
                <ToggleIcon>{activeQuestion === `left-${index}` ? '−' : '+'}</ToggleIcon>
              </FAQQuestion>
              
              {activeQuestion === `left-${index}` && (
                <FAQAnswer>{item.answer}</FAQAnswer>
              )}
            </View>
          ))}
        </FAQColumn>

        <FAQColumn>
          {rightColumnQuestions.map((item, index) => (
            <View key={`question-right-${index}`}>
              <FAQQuestion
                onPress={() => toggleQuestion(`right-${index}`)}
                onPressIn={() => setHoveredQuestion(`right-${index}`)}
                onPressOut={() => setHoveredQuestion(null)}
              >
                <QuestionContainer>
                  <QuestionHighlight style={{
                    backgroundColor: hoveredQuestion === `right-${index}` ? '#ff5722' : 'transparent'
                  }} />
                  <QuestionText>{item.question}</QuestionText>
                </QuestionContainer>
                <ToggleIcon>{activeQuestion === `right-${index}` ? '−' : '+'}</ToggleIcon>
              </FAQQuestion>
              
              {activeQuestion === `right-${index}` && (
                <FAQAnswer>{item.answer}</FAQAnswer>
              )}
            </View>
          ))}
        </FAQColumn>
      </FAQColumnsContainer>
    </FAQContainer>
  );
};

export default PreguntasFrecuentes;