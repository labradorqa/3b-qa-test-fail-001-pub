// 저위험 npm 컴포넌트(ms, debug)를 함수에서 사용 → reachability(저심각도).
const ms = require('ms'); // ms 0.7.0 (ReDoS, low)
const debug = require('debug')('app'); // debug 2.0.0 (low)

function ttl(input) {
  // 신뢰 불가 입력을 ms()로 파싱 — ReDoS 가능(저위험)
  return ms(input);
}

function logSession(token) {
  // 민감정보를 debug 로그로 노출(저위험)
  debug('session token: %s', token);
  return ttl('1h');
}

module.exports = { ttl, logSession };
