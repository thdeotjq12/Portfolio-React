import { all, call} from 'redux-saga/effects';
import user from './user';
import post from './post'; 
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3065/api';// 한번 불러온 모듈은 캐싱이 되서, 모든 axios에 적용됨(다른곳에 선언하지 않아도됨)


export default function* rootSaga() {
    yield all([
        call(user),
        call(post)
    ])
};