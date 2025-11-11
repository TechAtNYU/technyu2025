import { client } from './client'
import { TeamMember } from '../types'

// GROQ query for team members
const teamMembersQuery = `
  *[_type == "teamMember"]
  | order(order asc)
  {
    name,
    title,
    category,
    "slug": slug.current,
    "linkedinUrl": linkedinUrl,
    "imageUrl": imageUrl.asset->url,
    "fadeIn": select(
      defined(fadeInImage.asset) => fadeInImage.asset->url,
      null
    )
  }
`

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const members = await client.fetch(teamMembersQuery)
    return members
  } catch (error) {
    console.error('Error fetching team members from Sanity:', error)
    return []
  }
}

// GROQ query for individual e-board bio
const eboardBioQuery = `
  *[_type == "eboardBio" && slug == $slug][0]{
    name,
    slug,
    shortDescription,
    "profileImage": {
      "url": profileImage.asset->url,
      "alt": profileImage.alt
    },
    "position": *[_type == "teamMember" && slug.current == ^.slug][0].title,
    "category": *[_type == "teamMember" && slug.current == ^.slug][0].category,
    "linkedinUrl": *[_type == "teamMember" && slug.current == ^.slug][0].linkedinUrl,
    timeline[]{
      year,
      title,
      order
    } | order(year desc, order asc),
    qa[]{
      question,
      answer,
      "media": select(
        defined(media.asset) => {
          "url": media.asset->url,
          "alt": media.alt
        },
        null
      )
    }
  }
`

export async function getEboardBio(slug: string) {
  try {
    const bio = await client.fetch(eboardBioQuery, { slug })
    return bio
  } catch (error) {
    console.error('Error fetching e-board bio from Sanity:', error)
    return null
  }
}
