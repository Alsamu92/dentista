import React from 'react'
import { CardTratamientoSmall } from '../../components/CardTratamientos/CardTratamientoSmall'
import"./TratamientosSmall.css"
export const TratamientosSmall = () => {
  return (
    <div className='tratSmall'>
        <img className="imgTratamientos"src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702801425/ud44dttawwymhroht01i.avif"/>
        <CardTratamientoSmall image={"https://res.cloudinary.com/djfkchzyq/image/upload/v1702842467/zpghrddw3dyyrzxnpura.avif"} texto="Endodoncia"/>
        <CardTratamientoSmall image={"https://res.cloudinary.com/djfkchzyq/image/upload/v1702842467/zpghrddw3dyyrzxnpura.avif"} texto="Protesis dental"/>
        <CardTratamientoSmall image={"https://res.cloudinary.com/djfkchzyq/image/upload/v1702842467/zpghrddw3dyyrzxnpura.avif"} texto="implantes dentales"/>
        <CardTratamientoSmall image={"https://res.cloudinary.com/djfkchzyq/image/upload/v1702842467/zpghrddw3dyyrzxnpura.avif"} texto="Limpieza dental"/>
        <CardTratamientoSmall image={"https://res.cloudinary.com/djfkchzyq/image/upload/v1702842467/zpghrddw3dyyrzxnpura.avif"} texto="Ortodoncia invisible"/>
        <CardTratamientoSmall image={"https://res.cloudinary.com/djfkchzyq/image/upload/v1702842467/zpghrddw3dyyrzxnpura.avif"} texto="Caries"/>
      
    </div>
  )
}