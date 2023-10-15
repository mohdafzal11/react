import React from 'react'
import Button from './Button'

const BgChanger = ({colorHandler}) => {
  return (
    <div className='bg-white py-2 rounded-xl'>
        <Button colorName="Red" colorHandler={colorHandler}></Button>
        <Button colorName="Green" colorHandler={colorHandler}></Button>
        <Button colorName="Blue" colorHandler={colorHandler}></Button>
        <Button colorName="Olive" colorHandler={colorHandler}></Button>
        <Button colorName="Gray" colorHandler={colorHandler}></Button>
        <Button colorName="Yellow" colorHandler={colorHandler}></Button>
        <Button colorName="Pink" colorHandler={colorHandler}></Button>
        <Button colorName="Purple" colorHandler={colorHandler}></Button>
        <Button colorName="Lavender" colorHandler={colorHandler}></Button>
        <Button colorName="White" colorHandler={colorHandler}></Button>
        <Button colorName="Black" colorHandler={colorHandler}></Button>
    </div>
  )
}

export default BgChanger