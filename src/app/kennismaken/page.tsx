import type { Metadata } from "next"
import { Suspense } from "react"
import { Paginakop } from "@/components/pagina"
import { SITE } from "@/lib/site"
import { Formulier } from "./formulier"

export const metadata: Metadata = {
  title: "Kennismaken",
  description: "Vertel wat je ziet in je vijver of tuin. Via WhatsApp of mail, in Stein en ongeveer 30 km daaromheen.",
}

export default function Kennismaken() {
  return (
    <>
      <Paginakop label={<><span>Kennismaken</span><span>Start een project</span></>} regels={["Vertel wat", "je ziet."]}>
        <p className="t-lead">Een paar zinnen is genoeg. Daarna kom ik kijken, en waar het kan krijg je een vaste prijs vooraf.</p>
      </Paginakop>

      <div className="rand sectie kennis">
        <Suspense fallback={null}>
          <Formulier />
        </Suspense>

        <aside className="kennis-direct" aria-label="Direct contact">
          <p className="t-mono t-accent">Liever direct</p>
          <dl className="feiten">
            <div><dt className="t-mono">WhatsApp</dt><dd><a href={SITE.whatsapp} className="kennis-link">{SITE.telefoon}</a></dd></div>
            <div><dt className="t-mono">Mail</dt><dd><a href={`mailto:${SITE.email}`} className="kennis-link">{SITE.email}</a></dd></div>
            <div><dt className="t-mono">Werkgebied</dt><dd>{SITE.werkgebied}</dd></div>
          </dl>
          <p className="t-klein t-zacht">Overdag ben ik meestal bij klanten aan het werk. Daarom liever WhatsApp of mail dan bellen: dat lees ik tussendoor.</p>
        </aside>
      </div>
    </>
  )
}
