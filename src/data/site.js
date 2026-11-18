// All the business details in one place. Edit here and every page updates.
// Anything marked CHECK still needs the owner to confirm before going live.

export const company = {
  name: "Leads Glazing",
  tagline: "Elevating Nigerian architecture with premium glass and aluminium.",
  phone: "07031051140",
  phoneIntl: "2347031051140",
  email: "info@leadsglazing.com", // Zoho alias on the Mail Free plan; previously leadsglazing@gmail.com
  instagram: "https://www.instagram.com/leadsglazing/",
  instagramHandle: "@leadsglazing",
  ceo: "Elihu Abdulwahab",
  ceoTitle: "Managing Director / CEO",
  offices: [
    { city: "Abuja", address: "Uoo Complex, Jabi, Abuja" },
    { city: "Bida", address: "Opposite Fed Poly Big Gate, Bida, Niger State" },
  ],
  experienceYears: 9, // owner, 18 Nov 2026: "9 years+ experience"
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "windows-doors",
    title: "Aluminium Windows & Doors",
    short: "Casement, sliding and pivot systems built for smooth operation and a clean finish.",
    body: "We supply, fabricate and install high-performance aluminium window and door systems for homes, offices and institutions. Every opening is measured on site, fabricated to size and fitted with quality hardware and seals.",
    points: ["Casement, sliding and pivot windows", "Hinged and sliding doors", "Fanlights and fixed glazing", "Burglary-proof options"],
    image: "/images/ministers-sunroom.jpg",
  },
  {
    slug: "curtain-wall",
    title: "Curtain Walling & Facades",
    short: "Weather-tight glass facades and ACP cladding for commercial and high-end buildings.",
    body: "From multi-storey curtain walls to spider-fitted glass and ACP cladding, we build facades that look sharp and keep the weather out.",
    points: ["Stick curtain wall systems", "Spider (point-fixed) glazing", "ACP cladding and signage frames", "Facade repairs and re-glazing"],
    image: "/images/oau-curtain-wall.jpg",
  },
  {
    slug: "glass-partitions",
    title: "Frameless Glass & Office Partitions",
    short: "Light-filled offices with frameless glass, aluminium partitions and glass doors.",
    body: "We turn open floors into working offices with frameless glass, aluminium-framed partitions and frosted or branded glass doors, usually finished in one to two days on site.",
    points: ["Frameless glass partitions and doors", "Aluminium (K-2000) mini partitions", "Frosted and branded glass film", "Reuse of existing materials where possible"],
    image: "/images/eefp-office.jpg",
  },
  {
    slug: "showers-railings",
    title: "Shower Cubicles, Railings & Balustrades",
    short: "Fixed, hinged and sliding shower glass, plus glass railings for stairs and balconies.",
    body: "Bespoke glass for bathrooms and balconies: fixed panels, hinged or sliding shower doors, stair railings and balcony balustrades.",
    points: ["Fixed-panel shower screens", "Hinged and sliding shower doors", "Stair and balcony glass railings", "Decorative laser-cut privacy screens"],
    image: "/images/shower-cubicle.jpg",
  },
  {
    slug: "plasterboard-ceilings",
    title: "Plasterboard Partitions & POP Ceilings",
    short: "Fast, clean dry-wall partitions and gypsum ceilings with a smooth finish.",
    body: "Plasterboard walls go up quickly, finish smoothly and can include doors, windows and glass vision panels. We also install gypsum-board POP ceilings with skilled crews.",
    points: ["Plasterboard walls, both faces boarded", "Doors and windows framed in", "Screeding, taping and finishing", "Gypsum-board POP ceilings"],
    image: "/images/office-partition.jpg",
  },
  {
    slug: "maintenance",
    title: "Repairs & Maintenance",
    short: "Broken glass, worn hinges, stoppers and seals replaced quickly.",
    body: "We keep existing glazing working: glass replacement, hinges, angles, stoppers and rubber seals, usually done in a single visit.",
    points: ["Glass replacement", "Hinges, stoppers and handles", "Rubber seals and weatherproofing", "Site visit and quote before work"],
    image: "/images/office-glass-door.jpg",
  },
];

// Project captions: clients kept private (owner, 18 Nov 2026); locations and years from the owner's Drive folders.
// The first six appear as "Featured works" on the home page.
export const projects = [
  { title: "Curtain wall & windows", location: "OAU, Ile-Ife", year: "2025", image: "/images/oau-curtain-wall.jpg", tag: "Curtain Wall" },
  { title: "Sunroom glazing", location: "Ministers Quarters, FCT", year: "2025", image: "/images/ministers-sunroom.jpg", tag: "Windows & Doors" },
  { title: "Frameless glass partitions", location: "NEPC, Abuja", year: "2021", image: "/images/nepc-partition.jpg", tag: "Glass Partitions" },
  { title: "Curtain wall facade", location: "Opposite American Embassy, Abuja", year: "2022", image: "/images/curtain-wall-abuja.jpg", tag: "Curtain Wall" },
  { title: "Auditorium curtain wall", location: "Kabusa, FCT", year: "2017–2019", image: "/images/kabusa-auditorium.jpg", tag: "Curtain Wall" },
  { title: "Residence glazing", location: "Katampe Extension, Abuja", year: "2019", image: "/images/katampe-residence.jpg", tag: "Windows & Doors" },
  { title: "Rooftop sunroom", location: "Gwarinpa, Abuja", year: "", image: "/images/gwarinpa-rooftop-sunroom.jpg", tag: "Windows & Doors" },
  { title: "Balcony sunroom & glass balustrade", location: "Gwarinpa, Abuja", year: "", image: "/images/gwarinpa-balcony-sunroom.jpg", tag: "Windows & Doors" },
  { title: "School windows & balconies", location: "Gwarinpa, Abuja", year: "2025", image: "/images/folton-school.jpg", tag: "Windows & Doors" },
  { title: "Corner shower cubicle", location: "Private residence", year: "2024", image: "/images/shower-corner.jpg", tag: "Shower & Interior Glass" },
  { title: "Entrance swing doors", location: "Export House (EEFP), Abuja", year: "2021", image: "/images/eefp-entrance-doors.jpg", tag: "Doors" },
  { title: "Aluminium swing doors", location: "Private residence", year: "2024", image: "/images/residence-swing-doors.jpg", tag: "Doors" },
  { title: "Sliding shower enclosure", location: "Private residence", year: "2024", image: "/images/shower-sliding.jpg", tag: "Shower & Interior Glass" },
  { title: "Window blocks", location: "OAU, Ile-Ife", year: "2025", image: "/images/oau-block-front.jpg", tag: "Windows & Doors" },
  { title: "Office fit-out", location: "Export House (EEFP), Abuja", year: "", image: "/images/eefp-office.jpg", tag: "Glass Partitions" },
  { title: "Sunroom installation", location: "Ministers Quarters, FCT", year: "2025", image: "/images/ministers-sunroom-install.jpg", tag: "Windows & Doors" },
  { title: "Glass partitions & doors", location: "NEPC, Abuja", year: "2021", image: "/images/nepc-office.jpg", tag: "Glass Partitions" },
  { title: "Curtain wall installation", location: "Kabusa, FCT", year: "2017–2019", image: "/images/kabusa-install.jpg", tag: "Curtain Wall" },
  { title: "Facade installation", location: "Multi-storey building", year: "", image: "/images/facade-in-progress.jpg", tag: "Curtain Wall" },
  { title: "Balcony glass & screens", location: "Katampe Extension, Abuja", year: "2019", image: "/images/katampe-balconies.jpg", tag: "Windows & Doors" },
  { title: "Office partitions", location: "Office interior", year: "", image: "/images/office-partition.jpg", tag: "Glass Partitions" },
  { title: "Shower cubicle", location: "Private residence", year: "", image: "/images/shower-cubicle.jpg", tag: "Shower & Interior Glass" },
  { title: "Privacy screen", location: "Interior", year: "", image: "/images/privacy-screen.jpg", tag: "Shower & Interior Glass" },
  { title: "Branded glass door", location: "Office", year: "", image: "/images/office-glass-door.jpg", tag: "Doors" },
];

// Team shown on the About page. Add a person here with a photo in public/images/ (4:5 portrait).
export const team = [
  { name: "Elihu Abdulwahab", role: "Managing Director / CEO", image: "/images/team-elihu.jpg", email: "ceo@leadsglazing.com" },
  { name: "Arc. Ayomide Zainab Makinde", role: "Project Architect", image: "/images/team-ayomide.jpg", email: "ayomide@leadsglazing.com" },
];

export const process = [
  { step: "01", title: "Site visit & measurement", text: "We visit, take exact measurements and agree what you need, so the quote is based on your real site." },
  { step: "02", title: "Clear quotation", text: "You get an itemised, branded quote with materials, labour, transport and timeline spelled out." },
  { step: "03", title: "Fabrication & installation", text: "Our team fabricates to size and installs with quality materials, keeping you updated as we go." },
  { step: "04", title: "Inspection & handover", text: "We inspect every panel and fitting with you before handover, then stay available for maintenance." },
];

export const values = [
  { title: "Uncompromising quality", text: "From sourcing materials to the last seal, care shows in every detail." },
  { title: "Innovation", text: "Modern glazing systems and techniques that solve hard openings and lift a building." },
  { title: "Sustainability", text: "Energy-conscious choices that keep spaces bright and cooler." },
  { title: "Customer first", text: "Clear communication and a professional experience from first visit to handover." },
];
