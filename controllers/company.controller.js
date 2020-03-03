import Company from '../models/Company';

export async function createCompany(req, res){
    try{

        const { name, address, address2, city, state, zipcode} = req.body;
        let newCompany = await Company.create({
            name,
            address,
            address2,
            city,
            state, 
            zipcode
        }, {
            fields: [ 'name', 'address', 'address2', 'city', 'state', 'zipcode' ]
        });

        if(newCompany){
            return res.json({
                message: 'New company created',
                data: newCompany
            });
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
            message: ' Company not created',
            data:{}
        })
    }
}

export async function getAllCompanies(req, res){
    try{
        const companies = await Company.findAll();
        res.json({
            data:companies
        });
    }catch(e){

        console.log(e);

    }
}

export async function getCompanyById(req, res){
    try{
        const { id } = req.params;
        const company = await Company.findOne({
            where:{
                id
            }
        });
        res.json({
            data:company
        });
    }catch(e){
        console.log(e);
    }
}

export async function getCompanyByName(req, res){
    try{
        const { name } = req.params;
        const company = await Company.findOne({
            where:{
                name
            }
        });
        res.json({
            data:company
        });
    }catch(e){
        console.log(e);
    }
}


export async function updateCompany(req,res){

    const { id } = req.params;
    const { name, address, address2, city, state, zipcode } = req.body;

    const companies = await Company.findAll({
        attributes: ['name', 'address', 'address2', 'city', 'state', 'zipcode'],
        where: {
            id
        }
    });

    if(companies.length > 0){
        companies.forEach( async company=>{
            await company.update({
                name, 
                address, 
                address2, 
                city, 
                state, 
                zipcode
            });
        });
    }

    return res.json({
        message:'Company Updated',
        data:company
    })
}

export async function deleteCompany(req,res){
    try{
    const { id } = req.params;
    const deleteRowCount = await Company.destroy({
        where : {
            id
        }
    });

    res.json({
        message: "Company deleted Succesfully",
        count: deleteRowCount
    });
    } catch(e){
        console.log(e);
    }
}