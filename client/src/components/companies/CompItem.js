import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { selComp } from "../../actions/dash";

const CompItem = ({ comp, selComp }) => {
  return (
    <div className="card card-body bg-light mb-3">
      <div className="row">
        {/* <div className="col-2">
            <img src={profile.user.avatar} alt="" className="rounded-circle" />
          </div> */}
        <div className="col-lg-6 col-md-4 col-8">
          <h3>{comp.cdetails.cname}</h3>
          <p>{comp.cdetails.location.city}</p>
          <p>{comp.cdetails.location.area}</p>
          <button
            className="btn btn-primary"
            onClick={() => selComp({ id: comp._id })}
          >
            Book Slot
          </button>
        </div>
        {/* <div className="col-md-4 d-none d-md-block">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </div> */}
      </div>
    </div>
  );
};

CompItem.propTypes = {
  selComp: PropTypes.func.isRequired,
  comp: PropTypes.bool
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { selComp }
)(CompItem);
