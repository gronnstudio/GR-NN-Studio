import { SITE } from "@/lib/site"

// De bedrijfsgegevens in de vorm die de overgenomen juridische teksten
// verwachten (zelfde velden als in GRONN26).
export const BUSINESS = {
  name: SITE.naam,
  address: { street: SITE.adres.straat, postalCode: SITE.adres.postcode, city: SITE.adres.plaats },
  email: SITE.email,
  phone: SITE.telefoon,
  kvk: SITE.kvk,
  btw: SITE.btw,
  legalForm: SITE.rechtsvorm,
} as const
