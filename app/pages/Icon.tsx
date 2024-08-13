import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function icon() {
  return (
    <>
    <FontAwesomeIcon style={{height:"50"}} icon={faCoffee} />
    <FontAwesomeIcon style={{height:"50"}} icon={faHouse} />
    </>
  )
}
