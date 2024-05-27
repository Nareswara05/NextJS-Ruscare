import React from 'react'
import CardSelfcare from './components/card-selfcare'
import HeaderSelfcare from './components/header-selfcare'
import { AvatarTes } from '@/app/lib/utils/image'

const SelfcarePage = () => {
  const selfcareData = [
    {
        id: 1,
        image: AvatarTes,
        title: 'Teknik Relaksasi',
        desc: 'Pelajari berbagai teknik untuk membantu Anda rileks dan mengurangi stres.',
    },
    {
        id: 2,
        image: AvatarTes,
        title: 'Makan Sehat',
        desc: 'Temukan manfaat dari diet seimbang dan dapatkan tips tentang makan sehat.',
    },
    {
        id: 3,
        image: AvatarTes,
        title: 'Rutinitas Olahraga',
        desc: 'Cari tahu bagaimana olahraga rutin dapat meningkatkan kesehatan fisik dan mental Anda.',
    },
    {
        id: 4,
        image: AvatarTes,
        title: 'Meditasi Mindfulness',
        desc: 'Latih meditasi mindfulness untuk meningkatkan kejernihan mental dan kesejahteraan Anda.',
    },
    {
        id: 5,
        image: AvatarTes,
        title: 'Kebiasaan Tidur yang Baik',
        desc: 'Pelajari tentang kebiasaan tidur yang baik dan bagaimana meningkatkan kualitas tidur Anda.',
    },
];

  return (
    <div className='py-24 bg-white overflow-x-hidden flex flex-col gap-20 justify-center items-center'>
      <HeaderSelfcare/>
        <div className='grid grid-cols-2 gap-6 items-center'>
            {selfcareData.map((item) => (
                <CardSelfcare key={item.id} data={item} />
            ))}
        </div>
    </div>
  )
}

export default SelfcarePage