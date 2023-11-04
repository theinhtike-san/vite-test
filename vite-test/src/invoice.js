import { customerNameHandler, invoiceNoOriginal, manageProductHandler, printBtnHandler, recordListHandler,  updateInvoiceNo } from "./app/handlers";
import { productRender } from "./app/products";
import { addRecordHandler, recordObserver } from "./app/record";
import { productAddBtnHandler } from "./app/service";
import { history, products } from "./core/data";
import { addRecord, closeManageProductBox, customerNameInput, invoiceNo, manageProduct, newProductAddBtn, printBtn, recordList, staffNameInput, } from "./core/selectors";

class invoice {
    initialRender() {
        productRender();
        invoiceNoOriginal();
        
    }

    listener() {
        manageProduct.addEventListener("click", manageProductHandler);
        closeManageProductBox.addEventListener("click", manageProductHandler);
        addRecord.addEventListener("submit", addRecordHandler);
        recordList.addEventListener("click", recordListHandler)
        newProductAddBtn.addEventListener("click", productAddBtnHandler)
        printBtn.addEventListener("click", printBtnHandler)
        customerNameInput.addEventListener("change", customerNameHandler);
        staffNameInput.addEventListener("change", customerNameHandler);
        printBtn.addEventListener("click",updateInvoiceNo)
    }
    observer(){
        recordObserver();
    }
    init() {
        console.log("run");
        this.initialRender()
        this.listener();
        this.observer();
    }
}
export default invoice;

