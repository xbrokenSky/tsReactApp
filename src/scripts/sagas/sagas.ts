import { call, put, takeLatest } from 'redux-saga/effects';
import PokeApiService from '../services/pokeApiService';
import { fetchStarted, fetchSuccess, fetchFailed } from '../actions/actions';
import { SagaAction } from '../types/sagas.interface';
import C from '../constants/constants';

const { getData } = new PokeApiService();

export function* fetchPokemonSaga(action: SagaAction): object {
    yield put(fetchStarted());

    try {
        const pokeData = yield call(getData, action.payload);

        yield put(fetchSuccess(pokeData));
    } catch (error) {
        yield put(fetchFailed(error));
    }
}

export default function* getPokemonSaga(): IterableIterator<{}> {
    yield takeLatest(C.FETCH_DATA, fetchPokemonSaga);
}
