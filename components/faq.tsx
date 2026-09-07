'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { questions } from '@/lib/faq';

export function FAQ() {
  return <Accordion className="faq-list">{questions.map(({ question, answer }, i) => <AccordionItem key={question} value={`pregunta-${i}`} className="faq-item"><AccordionTrigger className="faq-question">{question}</AccordionTrigger><AccordionContent keepMounted className="faq-answer">{answer}</AccordionContent></AccordionItem>)}</Accordion>;
}
