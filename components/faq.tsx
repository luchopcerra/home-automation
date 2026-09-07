'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const questions = [
  { question: '¿Tengo que comprar todos los equipos de nuevo?', answer: 'No necesariamente. Primero revisamos lo que ya tenés y su compatibilidad con Home Assistant. A partir de eso, definimos qué se puede aprovechar y qué equipo haría falta sumar.' },
  { question: '¿Vendés los dispositivos?', answer: 'El servicio se centra en la asesoría y la configuración. No tengo stock de equipos: te ayudo a elegirlos según el proyecto. Los dispositivos y cualquier compra necesaria se presupuestan por separado del trabajo.' },
  { question: '¿Qué es Home Assistant?', answer: 'Es una plataforma para reunir dispositivos compatibles y crear automatizaciones desde un mismo lugar. La propuesta es configurarla para tu proyecto y mostrarte cómo usarla en el día a día.' },
  { question: '¿Incluye trabajos eléctricos?', answer: 'Mi servicio cubre la configuración, las integraciones y las automatizaciones. Si el proyecto requiere modificar cableado, instalar relés o intervenir la instalación eléctrica, esa parte queda a cargo de otro profesional y se contempla por separado.' },
  { question: '¿Cuánto cuesta y cómo empezamos?', answer: 'La primera charla es sin cargo y sin compromiso. Me contás tu idea, evaluamos qué se puede hacer y te paso un presupuesto según el alcance. La asesoría y la configuración se cotizan antes de comenzar.' },
  { question: '¿Podés ayudarme si estoy en otra localidad?', answer: 'Sí, podemos evaluar una consulta remota. Para las visitas, atiendo Los Reartes, Villa General Belgrano y alrededores a unos 30 minutos en auto. La modalidad se acuerda según tu ubicación y lo que necesite el proyecto.' },
];

export function FAQ() {
  return <Accordion className="faq-list">{questions.map(({ question, answer }, i) => <AccordionItem key={question} value={`pregunta-${i}`} className="faq-item"><AccordionTrigger className="faq-question">{question}</AccordionTrigger><AccordionContent className="faq-answer">{answer}</AccordionContent></AccordionItem>)}</Accordion>;
}
