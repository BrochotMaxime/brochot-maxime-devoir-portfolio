import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import BootstrapClient from '@/components/BootstrapClient'

export const metadata = {
  title: 'Portfolio – John Doe',
  description: 'Portfolio de John Doe, développeur web front-end'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
}
