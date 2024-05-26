import React from 'react'
import ConsultantCard from './components/consultant-card'
import HeaderConsultant from './components/header-consultant';

const ConsultantPage = () => {
  const consultants = [
    {
      id: 1,
      name: "John Doe",
      pronouns: "(She / Her)",
      education: "S1 Psikologi Universitas Indonesia",
      major: "PPLG",
      avatar: "/path/to/avatar1.jpg"
    },
    {
      id: 2,
      name: "Jane Smith",
      pronouns: "(He / Him)",
      education: "S2 Psikologi Universitas Gadjah Mada",
      major: "Animasi 3D",
      avatar: "/path/to/avatar2.jpg"
    },
    {
      id: 3,
      name: "Robert Johnson",
      pronouns: "(He / Him)",
      education: "S1 Psikologi Universitas Padjajaran",
      major: "Design Grafis",
      avatar: "/path/to/avatar3.jpg"
    },
    {
      id: 4,
      name: "Emily Davis",
      pronouns: "(She / Her)",
      education: "S1 Psikologi Universitas Airlangga",
      major: "Animasi 2D",
      avatar: "/path/to/avatar4.jpg"
    },
    {
      id: 5,
      name: "Michael Wilson",
      pronouns: "(He / Him)",
      education: "S1 Psikologi Universitas Brawijaya",
      major: "Teknik Grafika",
      avatar: "/path/to/avatar5.jpg"
    }
  ];

  
  return (
    <div className='bg-white py-24'>
      <HeaderConsultant/>
      <div className='flex flex-wrap justify-center gap-10 pt-8'>
        {consultants.map((consultant) => (
          <ConsultantCard key={consultant.id} consultant={consultant} />
        ))}
      </div>
    </div>
  )
}

export default ConsultantPage