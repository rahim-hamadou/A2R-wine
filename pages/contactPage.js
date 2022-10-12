import styles from "../styles/Home.module.css";
import { FaShoppingBag, FaBars, FaUserAlt, FaMapMarker, FaHome, FaInfoCircle } from "react-icons/fa";
import { FaKickstarterK } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

import Contact from "../components/Contact";
function ContactPage() {
	return (
		<div className={styles.cardType}>
			<div className={styles.homeTop}>
				<header className={styles.nav}>
					<div className={styles.iconPlus}>
						<div>
							<Link href="/">
								<span>
									<FaHome />
									Acceuil
								</span>
							</Link>
						</div>
					</div>
					<div className={styles.titleName}>
						<p>COVIDES & A2R</p>
					</div>
					<div className={styles.iconPlus}>
						<div>
							<Link href="/contactPage">
								<span>
									<FaInfoCircle />
									<span>Information</span>
								</span>
							</Link>
						</div>
					</div>
				</header>
				<Contact />
				<div className={styles.discover}>
					<div className={styles.focus}>
						<span>DECOUVRIR</span>
						<span>LE VRAI GOUT DU VINS</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactPage;
