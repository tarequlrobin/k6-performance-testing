import http from 'k6/http'
import { sleep } from 'k6'

export const options = {
    stages: [
        { duration: '20s', target: 10},
        { duration: '5m', target: 100},
        { duration: '20s', target: 0}
    ]
}

export default function(){
    http.get('https://k6.io')
    sleep(1)
}
/*
k6 run script_stages.js

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: script_stages.js
        output: -

     scenarios: (100.00%) 1 scenario, 100 max VUs, 6m10s max duration (incl. graceful stop):
              * default: Up to 100 looping VUs for 5m40s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)

WARN[0249] Request Failed                                error="request timeout"
WARN[0265] Request Failed                                error="request timeout"
WARN[0286] Request Failed                                error="request timeout"
WARN[0310] Request Failed                                error="request timeout"
WARN[0310] Request Failed                                error="request timeout"
WARN[0316] Request Failed                                error="request timeout"
WARN[0321] Request Failed                                error="request timeout"
WARN[0324] Request Failed                                error="request timeout"
WARN[0326] Request Failed                                error="request timeout"

     data_received..................: 410 MB 1.1 MB/s
     data_sent......................: 1.2 MB 3.2 kB/s
     http_req_blocked...............: avg=369.57ms min=0s      med=1µs    max=25.22s p(90)=3µs    p(95)=1.64s   
     http_req_connecting............: avg=78.68ms  min=0s      med=0s     max=2.81s  p(90)=0s     p(95)=812.17ms
     http_req_duration..............: avg=16.21s   min=73.18ms med=11.79s max=1m0s   p(90)=35.89s p(95)=43.49s  
       { expected_response:true }...: avg=15.83s   min=73.18ms med=11.57s max=58.99s p(90)=35.1s  p(95)=41.75s  
     http_req_failed................: 0.86%  9 out of 1041
     http_req_receiving.............: avg=14.09s   min=54.09ms med=9.82s  max=57.86s p(90)=33.03s p(95)=40.24s  
     http_req_sending...............: avg=107.02µs min=22µs    med=100µs  max=1.18ms p(90)=151µs  p(95)=167µs   
     http_req_tls_handshaking.......: avg=290.45ms min=0s      med=0s     max=24.41s p(90)=0s     p(95)=823.18ms
     http_req_waiting...............: avg=2.12s    min=12.39ms med=1.89s  max=30.19s p(90)=3.76s  p(95)=4.44s   
     http_reqs......................: 1041   2.887431/s
     iteration_duration.............: avg=17.58s   min=1.07s   med=13.47s max=1m1s   p(90)=37.15s p(95)=44.76s  
     iterations.....................: 1041   2.887431/s
     vus............................: 1      min=1         max=100
     vus_max........................: 100    min=100       max=100


running (6m00.5s), 000/100 VUs, 1041 complete and 0 interrupted iterations
default ✓ [======================================] 000/100 VUs  5m40s
*/