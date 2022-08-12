import React ,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("")

  
 




  const uppercaseHandler = () => {
   let newText = text.toUpperCase();
   setText(newText)
   props.showAlert("Text has been converted into uppercase", "success")

  }
  const lowercaseHandler = () => {
   let newText = text.toLowerCase();
   setText(newText)
   props.showAlert("Text has been converted into lowercase", "success")
  }

  const clearTextHandler = () => {
   
   let newText = "";
   setText(newText)
   props.showAlert("Text has been cleared", "success")
   
  }
  const capitalizedTextHandler=() =>{
   const arr = text.split(" ");
   for(let i=0; i < arr.length; i++){
   arr[i] =arr[i].charAt(0).toUpperCase() + arr[i].slice(1)   
   
  setText(arr.join(' '));
  props.showAlert("First letter of the each text has been capitalized", "success")
   }
  }
  const handleOnChange = (e) =>{
   
   setText(e.target.value)
  }
  const copyTextHandler = () => {
   let textarea=  document.getElementById('myBox');
   textarea.select();
   navigator.clipboard.writeText(textarea.value);
   props.showAlert("Text has been copied to the clipboard", "success")
  }

  const extraSpacesHandler = () => {
  let extraSpace = text.split(/  +/g)
  setText(extraSpace.join(" "))
  props.showAlert("Extra spaces has been cleared", "success")
  }

  
  

  return (
  <>
    <div>
     
        <div className="mb-3">
     <h1 className={`container my-2 text-${props.mode === 'light'? 'dark': 'light' } `}>{props.heading}</h1>
        <textarea  className="form-control" value={text} style={props.box} placeholder={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
         </div>
         <button className='btn btn-primary mx-1' onClick={uppercaseHandler}>convert into uppercase</button>
         <button className='btn btn-primary mx-1' onClick={lowercaseHandler}>convert into lowercase</button>
         <button className='btn btn-primary mx-1' onClick={clearTextHandler}>Clear Text</button>
         <button className='btn btn-primary mx-1' onClick={capitalizedTextHandler}>Capitalized Case</button>
         <button className='btn btn-primary mx-1' onClick={copyTextHandler}>Copy Text</button>
         <button className='btn btn-primary mx-1' onClick={extraSpacesHandler}>clear extra spaces</button>


        
      </div>
      <div className={`container my-2 text-${props.mode=== 'light'? 'dark': 'light' } `}>
       <h2 >Your Text Summary</h2>
       <p> {text.split(' ').length -1 }  words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} <i>Minutes read</i></p>
        <h2>Text Preview</h2>
        <p>{(text.length > 0)? text : "enter the text into the above box to preview the  text " }</p>
      </div>
   </>
  )
}
    TextForm.defaultProps = {
    heading: "Enter the text to analyze"
}