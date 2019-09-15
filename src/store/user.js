import { getuserlist } from "../api/user";

export default {
    namespace: "login",
    state: {
        userlist: []
    },

    effects: {
        *save({ payload: todo }, { put, call }) {
            // Call saveTodoToServer, then trigger `add` action to save data
            const result = yield call(getuserlist);
            yield put({ type: "alluser", payload: result.data.data });
        }
    },
    reducers: {
        alluser(state, { payload }) {
            // Save data to state
            return {
                ...state,
                userlist: payload
            };
        }
    }
};
