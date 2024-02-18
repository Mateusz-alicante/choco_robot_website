"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./Image.module.css";

export default function ShowImage() {
  const [imageSource, setImageSource] = useState("");

  const getImage = async () => {
    console.log("Getting image");
    const response = await fetch("http://100.66.76.99:4000/api/get_image");
    const data = await response.blob();
    setImageSource(URL.createObjectURL(data));
    setTimeout(getImage, 500);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <main>
      <div className={styles.imageContainer}>
        <Image src={imageSource} alt="Camera feed" fill="true" />
      </div>
    </main>
  );
}