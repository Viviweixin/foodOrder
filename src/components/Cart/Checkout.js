import { useRef, useState  } from 'react';
import classes from './Checkout.module.css';

const isEmpy = value => value.trim() === '';
const isFourChars = value => value.trim().length === 4;

const Checkout = (props) => {

   const [formInputsValidity, setFormInputsValidity] = useState({
       name: true,
       street:true,
       city:true,
       postalCode:true
   })

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpy(enteredName);
    const enteredStreetIsValid = !isEmpy(enteredStreet);
    const enteredPostalCodeIsValid = isFourChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpy(enteredCity);

    setFormInputsValidity({
        name:enteredNameIsValid ,
        street:enteredStreetIsValid,
        city:enteredCityIsValid ,
        postalCode:enteredPostalCodeIsValid
    })

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;

    if(!formIsValid){
        return
    }
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,
        city: enteredCity
    })
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef}/>
        {!formInputsValidity.postalCode && <p>Please enter a valid name!</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;