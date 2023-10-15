
const Button = ({colorName, colorHandler}) => {
  return (
    <button className='h-10 w-20 p-1 m-1' style={{backgroundColor:colorName}} onClick={()=>{colorHandler(colorName)}}>{colorName}</button>
  )
}

export default Button