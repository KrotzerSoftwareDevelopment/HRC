import React from 'react';
import emailjs from 'emailjs-com';
import {Row, Col} from 'react-bootstrap';
import './App.css';

export default function ContactPage() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_pzcsvz8', 'template_vq23xgh', e.target, 'user_NHnlHshvO8svIFZdDA6o8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert("Message Sent, a conformation will be sent to the email shortly")
  }

  return (
    <div className="ContactContainer">
    <div className="PageContainer">
      <h1> Contact </h1>
        <Row>
        <div className="contactHeader">
 <Col>
    Email: <a href="mailto:homeraisedcairns@gmail.com"> homeraisedcairns@gmail.com </a>
    </Col>
    <Col>
    Phone:  <a href="tel:5418199410"> (541) 819 9410 </a>
    </Col>
    </div>
    <br />

    </Row>
    <div className="form-group">
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <br />
      <Row>
                <Col>
   
      <input type="text" className="form-control" placeholder="First Name" name="firstname" />
      </Col>
      <br />
      <Col>
      <input type="text" className="form-control" placeholder="Last Name" name="lastname" />
      </Col>
      </Row>
      <br />
      <input type="text" className="form-control" placeholder="Phone Number" name="phone" />
<br />
      <input type="email" className="form-control" id="email" placeholder="Email" name="email" />
      <br />
      <div className="form-group">

      <label>Message</label>
      <textarea className="form-control" rows="10" id="message" name="message" />
      </div>
      <input type="submit" id="sendBtn" value="Send" />
    </form>
    <div className="Mobile">
          <div class="g-recaptcha" data-sitekey="6LddIOEZAAAAANyRLXS-CEU7ohRMY0AxbrQzfU3G"></div>
          </div>
          </div>
    </div>
    </div>
  );
}



// import React from 'react';
// import axios from 'axios';
// import emailjs from 'emailjs-com';
// import {Row, Col} from 'react-bootstrap';
// class Contact extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       feedback: "",
//     };
//   }

  

//   //   this.state = {
//   //     firstName: '',
//   //     lastName: '',
//   //     phone: '',
//   //     email: '',
//   //     message: ''
//   //   }
//   // }

//   handleInputChange(event) {
//     event.preventDefault();
//     const target = event.target;
//     const name = target.name;
//     const value = target.value;
// this.setState({ [name]: value });
//   }


//   sendMessage(event) {
//     event.preventDefault();
// if (!this.validateMail()) {
//       return;
//     }
// const templateParams = {
//       from_name: this.state.name + " (" + this.state.email + ")",
//       to_name: {'homeraisedcairns@gmail.com'},
//       feedback: this.state.feedback
//     };
// emailjs
//       .send("gmail", "portfoliositecontact", templateParams, {id given from your EmailJS template})
//       .then(
//         function(response) {
//           toast.success("Your message has successfully sent!", {
//             position: toast.POSITION.BOTTOM_CENTER
//           });
//           console.log("SUCCESS!", response.status, response.text);
//         },
//         function(err) {
//           toast.error("Your message was not able to be sent");
//         }
//       );
// this.setState({
//       name: "",
//       email: "",
//       feedback: ""
//     });
//   }
//   // handleSubmit(e){
//   //   e.preventDefault();
//   //   axios({
//   //     method: "POST", 
//   //     url:"http://localhost:3002/send", 
//   //     data:  this.state
//   //   }).then((response)=>{
//   //     if (response.data.status === 'success') {
//   //       alert("Thank You for your time and interest! \n Home Raised Cairns sent your message successfully."); 
//   //       this.resetForm()
//   //     } else if (response.data.status === 'fail') {
//   //       alert("Message failed to send.")
//   //     }
//   //   })
//   // }

//   // resetForm(){
//   //   this.setState({firstName: "", lastName: "", phone: "", email: "", message: ""})
//   // }

// render(){
//   return (

//     <div>
//     <form
//       className="ui form"
//       id={this.props.id}
//       name={this.props.name}
//       method={this.props.method}
//       action={this.props.action}
//     >
//       <textarea
//         id="name"
//         name="name"
//         onChange={this.handleInputChange.bind(this)}
//         placeholder="your name"
//         required
//         value={this.state.name}
//         style={{ width: "100%" }}
//         rows={1}
//       />
//       <br />
//       <textarea
//         id="email"
//         name="email"
//         onChange={this.handleInputChange.bind(this)}
//         placeholder="your email address"
//         required
//         value={this.state.email}
//         error={this.state.errors.email}
//         style={{ width: "100%" }}
//         rows={1}
//       />
//       <br />
//       <textarea
//         id="feedback"
//         name="feedback"
//         onChange={this.handleInputChange.bind(this)}
//         placeholder="what would you like to chat about?"
//         required
//         value={this.state.feedback}
//         style={{ width: "100%", height: "250px" }}
//       />
//       <br />
//       <input
//         type="button"
//         value="Send"
//         className="ui button"
//         style={{
//           fontFamily: "Amatic SC",
//           fontSize: "20px",
//           color: "blue"
//         }}
//         onClick={this.sendMessage.bind(this)}
//       />
//     </form>
//   </div>
// //     <div className="ContactContainer">
// //     <div className="PageContainer">
// //       <h1> Contact </h1>
// //         <Row>
// //         <div className="contactHeader">
// //  <Col>
// //     Email: <a href="mailto:homeraisedcustomercare@gmail.com"> homeraisedcustomercare@gmail.com </a>
// //     </Col>
    

// //     <Col>

// //     Phone:  <a href="tel:5418199410"> (541) 819 9410 </a>

// //     </Col>
  
// //     </div>
// //     <br />
   
// //     </Row>
    
// //     <br />
 
// //   <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
// //           <div className="form-group">
    
            
// //               <Row>
// //                 <Col>
// //               <input type="text" className="form-control" placeholder="First Name" id="firstName" value={this.state.firstName} onChange={this.onFirstNameChange.bind(this)} />
// //               </Col>
// //               <br />
// //               <Col>
// //               <input type="text" className="form-control" placeholder="Last Name" id="lastName" value={this.state.lastName} onChange={this.onLastNameChange.bind(this)} />
// //               </Col>
// //               </Row>
// //               <br />
              
              
// //               <input type="text" className="form-control" placeholder="Phone Number" id="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
          
// //               <br />
              
// //               <div className="email">
// //               <input type="email" className="form-control" id="email" placeholder="Email"  aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
// //               </div>
              
// //           </div>
         
// //           <div className="form-group">
// //               <label htmlFor="message">Message:</label>
// //               <textarea className="form-control" rows="10" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
// //           </div>
// //         <div className="Mobile">
// //           <div class="g-recaptcha" data-sitekey="6LddIOEZAAAAANyRLXS-CEU7ohRMY0AxbrQzfU3G"></div>
// //           </div>
// //           <br />
// //       <button type="submit" id="submitbutton" value="Submit"> Submit </button>
     
// //         </form>
// // <br />
// //         </div>
// //         </div>

        
//       );
//   }
//   // onFirstNameChange(event) {
//   //   this.setState({firstName: event.target.value})
//   // }
//   // onLastNameChange(event) {
//   //   this.setState({lastName: event.target.value})
//   // }
//   // onPhoneChange(event) {
//   //   this.setState({phone: event.target.value})
//   // }

//   // onEmailChange(event) {
//   //   this.setState({email: event.target.value})
//   // }

//   // onMessageChange(event) {
//   //   this.setState({message: event.target.value})
//   // }
// }

// export default Contact;