// De foto's van de site: echte opnames uit Nicks werk, met maat en een
// beschrijving van wat er werkelijk te zien is.

export type Beeld = { src: string; breed: number; hoog: number; alt: string }

const f = (naam: string, breed: number, hoog: number, alt: string): Beeld => ({ src: `/foto/${naam}.jpg`, breed, hoog, alt })

export const FOTO = {
  terrasTafel: f("terras-tafel", 1600, 900, "Terras van rode tegels met een bistrotafel, stoeltjes en een bak vol blauwe plumbago"),
  terrasNick: f("terras-geulle-nick", 1000, 1333, "Nick op het pas gelegde terras in Geulle, met een schop in de hand"),
  terrasPad: f("terras-geulle-pad", 1000, 1333, "Smal pad van grote betontegels langs de gevel in Geulle"),
  klinkers: f("klinkers", 1600, 900, "Rode klinkers in visgraatverband"),
  handen: f("handen-aardappels", 600, 800, "Twee handen met net geoogste rode aardappels"),
  plukborder: f("plukborder", 1600, 1200, "Plukborder met rudbeckia, lavendel en allium langs een wit hek"),
  eetbaar: f("eetbare-border", 1600, 1200, "Verse kruiden en blad uit de eetbare border op een snijplank"),
  vlinder: f("vlinderborder", 1600, 1200, "Vlinderborder met roze zonnehoed en duizendknoop"),
  vijver: f("vijver-overzicht", 2000, 1500, "De gerenoveerde vijvertuin met keien, treurwilg en een pad van klinkers"),
  waterval: f("waterval", 2000, 1500, "Water dat over keien in de vijver valt, met canna aan de rand"),
  witteBorder: f("witte-border", 1600, 1200, "Witte border met vingerhoedskruid tussen fris groen"),
  lamp: f("tuinlamp", 1600, 900, "Een tuinlamp die in de schemering een warme lichtvlek geeft"),
  egel: f("egel", 1600, 1200, "Een egel van dichtbij, 's avonds op een stoeprand"),
  zwammen: f("zwammen-mos", 1200, 1600, "Kleine paddenstoelen op een kussen van mos"),
  honingzwam: f("honingzwam", 1200, 1600, "Honingzwammen in dichte trossen op een oude stronk"),
  weide: f("weide-tegenlicht", 1600, 1200, "Hoog gras en bloeiende kruiden in laag tegenlicht"),
  nick: f("nick-espresso", 1200, 1600, "Nick Peters met een espresso in de hand"),
  nickMoestuin: f("nick-moestuin", 600, 800, "Nick lachend in de moestuin met een handvol aardappels"),
} satisfies Record<string, Beeld>
