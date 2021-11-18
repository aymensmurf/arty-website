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
            start
            end
            description
            nbrparticipants
            host {
                _id
                name
                avatar
                username
            }
            participants {
                user {
                  username
                  name
                  avatar
                }
            }

            instruments
            paintings
            paintingtools
            dances
            theatres
            photographies
            genres
            skills
            sculptures
            architectures
            literatures
            calligraphy
            handcrafts
            sandarts
            photographytools
        }
    }
`

export const SEARCH_WORKSHOPS = gql`
  query SearchForWorkshop(
    $genres: [String],
    $instruments: [String],
    $paintings: [String],
    $paintingtools: [String],
    $dances: [String],
    $theatres: [String],
    $photographies: [String],
    $photographytools: [String],
    $skills: [String],
    $sculptures: [String],
    $architectures: [String],
    $literatures: [String],
    $calligraphy: [String],
    $handcrafts: [String],
    $sandarts: [String],
  )
  {
    searchForWorkshop(
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