import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 100 },  // Ramp up to 100 users in 1 minute
    { duration: '2m', target: 500 },  // Maintain 500 users for 2 minutes
    { duration: '1m', target: 0 },    // Ramp down to 0 users in 1 minute
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests should be below 500ms
  },
};

export default function () {
  let res = http.get('http://localhost:8002/users');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
