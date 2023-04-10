import React, { useState, useEffect, useContext, useReducer } from "react";
import { json, Link, Navigate, redirect, useNavigate } from "react-router-dom";
// BOOTSRAP CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBContainer } from "mdbreact";
// CONTEXT
import ProductsContext from "../context/products";
//import { exists } from "../../../app/models/product";


function CategorieCards({ categories }) {
  return (
    <Container fluid="lg">
      <Row>
        {categories ? (
          categories.map((category, index) => (
            <Col key={index}>
              <div
                className="categoy-card"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <button className="cssbuttons-io-button">
                  {" "}
                  {category.name}
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </Col>
          ))
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
}

export function PingsCards({ pings }) {
  return (
    <>
      {pings.map((ping, key) => (
        <div className="ping-card" key={key}>
          <i className="ping-icon">{ping.icon}</i>
          <h2 className="ping-title">{ping.ping_title}</h2>
          <p className="ping-description">{ping.ping_description}</p>
        </div>
      ))}
    </>
  );
}
const initialIndex = {indexC: -1};

  function indexFinder(state, action){
    state.indexC = action.array.indexOf(action.fakeB[
      action.event.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
        "keynum"
      )
    ].title)

    return state.indexC
  }

export function ProductsCards({ fakeBlood, cartProducts }) {
  const [shopProducts, setshopProducts] = useState([]);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  //const [exist, setExist] = useState(false)
  const [totalForPay, setTotalForPay] = useState(0)
  const navigate = useNavigate();
  
  //const [productDetails, setProductDetails] = useState({});
  const [productsCart, setproductsCart] = useState([]);

  //const [state, dispatch] = useReducer(indexFinder, initialIndex);

  const productDetails = {
    title: "",
    productDescription: "",
    productPrice: 0,
    productImage: "",
  };

  console.log(fakeBlood)
  const initialExist = {exist: false};
  const [state, dispatch] = useReducer(verifyier, initialExist);
  function verifyier(state, action){
    action.array.map((item, key) => {
        
      if(item.title === fakeBlood[
        action.event.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
          "keynum"
        )
      ].name){
        //existQ = true
        console.log(item.title)
        console.log(fakeBlood[action.event.target.parentElement.parentElement.parentElement.parentElement.getAttribute("keynum")].title)
        console.log('somos iguales')
        return {exist: true}
      }else {
        //existQ = false
        console.log(item.title)
        console.log(fakeBlood[action.event.target.parentElement.parentElement.parentElement.parentElement.getAttribute("keynum")].title)
        console.log('NO somos iguales')
        return {exist: false}
      }
    })

    if(state.exist == false){
      setproductsCart([
        ...productsCart,
        {
          title:
            fakeBlood[
              action.event.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
                "keynum"
              )
            ].name,
          productDescription:
            fakeBlood[
              action.event.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
                "keynum"
              )
            ].description,
          productPrice:
            Number(fakeBlood[
              action.event.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
                "keynum"
              )
            ].price),//Cambio a number
          productImage:
            fakeBlood[
              action.event.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
                "keynum"
              )
            ].image,
        },
      ]);
    }
  }
  //Function to know if an amenitie query is already in the array
  // function Exists(array, name) {
  //   let exists = array.indexOf(name);
  //   return exists;
  // }

  const handleOnClick = (e) => {
    console.log(fakeBlood[
      e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
        "keynum"
      )
    ])
    
    if(productsCart.length == 0){
      setTotalForPay(totalForPay + Number(fakeBlood[
        e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
          "keynum"
        )
      ].price))
      setproductsCart([
        ...productsCart,
        {
          title:
            fakeBlood[
              e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
                "keynum"
              )
            ].name,
          productDescription:
            fakeBlood[
              e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
                "keynum"
              )
            ].description,
          productPrice:
          Number(fakeBlood[
              e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
                "keynum"
              )
            ].price),
          productImage:
            fakeBlood[
              e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
                "keynum"
              )
            ].image,
        },
      ]);
    }

    if(productsCart.length > 0){
      let existA
        console.log('entre 1')
        productsCart.forEach(element => {
          if(element.title == fakeBlood[e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("keynum")].name){
            existA = true
            console.log('----------------------------------------')
            console.log('sI HAY')
            console.log(element.name)
            console.log('vs')
            console.log(fakeBlood[e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("keynum")].title)
            console.log('----------------------------------------')

          }
        })

        if(!existA){
          console.log(existA)
          console.log('si se puede')
          console.log('----------------------------------------')
          setTotalForPay(totalForPay + Number(fakeBlood[
            e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
              "keynum"
            )
          ].price))
          setproductsCart([
            ...productsCart,
            {
              title:
                fakeBlood[
                  e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
                    "keynum"
                  )
                ].name,
              productDescription:
                fakeBlood[
                  e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
                    "keynum"
                  )
                ].description,
              productPrice:
              Number(fakeBlood[
                  e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
                    "keynum"
                  )
                ].price),
              productImage:
                fakeBlood[
                  e.target.parentElement.parentElement.parentElement.parentElement.getAttribute(
                    "keynum"
                  )
                ].image,
              amount: 1
            },
          ]);
        }else{
          console.log(existA)
          console.log('no se puede')
          console.log('----------------------------------------')
        }

        
        
      existA = false
    }
    
    
      
    
    
  };

  const handleOnClickPay = (e) => {
    var urlencoded = new URLSearchParams();

        urlencoded.append("total", `${totalForPay}`);
        //urlencoded.append("password", `${password}`);
    fetch("/api/create-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
      },
      body: urlencoded,
    })
      .then((response) => response.json())
      .then((result) => {
        ///window.location.replace('result.data.links[1].href')
        console.log(result)
        window.location.replace(result.data.links[1].href)
      })
      .catch((error) => console.log("error", error));
  
  }

  //const [state, dispatch] = useReducer(addProductToCart, initialProductsCart);

  //console.log('primeroo')
  //console.log(fakeBlood)
  useEffect(() => {
    if (fakeBlood) {
      //console.log(fakeBlood[10].category.image)
    }

    if (fakeBlood.length >= 213) {
      //console.log('first')
      setshopProducts(fakeBlood);
      //console.log(fakeBlood[10].category.image)
    }
    cartProducts(productsCart);
    console.log(productsCart)
  },[totalForPay]);

  const handleOnClickAddCart = (e) => {
    console.log(productDetails);
    //setTotalForPay(totalForPay + 0)
  };

  return (
    <>
      <div className="shop-container">
        <Container fluid="lg">
          {fakeBlood ? (
            <>
              <Row>
                {fakeBlood?.map((item, key) => (
                  <Col key={key} id={`card-${key}`} keynum={key}>
                    <div className="card-product">
                      <div className="card-product-img">
                        <img
                          onClick={handleOnClickAddCart}
                          src={item.image}
                        ></img>
                        
                      </div>
                      <div className="card-product-info">
                        <p className="text-title-card-product">
                          {item.name || item.title}
                        </p>
                        <p className="text-body-card-product">
                          {item.description}
                        </p>
                      </div>
                      <div className="card-product-footer">
                        <span className="text-title-card-product">
                          ${item.price}
                        </span>
                        <div className="card-product-button">
                          <svg
                            onClick={handleOnClick}
                            className="svg-icon-card-product"
                            viewBox="0 0 20 20"
                          >
                            <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                            <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                            <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <></>
          )}
        </Container>
        <div className="cart">
          
          {productsCart.length == 0?<>
            <div className="empty-cart">
              <img src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/green_shoppictcart_1484336527-1.png" alt="" srcset="" />
              <p>Add something to your cart.</p>
            </div>
          </>:<><Container fluid='lg'> <Row>{productsCart.map((item, index) => (
                <Col className="col-cart" key={index}>
                  <div className="shop-cart-container-cards">
                    <img src={item.productImage} alt=""  className="cart-image-product"/>
                    <div className="details-cart-product">
                    <h1 className="title-product-cart">{item.title}</h1>
                    <p className="price-product-cart">$ {item.productPrice}</p>
                    </div>
                  </div>
                  
                  
                </Col>
              
            ))}</Row></Container></>}
            
        </div>
        {productsCart.length != 0?<button onClick={handleOnClickPay} className="btn btn-primary btn-for-pay-products" style={{position: 'fixed'}}>Pay ${totalForPay}</button>:<></>}
      </div>
    </>
  );
}

export function ShoppingCart({ products }) {
  const [cart, setCart] = useState();
  useEffect(() => {
    setCart(products);
  }, [products]);

  const getProducts = async () => {
    const res = await useContext(ProductsContext);
    console.log(res);
  };
  getProducts();

  // useEffect(() => {
  //   console.log(products)
  //   setCart(products)
  // }, )

  return (
    // <Container>
    //   <Row>
    //     {cart?cart.map((product, key) => (
    //       <Col>
    //         <h1>{product.productName}</h1>
    //         <h1>{product.productDescription}</h1>
    //         <h1>{product.productImage}</h1>
    //         <h1>{product.productPrice}</h1>
    //       </Col>
    //     )):<>No hay nada</>}
    //   </Row>
    // </Container>

    <>{products ? <>Hola si j=hay </> : <>Adios</>}</>
  );
}
export default CategorieCards;
