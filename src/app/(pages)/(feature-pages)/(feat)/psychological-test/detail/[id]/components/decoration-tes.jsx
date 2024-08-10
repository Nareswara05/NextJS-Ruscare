import React from 'react'
import Image from 'next/image'
import { decorationTes } from '@/app/lib/utils/svg'

const DecorationTes = () => {
  return (
    <div>
        <Image
        src={decorationTes}
        className="object-fill absolute -top-10 -right-10"
        width={300}
        alt=''
        />
        <Image
        src={decorationTes}
        className="object-fill absolute -top-10 -left-10"
        width={300}
        alt=''
        />
    </div>
  )
}

export default DecorationTes