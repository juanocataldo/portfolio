import '../css/form.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import party from "party-js";
import Toastify from 'toastify-js'


export function Form() {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState(null)
  const [error, setError] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // console.log(email)

  }, [email])

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const sendEmail = (e) => {

   
    setError(true)
    e.preventDefault();
    validate(e)
 
  }

  const fillEmailForm = (e) => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value
    })
  }

  const validate = (e) => {
    party.confetti(e.target, {
      count: party.variation.range(20,40),
    });
   
    const form = document.getElementById('formulario')
    const errorMsg = document.getElementById("errorMsg")
    e.preventDefault()

    if (email) {
      if (!email.name || !email.email || !email.lastname || !email.comment) {
        return setError(true)
      } else {

        if (validateEmail(email.email)) {
          setError(false)
          emailjs.sendForm('service_l3jqtz3', 'template_wq47xpg', e.target, 'LidHyzsmZ0-R4ClFZ')
            .then((result) => {
              console.log('ok');
             
            }, (error) => {
                console.log(error.text);
            });
          form.reset()
          handleShow();
          setEmail(null) 
          errorMsg.innerText = ""
        } else {
          setError(true)
          Toastify({
            text: `Please enter a valid email :(`,
            duration: 3000,
      
            newWindow: true,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "red",
              padding: "20px"
            },
            onClick: function () { } // Callback after click
          }).showToast();
          errorMsg.innerText = `Please enter a valid email :(`
        }
      }
    } else {
      setError(true)
      console.log('bad fields');
      
      // errorMsg.innerText = `Please fill all the fields :(`
      Toastify({
        text: `Please fill all the fields :(`,
        duration: 3000,
  
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
          padding: "20px"
        },
        onClick: function () { } // Callback after click
      }).showToast();
    }
  }

  return <section id="contact">

    
    
  <div className='container'>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Email sent!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Thanks for your contact! I'll be reading you soon.</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>


    <form onSubmit={sendEmail} id='formulario'>
      <h1 className='titles mt-5'>CONTACT</h1>
      <div className="form">
        <h5 id='contactLabel'>Mail</h5>
        <input type="text" name="email" class="input" placeholder="Your email" autoComplete="off" onChange={fillEmailForm} />

        <h5 className='mt-5' id='contactLabel'>Name</h5>
        <input type="text" name="name" class="input " placeholder="Your name" onChange={fillEmailForm} />

        <h5 className='mt-5' id='contactLabel'>Lastname</h5>
        <input type="text" name="lastname" class="input" placeholder="Your lastname" onChange={fillEmailForm}></input>

        <h5 className='mt-5' id='contactLabel'>Little comment</h5>
        <input type="text" name="comment" class="input" placeholder="Give me feedback or comment" onChange={fillEmailForm}></input>
        <br />
        <span id="errorMsg">

        </span>



        <br /><br />
        <div className="btnForm">
          <button type='submit' class="btn"><span>Send</span></button>
        </div>
      </div>

    </form>
  </div>
  </section> 
}