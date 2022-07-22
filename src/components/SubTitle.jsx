import React from 'react'

const SubTitle = ({ title, number }) => {
  return (
    <>
        <p style={{paddingLeft: '10px', fontSize: '14px'}}>{number}</p>
        <div className='center'>
            <div className='line2'></div>
            <p>{title}</p>
        </div>
    </>
  )
}

export default SubTitle