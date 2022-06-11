import React, { Component } from "react";
import { connect } from "react-redux";
class ThongTinTroChoi extends Component {
  render() {
    const { taiXiu, soBanThang, tongSoBanChoi } = this.props;

    return (
      <>
        <div className="mt-5">
          <h3 className="title">
            BẠN CHỌN :
            <span className="text-success">{taiXiu ? " TÀI" : " XỈU"}</span>
          </h3>
          <h4 className="title">
            SỐ BÀN THẮNG:
            <span className="text-danger"> {soBanThang}</span>
          </h4>
          <h5 className="title">
            TỔNG SỐ BÀN CHƠI:
            <span className="text-info"> {tongSoBanChoi}</span>
          </h5>
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="btn btn-success "
          >
            PLAY GAME
          </button>
        </div>
      </>
    );
  }
}

////hàm lấy state từ store xuống
const mapStateToProps = (state) => {
  return {
    taiXiu: state.gameXucXacReducer.taiXiu,
    soBanThang: state.gameXucXacReducer.soBanThang,
    tongSoBanChoi: state.gameXucXacReducer.tongSoBanChoi,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //gửi action lên reducer
    playGame: () => {
      let action = {
        type: "PLAY_GAME",
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinTroChoi);
