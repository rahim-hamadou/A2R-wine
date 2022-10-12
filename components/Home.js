import styles from "../styles/Home.module.css";
import { FaShoppingBag, FaBars, FaUserAlt, FaMapMarker, FaHome, FaInfoCircle } from "react-icons/fa";
import { FaKickstarterK } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

import Card from "./Card";

function Home() {
	// ETATS
	const [wines, setWines] = useState([]);
	const [places, setPlaces] = useState([]);

	// wines
	useEffect(() => {
		fetch("https://backend-a2r.vercel.app/wines")
			.then((response) => response.json())
			.then((data) => {
				setWines(data.allWines);
			});
	}, []);
	console.log(wines);

	// places
	useEffect(() => {
		fetch("https://backend-a2r.vercel.app/places")
			.then((response) => response.json())
			.then((data) => {
				setPlaces(data.allPlaces);
			});
	}, []);
	console.log(places);

	const wineInfo = wines.map((data) => {
		return <Card {...data} />;
	});

	return (
		<div>
			<div className={styles.homeTop}>
				<header className={styles.nav}>
					<div className={styles.iconPlus}>
						<div>
							<Link href="/">
								<span>
									<FaHome />
									Accueil
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
									Information
								</span>
							</Link>
						</div>
					</div>
				</header>
				<div className={styles.discover}>
					<div className={styles.focus}>
						<span>DECOUVRIR</span>
						<span>LE VRAI GOUT DU VINS</span>
					</div>
					<div className={styles.btnChoice}>
						<button className={styles.buy}>
							<a href="#who">Nous decouvrir</a>
						</button>
						<button className={styles.buy}>
							<a href="#order">nos produits</a>{" "}
						</button>
					</div>
				</div>
			</div>

			<main>
				<div id="who" className={styles.mainTop}>
					<div className={styles.mainTopTitle}>
						<span className={styles.titleOne}>Qui sommes nous</span>
						{/* <span className={styles.titleTwo}>ON SORT LES COUVERTS</span> */}
					</div>
					<div className={styles.mainTopImg}>
						{" "}
						<img src="/src/raisin.jpeg" alt="" />
					</div>
					<div className={styles.mainTopLink}>
						<h2>A2R connect</h2>

						<div className={styles.descriptionTest}>
							<p>Fondée il y a plusieurs années...</p>
							<p>Une société qui vous veut du bien.</p>
						</div>

						<div className={styles.contact}>
							<span>Contact: +237 </span>
							<span>Mail:a2r-connect@gmail.com</span>
						</div>
					</div>
				</div>
				<div id="order" className={styles.mainContent}>
					{wineInfo}
				</div>
			</main>
			<footer>
				<div className={styles.footer}>
					<span className={styles.linkFooter}>CONTACT</span>
					<span className={styles.linkFooter}>SUPPORT</span>
					<span className={styles.linkFooter}>ABOUT</span>
				</div>
			</footer>
		</div>
	);
}

export default Home;
