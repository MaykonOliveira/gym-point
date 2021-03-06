import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  loading: false,
  logged: false,
  showError: null,
};

export default function students(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/LOAD_REQUEST': {
        draft.loading = true;
        draft.logged = false;
        break;
      }

      case '@student/LOAD_SUCCESS': {
        draft.profile = action.payload.student;
        draft.loading = false;
        draft.logged = true;
        break;
      }

      case '@student/LOAD_FAILURE': {
        draft.loading = false;
        draft.showError = action.payload.error;
        draft.logged = false;
        break;
      }
      case '@student/SIGN_OUT': {
        draft.logged = false;
        break;
      }
    }
  });
}
