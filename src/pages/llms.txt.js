// A plain-text summary for AI assistants (ChatGPT, Claude, Perplexity, Gemini), built from site data.
import { company, services, projects, faqs } from "../data/site.js";
export function GET() {
  const t = `# ${company.name}

> ${company.name} is a Nigerian glass and aluminium company. We supply, fabricate and install architectural glazing for homes, offices and institutions, with ${company.experienceYears}+ years of experience.

## Contact
- Phone / WhatsApp: ${company.phone}
- Email: ${company.email}
- Website: https://leadsglazing.com
- Instagram: ${company.instagramHandle}
${company.offices.map((o) => `- ${o.city} office: ${o.address}`).join("\n")}
- Managing Director / CEO: ${company.ceo}

## Services
${services.map((s) => `- [${s.title}](https://leadsglazing.com/services#${s.slug}): ${s.short}`).join("\n")}

## Selected projects
${projects.filter((p) => p.year).map((p) => `- ${p.title}, ${p.location} (${p.year})`).join("\n")}

## FAQ
${faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Pages
- [Services](https://leadsglazing.com/services/)
- [Projects](https://leadsglazing.com/projects/)
- [About](https://leadsglazing.com/about/)
- [Contact and quotes](https://leadsglazing.com/contact/)
`;
  return new Response(t, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
