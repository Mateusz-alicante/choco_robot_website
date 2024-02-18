"use client";
import { useEffect, useState } from "react";
import ShowImage from "./Components/Image/Image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <h1 className={styles.title}>Love is in the air!</h1>
          <ShowImage />

          <div className={styles.colorSelection}>
            <h2 className={styles.title}>Favorite color</h2>
            <div className={styles.colorButtons}>
              <button className={styles.redButton}>Red</button>
              <button className={styles.greenButton}>Green</button>
              <button className={styles.blueButton}>Blue</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
