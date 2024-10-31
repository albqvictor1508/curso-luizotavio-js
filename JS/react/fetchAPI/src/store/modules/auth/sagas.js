import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "../types";
import axios from "../../../services/axios";
import { toast } from "react-toastify";
import { history } from "../../../services/history";

function* loginRequest({ payload }) {
	try {
		console.log("PAYLOAD DO LOGIN REQUEST:", payload);
		const response = yield call(axios.post, "/api/token", payload);
		yield put(actions.LoginSuccess({ ...response.data }));

		toast.success("login realized with success", {
			toastId: "login-success-id",
		});
		axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

		console.log("PREV PATH DO PAYLOAD", payload.prevPath);

		history.push(payload.prevPath);
		window.location.reload();
	} catch (e) {
		console.log(e);
		toast.error("user or password invalid", {
			toastId: "request-failed-error-id",
		});

		yield put(actions.LoginFailure());
	}
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
