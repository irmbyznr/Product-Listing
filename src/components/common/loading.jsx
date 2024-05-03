import React from 'react'
import styles from "./loading.module.scss"

const Loading = () => {
  return (

     <div className={`flex justify-center items-center ${styles.spinner}`}>
      <div >
        <div className="rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export default Loading