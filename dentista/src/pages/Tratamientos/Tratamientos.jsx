import React, { useContext } from 'react'
import"./Tratamientos.css"
import { CardTratamientos } from '../../components/CardTratamientos/CardTratamientos'
import { useSize } from '../../context/sizeContext'
import { TratamientosSmall } from './TratamientosSmall'

export const Tratamientos = () => {
  const{tamanoPantalla}=useSize()
  
  return (<>
    {tamanoPantalla>750?<div className='paginaTratamientos'>
    <img className="imgTratamientos"src="https://res.cloudinary.com/djfkchzyq/image/upload/v1702801425/ud44dttawwymhroht01i.avif"/>
<CardTratamientos image={"https://res.cloudinary.com/djfkchzyq/image/upload/v1702842467/zpghrddw3dyyrzxnpura.avif"} titulo={"Endodoncia"} parrafo={"Es también conocida como tratamiento de conductos, se refiere a un procedimiento altamente utilizado por los especialistas en odontología para retirar por completo la pulpa dentaria dañada. Contamos con especialistas en endodoncia para que no pierdas tu pieza dental."}/>
<CardTratamientos image={"https://res.cloudinary.com/djfkchzyq/image/upload/v1702842467/zpghrddw3dyyrzxnpura.avif"} titulo={"Endodoncia"} parrafo={"Es también conocida como tratamiento de conductos, se refiere a un procedimiento altamente utilizado por los especialistas en odontología para retirar por completo la pulpa dentaria dañada. Contamos con especialistas en endodoncia para que no pierdas tu pieza dental."}/>
<CardTratamientos image={"https://res.cloudinary.com/djfkchzyq/image/upload/v1702842467/zpghrddw3dyyrzxnpura.avif"} titulo={"Endodoncia"} parrafo={"Es también conocida como tratamiento de conductos, se refiere a un procedimiento altamente utilizado por los especialistas en odontología para retirar por completo la pulpa dentaria dañada. Contamos con especialistas en endodoncia para que no pierdas tu pieza dental."}/>
<CardTratamientos image={"https://res.cloudinary.com/djfkchzyq/image/upload/v1702842467/zpghrddw3dyyrzxnpura.avif"} titulo={"Endodoncia"} parrafo={"Es también conocida como tratamiento de conductos, se refiere a un procedimiento altamente utilizado por los especialistas en odontología para retirar por completo la pulpa dentaria dañada. Contamos con especialistas en endodoncia para que no pierdas tu pieza dental."}/>

    </div>:<TratamientosSmall/>}
    
    </>
  )
}
