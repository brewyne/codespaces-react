import { useEffect, useState } from 'react';
import './App.css';

const navigation = [
  ['home', 'Home'],
  ['about', 'About'],
  ['services', 'Services'],
  ['gallery', 'Gallery'],
  ['contact', 'Contact'],
];

const photos = {
  hero: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=2000',
  site: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1400',
  crane: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1400',
  bridge: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1400',
  architecture: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg',
  planning: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1400',
};

const pageContent = {
  home: {
    eyebrow: 'Engineering with intent / Est. 2008',
    title: <>Built on <span>good thinking.</span></>,
    description: 'Mudy Engineering turns complex ideas into dependable places, infrastructure and systems. Thoughtful design, disciplined delivery, and a partner who stays accountable.',
    image: photos.hero,
    imageAlt: 'Construction professionals reviewing work on site',
    label: 'A considered approach to the built environment',
    sections: [
      { type: 'stats', eyebrow: 'At a glance', title: 'Experience you can build on.', items: [['15+', 'years of practice'], ['84', 'projects delivered'], ['12', 'technical disciplines'], ['01', 'team from brief to handover']] },
      { type: 'cards', eyebrow: 'What we do', title: 'One team. The right expertise.', items: [['01', 'Civil & structural', 'Structures and infrastructure engineered for safety, longevity and real-world use.'], ['02', 'Project delivery', 'Clear planning, active coordination and steady oversight from first brief to handover.'], ['03', 'Building services', 'Practical electrical, mechanical and water systems designed to work together.']] },
      { type: 'split', eyebrow: 'Our point of view', title: 'Make the complicated feel clear.', body: 'Good engineering is measured in more than calculations. We listen carefully, test assumptions early and explain the trade-offs, so every decision moves the project forward.', image: photos.planning, imageAlt: 'Architectural plans and design work', bullets: ['A named lead who stays close to the work', 'Options explained in plain language', 'Practical decisions grounded in evidence'] },
      { type: 'steps', eyebrow: 'How we work', title: 'A steady route from idea to built.', items: [['01', 'Listen', 'We understand the brief, site, constraints and the people who will use the result.'], ['02', 'Shape', 'We develop a coordinated approach, resolve risks and agree what success looks like.'], ['03', 'Deliver', 'We stay involved through construction, inspection and a considered handover.']] },
      { type: 'gallery', eyebrow: 'Selected work', title: 'A few places we helped shape.', images: [['Structural coordination', photos.site], ['Built for connection', photos.bridge], ['A clear line forward', photos.architecture]] },
      { type: 'quote', eyebrow: 'From a project partner', quote: '“Mudy brought calm, clarity and a real sense of ownership to a demanding programme.”', attribution: 'Project director / Commercial development' },
      { type: 'band', eyebrow: 'Start a conversation', title: 'Have a project taking shape?', body: 'Tell us what you are working on. We will help you find the right next step.', link: 'contact', linkText: 'Talk with our team' },
    ],
  },
  about: {
    eyebrow: 'About Mudy / People before process',
    title: <>Engineering for <span>real life.</span></>,
    description: 'We are an independent engineering firm built around sound judgement, strong partnerships and work that serves people long after the site is cleared.',
    image: photos.planning,
    imageAlt: 'Engineers collaborating over drawings',
    label: 'Independent thinking, shared ambition',
    sections: [
      { type: 'split', eyebrow: 'Our story', title: 'A firm built around follow-through.', body: 'Mudy Engineering began with a simple belief: good technical work should make projects easier to deliver. Since 2008, we have grown through long-term relationships, careful problem solving and a willingness to stay accountable.', image: photos.site, imageAlt: 'A team working on an active construction site', bullets: ['Independent, multidisciplinary practice', 'Grounded in local knowledge', 'Built on repeat partnerships'] },
      { type: 'stats', eyebrow: 'Our practice', title: 'Small enough to stay close.', items: [['2008', 'founded with a practical purpose'], ['15+', 'years of steady delivery'], ['84', 'projects and counting'], ['100%', 'commitment to clear communication']] },
      { type: 'cards', eyebrow: 'What guides us', title: 'Principles we put to work.', items: [['01', 'Be clear', 'We make the important details understandable and bring uncertainty into the open.'], ['02', 'Stay curious', 'We ask better questions, challenge assumptions and keep looking for a more useful answer.'], ['03', 'Own the outcome', 'We follow through on our commitments and stay engaged when the work gets difficult.']] },
      { type: 'steps', eyebrow: 'Our approach', title: 'Useful collaboration, at every stage.', items: [['01', 'Listen closely', 'We learn the context before proposing a solution.'], ['02', 'Work as one', 'We coordinate openly with clients, designers, contractors and communities.'], ['03', 'Keep improving', 'We use lessons from each project to make the next one work better.']] },
      { type: 'gallery', eyebrow: 'On the ground', title: 'People, plans and progress.', images: [['Ideas into action', photos.planning], ['On-site coordination', photos.crane], ['Making places last', photos.architecture]] },
      { type: 'split', eyebrow: 'Quality & care', title: 'Careful work is a team habit.', body: 'Our quality checks are part of the way we work, not a final hurdle. Peer reviews, clear records and direct conversations help us catch issues early and keep decisions traceable.', image: photos.bridge, imageAlt: 'Bridge infrastructure viewed from below', bullets: ['Peer review on critical design decisions', 'Health, safety and environmental awareness', 'Straightforward documentation and handover'] },
      { type: 'band', eyebrow: 'Work with Mudy', title: 'The best work is built together.', body: 'We welcome thoughtful clients and collaborators who care about doing things well.', link: 'contact', linkText: 'Meet the team' },
    ],
  },
  services: {
    eyebrow: 'Services / Joined-up expertise',
    title: <>From first sketch to <span>final sign-off.</span></>,
    description: 'A coordinated engineering partner for the decisions, disciplines and details that turn a project brief into a buildable plan.',
    image: photos.crane,
    imageAlt: 'Tower crane above a construction project',
    label: 'Thoughtful engineering, delivered together',
    sections: [
      { type: 'cards', eyebrow: 'Our capabilities', title: 'The expertise your project needs.', items: [['01', 'Civil engineering', 'Site infrastructure, drainage, access and utility coordination shaped around the full project context.'], ['02', 'Structural engineering', 'Robust analysis and design for new structures, alterations and strengthening works.'], ['03', 'Building services', 'Integrated mechanical, electrical and public health systems designed for performance and maintainability.']] },
      { type: 'split', eyebrow: 'Civil & structural', title: 'Confidence in every connection.', body: 'We connect site conditions, architectural intent and structural performance to develop solutions that are safe, efficient and straightforward to build.', image: photos.bridge, imageAlt: 'A bridge structure showing its engineered form', bullets: ['Feasibility and concept design', 'Detailed calculations and drawings', 'Technical review and construction support'] },
      { type: 'steps', eyebrow: 'Project delivery', title: 'Keep the moving parts moving.', items: [['01', 'Define', 'Set scope, roles, programme and decision points together.'], ['02', 'Coordinate', 'Bring disciplines and stakeholders together around shared information.'], ['03', 'Control', 'Track progress, surface risk and keep the team focused on the agreed outcomes.']] },
      { type: 'cards', eyebrow: 'Additional support', title: 'Help when the project needs it.', items: [['04', 'Project management', 'Practical leadership across programme, budget, risk and communication.'], ['05', 'Technical due diligence', 'Independent review of condition, design proposals and delivery risks.'], ['06', 'Construction support', 'Responsive answers, site observations and a clear route to resolution.']] },
      { type: 'gallery', eyebrow: 'Where it comes together', title: 'Engineering across the whole picture.', images: [['Site and ground', photos.site], ['Structure and scale', photos.crane], ['Design and detail', photos.architecture]] },
      { type: 'quote', eyebrow: 'How clients describe us', quote: '“They joined the dots between disciplines and gave the whole team confidence in the decisions.”', attribution: 'Development lead / Mixed-use project' },
      { type: 'band', eyebrow: 'Scope your project', title: 'The right service starts with a conversation.', body: 'Share your goals, timeline and constraints. We will help shape a useful scope.', link: 'contact', linkText: 'Request a project discussion' },
    ],
  },
  gallery: {
    eyebrow: 'Gallery / Work in context',
    title: <>Ideas taking <span>shape.</span></>,
    description: 'A selection of the places, structures and working moments that reflect how we think: with care for the detail and the wider picture.',
    image: photos.architecture,
    imageAlt: 'Contemporary architecture with strong structural lines',
    label: 'A portfolio of purposeful engineering',
    sections: [
      { type: 'split', eyebrow: 'Portfolio', title: 'The work is more than the finished image.', body: 'Every project is a series of decisions made with clients, designers and builders. These snapshots represent the coordination, craft and commitment behind work that is made to last.', image: photos.site, imageAlt: 'Construction crew at work on a project', bullets: ['Commercial and workplace', 'Community and public realm', 'Infrastructure and refurbishment'] },
      { type: 'gallery', eyebrow: 'Structures', title: 'Form with a job to do.', images: [['Structural detail', photos.bridge], ['Building in progress', photos.site], ['Working at height', photos.crane]] },
      { type: 'gallery', eyebrow: 'Places', title: 'Designed for people and place.', images: [['Contemporary forms', photos.architecture], ['Planning in practice', photos.planning], ['Site coordination', photos.hero]] },
      { type: 'cards', eyebrow: 'Project types', title: 'Experience across varied briefs.', items: [['01', 'New build', 'Integrated design support from early feasibility through construction.'], ['02', 'Adaptive reuse', 'Careful assessment and engineering that helps existing places work harder.'], ['03', 'Infrastructure', 'Durable connections and services that support the life around them.']] },
      { type: 'steps', eyebrow: 'What sits behind the image', title: 'A considered process, visible in the result.', items: [['01', 'Understand', 'Start with context, constraints and the people who will use the space.'], ['02', 'Coordinate', 'Resolve interfaces and decisions before they become site problems.'], ['03', 'Deliver', 'Stay engaged through construction and learn from the finished work.']] },
      { type: 'quote', eyebrow: 'A shared result', quote: '“The finished building feels simple. That is because the team worked through the hard questions together.”', attribution: 'Design partner / Workplace project' },
      { type: 'band', eyebrow: 'Your project could be next', title: 'Let’s make something that works beautifully.', body: 'Bring us your brief, your constraints and your ambition.', link: 'contact', linkText: 'Discuss your project' },
    ],
  },
};

function getRoute() {
  const route = window.location.hash.replace(/^#\/?/, '').split('/')[0];
  return navigation.some(([path]) => path === route) ? route : 'home';
}

function Header({ route }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [route]);

  return (
    <header className="site-header">
      <a className="brand" href="#/home" aria-label="Mudy Engineering home">
        <span className="brand-mark">SCR</span>
        <span className="brand-name">MUDY <span>ENGINEERING</span></span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span />
      </button>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        {navigation.map(([path, label]) => (
          <a key={path} href={`#/${path}`} aria-current={route === path ? 'page' : undefined}>{label}</a>
        ))}
        <a className="nav-cta" href="#/contact">Start a project <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}

function Hero({ page }) {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" />{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="hero-description">{page.description}</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#/contact">Discuss a project <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#/services">Explore our services <span aria-hidden="true">→</span></a>
        </div>
        <p className="hero-note">Independent engineering / Built around people</p>
      </div>
      <figure className="hero-image">
        <img src={page.image} alt={page.imageAlt} />
        <figcaption><span className="status-dot" />{page.label}</figcaption>
      </figure>
      <div className="hero-index"><span>01</span><span className="index-rule" />05</div>
    </section>
  );
}

function Section({ section, index }) {
  const sectionId = `section-${index}`;

  if (section.type === 'stats') {
    return <section className="content-section stats-section" id={sectionId}>
      <div className="section-heading"><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2></div>
      <div className="stats-grid">{section.items.map(([number, label]) => <div className="stat-item" key={number}><strong>{number}</strong><span>{label}</span></div>)}</div>
    </section>;
  }

  if (section.type === 'split') {
    return <section className="content-section split-section" id={sectionId}>
      <div className="split-copy"><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2><p className="section-body">{section.body}</p><ul className="detail-list">{section.bullets.map((item) => <li key={item}><span>+</span>{item}</li>)}</ul></div>
      <figure className="split-image"><img src={section.image} alt={section.imageAlt} /></figure>
    </section>;
  }

  if (section.type === 'gallery') {
    return <section className="content-section gallery-section" id={sectionId}>
      <div className="section-heading"><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2></div>
      <div className="image-grid">{section.images.map(([caption, image]) => <figure className="image-tile" key={caption}><img src={image} alt={caption} loading="lazy" /><figcaption>{caption}<span aria-hidden="true">↗</span></figcaption></figure>)}</div>
      <p className="image-credit">Photography: Pexels and Pixabay</p>
    </section>;
  }

  if (section.type === 'steps') {
    return <section className="content-section steps-section" id={sectionId}>
      <div className="section-heading"><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2></div>
      <div className="steps-grid">{section.items.map(([number, title, body]) => <article className="step-item" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>;
  }

  if (section.type === 'quote') {
    return <section className="content-section quote-section" id={sectionId}><p className="eyebrow">{section.eyebrow}</p><blockquote>{section.quote}</blockquote><p className="quote-attribution">{section.attribution}</p></section>;
  }

  if (section.type === 'band') {
    return <section className="content-section contact-band" id={sectionId}><div><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2><p>{section.body}</p></div><a className="button button-light" href={`#/${section.link}`}>{section.linkText}<span aria-hidden="true">↗</span></a></section>;
  }

  return <section className="content-section cards-section" id={sectionId}>
    <div className="section-heading"><p className="eyebrow">{section.eyebrow}</p><h2>{section.title}</h2></div>
    <div className="service-grid">{section.items.map(([number, title, body]) => <article className="service-item" key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{body}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div>
  </section>;
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return <main className="contact-page">
    <section className="contact-hero"><p className="eyebrow"><span className="eyebrow-line" />Contact / Start with a conversation</p><h1>Let’s make your <span>next move</span> a good one.</h1><p>Tell us a little about your project or enquiry. Our team will get back to you to discuss a useful way forward.</p></section>
    <section className="contact-details"><div><p className="eyebrow">Reach the right people</p><h2>We’re ready to listen.</h2><p className="section-body">Whether you have a defined brief or are still exploring options, a short conversation can help make the next step clearer.</p></div><div className="contact-info-grid"><div><span>General enquiries</span><a href="mailto:hello@mudyengineering.com">hello@mudyengineering.com</a></div><div><span>Telephone</span><a href="tel:+233200000000">+233 (0) 20 000 0000</a></div><div><span>Office</span><p>Accra, Ghana<br />Working across the region</p></div><div><span>Office hours</span><p>Monday–Friday<br />08:30–17:00 GMT</p></div></div></section>
    <section className="contact-form-section"><div className="form-intro"><p className="eyebrow">Project enquiry</p><h2>What are you working on?</h2><p>Share the essentials and we’ll take it from there.</p></div><form className="enquiry-form" onSubmit={handleSubmit}>
      <label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label>
      <label>Email address<input type="email" name="email" autoComplete="email" placeholder="you@company.com" required /></label>
      <label>Company <span className="optional">Optional</span><input name="company" autoComplete="organization" placeholder="Company name" /></label>
      <label>What do you need?<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Civil & structural engineering</option><option>Project delivery</option><option>Building services</option><option>Technical review</option><option>Something else</option></select></label>
      <label className="form-message">Tell us about the project<textarea name="message" rows="4" placeholder="A little about the site, timeline or question..." required /></label>
      <div className="form-submit"><button className="button button-dark" type="submit">Send enquiry <span aria-hidden="true">↗</span></button><p role="status" aria-live="polite">{submitted ? 'Thanks for reaching out. Your details have been checked, but this demo does not send or store them.' : 'This demo form does not send or store your details.'}</p></div>
    </form></section>
  </main>;
}

function Footer() {
  return <footer className="site-footer"><a className="brand footer-brand" href="#/home"><span className="brand-mark">SCR</span><span className="brand-name">MUDY <span>ENGINEERING</span></span></a><p>Thoughtful engineering. Dependable delivery.</p><div className="footer-links">{navigation.map(([path, label]) => <a key={path} href={`#/${path}`}>{label}</a>)}</div><small>© {new Date().getFullYear()} Mudy Engineering Firm</small></footer>;
}

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  return <div className="App"><Header route={route} />{route === 'contact' ? <ContactPage /> : <main><Hero page={pageContent[route]} />{pageContent[route].sections.map((section, index) => <Section key={`${route}-${index}`} section={section} index={index + 2} />)}</main>}<Footer /></div>;
}

export default App;
