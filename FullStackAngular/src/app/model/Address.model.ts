import { ParmanentAddress } from "./ParmanentAddress.model";
import { PresentAddress } from "./PresentAddress.model";

export interface Address{
    Id:number,
    employeeId:number,
    presentAddresse:PresentAddress;
    parmanentAddresse:ParmanentAddress; 
    
}