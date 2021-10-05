export default class RestoService{
    url = 'http://localhost:3000/menu';

    getMenu = async () => {
        const response = await fetch(this.url);
        if (!response.ok){
            throw new Error('Server Error');
        }
        return await response.json();
    }


}
