import { useRef, useState } from "react";
import styles from "./Login.module.scss";

export const Uncontrol = () => {
  const inputRef: any = useRef(null);
  const [errors, setErrors]: any = useState({});
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    let validationErrors = {};
    const inputValue = formData.get("inputName");
    console.log("input value", inputValue);

    //validators
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log(errors);
    } else {
      // Handle the successful form submission, e.g., sending formData to a server
      console.log(Array.from(formData.entries()));
      setErrors({}); // Clear any previous errors
    }
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formControl}>
      <h3> Uncontrollable form </h3>
      <input type="text" name="inputName" ref={inputRef} required />
      {errors.inputName && <div className="error">{errors.inputName}</div>}
      <button type="submit" onClick={focusInput}>
        Send
      </button>
    </form>
  );
};

/***
 * benefits: less boilerplate
 * if your form is broken into subcomponents and you need to focus on one of them from your parent form,
 * or a sibling of the subcomponent,
 * you need to pass around a ref from the parent
 * non-form-specific ref use-cases - such as saving previous values with a useEffect,
 * or measuring the physical size of an element like a textarea that a user can expand
 *
 * demerits: you don’t have direct access to each input’s value.
 * This can make custom validation more difficult
 *  */

/**
 * Mixed form
 * create seperate formInput and update in the parenform
 * It avoids the rerender while in mixed form
 */

/**
   * If you’re used to controlled inputs, then on a first glance at the code above, you might think, 
   * “how does the parent form know the value of the child phone input if it’s not passing in some state setter or a ref?” To understand that, 
   * remember that when the React code is rendered as HTML, the browser will only “see” the HTML for the form and the inputs inside,
   *  including the input which the PhoneInput renders - the structure of our React components has no impact on the functionality of our rendered HTML. 
   * Then, that input value will be included in the FormData like any other field in the form. 
   * This is the power of encapsulation and composition of components in React. 
   * We can localize the re-renders to the minimum-affected JSX, 
   * while the DOM all still comes together as native HTML.

This is also useful for building dynamic forms. If you were. managing a state object using controlled components, 
you'd need to add and remove properties manually when form fields were created or removed. 
On the other hand, with uncontrolled components, you can just render/unrender inputs with unique names,
 and their values will automatically appear in the FormData on-submit.
 Some thoughts in conclusion:

In my experience, most forms are a mixture of uncontrolled and controlled inputs. The reason we have both of those options is flexibility and we shouldn’t be dogmatic. We can use them both together, as in the React Server Components example above (although server components are not needed for that example).
Today, I favor uncontrolled inputs wherever I can. I believe this simplifies the code structure and performance.
Use “new FormData(...)” in your onSubmit functions instead of using refs. Seriously.
Use composition and encapsulation for controlled inputs to minimize the impact of state updates on other components, and rely on the rendered, composed DOM for submit events. 
 
 */
