import{r as l}from"./index.BLroMeNT.js";import{r as v}from"./index.CHWSUoQ2.js";import{j as c}from"./jsx-runtime.CLXZXzaL.js";function D(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(e?.(r),t===!1||!r.defaultPrevented)return n?.(r)}}function h(e){const n=l.useRef(e);return l.useEffect(()=>{n.current=e}),l.useMemo(()=>(...t)=>n.current?.(...t),[])}function O({prop:e,defaultProp:n,onChange:t=()=>{}}){const[o,r]=E({defaultProp:n,onChange:t}),s=e!==void 0,i=s?e:o,u=h(t),a=l.useCallback(f=>{if(s){const d=typeof f=="function"?f(e):f;d!==e&&u(d)}else r(f)},[s,e,r,u]);return[i,a]}function E({defaultProp:e,onChange:n}){const t=l.useState(e),[o]=t,r=l.useRef(o),s=h(n);return l.useEffect(()=>{r.current!==o&&(s(o),r.current=o)},[o,r,s]),t}function m(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function y(...e){return n=>{let t=!1;const o=e.map(r=>{const s=m(r,n);return!t&&typeof s=="function"&&(t=!0),s});if(t)return()=>{for(let r=0;r<o.length;r++){const s=o[r];typeof s=="function"?s():m(e[r],null)}}}}function V(...e){return l.useCallback(y(...e),e)}var C=l.forwardRef((e,n)=>{const{children:t,...o}=e,r=l.Children.toArray(t),s=r.find(g);if(s){const i=s.props.children,u=r.map(a=>a===s?l.Children.count(i)>1?l.Children.only(null):l.isValidElement(i)?i.props.children:null:a);return c.jsx(p,{...o,ref:n,children:l.isValidElement(i)?l.cloneElement(i,void 0,u):null})}return c.jsx(p,{...o,ref:n,children:t})});C.displayName="Slot";var p=l.forwardRef((e,n)=>{const{children:t,...o}=e;if(l.isValidElement(t)){const r=b(t);return l.cloneElement(t,{...S(o,t.props),ref:n?y(n,r):r})}return l.Children.count(t)>1?l.Children.only(null):null});p.displayName="SlotClone";var R=({children:e})=>c.jsx(c.Fragment,{children:e});function g(e){return l.isValidElement(e)&&e.type===R}function S(e,n){const t={...n};for(const o in n){const r=e[o],s=n[o];/^on[A-Z]/.test(o)?r&&s?t[o]=(...u)=>{s(...u),r(...u)}:r&&(t[o]=r):o==="style"?t[o]={...r,...s}:o==="className"&&(t[o]=[r,s].filter(Boolean).join(" "))}return{...e,...t}}function b(e){let n=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,t=n&&"isReactWarning"in n&&n.isReactWarning;return t?e.ref:(n=Object.getOwnPropertyDescriptor(e,"ref")?.get,t=n&&"isReactWarning"in n&&n.isReactWarning,t?e.props.ref:e.props.ref||e.ref)}var P=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],W=P.reduce((e,n)=>{const t=l.forwardRef((o,r)=>{const{asChild:s,...i}=o,u=s?C:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),c.jsx(u,{...i,ref:r})});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function k(e,n){e&&v.flushSync(()=>e.dispatchEvent(n))}export{W as P,C as S,V as a,h as b,D as c,k as d,R as e,O as u};
