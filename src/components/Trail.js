import React from "react";
import { Trail } from "react-spring/renderprops";

function TrailRS() {
  const [isLoading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => {
        setLoading(false);
        setUsers(users);
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      });
  }, []);

  return (
    <section className="rs-container trail">
      <h1>Random User</h1>

      {error ? <p>{error.message}</p> : null}

      {!isLoading ? (
        <div className="rs-row">
          <Trail
            items={users}
            keys={user => user.id}
            from={{
              marginLeft: -20,
              opacity: 0,
              transform: "translate3d(0,-40px,0)",
            }}
            to={{
              marginLeft: 20,
              opacity: 1,
              transform: "translate3d(0,0px,0)",
            }}
          >
            {user => props => (
              <div style={props} className="box">
                {user.username}
              </div>
            )}
          </Trail>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
}

export default TrailRS;
