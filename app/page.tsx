import UploadButton from "@/components/Upload/UploadButton";
import UploadDiv from "@/components/Upload/UploadDiv";

import styles from "./page.module.css";

export default function Home() {
	return (
		<section className={styles.card}>
			<h1 className={styles.title}>Upload your image</h1>
			<p className={styles.subtitle}>File should be Jpeg, Png...</p>
			<UploadDiv />
			<p>Or</p>
			<UploadButton btnClass={styles.btn} />
		</section>
	);
}
