import User from '../models/User';

export async function createUser(req, res){
   
    try{

        const { first_name, last_name, email, password, username, company_id, role_id, department_id } = req.body;
        let newUser = await User.create({
            first_name,
            last_name,
            email,
            password,
            username,
            company_id,
            role_id,
            department_id
        },{
            fields: ['first_name', 'last_name', 'email', 'password', 'username', 'company_id', 'role_id', 'department_id']
        });
    
        if(newUser){
    
            return res.json({
                message: 'User created succesfully',
                data: newUser
            });
    
        }

    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'User was not created',
            data: {}
        });
    }

}

export async function getAllUsers(req,res){

    try {
    const users = await  User.findAll();
    res.json({
        data:users
    })
    } catch(e){
        console.log(e);
    }
}

export async function getUserById(req, res){
    const {id} = req.params;
    const user = await User.findOne({
        where: {
            id
        }
    });
    res.json({
        data: user
    })
}

export async function getUserByLastName(req, res){
    const {last_name} = req.params;
    const user = await User.findOne({
        where: {
            last_name
        }
    });
    res.json({
        data: user
    })
}

export async function deleteUser(req, res){
    const {id} = req.params;
    const deleteRowCount = await User.destroy({
        where:{
            id
        }
    });
    res.json({
        message: "User deleted successfully",
        count: deleteRowCount
    });
}

export async function updateUser(req, res){
    const { id } = req.params;
    const { first_name, last_name, password } = req.body;

    const users = await User.findAll({
        attributes: ['id', 'first_name', 'last_name', 'password'],
        where:{
            id
        }
    });

    if(users.length > 0){
        users.forEach( async user => {
            await user.update({
                first_name,
                last_name,
                password
            });
        });
    }

    return res.json({
        message: 'User updated',
        data: users
    })
}