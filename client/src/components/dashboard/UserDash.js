import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { registerAdmin } from "../../actions/auth";
import { selComp, getSlots } from "../../actions/dash";
import { BOOK_SLOT } from "../../actions/types";

const UserDash = ({ cid, getSlots, slotsLoaded, comps, selComp }) => {
  if (slotsLoaded) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      {comps.map(item => (
        <button
          type="button"
          className={`btn btn-danger`}
          id={item._id}
          key={item._id}
          onClick={() => selComp({ id: item._id })}
        >
          {item.cdetails.cname}
        </button>
      ))}
    </div>
  );
};

UserDash.propTypes = {
  getSlots: PropTypes.func.isRequired,
  slotsLoaded: PropTypes.bool,
  comps: PropTypes.array,
  selComp: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cid: state.dash.cid,
  slotsLoaded: state.dash.slotsLoaded,
  comps: state.dash.comps
});

export default connect(
  mapStateToProps,
  { getSlots, selComp }
)(UserDash);

// import React, { Fragment, useState } from "react";
// import { Link, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import { setAlert } from "../../actions/alert";
// import PropTypes from "prop-types";
// import { registerAdmin } from "../../actions/auth";
// import { selComp, getSlots } from "../../actions/dash";
// import { BOOK_SLOT } from "../../actions/types";

// const UserDash = ({ cid, getSlots, slotsLoaded }) => {
//   if (slotsLoaded) {
//     return <Redirect to="/dashboard" />;
//   }

//   return (
//     <div>
//       <button onClick={() => getSlots({ id: cid })}></button>
//     </div>
//   );
// };

// UserDash.propTypes = {
//   getSlots: PropTypes.func.isRequired,
//   slotsLoaded: PropTypes.bool
// };

// const mapStateToProps = state => ({
//   cid: state.dash.cid,
//   slotsLoaded: state.dash.slotsLoaded
// });

// export default connect(
//   mapStateToProps,
//   { getSlots }
// )(UserDash);
