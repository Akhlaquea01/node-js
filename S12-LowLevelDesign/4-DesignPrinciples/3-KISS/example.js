const processOrder = (order) => {
    if (order.isValid()) {
        if(order.getItems.size() > 0) {
            for (item of order.getItems()) {
                if (item.isAvailable()) {
                    item.process()
                } else {
                    item.removeFromCart()
                }
            }
            order.confirm()
        } else {
            order.cancel()
        }
    }
}



const processOrder2 = (order) => {
    if (!order.isValid()) {
        return;
    }

    if(order.getItems.size() <= 0) {
        order.cancel(); 
        return; 
    }
    
    processItem(order.getItems());
   
    order.confirm()
}

const processItem = (items) => {
     for (item of items) {
        item.isAvailable() ? item.process() : item.removeFromCart();
    }
}

