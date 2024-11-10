import{r as n,j as e,a as d,_ as l}from"./index-B-Cb2w6b.js";import{u as q}from"./index.esm-6zsu0P9d.js";function T({name:o,id:h,manager:j}){const{register:f,handleSubmit:i,reset:r,formState:{errors:y}}=q(),{register:O,handleSubmit:R,reset:Y,formState:{errors:H}}=q(),{register:m,handleSubmit:M,reset:$,formState:{errors:x}}=q(),[c,L]=n.useState(j),[N,w]=n.useState({}),[A,k]=n.useState([]),[D,U]=n.useState(),[u,v]=n.useState(!1),[p,G]=n.useState(""),E=async t=>{console.log("Updating attendance for",o),console.log("Is Manager:",c);try{const s={date:t.date,userid:h,status:t.status};c?(await d.post("http://localhost:3000/api/v1/hr/makesmattendance",s,{withCredentials:!0}),l.success("Attendance updated for salesmanager")):(await d.post("http://localhost:3000/api/v1/hr/makelabourattendance",s,{withCredentials:!0}),l.success("Attendance updated for labour")),r(),v(!1)}catch(s){l.error(s.response.data.message)}},F=async t=>{console.log("Getting salary for",o),console.log("Is Manager:",c);const s={salaryperday:t.salaryperday,userid:h,year:t.year,month:t.month};try{let a;if(c){a=await d.post("http://localhost:3000/api/v1/hr/salesmanagersalary",s,{withCredentials:!0});const S=a.data.totalday,C=a.data.salary.amount;w({totalday:S,amount:C}),l.success("Salary fetched for salesmanager")}else{a=await d.post("http://localhost:3000/api/v1/hr/laboursalary",s,{withCredentials:!0});const S=a.data.totalday,C=a.data.salary.amount;w({totalday:S,amount:C}),l.success("Salary fetched for labour")}Y(),b("showsalary")}catch(a){l.error(a.response.data.message)}},I=async t=>{console.log("Getting attendance for",o),console.log("Is Manager:",c);try{const s={userid:h,year:t.year,month:t.month};let a;c?a=await d.get("http://localhost:3000/api/v1/hr/salesmanagerattendance",{params:s,withCredentials:!0}):a=await d.get("http://localhost:3000/api/v1/hr/labourattendance",{params:s,withCredentials:!0}),U(a.data.totalday),k(a.data.attendance),l.success("Attendance fetched"),$(),b("showattendance")}catch(s){l.error(s.response.data.message)}},b=t=>{G(t),v(!0)},g=()=>{v(!1),G("")};return e.jsxs("div",{className:"border flex justify-between shadow-md rounded px-2 py-1",children:[e.jsxs("p",{children:["Name: ",o]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx("button",{className:"bg-red-700 rounded px-1 text-white",onClick:()=>b("attendance"),children:"Update Attendance"}),e.jsx("button",{className:"bg-red-700 rounded px-1 text-white",onClick:()=>b("salary"),children:"Get Salary"}),e.jsx("button",{className:"bg-red-700 rounded px-1 text-white",onClick:()=>b("getattendance"),children:"Get Attendance"})]}),u&&p==="getattendance"&&e.jsx("dialog",{open:!0,className:"modal",children:e.jsxs("div",{className:"modal-box bg-white",children:[e.jsx("form",{method:"dialog",children:e.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",onClick:g,children:"✕"})}),e.jsx("h3",{className:"font-bold text-lg",children:"Get Attendance"}),e.jsxs("form",{onSubmit:M(I),className:"flex flex-col gap-6 mt-6",children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"Year (YYYY)",...m("year",{required:!0})}),x.year&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"Month (MM)",...m("month",{required:!0})}),x.month&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsx("button",{type:"submit",className:"bg-red-500 py-1 px-4 rounded text-xl text-white",children:"Fetch Attendance"})]})]})}),u&&p==="attendance"&&e.jsx("dialog",{open:!0,className:"modal",children:e.jsxs("div",{className:"modal-box bg-white",children:[e.jsx("form",{method:"dialog",children:e.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",onClick:g,children:"✕"})}),e.jsx("h3",{className:"font-bold text-lg",children:"Attendance"}),e.jsxs("form",{onSubmit:i(E),className:"flex flex-col gap-6 mt-6",children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"yyyy-mm-dd",...f("date",{required:!0})}),y.date&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"Status",...f("status",{required:!0})}),y.status&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsx("button",{type:"submit",className:"bg-red-500 py-1 px-4 rounded text-xl text-white",children:"Update"})]})]})}),u&&p==="salary"&&e.jsx("dialog",{open:!0,className:"modal",children:e.jsxs("div",{className:"modal-box bg-white",children:[e.jsx("form",{method:"dialog",children:e.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",onClick:g,children:"✕"})}),e.jsx("h3",{className:"font-bold text-lg",children:"Get Salary"}),e.jsxs("form",{onSubmit:M(F),className:"flex flex-col gap-6 mt-6",children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"Salary per day",...m("salaryperday",{required:!0})}),x.salaryperday&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"Year (YYYY)",...m("year",{required:!0})}),x.year&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"Month (MM)",...m("month",{required:!0})}),x.month&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsx("button",{type:"submit",className:"bg-red-500 py-1 px-4 rounded text-xl text-white",children:"Update"})]})]})}),u&&p==="showsalary"&&e.jsx("dialog",{open:!0,className:"modal",children:e.jsxs("div",{className:"modal-box bg-white",children:[e.jsx("button",{onClick:()=>{w({}),g()},className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",children:"✕"}),e.jsx("h3",{className:"font-bold text-lg",children:"Salary"}),Object.keys(N).length>0?e.jsxs("div",{children:["Totaldays: ",N.totalday,e.jsx("br",{}),"Totalamount: ",N.amount]}):e.jsx("div",{children:"Data is not present"})]})}),u&&p==="showattendance"&&e.jsx("dialog",{open:!0,className:"modal modal-lg",children:e.jsxs("div",{className:"modal-box bg-white w-full max-w-4xl",children:[e.jsx("button",{onClick:()=>{k([]),g()},className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",children:"✕"}),e.jsx("h3",{className:"font-bold text-lg",children:"Attendance Data"}),A.length>0?e.jsxs("div",{children:[e.jsxs("p",{children:["Total Days: ",D]}),e.jsxs("table",{className:"w-full mt-4",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:A.map((t,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:t.date}),e.jsx("td",{children:t.status})]},s))})]})]}):e.jsx("div",{children:"No attendance data available"})]})})]})}function J(){const[o,h]=n.useState([]),[j,f]=n.useState([]);return n.useEffect(()=>{(async()=>{try{const r=await d.get("http://localhost:3000/api/v1/hr/getlabours",{withCredentials:!0}),y=await d.get("http://localhost:3000/api/v1/hr/getsalesmanager",{withCredentials:!0});h(r.data.labours),f(y.data.salesmanager),l.success("Data fetched successfully for HR")}catch(r){l.error(r.response.data.message)}})()},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"px-4 mt-6",children:[e.jsx("p",{className:"text-xl underline font-semibold mb-4",children:"Get Salesmanagers"}),j.length>0?e.jsx("div",{className:"grid grid-cols-1 grid-flow-row gap-4",children:j.map(({username:i,_id:r})=>e.jsx("div",{children:e.jsx(T,{name:i,id:r,manager:!0})},r))}):e.jsx("div",{children:"Data is not present here:"})]}),e.jsxs("div",{className:"px-4 mt-6",children:[e.jsx("p",{className:"text-xl underline font-semibold mb-4",children:"Get Labours"}),o.length>0?e.jsx("div",{className:"grid grid-cols-1 grid-flow-row gap-4",children:o.map(({name:i,_id:r})=>e.jsx("div",{children:e.jsx(T,{name:i,id:r,manager:!1})},r))}):e.jsx("div",{children:"Data is not present here:"})]})]})})}export{J as default};
