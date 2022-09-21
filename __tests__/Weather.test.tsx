import React from "react";
import "@testing-library/react-native";
import {fireEvent, render} from "@testing-library/react-native"
import Weather from "../Weather";

describe("test cases",()=>{
    
    test("renders without crash",()=>{
        const route = {params: {capital:"1"}}
        const test = render (<Weather route={route}/>)
        
    })

    
     

   

}) 