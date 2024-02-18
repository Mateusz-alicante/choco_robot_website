"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import defaultImage from "../../../../public/frame.jpg";
import styles from "./Image.module.css";

export default function ShowImage() {
  const [imageSource, setImageSource] = useState("");
  const [connected, setConnected] = useState(false);

  const getImage = async () => {
    console.log("Getting image");
    const response = await fetch("http://172.20.10.11:4000/api/get_image");
    const data = await response.blob();
    setImageSource(URL.createObjectURL(data));

    if (response.status == 200) setConnected(true);
    setTimeout(getImage, 1000);
  };

  useEffect(() => {
    setImageSource(defaultImage);
    getImage();
  }, []);

  return (
    <div>
      {!connected && (
        <h2 style={{ color: "beige", fontFamily: "cursive" }}>
          Please connect to a local device
        </h2>
      )}
      <div className={styles.imageContainer}>
        <Image src={imageSource} alt="Camera feed" fill="true" />
      </div>
    </div>
  );
}
