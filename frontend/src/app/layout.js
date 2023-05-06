'use client';
import './uikit/dist/css/uikit.custom-theme.min.css';
import './uikit/dist/js/uikit.min.js';
import './uikit/dist/js/uikit-icons.min.js';
import { useEffect } from 'react';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  useEffect(() => {
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
      // Safari tarayıcısında çalışacak olan kodlar buraya yazılır
      alert("Safari")
    } else {
      // Diğer tarayıcılarda çalışmayacak kodlar buraya yazılır
      alert("other")
      //alert('Bu yazılım sadece Safari tarayıcısında çalışır.');
      // Kullanıcıya bilgilendirme mesajı gösterilir
    }
  })
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}