'use client'
import React from 'react'
import{changecolor,changeshape} from '@/redux/reducerSlice/userSlice'
import { useDispatch, useSelector } from 'react-redux'


const page = () => {
  const {width, height, backgroundColor, borderRadius} = useSelector(state=>state.box)
  const dispatch = useDispatch();
  const areaofcircle = (Math.PI * width/2 * width/2).toFixed(2);
  const areaofrectangle = width * height
  return (
    <div>
    <div style={{backgroundColor, width: width+'px', height: height+'px' , borderRadius}}>
    </div>
    <input placeholder='enter color' onChange={(e)=>dispatch(changecolor(e.target.value))}/>
    <button onClick={()=>{dispatch(changeshape())}}> Change to {borderRadius=="0%" ? 'Circle' : 'Rectangle'}</button>
    <br></br>
    area = {borderRadius == '50%' ? areaofcircle : areaofrectangle}
    </div>

  )
}

export default page