import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"
import { Module } from "vuex"
import UtilState from "./UtilState"
import RootState from "@/store/RootState"

const utilModule: Module<UtilState, RootState> = {
  namespaced: true,
  state: {
    enums: {},
    facilities: {},
    shippingMethods: {},
    facilityGroups: {},
    isOmsConnectionExist: undefined,
    statuses: {},
    carriers: {}
  },
  getters,
  actions,
  mutations,
}

export default utilModule;