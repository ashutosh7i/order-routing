import api, { client } from "@/api"
import store from "@/store";

const fetchRoutingGroups = async (payload: any): Promise<any> => {
  return api({
    url: "groups", 
    method: "GET",
    params: payload
  });
}

const fetchRoutingGroupInformation = async (routingGroupId: string): Promise<any> => {
  return api({
    url: `groups/${routingGroupId}`,
    method: "GET"
  });
}

const fetchRoutingScheduleInformation = async (routingGroupId: string): Promise<any> => {
  return api({
    url: `groups/${routingGroupId}/schedule`,
    method: "GET"
  });
}

const fetchRoutingHistory = async (routingGroupId: string, params: any): Promise<any> => {
  return api({
    url: `groups/${routingGroupId}/routingRuns`,
    method: "GET",
    params
  });
}

const fetchGroupHistory = async (jobName: string, params: any): Promise<any> => {
  return api({
    url: `serviceJobRuns/${jobName}`,
    method: "GET",
    params
  });
}

const createRoutingGroup = async (payload: any): Promise<any> => {
  return api({
    url: "groups",
    method: "POST",
    data: payload
  })
}

const updateRoutingGroup = async (payload: any): Promise<any> => {
  return api({
    url: `groups/${payload.routingGroupId}`,
    method: "POST",
    data: payload
  })
}

const cloneGroup = async (payload: any): Promise<any> => {
  return api({
    url: `groups/${payload.routingGroupId}/clone`,
    method: "POST",
    data: payload
  })
}

const fetchOrderRouting = async (orderRoutingId: string): Promise<any> => {
  return api({
    url: `routings/${orderRoutingId}`,
    method: "GET"
  })
}

const createRoutingRule = async (payload: any): Promise<any> => {
  return await api({
    url: "rules",
    method: "POST",
    data: payload
  })
}

const createOrderRouting = async (payload: any): Promise<any> => {
  return await api({
    url: "routings",
    method: "POST",
    data: payload
  })
}

const cloneRouting = async (payload: any): Promise<any> => {
  return await api({
    url: `routings/${payload.orderRoutingId}/clone`,
    method: "POST",
    data: payload
  })
}

const updateRouting = async (payload: any): Promise<any> => {
  return api({
    url: `routings/${payload.orderRoutingId}`,
    method: "POST",
    data: payload
  });
}

const deleteRoutingFilter = async (payload: any): Promise<any> => {
  return api({
    url: `routings/${payload.orderRoutingId}/orderFilters`,
    method: "DELETE",
    data: payload
  });
}

const deleteRuleCondition = async (payload: any): Promise<any> => {
  return api({
    url: `rules/${payload.routingRuleId}/inventoryFilters`,
    method: "DELETE",
    data: payload
  });
}

const deleteRuleAction = async (payload: any): Promise<any> => {
  return api({
    url: `rules/${payload.routingRuleId}/actions`,
    method: "DELETE",
    data: payload
  });
}

const fetchRule = async (routingRuleId: string): Promise<any> => {
  return api({
    url: `rules/${routingRuleId}`,
    method: "GET"
  });
}

const cloneRule = async (payload: any): Promise<any> => {
  return await api({
    url: `rules/${payload.routingRuleId}/clone`,
    method: "POST",
    data: payload
  })
}

const updateRule = async (payload: any): Promise<any> => {
  return api({
    url: `rules/${payload.routingRuleId}`,
    method: "POST",
    data: payload
  });
}

const scheduleBrokering = async (payload: any): Promise<any> => {
  return api({
    url: `groups/${payload.routingGroupId}/schedule`,
    method: "POST",
    data: payload
  });
}

const runNow = async (routingGroupId: string): Promise<any> => {
  return api({
    url: `groups/${routingGroupId}/runNow`,
    method: "POST"
  });
}

const findOrder = async (payload: any): Promise<any> => {
  const omsRedirectionInfo = store.getters["user/getOmsRedirectionInfo"];
  let baseURL = omsRedirectionInfo.url;
  baseURL = baseURL && baseURL.startsWith("http") ? baseURL : `https://${baseURL}.hotwax.io/api/`;
  return client({
    url: "solr-query",
    method: "post",
    baseURL: baseURL,
    data: payload,
    headers: {
      Authorization:  'Bearer ' + omsRedirectionInfo.token,
      'Content-Type': 'application/json'
    }
  });
}

const brokerOrder = async(payload: any): Promise<any> => {
  return api({
    url: `groups/${payload.routingGroupId}/run`,
    method: "POST",
    data: payload
  })
}

const getOrderFacilityChangeInfo = async (payload: any): Promise<any> => {
  const omsRedirectionInfo = store.getters["user/getOmsRedirectionInfo"];
  let baseURL = omsRedirectionInfo.url;
  baseURL = baseURL && baseURL.startsWith("http") ? baseURL : `https://${baseURL}.hotwax.io/api/`;
  return client({
    url: "performFind",
    method: "post",
    baseURL: baseURL,
    data: payload,
    headers: {
      Authorization:  'Bearer ' + omsRedirectionInfo.token,
      'Content-Type': 'application/json'
    }
  });
}

export const OrderRoutingService = {
  brokerOrder,
  cloneGroup,
  createOrderRouting,
  cloneRouting,
  cloneRule,
  createRoutingGroup,
  createRoutingRule,
  deleteRoutingFilter,
  deleteRuleAction,
  deleteRuleCondition,
  fetchGroupHistory,
  fetchOrderRouting,
  fetchRoutingGroupInformation,
  fetchRoutingGroups,
  fetchRoutingHistory,
  fetchRoutingScheduleInformation,
  fetchRule,
  findOrder,
  getOrderFacilityChangeInfo,
  runNow,
  scheduleBrokering,
  updateRouting,
  updateRoutingGroup,
  updateRule
}