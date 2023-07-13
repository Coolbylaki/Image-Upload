import styles from "./LoadingBar.module.css";

export default function Loading() {
	return (
		<section className={styles.card}>
			<h3 className={styles.title}>Uploading...</h3>
			<div className={styles.bar}>
				<div className={styles.loading}></div>
			</div>
		</section>
	);
}
