"use client";

import { ChangeEvent, useRef, useState } from "react";
import { imageDb } from "@/utils/firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import styles from "./Upload.module.css";
import { useRouter } from "next/navigation";

type Props = {
	btnClass: string;
};

export default function Upload(props: Props) {
	const [imageLink, setImageLink] = useState<File | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const router = useRouter();

	const handleClick = () => {
		fileInputRef.current?.click();
	};

	const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setImageLink(file);
			const imgRef = ref(imageDb, `files/${v4()}`);
			uploadBytes(imgRef, file);
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
