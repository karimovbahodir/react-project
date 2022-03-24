
class Service {

	getResource = async (url) =>{
		let res = await fetch(url);

		if(!res.ok){
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}

	getAllCakes = async () =>{
		const res= await this.getResource("https://623c0cc58e9af587894af58c.mockapi.io/cakes");
		return res.map(this._transformCakes)
	}

	getCake = async (id) =>{
		const res= await this.getResource(`https://623c0cc58e9af587894af58c.mockapi.io/cakes/${id}` );
		return this._transformCakes(res);
	}

	_transformCakes=(char)=>{
		return {
			name: char.name,
			description: char.description,
			thumbnail: char.thumbnail
		}
	}
}

export default Service;

