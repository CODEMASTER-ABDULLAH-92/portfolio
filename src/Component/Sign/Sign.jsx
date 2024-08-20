import React, { useRef } from 'react'
import { useState } from 'react'
import './Sign.css'
import close_img from '/src/assets/close.svg'
import eye from '/src/assets/eye.svg'
import cross from '/src/assets/1.png'
const Sign = () => {
  const [type, settype] = useState(true)
  const [type1, settype1] = useState(true)
  const [login, setLogin] = useState('Login');
  const hideRef = useRef();
  const hide = ()=>{
hideRef.current.style.display='none';
  }
  return (
    <div className='flex_from'>
      <form action="/" method="post" className='fromm' ref={hideRef}>
      <img src={cross} alt=""  className='crossImg22' onClick={()=>hide()} />
      <h2>{login === 'Login' ? 'Login': "Sign Up"}</h2>
      <div className="inputs">
        <div className="input">
          {
            login === 'Login' ? '': <input type="text" placeholder='Enter the name' required className='nav-input' />
          }
        </div>
        <div className="input">

        <input type="email" placeholder='Enter the email' required className='nav-input' />
        </div>
        <div className="input">
        <input type={type === true ? 'password' : 'text'} placeholder='Enter the password' required className='nav-input' />
        {type === true ? <img src={close_img} className='img-eye' onClick={()=>settype(!type)}/> : <img src={eye} className='img-eye' onClick={()=>settype(!type)}/>}
        </div>

        {
          login === 'Login' ? '' :<div className="input">
        <input type={type1 === true ? 'password' : 'text'} placeholder='Confrom the password' required className='nav-input' />
        {type1 === true ? <img src={close_img} className='img-eye' onClick={()=>settype1(!type1)}/> : <img src={eye} className='img-eye' onClick={()=>settype1(!type1)}/>}
        </div>
        }
      </div>
      <div className="btnLoginFlex">
      <button className='loginBtn'>{login === 'Login' ? 'Login': 'Create new Account'}</button>
      </div>
      {
        login === 'Login' ? 
        <p>Create new account, <span className='loginSpan' onClick={()=>setLogin('SignUp')}>Sign Up</span></p>:

      <p>If you al'ready have an account, <span className='loginSpan' onClick={()=>setLogin('Login')}>Login</span></p>
      }
      </form>
    </div>
  )
}

export default Sign
