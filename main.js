let A = 5;
let B = 2;
let C = 8;
let N = 48;
let M = 357;
let K = 777;
// Misol-1
JAV = A > 0;
console.log("Misol-1:");
// Misol-2
JAV1 = A % 2 !== 0;
console.log("Misol-2:");
// Misol-3
JAV2 = A % 2 === 0;
console.log("Misol-3:");
// Misol-4
JAV3 = A % 2 === 0;
console.log("Misol-4:");
// Misol-5
JAV4 = A > 2 && B <= 3;
console.log("Misol-5:");
// Misol-6
JAV5 = A >= 0 || B < -2;
console.log("Misol-6:");
// Misol-7
JAV6 = A <= B && B <= C;
console.log("Misol-7:");
// Misol-8
JAV7 = (A < B && B < C) || (C < B && B < A);
console.log("Misol-8:");
// Misol-9
JAV8 = A % 2 !== 0 && B % 2 !== 0;
console.log("Misol-9:");
// Misol-10
JAV9 = A % 2 !== 0 || B % 2 !== 0;
console.log("Misol-10:");
JAV10 = (A % 2 !== 0) !== (B % 2 !== 0);
// Misol-11:
JAV10 = (A % 2 !== 0 && B % 2 !== 0) || (A % 2 === 0 && B % 2 === 0);
console.log("Misol-11:", JAV10);

// Misol-12:
JAV11 = A > 0 && B > 0 && C > 0;
console.log("Misol-12:", JAV11);

// Misol-13:
JAV12 = A > 0 || B > 0 || C > 0;
console.log("Misol-13:", JAV12);

// Misol-14: 
JAV13 = (A > 0) + (B > 0) + (C > 0) === 1;
console.log("Misol-14:", JAV13);

// Misol-15: 
JAV14 = (A > 0) + (B > 0) + (C > 0) === 2;
console.log("Misol-15:", JAV14);

// Misol-16: 
JAV15 = N >= 10 && N <= 99 && N % 2 === 0;
console.log("Misol-16:", JAV15);

// Misol-17: 
JAV16 = M >= 100 && M <= 999 && M % 2 !== 0;
console.log("Misol-17:", JAV16);

// Misol-18: 
JAV17 = A === B || A === C || B === C;
console.log("Misol-18:", JAV17);

// Misol-19: 
JAV18 = A === -B || A === -C || B === -C;
console.log("Misol-19:", JAV18);

// Misol-20: 
let MIS1 = Math.floor(K / 100); 
let MIS2 = Math.floor(K / 10) % 10; 
let MIS3 = K % 10;
JAV19 = MIS1 === MIS2 && MIS2 === MIS3;
console.log("Misol-20:", JAV19);