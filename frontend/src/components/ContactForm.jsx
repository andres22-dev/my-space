const ContactForm = () => {

  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form action="">
        <label>Name</label>
        <input type="text" name="" required/>
        <label>Email</label>
        <input type="email" name="" required/>
        <label>Subject</label>
        <input type="text" name="" required/>
        <label>Message</label>
        <textarea name="message" id="" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
    
}
  
export default ContactForm