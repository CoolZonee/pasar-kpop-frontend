import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as likedHeart} from "@fortawesome/free-solid-svg-icons"  
import { faHeart as normalHeart} from "@fortawesome/free-regular-svg-icons"
import CardDetails from '../../interfaces/CardDetailsInterface'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../actions/posts'

type Props = {
  cardDetails: CardDetails
  like: boolean
}

export default function Card(props: Props) {
  const [like, setLike] = useState(props.like)

  const likePost = () => {
    setLike(!like)
  }

  let groupList = props.cardDetails.group.map((group, index) => {
    return <div key={group + index} className='px-2 py-1 me-1' 
    style={{
      backgroundColor: "lightpink", 
      borderRadius: "15px",
      fontWeight: "bold",
      color: "white",
      }}>
      <p style={{fontSize: "12px"}}>{group}</p>
      </div>
  })
  return (
    <div className='my-3 mx-1 px-3 py-2 shadow rounded'>
      <div className="d-flex" style={{height: "40px"}}>
        <div 
        style={{backgroundImage: `url(/avatar/${props.cardDetails.avatarName})`,
        width: "40px",
        height: "40px",
        backgroundClip: "padding-box",
        float: "left",
        backgroundSize: "cover",
        backgroundPosition: "center center",}} 
        className='rounded-circle me-2'>

        </div>
        <div>
        <p className='' style={{fontWeight: "bold"}}>{props.cardDetails.creator}</p>
        <p className='' style={{fontSize: "13px !important" }}>{props.cardDetails.createdAt}</p>
        </div>
      </div>
      <img className='col-12 rounded my-2' style={{maxHeight: "500px"}} src={`/images/${props.cardDetails.imageName}`} alt={props.cardDetails.imageName}></img>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <p className='' style={{fontWeight: "bold", fontSize: "15px", color: "grey"}} >{props.cardDetails.title}</p>
          <div className="d-flex">
            {groupList}
          </div>
          <p className=''>{props.cardDetails.category}</p>
          <p style={{fontWeight: "bold", fontSize: "18px"}}>{props.cardDetails.price}</p>
          <p style={{fontSize:"12px", fontStyle: "italic"}}>**<span style={{fontWeight: "bold"}}>{props.cardDetails.isIncludePos ? "Include " : "Exclude "}</span>Postage</p>
        </div>
        
        <FontAwesomeIcon 
        icon={like ? likedHeart : normalHeart} 
        className="me-3" 
        style={{fontSize: "22px", color: "crimson", cursor: "pointer"}}
        onClick={() => likePost()}/>
      </div>
      
      
    </div>
  )
}
