import React from "react";
import "./quiz.css"
import { Link } from "react-router-dom";

const Questions =()=>{
    return (
        <div>
            <form className="radiobtn">
            <h2 className='text-light'> Do You Have a Comprehensive (Internal) Business Plan?</h2>
                <label className="radiobtn">
                    <Link to={'/Questions1'} className="radiobtn"><input type='radio'/> Yes </Link>
                </label><br/>
                <label className="radiobtn">
                    <Link to={'/Questions2'} className="radiobtn"><input type='radio'/> No </Link>
                </label>
            </form>
        </div>
    )
}
export default Questions;