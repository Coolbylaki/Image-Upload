import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
	return (
		<section className={styles.card}>
			<h1 className={styles.title}>Upload your image</h1>
			<p className={styles.subtitle}>File should be Jpeg, Png...</p>
			<div className={styles["img-box"]}>
				<Image src={"./mountain.svg"} alt="Mountain image" width={115} height={90} />
				<p>Drag & Drop your image here</p>
			</div>
			<p>Or</p>

			<button className={styles.btn} type="button">
				Choose a file
			</button>
		</section>
	);
}
