import styles from "../styles/Admin.module.css";

function Admin(props) {
	return (
		<div className={styles.cardType}>
			<div className={styles.cardText}>
				<div className={styles.textInfo}>
					<span className={styles.title}>{props.name}</span>
					<span className={styles.info}>{props.origin}</span>
					<span className={styles.info}>{props.description}</span>
				</div>
			</div>
		</div>
	);
}

export default Admin;
