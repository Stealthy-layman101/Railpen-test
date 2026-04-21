import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RailPen() {
    // State variables
    const [step, setStep] = useState(1);
    const [confirmed, setConfirmed] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        number:"",
        company:""
    })

    const [ errors, setErrors] = useState({});

  const handleSubmit = (e) => {
  // prevent default action  
  e.preventDefault(); 

  // displays alert if box is unchecked
  if (!confirmed) {
    alert("Confirmation box not checked");
    return;
  }

  // Convert formData to string
  const dataSummary = JSON.stringify(formData, null, 2);

  //displays alert with form data
  alert(`Form data saved successfully!\n\n${dataSummary}`);

  // Reload the page and clear state
  window.location.reload();
};

// Email validation using simple regex
   const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Function to handle going to next step
const handleNext = (e) => {
    e.preventDefault();
     
  let newErrors = {};

    if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }


  if (!formData.email) {
    newErrors.email = "Email is required";
  }

  else if (!validateEmail(formData.email)) {
    newErrors.email = "Enter a valid email address";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setErrors({});
  setStep(2);
};

  return (
    <>
      <div>
        <div className="d-flex justify-content-between p-2">
          <div className="d-flex mt-3">
            <h4 className="purple">
              Your site <span style={{ color: "#EC7125" }}>Design</span>
            </h4>
          </div>
          <button className="login-btn text-white px-4 py-2 m-2 border rounded-5">
            Log in
          </button>
        </div>
        <h1 className="h1 purple text-center">Get a project quote</h1>
        <p className="text-center grey">
          Please fill in the form below to recieve a quote for your project.
          Click next step to continue
        </p>

{ step === 1 && (
        <div className="form-one mx-3 border border-white rounded shadow">
          <div className="p-3">
            <div className="d-flex justify-content-evenly">
              <p
                style={{ backgroundColor: "#EC7125" }}
                className="text-white rounded-circle text-center w-25 p-2"
              >
                1
              </p>
              <p
                style={{ backgroundColor: "#AFAFAF" }}
                className="text-white rounded-circle text-center w-25 p-2"
              >
                2
              </p>
            </div>
            <hr />
            <h2 className="mx-1 purple h2">Contact details</h2>
            <p className="mx-1 grey">Enter your details below</p>
            <div className="d-flex">
              <div className="d-flex flex-column col-6">
                <label name="fullname" className="mx-1 purple">
                  Name <span className="text-danger">*</span>
                </label>

                <input
                  className="grey mt-2 mx-1 border rounded p-1 shadow"
                  type="text"
                  required
                  placeholder="John Carter"
                    value={formData.name}
  onChange={(e) =>
    setFormData({ ...formData, name: e.target.value })
  }
                />
                {errors.name && (
  <small className="text-danger mx-1">{errors.name}</small>
)}
              </div>

              <div className="d-flex flex-column col-6">
                <label className="mx-1 purple" name="email">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  className="grey mt-2 mx-1 border rounded p-1 shadow"
                  type="email"
                  required
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email:e.target.value })}
                />
                {errors.email && (
  <small className="text-danger mx-1">{errors.email}</small>
)}
              </div>
            </div>

            <div className="d-flex mt-4">
              <div className="d-flex flex-column col-6">
                <label className="mx-1 purple" name="phone">
                  Phone number
                </label>
                <input
                  className="grey mt-2 mx-1 border rounded p-1 shadow"
                  type="number"
                  placeholder="07712345678"
                   value={formData.number}
                  onChange={(e) => setFormData({ ...formData, number:e.target.value })}
                />
              </div>

              <div className="d-flex flex-column col-6">
                <label className="mx-1 purple" name="company">
                  Company
                </label>
                <input
                  className="grey mt-2 mx-1 border rounded p-1 shadow"
                  type="text"
                  placeholder="Company name"
                   value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company:e.target.value })}
                />
              </div>
            </div>
          </div>
                  <button type="button" onClick={handleNext}
          style={{ position:"absolute", marginTop:"1rem", zIndex:"1" }}
          className="next-btn text-white shadow border rounded-5 px-3 py-2"
        >
          Next step
        </button>
        </div>
)}

{step === 2 && (
        <form onSubmit={handleSubmit} className="form-two mx-3 border border-white rounded shadow">
          <div className="p-3">
            <div className="d-flex justify-content-evenly">
              <p
                style={{ backgroundColor: "#EC7125" }}
                className="text-white rounded-circle text-center w-25 p-2"
              >
                1
              </p>
              <p
                style={{ backgroundColor: "#EC7125" }}
                className="text-white rounded-circle text-center w-25 p-2"
              >
                2
              </p>
            </div>
            <hr />
            <h2 className="mx-1 purple h2">Confirm your details</h2>
            <div className="d-flex">
              <div className="d-flex flex-column col-6">
                <label name="fullname" className="mx-1 purple">
                  Name 
                </label>
                <p style={{wordWrap:"break-word"}}  className="grey my-1 mx-1 ">{formData.name}</p>
              </div>

              <div className="d-flex flex-column col-6">
                <label className="mx-1 purple" name="email">
                  Email
                </label>
                <p style={{wordWrap:"break-word"}} className="grey my-1 mx-1">{formData.email}</p>
              </div>
            </div>

            <div className="d-flex mt-4">
              <div className="d-flex flex-column col-6">
                <label className="mx-1 purple" name="phone">
                  Phone number
                </label>
                <p style={{wordWrap:"break-word"}}  className="grey my-1 mx-1">{formData.number}</p>
              </div>

              <div className="d-flex flex-column col-6">
                <label className="mx-1 purple" name="company">
                  Company
                </label>
                <p style={{wordWrap:"break-word"}}  className="grey my-1 mx-1">{formData.company}</p>
              </div>
            </div>
          </div>
        <div className="d-flex">
        <input   checked={confirmed}
  onChange={(e) => setConfirmed(e.target.checked)} className="mx-2" type="checkbox" />
        <p className="purple mx-3"> I confirm that the above details are both up to date and correct </p>
        </div>
        <button style={{backgroundColor:"#EC7125", color:"white", borderRadius: "30px", padding: "0.8rem", position:"absolute"}} 
        className="submit-btn"
  /* className={confirmed ? "btn-primary" : "btn-secondary"}  */type="submit">Submit</button>
        <button type="button" onClick={() => {setStep(1)}} style={{  color:"#EC7125", backgroundColor: "white", border: "1px solid #EC7125", marginTop:"1rem", position:"absolute"}}
          className="previous-btn rounded-5 px-2 py-2">Previous step</button>
        </form>
)}

        <hr className="horizontal-rule" />

        <div className="d-flex justify-content-between">
          <div>
            <h4 className="purple">
              Your site <span style={{ color: "#EC7125" }}>Design</span>
            </h4>
            <p className="grey ">Copyright @ 2026 All Rights Reserved</p>
          </div>
          <div className="subscribe-div d-flex grey border rounded-5 p-2 shadow">
            <p className="email-p">Enter your email</p>
            <button type="button" className="subscribe-btn text-white shadow border rounded-5 px-3 py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RailPen;
