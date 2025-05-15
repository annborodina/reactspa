function Contact() {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Form submitted');
    };
  
    return (
    <div className="light-green lighten-4" style={{ minHeight: '80vh', padding: '20px 0', marginTop: '50px', marginBottom: '50px '}}>
      <div className="container">
        <h2 className="center-align light-green-text text-darken-2">Contact Us</h2>
        <p className="flow-text center-align">
          Have questions about our recipes? Want to share your own? We'd love to hear from you!
        </p>

        <div className="row">
          <div className="col s12 m6">
            <div className="card light-green lighten-5">
              <div className="card-content">
                <span className="card-title light-green-text text-darken-2">Contact Information</span>
                <p>
                  <i className="material-icons light-green-text text-darken-2">email</i> 
                  <strong> Email:</strong> recipes@example.com
                </p>
                <p>
                  <i className="material-icons light-green-text text-darken-2">phone</i> 
                  <strong> Phone:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <i className="material-icons light-green-text text-darken-2">location_on</i> 
                  <strong> Address:</strong> 123 Recipe Lane, Foodville, FC 12345
                </p>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card light-green lighten-5">
              <div className="card-content">
                <span className="card-title light-green-text text-darken-2">Send Us a Message</span>
                <form>
                  <div className="input-field">
                    <input id="name" type="text" className="validate" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                  <div className="input-field">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                  <div className="input-field">
                    <textarea id="message" className="materialize-textarea"></textarea>
                    <label htmlFor="message">Your Message</label>
                  </div>
                  <button 
                    className="btn waves-effect waves-light light-green darken-2" 
                    type="submit"
                  >
                    Submit
                    <i className="material-icons right">send</i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export {Contact};