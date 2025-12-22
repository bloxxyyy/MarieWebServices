import type { JSX } from "react";
import Section from "@/components/section/Section";
import Title from "@/components/title/Title";
import { ThemeProvider } from "@/providers/theme/ThemeProvider";
import { TranslationProvider } from "@/providers/translation/TranslationProvider";
import { useTranslation } from "@/providers/translation/TranslationsContext";
import type { Theme } from "@/types/Theme";
import Article from "./components/article/Article";
import Document from "./components/document/Document";

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
                    <div className="col-start-2 flex flex-col items-center justify-center">
                        <Title text="Document Title" center={false} />
                        <Section className="w-full">
                            <Title text={t("mainArticle")} />
                            <Section className="w-full">
                                <Title text="Section 1" />
                                <Article className="w-full">
                                    <Title text="Subsection A" />
                                    <Title text="Subsection B" />
                                </Article>
                                <Title text="Section 2" />
                                <Section className="w-full">
                                    <Title text="Subsection C" />
                                    <Title text="Subsection D" />
                                </Section>
                            </Section>
                        </Section>
                        <Section className="w-full">
                            <Title text="Document Title" shouldTryUnderline={false} />
                            <Section className="w-full">
                                <Title text="Subsection C" />
                                <Title text="Subsection D" />
                            </Section>
                        </Section>
                    </div>
                </div>
            </ThemeProvider>
        </TranslationProvider>
    );
}
