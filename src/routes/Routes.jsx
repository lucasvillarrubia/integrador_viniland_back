import React from 'react'
import { Routes as AllRoutes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Checkout from '../pages/checkout/Checkout';
import MyOrders from '../pages/myOrders/MyOrders';
import Receipt from '../pages/receipt/Receipt';
import NotFound from '../pages/notFound/NotFound';
import Success from '../pages/success/Success';
import Verify from '../pages/verify/Verify';
import Home from '../pages/home/Home';
import ProtectedRoute from '../components/globalComponents/ProtectedRoute/ProtectedRoute';


function Routes () {
        return (
                <AllRoutes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/verify' element={<Verify />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route element={<ProtectedRoute redirPath={'/login'} />}>
                                <Route path='/checkout' element={<Checkout />} />
                        </Route>
                        <Route element={<ProtectedRoute redirPath={'/login'} />}>
                                <Route path='/my-orders' element={<MyOrders />} />
                        </Route>
                        <Route element={<ProtectedRoute redirPath={'/login'} />}>
                                <Route path='/receipt/:oId' element={<Receipt />} />
                        </Route>
                        <Route element={<ProtectedRoute redirPath={'/login'} />}>
                                <Route path='/congratulations' element={<Success />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                </AllRoutes>
        )
}

export default Routes