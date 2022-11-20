import react, { useState } from 'react';
export function FormText() {
    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText)        
    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText)        
    }
    const handleclearClick = () => {
        let newText = ('');
        setText(newText)        
    }
    
    
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
                    <button type="button " className="btn btn-primary my-3 mx-3" onClick={handleclearClick}>Clear Text</button>
                    <p>Words  charactors {text.length}</p>
                </div>
            </div>
        </>
    );
};

