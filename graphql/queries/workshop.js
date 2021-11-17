import { gql } from '@apollo/client';

export const GET_FEATURED_WORKSHOPS = gql`
    query GetFeaturedWorkshops {
        getFeaturedWorkshops {
            _id
            title
            banner
            slug
            host {
                _id
                name
                avatar
                username
            }
        }
    }
`

export const GET_WORKSHOP_BY_SLUG = gql`
    query GetWorkshopBySlug($slug: String!) {
        getWorkshopBySlug(slug: $slug) {
            _id
            title
            banner
            slug
            host {
                _id
                name
                avatar
                username
            }
        }
    }
`