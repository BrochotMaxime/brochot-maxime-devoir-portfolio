import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import BootstrapClient from '@/components/BootstrapClient'

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Portfolio – John Doe',
  description: 'Portfolio de John Doe, développeur web front-end'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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