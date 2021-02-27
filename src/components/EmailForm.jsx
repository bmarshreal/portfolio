import React from "react";

function EmailForm(params) {
  return (
    <div className="email">
      <form name="contact" action="/contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input required type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input required type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea required name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}

export default EmailForm;
