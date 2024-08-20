import React from 'react'
import './Client.css'
import netflixCeoImg from '/src/assets/netflixCeo.png'
import ceo from '/src/assets/ceo.png'
import dots from '/src/assets/dots.png'
const Client = () => {
  return (
    <div className='client'>

      <h2 className='clientHeading'>What we Client Say</h2>
      <div className="lineDiv">
        <div className="divaa"></div>
      </div>
      <div className="cardClientMain">
      <div className="cardClient">
          <div className="imgas">
            <img src={netflixCeoImg} alt="" className='netimg' />
            <p className='netpara1'>Charles Dim</p>
            <p className='netpara2'>Lead Designer,Netflix</p>
          </div>
          <p className='netpara3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi deleniti sint ipsam temporibus. Magni nihil eligendi,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, alias! similique, eum impedit aperiam ex commodi dignissimos in,</p>
      </div>
      <div className="cardClient">
          <div className="imgas">
            <img src={ceo} alt="" className='netimg' />
            <p className='netpara1'>Shezi Dosanjo</p>
            <p className='netpara2'style={{marginRight:310}}>CEO,Meta</p>
          </div>
          <p className='netpara3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi deleniti sint ipsam temporibus. Magni nihil eligendi,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, alias! similique, eum impedit aperiam ex commodi dignissimos in,</p>
      </div>
      </div>
      <div className="treeDots">
        <img src={dots} alt="" />
      </div>
    </div>
  )
}

export default Client
