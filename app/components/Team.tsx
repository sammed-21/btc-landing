import React from 'react'
import ChartCard from './ChartCard'
import TeamsCard from './TeamsCard'
import team1 from '@/public/team1.svg'
import team2 from '@/public/team2.svg'
import team3 from '@/public/team3.svg'
import YouMayAlsoLike from './YouMayAlsoLike'

type Props = {}

const Team = (props: Props) => {
  return (
    
    <div
      id="News Insights"
      className="bg-white w-full overflow-hidden gap-5 py-2 px-2 md:p-6 rounded-lg h-full relative flex flex-col"
    >
      <div className="w-full h-full relative   pb-2 flex flex-col gap-6">
        <h1 className="font-semibold text-2xl">Team</h1>
        <div className="flex gap-2 flex-col">
          <>
           
            <p className="text-base text-[#3E424A] font-medium leading-[26px]">
            Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue. </p>
          </>
          <div className="flex w-full h-full justify-center items-center flex-col gap-6">
            <TeamsCard image={team1} name='John Smith' designation='Designation here' description='Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu'/>
            <TeamsCard image={team2} name='John Smith' designation='Designation here' description='Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu'/>
            <TeamsCard image={team3} name='John Smith' designation='Designation here' description='Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu'/>
          </div>
        </div>
        </div>
        <div className="w-full flex lg:hidden h-full reative">

        <YouMayAlsoLike/>
        </div>
        </div>
       

  )
}

export default Team