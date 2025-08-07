import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function LoadingSkeleton() {
    return (
        <div className='w-full ' >
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div className='p-4' >

                    <Skeleton height={170} borderRadius={8} count={1} />

                    <div className='flex gap-1  mt-1  ' >
                        <div className='w-14  ' >
                        <Skeleton height={40}  width={40} circle={true} count={1} />

                        </div  >
                        <div className='w-full flex flex-col gap-1 ' >

                        <Skeleton height={20} width={250} borderRadius={3} count={1} />
                        <Skeleton height={20} width={200} borderRadius={3} count={1} />
                        </div>
                    </div>

                </div>
            </SkeletonTheme>
        </div>
    )
}

export default LoadingSkeleton
