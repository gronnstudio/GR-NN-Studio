// De kamers van voorstel B, met de vorm van hun opening (breedte / hoogte).
// Die vorm staat ook klein in het menu, zodat je ziet waar je heen loopt.
export const KAMERS = [
  { id: "entree", nr: "01", naam: "Entree", vorm: 3 / 4 },
  { id: "ontwerp", nr: "02", naam: "Ontwerp", vorm: 21 / 9 },
  { id: "beplanting", nr: "03", naam: "Beplanting", vorm: 1 },
  { id: "aanleg", nr: "04", naam: "Aanleg", vorm: 2 / 5 },
  { id: "water", nr: "05", naam: "Water", vorm: 16 / 9 },
  { id: "werk", nr: "06", naam: "Werk", vorm: 6 / 5 },
  { id: "studio", nr: "07", naam: "Studio", vorm: 1 },
  { id: "buiten", nr: "08", naam: "Naar buiten", vorm: 2 },
] as const
