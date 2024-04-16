import React from "react";
import { useLocation } from "react-router-dom";
//import { useHistory, useLocation } from 'react-router-dom';

/*
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;

    if (location.state.title === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    return <span>Hello!! This is '{location.state.title}' movie</span>;
  }
}
*/

function Detail() {
  let location = useLocation();

  return <span>Hello!! This is '{location.state}' movie</span>;
}

export default Detail;
