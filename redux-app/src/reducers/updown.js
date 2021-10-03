const initialstate = 1;
const changeTheNumber = (state = initialstate, action) => {
   switch (action.type) {
      case 'increment': return state + action.payload;
      case 'decrement': return state - action.payload;
      default: return state;
   }
}
const usermetadata = [{
   firstname: 'chetan',
   lastname: 'pal',
   age: 36
}, {
   education: 'MCA',
      marks: '60%',
         experience: '7 years'
}]
const changeTheObject = (state = usermetadata, action) => {
   switch (action.type) {
      case 'user':
         return {
            ...state,
            usermetadata:  action.payload
         }
      default: return state;
   }
}
export { changeTheNumber, changeTheObject }