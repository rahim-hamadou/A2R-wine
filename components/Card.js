import styles from "../styles/Card.module.css";
import { FaShoppingBag, FaBars, FaUserAlt, FaMapMarker, FaHome } from "react-icons/fa";

import Link from "next/link";

function Card(props) {
	return (
		<div className={styles.cardType}>
			<div className={styles.cardText}>
				<div className={styles.textInfo}>
					<span className={styles.title}>{props.name}</span>
					<span className={styles.info}>{props.origin}</span>
					<span className={styles.info}>{props.description}</span>
				</div>
				<button>
					<Link href="/contactPage">
						<span>Contactez nous</span>
					</Link>
				</button>
			</div>
		</div>
	);
}

export default Card;
