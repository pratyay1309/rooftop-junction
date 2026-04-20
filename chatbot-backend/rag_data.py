"""
RAG Knowledge Base for Roof Junction Engineering & Structural Solutions.

Each string in the KNOWLEDGE_CHUNKS list is a self-contained fact or answer
chunk used as retrieval context for the Gemini chatbot. The chatbot performs
simple keyword matching against these chunks — no vector DB required.
"""

KNOWLEDGE_CHUNKS: list[str] = [

    # ─── PRODUCTS: Roofing & Cladding Systems ────────────────────────────
    "Roof Junction offers high-tensile, colour-coated metal roofing and cladding systems. "
    "These sheets are designed to withstand harsh weather, UV exposure, and corrosion. "
    "Available in various profiles (trapezoidal, corrugated, standing seam) and gauges "
    "(0.40 mm to 0.80 mm). Suitable for industrial sheds, warehouses, factories, "
    "commercial buildings, and residential projects. They offer a sleek, modern appearance "
    "with a long service life of 15–25 years depending on the coating.",

    # ─── PRODUCTS: Sandwich PUF Panels ───────────────────────────────────
    "Sandwich PUF (Polyurethane Foam) Panels consist of a rigid polyurethane foam core "
    "sandwiched between two metal skins (typically colour-coated galvalume or galvanised steel). "
    "They provide excellent thermal insulation (low U-value), structural rigidity, and are "
    "fire-retardant. Ideal for cold storage facilities, temperature-controlled warehouses, "
    "modular office cabins, clean rooms, and pharma units. Available in thicknesses ranging "
    "from 30 mm to 120 mm. Quick to install and reduce energy consumption significantly.",

    # ─── PRODUCTS: Polycarbonate Roofing ─────────────────────────────────
    "Polycarbonate roofing sheets are lightweight, virtually unbreakable, and UV-protected. "
    "They allow up to 85% natural light transmission, reducing dependence on artificial lighting "
    "and cutting electricity costs. Used for skylights, covered walkways, canopies, car parking "
    "shelters, and industrial daylighting solutions. Available in multiwall and solid profiles. "
    "Impact resistance is approximately 200 times that of glass.",

    # ─── PRODUCTS: Structural Steel Framework ────────────────────────────
    "Roof Junction supplies precision-engineered structural steel frameworks including columns, "
    "rafters, trusses, bracings, and base plates. Made from MS (Mild Steel) and high-tensile "
    "steel, all frameworks are designed as per IS 800 (Code of Practice for General Construction "
    "in Steel) and IS 801 (Code of Practice for Cold-Formed Steel). These frameworks serve as "
    "the primary skeleton for industrial buildings, warehouses, factories, and commercial structures.",

    # ─── PRODUCTS: Purlins & Girts ───────────────────────────────────────
    "Z and C section purlins and girts are cold-formed steel members that provide secondary "
    "structural support for roofing and wall cladding. Available in sizes ranging from 100 mm to "
    "300 mm depth. They offer a high strength-to-weight ratio, are easy to install, and are "
    "manufactured as per IS 811 standards. Purlins run horizontally to support the roof sheeting, "
    "while girts run horizontally on walls to support the wall cladding.",

    # ─── PRODUCTS: Turbo Ventilators ─────────────────────────────────────
    "Turbo ventilators are wind-driven, zero-electricity rotating ventilation devices. They "
    "extract hot, humid, and stale air from inside industrial and commercial buildings through "
    "natural wind pressure. A single 24-inch turbo ventilator can ventilate approximately "
    "100–150 sq. metres of floor area. They improve worker comfort, reduce ambient temperature "
    "by 5–10°C, and lower cooling costs. Maintenance-free with a lifespan of 15+ years.",

    # ─── SERVICES: Roofing Installation ──────────────────────────────────
    "Roof Junction provides end-to-end professional roofing installation services. This includes "
    "site measurement and survey, material planning and procurement, and installation by trained "
    "technicians. The service covers metal roofing, cladding, ridge capping, flashing, gutter "
    "installation, and weatherproof sealing. All installations follow manufacturer guidelines "
    "and IS standards. We serve residential, commercial, and industrial projects across Pune "
    "and surrounding areas in Maharashtra.",

    # ─── SERVICES: Custom Sheet Metal Fabrication ────────────────────────
    "Our custom sheet metal fabrication service includes cutting, bending, rolling, notching, "
    "and profiling of metal sheets to exact client specifications using advanced CNC machinery. "
    "Suitable for non-standard roofing profiles, architectural flashings, custom gutters, "
    "downspouts, ridge caps, louvers, and decorative elements. We work with galvanised steel, "
    "galvalume, aluminium, and colour-coated sheets. Tight tolerances and durable factory "
    "finishes are guaranteed.",

    # ─── SERVICES: Structural Solutions ──────────────────────────────────
    "Structural solutions from Roof Junction include the design, supply, and erection of "
    "complete structural steel frameworks. This covers primary structures (columns, rafters, "
    "trusses) and secondary structures (purlins, girts, bracings, sag rods). All structural "
    "work is executed in strict compliance with IS 800 and IS 801 codes. We handle projects "
    "from small workshops to large industrial complexes.",

    # ─── SERVICES: Repair & Maintenance ──────────────────────────────────
    "Roof Junction offers scheduled and emergency repair and maintenance services for existing "
    "roofing and structural systems. Services include roof leak detection and fixing, damaged "
    "sheet replacement, re-sealing of joints and fasteners, anti-rust treatment, waterproof "
    "coating application, structural reinforcement, and repainting. We help extend the lifecycle "
    "of your roofing system and restore its performance.",

    # ─── SERVICES: Consultation & Site Inspection ────────────────────────
    "We offer on-site technical consultation and inspection services. A qualified engineer "
    "visits your site to assess the roofing and structural requirements, recommend the most "
    "suitable system, provide a detailed cost estimation, and plan the project execution timeline. "
    "This service helps you make informed decisions before committing to a project. Contact us "
    "to schedule a visit.",

    # ─── PRICING & QUOTES ────────────────────────────────────────────────
    "Roof Junction does not publish fixed prices on the website because costs depend on several "
    "factors: total project area (sq. ft./sq. m.), choice of material and profile, site location "
    "and accessibility, labour and crane requirements, and project complexity. To get an accurate "
    "quote, customers should contact us directly.",

    "To get a quote from Roof Junction, call the proprietor R R Yesade at +91 90217 15847 "
    "or email salesroofjunction2026@gmail.com with your project details. Quotes are typically "
    "provided after a detailed discussion or a site inspection. You can also visit the Contact "
    "page on our website to send a message.",

    # ─── CONTACT & LOCATION ──────────────────────────────────────────────
    "Roof Junction Engineering & Structural Solutions is located at Milkat No. 0524, Canal Road, "
    "Khadak Vasla Road, Pune, Maharashtra – 411023, India. The proprietor is R R Yesade. "
    "Phone: +91 90217 15847. Email: salesroofjunction2026@gmail.com. The company primarily serves "
    "the Pune metropolitan region, Pimpri-Chinchwad, and surrounding areas in Maharashtra. "
    "Site visits can be arranged by calling or emailing in advance.",

    # ─── COMPANY OVERVIEW ────────────────────────────────────────────────
    "Roof Junction Engineering & Structural Solutions is a comprehensive, one-stop provider of "
    "roofing and structural systems based in Pune, Maharashtra, India. The company handles the "
    "full project lifecycle — from engineering design and material supply to precision fabrication, "
    "professional installation, and long-term maintenance. Sectors served include residential "
    "(houses, villas, apartments), commercial (offices, showrooms, malls), and industrial "
    "(factories, warehouses, sheds, workshops).",

    "All products supplied and work executed by Roof Junction comply with relevant Indian Standards "
    "(IS codes) for quality, structural safety, and durability. The company is committed to "
    "innovation, cost efficiency, timely delivery, and customer satisfaction. The team includes "
    "experienced structural engineers, designers, and skilled technicians with deep industry expertise.",
]
