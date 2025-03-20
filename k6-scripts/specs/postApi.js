import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

export const options={
    vus: 1,
    duration: '1s',
}

export default function(){
    const url = 'https://dummyjson.com/auth/login';
    const payLoad = JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
    });

    const params = {
        headers:{
            'Content-Type' : 'application/json'
        },
    };

    const response = http.post(url, payLoad, params);
    check(response, {
        'is status 200': (r) => r.status ===200,
        'is response body has username': r => r.body.includes('kminchelle'),
    });

}