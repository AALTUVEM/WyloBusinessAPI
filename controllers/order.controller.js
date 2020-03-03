import Order from '../models/Order';

export async function createOrder(req, res){
    try{

        const {order_number, status, payment_status, delivering_date, room_number, total_garments, total_ammount, invoice} = req.body;
        let newOrder = await Order.create({
            order_number, 
            status, 
            payment_status, 
            delivering_date, 
            room_number, 
            total_garments, 
            total_ammount, 
            invoice
        },{
            fields:['order_number', 'status', 'payment_status', 'delivering_date', 'room_number', 'total_garments', 'total_ammount', 'invoice']
        });

        if(newOrder){
            return res.json({
                message: 'Order created',
                data: newOrder
            });
        }
    }catch(e){
        console.log(e);
        res.status(500).json({
            message:'Order not created',
            data:{}
        })
    }
}

export async function getAllOrders(req,res){
    try {
        const orders = await  Order.findAll();
        res.json({
            data:orders
        })
        } catch(e){
            console.log(e);
        }
}

export async function deleteOrder(req, res){
    try{
    const {id} = req.params;
    const deleteRowCount = await Order.destroy({
        where:{
            id
        }
    });
    res.json({
        message: "Order deleted successfully",
        count: deleteRowCount
    });
    }catch(e){
        console.log(e);
    }
}