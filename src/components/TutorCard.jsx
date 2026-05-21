import React from 'react'

const TutorCard = ({data}) => {
  return (
    <div>
        <img src={`${data.imageUrl}`} alt="" />
        <p>{data.tutorName}</p>
        <p>{data.location}</p>
    </div>
  )
}

export default TutorCard