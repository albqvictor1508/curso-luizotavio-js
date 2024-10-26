import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "../types";

const request = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});

function* exampleRequest() {
	try {
		yield call(request);
		yield put(actions.onClickButtonSuccess());
	} catch {
		yield put(actions.onClickButtonFailure());
	}
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);
