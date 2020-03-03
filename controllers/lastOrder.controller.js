import LastOrder from '../models/LastOrder';

export async function CreateLastOrder(req, res){
  
    try {
        const { order_number } = req.body;
        let newLastOrder = await LastOrder.create({
            order_number
        },{
            fields: ['order_number']
        });

        if(newLastOrder){
            return res.json({
                message: 'Last Order created successfully',
                data: newLastOrder
            });
        }

    } catch(e){
        res.status(500).json({
            message:'Last Order was not created',
            data:{}
        });
    }

}

export async function getLastOrder(req, res){
    try {

        const newestOrder = await LastOrder.findAll({
            limit:1,
            order: [['createdAt','DESC']]
        });
        res.json({
            data: newestOrder
        }) 

    } catch(e){
        console.log(e);
    }
}

export async function getOrderByNumber(req,res){
    try{
        const {order_number} = req.params;
        const order = await LastOrder.findOne({
            where: {
                order_number
            }
        });
        res.json({
            data:order
        })
    }catch(e){
        console.log(e)
    }
}

export async function deleteLastOrder(req, res){
    try{
        const{order_number} = req.params;
        const deleteRowCount = await LastOrder.destroy({
            where:{
                order_number
            }
        });
        res.json({
            message: "Last Order deleted",
            count: deleteRowCount
        });
    }catch(e){
        console.log(e);
    }
   

}
