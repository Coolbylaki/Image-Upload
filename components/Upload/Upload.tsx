"use client";

import { ChangeEvent, useRef } from "react";
import { imageDb } from "@/utils/firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import { useImageContext } from "@/store/ImageContext";
import styles from "./Upload.module.css";

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
		const file = event.target.files?.[0];
		if (file) {
			const imgRef = ref(imageDb, `files/${v4()}`);
			uploadBytes(imgRef, file);

			setImageRef(imgRef);

			router.push("/result");
		}
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
			/>
			<button onClick={handleClick} className={props.btnClass} type="button">
				Choose a file
			</button>
		</>
	);
}
