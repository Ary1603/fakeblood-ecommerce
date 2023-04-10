import React, { useState, useEffect, useContext } from "react";
import { json, Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/user";
import { useForm } from 'react-hook-form';

export default function LoginAndRegisterContainer({ verifyUser }) {
  var pathname = window.location.pathname;

  return (
    <div className="login-register-container">
      {pathname == "/login" ? (
        <Login verifyUser={verifyUser} />
      ) : pathname == "/register" ? (
        <Register />
      ) : (
        <></>
      )}
      <div className="container-form-image"></div>
    </div>
  );
}

function Login({ verifyUser }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const {setUserData, setUserDataComplete} = useContext(UserDataContext)

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const onClickSignIn = (e) => {
    if (
      email != undefined &&
      password != undefined &&
      email != "" &&
      password != ""
    ) {


        var urlencoded = new URLSearchParams();

        urlencoded.append("email", `${email}`);
        urlencoded.append("password", `${password}`);

      fetch(`/api/login-user?email=${email}&password=${password}`, {
        method: "POSt",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
        body: urlencoded,
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.user) {
            //JSON.stringify( localStorage.setItem('user', result.user))
            //verifyUser(result.user.name)
            alert(JSON.stringify(result.user))
            setUserDataComplete({
              name: result.user.name,
              lastName: result.user.lastName,
              email: result.user.email
            })
            localStorage.setItem("name",result.user.name)
            
            navigate("/");
            console.log(result.user.name)
            
            
          }else{
            alert('Check your email and your password')
          }
        })
        .catch((error) => console.log("error", error));

        //Get token

        var urlencodedToken = new URLSearchParams();

        urlencodedToken.append("email", `${email}`);
        urlencodedToken.append("password", `${password}`);
        urlencodedToken.append('gettoken', true)

        fetch(`/api/login-user`, {
          method: "POSt",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*",
          },
          body: urlencodedToken,
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
            localStorage.setItem('token', JSON.stringify(result.token) )
            // if (result.user) {
            //   verifyUser(result.user.name)
            //   setUserData(result.user)
            //   localStorage.setItem("name",result.user.name)
              
            //   navigate("/");
            //   console.log(result.user.name)
              
              
            // }else{
            //   alert('Check your email and your password')
            // }
          })
          .catch((error) => console.log("error", error));
    }
  };

  return (
    <div className="login-container">
      <h1 id="fakeblood-login-title">FAKE BLOOD</h1>
      <div id="login-form-container">
        <h2 id="welcome-back-title" className="form-login-text">
          Welcome back!
        </h2>
        <p id="slogan-login" className="form-login-text">
          The faster you fill up, the faster you get a ticket
        </p>
        <form onSubmit={preventDefault} action="" method="post" id="form-login">
          <p className="labels-login-form">Email:</p>
          <input
            onChange={handleOnChangeEmail}
            className="input-login-form"
            type="email"
            name=""
            id=""
            placeholder="juan123@hotmail.com"
          />
          <p className="labels-login-form">Password:</p>
          <input
            onChange={handleOnChangePassword}
            className="input-login-form"
            type="password"
            name=""
            id=""
            placeholder="Juan123"
          />

          <br />

          <div className="checkbox-container">
            <input type="checkbox" name="" id="" />
            <span> Remember me</span>
          </div>

          <p id="forgot-password">Forgot Password?</p>

          <button onClick={onClickSignIn} className="btn-login-register-form">
            Sign In
          </button>

          <p id="dont-have-an-account">
            Don't have an account?
            <a href="/register" className="a-links" rel="noopener noreferrer">
              <strong> Sign up</strong>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

function Register() {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [urlBody, setUrlBody] = useState([]);
  

  

  const navigate = useNavigate();

  const handleOnChangeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleOnChangeLastName = (e) => {
    setLastName(e.target.value);
    console.log(lastName);
  };

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };
  
  const handleOnSubmitRegister = () => {
    if (
      name != undefined &&
      lastName != undefined &&
      email != undefined &&
      password != undefined &&
      name != "" &&
      lastName != "" &&
      email != "" &&
      password != ""
    ) {
      var urlencoded = new URLSearchParams();

      urlencoded.append("name", `${name}`);
      urlencoded.append("lastName", `${lastName}`);
      urlencoded.append("email", `${email}`);
      urlencoded.append("password", `${password}`);

      fetch("/api/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
        body: urlencoded,
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.user) {
            navigate("/login");
          }
        })
        .catch((error) => console.log("error", error));
    } else {
      alert("Fill the fields correctly");
    }

    //setUrlBody([...urlBody, encodeURIComponent(name), encodeURIComponent(lastName), encodeURIComponent(email), encodeURIComponent(password)])
  };

  return (
    <div className="register-container">
      <h1 id="fakeblood-login-title">FAKE BLOOD</h1>
      <div id="login-form-container">
        <h2 id="welcome-back-title" className="form-login-text">
          Start a new era!
        </h2>
        <p id="slogan-login" className="form-login-text">
          The faster you fill up, the faster you get a ticket
        </p>
        <form onSubmit={preventDefault} action="" method="" id="form-login">
          <p className="labels-login-form">Name:</p>
          <input
            onChange={handleOnChangeName}
            className="input-login-form"
            type="text"
            name=""
            id=""
            placeholder="Juan"
          />
          <p className="labels-login-form">Last Name:</p>
          <input
            onChange={handleOnChangeLastName}
            className="input-login-form"
            type="text"
            name=""
            id=""
            placeholder="Perez"
          />
          <p className="labels-login-form">Email:</p>
          <input
            onChange={handleOnChangeEmail}
            className="input-login-form"
            type="email"
            name=""
            id=""
            placeholder="juan123@hotmail.com"
          />
          <p className="labels-login-form">Password:</p>
          <input
            onChange={handleOnChangePassword}
            className="input-login-form"
            type="password"
            name=""
            id=""
            placeholder="Juan123"
          />

          <button
            className="btn-login-register-form"
            id="btn-create-account"
            type="submit"
            onClick={handleOnSubmitRegister}
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

const fetchLoginRegister = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error en la peticion: " + error));
};




export function UploadProductForm() {

  const [productName, setProductName] = useState()
  const [productPrice, setProductPrice] = useState()
  const [productCategory, setProductCategory] = useState()
  const [productBrand, setProductBrand] = useState()
  const [productDespcirption, setProductDespcirption] = useState()
  const [productImage, setProductImage] = useState('')
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleOnChangeName = (e) => {
    setProductName(e.target.value);
    console.log(productName);
  };

  const handleOnChangepProductPrice = (e) => {
    setProductPrice(e.target.value);
    console.log(productPrice);
  };

  const handleOnChangeProductCategory = (e) => {
    setProductCategory(e.target.value);
    console.log(productCategory);
  };

  const handleOnChangeProductBrand = (e) => {
    setProductBrand(e.target.value);
    console.log(productBrand);
  };

  const handleOnChangeProductDescription = (e) => {
    setProductDespcirption(e.target.value);
    console.log(productDespcirption);
  };

  const handleOnChangeProductImage = (e) => {
    setProductImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", `${productName}`);
    formData.append("price", `${productPrice}`);
    formData.append("categorie", `${productCategory}`);
    formData.append("brand", `${productBrand}`);
    formData.append("description", `${productDespcirption}`);
    //formdata.append("image",`${productImage}`)
    formData.append("image", data.file[0]);

    const res = await fetch("/api/upload-product", {
        method: "POST",
        headers: {
          //'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          //'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryyEmKNDsBKjB7QEqu',
          //"Access-Control-Allow-Origin": "*",
          "Authorization": localStorage.getItem('token')
    
        },
        body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
};

  const handleOnClickUploadProduct = async (e) => {

  

    var formdata = new FormData();

    formdata.append("name", `${productName}`);
    formdata.append("price", `${productPrice}`);
    formdata.append("categorie", `${productCategory}`);
    formdata.append("brand", `${productBrand}`);
    formdata.append("description", `${productDespcirption}`);
    formdata.append("image",`${productImage}`)// ,`${productImage.name}`);
    console.log(formdata)
    const fdormData = new URLSearchParams(formdata)
    
    
  fetch("/api/upload-product", {
    method: "POST",
    
    headers: {
      //'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      //'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryyEmKNDsBKjB7QEqu',
      //"Access-Control-Allow-Origin": "*",
      "Authorization": localStorage.getItem('token')

    },
    body: formdata, //fdormData,
    //redirect: 'follow'
  })
    .then((response) => response.json())
    .then((result) => {
      
      if(result.message){
        if(result.message == 'El token no es valido'){
          alert('Primero ingrese a su cuenta')
          alert(localStorage.getItem('token').toString())
        }else{
          alert(result.message)
        }
        
      }

      if(result.product){
        alert('Su producto se subio correctamente')
        navigate('/')
      }
      
        console.log(result)
        
    })
    .catch((error) => console.log("error", error));

  }

  return (
    
    <div className="form-container-sell-product">
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sell a product & earn money !!!</h1>
      <p className="label-form">Product name: </p>
      <input onChange={handleOnChangeName} type="text" name="" id="" />
      <p className="label-form">Category: </p>
      <input onChange={handleOnChangeProductCategory} type="text" name="" id="" />
      <p className="label-form">Brand:</p>
      <input onChange={handleOnChangeProductBrand} type="text" name="" id="" />
      <p className="label-form">Description:</p>
      <input onChange={handleOnChangeProductDescription} type="text" />
      <p className="label-form">Price: </p>
      <input onChange={handleOnChangepProductPrice} type="number" name="" id="" />
    <br/>
    <input className="input-upload-file" {...register("file")} onChange={handleOnChangeProductImage} type="file" accept="image/png, image/jpeg, image/jpg"  id="" />
    <br/>
      <button type="submit"  className="btn-upload-product btn-login-register-form" >Sell product</button>
      </form>
    </div>
    
  )
}
//onClick={handleOnClickUploadProduct}