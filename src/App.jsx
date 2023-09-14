import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Cart from "./components/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleSelect = (card) => {
    let countCredit = card.credit;
    let countPrice = card.price;
    let isExist = selectedCourses.find((item) => item.id === card.id);
    if (isExist) {
      return toast.warn('You Have Already Added This Course', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      selectedCourses.forEach(() => {
        countCredit += totalCredit;
        countPrice += totalPrice;
      });
      if (countCredit > 20) {
        toast.warn('Your Credit Limit Reached', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else {
        setTotalPrice(countPrice);
        setTotalCredit(countCredit);
        setRemaining(20 - countCredit);
        setSelectedCourses([...selectedCourses, card]);
      }
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-14">
      <ToastContainer  autoClose={3000} />
      <Header></Header>
      <div className="md:flex gap-6">
        <Cards handleSelect={handleSelect}></Cards>
        <Cart
          selectedCourses={selectedCourses}
          totalCredit={totalCredit}
          remaining={remaining}
          totalPrice={totalPrice}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
