import produce from 'immer';

// objeto para armazenar os dados de usuário
const INITIAL_STATE = {
  profile: null,
};

// desenvolvido para armazenar o perfil do usuario
export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      // enviando a atualização do usuário para o front
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
