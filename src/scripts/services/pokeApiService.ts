import fetch from 'isomorphic-fetch';
import { GetData } from '../types/pokeApiService.interface';

export default class PokeApiService {
    public _baseUrl = 'https://pokeapi.co/api/v2/';

    public _reqTypeOption = 'pokemon/';

    public getData = async (pokeName: string): Promise<GetData> => {
        const requestUrl = `${this._baseUrl}${this._reqTypeOption}${pokeName}`;
        const response = await fetch(requestUrl);

        if (!response.ok || response.status !== 200) {
            throw new Error(`Request for ${requestUrl} is failed`);
        }

        const parsedResult = await response.json();

        return parsedResult;
    };

    public getAbilities = async (pokeName: string): Promise<object[]> => {
        const pokeData = await this.getData(pokeName);
        const pokeAbilities = pokeData.abilities;

        return pokeAbilities;
    }
}
