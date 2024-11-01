import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Redirect from './pages/Redirect';
import QueryPage from './pages/QueryPage';
import NotFound from './pages/NotFound';
import Students from './pages/Students';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/students' element={<Students />}>
          <Route path=':nome' element={<div>Estudar é coisa de vagabundo</div>} />
        </Route>
        <Route path='/query-page/:name' element={<QueryPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

/*
  Outlet => permite que o conteúdo de uma rota filha(aninhada) seja exibida na rota
*/
