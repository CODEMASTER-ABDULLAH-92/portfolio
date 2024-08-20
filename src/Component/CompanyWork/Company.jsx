import React from 'react'
import goole from '/src/assets/google.png'
import amazon from '/src/assets/amazon.png'
import bolt from '/src/assets/bolt.png'
import netflix from '/src/assets/netflix.png'
import paypal from '/src/assets/paypal.png'
import './Company.css'
const Company = () => {
  return (
    <div className='company'>
      <h2 className='compantHeading'>Companies I have worked for</h2>
      <div className="headingFlex">
      <h2 className='compantHeading2'></h2>
      </div>
      <div className="imges">
        <img src={goole} alt="" />
        <img src={bolt} alt="" />
        <img src={amazon} alt="" />
        <img src={paypal} alt="" />
        <img src={netflix} alt="" />
      </div>
    </div>
  )
}

export default Company
