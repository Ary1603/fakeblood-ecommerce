import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from "react-router-dom";

// CSS
import "./App.css";

// BOOTSRAP CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// COMPONENTS
import EcommerceNavbar from "./components/EcommerceNavbar";
import EcommerceCarrousel from "./components/EcommerceCarrousel";
import Newsletter from "./components/Newsletter";
import AdContainer from "./components/AdsComponents";
import PrincipalSlogan from "./components/Slogans";
import CategorieCards, {
  PingsCards,
  ProductsCards,
  ShoppingCart,
} from "./components/Cards";
import Footer from "./components/Footer";

import LoginAndRegisterContainer, {
  UploadProductForm,
} from "./components/Forms";

//IMPORT ICONS
import { SiOrigin } from "react-icons/si";
import { MdOutlineSentimentVerySatisfied, MdFiberNew } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { UserProvider } from "./context/user";
import UserProfile from "./components/UserProfile";

// BD provicional brands
export const brands = [
  {
    name: "Chanel",
    img: "https://1000marcas.net/wp-content/uploads/2019/12/logo-Chanel.png",
  },
  {
    name: "Calvin Klein",
    img: "https://i.pinimg.com/originals/cf/43/b1/cf43b15c7ba9e3517f41ef27b6c26e03.jpg",
  },
  {
    name: "Nautica",
    img: "https://1000marcas.net/wp-content/uploads/2021/05/Nautica-Watches-Logo.png",
  },
  {
    name: "Gucci",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gucci_logo.svg/997px-Gucci_logo.svg.png",
  },
  {
    name: "Dolce & Gabbana",
    img: "https://1000marcas.net/wp-content/uploads/2020/01/logo-Dolce-and-Gabbana.png",
  },
  {
    name: "Adidas",
    img: "https://graffica.info/wp-content/uploads/2022/12/Adidas-Logo-1971.jpeg",
  },
  {
    name: "Levis",
    img: "https://1000marcas.net/wp-content/uploads/2020/01/Levis-emblema.jpg",
  },
  {
    name: "Rolex",
    img: "https://thumbs.dreamstime.com/b/logo-rolex-129555490.jpg",
  },
];

// PINGS DB

export const pings = [
  {
    icon: <SiOrigin />,
    ping_title: "Original Products",
    ping_description:
      "We provide money back guarantee if the product are not original",
  },
  {
    icon: <MdOutlineSentimentVerySatisfied />,
    ping_title: "Satisfaction Guarantee",
    ping_description:
      "Exchange the product you've purchased if it doesn't fit on you",
  },
  {
    icon: <MdFiberNew />,
    ping_title: "New Arrival Everyday",
    ping_description: "We update our collections almost everyday",
  },
  {
    icon: <FaShippingFast />,
    ping_title: "Fast & Free Shipping",
    ping_description: "We offer fast and free shipping for our loyal costumers",
  },
];
function App() {
  const [categories, setCategories] = useState();
  const [userLogged, setUserLogged] = useState(false);
  const [userName, setUserName] = useState();

  const [productsApiPlatzi, setProductsApiPlatzi] = useState([]);
  const [productsMongoDB, setProductsMongoDB] = useState([]);
  const [fakeBloodProducts, setfakeBloodProducts] = useState([]);
  const [cartProductsForPay, setCartProductsForPay] = useState();

  //Fetch
  const fetchApi = (url) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.menuItems);
        setCategories(data);
        //console.log(data);
      })
      .catch((error) => console.error("Error en la peticion: " + error));
  };

  useEffect(() => {
    fetchApi("https://api.escuelajs.co/api/v1/categories");

    //fetch("https://api.escuelajs.co/api/v1/products", {
      fetch("/api/get-products", {
      
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setProductsApiPlatzi(data);
        data.map((item) => {
          //console.log("hola")
          setfakeBloodProducts((prod) => [...prod, item]);
        });
        //console.log(data);
      })
      .catch((error) => console.error("Error en la peticion: " + error));
  }, []);

  //console.log(fakeBloodProducts)

  //console.log(fakeBloodProducts)
  // console.log(productsApiPlatzi)
  function verifyIfUserIsLogged(itsLogged) {
    setUserName(itsLogged);
  }

  function cartProducts(products) {
    setCartProductsForPay(products);
    console.log(products);
  }

  return (
    <>
    <UserProvider>
      <div className="strip-offers">
        <p>
          Sign up GET 20% OFF for your first order.{" "}
          <a href="#" id="sign-up-now-strip-offer">
            Sign up now
          </a>
        </p>
      </div>

      <div className="landing-page-body-container">
        {/* NAVBAR */}
        <EcommerceNavbar userName={userName} />

        <BrowserRouter>
          <Routes>

            <Route
              path="/my-profile"
              element={
                <UserProfile/>
              }
            />

            <Route
              path="/"
              element={
                <>
                  {/* CARROUSEL */}
                  <EcommerceCarrousel />

                  <h2 className="brands-title">Brands</h2>
                  <div className="container-img-brands">
                    {brands.map((brand, key) => (
                      <img
                        key={key}
                        src={brand.img}
                        alt=""
                        className="brand-images"
                      />
                    ))}
                  </div>

                  {/* SLOGANS CONTAINER */}
                  <PrincipalSlogan />

                  {/* PINGS CONTAINER */}
                  <div className="pings-container">
                    {/* Component for the cards of the pings */}
                    <PingsCards pings={pings} />
                  </div>

                  {/* CATEGORIES CONTAINER */}
                  <h2 className="categories-title">Categories</h2>
                  <CategorieCards categories={categories} />

                  {/* AD CONTAINER */}
                  <AdContainer />

                  {/* NEWSLETTER CONTAINER */}
                  <Newsletter />
                </>
              }
            />

            <Route
              path="/login"
              element={
                <>
                  <LoginAndRegisterContainer
                    verifyUser={verifyIfUserIsLogged}
                  />
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <LoginAndRegisterContainer />
                </>
              }
            />

            <Route
              path="/shop"
              element={
                <>
                  <ProductsCards
                    fakeBlood={fakeBloodProducts}
                    cartProducts={cartProducts}
                  />
                </>
              }
            />

            <Route
              path="/shopping-cart"
              element={<ShoppingCart products={cartProductsForPay} />}
            />

            <Route path="/sell-product" element={<UploadProductForm />} />
          </Routes>
        </BrowserRouter>
      </div>

      {/* FOOTER */}
      <Footer />
      </UserProvider>
    </>
    
  );
}

export default App;
