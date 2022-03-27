import {useHttp} from '../hooks/http.hook';

const useService=()=> {
	const {loading, request, error, clearError}=useHttp();

	
	const getAllCakes = async () =>{
		const res= await request("https://623c0cc58e9af587894af58c.mockapi.io/cakes?limit=9");
		return res.map(_transformCakes)
	}

	const getCake = async (id) =>{
		const res= await request(`https://623c0cc58e9af587894af58c.mockapi.io/cakes/${id}` );
		return _transformCakes(res);
	}

	const _transformCakes=(char)=>{
		return {
			id: char.id,
			name: char.name,
			description: char.description,
			thumbnail: char.thumbnail
		}
	}

	return {loading, error, clearError, getAllCakes, getCake}
}

export default useService;

