import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'

export default function Form() {
    const [formData, setFormData] = useState({
        _id: '',
        title: '', 
        message: '', 
        imageName: '', 
        creator: '',
        avatarName: '',
        price: '',
        isIncludePos: true, 
        group: ['BlackPink', 'Nmixx'],
        category: ['WTS'],
        uploadDateTime: "0 second ago",
        createdAt: '2022-04-19',
    })

    const dispatch = useDispatch()


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(createPost(formData) as any)
    }
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h1>Create a New Post</h1>
            <label>title</label>
            <input type='text' value={formData.title} onChange={(e)=>setFormData({...formData,  title: e.target.value })}/>

            <label>message</label>
            <input type='text' value={formData.message} onChange={(e)=>setFormData({...formData,  message: e.target.value })}/>

            <label>imageName</label>
            <input type='text' value={formData.imageName} onChange={(e)=>setFormData({...formData,  imageName: e.target.value })}/>

            <label>creator</label>
            <input type='text' value={formData.creator} onChange={(e)=>setFormData({...formData,  creator: e.target.value })}/>

            <label>avatarName</label>
            <input type='text' value={formData.avatarName} onChange={(e)=>setFormData({...formData,  avatarName: e.target.value })}/>

            <label>price</label>
            <input type='text' value={formData.price} onChange={(e)=>setFormData({...formData,  price: e.target.value })}/>

            <button type='submit'>Add Post</button>
        </form>
    )
}
