// import "" the styling
import { useState } from "react/cjs/react.production.min"


export default function Class() {

  const [otp, setOtp] = useState(new Array(4).fill(""))

  function handleChange(e, index) {

    if(isNaN(e.target.value)) return false

    setOtp([...otp.map((data, indx) => (indx === index ? e.target.value :data))])

    if(e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus()
    }
    
  }

  function handlePaste(e) {
    const value = e.clipboardData.getData("text")

    if(isNaN(value)) return false 
    const updatedValue = value.toString().spilt("").slice(0, otp.length)
    setOtp(updatedValue)

    const focusedInput = e.target.parentNode.querySelector("input:focus")
    if(focusedInput) {
      focusedInput.blur()
    }

    // focusing on the last input

    // const lastInput = e.target.parentNode.querySelector('input[type="password"]:last-child')

    // if(lastInput) {
    //   lastInput.focus()
    // }

  }

   return (
    <div>
      <div className="otp-area">
        {
          otp.map((data, i) => {
            return <input
                     type="password" 
                     value={data}
                     maxLength={1}
                     onChange={(e) => handleChange(e, i)}
                     onPaste={(e) => {handlePaste(e)}}
                    >
                    </input>
          })
        }
      </div>

      <button onClick={() => alert(otp.join(""))}>Submit</button>
    </div>

   )
}