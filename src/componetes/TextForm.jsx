import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    const hendelUcClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Convart to Upeercase","success");
    }

    const hendelLcClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Convart to LowerCase","success");
    }

    const hendelClearClick = () => {
        let newtext = "";
        setText(newtext);
        props.showAlert("Clear Text","success");
    }

    const handleCcClick = () => {
        const words = text.split(" ");
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        const newtext = capitalizedWords.join(" ");
        setText(newtext);
        props.showAlert("Convart to Capitallize","success");
    }

    const handleCopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copy To Clipbord","success");
    }

    const hendelRemovespace = () => {
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Space","success");
    }


    const hendelOnChange = (e) => {
        // console.log("function working")
        setText(e.target.value)
    }

    return (
        <>
            <div className='container my-4' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h3>{props.heding}</h3>
                <div className="mb-3">
                    {/* <label for="mybox" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={hendelOnChange} style={{ backgroundColor: props.mode === "dark" ? "gray" : "white", color: props.mode === "dark" ? "white" : "black" }} id="mybox" rows="8"></textarea>
                </div>
                <button disabled ={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={hendelClearClick}>Clear Text</button>
                <button disabled ={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={hendelUcClick}>Convert Uppercase</button>
                <button disabled ={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={hendelLcClick}>Convert Lowercase</button>
                <button disabled ={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCcClick}>Convert Capitalliz</button>
                <button disabled ={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
                <button disabled ={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={hendelRemovespace}>Remove Extra Space</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black",}}>
                <h3>Your Text Summery</h3>
                <span style={{ background: "#0a53be", color: "white", fontSize: "18px", padding: "5px", borderRadius: "3px" }}><b>{text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> Word And <b>{text.length}</b> Letter</span>
                <div className='container my-3'>
                    <span style={{ background: "#0a53be", color: "white", fontSize: "18px", padding: "5px", borderRadius: "3px" }}><b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> Minutes To Read</span>
                </div>
                <div className='container my-3'>
                    <h3>Preview</h3>
                    <span>{text} </span>
                </div>
            </div>
        </>
    )
}
