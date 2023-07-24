"use client";

import React, { useContext, useState, createContext } from "react";
import { StorageReference } from "firebase/storage";

type ImageContextType = {
	imageRef: StorageReference | null;
	setImageRef: (url: StorageReference | null) => void;
};

const ImageContext = createContext<ImageContextType>({
	imageRef: null,
	setImageRef: () => {},
});

export function useImageContext() {
	return useContext(ImageContext);
}

export function ImageProvider({ children }: { children: React.ReactNode }) {
	const [imageRef, setImageRef] = useState<StorageReference | null>(null);

	return (
		<ImageContext.Provider value={{ imageRef, setImageRef }}>
			{children}
		</ImageContext.Provider>
	);
}
