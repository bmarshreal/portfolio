import React from "react";

function EmailForm(params) {
  return (
    <div>
      <form
        id="email"
        className="email"
        name="contact"
        action="/contact"
        method="post"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name:{" "}
            <input
              style={{ width: "150%", borderRadius: " 10px" }}
              required
              type="text"
              name="name"
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{" "}
            <input
              style={{ width: "150%", borderRadius: " 10px" }}
              required
              type="email"
              name="email"
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              style={{ width: "150%", borderRadius: " 10px" }}
              required
              name="message"
            ></textarea>
          </label>
        </p>
        <p>
          <button
            style={{
              backgroundColor: "#900ccb",
              border: "3px solid #300ccb ",
              borderRadius: "15px",
              margin: "2px",
              width: "8rem",
              height: "2.5rem",
              color: "white",
              left: "20%",
              position: "relative",
            }}
            type="submit"
          >
            Send
          </button>
        </p>
      </form>
    </div>
  );
}

export default EmailForm;
