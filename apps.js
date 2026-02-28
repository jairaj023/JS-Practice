import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
    return (
        <div className="app-root">
            <Header />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="/search" replace />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />


                    <Route
                        path="/profile"
                        element={<ProtectedRoute><Profile /></ProtectedRoute>}
                    />


                    <Route
                        path="/dashboard"
                        element={<ProtectedRoute adminOnly><Dashboard /></ProtectedRoute>}
                    />


                    <Route path="/search" element={<Search />} />


                    <Route path="*" element={<div>404 - Not Found</div>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}


export default App;