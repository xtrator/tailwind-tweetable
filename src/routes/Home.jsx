import React from 'react'

export default function Home() {
  return (
    <>
      <div className='absolute text-primary-hover m-auto'>Home</div>
      <div className='relative top-48 flex justify-center'>
          <div className='flex gap-1'>
            <nav>Navigation</nav>
            <section>Feed</section>
          </div>
      </div>
    </>
  )
}
