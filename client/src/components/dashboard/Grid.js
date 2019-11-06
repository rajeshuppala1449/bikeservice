import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { registerAdmin } from "../../actions/auth";
import { bookSlot, getSlots } from "../../actions/dash";
import { BOOK_SLOT } from "../../actions/types";

const Grid = ({ slots, bookSlot, getSlots, id, user }) => {
  const [formData, setFormData] = useState({
    selected: {}
  });

  const { selected } = formData;

  const onClick = xid => {
    var y = formData.selected;
    if (user.profile === "user") {
      y = {};
    }

    const x = y[xid];

    if (x) {
      delete y[xid];
      setFormData({ ...formData, selected: y });
    } else {
      y[xid] = xid;

      setFormData({ ...formData, selected: y });
    }

    console.log(formData.selected);
  };

  const handleBook = selected => {
    var uid;
    if (user.profile === "user") {
      uid = user._id;
      bookSlot({ selected, uid });
    } else {
      bookSlot({ selected, uid });
    }

    getSlots({ id });

    setFormData({ ...formData, selected: {} });
  };

  return (
    <div className="col-xs-12 col-sm-6 example-col">
      {slots.map(item => (
        <button
          type="button"
          className={`btn btn-${
            item.booked || selected[item.id] ? "" : "outline-"
          }${selected[item.id] ? "primary" : "danger"}`}
          id={item.id}
          key={item.id}
          onClick={() => onClick(item.id)}
        >
          {item.time}
        </button>
      ))}

      <button
        type="button"
        className={`btn btn-primary`}
        onClick={() => handleBook(selected)}
      >
        LOCK
      </button>
    </div>
  );
};

Grid.propTypes = {
  slots: PropTypes.array.isRequired,
  bookSlot: PropTypes.func.isRequired,
  id: PropTypes.string,
  getSlots: PropTypes.func.isRequired,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  slots: state.dash.slots,
  id: state.dash.cid,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { bookSlot, getSlots }
)(Grid);
