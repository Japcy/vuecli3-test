export default {
  saveUserName (context, username) {
    context.commit('saveUserName', username)
  },
  saveCartNum (context, cartCount) {
    context.commit('saveCartNum', cartCount)
  }
}
