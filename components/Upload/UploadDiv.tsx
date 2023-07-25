"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { imageDb } from "@/utils/firebase-config";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import { useImageContext } from "@/store/ImageContext";
import { uploadBytes, ref } from "firebase/storage";

import styles from "./UploadDiv.module.css";

export default function UploadDiv() {
	const [uploadedImage, setUploadedImage] = useState<File | null>(null);
	const { setImageRef } = useImageContext();
	const router = useRouter();

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		if (e.dataTransfer.files.length > 1) {
			alert("Please choose one image!");
			return;
		}

		const file = e.dataTransfer.files[0];
		handleImageFile(file);
	};

	const handleImageFile = (file: File) => {
		if (!file || !file.type.startsWith("image/")) {
			alert("Please choose an image file.");
			return;
		}

		setUploadedImage(file);
	};

	useEffect(() => {
		const handleFurtherUpload = (image: File) => {
			if (image) {
				const imgRef = ref(imageDb, `files/${v4()}`);
				uploadBytes(imgRef, image);

				setImageRef(imgRef);

				router.push("/result");
			}
		};

		if (uploadedImage) {
			handleFurtherUpload(uploadedImage);
		}
	}, [uploadedImage, router, setImageRef]);

	return (
		<div className={styles["img-box"]} onDragOver={handleDragOver} onDrop={handleDrop}>
			<Image
				src={"./mountain.svg"}
				alt="Mountain image"
				width={115}
				height={90}
				priority={true}
			/>
			<p>Drag & Drop your image here</p>
		</div>
	);
}
