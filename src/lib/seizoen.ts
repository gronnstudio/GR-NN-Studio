// Wat er per maand in een tuin speelt, en welk vak van GRØNN daarbij hoort.
// Algemene tuinkennis, geen beloftes; de gekoppelde vakken bestaan echt.

export const MAANDEN = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]

// Breedte van elke maandnaam in em, gemeten in Syne Bold met -0.055em
// spatiëring (9 nov 2026). Zo vult de maand op het omslag precies de breedte.
const BREEDTE = [3.799, 4.166, 3.108, 2.178, 1.88, 2.117, 1.695, 4.661, 5.656, 4.142, 5.377, 5.431]

export type Maand = { naam: string; nr: number; jaar: number; werk: string[]; vak: string; breedte: number }

const WERK: { werk: string[]; vak: string }[] = [
  { werk: ["De tuin rust: de beste tijd om een ontwerp te maken.", "Bladnet eraf, vijver met rust laten."], vak: "tuinontwerp" },
  { werk: ["Ontwerp afronden en materialen kiezen.", "Grondwerk plannen voor het voorjaar."], vak: "tuinontwerp" },
  { werk: ["Vijver opstarten: filter en pomp weer aan.", "Borders opschonen, eerste aanplant."], vak: "onderhoud" },
  { werk: ["Aanplanten zolang de grond vochtig is.", "Vijverplanten in manden zetten."], vak: "beplanting" },
  { werk: ["Nieuwe beplanting groeit in.", "Water op temperatuur: algen in de gaten houden."], vak: "beplanting" },
  { werk: ["Bloei. Droge weken: water geven.", "Vijverpeil bijhouden."], vak: "vijvers" },
  { werk: ["Droogte: gieten in de vroege ochtend.", "Bestrating en paden: droog weer is goed werkweer."], vak: "aanleg" },
  { werk: ["Terras of pad aanleggen voor het najaar.", "Ontwerp maken voor de najaarsaanplant."], vak: "aanleg" },
  { werk: ["Het plantseizoen begint: grond is warm en vochtig.", "Ontwerp voor de herfst rondmaken."], vak: "beplanting" },
  { werk: ["Vaste planten en bollen in de grond.", "Bladnet over de vijver voor het blad valt."], vak: "beplanting" },
  { werk: ["Najaarsbeurt: blad en slib uit de vijver.", "Borders laten staan: zaad en schuilplek voor dieren."], vak: "onderhoud" },
  { werk: ["Rust in de tuin. Bladnet eraf.", "Plannen voor het voorjaar maken."], vak: "tuinontwerp" },
]

export function dezeMaand(nu = new Date()): Maand {
  const i = nu.getMonth()
  return { naam: MAANDEN[i], nr: i + 1, jaar: nu.getFullYear(), breedte: BREEDTE[i], ...WERK[i] }
}

export const volgendeMaand = (nu = new Date()) => MAANDEN[(nu.getMonth() + 1) % 12]
