import CompanyGarment from '../models/CompanyGarment';

export async function createCompanyGarment(req, res){
    try{

        const {name, picture_url, description, company_id } = req.body;
        let newCompanyGarment = await CompanyGarment.create({
            name,
            picture_url,
            description,
            company_id
            
        },{
            fields:['name', 'picture_url', 'description', 'company_id']
        });

        if(newCompanyGarment){
            return res.json({
                message: 'Company Garment Created',
                data: newCompanyGarment
            });
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Company Garment not create',
            data:{}
        });
    }
}

export async function getAllCompanyGarments(req, res){
    const { companyowner_id } = req.params;
    try{
        const garments = await CompanyGarment.findAll({
            where: companyowner_id
        });
        res.json({
            data:garments
        })
    }catch(e){
        console.log(e);
    }
}

export async function deleteCompanyGarment(req, res){
    const { id } = req.params;
    const deleteRowCount = await CompanyGarment.destroy({
        where:{
            id
        }
    });

    res.json({
        message: "Company Garment deleted Successfully",
        count: deleteRowCount
    });
}