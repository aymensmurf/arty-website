const SocialMedia = ({ spotify, youtube, soundcloud }) => {
	return (
		<>
			<div className="social-media">
				{spotify && (
					<a
						href={
							spotify.startsWith("https://") ? spotify : `https://${spotify}`
						}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/img/spotify.svg" alt="Spotify" />
					</a>
				)}
				{youtube && (
					<a
						href={
							youtube.startsWith("https://") ? youtube : `https://${youtube}`
						}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/img/youtube.svg" alt="YouTube" />
					</a>
				)}
				{soundcloud && (
					<a
						href={
							soundcloud.startsWith("https://")
								? soundcloud
								: `https://${soundcloud}`
						}
						target="_blank"
						rel="noopener noreferrer"
						style={{ marginRight: 16 }}
					>
						<img src="/img/soundcloud.svg" alt="YouTube" />
					</a>
				)}
			</div>

			<style jsx>{`
				.social-media {
					display: flex;
					gap: 15px;
					cursor: pointer;
				}
			`}</style>
		</>
	);
};

export default SocialMedia;
