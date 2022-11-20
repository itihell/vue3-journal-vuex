import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const jornalModule = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state,
};

export default jornalModule;
