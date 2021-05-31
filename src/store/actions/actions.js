import axios from "axios";

export function loadIdea (){
	return(dispatch)=>{

		 return axios.get(process.env.REACT_APP_URL_API+'idea/').
		 then(((response)=> {
			 dispatch({
				type:"GET_IDEA",
				ideas : response.data.results
			} )
		 }))
	}
}



export function AddIdea (form_data){
	return(dispatch)=>{
		return axios.post(process.env.REACT_APP_URL_API+'idea/', form_data, {
			headers: {
			  'Content-Type': 'application/json',
			},
		  }).then(res => {
			dispatch({				
				type:"ADD_IDEA",
			})
		  })
		  .catch(err => console.log(err))
	}
}


export function ModifeIdea (form_data, ideaKey){
	return(dispatch)=>{
		return axios.put(process.env.REACT_APP_URL_API+'idea/'+ideaKey+"/", form_data, {
			headers: {
			'Content-Type': 'application/json',
			},
		}).then(res => {
			dispatch({				
				type:"MODIFIE_IDEA",
			})
		})
		.catch(err => console.log(err))
	}
}



