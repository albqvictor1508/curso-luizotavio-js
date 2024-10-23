import * as types from "../types";

const initialState = {
	botaoLigado: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case types.BOTAO_CLICADO_SUCCESS: {
			const newState = { ...state };
			newState.botaoLigado = !newState.botaoLigado;

			return newState;
		}

		case types.BOTAO_CLICADO_REQUEST: {
			console.log("i'm doing the request!");
			return state;
		}

		case types.BOTAO_CLICADO_FAILURE: {
			console.log("request failed");
			return state;
		}

		default:
			return state;
	}
}
