export interface Neighborhood {
  name: string;
  zip: string;
  desc: string;
  services: string[];
}

export interface LocationData {
  city: string;
  state: string;
  stateAbbr: string;
  county: string;
  metaDescription: string;
  metaKeywords: string;
  heroDescription: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  dispatchContext: string;
  coverageContext: string;
  industriesExtra: string; // extra local industry detail
  neighborhoods: Neighborhood[];
  faqCityContext: string; // used in the first FAQ answer
}

const locationsData: Record<string, LocationData> = {
  // ─────────────────── MARYLAND ───────────────────
  aberdeen: {
    city: "Aberdeen",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Harford County",
    metaDescription:
      "Certified NFPA 96 commercial kitchen hood cleaning, grease removal, and exhaust duct degreasing services in Aberdeen, MD. 24/7 service, certified inspections, and compliance stickers.",
    metaKeywords:
      "kitchen hood cleaning Aberdeen MD, commercial kitchen exhaust cleaning Aberdeen, restaurant hood cleaning Harford County, NFPA 96 compliance Aberdeen, grease trap cleaning Aberdeen MD",
    heroDescription:
      "Keep your Aberdeen restaurant safe, sanitary, and fully compliant with NFPA 96 standards. Our local certified specialists degrease exhaust fans, duct runs, and hood canopies down to bare metal.",
    aboutParagraph1:
      "In Aberdeen, MD, commercial kitchens face strict local safety regulations and fire code inspections. A clean ventilation system is crucial for safety and air quality. We clean the hood canopy, ductwork, and rooftop exhaust fan to keep your kitchen compliant.",
    aboutParagraph2:
      "We serve diners on Route 40, cafeterias near Aberdeen Proving Ground, and regional food service operators. Our certified technicians provide detailed service documentation, compliance stickers, and photo reports to keep your kitchen clean and safe.",
    dispatchContext: "Technicians dispatch locally from nearby depots in Harford County.",
    coverageContext:
      "We offer fast commercial kitchen safety services across all major neighborhoods, military zones, and business corridors in the City of Aberdeen.",
    industriesExtra: "Aberdeen Proving Ground Cafeterias",
    neighborhoods: [
      { name: "Aberdeen Proving Ground (APG)", zip: "21005", desc: "Military facilities & food services", services: ["Hood Cleaning", "Compliance Audits", "PCS Maintenance"] },
      { name: "Downtown Aberdeen", zip: "21001", desc: "Main Street restaurants & diners", services: ["Grease Removal", "Fan Repairs", "Filter Pumping"] },
      { name: "Swan Meadows", zip: "21001", desc: "Local community businesses", services: ["Hood Cleaning", "Fan Repairs", "Compliance Audits"] },
      { name: "Paradise", zip: "21001", desc: "Commercial avenues & dining units", services: ["Grease Trap Pumping", "Duct Panel Install", "Fan Inspections"] },
      { name: "Aberdeen Heights", zip: "21001", desc: "Local enterprise kitchens", services: ["Exhaust Fan Installs", "Blower Repairs", "Steam Washing"] },
      { name: "Carsins Run", zip: "21001", desc: "Route 22 & highway food facilities", services: ["NFPA 96 Compliance", "Hood Cleaning", "Filter Exchange"] },
      { name: "Rogers Street Corridor", zip: "21001", desc: "Retail centers & restaurant rows", services: ["Motor Adjustments", "Grease Pumping", "Inspections"] },
      { name: "Chapel Hill", zip: "21001", desc: "Local dining spots & facilities", services: ["Canopy Degreasing", "Plenum Scraping", "Duct Panels"] },
      { name: "Cranberry", zip: "21001", desc: "Suburban commercial kitchens", services: ["Rooftop Fan Cleaning", "Belt Replacement", "Sticker Placements"] },
      { name: "Long Drive", zip: "21001", desc: "Golf club & hospitality kitchens", services: ["Duct Cleanings", "ESP Maintenance", "Grease Interceptors"] },
    ],
    faqCityContext: "Aberdeen, MD",
  },
  annapolis: {
    city: "Annapolis",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Anne Arundel County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Annapolis, MD. NFPA 96 compliant services for restaurants, hotels, and seafood venues near the Chesapeake Bay.",
    metaKeywords:
      "kitchen hood cleaning Annapolis MD, commercial kitchen exhaust cleaning Annapolis, restaurant hood cleaning Anne Arundel County, NFPA 96 compliance Annapolis, grease trap cleaning Annapolis MD",
    heroDescription:
      "Keep your Annapolis waterfront restaurant or hotel kitchen safe and NFPA 96 compliant. We provide certified exhaust hood cleaning, fan repairs, and duct degreasing services for commercial kitchens throughout the state capital.",
    aboutParagraph1:
      "Annapolis, MD is home to a vibrant dining and hospitality scene along Ego Alley and the Historic District. With high-volume seafood kitchens, hotel dining rooms, and event venues, maintaining certified exhaust system cleanliness is critical for fire safety and health code compliance.",
    aboutParagraph2:
      "We serve restaurants on Main Street, waterfront venues, Eastport eateries, and hotel kitchens near the Maryland State House. Our NFPA 96 certified technicians provide full-system cleaning, digital photo reports, and official compliance stickers.",
    dispatchContext: "Technicians dispatch locally from Anne Arundel County service depots.",
    coverageContext:
      "We provide rapid commercial kitchen exhaust services across all Annapolis neighborhoods, waterfront districts, and business corridors.",
    industriesExtra: "Waterfront & Seafood Restaurants",
    neighborhoods: [
      { name: "Historic District", zip: "21401", desc: "Main Street eateries & taverns", services: ["Hood Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Eastport", zip: "21403", desc: "Marina restaurants & seafood kitchens", services: ["Fan Repairs", "Duct Cleaning", "NFPA Audits"] },
      { name: "West Annapolis", zip: "21401", desc: "Local cafes & dining spots", services: ["Hood Cleaning", "Filter Exchange", "PCS Maintenance"] },
      { name: "Parole", zip: "21401", desc: "Retail & commercial food operations", services: ["Grease Trap Pumping", "Fan Installs", "Compliance"] },
      { name: "Hillsmere Shores", zip: "21403", desc: "Waterfront club kitchens", services: ["Canopy Degreasing", "Plenum Scraping", "Inspections"] },
      { name: "Annapolis Roads", zip: "21401", desc: "Residential & small business kitchens", services: ["Hood Cleaning", "Belt Replacement", "Exhaust Fan Repairs"] },
      { name: "Bay Ridge", zip: "21403", desc: "Clubhouse & hospitality venues", services: ["Duct Cleaning", "Grease Trap Pumping", "Compliance Stickers"] },
      { name: "Homewood", zip: "21401", desc: "Local restaurants & catering kitchens", services: ["NFPA 96 Compliance", "Fan Repairs", "Filter Exchange"] },
      { name: "Cape St. Claire", zip: "21401", desc: "Community & commercial dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Severn River Area", zip: "21403", desc: "Waterfront & event venue kitchens", services: ["Grease Removal", "Duct Panels", "Rooftop Fan Cleaning"] },
    ],
    faqCityContext: "Annapolis, MD",
  },
  baltimore: {
    city: "Baltimore",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Baltimore City",
    metaDescription:
      "Certified commercial kitchen hood cleaning, exhaust fan repair, and grease trap pumping in Baltimore, MD. NFPA 96 compliant services for restaurants, hotels, and stadiums throughout Charm City.",
    metaKeywords:
      "kitchen hood cleaning Baltimore MD, commercial kitchen exhaust cleaning Baltimore, restaurant hood cleaning Baltimore City, NFPA 96 compliance Baltimore, grease trap cleaning Baltimore MD",
    heroDescription:
      "Crossaire provides NFPA 96 certified commercial kitchen exhaust cleaning throughout Charm City's diverse restaurant, hotel, and stadium food service operations. Available 24/7 for overnight scheduling.",
    aboutParagraph1:
      "Baltimore's booming food scene — from Inner Harbor restaurants and Federal Hill taverns to Fells Point seafood spots and East Baltimore diners — demands rigorous, consistent kitchen exhaust maintenance. Fire code compliance and grease removal are non-negotiable for health inspection passes.",
    aboutParagraph2:
      "We serve restaurant kitchens near Camden Yards, hotel dining facilities in Harbor East, fast food operations in Towson, and independent restaurants throughout Baltimore City. Our certified crews work overnight to minimize disruption.",
    dispatchContext: "Technicians dispatch from multiple Baltimore City and County depots for rapid same-day response.",
    coverageContext:
      "We provide commercial kitchen safety services across all Baltimore neighborhoods, from the waterfront to the suburbs.",
    industriesExtra: "Stadium & Event Venue Kitchens",
    neighborhoods: [
      { name: "Inner Harbor", zip: "21202", desc: "Waterfront hotels & restaurants", services: ["Hood Cleaning", "Grease Removal", "Fan Repairs"] },
      { name: "Fells Point", zip: "21231", desc: "Historic district seafood & taverns", services: ["Exhaust System Cleaning", "Compliance Stickers", "Duct Cleaning"] },
      { name: "Federal Hill", zip: "21230", desc: "Bar & restaurant district", services: ["Hood Cleaning", "NFPA Audits", "Filter Exchange"] },
      { name: "Canton", zip: "21224", desc: "Trendy restaurants & rowhome kitchens", services: ["Canopy Degreasing", "Fan Installs", "Grease Trap Pumping"] },
      { name: "Hampden", zip: "21211", desc: "Independent eateries & boutique dining", services: ["Hood Cleaning", "PCS Maintenance", "Compliance"] },
      { name: "Roland Park", zip: "21210", desc: "Upscale dining & hotel kitchens", services: ["Steam Cleaning", "Belt Replacement", "NFPA Compliance"] },
      { name: "Mount Vernon", zip: "21201", desc: "Cultural district restaurants", services: ["Duct Cleaning", "Fan Repairs", "Inspections"] },
      { name: "Little Italy", zip: "21202", desc: "Italian restaurant district", services: ["Hood Cleaning", "Grease Trap Pumping", "Compliance Stickers"] },
      { name: "Harbor East", zip: "21202", desc: "Luxury hotel & fine dining", services: ["Exhaust System Cleaning", "PCS Maintenance", "Fan Installs"] },
      { name: "Belair-Edison", zip: "21214", desc: "Local community dining spots", services: ["Hood Cleaning", "Fan Repairs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Baltimore, MD",
  },
  "bel-air": {
    city: "Bel Air",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Harford County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Bel Air, MD. NFPA 96 compliant services for restaurants and commercial kitchens throughout Harford County.",
    metaKeywords:
      "kitchen hood cleaning Bel Air MD, commercial kitchen exhaust Bel Air, restaurant hood cleaning Harford County, NFPA 96 compliance Bel Air MD",
    heroDescription:
      "Protect your Bel Air restaurant or commercial kitchen with certified NFPA 96 exhaust hood cleaning. We serve dining establishments and food facilities throughout Harford County.",
    aboutParagraph1:
      "Bel Air, MD is the seat of Harford County and home to a growing restaurant and retail food scene along Bel Air Road and Main Street. Commercial kitchens here must meet NFPA 96 standards for fire safety and health code compliance.",
    aboutParagraph2:
      "We provide certified hood cleaning, exhaust fan repairs, and grease trap pumping to restaurants, cafeterias, and food service operations across Bel Air and the surrounding Harford County areas.",
    dispatchContext: "Technicians dispatch locally from Harford County service hubs.",
    coverageContext: "We cover all Bel Air commercial districts, retail food corridors, and surrounding Harford County communities.",
    industriesExtra: "County Government & Institutional Cafeterias",
    neighborhoods: [
      { name: "Downtown Bel Air", zip: "21014", desc: "Main Street restaurants & cafes", services: ["Hood Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Bel Air South", zip: "21015", desc: "Retail food courts & chain restaurants", services: ["Fan Repairs", "Duct Cleaning", "NFPA Audits"] },
      { name: "Churchville", zip: "21028", desc: "Community dining & catering kitchens", services: ["Hood Cleaning", "Filter Exchange", "Compliance"] },
      { name: "Forest Hill", zip: "21050", desc: "Local eateries & food establishments", services: ["Grease Trap Pumping", "Fan Installs", "Steam Cleaning"] },
      { name: "Fallston", zip: "21047", desc: "Suburban commercial kitchens", services: ["Canopy Degreasing", "Plenum Scraping", "Duct Panels"] },
      { name: "Abingdon", zip: "21009", desc: "Retail centers & fast food operations", services: ["NFPA 96 Compliance", "Belt Replacement", "Fan Repairs"] },
      { name: "Emmorton", zip: "21014", desc: "Local business district kitchens", services: ["Hood Cleaning", "Rooftop Fan Cleaning", "Compliance"] },
      { name: "Jarrettsville", zip: "21084", desc: "Rural dining & catering services", services: ["Exhaust System Cleaning", "PCS Maintenance", "Grease Removal"] },
      { name: "Pylesville", zip: "21132", desc: "Rural community food facilities", services: ["Hood Cleaning", "Fan Repairs", "NFPA Compliance"] },
      { name: "Street", zip: "21154", desc: "Harford County rural dining", services: ["Duct Cleaning", "Grease Trap Pumping", "Compliance Stickers"] },
    ],
    faqCityContext: "Bel Air, MD",
  },
  bethesda: {
    city: "Bethesda",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Montgomery County",
    metaDescription:
      "Certified commercial kitchen hood cleaning, exhaust system degreasing, and NFPA 96 compliance in Bethesda, MD. Premium services for upscale restaurants, hotels, and hospital facilities in Montgomery County.",
    metaKeywords:
      "kitchen hood cleaning Bethesda MD, commercial kitchen exhaust Bethesda, restaurant hood cleaning Montgomery County, NFPA 96 compliance Bethesda, grease trap cleaning Bethesda MD",
    heroDescription:
      "Bethesda's upscale restaurants, hotel kitchens, and NIH facility cafeterias deserve the highest standard of exhaust system maintenance. Our NFPA 96 certified technicians deliver certified hood cleaning and compliance documentation.",
    aboutParagraph1:
      "Bethesda is one of Maryland's most affluent communities, home to a sophisticated dining scene along Bethesda Row, Wisconsin Avenue, and the Woodmont Triangle. Commercial kitchens here require meticulous, documented NFPA 96 exhaust cleaning to satisfy health inspectors.",
    aboutParagraph2:
      "We serve fine dining restaurants near NIH, hotel kitchens in Chevy Chase, and corporate dining facilities along I-270. Our certified technicians provide complete photo documentation and official compliance stickers after every service.",
    dispatchContext: "Technicians dispatch from Montgomery County service centers for rapid same-day coverage.",
    coverageContext: "We cover all Bethesda restaurant districts, hotel blocks, and medical facility food services throughout Montgomery County.",
    industriesExtra: "NIH & Medical Facility Cafeterias",
    neighborhoods: [
      { name: "Bethesda Row", zip: "20814", desc: "Upscale dining & restaurants", services: ["Hood Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Woodmont Triangle", zip: "20814", desc: "Dense restaurant corridor", services: ["Exhaust System Cleaning", "Fan Repairs", "NFPA Audits"] },
      { name: "Battery Park", zip: "20814", desc: "Upscale community eateries", services: ["Hood Cleaning", "PCS Maintenance", "Filter Exchange"] },
      { name: "Chevy Chase", zip: "20815", desc: "High-end hotel & dining kitchens", services: ["Steam Cleaning", "Grease Trap Pumping", "Compliance"] },
      { name: "Westbard", zip: "20816", desc: "Retail food courts & cafes", services: ["Hood Cleaning", "Fan Installs", "NFPA Compliance"] },
      { name: "Edgemoor", zip: "20814", desc: "Suburban residential restaurant row", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Burning Tree", zip: "20817", desc: "Country club & hospitality kitchens", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Bradley Hills", zip: "20817", desc: "Community dining & local eateries", services: ["Hood Cleaning", "PCS Maintenance", "Inspections"] },
      { name: "Kenwood", zip: "20815", desc: "Upscale residential dining", services: ["Exhaust System Cleaning", "Fan Repairs", "NFPA Compliance"] },
      { name: "Wildwood", zip: "20815", desc: "Retail plaza food services", services: ["Hood Cleaning", "Grease Trap Pumping", "Compliance Stickers"] },
    ],
    faqCityContext: "Bethesda, MD",
  },
  bowie: {
    city: "Bowie",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Prince George's County",
    metaDescription:
      "Certified kitchen hood cleaning & commercial exhaust system degreasing in Bowie, MD. NFPA 96 compliant services for restaurants and food businesses in Prince George's County.",
    metaKeywords:
      "kitchen hood cleaning Bowie MD, commercial exhaust cleaning Bowie, restaurant hood cleaning Prince Georges County, NFPA 96 compliance Bowie MD",
    heroDescription:
      "Bowie's fast-growing dining scene needs certified NFPA 96 kitchen exhaust maintenance. We serve restaurants, cafes, and commercial kitchens across the entire Bowie area in Prince George's County.",
    aboutParagraph1:
      "Bowie, MD has experienced rapid commercial growth along Route 301 and the Bowie Town Center corridor, with a diverse mix of restaurants, fast food chains, and independent cafes all requiring regular exhaust system maintenance.",
    aboutParagraph2:
      "Our certified technicians serve restaurants near Bowie State University, food courts in Bowie Town Center, and commercial kitchens throughout the Route 50 corridor, providing NFPA 96 certified cleaning and official compliance documentation.",
    dispatchContext: "Technicians dispatch from Prince George's County service depots.",
    coverageContext: "We cover all Bowie commercial corridors, retail food courts, and surrounding Prince George's County communities.",
    industriesExtra: "Bowie State University Dining Facilities",
    neighborhoods: [
      { name: "Bowie Town Center", zip: "20716", desc: "Retail dining & food courts", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Pointer Ridge", zip: "20716", desc: "Community restaurants & cafes", services: ["Exhaust System Cleaning", "Compliance Stickers", "Duct Cleaning"] },
      { name: "Whitehall", zip: "20721", desc: "Residential & small business dining", services: ["Hood Cleaning", "NFPA Audits", "Filter Exchange"] },
      { name: "Mitchellville", zip: "20721", desc: "Upscale community dining", services: ["Canopy Degreasing", "Fan Installs", "Grease Trap Pumping"] },
      { name: "Old Bowie", zip: "20715", desc: "Historic downtown & local eateries", services: ["Hood Cleaning", "PCS Maintenance", "Compliance"] },
      { name: "Glenn Dale", zip: "20769", desc: "Suburban dining & institutional kitchens", services: ["Steam Cleaning", "Belt Replacement", "NFPA Compliance"] },
      { name: "Collington", zip: "20708", desc: "Residential food service kitchens", services: ["Duct Cleaning", "Fan Repairs", "Inspections"] },
      { name: "Lake Arbor", zip: "20721", desc: "Community dining & catering", services: ["Hood Cleaning", "Grease Trap Pumping", "Compliance Stickers"] },
      { name: "Woodmore", zip: "20721", desc: "Country club & event venue kitchens", services: ["Exhaust System Cleaning", "PCS Maintenance", "Fan Installs"] },
      { name: "Enterprise Estates", zip: "20720", desc: "Commercial kitchen operations", services: ["Hood Cleaning", "Fan Repairs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Bowie, MD",
  },
  catonsville: {
    city: "Catonsville",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Baltimore County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Catonsville, MD. NFPA 96 compliant services for restaurants, dining spots, and commercial kitchens in Baltimore County.",
    metaKeywords:
      "kitchen hood cleaning Catonsville MD, commercial exhaust cleaning Catonsville, restaurant hood cleaning Baltimore County, NFPA 96 compliance Catonsville MD",
    heroDescription:
      "Crossaire serves Catonsville's vibrant restaurant strip on Frederick Road and surrounding Baltimore County dining operations with certified NFPA 96 exhaust hood cleaning and grease management services.",
    aboutParagraph1:
      "Catonsville, MD is known for its eclectic dining scene along Frederick Road and its close proximity to UMBC. Commercial kitchens serving the college-town crowd, Route 40 diners, and Frederick Road restaurants require regular NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve UMBC campus dining services, Frederick Road restaurants, and commercial kitchens throughout Catonsville. Our certified technicians deliver complete duct-to-fan cleaning with official compliance stickers and photo documentation.",
    dispatchContext: "Technicians dispatch from Baltimore County depots with rapid turnaround for Catonsville-area kitchens.",
    coverageContext: "We cover the Frederick Road dining strip, UMBC campus facilities, and all Catonsville commercial corridors.",
    industriesExtra: "UMBC Campus & College Dining Facilities",
    neighborhoods: [
      { name: "Frederick Road Strip", zip: "21228", desc: "Main restaurant row & local dining", services: ["Hood Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Arbutus", zip: "21227", desc: "Community dining & fast food", services: ["Fan Repairs", "Duct Cleaning", "NFPA Audits"] },
      { name: "Lansdowne", zip: "21227", desc: "Local eateries & cafes", services: ["Hood Cleaning", "Filter Exchange", "Compliance"] },
      { name: "Rolling Road Corridor", zip: "21228", desc: "Retail plazas & chain restaurants", services: ["Grease Trap Pumping", "Fan Installs", "Steam Cleaning"] },
      { name: "North Catonsville", zip: "21228", desc: "Residential & community dining", services: ["Canopy Degreasing", "Plenum Scraping", "Duct Panels"] },
      { name: "Westview", zip: "21228", desc: "Shopping center food courts", services: ["NFPA 96 Compliance", "Belt Replacement", "Fan Repairs"] },
      { name: "Woodlawn", zip: "21207", desc: "Local restaurant operations", services: ["Hood Cleaning", "Rooftop Fan Cleaning", "Compliance"] },
      { name: "Oella", zip: "21228", desc: "Historic community dining", services: ["Exhaust System Cleaning", "PCS Maintenance", "Grease Removal"] },
      { name: "Ellicott City Bordering", zip: "21228", desc: "Boundary community restaurants", services: ["Hood Cleaning", "Fan Repairs", "NFPA Compliance"] },
      { name: "Paradise", zip: "21228", desc: "Residential & local food services", services: ["Duct Cleaning", "Grease Trap Pumping", "Compliance Stickers"] },
    ],
    faqCityContext: "Catonsville, MD",
  },
  "college-park": {
    city: "College Park",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Prince George's County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system maintenance in College Park, MD. NFPA 96 compliant services for restaurants, campus dining, and food businesses near the University of Maryland.",
    metaKeywords:
      "kitchen hood cleaning College Park MD, commercial exhaust cleaning College Park, restaurant hood cleaning UMD, NFPA 96 compliance College Park MD, grease trap cleaning College Park",
    heroDescription:
      "College Park's university food court scene and Route 1 restaurant corridor need certified NFPA 96 exhaust maintenance. We serve UMD dining halls, independent restaurants, and commercial kitchens throughout the area.",
    aboutParagraph1:
      "College Park, MD, home to the University of Maryland flagship campus, has a vibrant dining scene catering to students, faculty, and local residents along Route 1. All commercial kitchens must maintain NFPA 96 compliance for fire safety.",
    aboutParagraph2:
      "We serve UMD campus dining facilities, Route 1 restaurants, Hyattsville-border eateries, and food courts near the College Park Airport. Our NFPA 96 certified crews provide complete system cleaning with photo reports and compliance documentation.",
    dispatchContext: "Technicians dispatch from Prince George's County depots covering the UMD and Route 1 corridors.",
    coverageContext: "We provide certified services across the UMD campus, Route 1 dining corridor, and all College Park commercial districts.",
    industriesExtra: "University of Maryland Campus Dining Services",
    neighborhoods: [
      { name: "Route 1 Corridor", zip: "20740", desc: "Main restaurant & dining row near UMD", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Old Town College Park", zip: "20740", desc: "Historic area restaurants & cafes", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Hollywood", zip: "20740", desc: "Residential dining & local eateries", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Berwyn Heights", zip: "20740", desc: "Community commercial kitchens", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Riverdale Park", zip: "20737", desc: "Town center dining & food halls", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Hyattsville", zip: "20782", desc: "Arts district restaurants & cafes", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Adelphi", zip: "20783", desc: "Local dining & institutional food services", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Langley Park", zip: "20783", desc: "International restaurant district", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "University Hills", zip: "20740", desc: "Campus-adjacent dining spots", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Paint Branch", zip: "20740", desc: "Local community kitchens", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "College Park, MD",
  },
  columbia: {
    city: "Columbia",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Howard County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Columbia, MD. NFPA 96 compliant services for restaurants, hotels, and corporate kitchens throughout Howard County.",
    metaKeywords:
      "kitchen hood cleaning Columbia MD, commercial kitchen exhaust Columbia, restaurant hood cleaning Howard County, NFPA 96 compliance Columbia MD, grease trap cleaning Columbia",
    heroDescription:
      "Columbia's master-planned communities and Town Center dining scene require certified NFPA 96 kitchen exhaust maintenance. We serve restaurants, hotel kitchens, and corporate cafeterias throughout Howard County.",
    aboutParagraph1:
      "Columbia, MD is one of Maryland's largest planned communities, featuring a diverse restaurant scene in Columbia Town Center, The Mall in Columbia, and multiple village centers. Commercial kitchens here must meet all NFPA 96 fire safety and grease management standards.",
    aboutParagraph2:
      "We serve hotel kitchens near the Columbia Gateway Business Park, restaurant rows in Merriweather Post Pavilion's food district, and cafeterias in Howard County corporate facilities. Our certified technicians work overnight for maximum kitchen uptime.",
    dispatchContext: "Technicians dispatch from Howard County depots with coverage across all Columbia villages and Town Center.",
    coverageContext: "We provide certified exhaust services across all Columbia village centers, corporate campuses, and the Town Center dining hub.",
    industriesExtra: "Corporate Campus & Hotel Kitchens",
    neighborhoods: [
      { name: "Columbia Town Center", zip: "21044", desc: "Main dining hub & restaurants", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Owen Brown", zip: "21044", desc: "Village center restaurants & cafes", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Wilde Lake", zip: "21044", desc: "Community dining & local eateries", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Harper's Choice", zip: "21044", desc: "Village restaurants & food spots", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Long Reach", zip: "21045", desc: "Suburban dining & community kitchens", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Oakland Mills", zip: "21045", desc: "Village center food services", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Dobbin Road Corridor", zip: "21045", desc: "Corporate campus dining facilities", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Hickory Ridge", zip: "21044", desc: "Village restaurants & cafes", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Kings Contrivance", zip: "21046", desc: "Residential & commercial kitchens", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Gateway Business Park", zip: "21046", desc: "Corporate cafeterias & dining facilities", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Columbia, MD",
  },
  crofton: {
    city: "Crofton",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Anne Arundel County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Crofton, MD. NFPA 96 compliant services for restaurants and commercial kitchens in Anne Arundel County.",
    metaKeywords:
      "kitchen hood cleaning Crofton MD, commercial exhaust cleaning Crofton, restaurant hood cleaning Anne Arundel County, NFPA 96 compliance Crofton MD",
    heroDescription:
      "Crofton's thriving restaurant community along Route 3 and Crofton Parkway deserves certified NFPA 96 exhaust cleaning. We serve all local dining establishments and commercial kitchens in the area.",
    aboutParagraph1:
      "Crofton, MD is a fast-growing planned community in Anne Arundel County with a vibrant commercial dining scene along Route 3 and Crofton Parkway. Commercial kitchens here are required to maintain NFPA 96 fire safety standards.",
    aboutParagraph2:
      "We serve restaurants in Crofton Shopping Center, fast food chains along Crofton Parkway, and local dining spots throughout the community. Our certified technicians provide full-system cleaning with compliance stickers and digital photo reports.",
    dispatchContext: "Technicians dispatch from Anne Arundel County service hubs covering the Crofton corridor.",
    coverageContext: "We provide certified services across all Crofton commercial areas, Route 3 dining corridor, and surrounding communities.",
    industriesExtra: "Country Club & Golf Course Dining",
    neighborhoods: [
      { name: "Crofton Town Center", zip: "21114", desc: "Main commercial dining area", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Crofton Parkway Strip", zip: "21114", desc: "Fast food & chain restaurants", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Crofton Village", zip: "21114", desc: "Local eateries & community dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Crofton Woods", zip: "21114", desc: "Residential & neighborhood cafes", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Crofton Meadows", zip: "21114", desc: "Community food services", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Davidsonville", zip: "21035", desc: "Rural dining & hospitality kitchens", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Gambrills", zip: "21054", desc: "Local restaurants & dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Millersville", zip: "21108", desc: "Suburban community dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Waugh Chapel", zip: "21114", desc: "Shopping center food courts", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Route 3 Corridor", zip: "21114", desc: "Commercial food strip operations", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Crofton, MD",
  },
  dundalk: {
    city: "Dundalk",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Baltimore County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Dundalk, MD. NFPA 96 compliant services for restaurants, diners, and commercial kitchens in Baltimore County.",
    metaKeywords:
      "kitchen hood cleaning Dundalk MD, commercial exhaust cleaning Dundalk, restaurant hood cleaning Baltimore County, NFPA 96 compliance Dundalk MD",
    heroDescription:
      "Dundalk's working-class restaurant scene, diners, and commercial kitchens deserve certified NFPA 96 exhaust maintenance. We serve all food establishments throughout the Dundalk area in Baltimore County.",
    aboutParagraph1:
      "Dundalk, MD, located on the Patapsco River in southeast Baltimore County, has a strong tradition of local diners, taverns, and family restaurants. These commercial kitchens must maintain NFPA 96 compliance to prevent grease fires and pass health inspections.",
    aboutParagraph2:
      "We serve local diners on Dundalk Avenue, waterfront food businesses near Sparrows Point, and commercial kitchens along North Point Road. Our certified technicians provide complete exhaust system cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Baltimore County southeast service depots for fast local response.",
    coverageContext: "We provide certified services across all Dundalk neighborhoods, waterfront areas, and commercial corridors.",
    industriesExtra: "Waterfront & Maritime Industry Dining Facilities",
    neighborhoods: [
      { name: "Dundalk Town Center", zip: "21222", desc: "Main commercial dining area", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Sparrows Point", zip: "21219", desc: "Industrial & waterfront dining", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Edgemere", zip: "21219", desc: "Waterfront restaurants & seafood", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Turner Station", zip: "21222", desc: "Community dining & local restaurants", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Eastwood", zip: "21222", desc: "Suburban dining & cafes", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Charlesmont", zip: "21222", desc: "Local eateries & community dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Wise Avenue Corridor", zip: "21222", desc: "Commercial food services strip", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Greenway", zip: "21220", desc: "Residential & small business dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Victory Villa", zip: "21220", desc: "Community restaurants & diners", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "North Point Village", zip: "21222", desc: "Shopping center food operations", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Dundalk, MD",
  },
  eldersburg: {
    city: "Eldersburg",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Carroll County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Eldersburg, MD. NFPA 96 compliant services for restaurants and commercial kitchens in Carroll County.",
    metaKeywords:
      "kitchen hood cleaning Eldersburg MD, commercial exhaust cleaning Eldersburg, restaurant hood cleaning Carroll County, NFPA 96 compliance Eldersburg MD",
    heroDescription:
      "Eldersburg's growing restaurant scene along Liberty Road and Route 26 deserves certified NFPA 96 exhaust hood maintenance. We serve all commercial kitchens throughout Carroll County.",
    aboutParagraph1:
      "Eldersburg, MD is a growing community in Carroll County with a mix of chain restaurants and local eateries along Liberty Road and Route 26. All commercial kitchens here must maintain NFPA 96 fire safety compliance.",
    aboutParagraph2:
      "We serve restaurants along the Liberty Road corridor, fast food operations in Eldersburg shopping centers, and local dining establishments throughout Carroll County. Our certified technicians provide complete cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Carroll County service hubs covering the Eldersburg area.",
    coverageContext: "We provide certified services across all Eldersburg commercial areas and surrounding Carroll County communities.",
    industriesExtra: "Shopping Center & Retail Food Courts",
    neighborhoods: [
      { name: "Liberty Road Corridor", zip: "21784", desc: "Main commercial dining strip", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Sykesville", zip: "21784", desc: "Historic town restaurants & cafes", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Carrolltowne", zip: "21784", desc: "Planned community dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Hampstead", zip: "21074", desc: "Local restaurants & food spots", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Manchester", zip: "21102", desc: "Rural community dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Route 26 Strip", zip: "21784", desc: "Retail plazas & chain restaurants", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Century Marketplace", zip: "21784", desc: "Shopping center food courts", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Westminster Border", zip: "21784", desc: "Community dining corridor", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Winfield", zip: "21784", desc: "Residential dining & small businesses", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Warfield", zip: "21784", desc: "Business park & corporate dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Eldersburg, MD",
  },
  "ellicott-city": {
    city: "Ellicott City",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Howard County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Ellicott City, MD. NFPA 96 compliant services for restaurants and commercial kitchens throughout Howard County.",
    metaKeywords:
      "kitchen hood cleaning Ellicott City MD, commercial exhaust cleaning Ellicott City, restaurant hood cleaning Howard County, NFPA 96 compliance Ellicott City MD",
    heroDescription:
      "From Ellicott City's historic downtown restaurants to the Route 40 dining corridor, we provide certified NFPA 96 exhaust hood cleaning for all commercial kitchens in Howard County.",
    aboutParagraph1:
      "Ellicott City, MD is a charming historic community in Howard County with a growing restaurant scene in Old Ellicott City and along Route 40. Commercial kitchens ranging from fine dining to quick service require regular NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve historic district restaurants, Route 40 fast food operations, and corporate dining facilities along the Columbia Pike corridor. Our certified technicians provide complete cleaning services with official NFPA compliance stickers.",
    dispatchContext: "Technicians dispatch from Howard County service centers with rapid coverage for Ellicott City kitchens.",
    coverageContext: "We cover Historic Old Ellicott City, Route 40 commercial areas, and all Howard County dining corridors.",
    industriesExtra: "Historic District & Event Venue Dining",
    neighborhoods: [
      { name: "Old Ellicott City", zip: "21043", desc: "Historic district restaurants & taverns", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Ellicott City Town Center", zip: "21043", desc: "Modern dining & food courts", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Route 40 Corridor", zip: "21042", desc: "Fast food & chain restaurant strip", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Turf Valley", zip: "21042", desc: "Golf resort & hotel dining", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Centennial", zip: "21042", desc: "Suburban community restaurants", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Elkridge", zip: "21075", desc: "Local eateries & commercial dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Oella", zip: "21043", desc: "Historic mill community dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Ilchester", zip: "21043", desc: "Residential dining & cafes", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Doughoregan Manor", zip: "21042", desc: "Historic estate & events kitchen", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Columbia Pike Area", zip: "21046", desc: "Corporate campuses & cafeterias", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Ellicott City, MD",
  },
  frederick: {
    city: "Frederick",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Frederick County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Frederick, MD. NFPA 96 compliant services for restaurants, breweries, and commercial kitchens in Frederick County.",
    metaKeywords:
      "kitchen hood cleaning Frederick MD, commercial exhaust cleaning Frederick, restaurant hood cleaning Frederick County, NFPA 96 compliance Frederick MD, grease trap cleaning Frederick",
    heroDescription:
      "Frederick's booming culinary scene — from downtown craft breweries to Carroll Creek restaurants — deserves certified NFPA 96 exhaust system maintenance. We serve all commercial kitchens in Frederick County.",
    aboutParagraph1:
      "Frederick, MD is one of Maryland's fastest-growing cities with a vibrant restaurant and brewery district along Market Street, Carroll Creek, and the Patrick Street corridor. Commercial kitchens here must maintain NFPA 96 compliance for fire safety and health inspections.",
    aboutParagraph2:
      "We serve downtown Frederick restaurants, craft brewery kitchens, hotel dining facilities near I-270, and institutional food services at Frederick Community College and Fort Detrick. Our certified technicians provide full-system degreasing with compliance stickers.",
    dispatchContext: "Technicians dispatch from Frederick County service hubs with broad coverage across the city and county.",
    coverageContext: "We cover Downtown Frederick, Carroll Creek district, Route 15 commercial areas, and all Frederick County dining corridors.",
    industriesExtra: "Craft Brewery & Winery Kitchens",
    neighborhoods: [
      { name: "Downtown Frederick", zip: "21701", desc: "Market Street restaurants & breweries", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Carroll Creek District", zip: "21701", desc: "Waterfront dining & restaurants", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Patrick Street Corridor", zip: "21701", desc: "Commercial dining & fast food", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Shab Row", zip: "21701", desc: "Artisan food & boutique dining", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "East Frederick", zip: "21701", desc: "Community restaurants & diners", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "New Market", zip: "21774", desc: "Suburban & local dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Middletown", zip: "21769", desc: "Valley community dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Urbana", zip: "21704", desc: "Fast-growing commercial food district", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Ballenger Creek", zip: "21703", desc: "Suburban restaurant operations", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Jefferson", zip: "21755", desc: "Rural dining & institutional kitchens", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Frederick, MD",
  },
  gaithersburg: {
    city: "Gaithersburg",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Montgomery County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Gaithersburg, MD. NFPA 96 compliant services for restaurants, hotels, and commercial kitchens in Montgomery County.",
    metaKeywords:
      "kitchen hood cleaning Gaithersburg MD, commercial exhaust cleaning Gaithersburg, restaurant hood cleaning Montgomery County, NFPA 96 compliance Gaithersburg MD",
    heroDescription:
      "Gaithersburg's diverse international restaurant scene and biotech corporate dining facilities require certified NFPA 96 exhaust maintenance. We serve all commercial kitchens throughout Montgomery County.",
    aboutParagraph1:
      "Gaithersburg, MD is home to a diverse and growing restaurant community along Rio Washingtonian Boulevard, Quince Orchard Road, and the Washingtonian Center. International cuisines and corporate cafeterias near NIST and the biotech corridor require strict exhaust system maintenance.",
    aboutParagraph2:
      "We serve Washingtonian Center restaurants, Kentlands dining establishments, Rio waterfront eateries, and corporate dining facilities near I-270. Our certified technicians provide NFPA 96 compliant cleaning with complete photo documentation.",
    dispatchContext: "Technicians dispatch from Montgomery County depots with rapid coverage across the Gaithersburg corridor.",
    coverageContext: "We cover Rio Washingtonian, Kentlands, Quince Orchard, and all Gaithersburg commercial dining districts.",
    industriesExtra: "Biotech & NIST Campus Dining Facilities",
    neighborhoods: [
      { name: "Washingtonian Center / Rio", zip: "20878", desc: "Waterfront restaurants & entertainment", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Kentlands", zip: "20878", desc: "New-urbanist dining & restaurants", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Downtown Gaithersburg", zip: "20877", desc: "Historic city restaurants & diners", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Quince Orchard", zip: "20878", desc: "Suburban dining & chain restaurants", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Lakelands", zip: "20878", desc: "Community dining & local cafes", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Shady Grove", zip: "20877", desc: "Medical & corporate dining facilities", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Crown Farm", zip: "20878", desc: "Mixed-use urban dining district", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Montgomery Village", zip: "20886", desc: "Planned community restaurants", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Germantown", zip: "20876", desc: "Commercial food corridor & fast food", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Travilah", zip: "20878", desc: "Upscale community dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Gaithersburg, MD",
  },
  "glen-burnie": {
    city: "Glen Burnie",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Anne Arundel County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Glen Burnie, MD. NFPA 96 compliant services for restaurants, diners, and commercial kitchens in Anne Arundel County.",
    metaKeywords:
      "kitchen hood cleaning Glen Burnie MD, commercial exhaust cleaning Glen Burnie, restaurant hood cleaning Anne Arundel County, NFPA 96 compliance Glen Burnie MD",
    heroDescription:
      "Glen Burnie's bustling Route 2 and Crain Highway dining corridor needs certified NFPA 96 exhaust hood cleaning. Crossaire serves all local restaurants, diners, and commercial kitchens in Anne Arundel County.",
    aboutParagraph1:
      "Glen Burnie, MD is a major commercial hub in Anne Arundel County with a dense concentration of restaurants, diners, and fast food establishments along Crain Highway and Ritchie Highway. All commercial kitchens must maintain NFPA 96 fire safety compliance.",
    aboutParagraph2:
      "We serve diners along Crain Highway, restaurants in Marley Station Mall food courts, and commercial kitchens near BWI Airport. Our certified technicians provide complete exhaust system cleaning with compliance stickers and photo reports.",
    dispatchContext: "Technicians dispatch from our primary Anne Arundel County service hub in Glen Burnie for rapid local response.",
    coverageContext: "We cover all Glen Burnie commercial corridors, Route 2/Crain Highway dining strip, and surrounding Anne Arundel County communities.",
    industriesExtra: "BWI Airport Concession Kitchens",
    neighborhoods: [
      { name: "Crain Highway Corridor", zip: "21061", desc: "Main commercial dining strip", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Marley Station Area", zip: "21060", desc: "Shopping mall food courts", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Ritchie Highway Strip", zip: "21061", desc: "Restaurant row & commercial dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Ferndale", zip: "21061", desc: "Community restaurants & diners", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Linthicum", zip: "21090", desc: "Airport-area hotels & dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Pumphrey", zip: "21227", desc: "Local community dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Brooklyn Park", zip: "21225", desc: "Working-class diners & restaurants", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Curtis Bay", zip: "21226", desc: "Industrial-area food facilities", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Sawmill Creek", zip: "21061", desc: "Residential & local dining", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Severn Road Corridor", zip: "21061", desc: "Commercial food businesses", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Glen Burnie, MD",
  },
  greenbelt: {
    city: "Greenbelt",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Prince George's County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Greenbelt, MD. NFPA 96 compliant services for restaurants and commercial kitchens in Prince George's County.",
    metaKeywords:
      "kitchen hood cleaning Greenbelt MD, commercial exhaust cleaning Greenbelt, restaurant hood cleaning Prince Georges County, NFPA 96 compliance Greenbelt MD",
    heroDescription:
      "Greenbelt's historic planned community and NASA Goddard campus area have diverse food service needs. We provide certified NFPA 96 kitchen exhaust cleaning for all commercial kitchens in the area.",
    aboutParagraph1:
      "Greenbelt, MD is a historic planned community close to NASA Goddard Space Flight Center and the Capital Beltway. Restaurants along Greenbelt Road and cafeterias in the Greenbelt Metro area require regular NFPA 96 compliant exhaust cleaning.",
    aboutParagraph2:
      "We serve Greenbelt Center restaurants, NASA campus cafeterias, hotel kitchens near I-95, and community dining facilities throughout the area. Our certified technicians provide complete system cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Prince George's County depots covering the Greenbelt area and Capital Beltway corridor.",
    coverageContext: "We cover Greenbelt Center, Beltway Plaza, NASA campus area, and all surrounding Prince George's County communities.",
    industriesExtra: "NASA Goddard Campus Dining Services",
    neighborhoods: [
      { name: "Greenbelt Center", zip: "20770", desc: "Historic planned community dining", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Beltway Plaza", zip: "20770", desc: "Shopping center food courts", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Schrom Hills", zip: "20770", desc: "Community restaurants & cafes", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Springhill Lake", zip: "20770", desc: "Residential dining facilities", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "New Carrollton", zip: "20784", desc: "Transit hub & commercial dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Berwyn Heights", zip: "20740", desc: "Local community restaurants", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Lanham", zip: "20706", desc: "Suburban dining & chain restaurants", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Seabrook", zip: "20706", desc: "Commercial food corridor", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Greenbelt Metro Area", zip: "20770", desc: "Transit corridor food services", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Goddard Park", zip: "20771", desc: "NASA facility food services", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Greenbelt, MD",
  },
  hagerstown: {
    city: "Hagerstown",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Washington County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Hagerstown, MD. NFPA 96 compliant services for restaurants and commercial kitchens in Washington County.",
    metaKeywords:
      "kitchen hood cleaning Hagerstown MD, commercial exhaust cleaning Hagerstown, restaurant hood cleaning Washington County, NFPA 96 compliance Hagerstown MD",
    heroDescription:
      "Hagerstown's I-81 corridor restaurants, downtown dining scene, and commercial kitchens deserve certified NFPA 96 exhaust maintenance. We serve all food establishments in Washington County.",
    aboutParagraph1:
      "Hagerstown, MD serves as a regional hub in Washington County at the crossroads of I-70 and I-81. Its growing restaurant scene, outlet shopping dining, and downtown eateries all require NFPA 96 certified kitchen exhaust maintenance.",
    aboutParagraph2:
      "We serve restaurants in Prime Outlets, downtown Hagerstown dining establishments, and commercial kitchens along the I-81 corridor. Our certified technicians provide full-system cleaning, compliance stickers, and detailed photo documentation.",
    dispatchContext: "Technicians dispatch from Washington County service depots covering the entire Hagerstown metro area.",
    coverageContext: "We cover downtown Hagerstown, the I-81/I-70 corridor, Prime Outlets area, and all Washington County dining communities.",
    industriesExtra: "Outlet Shopping & I-81 Corridor Dining",
    neighborhoods: [
      { name: "Downtown Hagerstown", zip: "21740", desc: "Historic downtown restaurants & cafes", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Prime Outlets Area", zip: "21740", desc: "Outlet shopping food courts", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Funkstown", zip: "21734", desc: "Local community dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Maugansville", zip: "21767", desc: "Suburban restaurants & local diners", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Halfway", zip: "21740", desc: "Commercial corridor restaurants", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Hagerstown MARC Area", zip: "21740", desc: "Transit hub food services", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "I-81 Corridor", zip: "21740", desc: "Truck stop & highway dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Williamsport", zip: "21795", desc: "Canal town restaurants & dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Clear Spring", zip: "21722", desc: "Rural community dining", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Smithsburg", zip: "21783", desc: "Small town dining establishments", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Hagerstown, MD",
  },
  "havre-de-grace": {
    city: "Havre de Grace",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Harford County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Havre de Grace, MD. NFPA 96 compliant services for waterfront restaurants and commercial kitchens in Harford County.",
    metaKeywords:
      "kitchen hood cleaning Havre de Grace MD, commercial exhaust cleaning Havre de Grace, restaurant hood cleaning Harford County, NFPA 96 compliance Havre de Grace",
    heroDescription:
      "Havre de Grace's charming waterfront restaurants and historic downtown dining scene deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens in the Havre de Grace area.",
    aboutParagraph1:
      "Havre de Grace, MD, located at the mouth of the Susquehanna River, is known for its quaint waterfront dining, seafood restaurants, and historic downtown eateries. These kitchens require NFPA 96 certified exhaust cleaning for fire safety and health code compliance.",
    aboutParagraph2:
      "We serve waterfront restaurants along the Promenade, historic downtown dining spots, and commercial kitchens near the Chesapeake Bay. Our certified technicians provide complete exhaust system cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Harford County service depots covering Havre de Grace and the upper Chesapeake area.",
    coverageContext: "We provide certified services across Havre de Grace waterfront, downtown, and surrounding Harford County communities.",
    industriesExtra: "Waterfront & Chesapeake Bay Seafood Restaurants",
    neighborhoods: [
      { name: "Downtown Havre de Grace", zip: "21078", desc: "Historic waterfront restaurants", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "The Promenade Area", zip: "21078", desc: "Waterfront dining & seafood spots", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Bulle Rock", zip: "21078", desc: "Golf resort & event dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Susquehanna Riverfront", zip: "21078", desc: "River view dining & fishing clubs", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Level", zip: "21078", desc: "Rural community food services", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Perryville", zip: "21903", desc: "Casino & commercial food district", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Port Deposit", zip: "21904", desc: "Riverside dining & local eateries", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Oakington Peninsula", zip: "21078", desc: "Rural waterfront dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Lapidum", zip: "21078", desc: "Historic area community kitchens", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Aberdeen Proving Ground North", zip: "21005", desc: "Military & institutional dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Havre de Grace, MD",
  },
  hyattsville: {
    city: "Hyattsville",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Prince George's County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Hyattsville, MD. NFPA 96 compliant services for restaurants and commercial kitchens in Prince George's County.",
    metaKeywords:
      "kitchen hood cleaning Hyattsville MD, commercial exhaust cleaning Hyattsville, restaurant hood cleaning Prince Georges County, NFPA 96 compliance Hyattsville MD",
    heroDescription:
      "Hyattsville's Route 1 arts district dining scene and diverse international restaurants deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens throughout the area.",
    aboutParagraph1:
      "Hyattsville, MD is an arts district and gateway community to Prince George's County with a vibrant mix of international restaurants, cafes, and local diners along Route 1. All commercial kitchens require NFPA 96 certified exhaust system maintenance.",
    aboutParagraph2:
      "We serve the Arts District dining scene, international restaurants along University Boulevard, and commercial kitchens near the Prince George's Plaza Metro. Our certified technicians provide complete cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Prince George's County depots covering Hyattsville and the Route 1 arts corridor.",
    coverageContext: "We cover Hyattsville Arts District, Route 1 corridor, and surrounding Prince George's County communities.",
    industriesExtra: "Arts District & International Restaurant Row",
    neighborhoods: [
      { name: "Arts District", zip: "20782", desc: "Creative dining & international restaurants", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Route 1 Corridor", zip: "20781", desc: "Commercial dining strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Riverdale Park", zip: "20737", desc: "Town center dining & food halls", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Bladensburg", zip: "20710", desc: "Local community restaurants", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Mount Rainier", zip: "20712", desc: "Artisan food & local dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Edmonston", zip: "20781", desc: "Small community dining spots", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Brentwood", zip: "20722", desc: "Local restaurants & cafes", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "University Boulevard", zip: "20782", desc: "International restaurant row", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Queens Chapel", zip: "20782", desc: "Community dining establishments", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Prince George's Plaza", zip: "20782", desc: "Metro-area food courts", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Hyattsville, MD",
  },
  laurel: {
    city: "Laurel",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Prince George's County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Laurel, MD. NFPA 96 compliant services for restaurants and commercial kitchens in Prince George's and Howard County.",
    metaKeywords:
      "kitchen hood cleaning Laurel MD, commercial exhaust cleaning Laurel, restaurant hood cleaning Prince Georges County, NFPA 96 compliance Laurel MD",
    heroDescription:
      "Laurel's racetrack area restaurants and Route 1 dining corridor require certified NFPA 96 kitchen exhaust maintenance. We serve all commercial kitchens in the Laurel area.",
    aboutParagraph1:
      "Laurel, MD sits on the border of Prince George's and Howard counties along the I-95 corridor. Its diverse dining scene, from Laurel Mall food courts to independent Route 1 restaurants, requires regular NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve Laurel Mall food court kitchens, Route 1 restaurants, racing facility food services near Laurel Park, and commercial kitchens along the I-95 corridor. Our certified technicians provide full-system cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from service depots covering the Laurel area and I-95 corridor.",
    coverageContext: "We cover the Route 1 dining strip, Laurel Town Centre, and all surrounding Prince George's and Howard County communities.",
    industriesExtra: "Racetrack & Sporting Venue Food Services",
    neighborhoods: [
      { name: "Laurel Town Centre", zip: "20708", desc: "Shopping center dining & food courts", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Route 1 Corridor", zip: "20707", desc: "Main commercial dining strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Montpelier", zip: "20708", desc: "Upscale community restaurants", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Laurel Park Area", zip: "20725", desc: "Racetrack & event food services", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Sandy Spring", zip: "20860", desc: "Historic community dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Scaggsville", zip: "20723", desc: "Suburban dining & local restaurants", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Burtonsville", zip: "20866", desc: "Commercial food corridor", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Konterra", zip: "20708", desc: "Mixed-use commercial dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Old Laurel", zip: "20707", desc: "Historic town restaurants", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "I-95 Service Area", zip: "20707", desc: "Highway service & travel dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Laurel, MD",
  },
  odenton: {
    city: "Odenton",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Anne Arundel County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Odenton, MD. NFPA 96 compliant services for restaurants and commercial kitchens near Fort Meade and the MARC corridor.",
    metaKeywords:
      "kitchen hood cleaning Odenton MD, commercial exhaust cleaning Odenton, restaurant hood cleaning Anne Arundel County, NFPA 96 compliance Odenton MD, Fort Meade kitchen cleaning",
    heroDescription:
      "Odenton's fast-growing restaurant scene near Fort Meade and the MARC Train corridor deserves certified NFPA 96 exhaust maintenance. We serve all commercial kitchens in the area.",
    aboutParagraph1:
      "Odenton, MD is a rapidly growing community near Fort Meade and the MARC Train line with a developing restaurant and retail food scene. Commercial kitchens here must maintain NFPA 96 fire safety compliance.",
    aboutParagraph2:
      "We serve restaurants in the Gateway Village shopping area, dining establishments near Fort Meade, and commercial kitchens along Route 175. Our certified technicians provide complete exhaust system cleaning with compliance stickers and documentation.",
    dispatchContext: "Technicians dispatch from Anne Arundel County service centers covering Odenton and the Fort Meade corridor.",
    coverageContext: "We cover Gateway Village, Route 175 commercial areas, and all Odenton community dining establishments.",
    industriesExtra: "Fort Meade Military Base Dining Facilities",
    neighborhoods: [
      { name: "Gateway Village", zip: "21113", desc: "Shopping center restaurants & food courts", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Route 175 Corridor", zip: "21113", desc: "Commercial dining strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Seven Oaks", zip: "21113", desc: "Community dining & local cafes", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Piney Orchard", zip: "21113", desc: "Planned community restaurants", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Quarterfield", zip: "21113", desc: "Suburban dining & food services", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Fort Meade Area", zip: "20755", desc: "Military base & contractor dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Gambrills", zip: "21054", desc: "Suburban community restaurants", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Waugh Chapel South", zip: "21054", desc: "Retail food courts & chain dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Woodwardville", zip: "21113", desc: "Local dining establishments", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "MARC Station Area", zip: "21113", desc: "Transit hub food services", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Odenton, MD",
  },
  "owings-mills": {
    city: "Owings Mills",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Baltimore County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Owings Mills, MD. NFPA 96 compliant services for restaurants, hotels, and commercial kitchens in Baltimore County.",
    metaKeywords:
      "kitchen hood cleaning Owings Mills MD, commercial exhaust cleaning Owings Mills, restaurant hood cleaning Baltimore County, NFPA 96 compliance Owings Mills MD",
    heroDescription:
      "Owings Mills' upscale dining scene, hotel kitchens, and mall food courts deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens in the Owings Mills area.",
    aboutParagraph1:
      "Owings Mills, MD is an upscale Baltimore County community with a thriving dining scene centered around the Mall in Owings Mills, Foundry Row, and Greenspring Station. Commercial kitchens here require strict NFPA 96 compliance for fire safety.",
    aboutParagraph2:
      "We serve Foundry Row restaurants, Owings Mills Metro Centre dining, hotel kitchens along the I-795 corridor, and corporate cafeterias in Baltimore County. Our certified technicians deliver complete exhaust system cleaning with photo documentation.",
    dispatchContext: "Technicians dispatch from Baltimore County northwest service centers covering the Owings Mills and Reisterstown area.",
    coverageContext: "We cover Foundry Row, Owings Mills Mall area, I-795 corridor, and all Owings Mills commercial dining districts.",
    industriesExtra: "Luxury Hotel & Conference Center Dining",
    neighborhoods: [
      { name: "Foundry Row", zip: "21117", desc: "Upscale open-air dining & restaurants", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Metro Centre", zip: "21117", desc: "Transit-oriented dining complex", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Owings Mills Mall Area", zip: "21117", desc: "Shopping mall food courts", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Greenspring Station", zip: "21117", desc: "Upscale dining & specialty restaurants", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Painters Mill", zip: "21117", desc: "Office park & corporate dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Reisterstown", zip: "21136", desc: "Community restaurants & local dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Glyndon", zip: "21071", desc: "Historic community dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Garrison", zip: "21055", desc: "Suburban dining & food establishments", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Pikesville", zip: "21208", desc: "Upscale community & kosher dining", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "I-795 Corridor", zip: "21117", desc: "Business park & hotel dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Owings Mills, MD",
  },
  pasadena: {
    city: "Pasadena",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Anne Arundel County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Pasadena, MD. NFPA 96 compliant services for restaurants and commercial kitchens in Anne Arundel County.",
    metaKeywords:
      "kitchen hood cleaning Pasadena MD, commercial exhaust cleaning Pasadena, restaurant hood cleaning Anne Arundel County, NFPA 96 compliance Pasadena MD",
    heroDescription:
      "Pasadena's waterfront dining spots and Ritchie Highway restaurants deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens in the Pasadena area of Anne Arundel County.",
    aboutParagraph1:
      "Pasadena, MD is a waterfront community on the western shore of the Chesapeake Bay in Anne Arundel County. Its mix of crab shacks, waterfront restaurants, and local diners along Ritchie Highway requires NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve waterfront seafood restaurants, Ritchie Highway diners, marina-adjacent food establishments, and local commercial kitchens throughout Pasadena. Our certified technicians provide complete cleaning with compliance stickers and photo documentation.",
    dispatchContext: "Technicians dispatch from Anne Arundel County service hubs covering Pasadena and the Chesapeake waterfront corridor.",
    coverageContext: "We cover Pasadena waterfront areas, Ritchie Highway commercial strip, and all surrounding community dining establishments.",
    industriesExtra: "Waterfront Crab House & Marina Dining",
    neighborhoods: [
      { name: "Chesapeake Bay Waterfront", zip: "21122", desc: "Crab shacks & waterfront dining", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Ritchie Highway Strip", zip: "21122", desc: "Commercial dining corridor", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Lake Shore", zip: "21122", desc: "Community restaurants & cafes", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Mountain Road Corridor", zip: "21122", desc: "Local restaurants & fast food", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Gibson Island Area", zip: "21056", desc: "Club & waterfront dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Riviera Beach", zip: "21122", desc: "Beachside dining & taverns", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Marley Neck", zip: "21122", desc: "Industrial area food services", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Fort Smallwood Area", zip: "21226", desc: "Military park & facility dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Jacobsville", zip: "21122", desc: "Residential & local dining", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Shipley's Choice", zip: "21036", desc: "Upscale community dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Pasadena, MD",
  },
  rockville: {
    city: "Rockville",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Montgomery County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Rockville, MD. NFPA 96 compliant services for restaurants, hotels, and commercial kitchens in Montgomery County.",
    metaKeywords:
      "kitchen hood cleaning Rockville MD, commercial exhaust cleaning Rockville, restaurant hood cleaning Montgomery County, NFPA 96 compliance Rockville MD, grease trap cleaning Rockville",
    heroDescription:
      "Rockville Pike's dense restaurant corridor and Rockville Town Square dining scene require certified NFPA 96 exhaust maintenance. We serve all commercial kitchens throughout the City of Rockville.",
    aboutParagraph1:
      "Rockville, MD is the county seat of Montgomery County with one of the densest restaurant corridors in the DC metro area along Rockville Pike. From Korean barbecue restaurants to upscale hotel dining, all commercial kitchens require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve Rockville Pike corridor restaurants, Rockville Town Square dining, hotel kitchens near White Flint, and corporate cafeterias along I-270. Our certified technicians provide complete cleaning with photo documentation and compliance stickers.",
    dispatchContext: "Technicians dispatch from Montgomery County service centers covering the Rockville and White Flint areas.",
    coverageContext: "We cover the Rockville Pike corridor, Rockville Town Square, White Flint, and all surrounding Montgomery County dining districts.",
    industriesExtra: "Corporate Campuses & Hotel Row Dining",
    neighborhoods: [
      { name: "Rockville Pike (MD-355)", zip: "20852", desc: "Dense restaurant & dining corridor", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Rockville Town Square", zip: "20850", desc: "Urban dining & entertainment", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "White Flint", zip: "20852", desc: "Hotel & upscale dining district", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Twinbrook", zip: "20851", desc: "Metro area community restaurants", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Veirs Mill", zip: "20853", desc: "Local dining & community food services", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "North Bethesda", zip: "20852", desc: "Upscale mixed-use dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Norbeck", zip: "20853", desc: "Suburban community dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Congressional Area", zip: "20854", desc: "Country club & upscale dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Aspen Hill", zip: "20906", desc: "Community restaurants & food courts", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "I-270 Corridor", zip: "20850", desc: "Business park & hotel dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Rockville, MD",
  },
  severn: {
    city: "Severn",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Anne Arundel County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Severn, MD. NFPA 96 compliant services for restaurants and commercial kitchens in Anne Arundel County.",
    metaKeywords:
      "kitchen hood cleaning Severn MD, commercial exhaust cleaning Severn, restaurant hood cleaning Anne Arundel County, NFPA 96 compliance Severn MD",
    heroDescription:
      "Severn's growing restaurant community along Routes 174 and 170 deserves certified NFPA 96 exhaust maintenance. We serve all commercial kitchens in the Severn area of Anne Arundel County.",
    aboutParagraph1:
      "Severn, MD is a growing community in Anne Arundel County between Baltimore and Annapolis with a mix of local restaurants, fast food chains, and community dining establishments along Route 174 and Quarterfield Road.",
    aboutParagraph2:
      "We serve local restaurants near the Severn area, commercial kitchens near NSA Fort Meade, and dining establishments throughout the Route 170 and 174 corridors. Our certified technicians provide complete cleaning services with compliance documentation.",
    dispatchContext: "Technicians dispatch from Anne Arundel County service centers covering the Severn and Odenton areas.",
    coverageContext: "We cover Severn commercial corridors, Route 174 dining strip, and all surrounding community dining establishments.",
    industriesExtra: "NSA Campus & Military Contractor Dining",
    neighborhoods: [
      { name: "Severn Village", zip: "21144", desc: "Community dining & local restaurants", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Quarterfield Road", zip: "21144", desc: "Commercial corridor restaurants", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Round Bay", zip: "21146", desc: "Waterfront community dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Severn Station", zip: "21144", desc: "Transit area food services", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Longmeadow", zip: "21144", desc: "Residential dining & cafes", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Jessup", zip: "20794", desc: "Industrial area food facilities", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Route 170 Corridor", zip: "21144", desc: "Commercial food strip operations", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "NSA Area", zip: "21144", desc: "Contractor & facility food services", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Ardmore", zip: "21144", desc: "Local community kitchens", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Harmans", zip: "21077", desc: "Airport-adjacent dining facilities", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Severn, MD",
  },
  "severna-park": {
    city: "Severna Park",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Anne Arundel County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Severna Park, MD. NFPA 96 compliant services for restaurants and commercial kitchens in Anne Arundel County.",
    metaKeywords:
      "kitchen hood cleaning Severna Park MD, commercial exhaust cleaning Severna Park, restaurant hood cleaning Anne Arundel County, NFPA 96 compliance Severna Park MD",
    heroDescription:
      "Severna Park's upscale dining establishments and B&A Trail corridor restaurants deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens throughout the area.",
    aboutParagraph1:
      "Severna Park, MD is an affluent community in Anne Arundel County known for its shopping centers, waterfront access, and upscale dining along Ritchie Highway and B&A Boulevard. Commercial kitchens here must maintain NFPA 96 compliance.",
    aboutParagraph2:
      "We serve Severna Park Town Center restaurants, Benfield Road dining establishments, and local commercial kitchens throughout the area. Our certified technicians provide full-system exhaust cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Anne Arundel County service hubs covering Severna Park and the Ritchie Highway corridor.",
    coverageContext: "We provide certified services across all Severna Park commercial areas and surrounding community dining establishments.",
    industriesExtra: "Waterfront Club & Marina Dining Venues",
    neighborhoods: [
      { name: "Severna Park Town Center", zip: "21146", desc: "Main dining hub & restaurants", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Ritchie Highway Corridor", zip: "21146", desc: "Commercial dining strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "B&A Trail Area", zip: "21146", desc: "Local community dining & cafes", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Cape St. Claire", zip: "21401", desc: "Waterfront community dining", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Chartridge", zip: "21146", desc: "Upscale residential dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Millersville", zip: "21108", desc: "Suburban community food services", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Herald Harbor", zip: "21032", desc: "Waterfront dining & clubs", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Aquia", zip: "21146", desc: "Local restaurants & cafes", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Benfield Road", zip: "21146", desc: "Restaurant row & local dining", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Robinson Road", zip: "21146", desc: "Commercial kitchen operations", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Severna Park, MD",
  },
  "silver-spring": {
    city: "Silver Spring",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Montgomery County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Silver Spring, MD. NFPA 96 compliant services for restaurants, cafes, and commercial kitchens in Montgomery County.",
    metaKeywords:
      "kitchen hood cleaning Silver Spring MD, commercial exhaust cleaning Silver Spring, restaurant hood cleaning Montgomery County, NFPA 96 compliance Silver Spring MD",
    heroDescription:
      "Silver Spring's vibrant downtown dining district and diverse international restaurant scene deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens throughout the Silver Spring area.",
    aboutParagraph1:
      "Silver Spring, MD is a diverse and vibrant community in Montgomery County with a bustling downtown restaurant district along Colesville Road and Georgia Avenue. From Ethiopian restaurants and Salvadoran cuisine to upscale American dining, all commercial kitchens require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve Downtown Silver Spring restaurants, Discovery Communications campus dining, hotel kitchens, and international restaurant row eateries throughout the area. Our certified technicians provide complete system cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Montgomery County service centers with rapid coverage across the Silver Spring area.",
    coverageContext: "We cover Downtown Silver Spring, Colesville Road dining, Georgia Avenue corridor, and all surrounding communities.",
    industriesExtra: "Discovery District & International Restaurant Row",
    neighborhoods: [
      { name: "Downtown Silver Spring", zip: "20910", desc: "Urban dining & entertainment district", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Colesville Road Corridor", zip: "20904", desc: "Commercial dining & restaurant row", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Georgia Avenue Strip", zip: "20902", desc: "Diverse international restaurant district", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Four Corners", zip: "20904", desc: "Community restaurants & cafes", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Wheaton", zip: "20902", desc: "International restaurant hub", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Takoma Park", zip: "20912", desc: "Artisan food & local dining scene", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "White Oak", zip: "20901", desc: "Commercial food corridor", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Layhill", zip: "20906", desc: "Suburban community restaurants", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Kemp Mill", zip: "20902", desc: "Community dining & local eateries", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Sligo Creek", zip: "20910", desc: "Local neighborhood dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Silver Spring, MD",
  },
  towson: {
    city: "Towson",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Baltimore County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Towson, MD. NFPA 96 compliant services for restaurants, bars, and commercial kitchens in Baltimore County.",
    metaKeywords:
      "kitchen hood cleaning Towson MD, commercial exhaust cleaning Towson, restaurant hood cleaning Baltimore County, NFPA 96 compliance Towson MD, grease trap cleaning Towson",
    heroDescription:
      "Towson's busy bar and restaurant scene near Towson University and the Towson Town Center deserves certified NFPA 96 exhaust hood maintenance. We serve all commercial kitchens in the area.",
    aboutParagraph1:
      "Towson, MD is the county seat of Baltimore County and home to Towson University. Its dense restaurant and bar scene along York Road, Goucher Boulevard, and in Towson Town Center requires regular NFPA 96 certified exhaust system cleaning.",
    aboutParagraph2:
      "We serve Towson Town Center food courts, York Road restaurant corridor, Goucher College dining facilities, and hotel kitchens near the Towson District Court. Our certified technicians provide full-system cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Baltimore County service centers covering the Towson metro area.",
    coverageContext: "We cover Towson Town Center, York Road corridor, Goucher area, and all surrounding Baltimore County dining communities.",
    industriesExtra: "Towson University Campus & Bar District",
    neighborhoods: [
      { name: "Towson Town Center", zip: "21204", desc: "Shopping mall food courts & restaurants", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "York Road Corridor", zip: "21204", desc: "Restaurant & bar district", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Loch Raven Village", zip: "21204", desc: "Community dining & local restaurants", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Joppa Road Corridor", zip: "21286", desc: "Commercial dining strip", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Goucher College Area", zip: "21204", desc: "Campus-adjacent dining & cafes", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Dulaney Valley", zip: "21204", desc: "Upscale community dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Stoneleigh", zip: "21212", desc: "Local restaurants & neighborhood cafes", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Lutherville", zip: "21093", desc: "Suburban dining & food establishments", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Timonium", zip: "21093", desc: "Fairground area & commercial dining", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Ruxton", zip: "21204", desc: "Upscale community restaurants", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Towson, MD",
  },
  waldorf: {
    city: "Waldorf",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Charles County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Waldorf, MD. NFPA 96 compliant services for restaurants and commercial kitchens in Charles County.",
    metaKeywords:
      "kitchen hood cleaning Waldorf MD, commercial exhaust cleaning Waldorf, restaurant hood cleaning Charles County, NFPA 96 compliance Waldorf MD, grease trap cleaning Waldorf",
    heroDescription:
      "Waldorf's fast-growing Route 301 restaurant corridor and St. Charles Town Center dining scene deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens in Charles County.",
    aboutParagraph1:
      "Waldorf, MD is one of Maryland's fastest-growing communities in Charles County with a dense concentration of restaurants, fast food chains, and dining establishments along Route 301. All commercial kitchens must maintain NFPA 96 fire safety compliance.",
    aboutParagraph2:
      "We serve St. Charles Town Center food courts, Route 301 restaurants, hotel kitchens along the US-301 corridor, and commercial dining facilities throughout Waldorf. Our certified technicians provide full-system cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Charles County service depots covering the entire Waldorf commercial corridor.",
    coverageContext: "We cover Route 301 dining strip, St. Charles Town Center, and all Waldorf commercial areas and surrounding Charles County communities.",
    industriesExtra: "Retail Mall & Route 301 Franchise Dining",
    neighborhoods: [
      { name: "St. Charles Town Center", zip: "20601", desc: "Shopping mall food courts", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Route 301 Corridor", zip: "20601", desc: "Dense commercial dining strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "White Plains", zip: "20695", desc: "Community restaurants & chain dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Brandywine", zip: "20613", desc: "Suburban dining & local restaurants", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Indian Head", zip: "20640", desc: "Naval base area dining facilities", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "La Plata", zip: "20646", desc: "County seat restaurants & dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Bryans Road", zip: "20616", desc: "Community restaurants & fast food", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Accokeek", zip: "20607", desc: "Rural community dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Mattawoman", zip: "20601", desc: "Suburban food establishments", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Cobb Island Area", zip: "20625", desc: "Waterfront dining & crab houses", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Waldorf, MD",
  },
  westminster: {
    city: "Westminster",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Carroll County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Westminster, MD. NFPA 96 compliant services for restaurants and commercial kitchens in Carroll County.",
    metaKeywords:
      "kitchen hood cleaning Westminster MD, commercial exhaust cleaning Westminster, restaurant hood cleaning Carroll County, NFPA 96 compliance Westminster MD",
    heroDescription:
      "Westminster's historic downtown restaurants and Route 140 commercial dining corridor deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens throughout Carroll County.",
    aboutParagraph1:
      "Westminster, MD is the county seat of Carroll County with a growing restaurant scene in its historic downtown and along Route 140. Commercial kitchens serving the McDaniel College community and local residents require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve downtown Westminster restaurants, McDaniel College dining services, and commercial kitchens along the Route 140 corridor. Our certified technicians provide full-system cleaning with compliance documentation and photo reports.",
    dispatchContext: "Technicians dispatch from Carroll County service hubs covering Westminster and surrounding communities.",
    coverageContext: "We cover downtown Westminster, Route 140 corridor, and all Carroll County dining communities.",
    industriesExtra: "McDaniel College Campus Dining Services",
    neighborhoods: [
      { name: "Downtown Westminster", zip: "21157", desc: "Historic downtown restaurants & cafes", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Route 140 Corridor", zip: "21158", desc: "Commercial dining strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Reifsnider Forest", zip: "21157", desc: "Community dining & local eateries", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Spring Garden", zip: "21157", desc: "Suburban dining & food services", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Taneytown", zip: "21787", desc: "Rural community dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "New Windsor", zip: "21776", desc: "Small town restaurants & local dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Union Bridge", zip: "21791", desc: "Historic community food establishments", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Finksburg", zip: "21048", desc: "Suburban dining & commercial kitchens", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Mount Airy", zip: "21771", desc: "Growing restaurant community", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Sykesville", zip: "21784", desc: "Historic town dining & local eateries", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Westminster, MD",
  },

  // ─────────────────── VIRGINIA ───────────────────
  arlington: {
    city: "Arlington",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Arlington County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Arlington, VA. NFPA 96 compliant services for restaurants, bars, and Pentagon-area dining facilities.",
    metaKeywords:
      "kitchen hood cleaning Arlington VA, commercial exhaust cleaning Arlington, restaurant hood cleaning Arlington County, NFPA 96 compliance Arlington VA, grease trap cleaning Arlington",
    heroDescription:
      "Arlington's Clarendon bar scene, Pentagon City dining, and Rosslyn high-rises need certified NFPA 96 exhaust maintenance. We serve all commercial kitchens throughout Arlington County.",
    aboutParagraph1:
      "Arlington, VA is a dense urban county just across the Potomac from Washington DC with one of the most vibrant restaurant scenes in the DC metro area. From Clarendon corridor bars to Pentagon Row upscale dining, all commercial kitchens require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve Clarendon restaurants, Pentagon City food courts, Rosslyn hotel kitchens, and Columbia Pike dining establishments. Our certified technicians work overnight to ensure zero kitchen downtime.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs with rapid coverage across all Arlington zip codes.",
    coverageContext: "We cover Clarendon, Rosslyn, Pentagon City, Ballston, Columbia Pike, and all Arlington County commercial kitchen zones.",
    industriesExtra: "Pentagon & Defense Contractor Dining Facilities",
    neighborhoods: [
      { name: "Clarendon", zip: "22201", desc: "Bar & restaurant district", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Pentagon City", zip: "22202", desc: "Mall food courts & hotel dining", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Rosslyn", zip: "22209", desc: "High-rise hotel & corporate dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Ballston", zip: "22203", desc: "Urban mixed-use restaurant corridor", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Columbia Pike", zip: "22204", desc: "Diverse international restaurant strip", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Crystal City", zip: "22202", desc: "Amazon HQ2 area & corporate dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Virginia Square", zip: "22203", desc: "Urban dining & campus food services", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Lyon Village", zip: "22201", desc: "Upscale community restaurants", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Shirlington", zip: "22206", desc: "Restaurant park & upscale dining", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Nauck", zip: "22204", desc: "Historic community restaurants", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Arlington, VA",
  },
  alexandria: {
    city: "Alexandria",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Alexandria City",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Alexandria, VA. NFPA 96 compliant services for restaurants and historic Old Town dining establishments.",
    metaKeywords:
      "kitchen hood cleaning Alexandria VA, commercial exhaust cleaning Alexandria, restaurant hood cleaning Old Town, NFPA 96 compliance Alexandria VA",
    heroDescription:
      "Alexandria's historic Old Town restaurants and King Street dining scene deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens throughout Alexandria City.",
    aboutParagraph1:
      "Alexandria, VA is a historic city with one of the most celebrated dining destinations in the DC metro area centered in Old Town along King Street. From fine dining to waterfront seafood, commercial kitchens require rigorous NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve Old Town Alexandria restaurants, King Street dining establishments, hotel kitchens in the Waterfront District, and corporate dining facilities throughout the city. Our certified technicians provide complete cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs with rapid coverage across all Alexandria City zones.",
    coverageContext: "We cover Old Town, King Street corridor, Waterfront District, and all Alexandria commercial dining zones.",
    industriesExtra: "Historic Old Town & Waterfront Dining Venues",
    neighborhoods: [
      { name: "Old Town", zip: "22314", desc: "Historic district restaurants & taverns", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "King Street Corridor", zip: "22314", desc: "Main dining & entertainment strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Waterfront District", zip: "22314", desc: "Waterfront dining & seafood restaurants", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Del Ray", zip: "22301", desc: "Artisan food & local dining scene", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Landmark", zip: "22306", desc: "Shopping center food courts", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Huntington", zip: "22303", desc: "Metro area community dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Seminary Valley", zip: "22304", desc: "Local restaurants & community dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Eisenhower Valley", zip: "22314", desc: "Commercial & corporate dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Potomac Yard", zip: "22301", desc: "Mixed-use dining development", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Mount Vernon Avenue", zip: "22301", desc: "Del Ray restaurant row", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Alexandria, VA",
  },
  fairfax: {
    city: "Fairfax",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Fairfax County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Fairfax, VA. NFPA 96 compliant services for restaurants, hotels, and commercial kitchens in Fairfax County.",
    metaKeywords:
      "kitchen hood cleaning Fairfax VA, commercial exhaust cleaning Fairfax, restaurant hood cleaning Fairfax County, NFPA 96 compliance Fairfax VA",
    heroDescription:
      "Fairfax City's diverse restaurant community and George Mason University campus area deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens throughout Fairfax County.",
    aboutParagraph1:
      "Fairfax, VA is a diverse and growing independent city within Fairfax County with a thriving restaurant scene along Main Street, Route 236, and near George Mason University. Commercial kitchens here must maintain NFPA 96 fire safety compliance.",
    aboutParagraph2:
      "We serve restaurants near George Mason University, Main Street dining establishments, and commercial kitchens throughout the Fairfax City and surrounding Fairfax County areas. Our certified technicians provide complete cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs covering the Fairfax metro area.",
    coverageContext: "We cover Fairfax City Center, Old Town Fairfax, Route 236 corridor, and all surrounding Fairfax County communities.",
    industriesExtra: "George Mason University Campus Dining Services",
    neighborhoods: [
      { name: "Old Town Fairfax", zip: "22030", desc: "Historic city restaurants & cafes", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Route 236 Corridor", zip: "22030", desc: "Commercial dining strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Fairfax Corner", zip: "22033", desc: "Open-air shopping center dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Fair Lakes", zip: "22033", desc: "Suburban restaurant & food courts", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "George Mason University Area", zip: "22030", desc: "Campus adjacent dining & food services", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Fairfax City", zip: "22031", desc: "City center restaurants & dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Pender", zip: "22030", desc: "Business park & corporate dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Jermantown", zip: "22030", desc: "Community dining & local restaurants", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Providence District", zip: "22042", desc: "Commercial food corridor", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Burke Area", zip: "22015", desc: "Suburban community restaurants", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Fairfax, VA",
  },
  "falls-church": {
    city: "Falls Church",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Falls Church City",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Falls Church, VA. NFPA 96 compliant services for restaurants and commercial kitchens in the Little City.",
    metaKeywords:
      "kitchen hood cleaning Falls Church VA, commercial exhaust cleaning Falls Church, restaurant hood cleaning Falls Church City, NFPA 96 compliance Falls Church VA",
    heroDescription:
      "Falls Church's charming downtown restaurant scene and Seven Corners area commercial kitchens deserve certified NFPA 96 exhaust maintenance. We serve all food establishments in the area.",
    aboutParagraph1:
      "Falls Church, VA, known as the 'Little City', has a charming downtown restaurant scene along Broad Street and a diverse commercial dining area at Seven Corners. All commercial kitchens require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve downtown Falls Church restaurants, Seven Corners area dining, and commercial kitchens throughout the city. Our certified technicians provide complete exhaust system cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs covering Falls Church City and surrounding areas.",
    coverageContext: "We cover downtown Falls Church, Broad Street corridor, Seven Corners, and surrounding commercial dining areas.",
    industriesExtra: "Downtown Broad Street & Seven Corners Dining",
    neighborhoods: [
      { name: "Downtown Falls Church", zip: "22046", desc: "Broad Street restaurants & cafes", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Seven Corners", zip: "22044", desc: "Multi-ethnic restaurant hub", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "West Falls Church", zip: "22046", desc: "Metro area dining & local restaurants", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "East Falls Church", zip: "22041", desc: "Transit corridor food services", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Holmes Run", zip: "22042", desc: "Community dining & local cafes", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Pimmit Hills", zip: "22043", desc: "Suburban dining & restaurants", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Merrifield", zip: "22031", desc: "Commercial food corridor", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Dunn Loring", zip: "22027", desc: "Local restaurants & food services", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Lakemont", zip: "22041", desc: "Residential community dining", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Lincolnia", zip: "22312", desc: "Commercial kitchen operations", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Falls Church, VA",
  },
  vienna: {
    city: "Vienna",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Fairfax County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Vienna, VA. NFPA 96 compliant services for restaurants and commercial kitchens in Fairfax County.",
    metaKeywords:
      "kitchen hood cleaning Vienna VA, commercial exhaust cleaning Vienna, restaurant hood cleaning Fairfax County, NFPA 96 compliance Vienna VA",
    heroDescription:
      "Vienna's charming Church Street restaurant district and Tysons-adjacent commercial kitchens deserve certified NFPA 96 exhaust maintenance. We serve all food establishments in the Vienna area.",
    aboutParagraph1:
      "Vienna, VA is a charming suburban town in Fairfax County with a vibrant restaurant scene along Church Street and proximity to the Tysons commercial corridor. Commercial kitchens here require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve Church Street restaurants, Vienna Metro area dining, and commercial kitchens throughout the area. Our certified technicians provide complete cleaning with compliance documentation and photo reports.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs covering Vienna and the Tysons corridor.",
    coverageContext: "We cover Church Street dining, Vienna Metro area, and all surrounding Fairfax County communities.",
    industriesExtra: "Wolf Trap Arts Center & Event Venue Dining",
    neighborhoods: [
      { name: "Church Street Corridor", zip: "22180", desc: "Main restaurant & dining strip", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Vienna Town Center", zip: "22180", desc: "Community restaurants & cafes", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Tysons Corner Area", zip: "22182", desc: "Mall food courts & upscale dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Hunter Mill", zip: "22182", desc: "Suburban dining & community kitchens", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Wolf Trap", zip: "22182", desc: "Arts venue & event catering", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Oakton", zip: "22124", desc: "Suburban restaurants & local dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Beulah Road Area", zip: "22180", desc: "Community dining establishments", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Vienna Metro", zip: "22180", desc: "Metro-adjacent dining & food services", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Westbriar", zip: "22182", desc: "Residential community restaurants", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Springvale Road", zip: "22182", desc: "Commercial kitchen operations", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Vienna, VA",
  },
  reston: {
    city: "Reston",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Fairfax County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Reston, VA. NFPA 96 compliant services for restaurants and tech campus dining in Fairfax County.",
    metaKeywords:
      "kitchen hood cleaning Reston VA, commercial exhaust cleaning Reston, restaurant hood cleaning Fairfax County, NFPA 96 compliance Reston VA",
    heroDescription:
      "Reston Town Center's vibrant restaurant scene and tech company campus dining facilities deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens in the Reston area.",
    aboutParagraph1:
      "Reston, VA is a master-planned community in Fairfax County and a major tech hub with a thriving restaurant scene in Reston Town Center. Major corporate campuses and hotel kitchens alongside Town Center dining all require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve Reston Town Center restaurants, tech company cafeterias in the Reston corridor, and hotel kitchens near the Dulles Toll Road. Our certified technicians provide complete cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs covering the Reston and Dulles corridor.",
    coverageContext: "We cover Reston Town Center, North Reston, South Lakes, and all Reston commercial dining areas.",
    industriesExtra: "Tech Campus & Corporate Cafeteria Kitchens",
    neighborhoods: [
      { name: "Reston Town Center", zip: "20190", desc: "Urban restaurant & entertainment hub", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "North Point", zip: "20194", desc: "Community dining & local restaurants", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "South Lakes", zip: "20191", desc: "Village center dining & cafes", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Baron Cameron", zip: "20194", desc: "Commercial food corridor", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Hunters Woods", zip: "20191", desc: "Village center restaurants", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Lake Newport", zip: "20190", desc: "Waterfront & community dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Dulles Toll Road Corridor", zip: "20191", desc: "Business park & hotel dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Sunset Hills", zip: "20190", desc: "Tech campus corporate dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Lake Thoreau", zip: "20191", desc: "Waterfront community kitchens", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Wiehle Avenue", zip: "20191", desc: "Metro-adjacent food services", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Reston, VA",
  },
  herndon: {
    city: "Herndon",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Fairfax County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Herndon, VA. NFPA 96 compliant services for restaurants and commercial kitchens near Dulles Airport in Fairfax County.",
    metaKeywords:
      "kitchen hood cleaning Herndon VA, commercial exhaust cleaning Herndon, restaurant hood cleaning Fairfax County, NFPA 96 compliance Herndon VA",
    heroDescription:
      "Herndon's Downtown restaurant strip and Dulles Airport-adjacent commercial kitchens deserve certified NFPA 96 exhaust maintenance. We serve all food establishments in the Herndon area.",
    aboutParagraph1:
      "Herndon, VA is a charming town in Fairfax County near Dulles International Airport with a growing restaurant scene along Elden Street and the Downtown Herndon corridor. Commercial kitchens require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve Downtown Herndon restaurants, Dulles Airport concession kitchens, and commercial dining facilities in the Dulles Tech corridor. Our certified technicians provide complete cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs covering Herndon and the Dulles corridor.",
    coverageContext: "We cover Downtown Herndon, Dulles Tech Corridor, and all surrounding Fairfax County dining communities.",
    industriesExtra: "Dulles Airport & Tech Corridor Dining Facilities",
    neighborhoods: [
      { name: "Downtown Herndon", zip: "20170", desc: "Main street restaurants & cafes", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Elden Street Corridor", zip: "20170", desc: "Commercial dining strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Dulles Corner", zip: "20171", desc: "Corporate campus dining facilities", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Worldgate", zip: "20170", desc: "Mixed-use dining & restaurants", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Floris", zip: "20171", desc: "Suburban community dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "McNair Farms", zip: "20171", desc: "Residential community restaurants", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Belmont Ridge", zip: "20176", desc: "Upscale community dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Sterling Corridor", zip: "20164", desc: "Commercial food strip & chain dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Sugarland Run", zip: "20164", desc: "Planned community restaurants", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Dulles Town Center Area", zip: "20166", desc: "Mall food courts & retail dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Herndon, VA",
  },
  chantilly: {
    city: "Chantilly",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Fairfax County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Chantilly, VA. NFPA 96 compliant services for restaurants and commercial kitchens near Dulles Airport in Fairfax County.",
    metaKeywords:
      "kitchen hood cleaning Chantilly VA, commercial exhaust cleaning Chantilly, restaurant hood cleaning Fairfax County, NFPA 96 compliance Chantilly VA",
    heroDescription:
      "Chantilly's Route 50 restaurant corridor and Dulles-area commercial kitchens deserve certified NFPA 96 exhaust maintenance. We serve all food establishments in the Chantilly area.",
    aboutParagraph1:
      "Chantilly, VA is a growing Fairfax County community along Route 50 near Dulles International Airport. Its diverse restaurant scene, shopping center dining, and tech company cafeterias require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve Route 50 restaurants, Dulles Landing food courts, and corporate dining facilities in the Chantilly tech corridor. Our certified technicians provide complete exhaust system cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs covering Chantilly and the Dulles corridor.",
    coverageContext: "We cover Route 50 corridor, Dulles Landing, and all Chantilly commercial dining areas.",
    industriesExtra: "Tech Park & Air & Space Museum Venue Dining",
    neighborhoods: [
      { name: "Route 50 Corridor", zip: "20151", desc: "Commercial dining strip", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Dulles Landing", zip: "20152", desc: "Shopping center food courts", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "South Riding", zip: "20152", desc: "Planned community restaurants", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Westfields", zip: "20151", desc: "Corporate campus cafeterias", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Stone Ridge", zip: "20152", desc: "Suburban dining & community kitchens", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Sully District", zip: "20151", desc: "Community restaurants & cafes", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "New Braddock", zip: "20151", desc: "Commercial food operations", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Braddock Road Area", zip: "20151", desc: "Suburban dining corridors", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Bull Run Area", zip: "20109", desc: "Rural community restaurants", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Loudoun County Border", zip: "20152", desc: "Cross-county dining corridor", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Chantilly, VA",
  },
  leesburg: {
    city: "Leesburg",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Loudoun County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Leesburg, VA. NFPA 96 compliant services for restaurants and commercial kitchens in Loudoun County.",
    metaKeywords:
      "kitchen hood cleaning Leesburg VA, commercial exhaust cleaning Leesburg, restaurant hood cleaning Loudoun County, NFPA 96 compliance Leesburg VA",
    heroDescription:
      "Leesburg's vibrant historic downtown restaurant scene and Loudoun County wine country kitchens deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens in the area.",
    aboutParagraph1:
      "Leesburg, VA is the county seat of Loudoun County and a historic town with a growing restaurant and brewery scene in its vibrant downtown along King Street and Market Street. Commercial kitchens require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve downtown Leesburg restaurants, Leesburg Corner Premium Outlets food establishments, and commercial kitchens in the Loudoun County wine country region. Our certified technicians provide complete cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs covering Leesburg and Loudoun County.",
    coverageContext: "We cover historic downtown Leesburg, Leesburg Premium Outlets, and all Loudoun County dining areas.",
    industriesExtra: "Wine Country & Winery Restaurant Kitchens",
    neighborhoods: [
      { name: "Downtown Leesburg", zip: "20175", desc: "Historic restaurant & brewery district", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "King Street Corridor", zip: "20175", desc: "Main dining & entertainment strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Leesburg Premium Outlets", zip: "20176", desc: "Outlet center food courts", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Lansdowne", zip: "20176", desc: "Resort & conference dining", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Potomac Station", zip: "20176", desc: "Community restaurants & cafes", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Ashburn Village", zip: "20147", desc: "Suburban dining & local restaurants", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Broadlands", zip: "20148", desc: "Planned community dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Brambleton", zip: "20148", desc: "Town center restaurants & dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Middleburg Road Area", zip: "20175", desc: "Wine country dining & event venues", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Hamilton", zip: "20158", desc: "Rural community dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Leesburg, VA",
  },
  ashburn: {
    city: "Ashburn",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Loudoun County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Ashburn, VA. NFPA 96 compliant services for restaurants and commercial kitchens in Loudoun County.",
    metaKeywords:
      "kitchen hood cleaning Ashburn VA, commercial exhaust cleaning Ashburn, restaurant hood cleaning Loudoun County, NFPA 96 compliance Ashburn VA",
    heroDescription:
      "Ashburn's fast-growing restaurant corridor and data center campus dining facilities deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens in the Ashburn area.",
    aboutParagraph1:
      "Ashburn, VA is one of the fastest-growing communities in Northern Virginia in Loudoun County. Its diverse restaurant scene along Waxpool Road, One Loudoun Town Center, and the Route 7 corridor requires NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve One Loudoun restaurants, Ashburn Farm commercial kitchens, and dining facilities near the Silver Line Metro. Our certified technicians provide complete exhaust system cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs covering the Ashburn and Loudoun County areas.",
    coverageContext: "We cover One Loudoun, Waxpool Road corridor, Route 7, and all Ashburn commercial dining areas.",
    industriesExtra: "Data Center Campus & Tech Corridor Dining",
    neighborhoods: [
      { name: "One Loudoun", zip: "20147", desc: "Urban town center dining & restaurants", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Waxpool Road Corridor", zip: "20147", desc: "Commercial food strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Ashburn Farm", zip: "20147", desc: "Planned community restaurants", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Broadlands", zip: "20148", desc: "Community dining & local cafes", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Brambleton Town Center", zip: "20148", desc: "Town center restaurants", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Moorefield Station", zip: "20147", desc: "Metro-adjacent dining & food services", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Lakeview", zip: "20147", desc: "Lakefront community dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Route 7 Corridor", zip: "20147", desc: "Commercial food strip operations", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Dulles South", zip: "20148", desc: "Suburban dining & business kitchens", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Claiborne Parkway", zip: "20147", desc: "Commercial kitchen operations", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Ashburn, VA",
  },
  manassas: {
    city: "Manassas",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Manassas City",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Manassas, VA. NFPA 96 compliant services for restaurants and commercial kitchens in Prince William County.",
    metaKeywords:
      "kitchen hood cleaning Manassas VA, commercial exhaust cleaning Manassas, restaurant hood cleaning Prince William County, NFPA 96 compliance Manassas VA",
    heroDescription:
      "Manassas City's historic downtown and Route 28 commercial kitchens deserve certified NFPA 96 exhaust maintenance. We serve all food establishments in the Manassas area.",
    aboutParagraph1:
      "Manassas, VA is an independent city in Prince William County with a historic downtown restaurant scene and a growing commercial corridor along Route 28. Commercial kitchens here must maintain NFPA 96 fire safety compliance.",
    aboutParagraph2:
      "We serve downtown Manassas restaurants, Route 28 commercial food establishments, and institutional kitchens near Manassas National Battlefield Park. Our certified technicians provide complete cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs covering Manassas City and Prince William County.",
    coverageContext: "We cover historic downtown Manassas, Route 28 corridor, and all Prince William County dining communities.",
    industriesExtra: "Historic Battlefield Park & Heritage Dining Venues",
    neighborhoods: [
      { name: "Downtown Manassas", zip: "20110", desc: "Historic restaurants & downtown dining", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Route 28 Corridor", zip: "20110", desc: "Commercial food strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Manassas Park", zip: "20111", desc: "Community restaurants & local dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Sudley", zip: "20109", desc: "Suburban dining & commercial kitchens", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Gainesville", zip: "20155", desc: "Fast-growing dining community", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Nokesville", zip: "20181", desc: "Rural community dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Bristow", zip: "20136", desc: "Suburban community restaurants", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Brentsville", zip: "20188", desc: "Historic rural dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Haymarket", zip: "20169", desc: "Suburban dining & food corridor", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Centreville", zip: "20120", desc: "Commercial food strip operations", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Manassas, VA",
  },
  woodbridge: {
    city: "Woodbridge",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Prince William County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Woodbridge, VA. NFPA 96 compliant services for restaurants and commercial kitchens in Prince William County.",
    metaKeywords:
      "kitchen hood cleaning Woodbridge VA, commercial exhaust cleaning Woodbridge, restaurant hood cleaning Prince William County, NFPA 96 compliance Woodbridge VA",
    heroDescription:
      "Woodbridge's Potomac Mills area restaurants and Route 1 commercial kitchens deserve certified NFPA 96 exhaust maintenance. We serve all food establishments in the Woodbridge area.",
    aboutParagraph1:
      "Woodbridge, VA is a major commercial hub in Prince William County centered around Potomac Mills outlet mall and a dense restaurant corridor along US-1. Commercial kitchens here require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve Potomac Mills food courts, Route 1 restaurants, and commercial kitchens throughout the Woodbridge area. Our certified technicians provide complete exhaust system cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs covering Woodbridge and Prince William County.",
    coverageContext: "We cover Potomac Mills area, Route 1 corridor, and all Woodbridge commercial dining zones.",
    industriesExtra: "Potomac Mills Outlet & Route 1 Franchise Dining",
    neighborhoods: [
      { name: "Potomac Mills Area", zip: "22192", desc: "Outlet mall food courts", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Route 1 Corridor", zip: "22191", desc: "Dense commercial dining strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Dale City", zip: "22193", desc: "Suburban dining & community restaurants", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Lake Ridge", zip: "22192", desc: "Planned community restaurants", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Occoquan", zip: "22125", desc: "Historic waterfront dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Belmont Bay", zip: "22192", desc: "Marina & waterfront dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Montclair", zip: "22025", desc: "Community dining & local eateries", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Marumsco", zip: "22191", desc: "Commercial kitchen operations", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Prince William Parkway", zip: "22193", desc: "Commercial food corridor", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Independent Hill", zip: "22192", desc: "Local community dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Woodbridge, VA",
  },
  springfield: {
    city: "Springfield",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Fairfax County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Springfield, VA. NFPA 96 compliant services for restaurants and commercial kitchens in Fairfax County.",
    metaKeywords:
      "kitchen hood cleaning Springfield VA, commercial exhaust cleaning Springfield, restaurant hood cleaning Fairfax County, NFPA 96 compliance Springfield VA",
    heroDescription:
      "Springfield's Franconia Road restaurant corridor and Springfield Town Center dining deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens in the area.",
    aboutParagraph1:
      "Springfield, VA is a major Fairfax County community at the intersection of I-95 and I-395 with a diverse restaurant scene in Springfield Town Center and along Franconia Road. Commercial kitchens require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve Springfield Town Center food courts, Franconia Road restaurants, and commercial kitchens throughout the area. Our certified technicians provide complete exhaust system cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs covering the Springfield I-95/I-395 corridor.",
    coverageContext: "We cover Springfield Town Center, Franconia Road, and all surrounding Fairfax County dining communities.",
    industriesExtra: "Springfield Town Center & Interstate Corridor Dining",
    neighborhoods: [
      { name: "Springfield Town Center", zip: "22150", desc: "Shopping mall food courts", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Franconia", zip: "22310", desc: "Community restaurants & local dining", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Newington", zip: "22122", desc: "Suburban dining & commercial kitchens", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Lorton", zip: "22079", desc: "Community dining & local restaurants", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "North Springfield", zip: "22151", desc: "Residential community restaurants", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "West Springfield", zip: "22152", desc: "Suburban dining & food establishments", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Keene Mill", zip: "22152", desc: "Local restaurants & cafes", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Rolling Valley", zip: "22153", desc: "Community dining corridor", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Saratoga", zip: "22153", desc: "Planned community restaurants", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Backlick Road", zip: "22150", desc: "Commercial food strip operations", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Springfield, VA",
  },
  tysons: {
    city: "Tysons",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Fairfax County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in Tysons, VA. NFPA 96 compliant services for restaurants, luxury hotels, and high-rise dining in Fairfax County.",
    metaKeywords:
      "kitchen hood cleaning Tysons VA, commercial exhaust cleaning Tysons, restaurant hood cleaning Tysons Corner, NFPA 96 compliance Tysons VA",
    heroDescription:
      "Tysons' luxury hotel kitchens, Tysons Corner Center food courts, and Galleria restaurants deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens in this premier Northern Virginia hub.",
    aboutParagraph1:
      "Tysons, VA is one of Northern Virginia's most vibrant commercial centers with massive shopping malls, luxury hotels, and a growing urban restaurant scene along the Silver Line Metro corridor. All commercial kitchens require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve Tysons Corner Center food courts, Galleria at Tysons II restaurants, luxury hotel kitchens, and corporate dining facilities throughout the Tysons area. Our certified technicians provide complete cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs covering the entire Tysons metro area.",
    coverageContext: "We cover Tysons Corner Center, Galleria at Tysons II, Silver Line corridor, and all Tysons commercial dining zones.",
    industriesExtra: "Luxury Hotel & High-Rise Corporate Dining",
    neighborhoods: [
      { name: "Tysons Corner Center", zip: "22102", desc: "Major mall food courts & restaurants", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Galleria at Tysons II", zip: "22102", desc: "Luxury shopping dining & restaurants", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Tysons Metro Corridor", zip: "22102", desc: "Silver Line transit dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "McLean Area", zip: "22101", desc: "Upscale dining & hotel kitchens", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Greensboro District", zip: "22102", desc: "Urban mixed-use restaurant district", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Spring Hill", zip: "22102", desc: "Corporate campus dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "International Drive", zip: "22102", desc: "Hotel row & corporate dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Jones Branch", zip: "22102", desc: "High-rise office & dining complex", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Chain Bridge Road", zip: "22101", desc: "Upscale dining corridor", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Leesburg Pike", zip: "22043", desc: "Commercial food strip operations", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Tysons, VA",
  },
  mclean: {
    city: "McLean",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Fairfax County",
    metaDescription:
      "Certified kitchen hood cleaning & exhaust system degreasing in McLean, VA. NFPA 96 compliant services for upscale restaurants, country clubs, and commercial kitchens in Fairfax County.",
    metaKeywords:
      "kitchen hood cleaning McLean VA, commercial exhaust cleaning McLean, restaurant hood cleaning Fairfax County, NFPA 96 compliance McLean VA",
    heroDescription:
      "McLean's upscale dining scene, country club kitchens, and corporate event facilities deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens throughout this prestigious Northern Virginia community.",
    aboutParagraph1:
      "McLean, VA is one of the most affluent communities in Northern Virginia, home to foreign embassies, country clubs, and upscale restaurants along Old Dominion Drive and Chain Bridge Road. Commercial kitchens here require meticulous NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve McLean fine dining restaurants, country club kitchens, corporate catering facilities, and hotel kitchens throughout the area. Our certified technicians provide complete cleaning with official compliance documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs covering McLean and the Great Falls area.",
    coverageContext: "We cover downtown McLean, Old Dominion Drive corridor, country club zones, and all surrounding Fairfax County communities.",
    industriesExtra: "Country Club & Embassy Row Catering Kitchens",
    neighborhoods: [
      { name: "Downtown McLean", zip: "22101", desc: "Upscale restaurants & fine dining", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Old Dominion Drive", zip: "22101", desc: "Main dining corridor", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Langley Fork", zip: "22101", desc: "Community dining & local restaurants", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Chesterbrook", zip: "22101", desc: "Corporate campus dining facilities", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Great Falls", zip: "22066", desc: "Upscale community dining & events", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Spring Hill Area", zip: "22102", desc: "Office park & hotel dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Balls Hill", zip: "22101", desc: "Residential dining & local cafes", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Kirby Road", zip: "22101", desc: "Upscale residential area dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Turkey Run Park Area", zip: "22101", desc: "Park venue & event catering", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Scott's Run", zip: "22102", desc: "Mixed-use dining development", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "McLean, VA",
  },
  richmond: {
    city: "Richmond",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Richmond City",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Richmond, VA. NFPA 96 compliant services for restaurants, breweries, and commercial kitchens in Virginia's capital.",
    metaKeywords:
      "kitchen hood cleaning Richmond VA, commercial kitchen exhaust cleaning Richmond, restaurant hood cleaning Richmond City, NFPA 96 compliance Richmond VA, grease trap cleaning Richmond",
    heroDescription:
      "Richmond's booming culinary and craft brewery scene — from Scott's Addition to Carytown and Shockoe Bottom — deserves certified NFPA 96 exhaust system maintenance. We serve all commercial kitchens throughout Virginia's capital.",
    aboutParagraph1:
      "Richmond, VA is one of the South's most celebrated food cities, with a dense restaurant and brewery scene spanning Scott's Addition, The Fan, Carytown, and historic Shockoe Bottom. Commercial kitchens here must maintain NFPA 96 compliance for fire safety and health code inspections.",
    aboutParagraph2:
      "We serve downtown Richmond restaurants, VCU-area dining, Scott's Addition breweries, and West End commercial kitchens. Our certified technicians provide full-system degreasing with compliance stickers and digital photo documentation.",
    dispatchContext: "Technicians dispatch from Greater Richmond service hubs covering the city and surrounding counties.",
    coverageContext: "We provide certified services across all Richmond neighborhoods, brewery districts, and commercial dining corridors.",
    industriesExtra: "Craft Brewery & Distillery Kitchens",
    neighborhoods: [
      { name: "Scott's Addition", zip: "23230", desc: "Brewery & distillery district", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "The Fan", zip: "23220", desc: "Historic restaurant & cafe district", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Carytown", zip: "23221", desc: "Eclectic dining & retail strip", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Shockoe Bottom", zip: "23223", desc: "Historic riverfront dining", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Downtown Richmond", zip: "23219", desc: "Hotel & corporate dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Church Hill", zip: "23223", desc: "Historic neighborhood eateries", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Jackson Ward", zip: "23220", desc: "Cultural district restaurants", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Manchester", zip: "23224", desc: "Emerging riverfront dining district", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Short Pump", zip: "23233", desc: "Town center & mall food courts", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "West End", zip: "23229", desc: "Suburban restaurants & cafes", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Richmond, VA",
  },
  norfolk: {
    city: "Norfolk",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Norfolk City",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Norfolk, VA. NFPA 96 compliant services for restaurants, seafood venues, and commercial kitchens in Hampton Roads.",
    metaKeywords:
      "kitchen hood cleaning Norfolk VA, commercial kitchen exhaust cleaning Norfolk, restaurant hood cleaning Norfolk City, NFPA 96 compliance Norfolk VA, grease trap cleaning Norfolk",
    heroDescription:
      "Norfolk's vibrant waterfront restaurants, seafood venues, and Hampton Roads dining scene deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens throughout the city and naval community.",
    aboutParagraph1:
      "Norfolk, VA is the heart of the Hampton Roads metro and home to the world's largest naval station, a lively downtown dining scene, and the Ghent and NEON arts districts. Commercial kitchens here must maintain NFPA 96 compliance for fire safety and health inspections.",
    aboutParagraph2:
      "We serve downtown Norfolk restaurants, Ghent eateries, waterfront seafood venues, and dining facilities serving the naval community. Our certified technicians provide complete exhaust cleaning with compliance stickers and digital photo reports.",
    dispatchContext: "Technicians dispatch from Hampton Roads service hubs covering Norfolk and the surrounding metro.",
    coverageContext: "We provide certified services across all Norfolk neighborhoods, waterfront districts, and commercial dining corridors.",
    industriesExtra: "Naval Station & Waterfront Seafood Dining",
    neighborhoods: [
      { name: "Downtown Norfolk", zip: "23510", desc: "Waterfront & hotel dining hub", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Ghent", zip: "23517", desc: "Historic restaurant & cafe district", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Freemason", zip: "23510", desc: "Historic district fine dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "NEON Arts District", zip: "23504", desc: "Arts & dining destination", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Ocean View", zip: "23503", desc: "Beachfront seafood & dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Wards Corner", zip: "23505", desc: "Community dining & local eateries", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Larchmont", zip: "23508", desc: "ODU-area restaurants & cafes", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "East Beach", zip: "23518", desc: "Waterfront community dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Military Circle", zip: "23502", desc: "Commercial food courts & dining", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Naval Station Area", zip: "23511", desc: "Military base & contractor dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Norfolk, VA",
  },
  roanoke: {
    city: "Roanoke",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Roanoke City",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Roanoke, VA. NFPA 96 compliant services for restaurants and commercial kitchens in the Blue Ridge region.",
    metaKeywords:
      "kitchen hood cleaning Roanoke VA, commercial kitchen exhaust cleaning Roanoke, restaurant hood cleaning Roanoke City, NFPA 96 compliance Roanoke VA, grease trap cleaning Roanoke",
    heroDescription:
      "Roanoke's downtown dining scene, Grandin Village eateries, and Blue Ridge tourism kitchens deserve certified NFPA 96 exhaust maintenance. We serve all commercial kitchens throughout the Star City and Roanoke Valley.",
    aboutParagraph1:
      "Roanoke, VA is the largest city in southwest Virginia and the cultural hub of the Blue Ridge region, with a growing downtown restaurant scene, the historic Roanoke City Market, and the walkable Grandin Village. Commercial kitchens here must maintain NFPA 96 compliance for fire safety and health inspections.",
    aboutParagraph2:
      "We serve downtown Roanoke restaurants, City Market vendors, Grandin Village eateries, and tourism and brewery kitchens across the Roanoke Valley. Our certified technicians provide complete exhaust cleaning with compliance stickers and digital photo reports.",
    dispatchContext: "Technicians dispatch from Roanoke Valley service hubs covering the city and surrounding region.",
    coverageContext: "We provide certified services across all Roanoke neighborhoods, the City Market, and Roanoke Valley dining corridors.",
    industriesExtra: "Blue Ridge Tourism & Brewery Dining",
    neighborhoods: [
      { name: "Downtown Roanoke", zip: "24011", desc: "City Market & downtown dining", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Grandin Village", zip: "24015", desc: "Walkable restaurant & cafe district", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Old Southwest", zip: "24016", desc: "Historic neighborhood eateries", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "South Roanoke", zip: "24014", desc: "Upscale community dining", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Williamson Road", zip: "24012", desc: "Commercial food corridor", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Vinton", zip: "24179", desc: "Valley community restaurants", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Salem", zip: "24153", desc: "Adjacent city dining & venues", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Hollins", zip: "24019", desc: "North valley community dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Cave Spring", zip: "24018", desc: "Suburban restaurants & cafes", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Tanglewood", zip: "24014", desc: "Mall food courts & chain dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Roanoke, VA",
  },

  // ─────────────────── WASHINGTON DC ───────────────────
  washington: {
    city: "Washington",
    state: "District of Columbia",
    stateAbbr: "DC",
    county: "Washington DC",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing in Washington, DC. NFPA 96 compliant services for restaurants, hotels, and government facility cafeterias.",
    metaKeywords:
      "kitchen hood cleaning Washington DC, commercial exhaust cleaning DC, restaurant hood cleaning Washington, NFPA 96 compliance Washington DC, grease trap cleaning Washington DC",
    heroDescription:
      "Washington DC's iconic restaurant scene — from Penn Quarter fine dining to Adams Morgan eclectic eateries — requires certified NFPA 96 exhaust hood maintenance. We serve all commercial kitchens throughout the District.",
    aboutParagraph1:
      "Washington, DC is one of the most vibrant dining cities in the United States with world-class restaurants, hotel kitchens, and government facility cafeterias spread across its historic neighborhoods. All commercial kitchens must maintain DC Health Department and NFPA 96 fire safety compliance.",
    aboutParagraph2:
      "We serve Capitol Hill restaurants, Georgetown waterfront dining, Adams Morgan eclectic eateries, hotel kitchens along 14th Street NW, and government building cafeterias throughout the District. Our certified technicians provide complete cleaning with compliance documentation.",
    dispatchContext: "Technicians dispatch from multiple DC-area service hubs for rapid same-day coverage across all DC wards.",
    coverageContext: "We cover all Washington DC neighborhoods, from Georgetown and Dupont Circle to Capitol Hill and Southwest Waterfront.",
    industriesExtra: "Government Building & Embassy Row Cafeterias",
    neighborhoods: [
      { name: "Georgetown", zip: "20007", desc: "Historic waterfront dining & upscale restaurants", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Capitol Hill", zip: "20003", desc: "Political district restaurants & cafes", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Adams Morgan", zip: "20009", desc: "Eclectic international restaurant district", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "14th Street NW", zip: "20005", desc: "Trendy dining & restaurant row", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Penn Quarter / Chinatown", zip: "20001", desc: "Entertainment district dining hub", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Dupont Circle", zip: "20036", desc: "Upscale restaurants & Embassy Row dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Southwest Waterfront / The Wharf", zip: "20024", desc: "Waterfront food hall & seafood", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "U Street NW", zip: "20009", desc: "Cultural dining district", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "NoMa", zip: "20002", desc: "Emerging restaurant & dining district", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Foggy Bottom", zip: "20037", desc: "Hotel dining & GWU campus kitchens", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Washington, DC",
  },

  // ─────────────────── MD COUNTIES ───────────────────
  "montgomery-county": {
    city: "Montgomery County",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Montgomery County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing throughout Montgomery County, MD. NFPA 96 compliant services for restaurants and commercial kitchens across the entire county.",
    metaKeywords:
      "kitchen hood cleaning Montgomery County MD, commercial exhaust cleaning Montgomery County, restaurant hood cleaning Montgomery County, NFPA 96 compliance Montgomery County MD",
    heroDescription:
      "Crossaire provides certified NFPA 96 kitchen exhaust cleaning throughout Montgomery County, MD — from Bethesda and Rockville to Gaithersburg and Silver Spring. We serve all commercial kitchens countywide.",
    aboutParagraph1:
      "Montgomery County, MD is the most populous county in Maryland with a diverse and thriving restaurant scene spanning wealthy suburbs, international restaurant corridors, and major commercial districts. All commercial kitchens must comply with NFPA 96 fire safety standards.",
    aboutParagraph2:
      "We serve restaurants throughout all Montgomery County cities including Bethesda, Rockville, Gaithersburg, Silver Spring, and Wheaton. Our certified technicians provide complete exhaust cleaning with compliance stickers and photo documentation.",
    dispatchContext: "Technicians dispatch from multiple Montgomery County service hubs for rapid countywide coverage.",
    coverageContext: "We provide certified services across all Montgomery County cities, towns, and commercial districts.",
    industriesExtra: "Biotech & Federal Agency Campus Dining",
    neighborhoods: [
      { name: "Bethesda", zip: "20814", desc: "Upscale dining & restaurant district", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Rockville", zip: "20850", desc: "Dense restaurant corridor", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Silver Spring", zip: "20910", desc: "Diverse international dining scene", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Gaithersburg", zip: "20877", desc: "International restaurant district", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Wheaton", zip: "20902", desc: "International food corridor", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Germantown", zip: "20876", desc: "Commercial dining strip", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Potomac", zip: "20854", desc: "Upscale community restaurants", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Chevy Chase", zip: "20815", desc: "High-end dining & hotel kitchens", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Kensington", zip: "20895", desc: "Historic town dining & antique row cafes", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Burtonsville", zip: "20866", desc: "Commercial food corridor", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Montgomery County, MD",
  },
  "prince-georges-county": {
    city: "Prince George's County",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Prince George's County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing throughout Prince George's County, MD. NFPA 96 compliant services for restaurants and commercial kitchens countywide.",
    metaKeywords:
      "kitchen hood cleaning Prince Georges County MD, commercial exhaust cleaning Prince Georges, restaurant hood cleaning PG County, NFPA 96 compliance Prince Georges County MD",
    heroDescription:
      "Crossaire provides certified NFPA 96 kitchen exhaust cleaning throughout Prince George's County, MD — from College Park and Greenbelt to Hyattsville and Bowie. We serve all commercial kitchens countywide.",
    aboutParagraph1:
      "Prince George's County, MD is a diverse and growing county adjacent to Washington DC with a vibrant restaurant and food service scene. From University of Maryland campus dining to diverse international restaurants along Route 1 and Route 301, all kitchens must comply with NFPA 96.",
    aboutParagraph2:
      "We serve restaurants throughout PG County including Hyattsville, College Park, Greenbelt, Bowie, and Waldorf. Our certified technicians provide complete exhaust cleaning with compliance stickers and photo documentation.",
    dispatchContext: "Technicians dispatch from multiple Prince George's County service hubs for rapid countywide coverage.",
    coverageContext: "We provide certified services across all Prince George's County cities, towns, and commercial districts.",
    industriesExtra: "UMD Campus & Government Facility Dining",
    neighborhoods: [
      { name: "Hyattsville", zip: "20782", desc: "Arts district & Route 1 dining", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "College Park", zip: "20740", desc: "UMD campus & Route 1 restaurants", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Greenbelt", zip: "20770", desc: "Community dining & NASA area", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Bowie", zip: "20716", desc: "Suburban dining & food courts", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Laurel", zip: "20707", desc: "Route 1 commercial dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Upper Marlboro", zip: "20772", desc: "County seat dining & commercial kitchens", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Bladensburg", zip: "20710", desc: "Route 1 commercial food corridor", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Oxon Hill", zip: "20745", desc: "MGM National Harbor & Tanger area dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Suitland", zip: "20746", desc: "Community dining & institutional kitchens", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Largo", zip: "20774", desc: "Mixed-use commercial dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Prince George's County, MD",
  },
  "anne-arundel-county": {
    city: "Anne Arundel County",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Anne Arundel County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing throughout Anne Arundel County, MD. NFPA 96 compliant services for restaurants countywide.",
    metaKeywords:
      "kitchen hood cleaning Anne Arundel County MD, commercial exhaust cleaning Anne Arundel, restaurant hood cleaning Anne Arundel County, NFPA 96 compliance Anne Arundel MD",
    heroDescription:
      "Crossaire provides certified NFPA 96 kitchen exhaust cleaning throughout Anne Arundel County, MD — from Annapolis and Glen Burnie to Odenton and Pasadena. We serve all commercial kitchens countywide.",
    aboutParagraph1:
      "Anne Arundel County, MD encompasses the state capital Annapolis and major commercial hubs like Glen Burnie and Odenton. From waterfront seafood restaurants to BWI Airport concessions, all commercial kitchens must comply with NFPA 96 fire safety standards.",
    aboutParagraph2:
      "We serve restaurants throughout all Anne Arundel County communities. Our certified technicians provide complete exhaust cleaning with compliance stickers and photo documentation across the entire county.",
    dispatchContext: "Technicians dispatch from our primary Glen Burnie service hub covering all Anne Arundel County zones.",
    coverageContext: "We provide certified services across all Anne Arundel County cities, waterfront communities, and commercial districts.",
    industriesExtra: "BWI Airport & Waterfront Dining Facilities",
    neighborhoods: [
      { name: "Annapolis", zip: "21401", desc: "Waterfront & historic district dining", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Glen Burnie", zip: "21061", desc: "Commercial dining hub", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Odenton", zip: "21113", desc: "Fort Meade area restaurants", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Pasadena", zip: "21122", desc: "Waterfront community dining", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Severna Park", zip: "21146", desc: "Upscale community restaurants", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Crofton", zip: "21114", desc: "Planned community dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Severn", zip: "21144", desc: "NSA area commercial kitchens", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Linthicum", zip: "21090", desc: "BWI Airport area dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Millersville", zip: "21108", desc: "Suburban community restaurants", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Brooklyn Park", zip: "21225", desc: "Working community dining spots", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Anne Arundel County, MD",
  },
  "howard-county": {
    city: "Howard County",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Howard County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing throughout Howard County, MD. NFPA 96 compliant services for restaurants and commercial kitchens countywide.",
    metaKeywords:
      "kitchen hood cleaning Howard County MD, commercial exhaust cleaning Howard County, restaurant hood cleaning Howard County, NFPA 96 compliance Howard County MD",
    heroDescription:
      "Crossaire provides certified NFPA 96 kitchen exhaust cleaning throughout Howard County, MD — from Columbia and Ellicott City to Jessup and Savage. We serve all commercial kitchens countywide.",
    aboutParagraph1:
      "Howard County, MD is consistently ranked one of the best places to live in the US with a vibrant restaurant scene in Columbia's village centers, Old Ellicott City, and along the Route 40 corridor. All commercial kitchens must maintain NFPA 96 compliance.",
    aboutParagraph2:
      "We serve restaurants throughout Howard County including Columbia, Ellicott City, Elkridge, Jessup, and Savage. Our certified technicians provide complete exhaust cleaning with compliance stickers and photo documentation.",
    dispatchContext: "Technicians dispatch from Howard County service hubs covering all county communities.",
    coverageContext: "We provide certified services across all Howard County cities, Columbia village centers, and commercial districts.",
    industriesExtra: "Corporate Campus & Gateway Business Park Dining",
    neighborhoods: [
      { name: "Columbia Town Center", zip: "21044", desc: "Main dining hub & restaurants", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Old Ellicott City", zip: "21043", desc: "Historic district restaurants", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Elkridge", zip: "21075", desc: "Local eateries & commercial dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Jessup", zip: "20794", desc: "Industrial area food services", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Savage", zip: "20763", desc: "Historic mill town dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Scaggsville", zip: "20723", desc: "Suburban dining & local restaurants", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Gateway Business Park", zip: "21046", desc: "Corporate cafeterias & dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Turf Valley", zip: "21042", desc: "Resort & hotel dining facilities", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Long Reach", zip: "21045", desc: "Village center restaurants", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Owen Brown", zip: "21044", desc: "Community dining & local cafes", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Howard County, MD",
  },
  "baltimore-county": {
    city: "Baltimore County",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Baltimore County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing throughout Baltimore County, MD. NFPA 96 compliant services for restaurants and commercial kitchens countywide.",
    metaKeywords:
      "kitchen hood cleaning Baltimore County MD, commercial exhaust cleaning Baltimore County, restaurant hood cleaning Baltimore County, NFPA 96 compliance Baltimore County MD",
    heroDescription:
      "Crossaire provides certified NFPA 96 kitchen exhaust cleaning throughout Baltimore County, MD — from Towson and Catonsville to Dundalk, Owings Mills, and Essex. We serve all commercial kitchens countywide.",
    aboutParagraph1:
      "Baltimore County, MD wraps around Baltimore City and is home to a vast and varied restaurant scene, from the Towson county seat and Catonsville's Frederick Road strip to waterfront diners in Dundalk and upscale dining in Owings Mills. All commercial kitchens must maintain NFPA 96 fire safety compliance.",
    aboutParagraph2:
      "We serve restaurants throughout all Baltimore County communities including Towson, Catonsville, Dundalk, Owings Mills, and Essex. Our certified technicians provide complete exhaust cleaning with compliance stickers and photo documentation countywide.",
    dispatchContext: "Technicians dispatch from multiple Baltimore County depots for rapid countywide coverage.",
    coverageContext: "We provide certified services across all Baltimore County cities, waterfront communities, and commercial districts.",
    industriesExtra: "Towson University & Hospital Campus Dining",
    neighborhoods: [
      { name: "Towson", zip: "21204", desc: "County seat dining & university hub", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Catonsville", zip: "21228", desc: "Frederick Road restaurant strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Dundalk", zip: "21222", desc: "Waterfront diners & taverns", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Owings Mills", zip: "21117", desc: "Upscale community & mall dining", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Essex", zip: "21221", desc: "Waterfront community restaurants", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Parkville", zip: "21234", desc: "Suburban dining & local eateries", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Pikesville", zip: "21208", desc: "Community dining & delis", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Cockeysville", zip: "21030", desc: "Hunt Valley corridor dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "White Marsh", zip: "21236", desc: "Mall food courts & chain restaurants", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Reisterstown", zip: "21136", desc: "Main Street community dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Baltimore County, MD",
  },
  "harford-county": {
    city: "Harford County",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Harford County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing throughout Harford County, MD. NFPA 96 compliant services for restaurants and commercial kitchens countywide.",
    metaKeywords:
      "kitchen hood cleaning Harford County MD, commercial exhaust cleaning Harford County, restaurant hood cleaning Harford County, NFPA 96 compliance Harford County MD",
    heroDescription:
      "Crossaire provides certified NFPA 96 kitchen exhaust cleaning throughout Harford County, MD — from the Bel Air county seat and Aberdeen to Havre de Grace, Edgewood, and Abingdon. We serve all commercial kitchens countywide.",
    aboutParagraph1:
      "Harford County, MD sits along the I-95 corridor northeast of Baltimore, anchored by the Bel Air county seat and home to Aberdeen Proving Ground, the historic waterfront city of Havre de Grace, and growing Route 40 dining. All commercial kitchens must comply with NFPA 96 fire safety standards.",
    aboutParagraph2:
      "We serve restaurants throughout all Harford County communities including Bel Air, Aberdeen, Havre de Grace, Edgewood, and Abingdon. Our certified technicians provide complete exhaust cleaning with compliance stickers and photo documentation countywide.",
    dispatchContext: "Technicians dispatch from Harford County service hubs covering the Bel Air and I-95 corridors.",
    coverageContext: "We provide certified services across all Harford County cities, waterfront communities, and commercial corridors.",
    industriesExtra: "Aberdeen Proving Ground Military Dining",
    neighborhoods: [
      { name: "Bel Air", zip: "21014", desc: "County seat restaurants & cafes", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Aberdeen", zip: "21001", desc: "Route 40 & military area dining", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Havre de Grace", zip: "21078", desc: "Historic waterfront dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Edgewood", zip: "21040", desc: "Commercial corridor restaurants", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Abingdon", zip: "21009", desc: "Retail centers & fast food", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Joppatowne", zip: "21085", desc: "Community dining & local eateries", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Fallston", zip: "21047", desc: "Suburban commercial kitchens", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Forest Hill", zip: "21050", desc: "Local eateries & food establishments", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Jarrettsville", zip: "21084", desc: "Rural dining & catering services", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Churchville", zip: "21028", desc: "Community dining & catering kitchens", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Harford County, MD",
  },
  "carroll-county": {
    city: "Carroll County",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Carroll County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing throughout Carroll County, MD. NFPA 96 compliant services for restaurants and commercial kitchens countywide.",
    metaKeywords:
      "kitchen hood cleaning Carroll County MD, commercial exhaust cleaning Carroll County, restaurant hood cleaning Carroll County, NFPA 96 compliance Carroll County MD",
    heroDescription:
      "Crossaire provides certified NFPA 96 kitchen exhaust cleaning throughout Carroll County, MD — from the Westminster county seat and Eldersburg to Sykesville, Hampstead, and Taneytown. We serve all commercial kitchens countywide.",
    aboutParagraph1:
      "Carroll County, MD is a largely agricultural county northwest of Baltimore, anchored by the Westminster county seat and McDaniel College, with growing commercial dining along the Liberty Road and Route 26 corridors in Eldersburg. All commercial kitchens must maintain NFPA 96 fire safety compliance.",
    aboutParagraph2:
      "We serve restaurants throughout all Carroll County communities including Westminster, Eldersburg, Sykesville, Hampstead, and Manchester. Our certified technicians provide complete exhaust cleaning with compliance stickers and photo documentation countywide.",
    dispatchContext: "Technicians dispatch from Carroll County service hubs covering Westminster and the Route 26 corridor.",
    coverageContext: "We provide certified services across all Carroll County towns, farm-country venues, and commercial corridors.",
    industriesExtra: "Farm-to-Table & Event Venue Kitchens",
    neighborhoods: [
      { name: "Westminster", zip: "21157", desc: "County seat & Main Street dining", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Eldersburg", zip: "21784", desc: "Liberty Road commercial strip", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Sykesville", zip: "21784", desc: "Historic town restaurants & cafes", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Hampstead", zip: "21074", desc: "Local restaurants & food spots", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Manchester", zip: "21102", desc: "Rural community dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Taneytown", zip: "21787", desc: "Small-town diners & eateries", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Mount Airy", zip: "21771", desc: "Border-town commercial dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Finksburg", zip: "21048", desc: "Route 140 community dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "New Windsor", zip: "21776", desc: "Rural dining & catering services", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Union Bridge", zip: "21791", desc: "Small community food facilities", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Carroll County, MD",
  },
  "frederick-county": {
    city: "Frederick County",
    state: "Maryland",
    stateAbbr: "MD",
    county: "Frederick County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing throughout Frederick County, MD. NFPA 96 compliant services for restaurants, breweries, and commercial kitchens countywide.",
    metaKeywords:
      "kitchen hood cleaning Frederick County MD, commercial exhaust cleaning Frederick County, restaurant hood cleaning Frederick County, NFPA 96 compliance Frederick County MD",
    heroDescription:
      "Crossaire provides certified NFPA 96 kitchen exhaust cleaning throughout Frederick County, MD — from Downtown Frederick and Urbana to Brunswick, Middletown, and Thurmont. We serve all commercial kitchens countywide.",
    aboutParagraph1:
      "Frederick County, MD is one of Maryland's fastest-growing counties, anchored by the city of Frederick's vibrant Market Street brewery and restaurant district and home to Fort Detrick, with expanding dining in Urbana, Middletown, and the Route 15 corridor. All commercial kitchens must maintain NFPA 96 fire safety compliance.",
    aboutParagraph2:
      "We serve restaurants throughout all Frederick County communities including Frederick, Urbana, Walkersville, Brunswick, and Middletown. Our certified technicians provide complete exhaust cleaning with compliance stickers and photo documentation countywide.",
    dispatchContext: "Technicians dispatch from Frederick County service hubs with broad coverage across the city and county.",
    coverageContext: "We provide certified services across all Frederick County cities, valley communities, and commercial corridors.",
    industriesExtra: "Craft Brewery & Winery Kitchens",
    neighborhoods: [
      { name: "Downtown Frederick", zip: "21701", desc: "Market Street restaurants & breweries", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Urbana", zip: "21704", desc: "Fast-growing commercial food district", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Walkersville", zip: "21793", desc: "Community dining & local eateries", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Brunswick", zip: "21716", desc: "Riverside town restaurants", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Middletown", zip: "21769", desc: "Valley community dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "New Market", zip: "21774", desc: "Historic Main Street dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Thurmont", zip: "21788", desc: "Gateway-to-Catoctin dining", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Emmitsburg", zip: "21727", desc: "College town & community dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Ballenger Creek", zip: "21703", desc: "Suburban restaurant operations", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Myersville", zip: "21773", desc: "Rural dining & roadside eateries", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Frederick County, MD",
  },

  // ─────────────────── VA COUNTIES ───────────────────
  "fairfax-county": {
    city: "Fairfax County",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Fairfax County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing throughout Fairfax County, VA. NFPA 96 compliant services for restaurants and commercial kitchens countywide.",
    metaKeywords:
      "kitchen hood cleaning Fairfax County VA, commercial exhaust cleaning Fairfax County, restaurant hood cleaning Fairfax County VA, NFPA 96 compliance Fairfax County VA",
    heroDescription:
      "Crossaire provides certified NFPA 96 kitchen exhaust cleaning throughout Fairfax County, VA — from Tysons and McLean to Reston, Herndon, Springfield, and beyond. We serve all commercial kitchens countywide.",
    aboutParagraph1:
      "Fairfax County, VA is the most populous jurisdiction in Virginia and home to a world-class restaurant scene spanning luxury hotel kitchens, tech corporate cafeterias, and vibrant neighborhood dining districts. All commercial kitchens must comply with NFPA 96.",
    aboutParagraph2:
      "We serve restaurants throughout all Fairfax County communities. Our certified technicians provide complete exhaust cleaning with compliance documentation countywide.",
    dispatchContext: "Technicians dispatch from multiple Northern Virginia service hubs for rapid countywide Fairfax coverage.",
    coverageContext: "We provide certified services across all Fairfax County cities, tech corridors, and commercial dining districts.",
    industriesExtra: "Tech Campus & Pentagon Corridor Dining",
    neighborhoods: [
      { name: "Tysons", zip: "22102", desc: "Premier dining & hotel corridor", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "McLean", zip: "22101", desc: "Upscale dining & country clubs", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Reston", zip: "20190", desc: "Town center & tech campus dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Herndon", zip: "20170", desc: "Dulles corridor restaurants", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Springfield", zip: "22150", desc: "Town center & I-95 corridor dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Fairfax City", zip: "22030", desc: "City center restaurants", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Burke", zip: "22015", desc: "Suburban community restaurants", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Chantilly", zip: "20151", desc: "Route 50 & Dulles area dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Annandale", zip: "22003", desc: "Korean dining corridor", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Alexandria (Fairfax)", zip: "22312", desc: "Franconia & Kingstowne dining", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Fairfax County, VA",
  },
  "loudoun-county": {
    city: "Loudoun County",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Loudoun County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing throughout Loudoun County, VA. NFPA 96 compliant services for restaurants and commercial kitchens countywide.",
    metaKeywords:
      "kitchen hood cleaning Loudoun County VA, commercial exhaust cleaning Loudoun County, restaurant hood cleaning Loudoun VA, NFPA 96 compliance Loudoun County VA",
    heroDescription:
      "Crossaire provides certified NFPA 96 kitchen exhaust cleaning throughout Loudoun County, VA — from Leesburg and Ashburn to Sterling and Purcellville. We serve all commercial kitchens in America's fastest-growing county.",
    aboutParagraph1:
      "Loudoun County, VA is America's fastest-growing county with a rapidly expanding restaurant scene in Leesburg, Ashburn, and the Dulles Tech corridor. Wine country venues, data center campus cafeterias, and suburban dining all require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve restaurants throughout all Loudoun County communities. Our certified technicians provide complete exhaust cleaning with compliance stickers and photo documentation countywide.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs for rapid Loudoun County coverage.",
    coverageContext: "We provide certified services across all Loudoun County cities, wine country venues, and commercial dining districts.",
    industriesExtra: "Wine Country Winery & Vineyard Kitchens",
    neighborhoods: [
      { name: "Leesburg", zip: "20175", desc: "Historic downtown restaurants", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Ashburn", zip: "20147", desc: "One Loudoun & tech corridor dining", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Sterling", zip: "20164", desc: "Commercial food strip operations", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Dulles Town Center", zip: "20166", desc: "Mall food courts & dining", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "South Riding", zip: "20152", desc: "Planned community restaurants", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Broadlands", zip: "20148", desc: "Community dining & local cafes", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Purcellville", zip: "20132", desc: "Wine country dining & breweries", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Middleburg", zip: "20117", desc: "Upscale wine country restaurants", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Lansdowne", zip: "20176", desc: "Resort & conference center dining", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Brambleton", zip: "20148", desc: "Town center restaurants", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Loudoun County, VA",
  },
  "prince-william-county": {
    city: "Prince William County",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Prince William County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing throughout Prince William County, VA. NFPA 96 compliant services for restaurants countywide.",
    metaKeywords:
      "kitchen hood cleaning Prince William County VA, commercial exhaust cleaning Prince William County, restaurant hood cleaning Prince William VA, NFPA 96 compliance Prince William County VA",
    heroDescription:
      "Crossaire provides certified NFPA 96 kitchen exhaust cleaning throughout Prince William County, VA — from Woodbridge and Manassas to Dumfries and Gainesville. We serve all commercial kitchens countywide.",
    aboutParagraph1:
      "Prince William County, VA is a rapidly growing county south of Fairfax with major commercial centers at Woodbridge's Potomac Mills, Manassas, and Gainesville. All commercial kitchens must comply with NFPA 96 fire safety standards.",
    aboutParagraph2:
      "We serve restaurants throughout all Prince William County communities. Our certified technicians provide complete exhaust cleaning with compliance stickers and photo documentation countywide.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs for rapid Prince William County coverage.",
    coverageContext: "We provide certified services across all Prince William County cities, Route 1 corridor, and commercial districts.",
    industriesExtra: "Potomac Mills & I-95 Corridor Dining Facilities",
    neighborhoods: [
      { name: "Woodbridge", zip: "22191", desc: "Potomac Mills & Route 1 dining", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Manassas", zip: "20110", desc: "Downtown & Route 28 restaurants", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Gainesville", zip: "20155", desc: "Fast-growing dining community", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Dale City", zip: "20193", desc: "Community restaurants & local dining", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Dumfries", zip: "22025", desc: "Historic community dining", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Lake Ridge", zip: "22192", desc: "Planned community restaurants", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Bristow", zip: "20136", desc: "Suburban dining corridor", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Haymarket", zip: "20169", desc: "Commercial food strip", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Occoquan", zip: "22125", desc: "Historic waterfront dining", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Montclair", zip: "20025", desc: "Community restaurants & local eateries", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Prince William County, VA",
  },
  "arlington-county": {
    city: "Arlington County",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Arlington County",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing throughout Arlington County, VA. NFPA 96 compliant services for all restaurants and commercial kitchens.",
    metaKeywords:
      "kitchen hood cleaning Arlington County VA, commercial exhaust cleaning Arlington County, restaurant hood cleaning Arlington VA, NFPA 96 compliance Arlington County VA",
    heroDescription:
      "Crossaire provides certified NFPA 96 kitchen exhaust cleaning throughout Arlington County, VA — from Clarendon and Rosslyn to Ballston and Pentagon City. We serve all commercial kitchens in the county.",
    aboutParagraph1:
      "Arlington County, VA is an urban county directly across the Potomac from Washington DC with one of the most vibrant restaurant scenes in the DC metro area. Clarendon bars, Pentagon City restaurants, and Amazon HQ2 cafeterias all require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve restaurants throughout all Arlington County neighborhoods. Our certified technicians provide complete exhaust cleaning with compliance stickers and photo documentation.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs for rapid Arlington County coverage.",
    coverageContext: "We provide certified services across all Arlington County neighborhoods, from the Orange Line to the Blue Line corridor.",
    industriesExtra: "Pentagon & Amazon HQ2 Campus Dining",
    neighborhoods: [
      { name: "Clarendon", zip: "22201", desc: "Bar & restaurant district", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Rosslyn", zip: "22209", desc: "High-rise hotel & corporate dining", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "Pentagon City", zip: "22202", desc: "Mall food courts & hotel dining", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Ballston", zip: "22203", desc: "Urban mixed-use restaurant corridor", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Columbia Pike", zip: "22204", desc: "Diverse international restaurant strip", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Crystal City", zip: "22202", desc: "Amazon HQ2 & corporate dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Lyon Village", zip: "22201", desc: "Upscale community restaurants", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Shirlington", zip: "22206", desc: "Restaurant village & upscale dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Aurora Hills", zip: "22202", desc: "Residential community dining", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Nauck", zip: "22204", desc: "Historic community restaurants", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Arlington County, VA",
  },
  "alexandria-city": {
    city: "Alexandria City",
    state: "Virginia",
    stateAbbr: "VA",
    county: "Alexandria City",
    metaDescription:
      "Certified commercial kitchen hood cleaning & exhaust system degreasing throughout Alexandria City, VA. NFPA 96 compliant services for historic Old Town restaurants and commercial kitchens.",
    metaKeywords:
      "kitchen hood cleaning Alexandria City VA, commercial exhaust cleaning Alexandria, restaurant hood cleaning Old Town Alexandria, NFPA 96 compliance Alexandria VA",
    heroDescription:
      "Crossaire provides certified NFPA 96 kitchen exhaust cleaning throughout Alexandria City, VA — from historic Old Town waterfront dining to Del Ray and Landmark. We serve all commercial kitchens citywide.",
    aboutParagraph1:
      "Alexandria City, VA is an independent city with one of the most beloved dining destinations in the DC metro area, centered in Old Town along King Street. From historic taverns to modern fine dining and waterfront seafood, all commercial kitchens require NFPA 96 certified exhaust cleaning.",
    aboutParagraph2:
      "We serve restaurants throughout all Alexandria City neighborhoods. Our certified technicians provide complete exhaust cleaning with compliance stickers and photo documentation citywide.",
    dispatchContext: "Technicians dispatch from Northern Virginia service hubs for rapid Alexandria City coverage.",
    coverageContext: "We provide certified services across all Alexandria City neighborhoods, from Old Town waterfront to Eisenhower Valley.",
    industriesExtra: "Historic Old Town Waterfront & Embassy Dining",
    neighborhoods: [
      { name: "Old Town", zip: "22314", desc: "Historic restaurants & fine dining", services: ["Hood Cleaning", "Fan Repairs", "Grease Removal"] },
      { name: "Del Ray", zip: "22301", desc: "Artisan food & local dining scene", services: ["Exhaust System Cleaning", "NFPA Audits", "Compliance Stickers"] },
      { name: "King Street Corridor", zip: "22314", desc: "Main dining entertainment strip", services: ["Hood Cleaning", "Filter Exchange", "Duct Cleaning"] },
      { name: "Waterfront District", zip: "22314", desc: "Waterfront dining & seafood", services: ["Fan Installs", "Grease Trap Pumping", "Compliance"] },
      { name: "Landmark", zip: "22306", desc: "Shopping center food courts", services: ["Hood Cleaning", "PCS Maintenance", "Steam Cleaning"] },
      { name: "Huntington", zip: "22303", desc: "Metro area community dining", services: ["Canopy Degreasing", "Belt Replacement", "Fan Repairs"] },
      { name: "Potomac Yard", zip: "22301", desc: "Mixed-use dining development", services: ["Duct Cleaning", "Grease Removal", "Compliance Stickers"] },
      { name: "Eisenhower Valley", zip: "22314", desc: "Corporate & commercial dining", services: ["Hood Cleaning", "PCS Maintenance", "NFPA Compliance"] },
      { name: "Mount Vernon Avenue", zip: "22301", desc: "Del Ray restaurant row", services: ["Exhaust Fan Repairs", "Grease Trap Pumping", "Hood Cleaning"] },
      { name: "Seminary Road", zip: "22304", desc: "Community restaurants & cafes", services: ["Duct Cleaning", "Fan Installs", "NFPA 96 Compliance"] },
    ],
    faqCityContext: "Alexandria City, VA",
  },
};

export default locationsData;
