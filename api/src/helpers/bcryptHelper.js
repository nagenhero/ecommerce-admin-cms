import bcrypt from "bcryptjs";
const salt=10;
export const hashPassword=(val)=>
{
    
   return bcrypt.hashSync(val, salt);
}

export const comparePassword = (plianPassword,hashedPassword) => {
  return bcrypt.compareSync(plianPassword,hashedPassword);
};