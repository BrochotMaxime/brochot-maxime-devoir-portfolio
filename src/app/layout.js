import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-nunito",
    display: "swap",
});

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import BootstrapClient from '@/components/BootstrapClient'

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
    title: 'Portfolio – John Doe',
    description: 'Portfolio de John Doe, développeur web full stack, développé en tant que projet final de la partie front-end de la formation du Centre Européen de Formation.',
    icon: '/favicon.ico'
}

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className={nunito.className}>
                <BootstrapClient />
                <Header />
                <main className="flex-grow-1">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}