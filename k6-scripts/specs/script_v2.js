import http from 'k6/http'

import { sleep } from 'k6'

export default function(){
    http.get('https://k6.io')
    sleep(1)
}

/*
k6 run --vus 10 --iterations 40 script_v2.js

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: script_v2.js
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 10m30s max duration (incl. graceful stop):
              * default: 40 iterations shared among 10 VUs (maxDuration: 10m0s, gracefulStop: 30s)


     data_received..................: 16 MB 1.1 MB/s
     data_sent......................: 54 kB 3.8 kB/s
     http_req_blocked...............: avg=34.95ms  min=0s       med=1µs      max=144.55ms p(90)=140.76ms p(95)=142.78ms
     http_req_connecting............: avg=3ms      min=0s       med=0s       max=12.92ms  p(90)=12.75ms  p(95)=12.84ms 
     http_req_duration..............: avg=2.34s    min=710.23ms med=2.65s    max=4.11s    p(90)=3.55s    p(95)=3.7s    
       { expected_response:true }...: avg=2.34s    min=710.23ms med=2.65s    max=4.11s    p(90)=3.55s    p(95)=3.7s    
     http_req_failed................: 0.00% 0 out of 40
     http_req_receiving.............: avg=2.17s    min=550.01ms med=2.42s    max=3.89s    p(90)=3.31s    p(95)=3.38s   
     http_req_sending...............: avg=86.17µs  min=27µs     med=89µs     max=202µs    p(90)=145.79µs p(95)=153.44µs
     http_req_tls_handshaking.......: avg=6.71ms   min=0s       med=0s       max=30.9ms   p(90)=27.65ms  p(95)=29.84ms 
     http_req_waiting...............: avg=166.71ms min=24.71ms  med=154.91ms max=744.56ms p(90)=310.41ms p(95)=401.87ms
     http_reqs......................: 40    2.788802/s
     iteration_duration.............: avg=3.37s    min=1.71s    med=3.76s    max=5.12s    p(90)=4.55s    p(95)=4.7s    
     iterations.....................: 40    2.788802/s
     vus............................: 4     min=4       max=10
     vus_max........................: 10    min=10      max=10


running (00m14.3s), 00/10 VUs, 40 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  00m14.3s/10m0s  40/40 shared iters
*/