export default class RestoService{
    _baseUrl = 'http://localhost:3000';

    async getResource(url) {
        const res = await fetch(`${this._baseUrl}${url}`);
        if (!res.ok) {
            throw new Error(`Bad request`);
        }
        return await res.json();
    }

    async getMenuItems() {
        return await this.getResource('/menu');
    }
}
