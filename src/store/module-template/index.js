import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const myCustomModules = {
  actions,
  getters,
  mutations,
  namespaced: true,
  state,
};

export default myCustomModules;
