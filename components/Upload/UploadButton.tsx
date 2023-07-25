"use client";

import { ChangeEvent, useRef } from "react";
import { imageDb } from "@/utils/firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import { useImageContext } from "@/store/ImageContext";

import styles from "./UploadButton.module.css";

type Props = {
	btnClass: string;
};

export default function Upload(props: Props) {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const { setImageRef } = useImageContext();
	const router = useRouter();

	const handleClick = () => {
		fileInputRef.current?.click();
	};

	const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		const file = files?.[0];

		if (files!.length > 1) {
			alert("Please select only one file!");
			return;
		}

		const fileExtension = file?.name.split(".").pop()?.toLowerCase();

		if (file && files.length === 1) {
			if (
				fileExtension === "jpg" ||
				fileExtension === "png" ||
				fileExtension === "jpeg"
			) {
				const imgRef = ref(imageDb, `files/${v4()}`);
				uploadBytes(imgRef, files?.[0]);

				setImageRef(imgRef);

				return router.push("/result");
			}
		}

		alert("Invalid file format. Please select correct file format!");
		return;
	};

	return (
		<>
			<input
				ref={fileInputRef}
				onChange={handleUpload}
				type="file"
				name="image"
				id="image"
				className={styles.inputEl}
				accept=".jpg, .jpeg, .png"
			/>
			<button onClick={handleClick} className={props.btnClass} type="button">
				Choose a file
			</button>
		</>
	);
}
