import Image from 'next/image';
import { AtSign, Phone, ArrowUpRight, House, MapPin, Radio, Check, Lightbulb, BellRing, SlidersHorizontal, Puzzle, Workflow, Compass, ArrowRight } from 'lucide-react';
import { FAQ } from '@/components/faq';
import { ContactLink } from '@/components/contact-link';
import { site, whatsappUrl } from '@/lib/site';

export default function Home() {
  return <>
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    {!whatsappUrl() && <div className="preview-note" id="contact-pending">Vista previa · El contacto por WhatsApp estará disponible al completar el número.</div>}
    <header className="site-header container">
      <a href="#contenido" className="brand" aria-label="Luciano Domótica, inicio"><span className="brand-icon"><House size={24} aria-hidden="true" /></span><span>{site.name}<small>DOMÓTICA</small></span></a>
      <nav aria-label="Navegación principal"><a href="#servicios">Qué podemos hacer</a><a href="#como-trabajo">Cómo trabajo</a><a href="#sobre-mi">Sobre mí</a></nav>
      <ContactLink compact />
    </header>
    <main id="contenido">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> TECNOLOGÍA QUE TE SIMPLIFICA EL DÍA</p>
          <h1 id="hero-title">Automatizá tu<br className="desktop-break" /> casa o negocio,<br className="desktop-break" /> <em>paso a paso.</em></h1>
          <p className="hero-description">Una luz que se enciende a tiempo. Un aviso cuando lo necesitás. Tus dispositivos, trabajando juntos.</p>
          <p className="hero-subcopy">Te ayudo a darle forma a tu idea, elegir los equipos y configurarlos con Home Assistant.</p>
          <div className="hero-action"><ContactLink /><span>Primera charla sin cargo.<br />Sin compromiso.</span></div>
          <p className="location"><MapPin size={17} aria-hidden="true" /> {site.area}<span>+ asesoría remota</span></p>
        </div>
        <div className="hero-portrait"><Image unoptimized src="/luciano.jpg" width="2304" height="3072" alt="Luciano, quien te acompaña en tu proyecto de domótica" fetchPriority="high" /><div className="portrait-caption"><span className="caption-mark"><Radio size={23} aria-hidden="true" /></span><div><span>Hola, soy Luciano.</span><p>Pensemos qué puede hacer<br />tu casa por vos.</p></div></div><span className="photo-label">DOMÓTICA CON TRATO PERSONAL</span></div>
      </section>
      <div className="principles"><div className="container"><span><Check size={17} aria-hidden="true" /> Empezá por algo simple</span><span><Check size={17} aria-hidden="true" /> Equipos según tu proyecto</span><span><Check size={17} aria-hidden="true" /> Aprendé a usar lo que instalamos</span></div></div>
      <section className="section container" id="servicios" aria-labelledby="services-title">
        <div className="section-heading"><div><p className="eyebrow">QUÉ PODEMOS HACER</p><h2 id="services-title">Tu idea, un proyecto posible.</h2></div><p className="section-intro">No hace falta automatizar todo de una vez. Podemos empezar por lo que más te sirva.</p></div>
        <div className="services-grid">
          {[
            { icon: Compass, number: '01', title: 'Pensar antes de comprar', text: 'Revisamos tu idea, los equipos que ya tenés y lo que haría falta. Te acompaño a elegir con un objetivo claro.', label: 'Asesoría y planificación' },
            { icon: Puzzle, number: '02', title: 'Conectar las piezas', text: 'Configuramos Home Assistant y vinculamos los dispositivos compatibles para que puedas manejarlos desde un mismo lugar.', label: 'Configuración e integración' },
            { icon: Workflow, number: '03', title: 'Hacer que suceda solo', text: 'Armamos rutinas según tus horarios y necesidades. Después, te explico cómo usarlas y ajustarlas.', label: 'Automatizaciones a medida' },
          ].map(({ icon: Icon, number, title, text, label }) => <article className="service-card" key={number}><div className="card-top"><Icon size={29} strokeWidth={1.5} aria-hidden="true" /><span>{number}</span></div><h3>{title}</h3><p>{text}</p><span className="service-label">{label}</span></article>)}
        </div>
      </section>
      <section className="examples-section" aria-labelledby="examples-title"><div className="container section">
        <p className="eyebrow">MENOS TAREAS. MÁS COMODIDAD.</p><div className="section-heading"><h2 id="examples-title">Pequeños cambios.<br />Un día más simple.</h2><p className="section-intro">Algunas ideas para tu casa o negocio. Cada una se evalúa según los equipos y la instalación.</p></div>
        <div className="examples-grid">
          <article className="example"><div className="example-icon"><Lightbulb size={28} strokeWidth={1.5} aria-hidden="true" /></div><span className="example-tag">ILUMINACIÓN</span><h3>Que las luces acompañen tu rutina.</h3><p>Programar el encendido de la entrada o apagar ciertas luces al cerrar el negocio.</p><div className="routine"><span>Al atardecer</span><ArrowRight size={15} aria-hidden="true" /><strong>Encender la entrada</strong></div></article>
          <article className="example"><div className="example-icon"><BellRing size={28} strokeWidth={1.5} aria-hidden="true" /></div><span className="example-tag">SENSORES Y AVISOS</span><h3>Enterarte cuando algo cambia.</h3><p>Recibir una notificación si un sensor detecta una apertura o una pérdida de agua.</p><div className="routine"><span>Sensor detecta agua</span><ArrowRight size={15} aria-hidden="true" /><strong>Enviar un aviso</strong></div></article>
          <article className="example"><div className="example-icon"><SlidersHorizontal size={28} strokeWidth={1.5} aria-hidden="true" /></div><span className="example-tag">CONTROL CENTRALIZADO</span><h3>Lo que usás, en un mismo lugar.</h3><p>Reunir luces, sensores y otros dispositivos compatibles en un panel fácil de consultar.</p><div className="routine"><span>Distintos equipos</span><ArrowRight size={15} aria-hidden="true" /><strong>Un mismo panel</strong></div></article>
        </div>
        <p className="examples-note">Ejemplos orientativos de lo que podemos evaluar; no son trabajos realizados.</p>
      </div></section>
      <section className="section container" id="como-trabajo" aria-labelledby="process-title"><div className="section-heading"><div><p className="eyebrow">CÓMO TRABAJO</p><h2 id="process-title">Primero te escucho.<br />Después, conectamos.</h2></div><p className="section-intro">Un alcance claro y un presupuesto acordado antes de empezar.</p></div>
        <ol className="process-grid">{[
          ['Me contás tu idea', 'Una primera charla sin cargo para entender qué querés mejorar en tu casa o negocio.'],
          ['Evaluamos el proyecto', 'Revisamos compatibilidad, equipos y si hace falta una visita o podemos trabajar a distancia.'],
          ['Definimos el presupuesto', 'Acordamos el alcance, el trabajo y los equipos necesarios, con sus costos por separado.'],
          ['Configuramos y probamos', 'Ponemos en marcha lo acordado y te muestro cómo usarlo y hacer los ajustes cotidianos.'],
        ].map(([title, text], i) => <li key={title}><span className="step-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </section>
      <section className="about container" id="sobre-mi" aria-labelledby="about-title"><div className="about-identity"><span className="eyebrow">DE ESTE LADO</span><h2 id="about-title">Soy {site.name}.<br />Hablemos sin<br /><em>tecnicismos.</em></h2><span className="about-location"><MapPin size={17} aria-hidden="true" /> Desde Los Reartes</span></div><div className="about-copy"><p className="about-lead">Me interesa que la tecnología resuelva algo concreto en tu día, y que puedas entender y usar lo que configuramos.</p><p>Estoy empezando a ofrecer este servicio de forma independiente. Trabajo con proyectos de alcance definido: primero evalúo lo que necesitás y qué puedo resolver, y después acordamos cómo avanzar.</p><p>La idea es acompañarte desde la elección de los dispositivos hasta la puesta en marcha, con Home Assistant como punto de partida.</p><a className="text-link" href="#contacto">Podemos empezar con una conversación <ArrowUpRight size={18} aria-hidden="true" /></a></div></section>
      <section className="section container faq-section" aria-labelledby="faq-title"><div><p className="eyebrow">ANTES DE EMPEZAR</p><h2 id="faq-title">Quizás te estés<br />preguntando…</h2><p className="section-intro">Algunas respuestas para dar<br className="desktop-break" /> el primer paso.</p></div><FAQ /></section>
      <section className="contact-section container" id="contacto" aria-labelledby="contact-title"><div><p className="eyebrow">EMPECEMOS POR TU IDEA</p><h2 id="contact-title">¿Qué te gustaría<br />que tu casa haga por vos?</h2><p>No necesitás tenerlo todo resuelto. Contame qué te imaginás<br className="desktop-break" /> y vemos juntos por dónde empezar.</p></div><div className="contact-action"><ContactLink /><div className="contact-details"><a href={site.phoneHref}><Phone size={17} aria-hidden="true" />{site.phone}</a><a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Luciano Domótica (abre una nueva pestaña)"><AtSign size={18} aria-hidden="true" />{site.instagramHandle}<ArrowUpRight size={15} aria-hidden="true" /></a></div><p>Primera charla sin cargo.<br />Presupuesto según tu proyecto.</p></div><div className="contact-coverage"><MapPin size={18} aria-hidden="true" /><span>{site.coverage}</span></div></section>
    </main>
    <footer className="container site-footer"><a href="#contenido" className="footer-brand">{site.name}<span> / DOMÓTICA</span></a><a className="footer-social" href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Luciano Domótica (abre una nueva pestaña)"><AtSign size={17} aria-hidden="true" />{site.instagramHandle}</a><a href="#contenido">Volver arriba ↑</a></footer>
  </>;
}
