import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      listData: [
        {
          id: 0,
          pasport: "Ivan",
          education: "UzhNU SA",
          specialty: "SA",
          salary: 10000,
        },
        {
          id: 1,
          pasport: "Oleksandr",
          education: "KNU SO",
          specialty: "SO",
          salary: 8000,
        },
        {
          id: 2,
          pasport: "Vitaliy",
          education: "LNU SA",
          specialty: "SA",
          salary: 20000,
        },
        {
          id: 3,
          pasport: "Max",
          education: "KPI SA",
          specialty: "SA",
          salary: 15000,
        },
      ],
    };
  },
  getters: {
    getAllListData: (state) => state.listData,
    getEmployeeById: (state) => (id) => {
      return state.listData[id];
    },
  },

  mutations: {
    addNewEmployee(state, arr) {
      state.listData.push(arr);
    },
    editEmployee(state, arr) {
      state.listData[arr[0]] = arr[1];
    },
    deleteEmployee(state, id) {
      state.listData = state.listData.filter((item) => item.id !== id);
    },
  },
  actions: {
    addNewEmployeeAction({ commit }, arr) {
      commit("addNewEmployee", arr);
    },
    editEmployeeAction({ commit }, arr) {
      commit("editEmployee", arr);
    },
    deleteEmployeeAction({ commit }, id) {
      commit("deleteEmployee", id);
    },
  },
});

export default store;
