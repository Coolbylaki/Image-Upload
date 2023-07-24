"use client";

import { useImageContext } from "@/store/ImageContext";
import { useEffect, useState } from "react";
import { getDownloadURL } from "firebase/storage";

import Image from "next/image";
import checkSvg from "@/assets/check.svg";

import styles from "./page.module.css";

export default function Result() {
	const [imageUrl, setImageUrl] = useState("");
	const { imageRef } = useImageContext();

	useEffect(() => {
		const getUrl = async () => {
			if (imageRef) {
				const imgUrl = await getDownloadURL(imageRef);
				setImageUrl(imgUrl);
			}
		};

		getUrl();
	});

	return (
		<section className={styles.card}>
			<Image src={checkSvg} alt="Successful" />
			<h1 className={styles.title}>Uploaded Successfully!</h1>
			<Image
				src={imageUrl}
				alt="Your image"
				width={338}
				height={224}
				className={styles.img}
			/>
			<div className={styles.img__link}>
				<h2>{imageUrl}</h2>
				<button className={styles.img__btn}>
					<p>Copy</p>
				</button>
			</div>
		</section>
	);
}
