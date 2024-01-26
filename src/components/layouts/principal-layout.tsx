import React from "react";
import Footer from "../main/footer";
import { type getDictionary } from "@/i18n/dictionaries";
import { Locale, useTranslations } from "@/i18n/i18n-config";

const PrincipalLayout = ({
  children,
  dictionary,
  lang,
}: {
  children: React.ReactNode;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  lang: Locale;
}) => {
  return (
    <>
      <main>{children}</main>
      <Footer dictionary={dictionary} lang={lang} />
    </>
  );
};

export default PrincipalLayout;
