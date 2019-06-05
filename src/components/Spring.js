import React from "react";
import { Spring } from "react-spring/renderprops";

function SpringRS() {
  const [content, setContent] = React.useState(false);

  return (
    <section className="rs-container spring">
      <div className="button-container">
        <button
          onClick={() => setContent(!content)}
          className="button is-primary"
        >
          Toggle Content
        </button>
      </div>

      {!content ? (
        <div>
          <h1>No Content</h1>
        </div>
      ) : (
        <Spring
          from={{
            opacity: 0,
            marginTop: -1000,
          }}
          to={{
            opacity: 1,
            marginTop: 0,
          }}
        >
          {props => (
            <div style={props}>
              <h1>SLIIIIIIIDE</h1>
            </div>
          )}
        </Spring>
      )}
    </section>
  );
}

export default SpringRS;
