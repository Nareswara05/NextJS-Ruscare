import React from 'react'
import EditInformationMentor from './components/edit-information-mentor'
import EditInformationSkill from './components/edit-information-skill-mentor'
import EditInformationSocialMedia from './components/edit-information-socialmedia'

const page = () => {
  return (
    <div>
      <EditInformationMentor/>
      <EditInformationSkill/>
      <EditInformationSocialMedia/>
    </div>
  )
}

export default page