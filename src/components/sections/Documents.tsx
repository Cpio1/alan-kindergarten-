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
    <div className="relative overflow-hidden bg-white py-7 lg:py-10 2xl:py-14">
      <Float className="left-[6%] top-8 hidden w-7 lg:block" twinkle>
        <Star color="#5CCBBC" />
      </Float>
      <div className="container-site">
        <Reveal y={14}>
          <SectionTitle eyebrow="Ресми ақпарат" color="sun" title={documentsSection.title} subtitle={documentsSection.subtitle} />
        </Reveal>

        <Reveal
          y={16}
          className="relative mx-auto mt-5 max-w-[780px] overflow-hidden rounded-[26px_26px_26px_8px] bg-gradient-to-br from-lav-soft via-[#f3f1ff] to-sun-soft p-4 ring-1 ring-lav/30 sm:p-6 lg:mt-6 lg:rounded-[36px_36px_36px_12px] lg:p-7"
        >
          <Sparkle className="absolute right-5 top-5 size-4" color="#A9A2EF" />
          <div className={cn("flex flex-col items-center gap-3.5 text-center lg:flex-row lg:gap-6 lg:text-left", !empty && "lg:items-start")}>
            <span className="grid size-14 shrink-0 place-items-center blob bg-white text-lav-deep shadow-soft lg:size-[72px]">
              <FolderOpen className="size-7 lg:size-8" strokeWidth={1.8} aria-hidden="true" />
            </span>

            <div className="w-full min-w-0">
              {empty ? (
                <p className="font-display text-[16px] font-semibold leading-snug text-ink lg:text-[19px]">{documentsSection.empty}</p>
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
                            className="flex min-h-[46px] items-center gap-3 rounded-2xl bg-white px-3.5 py-2.5 text-left font-semibold text-ink shadow-soft transition-transform hover:-translate-y-0.5"
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
