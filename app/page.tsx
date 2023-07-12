import styles from "./page.module.css";

export default function Home() {
	return (
		<section className={styles.card}>
			<h1 className={styles.title}>Upload your image</h1>
			<p className={styles.subtitle}>File should be Jpeg, Png...</p>
			<p>Or</p>
			<button className={styles.btn} type="button">
				Choose a file
			</button>
		</section>
	);
}
