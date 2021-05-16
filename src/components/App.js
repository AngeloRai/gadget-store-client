import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Signup from "../routeComponents/auth/Signup";
import Login from "../routeComponents/auth/Login";
import Profile from "../routeComponents/auth/Profile";
import ProtectedRoute from "../routeComponents/auth/ProtectedRoute";
import AdminRoute from "../routeComponents/auth/AdminRoute";
import ForgotPassword from "../routeComponents/auth/ForgotPassword";
import ResetPassword from "../routeComponents/auth/ResetPassword";
import Navbar from "./Navbar";

import ProductFeed from "../routeComponents/product/ProductFeed";
import ProductDetail from "../routeComponents/product/ProductDetail";
import ProductCreate from "../routeComponents/product/ProductCreate";
import ProductEdit from "../routeComponents/product/ProductEdit";
import ProductDelete from "../routeComponents/product/ProductDelete";

import Checkout from "../routeComponents/checkout/Checkout";
import OrderSuccess from "../routeComponents/checkout/OrderSuccess";

import { AuthContextComponent } from "../contexts/authContext";
import { CartContextComponent } from "../contexts/cartContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <CartContextComponent>
          <Navbar />

          <div className="container mt-5">
            <Switch>
              <Route exact path="/" component={ProductFeed} />
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
            </Switch>
          </div>
        </CartContextComponent>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
