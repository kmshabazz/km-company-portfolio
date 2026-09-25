const proof = [
  ["131", "Meta purchases managed for Kali Luxe"],
  ["5.49K", "Google Ads clicks for Kali Luxe"],
  ["$0.49", "average Google Ads CPC"],
  ["171/171", "Google Merchant Center variants approved"],
];

const services = [
  {
    title: "Growth Measurement & Paid Media",
    copy: "Performance marketing and growth measurement across Meta and Google, connecting campaign strategy, conversion signals, attribution, creative testing, and revenue outcomes so spend is guided by trusted data.",
  },
  {
    title: "Measurement Architecture & Data Instrumentation",
    copy: "GA4 and GTM architecture, event taxonomy, conversion instrumentation, Meta Pixel, CAPI, Google Ads signal configuration, attribution, and cross-platform reconciliation designed around consistent, decision-ready data.",
  },
  {
    title: "AI-Enabled Analytics Operations",
    copy: "AI Skills, MCP workflows, reusable prompts, and governed automation that accelerate analytics QA, creative iteration, investigation, and repeatable marketing operations while keeping human judgment in the loop.",
  },
  {
    title: "Attribution, Funnel & Revenue Analytics",
    copy: "Full-funnel analysis across acquisition, customer behavior, conversion, lifecycle, and revenue to identify where signal quality, attribution, or customer journeys are limiting growth.",
  },
];

const caseStudies = [
  {
    eyebrow: "Meta + Google Ads · DTC Ecommerce",
    title: "Kali Luxe",
    impact: "131 Meta purchases + 5.49K Google Ads clicks",
    copy: "Built and operated a measurement-led DTC growth system spanning Facebook and Instagram Ads through Meta, Google Ads, Shopify, creative testing, lifecycle, attribution, offer strategy, and conversion analysis.",
    bullets: [
      "Managed $15.38K in Meta spend resulting in 131 reported purchases and 776 adds to cart",
      "Generated 5.49K Google Ads clicks at a $0.49 average CPC on $2.67K in spend",
      "Built Meta and Higgsfield MCP workflows to support creative production and testing",
      "Connected paid media decisions to Shopify, GA4, funnel, and revenue signals",
    ],
    stack: "Meta Ads · Facebook & Instagram · Google Ads · Shopify · GA4 · MCP · Higgsfield · AI Skills",
  },
  {
    eyebrow: "Meta Ads · Ecommerce Growth Infrastructure",
    title: "ORIMI Jewelry",
    impact: "5,813 Meta link clicks at $0.61 average CPC",
    copy: "Managed paid media and measurement infrastructure for a luxury fine jewelry brand while improving ecommerce readiness and Google Merchant Center eligibility.",
    bullets: [
      "Managed $3.56K in Meta spend across prospecting, retargeting, traffic, and engagement campaigns",
      "Generated 358K+ impressions and 5,813 link clicks at approximately $0.61 CPC",
      "Resolved product-source and attribute issues across 171 of 171 Google Merchant Center variants",
      "Connected GA4, Merchant Center, Meta Pixel, campaign planning, and reporting",
    ],
    stack: "Meta Ads · Facebook & Instagram · Google Merchant Center · Shopify · GA4 · Looker Studio",
  },
  {
    eyebrow: "Google Ads · Attribution & Revenue Tracking",
    title: "Yippee TV",
    impact: "Full subscription-funnel revenue visibility",
    copy: "Unified traffic, trial starts, purchases, revenue, and attribution so a subscription business could evaluate channels on real downstream performance.",
    bullets: [
      "Standardized trial and purchase conversion definitions",
      "Aligned revenue tracking across GA4 and Google Ads",
      "Built first-touch and last-touch attribution reporting",
      "Connected blog traffic to the paid subscription journey",
    ],
    stack: "GA4 · GTM · Google Ads · Looker Studio · Attribution",
  },
  {
    eyebrow: "Meta Ads · Measurement Repair",
    title: "Conversion Tracking Repair",
    impact: "20–50% improvement in reported conversion accuracy",
    copy: "Rebuilt a fragmented conversion measurement system so analytics, CRM, and paid media platforms could be trusted for optimization.",
    bullets: [
      "Diagnosed duplicate and inconsistent conversion events",
      "Re-architected lead and funnel event logic",
      "Implemented browser and server-side deduplication",
      "Restored confidence in campaign and funnel reporting",
    ],
    stack: "GA4 · GTM · Meta Pixel · CAPI · CRM · Attribution",
  },
  {
    eyebrow: "Meta Ads · Lead Gen & Funnel Tracking",
    title: "Travel Her Way Collective",
    impact: "Reconciled Meta lead volume with CRM tracking",
    copy: "Improved measurement across a multi-platform lead funnel using Showit, GoHighLevel, Spiffy, Meta Pixel, CAPI, domain verification, and purchase tracking.",
    bullets: [
      "Investigated Meta versus CRM lead discrepancies",
      "Implemented purchase measurement on the checkout platform",
      "Improved domain and event configuration for Meta",
      "Connected lead-generation activity to downstream funnel behavior",
    ],
    stack: "Meta Ads · Facebook & Instagram · CAPI · GoHighLevel · Spiffy · Showit · Attribution",
  },
  {
    eyebrow: "Meta Ads · Digital Growth From Zero",
    title: "Shabazz Seafood",
    impact: "From no digital footprint to Netflix \"Fresh, Fried, and Crispy\"",
    copy: "Built the website, analytics, paid social, content, and event-growth foundation for a local food business.",
    bullets: [
      "Built the digital presence and tracking foundation from scratch",
      "Launched Facebook and Instagram advertising to drive awareness and foot traffic",
      "Created repeatable event-driven growth programs",
      "Supported sustained digital growth leading to national media visibility, including Netflix's \"Fresh, Fried, and Crispy\"",
    ],
    stack: "Website · GA4 · Meta Ads · Facebook & Instagram · Content · Growth Analytics",
  },
];

const process = [
  ["01", "Audit the instrumentation", "Assess event architecture, conversion signals, platform alignment, attribution, and reporting to find where data quality or performance is breaking."],
  ["02", "Govern the measurement layer", "Standardize event logic, repair tracking, reconcile platforms, and establish reliable measurement before optimization."],
  ["03", "Activate growth", "Connect trusted signals to paid media, creative testing, funnel strategy, and lifecycle decisions across the customer journey."],
  ["04", "Optimize from outcomes", "Use customer behavior, conversion quality, attribution, and revenue to guide spend and growth decisions instead of vanity metrics."],
];

const tools = [
  ["Paid Media", "Meta Ads (Facebook & Instagram) · Google Ads · Google Shopping · TikTok · YouTube · CM360"],
  ["Measurement & Instrumentation", "GA4 · GTM · Event Taxonomy · Meta Pixel · CAPI · Google Ads Conversion Tracking · Attribution · OneTrust"],
  ["Ecommerce & Lifecycle", "Shopify · CRO · Funnel Analysis · Omnisend · Email/SMS"],
  ["Data, Quality & Observability", "BigQuery · Databricks · SQL · Data Validation · Cross-Platform Reconciliation · Looker Studio · Power BI · Tableau · Domo"],
  ["AI & Automation", "Claude Code · ChatGPT · MCP · Higgsfield · AI Skills · GitHub workflows"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell">
        <a href="#top" className="brand">KM & Company</a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Start a Project</a>
        </div>
      </nav>

      <section id="top" className="hero section-shell">
        <div className="hero-label">KM & Company · Consulting Portfolio</div>
        <p className="eyebrow">Measurement Architecture · Data Instrumentation · Growth Systems · AI</p>
        <h1>Build trusted measurement. Connect it to growth.</h1>
        <p className="hero-copy">
          I’m Kalifa Shabazz, Principal of KM & Company. I design measurement and growth systems that connect Product, Marketing, Engineering, and Data across instrumentation, attribution, conversion, and revenue.
        </p>
        <p className="hero-copy">
          GA4 · GTM · Event Taxonomy · BigQuery · Meta CAPI · Attribution · Data Quality · Growth Measurement · AI Workflows
        </p>
        <div className="hero-actions">
          <a href="#work" className="button primary">View Paid Media Work</a>
          <a href="#contact" className="button secondary">Start a Project</a>
        </div>
      </section>

      <section className="proof-grid">
        {proof.map(([value, label]) => (
          <div className="proof-card" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="services" className="section-shell section-space">
        <div className="section-heading">
          <p className="eyebrow">What I Do</p>
          <h2>Measurement architecture, instrumentation, and growth under one roof.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="panel" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section-band section-space">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2>Instrumentation, attribution, and growth systems in practice.</h2>
            </div>
            <p>Case studies across measurement architecture, conversion instrumentation, attribution, paid media, ecommerce, and full-funnel growth.</p>
          </div>
          <div className="case-grid">
            {caseStudies.map((study) => (
              <article className="case-card" key={study.title}>
                <div className="case-topline">
                  <span>{study.eyebrow}</span>
                  <strong>{study.impact}</strong>
                </div>
                <h3>{study.title}</h3>
                <p className="case-copy">{study.copy}</p>
                <ul>
                  {study.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <p className="stack">{study.stack}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-space">
        <div className="section-heading">
          <p className="eyebrow">How I Work</p>
          <h2>Govern the signal, align the platforms, optimize from business outcomes.</h2>
        </div>
        <div className="process-grid">
          {process.map(([num, title, copy]) => (
            <article className="process-card" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-band section-space">
        <div className="section-shell ai-grid">
          <div>
            <p className="eyebrow">AI-Powered Marketing Operations</p>
            <h2>Faster systems. Better decisions.</h2>
          </div>
          <div>
            <p>
              I use Meta and Higgsfield MCP workflows to support creative production and iteration, then build reusable AI Skills, prompts, and workflow instructions in GitHub repositories so repeatable marketing work becomes more consistent and scalable.
            </p>
            <p>
              AI supports the workflow. Campaign performance, customer behavior, and revenue still drive the decisions.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell section-space about-grid">
        <div>
          <p className="eyebrow">Cross-Functional Measurement Leadership</p>
          <h2>I connect Product, Marketing, Engineering, and Data.</h2>
        </div>
        <div className="about-copy">
          <p>
            My experience spans enterprise analytics, subscription businesses, ecommerce brands, agencies, and consulting environments. I operate across measurement architecture, data instrumentation, attribution, paid media, and analytics operations so teams can make decisions from a consistent measurement foundation.
          </p>
          <p>
            I translate business and growth requirements into event logic, conversion instrumentation, validation workflows, reporting, and optimization frameworks while partnering across technical and marketing teams.
          </p>
          <p>
            The goal is not more dashboards or more ad spend. It is an observable, governed measurement system that makes clear what is working, what is broken, and what teams should do next.
          </p>
        </div>
      </section>

      <section className="section-band section-space">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Technology</p>
            <h2>The stack behind the work.</h2>
          </div>
          <div className="tool-list">
            {tools.map(([group, list]) => (
              <div className="tool-row" key={group}>
                <strong>{group}</strong>
                <span>{list}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell section-space">
        <div className="contact-panel">
          <p className="eyebrow dark">Work With KM & Company</p>
          <h2>Need trusted measurement behind product and growth decisions?</h2>
          <p>Measurement architecture, data instrumentation, attribution, growth measurement, paid media consulting, AI-enabled analytics operations, and fractional support.</p>
          <div className="contact-details">
            <a href="mailto:info@kmandcompany.com">info@kmandcompany.com</a>
            <a href="tel:+12132937098">(213) 293-7098</a>
          </div>
          <div className="hero-actions">
            <a href="mailto:info@kmandcompany.com" className="button dark-button">Start a Conversation</a>
            <a href="https://www.linkedin.com/in/kalifashabazz/" target="_blank" rel="noreferrer" className="button outline-dark">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 KM & Company</span>
        <span>Measurement Architecture · Data Instrumentation · Growth Systems · AI</span>
      </footer>
    </main>
  );
}
