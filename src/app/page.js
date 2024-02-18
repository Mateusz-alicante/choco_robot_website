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
        </div>
      </div>
    </main>
  );
}
