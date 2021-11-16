import { gql } from '@apollo/client'

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
            media {
                _id
                url
                type
                createdAt
            }
            workshops {
                _id
                title
                banner
                slug
            }
        }
    }
`

export const SEARCH_USERS = gql`
  query Query(
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
    $location: String,
    $keyword: String
  )
  {
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
        location: $location
        keyword: $keyword
    ) {
        _id
        name
        avatar
        username
    }
  }
`