import React, { useEffect, useState } from "react";
import "./Form.css";
const Form = () => {
    const [uservalue,setUserValue]=useState(null)
    const [formData, setFormData] = useState({
        name: "",
        phnumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(name, value);
        let user = {
            ...formData,
            [name]: value,
        };

        setFormData(user);
    };

    const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem("userdata",JSON.stringify(formData));
    setUserValue(formData);
    }

    useEffect(()=>{
      let data=JSON.parse(localStorage.getItem("userdata"));
     if(data){
         setUserValue(data);
     }
    },[])
  

    return (
        <div className="parent">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="text "
                    className="input-field"
                    name="phnumber"
                    placeholder="Number"
                    onChange={handleChange}
                />
                <input className="submit-btn" type="submit" />
            </form>
            <p>{uservalue?.name}</p>
        </div>
    );
};

export default Form;
