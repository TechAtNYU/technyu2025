import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getEboardBio } from '@/lib/sanity/queries'
import { EboardBio } from '@/lib/types'
import { Metadata } from 'next'
import { client } from '@/lib/sanity/client'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { TimelineNav } from '@/components/team_profiles/timeline-nav'
import { Timeline, exampleTimelineData } from '@/components/team_profiles/timeline'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all e-board bios at build time
export async function generateStaticParams() {
  const bios = await client.fetch<{ slug: string }[]>(
    `*[_type == "eboardBio"]{ "slug": slug }`
  )
  
  return bios.map((bio) => ({
    slug: bio.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const bio = await getEboardBio(slug)

  if (!bio) {
    return {
      title: 'E-Board Member Not Found',
    }
  }

  return {
    title: `${bio.name} | Tech@NYU Team`,
    description: bio.shortDescription || `Meet ${bio.name}, a member of the Tech@NYU e-board.`,
    openGraph: {
      title: `${bio.name} | Tech@NYU Team`,
      description: bio.shortDescription || `Meet ${bio.name}, a member of the Tech@NYU e-board.`,
      images: bio.profileImage.url ? [bio.profileImage.url] : [],
    },
  }
}

export default async function EboardBioPage({ params }: PageProps) {
  const { slug } = await params
  const bio: EboardBio | null = await getEboardBio(slug)

  if (!bio) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Profile Section */}
      <div className="container pt-24 md:pt-40 lg:pt-48">
          {/* Profile Container - Responsive Layout */}
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 w-screen px-[5svw]">
            {/* Left Column - Info */}
            <div className="space-y-4 lg:space-y-2 order-2 lg:order-1 lg:w-[50svw]">
              {/* Badges - Display position and category */}
              <div className="flex flex-wrap lg:justify-between gap-3 lg:pb-4">
                {bio.position && (
                  <span className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full uppercase tracking-wide">
                    {bio.position}
                  </span>
                )}
                {bio.category && (
                  <span className="px-4 py-2 text-white text-sm font-medium rounded-full uppercase tracking-wide">
                    {bio.category}
                  </span>
                )}
              </div>

              {/* Name */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight pt-10">
                {bio.name}
              </h1>
{/* 
              <div className="flex flex-wrap lg:justify-between gap-3">
                {bio.position && (
                  <span className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full uppercase tracking-wide">
                    {bio.position}
                  </span>
                )}
                {bio.category && (
                  <span className="px-4 py-2 text-white text-sm font-medium rounded-full uppercase tracking-wide">
                    {bio.category}
                  </span>
                )}
              </div> */}

              {/* Short Description */}
              {bio.shortDescription && (
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  {bio.shortDescription}
                </p>
              )}

              {/* Connect Section */}
              {/* <div className="py-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Connect</p>
                <div className="flex gap-6">
                  {bio.linkedinUrl && (
                    <Link
                      href={bio.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-400 transition-colors uppercase text-sm tracking-wide font-medium"
                    >
                      LinkedIn
                    </Link>
                  )}
                 
                </div>
              </div> */}
            </div>

            {/* Right Column - Profile Image (bottom on mobile/tablet, right on large) */}
            <div className="relative w-full lg:w-auto aspect-[4/5] lg:max-w-[30svw] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 order-1 lg:order-2">
              <Image
                src={bio.profileImage.url}
                alt={bio.profileImage.alt || bio.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
      </div>

      {/* Separator */}
      {/* Content Section with Timeline Navigation */}
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className='w-screen absolute left-0 min-h-[15svh] bg-[#0a0a0a] z-5 flex justify-between flex-col'>
            <div className="py-4 pt-12 w-full px-[5svw]">
                <div className="flex gap-6">
                  {bio.linkedinUrl && (
                    <Link
                      href={bio.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-400 transition-colors uppercase text-sm tracking-wide font-medium"
                    >
                      LinkedIn
                    </Link>
                  )}
                 
                </div>
              </div> 
            <Separator className='w-full h-[2px] bg-white/40'/>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 ">
            {/* Left Sidebar - Timeline Navigation */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-0">
                <TimelineNav />
              </div>
            </div>
                  
            {/* Main Content */}
            <div className="lg:col-span-9 space-y-24 pt-[20svh] mb-20">
              {/* Background Section with Timeline */}
              <section id="background" className="scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Background</h2>
                <div className="space-y-8">
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    Here&apos;s how they rose to their current role at Tech@NYU:
                  </p>
                  <Timeline events={exampleTimelineData} />
                </div>
              </section>

              {/* About Section (Q&A) */}
              {bio.qa && bio.qa.length > 0 && (
                <section id="about" className="scroll-mt-32">
                  <div className="space-y-16">
                    {bio.qa.map((item, index) => (
                      <div key={index} className="space-y-6">
                        {/* Question */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                          {item.question}
                        </h3>
                        
                        {/* Answer */}
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed whitespace-pre-wrap max-w-3xl">
                          {item.answer}
                        </p>
                        
                        {/* Optional Media */}
                        {item.media?.url && (
                          <div className="relative w-full max-w-3xl h-64 md:h-96 rounded-lg overflow-hidden mt-8">
                            <Image
                              src={item.media.url}
                              alt={item.media.alt || item.question}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
