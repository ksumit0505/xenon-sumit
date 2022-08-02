import React from 'react'
import './gallery.css'

const img1="https://img.etimg.com/thumb/msid-75572296,width-640,resizemode-4,imgsize-507941/bmw-ninet.jpg";
const img2="https://images.moneycontrol.com/static-mcnews/2020/10/Aprilia-RS660.jpg?impolicy=website&width=770&height=431";
const img3="https://c4.wallpaperflare.com/wallpaper/121/626/428/yamaha-fz-10-sportbike-best-bikes-wallpaper-preview.jpg";
const img4="https://wonderfulengineering.com/wp-content/uploads/2013/12/7871-honda-t3-chopper-1920x1200-motorcycle-wallpaper-1024x640.jpg";
const img5="https://www.teahub.io/photos/full/47-477582_full-hd-ducati-bikes.jpg";
const img6="https://wonderfulengineering.com/wp-content/uploads/2013/12/porsche-custom-bike-wallpapers-porsche-custom-bike-stock-photos_1920x1080-800x600.jpg"
const img7="https://wonderfulengineering.com/wp-content/uploads/2013/12/bike-wallpaper-12-1024x640.jpg"
const img8="https://wonderfulengineering.com/wp-content/uploads/2013/12/motorcycle-wallpaper-1024x576.jpg"
const img9="https://images.cdn.circlesix.co/image/1/700/0/uploads/posts/2015/09/8997733c-ee32-40fb-9466-798760fef149.jpg"

const Gallery = () => {
    let data=[
        {
            id:1,
            imgSrc:img1,
        },
        {
            id:2,
            imgSrc:img2,
        },
        {
            id:3,
            imgSrc:img3,
        },
        {
            id:4,
            imgSrc:img4,
        },
        {
            id:5,
            imgSrc:img5,
        },
        {
            id:6,
            imgSrc:img6,
        },
        {
            id:7,
            imgSrc:img7,
        },
        {
            id:8,
            imgSrc:img8,
        },
        {
            id:9,
            imgSrc:img9,
        }
    ]
   
  return (
    <>
    <div className='gallery'>
        {data.map((item,index)=>{
            return(
                <div className='pics' key={index} >
                    <img src={item.imgSrc} alt="imgs" style={{
                        width:"100%"
                    }}/>
                </div>
            )
        })}
    </div>
    </>
  )
}
export default Gallery;