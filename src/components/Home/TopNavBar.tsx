import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'

export default function TopNavBar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isCred, setIsCred] = useState(true);
  const [isLoginBtn, setisLoginBtn] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validateCred = () => {
    if (username.trim() !== "" && password.trim() !== "") {
      setisLoginBtn(true)
      return
    }

    setisLoginBtn(false)
  }

  const usernameOnChange = (event:any) => {
    setUsername(event.target.value)
  }

  const passwordOnChange = (event:any) => {
    setPassword(event.target.value)
  }

  const login = () => {
    setIsCred(true)
  }

  return (
    <div className="d-flex align-items-center shadow px-4 mb-4 bg-white rounded w-100" style={{height: "55px"}}>
        <div className='col-2'>
          <img src="/images/logo.png" alt='logo' className='rounded' style={{height: "40px", width: "40px"}}></img>
        </div>
        <div className='rounded col-8 col-lg-8' style={{backgroundColor: "WhiteSmoke", fontSize: "14px", height: "40px", marginLeft: "auto", marginRight:"auto"}}>
            <FontAwesomeIcon 
                icon={faSearch} 
                className="mx-2"
                color='grey'
                />
            <input type="text" style={{backgroundColor: "WhiteSmoke", fontSize: "14px"}} 
            className='border-0 p-1 h-100 col-10 col-lg-11' 
            placeholder="Search Pasar Kpop"/>
        </div>
        <div className='col-2 d-flex justify-content-center align-items-center'>
          {/* <button type="button" className='btn' data-toggle="modal" data-target="#loginModal">Login</button> */}
          <button className='btn ms-2' onClick={handleShow}>
          Login
          </button>

        </div>

        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Form>
          <Modal.Header  closeButton>
            <Modal.Title>Sign in to Pasar Kpop</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <FloatingLabel
            controlId="floatingEmailUsername"
            label="Username or Email Address"
            className="mb-3"
          >
            <Form.Control 
            required 
            type="email" 
            placeholder="Username or Email Address" 
            onChange={(e) => {usernameOnChange(e);}}
            onKeyUp={() => {validateCred()}}
            value={username}
            />
          </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control 
              required 
              type="password" 
              name="password"
              placeholder="Password" 
              onChange={(e) => {passwordOnChange(e);}}
              onKeyUp={() => {validateCred()}}
              value={password}
              />
            </FloatingLabel>
           <p className={`${isCred ? "d-none" : "d-block"} col-6 text-danger mx-1 mt-2`}>Username or password incorrect.</p>
          <br/>
          <a className='text-decoration-none m-1' href='#'>Forgot Password</a>
          </Modal.Body>
          <Modal.Footer>
            <button 
            className='btn col-12' 
            disabled={!isLoginBtn}
            type="button"
            onClick={() => {login()}}
            style={{
              backgroundColor: isLoginBtn ? "PaleVioletRed" : "pink", 
              color: "white",
              }}>Log In</button>
            <p className='col-12 text-center my-2'>Don't have an account? <a className='text-decoration-none' href="#">Sign Up</a></p>
          </Modal.Footer>
          </Form>
        </Modal>
    </div>
  )
}
