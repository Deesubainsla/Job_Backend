import{u as p,b as h,j as e,a as f,s as g,_ as n}from"./index-tiGp5QrS.js";import{u as j}from"./index.esm-CySqk93t.js";function w({role:s="trial"}){const{register:a,handleSubmit:l,formState:{errors:o}}=j(),{userid:d,role:c}=p(r=>r.reduxslice),u=h();console.log(d,c);const m=async({username:r,password:x})=>{const i={username:r,password:x,role:s.toLowerCase()};try{console.log("info",i);const t=await f.post("/api/v1/login",i,{withCredentials:!0,headers:{"Content-Type":"application/json"}});u(g(t.data.userinfo)),n.success(`${s} loggedin successfully`)}catch(t){n.error(t.response.data.message)}};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"items-center mt-32",children:e.jsxs("div",{className:"flex flex-col items-center justify-center shadow-lg border-2 py-6",children:[e.jsxs("p",{className:"text-xl font-semibold",children:["Login for  ",s]}),e.jsxs("form",{onSubmit:l(m),className:"shadow-xl flex flex-col gap-6  mt-6",children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border p-3 rounded-;g",placeholder:"Username",...a("username",{required:!0})}),o.username&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"password",className:"border p-3 rounded-;g",placeholder:"password",...a("password",{required:!0})}),o.password&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsx("button",{type:"submit",className:"bg-red-500 py-1 px-4 rounded text-xl text-white",children:"Login"})]})]})})})}export{w as default};
