"use client";

import { motion } from "motion/react";
import { contacts } from "@/data/kindergarten";
import { WhatsAppIcon } from "./Icons";

/** Тіркелген WhatsApp батырмасы (safe-area ескеріледі). */
export function WhatsAppFab() {
  return (
    <motion.a
      href={contacts.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp арқылы жазу"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed right-[calc(14px+env(safe-area-inset-right))] z-40 grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-10px_rgb(37_211_102/0.7)] ring-[3px] ring-white safe-bottom lg:right-6 lg:size-14"
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 motion-safe:animate-ping [animation-duration:2.6s]" />
      <WhatsAppIcon className="relative size-6" />
    </motion.a>
  );
}
