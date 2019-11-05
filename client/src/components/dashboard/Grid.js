// import React, { Fragment, useState } from "react";
// import { Link, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import { setAlert } from "../../actions/alert";
// import PropTypes from "prop-types";
// import { registerAdmin } from "../../actions/auth";
// import { selComp } from "../../actions/dash";

// const Grid = ({ slots }) => {
//   // if (!slots) {
//   //   return <Redirect to="/login" />;
//   // }

//   return (
//     <div className="col-xs-12 col-sm-6 example-col">
//       {slots.map(item => (
//         <button type="button" class={`btn btn-outline-primary`}>
//           {item.time}
//         </button>
//       ))}
//     </div>
//   );
// };

// Grid.propTypes = {
//   slots: PropTypes.array
// };

// const mapStateToProps = state => ({
//   slots: state.dash.slots
// });

//export default connect(mapStateToProps)(Grid);

import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { registerAdmin } from "../../actions/auth";
import { selComp } from "../../actions/dash";

const Grid = ({ slots }) => {
  // if (!slots) {
  //   return <Redirect to="/login" />;
  // }

  return <h1>Hello</h1>;
};

//return <h1>Hello</h1>;

Grid.propTypes = {
  slots: PropTypes.array
};

const mapStateToProps = state => ({
  slots: state.dash.slots
});

export default connect(mapStateToProps)(Grid);
// export default Grid;
