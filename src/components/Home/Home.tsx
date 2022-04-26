import React from 'react'
import TopNavBar from './TopNavBar'
import Card from '../Post/Post'
import { useSelector } from 'react-redux'
import CardDetails from '../../interfaces/CardDetailsInterface'

const cardDetails = [
  {"id": "1",
  "imageName": "testing1.jpg",
  "category": ["WTS", "WTB", "WTT"],
  "title": "jinggybear's new items",
  "creator": "jinggybear",
  "avatarName": "jinggybear.jpg",
  "uploadDateTime": "27 minutes ago",
  "price": "RM25",
  "isIncludePos": false,
  "group": ["Nminxx", "BlackPink", "Aespa"],
  "createdAt": '2022-04-19',
  },
  {"id": "2",
  "imageName": "image2.png",
  "category": ["WTS", "WTB"],
  "title": "Irene Photocard",
  "creator": "coolzone",
  "avatarName": "jinggybear.jpg",
  "uploadDateTime": "15 minutes ago",
  "price": "RM25",
  "isIncludePos": true,
  "group": ["Red Velvet"],
  "createdAt": '2022-04-19',
  },
  {"id": "3",
  "imageName": "image3.jfif",
  "category": ["WTS"],
  "title": "Bahiyyih pc",
  "creator": "shermin",
  "avatarName": "jinggybear.jpg",
  "uploadDateTime": "10 minutes ago",
  "price": "RM25",
  "isIncludePos": true,
  "group": ["KEP1ER"],
  "createdAt": '2022-04-19',
  },
  {"id": "4",
  "imageName": "image3.jfif",
  "category": ["WTS"],
  "title": "Bahiyyih pc",
  "creator": "shermin",
  "avatarName": "jinggybear.jpg",
  "uploadDateTime": "10 minutes ago",
  "price": "RM25",
  "isIncludePos": true,
  "group": ["KEP1ER"],
  "createdAt": '2022-04-19',
  },
  {"id": "5",
  "imageName": "image3.jfif",
  "category": ["WTS"],
  "title": "Bahiyyih pc",
  "creator": "shermin",
  "avatarName": "jinggybear.jpg",
  "uploadDateTime": "10 minutes ago",
  "price": "RM25",
  "isIncludePos": true,
  "group": ["KEP1ER"],
  "createdAt": '2022-04-19',
  },
  
]

const likedCard = [
  "2",
  "5",
]

export default function Home() {

  const posts = useSelector((state: any) => state.posts)

  console.log(posts)

  let cardList = posts.map((card: CardDetails, index: number) => {
    let like = false;
    for (let i=0; i<likedCard.length; i++) {
      if (likedCard[i] === card._id) {
        like = true
        likedCard.filter(() => likedCard[i] !== card._id)
        break
      }
    }
    return <div key={card._id} className='col-12 col-lg-3'>
    <Card cardDetails={card} like={like}/>
  </div>
  })
  return (
    <div style={{width: "100vw"}}>
        <TopNavBar />
        <div className='d-flex flex-wrap justify-content-start align-items-start w-100'>
            {cardList}
        </div>
    </div>
  )
}
