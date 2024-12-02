import { createStore } from "vuex";
let loading_index = 0;

export default createStore({
  state() {
    return {
      user: JSON.parse(localStorage["user"] || null),
      openKassa: false, // Состояние для управления видимостью модального окна
      title: "", // Название кассы
      balance: 0, // Остаток кассы
      showExpenceCreate: false,
      showAddTaomModal: false,
      loader: false,
      deleteUserModal: false,
      userInfoModal: false,
      selectedTitle: "", // Хранит выбранный заголовок
      // activeExpenseId: null,
      activeExpense: null,
      userInfoModal: false,
      refreshToken: 0,
      barShow: false,
      closePage: true,
      colum: false,
    };
  },
  actions: {
    setUser(ctx, user) {
      ctx.commit("setUser", user);
    },
    setLoading(ctx, loading) {
      ctx.commit("setLoading", loading);
    },
    toggleOpenKassa({ commit, state }) {
      commit("setOpenKassa", !state.openKassa); // Переключаем значение openKassa
    },
    createKassa({ commit, state }) {
      const body = {
        title: state.title,
        balance: state.balance,
      };

      console.log("Касса создана:", body); // Здесь должен быть запрос к API вместо console.log
      commit("resetForm"); // Сбрасываем данные формы после создания кассы
      commit("setOpenKassa", false); // Закрываем модалку после создания кассы
    },
    toggleExpenceCreate({ commit }) {
      commit("toggleExpenceCreate");
    },
    toggleAddTaomModal({ commit }) {
      commit("TOGGLE_ADD_TAOM_MODAL");
    },
    setActiveExpense(state, expense) {
      state.activeExpense = expense; // Устанавливает активный элемент
    },
    incrementRefreshToken(ctx) {
      ctx.commit("incrementRefreshToken");
    },
  },
  mutations: {
    setUser(state, user) {
      localStorage["user"] = JSON.stringify(user);
      state.user = user;
    },
    setSelectedTitle(state, title) {
      state.selectedTitle = title;
    },
    setOpenKassa(state, value) {
      state.openKassa = value;
    },
    setTitle(state, title) {
      state.title = title;
    },
    setBalance(state, balance) {
      state.balance = balance;
    },
    resetForm(state) {
      state.title = "";
      state.balance = 0;
    },
    setLoading(state, loading) {
      if (loading == true) {
        state.loading = loading;
        loading_index++;
      } else if (loading == false) {
        loading_index--;
        if (!loading_index) state.loading = loading;
      } else {
        state.loading = false;
      }
    },
    toggleExpenceCreate(state) {
      state.showExpenceCreate = !state.showExpenceCreate; // переключение true/false
    },
    TOGGLE_ADD_TAOM_MODAL(state) {
      state.showAddTaomModal = !state.showAddTaomModal;
    },
    setSelectedTitle(state, title) {
      state.selectedTitle = title;
    },
    setActiveComponent(state, id) {
      state.activeComponentId = id; // Обновление активного ID
    },
    setActiveExpense(state, id) {
      state.activeExpenseId = id;
    },
    setActiveExpense(state, expense) {
      state.activeExpense = expense; // Устанавливает активный элемент
    },
    incrementRefreshToken(state) {
      state.refreshToken += 1;
    },
    toggleColum(state, value) {
      state.colum = value;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    loading(state) {
      return state.loading;
    },
    getActiveExpense(state) {
      return state.activeExpense;
    },
    showExpenceCreate: (state) => state.showExpenceCreate,
    getSelectedTitle: (state) => state.selectedTitle,
    getActiveExpenseId: (state) => state.activeExpenseId,
    refreshToken(state) {
      return state.refreshToken;
    },
  },
});
