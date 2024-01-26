import LocaleSwitcher from "@/components/language-switcher";
import PrincipalLayout from "@/components/layouts/principal-layout";
import { getDictionary } from "@/i18n/dictionaries";
import { LangParams } from "@/i18n/i18n-config";

export default async function Home({ params: { lang } }: LangParams) {
  const dict = await getDictionary(lang);
  return (
    <PrincipalLayout dictionary={dict} lang={lang}>
      <LocaleSwitcher />
    </PrincipalLayout>
  );
}
