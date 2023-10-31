import Grocery from "../Grocery";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
test("ok",()=>{
    render(<Grocery/>)

    const heading=screen.getByText("submit")

    expect(heading).getByTheDocument;
})
