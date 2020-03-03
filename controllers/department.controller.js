import Department from '../models/Department';

export async function createDepartment(req, res){
    try{
        const {name, company_id} = req.body;
        let newDepartment = await Department.create({
            name,
            company_id
        }, {
            fields: ['name', 'company_id']
        });

        if(newDepartment){
            return res.json({
                message: 'New Department created successfully',
                data: newDepartment
            });
        }

    }catch(e){
        console.log(e);
        res.status(500).json({
            message: 'New Deparment was not created',
            data:{}
        });
    }
}

export async function getAllDepartmentsByCompanyId(req, res){
    const {company_id} = req.params;
    try{

        const departments = await Department.findAll({
            where:{
                company_id
            }
        });
        res.json({
            data:departments
        })
    }catch(e){
        console.log(e);
    }
}

export async function updateDepartment(req, res){
    try{
        const { id } = req.params;
        const { name } = req.body;

        const departments = await Department.findAll({
            attributes: ['id','name'],
            where: {
                id
            }
        })
        if(departments.length > 0){
            departments.forEach( async department=>{
                await department.update({
                    name
                });
            });
        }

        return res.json({
            message: 'Department updated',
            data: departments
        })
    }catch(e){
        console.log(e);
    }
}

export async function deleteDepartment(req, res){
    try {const {id} = req.params;
    const deleteRowCount = await Department.destroy({
        where:{
            id
        }
    });

    res.json({
        message: 'Department deleted successfully',
        count:deleteRowCount
    })

        } catch(e){
            console.log(e);
        }

}