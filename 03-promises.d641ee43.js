function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("7Y9D8");const i={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};i.form.addEventListener("submit",(function(t){for(t.preventDefault(),l=Number(i.amount.value),a=Number(i.step.value),d=Number(i.delay.value),s=0;s<l;s+=1)c=s+1,n(c,d).then((({position:t,delay:n})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(u).Notify.success(`❌ Rejected promise ${t} in ${n}ms`)})),d+=a;function n(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;c=setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}c=0,s=0}));let l=0,a=0,d=0,s=0,c=0;
//# sourceMappingURL=03-promises.d641ee43.js.map