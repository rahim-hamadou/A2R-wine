import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

function Contact(props) {
	// ETAT
	const [places, setPlaces] = useState([]);

	// admins
	useEffect(() => {
		fetch("https://backend-a2r.vercel.app/places")
			.then((response) => response.json())
			.then((data) => {
				setPlaces(data.allPlaces);
			});
	}, []);

	let placeVente;

	for (let i = 0; i < places.length; i++) {
		console.log(places[i]);
		placeVente = (
			<div className={styles.placecard}>
				<h3>nom: {places[i].name}</h3>
				<p>{places[i].description}</p>
				<p>{places[i].phone}</p>
				<p>dd</p>
			</div>
		);
	}

	return (
		<div className={styles.cardText}>
			<div className={styles.textInfoAdmin}>
				<div className={styles.textContainer}>
					<h2>Points de vente & Contacts</h2>
					<div className={styles.placecontainer}>
						<div className={styles.placecard}>
							<h3>
								Nom: <span>Super Marché</span>
							</h3>
							<h3>
								Adresse: <span>Douala</span>
							</h3>
							<h3>
								Numero: <span>+237</span>
							</h3>
							<h3>
								Livraison: <span>Possible</span>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
