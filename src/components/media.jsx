import React from "react"
import { useState } from "react"

const imageUpload = ()=>{
  const [image, setImage] = useState("")
  return(
    <form>
        <input
        type="file"
        hidden
        accept/>
    </form>
  )

}