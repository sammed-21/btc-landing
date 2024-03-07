import React from 'react'

type Props = {
    children:React.ReactNode
}

const PageWrapper = (props: Props) => {
  return (
    <div className='w-full max-w-screen-[1440px] h-full flex flex-col gap-5  px-[14px] md:px-[56px] lg:px-[72px] '>{props.children}</div>
  )
}

export default PageWrapper