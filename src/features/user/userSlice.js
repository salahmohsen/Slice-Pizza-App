import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject),
  );
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      langitude: positionObj.coords.langitude,
    };
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
    return { position, address };
  },
);

const initialState = {
  username: "",
  phoneNumber: "",
  status: "",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.error =
          "Something wrong happened with getting your address, make sure to write it before submitting your order";
        state.status = "error";
      });
  },
});
export const { updateName } = userSlice.actions;
export const getUser = (state) => state.user.username;
export default userSlice.reducer;
