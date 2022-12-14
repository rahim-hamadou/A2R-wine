import styles from "../styles/Home.module.css";
import { FaShoppingBag, FaBars, FaUserAlt, FaMapMarker, FaHome, FaInfoCircle } from "react-icons/fa";
import VideoPlayer from "./VideoPlayer";
import Head from "next/head";
import Image from "next/image";

import { FaKickstarterK } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

import Card from "./Card";

function Home() {
	// ETATS
	const [wines, setWines] = useState([]);
	const [places, setPlaces] = useState([]);
	const [allwines, setAllWines] = useState([]);
	const [castellers, setCastellers] = useState([]);

	// wines
	useEffect(() => {
		fetch("https://backend-a2r.vercel.app/wines")
			.then((response) => response.json())
			.then((data) => {
				setWines(data.allWines);
			});
	}, []);
	// console.log(wines);

	// places
	useEffect(() => {
		fetch("https://backend-a2r.vercel.app/places")
			.then((response) => response.json())
			.then((data) => {
				setPlaces(data.allPlaces);
			});
	}, []);
	// console.log(places);

	// allwine
	useEffect(() => {
		fetch("https://backend-a2r.vercel.app/allwines")
			.then((response) => response.json())
			.then((data) => {
				setAllWines(data.allWines);
			});
	}, []);
	// console.log(allwines);

	// casteller
	useEffect(() => {
		fetch("https://backend-a2r.vercel.app/casteller")
			.then((response) => response.json())
			.then((data) => {
				setCastellers(data.CastellerWine);
			});
	}, []);
	// console.log(castellers);

	const wineInfo = wines.map((data) => {
		return <Card {...data} />;
	});

	return (
		<div>
			<Head>
				<title>Next App</title>
				<link rel="icon" href="/frontend/public/favicon_io/android-chrome-192x192.png" />
			</Head>
			<div className={styles.homeTop}>
				<header className={styles.nav}>
					<div className={styles.iconPlus}>
						<div>
							<Link href="/">
								<span>
									{/* <FaHome /> */}
									Accueil
								</span>
							</Link>
						</div>
					</div>
					<div className={styles.titleName}>
						<p>COVIDES & A2RCP</p>
					</div>
					<div className={styles.iconPlus}>
						<div>
							<Link href="/contactPage">
								<span>
									{/* <FaInfoCircle /> */}
									Informations
								</span>
							</Link>
						</div>
					</div>
				</header>
				<div className={styles.discover}>
					<div className={styles.focus}>
						<span>DECOUVRIR</span>
						<span>le vrai go??t du vin</span>
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
						<Image src={"/src/raisin 2.jpeg"} alt="raisin" width={600} height={300} />
					</div>
					<VideoPlayer />
					<div className={styles.mainTopLink}>
						<h2>A2R Connect Plus</h2>

						<div className={styles.descriptionTest}>
							<p>Fond??e il y a plusieurs ann??es...</p>
							<p>Une soci??t?? qui vous veut du bien.</p>
						</div>

						<div className={styles.contact}>
							{/* <span>Contact: +237 </span> */}
							{/* <span>Mail:a2r-connect@gmail.com</span> */}
						</div>
					</div>
				</div>
				<div id="order" className={styles.mainContent}>
					{wineInfo}
				</div>
			</main>
			<footer>
				<div className={styles.footer}>
					<span className={styles.linkFooter}>
						<Link href="/contactPage">CONTACT</Link>
					</span>

					<span className={styles.linkFooter}>
						<Link href="https://rahim-hamadou.netlify.app/">SUPPORT</Link>
					</span>
				</div>
			</footer>
		</div>
	);
}

export default Home;
