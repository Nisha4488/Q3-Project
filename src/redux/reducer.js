const rootReducer = (state = [], action) => {
  console.log('action   ', action)
  switch (action.type) {
    case 'SET_SSO_USER':
      return {
        ...state,
        sso: action.user,
      }
    default:
      return state
  }
}
export default rootReducer
