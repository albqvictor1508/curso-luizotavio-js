import * as types from "../types";

export function onClickButtonSuccess() {
	return {
		type: types.BOTAO_CLICADO_SUCCESS,
	};
}

export function onClickButtonRequest() {
	return {
		type: types.BOTAO_CLICADO_REQUEST,
	};
}

export function onClickButtonFailure() {
	return {
		type: types.BOTAO_CLICADO_FAILURE,
	};
}
