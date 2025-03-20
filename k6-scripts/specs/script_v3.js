import http from 'k6/http'
import { sleep } from 'k6'

export const options = {
    vus: 10,
    iterations: 40
}

export default function(){
    http.get('https://k6.io')
    sleep(1)
}
/*
k6 run script_v3.js

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: script_v3.js
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 10m30s max duration (incl. graceful stop):
              * default: 40 iterations shared among 10 VUs (maxDuration: 10m0s, gracefulStop: 30s)


     data_received..................: 16 MB 1.1 MB/s
     data_sent......................: 55 kB 3.9 kB/s
     http_req_blocked...............: avg=11.65ms  min=0s       med=1.5µs   max=50.37ms  p(90)=47.09ms  p(95)=48.82ms 
     http_req_connecting............: avg=4.92ms   min=0s       med=0s      max=20.18ms  p(90)=19.76ms  p(95)=19.91ms 
     http_req_duration..............: avg=2.18s    min=184.04ms med=2.67s   max=3.48s    p(90)=3.1s     p(95)=3.25s   
       { expected_response:true }...: avg=2.18s    min=184.04ms med=2.67s   max=3.48s    p(90)=3.1s     p(95)=3.25s   
     http_req_failed................: 0.00% 0 out of 40
     http_req_receiving.............: avg=2.05s    min=160.49ms med=2.5s    max=3.28s    p(90)=2.96s    p(95)=3.01s   
     http_req_sending...............: avg=118.92µs min=24µs     med=85.49µs max=1.19ms   p(90)=167.1µs  p(95)=196.45µs
     http_req_tls_handshaking.......: avg=6.33ms   min=0s       med=0s      max=29.34ms  p(90)=26.1ms   p(95)=27.33ms 
     http_req_waiting...............: avg=126.87ms min=15.97ms  med=60.24ms max=378.59ms p(90)=295.94ms p(95)=322.2ms 
     http_reqs......................: 40    2.847271/s
     iteration_duration.............: avg=3.19s    min=1.18s    med=3.7s    max=4.48s    p(90)=4.1s     p(95)=4.25s   
     iterations.....................: 40    2.847271/s
     vus............................: 1     min=1       max=10
     vus_max........................: 10    min=10      max=10


running (00m14.0s), 00/10 VUs, 40 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  00m14.0s/10m0s  40/40 shared iters
*/