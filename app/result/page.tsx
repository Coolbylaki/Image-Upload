"use client";

import { useImageContext } from "@/store/ImageContext";
import { useEffect } from "react";

export default function Result() {
	const { imageRef } = useImageContext();

	useEffect(() => {
		console.log(imageRef);
	}, [imageRef]);

	return (
		<>
			<h1>Hello</h1>
		</>
	);
}
