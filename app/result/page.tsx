"use client";

import { useImageContext } from "@/store/ImageContext";
import { useEffect, useState } from "react";
import { getDownloadURL } from "firebase/storage";

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
		<>
			<h1>Hello</h1>
		</>
	);
}
