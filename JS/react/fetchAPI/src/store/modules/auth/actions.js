import * as types from "../types";

export function LoginSuccess(payload) {
	return {
		type: types.LOGIN_SUCCESS,
		payload,
	};
}

export function LoginRequest(payload) {
	return {
		type: types.LOGIN_REQUEST,
		payload,
	};
}

export function LoginFailure(payload) {
	return {
		type: types.LOGIN_FAILURE,
		payload,
	};
}
