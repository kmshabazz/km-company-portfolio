const proof = [
  ["2.18x", "first profitable Meta ROAS"],
  ["171/171", "Google Merchant Center variants approved"],
  ["20–50%", "improvement in reported conversion accuracy"],
  ["Full Funnel", "acquisition through revenue visibility"],
];

const services = [
  {
    title: "Paid Media Strategy & Management",
    copy: "Meta Ads and Google Ads strategy, campaign structure, creative testing, budget decisions, optimization, and performance analysis tied back to real business outcomes.",
  },
  {
    title: "Measurement & Attribution",
    copy: "GA4, GTM, Meta Pixel, CAPI, conversion tracking, revenue events, attribution, and cross-platform reconciliation so decisions are based on trustworthy signals.",
  },
  {
    title: "Creative Testing & AI Workflows",
    copy: "Structured creative testing systems plus Meta and Higgsfield MCP workflows, reusable AI Skills, and repeatable production processes for faster iteration.",
  },
  {
    title: "Ecommerce & Funnel Analytics",
    copy: "Shopify analytics, CRO, offer architecture, lifecycle, funnel analysis, and revenue visibility to find the points where growth is being lost or unlocked.",
  },
];

const caseStudies = [
  {
    eyebrow: "Performance Marketing & Growth",
    title: "Kali Luxe",
    impact: "2.18x first profitable ROAS",
    copy: "Built a measurement-led DTC growth system spanning Meta Ads, Google Ads, Shopify, creative testing, lifecycle, attribution, offer strategy, and conversion analysis.",
    bullets: [
      "Identified a lowest-cost buyer segment at $19.54 per purchase",
      "Restructured the offer into a stronger value ladder",
      "Built Meta and Higgsfield MCP creative workflows",
      "Created reusable AI Skills and GitHub-based marketing workflows",
    ],
    stack: "Meta Ads · Google Ads · Shopify · GA4 · MCP · Higgsfield · AI Skills",
  },
  {
    eyebrow: "Ecommerce Growth Infrastructure",
    title: "ORIMI Jewelry",
    impact: "171 of 171 product variants approved",
    copy: "Connected ecommerce, analytics, paid media, and growth planning for a luxury fine jewelry brand while fixing Google Merchant Center eligibility issues.",
    bullets: [
      "Resolved product-source and attribute issues across 171 variants",
      "Connected GA4, Merchant Center, Meta Pixel, and reporting",
      "Built a creative testing framework and first-sale roadmap",
      "Created reusable founder reporting and campaign planning tools",
    ],
    stack: "Shopify · Google Merchant Center · GA4 · Meta Ads · Looker Studio",
  },
  {
    eyebrow: "Attribution & Revenue Tracking",
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
    eyebrow: "Measurement Repair",
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
    eyebrow: "Lead Gen & Funnel Tracking",
    title: "Travel Her Way Collective",
    impact: "Reconciled Meta lead volume with CRM tracking",
    copy: "Improved measurement across a multi-platform lead funnel using Showit, GoHighLevel, Spiffy, Meta Pixel, CAPI, domain verification, and purchase tracking.",
    bullets: [
      "Investigated Meta versus CRM lead discrepancies",
      "Implemented purchase measurement on the checkout platform",
      "Improved domain and event configuration for Meta",
      "Connected lead-generation activity to downstream funnel behavior",
    ],
    stack: "Meta Ads · CAPI · GoHighLevel · Spiffy · Showit · Attribution",
  },
  {
    eyebrow: "Digital Growth From Zero",
    title: "Shabazz Seafood",
    impact: "From no digital footprint to national visibility",
    copy: "Built the website, analytics, paid media, social, content, and event-growth foundation for a local food business.",
    bullets: [
      "Built the digital presence and tracking foundation from scratch",
      "Launched paid social to drive awareness and foot traffic",
      "Created repeatable event-driven growth programs",
      "Supported sustained digital growth and national media visibility",
    ],
    stack: "Website · GA4 · Meta Ads · Paid Social · Content · Growth Analytics",
  },
];

const process = [
  ["01", "Diagnose", "Audit the acquisition, measurement, funnel, and reporting system to find where signal or performance is breaking."],
  ["02", "Fix the foundation", "Repair tracking, attribution, conversion events, platform connections, and reporting before scaling spend."],
  ["03", "Build the growth system", "Create the campaign structure, creative testing process, funnel measurement, and operating rhythm."],
  ["04", "Optimize from revenue", "Use customer behavior, funnel data, conversion quality, and revenue to guide decisions instead of vanity metrics."],
];

const tools = [
  ["Paid Media", "Meta Ads · Google Ads · TikTok · YouTube · CM360"],
  ["Measurement", "GA4 · GTM · Meta Pixel · CAPI · Attribution · OneTrust"],
  ["Ecommerce & Lifecycle", "Shopify · CRO · Funnel Analysis · Omnisend · Email/SMS"],
  ["Data & Reporting", "BigQuery · Databricks · SQL · Looker Studio · Power BI · Tableau · Domo"],
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
          <a href="#contact" className="nav-cta">Work With Me</a>
        </div>
      </nav>

      <section id="top" className="hero section-shell">
        <p className="eyebrow">Paid Media · Measurement · Growth Systems</p>
        <h1>Build the system behind profitable growth.</h1>
        <p className="hero-copy">
          KM & Company helps brands connect paid acquisition, trustworthy tracking, attribution, creative testing, funnel performance, and revenue so marketing decisions are based on what is actually working.
        </p>
        <div className="hero-actions">
          <a href="#work" className="button primary">View Case Studies</a>
          <a href="#contact" className="button secondary">Work With Me</a>
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
          <h2>Growth work is stronger when the media and measurement systems actually talk to each other.</h2>
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
              <h2>What I have built, fixed, and grown.</h2>
            </div>
            <p>Case studies across paid acquisition, ecommerce, attribution, tracking, creative systems, and full-funnel growth.</p>
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
          <h2>Fix the signal before scaling the spend.</h2>
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
            <h2>Use AI to make the operating system faster, not sloppier.</h2>
          </div>
          <div>
            <p>
              I use Meta and Higgsfield MCP workflows to support creative production and iteration, then build reusable AI Skills, prompts, and workflow instructions in GitHub repositories so repeatable marketing work becomes more consistent and scalable.
            </p>
            <p>
              AI supports the workflow. Performance data, customer behavior, and revenue still drive the decisions.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell section-space about-grid">
        <div>
          <p className="eyebrow">About</p>
          <h2>Built from both sides of the dashboard.</h2>
        </div>
        <div className="about-copy">
          <p>
            I’m Kalifa Shabazz, Principal of KM & Company. My work sits at the intersection of paid media, measurement, analytics, ecommerce, and growth.
          </p>
          <p>
            I have worked across enterprise analytics, subscription businesses, ecommerce brands, agencies, and consulting environments. That means I understand both the technical side of whether the data can be trusted and the commercial side of what needs to happen after the data is available.
          </p>
          <p>
            The goal is not more dashboards. It is a growth system that tells you what is working, what is broken, and what to do next.
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
          <h2>Need better paid media performance, cleaner tracking, or a growth system you can actually trust?</h2>
          <p>For consulting projects, fractional growth support, measurement work, or agency opportunities.</p>
          <div className="hero-actions">
            <a href="mailto:kalifamshabazz@gmail.com" className="button dark-button">Email Kalifa</a>
            <a href="https://www.linkedin.com/in/kalifashabazz/" target="_blank" rel="noreferrer" className="button outline-dark">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 KM & Company</span>
        <span>Paid Media · Measurement · Growth Systems</span>
      </footer>
    </main>
  );
}
