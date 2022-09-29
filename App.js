import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
    const [btitle, setBookTitle] = useeState("");
    const [bauthor, setBookAuthor] = useeState("");
    const [bpurchase, setBookPurchase] = useeState("");
    const submitReview = () => {
        Axios.post("http://localhost:9000/books", {
            title: btitle,
            author: bauthor,
            purchase: bpurchase
        }).then(() => {
            alert("success");
        });
    }
    return ( <
        div className = "App" >
        <h1> CRUD APPLICATION </h1>
        <div className = "information" >
        <label><b> BOOK TITLE </b></label>
        <input> type = "text"
        name = "btitle"
        onChange = {
            (e) => {
                setBookTitle(e.target.value);
            }
        } </input><
        label > <b> BOOK AUTHOR </b></label >
        <input> type = "text"
        name = "bauthor"
        onChange = {
            (e) => {
                setBookAuthor(e.target.value);
            }
        } </input>
        <label> <b> BOOK PURCHASE </b></label >
        <
        input > type = "text"
        name = "bpurchase onChange={(e)=>{
        setBookPurchase(e.target.value);
    }
}
"</input>
<button onClick = { submitReview } > submit </button> 
    </div> 
    </div>
);
}

export default App;
