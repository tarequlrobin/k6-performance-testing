import http from 'k6/http'

import { sleep } from 'k6'

export default function(){
    http.get('https://k6.io')
    sleep(1)
}
/*
k6 run script.js

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: script.js
        output: -

     scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
              * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


     data_received..................: 398 kB 222 kB/s
     data_sent......................: 1.9 kB 1.1 kB/s
     http_req_blocked...............: avg=706.6ms min=706.6ms med=706.6ms max=706.6ms p(90)=706.6ms p(95)=706.6ms
     http_req_connecting............: avg=10.97ms min=10.97ms med=10.97ms max=10.97ms p(90)=10.97ms p(95)=10.97ms
     http_req_duration..............: avg=80.93ms min=80.93ms med=80.93ms max=80.93ms p(90)=80.93ms p(95)=80.93ms
       { expected_response:true }...: avg=80.93ms min=80.93ms med=80.93ms max=80.93ms p(90)=80.93ms p(95)=80.93ms
     http_req_failed................: 0.00%  0 out of 1
     http_req_receiving.............: avg=63.65ms min=63.65ms med=63.65ms max=63.65ms p(90)=63.65ms p(95)=63.65ms
     http_req_sending...............: avg=404µs   min=404µs   med=404µs   max=404µs   p(90)=404µs   p(95)=404µs  
     http_req_tls_handshaking.......: avg=25.42ms min=25.42ms med=25.42ms max=25.42ms p(90)=25.42ms p(95)=25.42ms
     http_req_waiting...............: avg=16.87ms min=16.87ms med=16.87ms max=16.87ms p(90)=16.87ms p(95)=16.87ms
     http_reqs......................: 1      0.558723/s
     iteration_duration.............: avg=1.78s   min=1.78s   med=1.78s   max=1.78s   p(90)=1.78s   p(95)=1.78s  
     iterations.....................: 1      0.558723/s
     vus............................: 1      min=1      max=1
     vus_max........................: 1      min=1      max=1


running (00m01.8s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m01.8s/10m0s  1/1 iters, 1 per VU
*/