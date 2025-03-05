import{r as l,j as e,a as d,_ as n}from"./index-_Oow93xw.js";import{u as q}from"./index.esm-CHAoZMZC.js";function T({name:i,id:h,manager:j}){const{register:f,handleSubmit:o,reset:r,formState:{errors:y}}=q(),{register:O,handleSubmit:R,reset:Y,formState:{errors:H}}=q(),{register:m,handleSubmit:M,reset:$,formState:{errors:u}}=q(),[c,L]=l.useState(j),[N,w]=l.useState({}),[A,k]=l.useState([]),[D,U]=l.useState(),[x,v]=l.useState(!1),[p,G]=l.useState(""),E=async t=>{console.log("Updating attendance for",i),console.log("Is Manager:",c);try{const s={date:t.date,userid:h,status:t.status};c?(await d.post("undefined/api/v1/hr/makesmattendance",s,{withCredentials:!0}),n.success("Attendance updated for salesmanager")):(await d.post("undefined/api/v1/hr/makelabourattendance",s,{withCredentials:!0}),n.success("Attendance updated for labour")),r(),v(!1)}catch(s){n.error(s.response.data.message)}},F=async t=>{console.log("Getting salary for",i),console.log("Is Manager:",c);const s={salaryperday:t.salaryperday,userid:h,year:t.year,month:t.month};try{let a;if(c){a=await d.post("undefined/api/v1/hr/salesmanagersalary",s,{withCredentials:!0});const S=a.data.totalday,C=a.data.salary.amount;w({totalday:S,amount:C}),n.success("Salary fetched for salesmanager")}else{a=await d.post("undefined/api/v1/hr/laboursalary",s,{withCredentials:!0});const S=a.data.totalday,C=a.data.salary.amount;w({totalday:S,amount:C}),n.success("Salary fetched for labour")}Y(),b("showsalary")}catch(a){n.error(a.response.data.message)}},I=async t=>{console.log("Getting attendance for",i),console.log("Is Manager:",c);try{const s={userid:h,year:t.year,month:t.month};let a;c?a=await d.get("undefined/api/v1/hr/salesmanagerattendance",{params:s,withCredentials:!0}):a=await d.get("undefined/api/v1/hr/labourattendance",{params:s,withCredentials:!0}),U(a.data.totalday),k(a.data.attendance),n.success("Attendance fetched"),$(),b("showattendance")}catch(s){n.error(s.response.data.message)}},b=t=>{G(t),v(!0)},g=()=>{v(!1),G("")};return e.jsxs("div",{className:"border flex justify-between shadow-md rounded px-2 py-1",children:[e.jsxs("p",{children:["Name: ",i]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx("button",{className:"bg-red-700 rounded px-1 text-white",onClick:()=>b("attendance"),children:"Update Attendance"}),e.jsx("button",{className:"bg-red-700 rounded px-1 text-white",onClick:()=>b("salary"),children:"Get Salary"}),e.jsx("button",{className:"bg-red-700 rounded px-1 text-white",onClick:()=>b("getattendance"),children:"Get Attendance"})]}),x&&p==="getattendance"&&e.jsx("dialog",{open:!0,className:"modal",children:e.jsxs("div",{className:"modal-box bg-white",children:[e.jsx("form",{method:"dialog",children:e.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",onClick:g,children:"✕"})}),e.jsx("h3",{className:"font-bold text-lg",children:"Get Attendance"}),e.jsxs("form",{onSubmit:M(I),className:"flex flex-col gap-6 mt-6",children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"Year (YYYY)",...m("year",{required:!0})}),u.year&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"Month (MM)",...m("month",{required:!0})}),u.month&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsx("button",{type:"submit",className:"bg-red-500 py-1 px-4 rounded text-xl text-white",children:"Fetch Attendance"})]})]})}),x&&p==="attendance"&&e.jsx("dialog",{open:!0,className:"modal",children:e.jsxs("div",{className:"modal-box bg-white",children:[e.jsx("form",{method:"dialog",children:e.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",onClick:g,children:"✕"})}),e.jsx("h3",{className:"font-bold text-lg",children:"Attendance"}),e.jsxs("form",{onSubmit:o(E),className:"flex flex-col gap-6 mt-6",children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"yyyy-mm-dd",...f("date",{required:!0})}),y.date&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"Status",...f("status",{required:!0})}),y.status&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsx("button",{type:"submit",className:"bg-red-500 py-1 px-4 rounded text-xl text-white",children:"Update"})]})]})}),x&&p==="salary"&&e.jsx("dialog",{open:!0,className:"modal",children:e.jsxs("div",{className:"modal-box bg-white",children:[e.jsx("form",{method:"dialog",children:e.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",onClick:g,children:"✕"})}),e.jsx("h3",{className:"font-bold text-lg",children:"Get Salary"}),e.jsxs("form",{onSubmit:M(F),className:"flex flex-col gap-6 mt-6",children:[e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"Salary per day",...m("salaryperday",{required:!0})}),u.salaryperday&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"Year (YYYY)",...m("year",{required:!0})}),u.year&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"text",className:"border w-full p-3 rounded",placeholder:"Month (MM)",...m("month",{required:!0})}),u.month&&e.jsx("span",{className:"text-sm text-red-600",children:"This field is required"})]}),e.jsx("button",{type:"submit",className:"bg-red-500 py-1 px-4 rounded text-xl text-white",children:"Update"})]})]})}),x&&p==="showsalary"&&e.jsx("dialog",{open:!0,className:"modal",children:e.jsxs("div",{className:"modal-box bg-white",children:[e.jsx("button",{onClick:()=>{w({}),g()},className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",children:"✕"}),e.jsx("h3",{className:"font-bold text-lg",children:"Salary"}),Object.keys(N).length>0?e.jsxs("div",{children:["Totaldays: ",N.totalday,e.jsx("br",{}),"Totalamount: ",N.amount]}):e.jsx("div",{children:"Data is not present"})]})}),x&&p==="showattendance"&&e.jsx("dialog",{open:!0,className:"modal modal-lg",children:e.jsxs("div",{className:"modal-box bg-white w-full max-w-4xl",children:[e.jsx("button",{onClick:()=>{k([]),g()},className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",children:"✕"}),e.jsx("h3",{className:"font-bold text-lg",children:"Attendance Data"}),A.length>0?e.jsxs("div",{children:[e.jsxs("p",{children:["Total Days: ",D]}),e.jsxs("table",{className:"w-full mt-4",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:A.map((t,s)=>e.jsxs("tr",{children:[e.jsx("td",{children:t.date}),e.jsx("td",{children:t.status})]},s))})]})]}):e.jsx("div",{children:"No attendance data available"})]})})]})}function J(){const[i,h]=l.useState([]),[j,f]=l.useState([]);return l.useEffect(()=>{(async()=>{try{const r=await d.get("undefined/api/v1/hr/getlabours",{withCredentials:!0}),y=await d.get("undefined/api/v1/hr/getsalesmanager",{withCredentials:!0});h(r.data.labours),f(y.data.salesmanager),n.success("Data fetched successfully for HR")}catch(r){n.error(r.response.data.message)}})()},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"px-4 mt-6",children:[e.jsx("p",{className:"text-xl underline font-semibold mb-4",children:"Get Salesmanagers"}),j.length>0?e.jsx("div",{className:"grid grid-cols-1 grid-flow-row gap-4",children:j.map(({username:o,_id:r})=>e.jsx("div",{children:e.jsx(T,{name:o,id:r,manager:!0})},r))}):e.jsx("div",{children:"Data is not present here:"})]}),e.jsxs("div",{className:"px-4 mt-6",children:[e.jsx("p",{className:"text-xl underline font-semibold mb-4",children:"Get Labours"}),i.length>0?e.jsx("div",{className:"grid grid-cols-1 grid-flow-row gap-4",children:i.map(({name:o,_id:r})=>e.jsx("div",{children:e.jsx(T,{name:o,id:r,manager:!1})},r))}):e.jsx("div",{children:"Data is not present here:"})]})]})})}export{J as default};
