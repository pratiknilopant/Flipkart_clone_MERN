import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import DetailView from './components/itemDetails/DetailView'
import Cart from './components/cart/Cart'

import { Box } from '@mui/material';
import DataProvider from './Context/DataProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <DataProvider>
            <BrowserRouter>
                <div>
                    <Header />
                    <Box style={{ marginTop: 60 }}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/product/:id' element={<DetailView />} />
                            <Route path='/cart' element={<Cart />} />
                        </Routes>
                    </Box>
                </div>
            </BrowserRouter>
        </DataProvider>
    );
}

export default App;
