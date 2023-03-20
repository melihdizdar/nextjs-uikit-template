import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='uk-section'>
        <div className='uk-container'>
          <div className='uk-h1 test'>Hello World</div>
        </div>
      </div>
    </main>
  )
}
