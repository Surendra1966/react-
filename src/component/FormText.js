import react, { useState } from 'react';

export function FormText(props) {
    
    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText)        
    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText)        
    }
    const handleclearClick = () => {
        let newText = (" ");
        setText(newText)        
    }
    
const handleExtraspaceClick=()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "))
}    
const TitleCase=()=>{
    let newText=text.split(' ')
    .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0)
          .toUpperCase() + word.slice(1)
          .toLowerCase();
      })
      .join(' ');
    setText(newText);
  };

   
    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState(" ");

    return (
        <>
            <div className='container my-3'>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" value={text} onChange={handleOnchange} rows="3"></textarea>
                    <button type="button " className="btn btn-primary my-3" onClick={handleupClick}>covert to upper case</button>
                    <button type="button " className="btn btn-primary my-3 mx-3" onClick={handleloClick}>covert to Lower case</button>
                    <button type="button " className="btn btn-primary my-3 mx-3" onClick={TitleCase}>Convert to title Case</button>
                    <button type="button " className="btn btn-primary my-3 mx-3" onClick={handleclearClick}>Clear Text</button>
                    <button type="button " className="btn btn-primary my-3 mx-3" onClick={handleExtraspaceClick}>Remove Extra space</button>
                    
                    
                    <p>Words {text.split(" ").length-1}  charactors {text.length}</p>
                </div>
            </div>
        </>
    );
};

