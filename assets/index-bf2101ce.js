(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const i=[{id:0,name:"empty",price:0},{id:1,name:"Web Development",price:700},{id:2,name:"Domain",price:20},{id:3,name:"Hosting",price:50},{id:4,name:"Design Package",price:500},{id:5,name:"Data System",price:700},{id:6,name:"Profile Website",price:800},{id:7,name:"Certificate Verification System",price:750},{id:8,name:"Business Email",price:900},{id:9,name:"Education Services",price:500}],d=[{invoice:0,customerName:"kyaw kyaw",cashierName:"mg mg",costTotal:0,boughtItem:[],date:0},{invoice:1,customerName:"zaw zaw",cashierName:"mg mg",costTotal:0,boughtItem:[],date:0}],c=document.querySelector("#app"),R=c.querySelector("#addRecord"),w=c.querySelector("#recordList"),a=c.querySelector('[name="product_id"]');c.querySelector("#costTotal");const E=c.querySelector("#manageProduct"),I=c.querySelector("#manageProductBox");c.querySelector("#manageProductBox1");const P=c.querySelector("#closeManageProductBox"),y=c.querySelector("#printBtn");c.querySelector("#slip");const x=c.querySelector("#serviceList"),A=c.querySelector("#newProductName"),N=c.querySelector("#newProductPrice"),B=c.querySelector("#newProductAddBtn"),H=c.querySelector("#productAddForm");c.querySelector("#productAddForm1");const L=c.querySelector(".date"),p=c.querySelector(".customer-name"),g=c.querySelector(".staff-name"),v=c.querySelector(".customer-name-input"),m=c.querySelector(".staff-name-input"),S=c.querySelector(".invoice-no"),D=c.querySelector(".invoice0"),j=e=>{e.preventDefault();const t=new FormData(addRecord),{id:n,name:o,price:r}=i.find(l=>l.id==t.get("product_id"));[...c.querySelectorAll("[product-id]")].find(l=>l.getAttribute("product-id")==t.get("product_id"))?(console.log("update quantity"),q(t.get("product_id"),t.get("quantity"))):(console.log("add new row"),w.append(O(n,o,r,t.get("quantity"))),u()),addRecord.reset()},q=(e,t=1)=>{const n=c.querySelector(`[product-id='${e}']`),o=n.querySelector(".record-row-q"),r=n.querySelector(".record-row-cost"),s=n.querySelector(".record-row-price");o.innerText=parseInt(o.innerText)+parseInt(t),r.innerText=o.innerText*s.innerText,u()},M=(e,t=1)=>{const n=c.querySelector(`[product-id='${e}']`),o=n.querySelector(".record-row-q"),r=n.querySelector(".record-row-cost"),s=n.querySelector(".record-row-price");o.innerText=parseInt(o.innerText)-parseInt(t),r.innerText=o.innerText*s.innerText,u()},$=e=>{const t=e.target.closest(".record-row");confirm("Are U sure to delete?")&&(t.remove(),u())},O=(e,t,n,o)=>{const r=document.createElement("tr");return r.className="border-b border-neutral-200 group odd:bg-slate-200 even:bg-white last:border-b-2 border-slate-600",r.classList.add("record-row"),r.setAttribute("product-id",e),r.innerHTML=`
        <td class="p-1 text-center"></td>
        <td class="p-1">${t}</td>
        <td class="p-1 record-row-price text-end">${n}</td>
        <td class="p-1 text-end ">
              
                    <button
                      class="record-row-decrement-q bg-neutral-500 leading-3 p-1 opacity-0 group-hover:opacity-100 duration-300 -translate-x-3 group-hover:translate-x-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 stroke-white pointer-events-none"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 12h-15"
                        />
                      </svg>
                    </button>
                    <span class="record-row-q text-center">${o}</span>
                    <button
                      class="record-row-increment-q bg-neutral-500 leading-3 p-1 opacity-0 group-hover:opacity-100 duration-300 translate-x-3 group-hover:translate-x-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 stroke-white pointer-events-none"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </td>
        <td class="p-3 text-end  relative">
        <span class='record-row-cost  '>${n*o}</span>
        <button class="print:hidden record-row-del bg-neutral-500 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto duration-300 flex justify-center items-center aspect-square h-full absolute top-0 right-0 translate-x-[120%] group-hover:translate-x-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 stroke-white pointer-events-none"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
        </td>
        `,window.addEventListener("afterprint",s=>{w.innerHTML=`<tr class="hidden last:table-row even:bg-slate-400 ">
        <td class="text-center p-1 bg-blue-100/20" colspan="5">
          There is no record 
        </td>
      </tr>`,costTotal.innerText="0",tax.innerText="0",includeTax.innerText="0"}),r},u=()=>{costTotal.innerText=[...c.querySelectorAll(".record-row-cost")].reduce((e,t)=>e+parseFloat(t.innerText),0),tax.innerText=(parseInt(costTotal.innerText)/100*5).toFixed(1),includeTax.innerText=parseInt(costTotal.innerText)+parseInt(tax.innerText)},C=()=>{const e=()=>{console.log("change in record list"),u()},t={childList:!0,subtree:!0};new MutationObserver(e).observe(w,t)},b=()=>{console.log("hello"),I.classList.toggle("translate-x-full")},T=e=>{console.log(e.target.closest(".product-list"));const t=e.target.closest(".product-list"),n=t.querySelector(".product-list-edit"),o=t.querySelector(".original-name"),r=t.querySelector(".original-price");o.toggleAttribute("disabled"),r.toggleAttribute("disabled"),o.classList.add("bg-slate-100","edit-input"),r.classList.add("bg-slate-100","edit-input"),o.style.outline="none",r.style.outline="none",t.classList.toggle("border-blue-500"),o.focus();const s=o.value.length;o.setSelectionRange(s,s),o.addEventListener("change",V),r.addEventListener("change",Q);const l=n.querySelector(".edit"),h=n.querySelector(".save");l.classList.toggle("hidden"),h.classList.toggle("hidden")},k=e=>{const t=e.target.closest(".product-list");console.log(t);const n=parseInt(t.getAttribute("value"));if(console.log(n),confirm("Are U sure to delete?")){const o=i.findIndex(s=>s.id===n);t.remove(),i.splice(o,1);const r=a.querySelector(`[value="${n}"]`);console.log(r),console.dir(a),r.remove()}},F=e=>{const t=e.target.closest(".record-row");e.target.classList.contains("record-row-del")?$(e):e.target.classList.contains("record-row-increment-q")?q(t.getAttribute("product-id")):e.target.classList.contains("record-row-decrement-q")&&M(t.getAttribute("product-id"))},z=()=>{print(),p.innerText="",g.innerText="",v.value=null,m.value=null},f=()=>{p.innerText=v.value,g.innerText=m.value,v.setAttribute("value",p.innerText),m.setAttribute("value",g.innerText)},V=e=>{console.log(e.target),console.log(e.target.value);const t=e.target.value;console.log(t);const n=e.target.closest(".product-list");e.target.toggleAttribute("disabled"),n.classList.toggle("border-blue-500");const o=parseInt(n.getAttribute("value"));console.log(o);const r=i.findIndex(l=>l.id===o);i[r].name=t;const s=a.querySelector(`[value="${o}"]`);s.innerText=t,console.log(t)},Q=e=>{console.log(e.target),console.log(e.target.value);const t=e.target.value,n=e.target.closest(".product-list");e.target.toggleAttribute("disabled"),n.classList.toggle("border-blue-500");const o=parseInt(n.getAttribute("value"));console.log(o);const r=i.findIndex(s=>s.id===o);i[r].price=t},U=()=>{const e=new Date;L.innerText=`${e.toLocaleDateString()} ${e.toLocaleTimeString()}`};setInterval(U,1e3);const _=()=>{S.innerText=d[d.length-1].invoice+1},W=()=>{const e=d[d.length-1].invoice,t=e+1,o=[...t.toString()];D.innerText.substring(o.length),S.innerText=t;const r={invoice:e+1,customerName:p.innerText,cashierName:g.innerText,costTotal:parseFloat(includeTax.innerText),boughtItem:[],date:L.innerText};d.push(r)},K=()=>{i.forEach(({id:e,name:t,price:n})=>{a.append(new Option(t,e));const o=document.createElement("li");o.innerHTML=`<div class="border-2 product-list  pl-3   grid grid-cols-12 justify-between relative gap-0 w-full"><input type="text" class="py-1 col-span-6 text-xl text-blue-600 original-name   " value='${t}' disabled/>
          <div class="grid grid-cols-12 col-span-6 justify-between items-center gap-0   right-0 h-full ">
          <div class="col-span-7 xl:col-span-8 items-center grid grid-cols-12  w-full text-right">
          <input type="number" class="col-span-8 py-1 text-lg original-price text-blue-600    text-end appearance-none" value="${n}" disabled />
          <span class="col-span-4 pr-3 text-slate-400">USD</span>
          </div>
        
          <div class="grid grid-cols-2 col-span-5 xl:col-span-4  justify-between gap-1 h-full ">
          <button class="print:hidden product-list-edit bg-neutral-500    group-hover:opacity-100 group-hover:pointer-events-auto duration-300 flex justify-center items-center  aspect-square h-full   mx-auto  top-0 ">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.2"
                stroke="currentColor"
                class="edit w-6 h-6 text-blue-400 pointer-events-none"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" 
              fill="currentColor"
              viewBox="0 0 448 512"
          
            
              
              class="save hidden w-6 h-6 fill-blue-400 pointer-events-none">
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
            
        
          <button class="print:hidden product-list-row-del bg-neutral-500    group-hover:opacity-100  group-hover:pointer-events-auto duration-300 flex justify-center items-center aspect-square  h-full  mx-auto    top-0 right-0  group-hover:translate-x-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6  text-red-500 pointer-events-none"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
          </div>
        </div>
        </div>`,x.append(o),o.querySelector(".product-list-row-del").addEventListener("click",k),o.querySelector(".product-list").setAttribute("value",e),x.querySelector('[value = "0"').classList.add("hidden"),a.querySelector('[value = "0"').classList.add("hidden"),o.querySelector(".product-list-edit").addEventListener("click",T)})},G=()=>{const e=A.value,t=N.value;if(e!==""&&t!==""){const n=document.createElement("li");n.innerHTML=`<div class="border-2 product-list  pl-3   grid grid-cols-12 justify-between relative gap-0 w-full"><input type="text" class="py-1 col-span-6 text-xl text-blue-600 original-name   " value='${e}' disabled/>
        <div class="grid grid-cols-12 col-span-6 justify-between items-center gap-0   right-0 h-full ">
        <div class="col-span-7 items-center grid grid-cols-12  w-full text-right">
        <input type="number" class="col-span-8 py-1 text-lg original-price text-blue-600    text-end appearance-none" value="${t}" disabled /><span class="col-span-4 pr-3 text-slate-400">USD</span>
        </div>
      
        <div class="grid grid-cols-2 col-span-5 justify-between gap-1 h-full ">
        <button class="print:hidden product-list-edit bg-neutral-500    group-hover:opacity-100 group-hover:pointer-events-auto duration-300 flex justify-center items-center  h-full    top-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.2"
              stroke="currentColor"
              class="w-4  h-4 stroke-white pointer-events-none"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
      
        <button class="print:hidden product-list-row-del bg-neutral-500    group-hover:opacity-100 group-hover:pointer-events-auto duration-300 flex justify-center items-center aspect-square h-full    top-0 right-0  group-hover:translate-x-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 stroke-white pointer-events-none"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
        </div>
      </div>
      </div>`;const o=i[i.length-1].id,r={id:o+1,name:e,price:parseFloat(t)};i.push(r),n.querySelector(".product-list").setAttribute("value",o+1),x.append(n),a.append(new Option(i[i.length-1].name,i[i.length-1].id)),n.querySelector(".product-list-edit").addEventListener("click",T),n.querySelector(".product-list-row-del").addEventListener("click",k)}},J=e=>{e.preventDefault(),G(),H.reset()};class X{initialRender(){K(),_()}listener(){E.addEventListener("click",b),P.addEventListener("click",b),R.addEventListener("submit",j),w.addEventListener("click",F),B.addEventListener("click",J),y.addEventListener("click",z),v.addEventListener("change",f),m.addEventListener("change",f),y.addEventListener("click",W)}observer(){C()}init(){console.log("run"),this.initialRender(),this.listener(),this.observer()}}const Y=new X;Y.init();
