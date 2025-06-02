export type empResponse={

}

export type employeeResponse={

}

export type empRequest={
         
    name:string,
    email:string,
    age:number,
    role:string,
    dept_id:number,
    password:string,
    employeeId:string,
    dateOfJoining:string,
    experience:number,
    status:string,
    address:{
        line1:string,
        line2:string,
        houseNo:string,
        pincode:string,
    }
}