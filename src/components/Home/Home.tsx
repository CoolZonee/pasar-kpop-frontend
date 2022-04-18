import React from 'react'
import TopNavBar from './TopNavBar'
import Card from '../Card/Card'

const cardDetails = [
  {"id": "1",
  "imageName": "testing1.jpg",
  "category": "WTS/WTB/WTT",
  "title": "jinggybear's new items",
  "uploadedBy": "jinggybear",
  "avatarName": "jinggybear.jpg",
  "uploadDateTime": "27 minutes ago",
  "price": "RM25",
  "isIncludePos": false,
  "group": ["Nminxx", "BlackPink", "Aespa"]
  },
  {"id": "2",
  "imageName": "image2.png",
  "category": "WTS/WTB",
  "title": "Irene Photocard",
  "uploadedBy": "coolzone",
  "avatarName": "jinggybear.jpg",
  "uploadDateTime": "15 minutes ago",
  "price": "RM25",
  "isIncludePos": true,
  "group": ["Red Velvet"],
  },
  {"id": "3",
  "imageName": "image3.jfif",
  "category": "WTS",
  "title": "Bahiyyih pc",
  "uploadedBy": "shermin",
  "avatarName": "jinggybear.jpg",
  "uploadDateTime": "10 minutes ago",
  "price": "RM25",
  "isIncludePos": true,
  "group": ["KEP1ER"],
  },
  {"id": "4",
  "imageName": "image3.jfif",
  "category": "WTS",
  "title": "Bahiyyih pc",
  "uploadedBy": "shermin",
  "avatarName": "jinggybear.jpg",
  "uploadDateTime": "10 minutes ago",
  "price": "RM25",
  "isIncludePos": true,
  "group": ["KEP1ER"],
  },
  {"id": "5",
  "imageName": "image3.jfif",
  "category": "WTS",
  "title": "Bahiyyih pc",
  "uploadedBy": "shermin",
  "avatarName": "jinggybear.jpg",
  "uploadDateTime": "10 minutes ago",
  "price": "RM25",
  "isIncludePos": true,
  "group": ["KEP1ER"],
  },
  
]

const likedCard = [
  "2",
  "5",
]

let cardList = cardDetails.map((card, index) => {
  let like = false;
  for (let i=0; i<likedCard.length; i++) {
    if (likedCard[i] === card.id) {
      like = true
      likedCard.filter(() => likedCard[i] !== card.id)
      break
    }
  }
  return <div key={card.id} className='col-12 col-lg-3'>
  <Card cardDetails={card} like={like}/>
</div>
})
export default function Home() {
  return (
    <div style={{width: "100vw"}}>
        <TopNavBar />
        <div className='d-flex flex-wrap justify-content-start align-items-start w-100'>
            {cardList}
        </div>
    </div>
  )
}
