import {sum} from "../sum";

test("sum is 8",()=>{
    const result=sum(4,4);
    //Assertion
    expect(result).toBe(8);
});