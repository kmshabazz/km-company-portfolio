const proof = [
  ["131", "Meta purchases managed for Kali Luxe"],
  ["5.49K", "Google Ads clicks for Kali Luxe"],
  ["$0.49", "average Google Ads CPC"],
  ["171/171", "Google Merchant Center variants approved"],
];

const services = [
  {
    title: "Meta & Google Ads Management",
    copy: "Hands-on campaign strategy and management across Facebook and Instagram Ads through Meta, plus Google Search and Shopping. I handle campaign structure, budgets, creative testing, optimization, and performance analysis tied back to business outcomes.",
  },
  {
    title: "Measurement & Attribution",
    copy: "GA4, GTM, Meta Pixel, CAPI, Google Ads conversion tracking, revenue events, attribution, and cross-platform reconciliation so campaigns are optimized against trustworthy signals.",
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
  ["01", "Diagnose", "Audit the acquisition, measurement, funnel, and reporting system to find where signal or performance is breaking."],
  ["02", "Fix the foundation", "Repair tracking, attribution, conversion events, platform connections, and reporting before scaling spend."],
  ["03", "Run & test", "Build and manage Meta and Google campaigns, creative testing, audience strategy, budgets, and funnel measurement."],
  ["04", "Optimize from revenue", "Use customer behavior, funnel data, conversion quality, and revenue to guide decisions instead of vanity metrics."],
];

const tools = [
  ["Paid Media", "Meta Ads (Facebook & Instagram) · Google Ads · Google Shopping · TikTok · YouTube · CM360"],
  ["Measurement", "GA4 · GTM · Meta Pixel · CAPI · Google Ads Conversion Tracking · Attribution · OneTrust"],
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
          <a href="#contact" className="nav-cta">Start a Project</a>
        </div>
      </nav>

      <section id="top" className="hero section-shell">
        <div className="hero-label">KM & Company · Consulting Portfolio</div>
        <p className="eyebrow">Meta Ads · Google Ads · Measurement · Growth</p>
        <h1>Paid media operator. Measurement specialist.</h1>
        <p className="hero-copy">
          I’m Kalifa Shabazz, Principal of KM & Company. I manage Meta and Google advertising while also building the tracking, attribution, analytics, and growth systems behind the campaigns.
        </p>
        <p className="hero-copy">
          Facebook & Instagram Ads · Google Search & Shopping · GA4 · GTM · Meta Pixel · CAPI · Attribution · Ecommerce Analytics
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
          <h2>Campaign management and measurement, under one roof.</h2>
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
              <h2>Paid media, tracking, and growth systems in practice.</h2>
            </div>
            <p>Case studies across Meta Ads, Google Ads, ecommerce, attribution, conversion tracking, creative systems, and full-funnel growth.</p>
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
          <h2>Fix the signal, run the campaigns, optimize from the business outcome.</h2>
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
          <p className="eyebrow">Why This Combination Matters</p>
          <h2>I work on both sides of performance marketing.</h2>
        </div>
        <div className="about-copy">
          <p>
            My experience spans enterprise analytics, subscription businesses, ecommerce brands, agencies, and consulting environments. That combination lets me run the acquisition engine while making sure the data used to optimize it can actually be trusted.
          </p>
          <p>
            I can move from campaign strategy and creative testing into tracking, attribution, funnel analysis, and revenue measurement without handing the problem off between separate teams.
          </p>
          <p>
            The goal is not more dashboards or more ad spend. It is a growth system that tells you what is working, what is broken, and what to do next.
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
          <h2>Need someone who can run Meta or Google Ads and understand the data behind them?</h2>
          <p>Paid media management, consulting projects, fractional growth support, measurement work, and agency opportunities.</p>
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
        <span>Meta Ads · Google Ads · Measurement · Growth Systems</span>
      </footer>
    </main>
  );
}
