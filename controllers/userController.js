// //SQL (query) — mySQL
const connection = require('../config/db');

//GET
exports.getAllUsers = (req, res) => {
    connection.query('SELECT * FROM water_bills', (err, rows, fields) => {
        if (err) throw err;
        res.json(rows);
    });
};

/*exports.getHello=(req,res)=>{
    res.send("<h1> hello </h1>");
}*/


//GET — SEARCH
/*exports.getUserById=(req,res)=>{
    const id=req.params.id;
    connection.query("SELECT * FROM userdata WHERE id=?", [id], (err, rows, fields)=>{
        if(err) throw err;

        if(rows.length>0)
            res.json(rows);
        else
            res.status(404).json({message: "User not found."})
    });
};*/

/*exports.getUserByIp=(req,res)=>{
    const ip=req.params.ip_address;
    connection.query("SELECT * FROM userdata WHERE ip_address=?", [ip], (err, rows, fields)=>{
        if(err) throw err;

        if(rows.length>0)
            res.json(rows);
        else
            res.status(404).json({message: "User not found."})
    });
};*/

/*exports.getUserByIpOrEmail=(req,res)=>{
    const ip_email=req.params.ip_email;
    //const email=req.params.email;
    connection.query("SELECT * FROM userdata WHERE ip_address=? OR email=?", [ip_email,ip_email], (err, rows, fields)=>{
        if(err) {
            res.status(500).json({message:"Database query failed"});
            return;
        }

        if(rows.length>0)
            res.json(rows);
        else
            res.status(404).json({message: "User not found."})
    });
};*/


//POST — Create
exports.createUser=(req,res)=>{
    const {mnumber, name, cubic_meter, totAmount, stats}=req.body;  
    connection.query('INSERT INTO water_bills (meter_number,consumer_name,cubic_meters_used,total_amount,status,) VALUES (?,?,?,?,?)',[mnumber, name, cubic_meter, totAmount, stats],(err,result)=>{
        if(err) throw err;
        res.json({message:'User created successfully',id:result.insertId});
    });
};

//PUT (update/edit)
exports.updateUser=(req,res)=>{
    const {id, mnumber, name, cubic_meter, totAmount, stats}=req.body; 
    connection.query(
        "UPDATE water_bills SET meter_number=?, consumer_name=?, cubic_meters_used=?, total_amount=?, status=? WHERE id=?",[mnumber, name, cubic_meter, totAmount, stats, id], (err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message:'User updated successfully'});
        else
            res.status(404).json({message: 'User not found'});
    });
};

/*exports.updateUser=(req,res)=>{
    const {department}=req.body; 
    connection.query("UPDATE userdata SET department=?",[department], (err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message:'User updated successfully'});
        else
            res.status(404).json({message: 'User not found'});
    })
}*/


//DELETE
exports.deleteUser=(req,res)=>{
    const id=req.body.id;
    connection.query('DELETE FROM water_bills WHERE id=?', [id], (err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message:'User deleted successfully'});
        else
            res.status(404).json({message: 'User not found'});
    });

};

/*exports.deleteUser=(req,res)=>{
    connection.query('DELETE FROM userdata', (err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0)
            res.json({message:'User deleted successfully'});
    });

};*/