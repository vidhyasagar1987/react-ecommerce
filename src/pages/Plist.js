import React from 'react'

const Plist = ({title, useCallbackHandler}) => {
    console.log(`${title} is rendered`)
  return (
    <>
    <div>{title}</div>
    <button onClick={useCallbackHandler} >Remove Count by 5</button>
    </>
  )
}

export default React.memo(Plist)