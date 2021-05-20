import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import Signup from "../../routeComponents/auth/Signup";
import Login from "../../routeComponents/auth/Login";
import Profile from "../../routeComponents/auth/Profile";
import ProtectedRoute from "../../routeComponents/auth/ProtectedRoute";
import AdminRoute from "../../routeComponents/auth/AdminRoute";
import ForgotPassword from "../../routeComponents/auth/ForgotPassword";
import ResetPassword from "../../routeComponents/auth/ResetPassword";
import Navbar from "../NavbarComponent/NavbarComponent";
import HeroCarousel from '../HeroCarousel/HeroCarousel'
import AllProducts from '../../routeComponents/product/AllProducts/AllProducts'
import Iphone from '../../routeComponents/product/Iphone/Iphone'
import Ipad from '../../routeComponents/product/Ipad/Ipad'

import Footer from '../Footer/Footer'

import Home from "../../routeComponents/product/Home/Home";
import ProductDetail from "../../routeComponents/product/ProductDetail/ProductDetail";
import ProductCreate from "../../routeComponents/product/ProductCreate";
import ProductEdit from "../../routeComponents/product/ProductEdit";
import ProductDelete from "../../routeComponents/product/ProductDelete";

import Checkout from "../../routeComponents/checkout/Checkout/Checkout";
import OrderSuccess from "../../routeComponents/checkout/OrderSuccess/OrderSuccess";

import { AuthContextComponent } from "../../contexts/authContext";
import { CartContextComponent } from "../../contexts/cartContext";
//style={{height: "calc(100% - 70px)"}}
function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <CartContextComponent>
          <Navbar />
          <Route exact path="/" component={HeroCarousel} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/iphone" component={Iphone} />
            <Route exact path="/ipad" component={Ipad} />
            <div className="container mt-5" style={{ minHeight: "calc(100vh - 265px)" }}>
              <Route exact path="/all-products" component={AllProducts} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/password-reset" component={ResetPassword} />
              <ProtectedRoute exact path="/profile" component={Profile} />
              <AdminRoute
                exact
                path="/create-product"
                component={ProductCreate}
              />
              <Route exact path="/product/:id" component={ProductDetail} />
              <AdminRoute
                exact
                path="/product/edit/:id"
                component={ProductEdit}
              />
              <AdminRoute
                exact
                path="/product/delete/:id"
                component={ProductDelete}
              />
              <ProtectedRoute exact path="/checkout" component={Checkout} />
              <Route exact path="/order/success" component={OrderSuccess} />
            </div>
          </Switch>
          <Footer />
        </CartContextComponent>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
