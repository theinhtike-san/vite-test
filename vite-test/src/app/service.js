import { products } from "../core/data";
import { newProductName, newProductPrice, productAddForm, productList, productSelect } from "../core/selectors";
import { productEditHandler, productListDelHandler } from "./handlers";

export const productBtnCondition = () => {
    const newProduct = newProductName.value;
    const productPrice = newProductPrice.value;
    if (newProduct !== "" && productPrice !== "") {
        const newList = document.createElement("li");

        newList.innerHTML = `<div class="border-2 product-list  pl-3   grid grid-cols-12 justify-between relative gap-0 w-full"><input type="text" class="py-1 col-span-6 text-xl text-blue-600 original-name   " value='${newProduct}' disabled/>
        <div class="grid grid-cols-12 col-span-6 justify-between items-center gap-0   right-0 h-full ">
        <div class="col-span-7 items-center grid grid-cols-12  w-full text-right">
        <input type="number" class="col-span-8 py-1 text-lg original-price text-blue-600    text-end appearance-none" value="${productPrice}" disabled /><span class="col-span-4 pr-3 text-slate-400">USD</span>
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
      </div>`;

        const lastService = (products[products.length - 1].id);
        const newService = {
            id: lastService + 1,
            name: newProduct,
            price: parseFloat(productPrice),
        }
        products.push(newService);


        const listItem = newList.querySelector(".product-list")
        listItem.setAttribute("value", lastService + 1);
        productList.append(newList);

        // added new service to select option 
        productSelect.append(new Option(products[products.length - 1].name, products[products.length - 1].id));

        // manageProduct product list edit function 
        const productEdit = newList.querySelector(".product-list-edit");
        productEdit.addEventListener("click", productEditHandler);

        // manageProduct product list delete function 
        const productListDel = newList.querySelector(".product-list-row-del")
        productListDel.addEventListener("click", productListDelHandler);


    }
}
export const productAddBtnHandler = (event) => {
    event.preventDefault();
    productBtnCondition();
    productAddForm.reset();

}