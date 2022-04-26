import Home from './components/Home/Home'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getPosts } from './actions/posts'


export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts() as any)
  }, [dispatch])
  
  return (
    <>
    <Home />
    <Form />
    </>
  )
}
