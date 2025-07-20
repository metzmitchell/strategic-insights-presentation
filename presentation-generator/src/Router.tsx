import { Routes, Route } from 'react-router-dom'
import StrategicPresentation from './pages/StrategicPresentation'

export default function Router() {
    return (
        <Routes>
            <Route path="*" element={<StrategicPresentation />} />
        </Routes>
    )
}
