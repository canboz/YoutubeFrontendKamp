import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { calculateTotal } from './control/cartSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div className="App">
      <Navbar />
      <CourseList />
    </div>
  );
}

export default App;
