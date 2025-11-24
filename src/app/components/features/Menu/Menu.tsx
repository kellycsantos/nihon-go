'use client';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components";
import styles from './menu.module.scss';
import { useState } from "react";
import Fuji from '@/../public/assets/monte-fuji.png'; 



export const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);


  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image src={Fuji} alt="logo" width={60} height={60} />
        <h3>Nihon? Go!</h3>
      </Link>

      <ul className={showMenu ? styles.show_menu : '' }>
        <li>
          <Link href="#destinations">Destinations</Link>
        </li>
        <li>
          <Link href="#experiences">Experiences</Link>
        </li>
        <li>
          <Link href="#travel-tips">Travel Tips</Link>
        </li>

        <li> <Button variable="primary" size="full_width" text="Plan Your Trip"/> </li>
      </ul>

      <button className={`${styles.menu_icon } ${showMenu ? styles.opened_menu : ''}`} onClick={() => setShowMenu(!showMenu)}></button>
      
      </nav>
  );
};