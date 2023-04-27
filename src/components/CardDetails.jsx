import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const CardDetails = ({oneCard, getOneCard}) => {
  const{id} = useParams();
  console.log(id);
  useEffect(()=>{
    getOneCard(id)
  },[])
  console.log(oneCard);
  return (
    <div>
      <div>{oneCard?.name} на массив запрос не работает</div>
      <div>{oneCard?.lastName}</div>
      <img src={oneCard?.image} alt="на массив запрос не работает" />
    </div>
  )
}

export default CardDetails