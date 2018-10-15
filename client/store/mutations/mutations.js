export default {
  updateCount(state, {num}) {
    console.log('success',num)
    state.count = num;
  }
}
