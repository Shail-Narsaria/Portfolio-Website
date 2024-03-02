import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactTextCont">
        <h1>LET'S CONNECT</h1>
        <div className="contactInfo">
            <h2>E-Mail</h2>
            <span>shailnarsaria18@gmail.com</span>
        </div>
      </div>
      <div className="formCont">
        <form>
            <input type="text" placeholder="Name" required></input>
            <input type="email" placeholder="E-Mail" required></input>
            <textarea placeholder="Message" rows={5}></textarea>
            <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
