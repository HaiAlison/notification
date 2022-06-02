import React, { useState } from 'react';

const Product = (props) => { //this is one component
    //declare a new state variable, setQuantity is a function => update quantity,
    // state only in one component
    const { onCalculateTotal, price, onSendFunction} = props;
    const [clicked, setQuantity] = useState(0)
    const click = () => {
        setQuantity(clicked+1)
        onCalculateTotal(price)
    }
  return (
      <>
      <h1>This is a {props.name}</h1>
      <button className="styleButton" onClick={click}>Click</button>
          { onSendFunction &&
              <>
                  <p>Send the function from the parent component to the child component </p>
                  <button className="styleButton" onClick={() => props.onSendFunction(props.name)}>Send</button>
              </>
          }
          <h3>Clicked {clicked} for price {props.price}</h3>
      </>
  )
}

const ReuseProductComponent = () => {
    const [total,setTotal] = useState(0)
    const sendFunctionByProps = (name) => {
      alert(`sent function by props ${name}`)
    }
    const calculateTotal = (price) => {
        setTotal(total+price);
    }
   return (
       <>
           <Product name="Product 1"
                    price={100}
                    onSendFunction={sendFunctionByProps}
                    onCalculateTotal={calculateTotal}/>
           {/*this is a props (inside component)
           can transfer data into components*/}
           <Product name="Product 2" price={200}
                    onCalculateTotal={calculateTotal}/>
           <Product name="Product 3" price={300}
                    onCalculateTotal={calculateTotal}/>
           <Total totalCash={total}/>
       </>
   )
}
const Total = ({totalCash}) => {
    return (
        <p>Total {totalCash}</p>
    )
}
export default ReuseProductComponent