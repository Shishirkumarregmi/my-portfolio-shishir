// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';

// // Import your page components
// import Home from './pages/Home';
// import Experience from './pages/Experience';
// import Contact from './pages/Contact';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/experience" exact component={Experience} />
//         <Route path="/contact" exact component={Contact} />
//       </Switch>
//     </Router>
//   );
// };


import {BrowserRouter , Routes , Route} from 'react-router-dom'
// Import your page components
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const App = () => {
  return (
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path='/experience' element={<Experience/>} />
<Route exact path='/contact' element={<Contact/>} />

</Routes>

</BrowserRouter>
  );
};
export default App;