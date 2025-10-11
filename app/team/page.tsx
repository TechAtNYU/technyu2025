import TeamGrid from '@/components/sections/team/team_grid'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-black min-h-screen w-[100svw]'>
        {/* <div className='w-[100svw] h-fit flex flex-col items-center pt-[2.5svh] pb-[10svh]'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[80%] sm:w-[90%] lg:w-[90%] px-[2svw] sm:px-[2svw] lg:px-[4svw]'>
                {
                    team_members.map((member: TeamMember) => (
                        <ProfileCard key={member.slug} member={member} />
                    ))
                }
            </div>
        </div> */}
        <TeamGrid />
    </div>
  )
}

export default Page
