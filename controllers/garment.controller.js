import Garment from '../models/Garment';

export async function CreateGarment(req, res){
    try{

        const {order_id, company_garment_id} = req.body;
        let newGarment = await Garment.create({
            order_id,
            company_garment_id
        },{
            fields:['order_id','company_garment_id']
        });

        if(newGarment){
            return res.json({
                message: 'Garment created',
                data: newGarment
            });
        }
    }catch(e){
        console.log(e);
        res.status(500).json({
            message:'Garment not created',
            data:{}
        })
    }
}

//Request by order_id
export async function getAllGarmentsById(req, res){
    const {order_id} = req.params;
    try{

        const garments = await Garment.findAll({
            where:{
                order_id
            }
        });
        res.json({
            data:garments,
         
        })

    }catch(e){
        console.log(e)
    }
}

export async function deleteGarmentById(req, res){
    try{
        const {id} = req.params;
        const deleteRowCount = await Garment.destroy({
            where:{
                id
            }
        });
        res.json({
            message: "Garment deleted successfully",
            count: deleteRowCount
        });
    }catch(e){

    }
}