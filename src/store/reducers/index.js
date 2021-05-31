let initState={
	idea: []
}
const mainReducer=(state=initState, action)=>{
	if(action.type ==="GET_IDEA" || action.type === "MODIFIE_IDEA" || action.type === "ADD_IDEA"){
		return {
			...state,
			ideas: action.ideas
		}
	}
	else{
		return {
			...state
		}
	}
}
export  default mainReducer; 