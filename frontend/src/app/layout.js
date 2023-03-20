import './uikit/dist/css/uikit.custom-theme.min.css';
import './uikit/dist/js/uikit.min.js';
import './uikit/dist/js/uikit-icons.min.js';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}