import { useContext } from "react";

import CardUI from "../UI/CardUI";
import CartContext from "../../store/cart-context";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const AvailableColors = () => {
  const cartCtx = useContext(CartContext);
  const dataHandler = (data) => {
    cartCtx.addItem(data);
  };
  return (
    <div className="mt-4 d-flex flex-wrap justify-content-around">
      {productsArr.map((item) => (
        <CardUI
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.imageUrl}
          price={item.price}
          data={dataHandler}
        />
      ))}
    </div>
  );
};

export default AvailableColors;
