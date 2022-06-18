import '../css/form.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useEffect } from 'react';


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
    // if(!error){

    //   // emailjs.sendForm('service_l3jqtz3', 'template_wq47xpg', e.target, 'LidHyzsmZ0-R4ClFZ')
    //   //   .then((result) => {
    //   //       console.log(result.text);
    //   //   }, (error) => {
    //   //       console.log(error.text);
    //   //   });
    //     e.target.reset()
    //     console.log('error',error)
    //     handleShow();
    //     setEmail(null)
    // }
  }

  const fillEmailForm = (e) => {

    setEmail({
      ...email,
      [e.target.name]: e.target.value
    })
    // console.log(email)

  }

  const validate = (e) => {
    const form = document.getElementById('formulario')
    const errorMsg = document.getElementById("errorMsg")
    e.preventDefault()
    console.log(email)

    if (email) {
      if (!email.name || !email.email || !email.lastname || !email.comment) {
        return setError(true)
      } else {

        if (validateEmail(email.email)) {
          setError(false)
          emailjs.sendForm('service_l3jqtz3', 'template_wq47xpg', e.target, 'LidHyzsmZ0-R4ClFZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
          form.reset()
          handleShow();
          setEmail(null) 
          errorMsg.innerText = ""
        } else {
          setError(true)
          errorMsg.innerText = `Please enter a valid email :(`
        }
      }
    } else {
      setError(true)
      errorMsg.innerText = `Please fill all the fields :(`
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