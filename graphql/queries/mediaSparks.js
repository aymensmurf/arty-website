import { gql } from "@apollo/client";

export const GET_MEDIA_SPARKS = gql`
	query getMediaSparks($media: ID!) {
		getMediaSparks(media: $media) {
			clicks
		}
	}
`;
