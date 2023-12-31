
import { Footer, Header, TopBanner } from "@/design-system";



export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <TopBanner />
            <Header />
            {children}
            <Footer />
        </main>
    );
}
