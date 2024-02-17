import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import guidepic1 from "./WhatsApp Image 2024-02-17 at 11.40.36_6fcf098f.jpg"
import MedicationIcon from '@mui/icons-material/Medication';
import data from "./Data"


export default function Guides() {

    const [like ,Setlike ] =useState(0)



  return (
    <div className='h-screen w-screen px-3 pt-2 '>
        <p className='text-2xl font-semibold font-sans'>
        Guides
        </p>
    {/* ---------------------------------------nav------------------------------------- */}
        <div className='flex justify-between mt-5'>
            <div>
                <button className=' px-6 py-1 border-b border-slate-200 font-sans text-md hover:border-green-700'>All Articles</button>
                <button className=' px-6 py-1 border-b border-slate-200 font-sans text-md hover:border-green-700'>New</button>
                <button className=' px-6 py-1 border-b border-slate-200 font-sans text-md hover:border-green-700'>Popular</button>
            </div>
            <div className='flex gap-3'>
                <div className='flex' onClick={()=>{Setlike(like + 1) }}>
                   <FavoriteBorderIcon/>
                   <p className='text-xs bg-green-500 pl-0 h-fit rounded-full'>{like}</p>
                </div>
                <div className='bg-green-700 text-white font-sans rounded-3xl px-3 py-1 flex '>
                    <FilterAltIcon style={{ fontSize: '1.5rem' }}/>
                    <p className='pt-1 text-sm'>FILTER</p> 
                </div>
            </div>
        </div>
        {/* ---------------------------------------Card------------------------------------------ */}
        <div className='flex gap-3 mt-2'>
            {data.map((val)=>{
                return(
            <div className='p-2 rounded w-fit border border-slate-400'>
            <img src={guidepic1} alt="" className='h-[214px] w-[333px]'/>
            <div className='flex justify-between pt-3'>
            <div className='font-sans font-semibold text-sm pt-1'>{val.ArticleName}</div>
                <div className='bg-green-600 p-1 px-2 text-white text-sm rounded-lg'>{val.PriceTag}</div>
            </div>
            <p className='text-xs font-extralight font-mono'>{val.AuthorName}</p>
            <div className='flex justify-between'>
                <div className='flex gap-1'>
                    <div>
                    <MedicationIcon style={{ fontSize: '1rem' }} />
                    </div>
                    <div className='text-xs font-extralight font-mono pt-2'>{val.Url}</div>
                </div>
                <div className='text-xs font-extralight font-mono pt-2'>
                {val.date}
                </div>
            </div>
            </div>)
            })}

        </div>
    </div>
  )
}
