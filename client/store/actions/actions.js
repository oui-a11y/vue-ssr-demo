export default {
  updateCountAsync(store,data){
    store.commit('updateCount',data.num)
  }
}
