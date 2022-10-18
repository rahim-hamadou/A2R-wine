import React from "react";
import styles from "../styles/VideoPlayer.module.css";

import ReactPlayer from "react-player";

function VideoPlayer() {
	return (
		<div className={styles.playerContain}>
			<h2 className={styles.playerTitle}>Degustation organisée par a2r-connect</h2>
			<iframe
				className={styles.player}
				width="85%"
				height="350px"
				src="https://www.youtube.com/embed/o3fdPSltZ_0"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			{/* <ReactPlayer
				className={styles.player}
				width="100%"
				controls="true"
				url="https://www.youtube.com/watch?v=o3fdPSltZ_0"
			/> */}
		</div>
	);
}

export default VideoPlayer;
