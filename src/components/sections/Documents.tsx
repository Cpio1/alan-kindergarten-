import { ExternalLink, FileText, FolderOpen } from "lucide-react";
import { documents, documentsSection } from "@/data/kindergarten";
import { cn, Float, Sparkle, Star } from "../shared/Decor";
import { Reveal } from "../shared/Reveal";
import { ButtonLink, SectionTitle } from "../shared/ui";

/** Құжаттар бөлімі. Деректер: src/data/kindergarten.ts → documents. */
export function Documents() {
  const hasFiles = documents.files.length > 0;
  const hasDrive = Boolean(documents.driveUrl);
  const empty = !hasFiles && !hasDrive;

  return (
    <div className="relative overflow-hidden bg-white py-10 lg:py-16 xl:py-20">
      <Float className="left-[6%] top-10 hidden w-10 lg:block" twinkle>
        <Star color="#5CCBBC" />
      </Float>
      <div className="container-site">
        <Reveal y={14}>
          <SectionTitle eyebrow="Ресми ақпарат" color="sun" title={documentsSection.title} subtitle={documentsSection.subtitle} />
        </Reveal>

        <Reveal
          y={16}
          className="relative mx-auto mt-7 max-w-[860px] overflow-hidden rounded-[32px_32px_32px_10px] bg-gradient-to-br from-lav-soft via-[#f3f1ff] to-sun-soft p-5 ring-1 ring-lav/30 sm:p-7 lg:mt-10 lg:rounded-[48px_48px_48px_14px] lg:p-10"
        >
          <Sparkle className="absolute right-6 top-6 size-5" color="#A9A2EF" />
          <div className={cn("flex flex-col items-center gap-5 text-center lg:flex-row lg:gap-8 lg:text-left", !empty && "lg:items-start")}>
            <span className="grid size-20 shrink-0 place-items-center blob bg-white text-lav-deep shadow-soft lg:size-24">
              <FolderOpen className="size-9 lg:size-11" strokeWidth={1.8} aria-hidden="true" />
            </span>

            <div className="w-full min-w-0">
              {empty ? (
                <p className="font-display text-[18px] font-semibold leading-snug text-ink lg:text-[22px]">{documentsSection.empty}</p>
              ) : (
                <>
                  {hasFiles && (
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {documents.files.map((f) => (
                        <li key={f.href}>
                          <a
                            href={f.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex min-h-[52px] items-center gap-3 rounded-2xl bg-white px-4 py-3 text-left font-semibold text-ink shadow-soft transition-transform hover:-translate-y-0.5"
                          >
                            <FileText className="size-5 shrink-0 text-coral-deep" aria-hidden="true" />
                            <span className="min-w-0 flex-1">{f.title}</span>
                            <ExternalLink className="size-4 shrink-0 text-ink-soft" aria-hidden="true" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  {hasDrive && (
                    <ButtonLink href={documents.driveUrl} external variant="primary" className={cn("w-full sm:w-auto", hasFiles && "mt-4")}>
                      <FolderOpen className="size-5" aria-hidden="true" />
                      {documentsSection.driveLabel}
                    </ButtonLink>
                  )}
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
