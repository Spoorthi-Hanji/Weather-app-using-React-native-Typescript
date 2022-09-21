import React from "react";
import "@testing-library/react-native";
import {fireEvent, render} from "@testing-library/react-native"
import Countries from "../Countries";



describe("test cases",()=>{
    
    test("renders without crash",()=>{
        const route = {params: {name:"1"}}
        const test = render (<Countries route={route}/>)
        
    })

    test('button',()=>{
      const testIdName = 'cap_weather';
      const route = {params: {name:"1"}}
      const {queryByText} = render(<Countries route={route}/>);
      const Btn = queryByText(testIdName);
      expect(Btn).toBeNull();
    })
   
   


}) 