import { compareSparkToTitle, skillNameToIcon } from "../../utils/funcs";
import Pill from "./Pill";

const SkillItem = ({ name, skills, spark }) => {
	if (skills.map((skill) => skill.items).flat().length <= 0) {
		return <></>;
	}

	return (
		<div style={{ order: compareSparkToTitle(spark, name) ? 1 : null }}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					marginTop: 16,
				}}>
				<div style={{ position: "relative" }}>
					<img src={skillNameToIcon(name)} style={styles.skillImg} />

					{compareSparkToTitle(spark, name) ? (
						<img
							src='/img/profile/spark.png'
							style={{
								position: "absolute",
								top: -4,
								right: 6,
								width: 22,
								height: 22,
								resizeMode: "contain",
							}}
						/>
					) : null}
				</div>
				<p style={styles.skillTitle}>{name}</p>
			</div>

			{skills.length > 0
				? skills.map(
						(skill, i) =>
							skill.items &&
							skill.items.length > 0 &&
							!skill.items.includes("") && (
								<div key={i} style={{ marginTop: 10, marginLeft: 60 }}>
									{skill.title ? <p style={styles.skillText}>{skill.title}</p> : null}

									<div
										style={{
											marginTop: 10,
											display: "flex",
											flexWrap: "wrap",
											gap: 15,
										}}>
										{skill.items.map((item, j) => (
											<Pill key={i} title={item} isActive />
										))}
									</div>
								</div>
							)
				  )
				: null}
		</div>
	);
};

const styles = {
	skillImg: {
		width: 42,
		height: 42,
		resizeMode: "contain",
		marginRight: 17,
	},
	skillTitle: {
		fontSize: 16,
		fontWeight: 800,
		textTransform: "capitalize",
	},
	skillText: {
		fontSize: 14,
		textTransform: "capitalize",
	},
};

export default SkillItem;
