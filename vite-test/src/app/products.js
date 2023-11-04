import { products } from "../core/data";
import { productList, productSelect } from "../core/selectors";
import { productEditHandler, productListDelHandler } from "./handlers";




  export const productRender = () => {

    products.forEach(({ id, name, price }) => {

        productSelect.append(new Option(name, id));
      
        const list = document.createElement("li");
        list.innerHTML = `<div class="border-2 product-list  pl-3   grid grid-cols-12 justify-between relative gap-0 w-full"><input type="text" class="py-1 col-span-6 text-xl text-blue-600 original-name   " value='${name}' disabled/>
          <div class="grid grid-cols-12 col-span-6 justify-between items-center gap-0   right-0 h-full ">
          <div class="col-span-7 xl:col-span-8 items-center grid grid-cols-12  w-full text-right">
          <input type="number" class="col-span-8 py-1 text-lg original-price text-blue-600    text-end appearance-none" value="${price}" disabled />
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
        </div>`;
      
        productList.append(list);
        const productListDel = list.querySelector(".product-list-row-del")
        productListDel.addEventListener("click", productListDelHandler);
        const listItem = list.querySelector(".product-list");
        listItem.setAttribute("value", id)
      
        const emptyList = productList.querySelector('[value = "0"')
        emptyList.classList.add("hidden");
      
        const emptyOption = productSelect.querySelector('[value = "0"');
        emptyOption.classList.add("hidden");
      
      
        const productEdit = list.querySelector(".product-list-edit");
        productEdit.addEventListener("click", productEditHandler);
      
      
      })
  };