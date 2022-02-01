import SkillItem from "../widgets/SkillItem";

const About = ({
	description,
	spark,
	skills: {
		architectures,
		calligraphy,
		dances,
		genres,
		handcrafts,
		instruments,
		literatures,
		paintings,
		paintingtools,
		photographies,
		photographytools,
		sandarts,
		sculptures,
		skills,
		theatres,
	},
}) => {
	return (
		<>
			<div>
				{description && (
					<>
						<h3>About the Artist</h3>
						<p>{description}</p>
					</>
				)}

				<h3 style={{ marginTop: 31 }}>Skills</h3>
				<div className='skills'>
					{(genres || instruments) && (
						<SkillItem
							name='Music'
							skills={[
								{ title: "Genres", items: genres },
								{ title: "Instruments", items: instruments },
							]}
							spark={spark}
						/>
					)}
					{(paintings || paintingtools) && (
						<SkillItem
							name='Painting'
							skills={[
								{ title: "Styles", items: paintings },
								{ title: "Tools", items: paintingtools },
							]}
							spark={spark}
						/>
					)}
					{dances && <SkillItem name='Dance' skills={[{ title: "", items: dances }]} spark={spark} />}
					{theatres && <SkillItem name='Theater' skills={[{ title: "", items: theatres }]} spark={spark} />}
					{(photographies || photographytools) && (
						<SkillItem
							name='Photography'
							skills={[
								{ title: "Styles", items: photographies },
								{ title: "Tools", items: photographytools },
							]}
							spark={spark}
						/>
					)}
					{sculptures && <SkillItem name='Sculpture' skills={[{ title: "", items: sculptures }]} spark={spark} />}
					{architectures && (
						<SkillItem name='Architecture' skills={[{ title: "", items: architectures }]} spark={spark} />
					)}
					{literatures && <SkillItem name='Literature' skills={[{ title: "", items: literatures }]} spark={spark} />}
					{calligraphy && <SkillItem name='Calligraphy' skills={[{ title: "", items: calligraphy }]} spark={spark} />}
					{handcrafts && <SkillItem name='Hand Crafts' skills={[{ title: "", items: handcrafts }]} spark={spark} />}
					{sandarts && <SkillItem name='Sand Art' skills={[{ title: "", items: sandarts }]} spark={spark} />}
					{skills && <SkillItem name='Other Skills' skills={[{ title: "", items: skills }]} spark={spark} />}
				</div>
			</div>

			<style jsx>{`
				h3 {
					font-family: "Poppins";
					font-weight: 600;
					font-size: 18px;
					line-height: 44px;
					color: #151515;
				}

				p {
					font-family: "Poppins";
					font-weight: normal;
					font-size: 16px;
					line-height: 25px;
					text-align: left;
					color: #000;
					margin-top: 25px;
				}

				.skills {
					margin-left: 25px;
					display: flex;
					flex-direction: column-reverse;
				}
			`}</style>
		</>
	);
};

export default About;
