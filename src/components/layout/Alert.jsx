import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
      <div className="flex justify-center">
        <div key={alert.id} className="border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300 mb-8">
          {alert.msg}
        </div>
      </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);