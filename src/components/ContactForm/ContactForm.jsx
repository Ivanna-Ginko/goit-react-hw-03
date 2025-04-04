import css from "./ContactForm.module.css"

export default function ContactForm ({ onAdd }) {

const handleSubmit = e => {
  e.preventDefolt();
  onAdd( 
    {
    id: Date.now(), 
    name: e.target.elements.name.value, 
    number: e.target.elements.number.value,
    }
   );
  e.target.reset();
}

    return (
        <form className={css.form} onSubmit={handleSubmit}>
          <input className={css.input} type="text" name="name" />
          <input className={css.input} type="number" name="number" />
          <button className={css.btn} type="submit">Add contact</button>
        </form>
      );
}