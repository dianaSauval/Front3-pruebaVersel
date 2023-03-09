import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './nav.module.css'
import logo from '../../../public/logo.png'

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={95} height={85}/>
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  )
}

export default Navbar