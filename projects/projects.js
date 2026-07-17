/*
 * ADD NEW PORTFOLIO WORK HERE
 *
 * 1. Create a folder inside projects/work/ for the project
 * 2. Create an images folder inside it and drop all screenshots there
 * 3. Copy one of the examples from projects/README.md
 * 4. Paste it between the [ ] below and update its details
 * 5. Use category: "websites" or category: "automations"
 */

window.additionalProjects = [
  {
    category: "websites",
    title: "Eora Business Management Platform",
    type: "Full-Stack Web Application",
    client: "Eora",
    folder: "projects/work/eora-webdev",
    images: [
      "eora-homepage.png",
      "eora-login-page.png",
      "eora- reset-password-email.png",
      "eora-create-new-password.png",
      "eora-clientspage.png",
      "eora-projectspage.png",
      "eora-projectsdetails.png",
      "eora-Timerpage.png",
      "eora-timesheet.png",
      "eora-expenses.png",
      "eora-invoices.png",
      "eora-Team.png",
      "eora-settings.png"
    ],
    imageAlt: "Eora business management dashboard",
    description: "Designed for Activate Law, an Ohio-based law firm, Eora is a complete business operations platform for managing clients, projects, time tracking, timesheets, expenses, invoices, team members, and account settings from one streamlined workspace.",
    tags: ["Web Application", "Project Management", "Time Tracking", "Responsive UI"]
  },
  {
    category: "websites",
    title: "Reform Body Coaching Application Landing Page",
    type: "Lead Generation Landing Page",
    client: "Reform Body Coaching · Australia",
    folder: "projects/work/rfm -webdev",
    images: [
      "rfm -  landing page full page.png"
    ],
    imageAlt: "Full-page Reform Body Coaching lead generation landing page",
    description: "Built entirely inside GoHighLevel using custom code, this conversion-focused landing page was created for Reform Body Coaching, an Australian coaching business. It guides prospective clients from a clear value proposition into an interactive qualification form, supported by a founder video, client transformations, Google reviews, and strategically placed application calls to action.",
    tags: ["GoHighLevel", "Custom Code", "Landing Page", "Lead Generation"]
  },
  {
    category: "automations",
    title: "GHL Lead Attribution Sync",
    type: "Lead Management Automation",
    client: "Reform Body Coaching · Australia",
    folder: "projects/work/rfm-automation",
    images: [
      "Reform Body Coaching - Automation 1.png"
    ],
    imageAlt: "GoHighLevel contact attribution workflow for Reform Body Coaching",
    description: "Built for Reform Body Coaching, an Australian coaching business, this workflow captures every new or updated GoHighLevel contact and creates or updates the matching Airtable record. It keeps sign-up status, booking status, UTM data, source details, and Meta attribution accurate in one central database.",
    tags: ["Make.com", "GoHighLevel", "Airtable", "Meta Attribution"]
  },
  {
    category: "automations",
    title: "Payment-to-Onboarding Automation",
    type: "Client Onboarding Automation",
    client: "Reform Body Coaching · Australia",
    folder: "projects/work/rfm-automation",
    images: [
      "Reform Body Coaching - Automation 2.png"
    ],
    imageAlt: "Stripe payment and Kahunas client onboarding workflow for Reform Body Coaching",
    description: "When a client completes a Stripe payment, this workflow moves them directly into onboarding by adding their details to the Airtable client database, notifying the team in Slack, and creating their account in the Kahunas coaching app. It removes repetitive setup work and gives each new client a faster start.",
    tags: ["Make.com", "Stripe", "Airtable", "Slack", "Kahunas"]
  },
  {
    category: "automations",
    title: "AI-Powered Client Intake Workflow",
    type: "Legal Intake Automation",
    client: "Activate Law · Ohio, USA",
    folder: "projects/work/activatelaw- automation",
    images: [
      "activate law - automation1.png"
    ],
    imageAlt: "Activate Law Gmail client intake automation workflow",
    description: "Built for Activate Law, an Ohio-based law firm, this workflow processes incoming client intake emails from Gmail, notifies the team in Slack, and uses Claude to generate a clear case summary. It then creates a structured task in ClickUp, organizes the matter in Dropbox, and uploads every email attachment so the legal team receives a complete, actionable intake package without manual data entry.",
    tags: ["Make.com", "Gmail", "Claude AI", "ClickUp", "Dropbox", "Slack"]
  },
  {
    category: "websites",
    title: "Meal Plan Haven",
    type: "Full-Stack Meal Planning Platform",
    client: "Meal Plan Haven · Australia",
    folder: "projects/work/mph-webdev",
    images: [
      "mph - homepage .png",
      "mph - calculatorpage.png",
      "mph -mealgeneratorpage.png",
      "mph -Buiilmymealpage.png",
      "mph -clientspage.png",
      "mph - adminpage.png",
      "mph - systempage.png",
      "mph - profilepage.png"
    ],
    imageAlt: "Meal Plan Haven meal planning platform homepage",
    description: "Meal Plan Haven is an Australian web platform that helps coaches create and customize meal plans from a professional food database. It includes calorie calculations, automated meal-plan generation, manual meal building, multi-client assignment, client management, administration, system controls, and user profiles. The platform integrates Stripe for payments and subscriptions, with Firebase and Google Cloud services supporting its application infrastructure.",
    tags: ["Firebase", "Stripe", "Google Cloud", "Meal Planning", "Client Management"]
  }
];
