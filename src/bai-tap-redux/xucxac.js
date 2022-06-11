import React, { Component } from "react";
import { connect } from "react-redux";
class XucXac extends Component {
  renderXucXac = () => {
    //lấy props từ reducer về
    console.log(this.props.mangXucXac);
    return this.props.mangXucXac.map((XucXac, index) => {
      return (
        <img
          key={index}
          className="ml-2 xucxac__nho"
          style={{ width: 40, height: 40 }}
          src={XucXac.hinhAnh}
          alt=""
        ></img>
      );
    });
  };
  render() {
    return (
      <>
        <div className="xucxac__img">{this.renderXucXac()}</div>
      </>
    );
  }
}

//hàm lấy state từ store xuống
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.gameXucXacReducer.mangXucXac,
  };
};
export default connect(mapStateToProps, null)(XucXac);
