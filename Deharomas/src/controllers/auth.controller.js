export const Register = (req,res)=>{
    
    const { email,password,username } = req.body

    res.send('Resgistrando')
    console.log(req.body)

}

export const Login = (req,res)=>{
   res.send('Login page') 

}