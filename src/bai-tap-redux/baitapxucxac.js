import React, { Component } from "react";
import ThongTinTroChoi from "./thongtintrochoi";
import XucXac from "./xucxac";
import { connect } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";

class BaiTapXucXac extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="container mt-5 text-center">
            <div className="header__title text-center">GAME ĐỔ XÚC XẮC</div>
            <div className="row">
              <div className="col-3">
                <button
                  onClick={() => {
                    this.props.datCuoc(true);
                  }}
                  className="btn__game"
                >
                  {" "}
                  Tài{" "}
                </button>
              </div>

              <div className="col-6">
                <XucXac />
                <ThongTinTroChoi />
              </div>
              <div className="col-3">
                <button
                  onClick={() => {
                    this.props.datCuoc(false);
                  }}
                  className="btn__game"
                >
                  {" "}
                  xỉu{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapXucXac);
