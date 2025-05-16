import { Routes, Route, redirect, NavLink } from 'react-router-dom'
import { Main } from '../pages/main'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}