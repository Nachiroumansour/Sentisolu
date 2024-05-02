import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Routes, Route } from 'react-router-dom';

import Accueil from './component/Accueil';
import Header from './component/Header';
import Footer from './component/Footer';
import Apropos from './component/Apropos';
import Tarif from './component/Tarif';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={<HeaderFooterLayout />}>

        </Route>

        <Route path="/" element={<AccueiltWithHeaderFooter />} />
        <Route path="/Apropos" element={<AproposltWithHeaderFooter />} />
        <Route path="/Tarifs" element={<TarifltWithHeaderFooter/>} />


      </Routes>
    </>
  )
}

function HeaderFooterLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}


function AccueiltWithHeaderFooter() {
  return (
    <HeaderFooterLayout>
      <Accueil />
    </HeaderFooterLayout>
  );
}
function AproposltWithHeaderFooter() {
  return (
    <HeaderFooterLayout>
      <Apropos />
    </HeaderFooterLayout>
  );
}
function TarifltWithHeaderFooter() {
  return (
    <HeaderFooterLayout>
      <Tarif />
    </HeaderFooterLayout>
  );
}




export default App
