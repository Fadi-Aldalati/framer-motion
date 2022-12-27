import React, { useState} from 'react';
import { Route  , Routes ,  useLocation} from 'react-router-dom';
import Main from './components/main';
import NavBar from './components/navBar';
import Base from './components/base';
import Order from './components/order';
import Toppings from './components/topping';
import Model from './components/model';
import { AnimatePresence } from 'framer-motion';
import "./App.css";

function App(){
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModel,setShowModel] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (  
    <>
      <NavBar />
      <Model showModel={showModel} setShowModel={setShowModel}/>
        
          <AnimatePresence exitBeforeEnter onExitComplete={()=>setShowModel(false)}>
            <Routes location={location} key={location.key}>
            <Route path="/main" element={<Main/>} />
            <Route path="/base"  element={<Base pizza={pizza} addBase={addBase}/>}/>
            <Route path="/toppings"  element={<Toppings pizza={pizza} addTopping={addTopping}/>}/>
            <Route path="/order"  element={<Order pizza={pizza} setShowModel={setShowModel} />}/>
            <Route path="/" element={<Main/>} />
          </Routes>
          </AnimatePresence>
       
    </>
  );
}
 
export default App;