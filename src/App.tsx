import type { JSX } from "react";
import Section from "@/components/section/Section";
import Title from "@/components/title/Title";
import { ThemeProvider } from "@/providers/theme/ThemeProvider";
import { TranslationProvider } from "@/providers/translation/TranslationProvider";
import { useTranslation } from "@/providers/translation/TranslationsContext";
import type { Theme } from "@/types/Theme";

/**
 * Root application component.
 *
 * Wraps the main app in providers
 * @returns {JSX.Element} JSX element representing the app layout
 */
export default function App(): JSX.Element {
    const theme: Theme = {
        textcolors: {
            header: "#dee9fcff",
            paragraph: "#abb5c2ff",
        },
    };

    const t = useTranslation("test");

    return (
        <TranslationProvider>
            <ThemeProvider theme={theme}>
                <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 grid grid-cols-3">
                    <div className="row-start-1 col-start-2 flex items-center justify-center">
                        <article className="w-full">
                            <Title text={t("mainArticle")} />
                            <Section className="w-full">
                                <Title text="Section 1" />
                                <Section className="w-full">
                                    <Title text="Subsection A" />
                                    <Title text="Subsection B" />
                                </Section>
                                <Title text="Section 2" />
                                <Section className="w-full">
                                    <Title text="Subsection C" />
                                    <Title text="Subsection D" />
                                </Section>
                            </Section>
                        </article>
                    </div>
                </div>
            </ThemeProvider>
        </TranslationProvider>
    );
}
