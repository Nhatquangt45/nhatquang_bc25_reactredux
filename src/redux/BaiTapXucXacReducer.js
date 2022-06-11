const stateDefault = {
  taiXiu: true, //true:tài(3-->11) ; false:xỉu(>12)
  mangXucXac: [
    { id: 1, hinhAnh: "./img/1.png" },
    { id: 2, hinhAnh: "./img/2.png" },
    { id: 3, hinhAnh: "./img/3.png" },
  ],
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const gameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      state.taiXiu = action.taiXiu;
      return { ...state };
    case "PLAY_GAME":
      let mangXucXacNew = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        let xucXacNgauNhien = {
          id: `${soNgauNhien}`,
          hinhAnh: `./img/${soNgauNhien}.png`,
        };
        mangXucXacNew.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNew;
      //xử lý tăng số bàn chơi
      state.tongSoBanChoi += 1;
      //xử lý tổng số bàn thắng
      let tongSoDiem = mangXucXacNew.reduce((tongDiem, xucxac, index) => {
        return (tongDiem += xucxac.id);
      }, 0);
      if (
        (tongSoDiem > 11 && state.taiXiu === true) ||
        (tongSoDiem <= 11 && state.taiXiu === false)
      ) {
        state.soBanThang += 1;
      }
      return { ...state };

    default:
      return { ...state };
  }
};

export default gameXucXacReducer;
