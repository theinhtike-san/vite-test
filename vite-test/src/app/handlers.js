import { history, products } from "../core/data";
import {  customerName, customerNameInput, date, invoice0, invoiceNo,  manageProductBox, productSelect, staffName, staffNameInput } from "../core/selectors";
import { recordRowDelHandler, recordRowQuantityDecrement, recordRowQuantityIncrement } from "./record";

export const manageProductHandler = () => {
    console.log("hello");
    manageProductBox.classList.toggle("translate-x-full");


}
export const productEditHandler = (event) => {
    console.log(event.target.closest(".product-list"));
    const editList = event.target.closest(".product-list");
    const editBtn = editList.querySelector(".product-list-edit")
    const originalName = editList.querySelector(".original-name")
    const originalPrice = editList.querySelector(".original-price")


    originalName.toggleAttribute("disabled");
    originalPrice.toggleAttribute("disabled");

    originalName.classList.add("bg-slate-100", "edit-input")
    originalPrice.classList.add("bg-slate-100", "edit-input")
    originalName.style.outline = "none";
    originalPrice.style.outline = "none";

    editList.classList.toggle("border-blue-500")
    const focus = originalName.focus();
    const len = originalName.value.length;

    // to focus cursor at the end of text 
    originalName.setSelectionRange(len, len);
    focus;

    // set change event to get input data on mouse change immediately 
    originalName.addEventListener("change", editedName);

    originalPrice.addEventListener("change", editedPrice);

    const edit = editBtn.querySelector(".edit");
    const save = editBtn.querySelector(".save");
    edit.classList.toggle("hidden");
    save.classList.toggle("hidden");

}

export const productListDelHandler = (event) => {

    const list = event.target.closest(".product-list");
    console.log(list);
    const listValue = parseInt(list.getAttribute("value"))
    console.log(listValue);
    if (confirm("Are U sure to delete?")) {
        const listFind = products.findIndex(object => {
            return object.id === listValue
        });
        list.remove();
        products.splice(listFind, 1)

        const selectOption = productSelect.querySelector(`[value="${listValue}"]`);
        console.log(selectOption);
        console.dir(productSelect)

        selectOption.remove();

    }
}

export const recordListHandler = (event) => {
    const currentRecordRow = event.target.closest(".record-row");
    if (event.target.classList.contains("record-row-del")) {
        recordRowDelHandler(event);
    } else if (event.target.classList.contains("record-row-increment-q")) {
        recordRowQuantityIncrement(currentRecordRow.getAttribute("product-id"));

    } else if (event.target.classList.contains("record-row-decrement-q")) {
        recordRowQuantityDecrement(currentRecordRow.getAttribute("product-id"));
    }
};

export const printBtnHandler = () => {
    print();
    customerName.innerText = "";
    staffName.innerText = "";
    customerNameInput.value = null;
    staffNameInput.value = null;
}
export const customerNameHandler = () => {
    customerName.innerText = customerNameInput.value;
    staffName.innerText = staffNameInput.value;
    customerNameInput.setAttribute("value", customerName.innerText);
    staffNameInput.setAttribute("value", staffName.innerText);
}

export const editedName = (event) => {

    console.log(event.target);
    console.log(event.target.value);
    const originalName = event.target.value;
    console.log(originalName)
    const editList = event.target.closest(".product-list");

    event.target.toggleAttribute("disabled");
    editList.classList.toggle("border-blue-500")

    const listValue = parseInt(editList.getAttribute("value"))
    console.log(listValue);

    //to get id of target list
    const listFind = products.findIndex(object => {
        return object.id === listValue
    });
    products[listFind].name = originalName;

    // add to select option 
    const selectOption = productSelect.querySelector(`[value="${listValue}"]`);
    selectOption.innerText = originalName;
    console.log(originalName);
}

export const editedPrice = (event) => {
    console.log(event.target);
    console.log(event.target.value);
    const originalPrice = event.target.value;
    const editList = event.target.closest(".product-list");

    event.target.toggleAttribute("disabled");
    editList.classList.toggle("border-blue-500")

    const listValue = parseInt(editList.getAttribute("value"))
    console.log(listValue);
    const listFind = products.findIndex(object => {
        return object.id === listValue
    });
    products[listFind].price = originalPrice;

}


export const updateDate = () => {
    const dateFull = new Date();

    date.innerText = `${dateFull.toLocaleDateString()} ${dateFull.toLocaleTimeString()}`;
}
setInterval((updateDate), 1000);

export const invoiceNoOriginal = () => {

    invoiceNo.innerText = (history[history.length - 1].invoice) + 1;


}

export const updateInvoiceNo = () => {
    const invoice1 = history[history.length - 1].invoice;
    const newInvoice = invoice1 + 1;
    const invoiceString = newInvoice.toString();
    const invoiceLength = [...invoiceString];
    const addInvoice = invoice0.innerText.substring(invoiceLength.length);

    invoiceNo.innerText = newInvoice;

    const record = {
        invoice: (invoice1) + 1,
        customerName: customerName.innerText,
        cashierName: staffName.innerText,
        costTotal: parseFloat(includeTax.innerText),
        boughtItem: [],
        date: date.innerText,
    }
    history.push(record);

}