import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const CardDetails = ({oneCard, getOneCard}) => {
  const{id} = useParams();
  useEffect(()=>{
    getOneCard(id)
  },[])
  console.log(oneCard);
  return (
    <div>
      <div>{oneCard?.name}</div>
      <div>{oneCard?.lastName}</div>
      <img src={oneCard?.image} alt="image not found" />
    </div>
  )
}

export default CardDetails