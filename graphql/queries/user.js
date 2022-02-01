import { gql } from "@apollo/client";

export const GET_USER_BY_USERNAME = gql`
	query GetUserByUsername($username: String!) {
		getUserByUsername(username: $username) {
			_id
			name
			username
			genres
			instruments
			paintings
			paintingtools
			dances
			theatres
			photographies
			skills
			sculptures
			architectures
			literatures
			calligraphy
			handcrafts
			sandarts
			photographytools
			phoneNumber
			location
			avatar
			soundcloud
			youtube
			spotify
			description
			spark
			media {
				_id
				url
				type
				createdAt
				sparks {
					_id
					clicks
				}
				user {
					_id
					name
					avatar
					username
				}
			}
			workshops {
				_id
				title
				banner
				slug
			}
		}
	}
`;

export const SEARCH_USERS = gql`
	query SearchForUser(
		$genres: [String]
		$instruments: [String]
		$paintings: [String]
		$paintingtools: [String]
		$dances: [String]
		$theatres: [String]
		$photographies: [String]
		$photographytools: [String]
		$skills: [String]
		$sculptures: [String]
		$architectures: [String]
		$literatures: [String]
		$calligraphy: [String]
		$handcrafts: [String]
		$sandarts: [String]
	) {
		searchForUser(
			genres: $genres
			instruments: $instruments
			paintings: $paintings
			paintingtools: $paintingtools
			dances: $dances
			theatres: $theatres
			photographies: $photographies
			photographytools: $photographytools
			skills: $skills
			sculptures: $sculptures
			architectures: $architectures
			literatures: $literatures
			calligraphy: $calligraphy
			handcrafts: $handcrafts
			sandarts: $sandarts
		) {
			_id
			name
			avatar
			username
		}
	}
`;

export const GET_FEATURED_USERS = gql`
	query GetFeaturedUsers($limit: Int) {
		getFeaturedUsers(limit: $limit) {
			_id
			name
			avatar
			username
		}
	}
`;
