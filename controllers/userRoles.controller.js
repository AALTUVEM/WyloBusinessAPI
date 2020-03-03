import UserRole from '../models/UserRoles';

export async function createUserRole(req, res){
   
    try{

        const { role, description} = req.body;
        let newUserRole = await UserRole.create({
            role,
            description
        },{
            fields: ['role', 'description']
        });
    
        if(newUserRole){
    
            return res.json({
                message: 'User role created succesfully',
                data: newUserRole
            });
    
        }

    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'User role was not created',
            data: {}
        });
    }

}

export async function getAllUsersRole(req,res){

    try {
    const userRoles = await  UserRole.findAll({
        attributes: ['id', 'role', 'description'],
        order: [
            ['id','DESC']
        ]
    });
    res.json({
        data:userRoles
    })
    } catch(e){
        console.log(e);
    }
}

export async function getUserRoleById(req, res){
    const {id} = req.params;
    const userRole = await UserRole.findOne({
        where: {
            id
        },
        attributes: ['id', 'role', 'description']
    });
    res.json({
        data: userRole
    })
}

export async function deleteUserRole(req, res){
    const {id} = req.params;
    const deleteRowCount = await UserRole.destroy({
        where:{
            id
        },
        attributes: ['id', 'role', 'description']
    });
    res.json({
        message: "User deleted successfully",
        count: deleteRowCount
    });
}

export async function updateUserRole(req, res){
    const { id } = req.params;
    const { role, description } = req.body;

    const userRoles = await UserRole.findAll({
        attributes: ['id','role', 'description'],
        where:{
            id
        }
    });

    if(userRoles.length > 0){
        userRoles.forEach( async userRole => {
            await userRole.update({
                role,
                description
            });
        });
    }

    return res.json({
        message: 'User role updated',
        data: userRoles
    })
}