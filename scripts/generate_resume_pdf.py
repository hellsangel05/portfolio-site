"""Generate an ATS-readable, one-page resume for the portfolio."""
from pathlib import Path
import sys

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer

output = Path(sys.argv[1] if len(sys.argv) > 1 else "public/angel-gonzalez-resume.pdf")
output.parent.mkdir(parents=True, exist_ok=True)
base = ParagraphStyle("Body", fontName="Helvetica", fontSize=9, leading=12, textColor=colors.HexColor("#1c1c20"), spaceAfter=3)
heading = ParagraphStyle("Heading", parent=base, fontName="Helvetica-Bold", fontSize=9.5, leading=12, spaceBefore=9, spaceAfter=4)
title = ParagraphStyle("Name", parent=base, fontName="Helvetica-Bold", fontSize=23, leading=26, spaceAfter=3)
subtitle = ParagraphStyle("Subtitle", parent=base, fontSize=10, leading=13, spaceAfter=5)
small = ParagraphStyle("Small", parent=base, fontSize=8.3, leading=11)
role = ParagraphStyle("Role", parent=base, fontName="Helvetica-Bold", fontSize=9.1, leading=12, spaceBefore=5, spaceAfter=2)

story = [
    Paragraph("Angel Gonzalez", title),
    Paragraph("Web Development | Automation | Technical Support", subtitle),
    Paragraph("San Fernando Valley, Los Angeles, CA | gonzalezangel0510@yahoo.com", small),
    Paragraph("portfolio-site-green-xi.vercel.app | github.com/hellsangel05", small),
    Spacer(1, 7),
    Paragraph("SUMMARY", heading),
    Paragraph("Hands-on website, application and automation projects paired with customer service and practical troubleshooting experience. Seeking an entry point into a long-term tech career.", base),
    Paragraph("SELECTED PROJECTS", heading),
    Paragraph("Aurora Pool &amp; Spa | Client website", role),
    Paragraph("Astro site with responsive service pages, location details, contact flows, optimized media and SEO.", base),
    Paragraph("ADGO Studios | Web and automation work", role),
    Paragraph("Co-founded a small studio; worked on website development, GoHighLevel CRM setup, lead intake and an AI voice receptionist offering information and consultation bookings.", base),
    Paragraph("PSYCH! Open Source | Publishing platform", role),
    Paragraph("Next.js reading experience with episodes, archive, timeline, progress tracking and spoiler controls.", base),
    Paragraph("Raidio | Full-stack music project", role),
    Paragraph("Next.js and Supabase radio prototype with synchronized playback, station programming and AI audio.", base),
    Paragraph("EXPERIENCE", heading),
    Paragraph("ADGO Studios | Co-founder, web and automation projects | 2026 - present", role),
    Paragraph("Built and configured business websites and workflows; coordinated project requirements with clients. Tested web forms, automation flows and customer-facing tools with a collaborator.", base),
    Paragraph("The Home Depot | Hardware Sales Associate | 2025 - present", role),
    Paragraph("Assist customers in hardware, plumbing and electrical; explain options in English and Spanish. Troubleshoot practical problems and work across departments to find solutions.", base),
    Paragraph("Earlier work | Manufacturing, pest control and field service", role),
    Paragraph("Hands-on technical and customer-facing work, following processes and resolving on-site issues.", base),
    Paragraph("SKILLS", heading),
    Paragraph("Web: JavaScript, TypeScript, React, Next.js, Astro, responsive design, APIs", small),
    Paragraph("Data and hosting: Supabase, PostgreSQL, GitHub, Vercel, Cloudflare", small),
    Paragraph("Business systems: GoHighLevel, CRM, forms, voice AI, workflow automation", small),
    Paragraph("EDUCATION", heading),
    Paragraph("Granada Hills Charter High School | Diploma, 2016", small),
]
doc = SimpleDocTemplate(str(output), pagesize=letter, leftMargin=46, rightMargin=46, topMargin=38, bottomMargin=38,
    title="Angel Gonzalez - Resume", author="Angel Gonzalez")
doc.build(story)
print(output.resolve())
