import { connectionStr } from "@/lib/db";
import { Product } from "@/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


// export async function GET() {
// //    await mongoose.connect(connectionStr)
// //    const data = await Product.find({})
// //     console.log(data);
// //the above code will also insert in try-catch block

// let data = [];
//     try {
//         await mongoose.connect(connectionStr);
//         data = await Product.find({});
//     } catch (error) {
//         data = {success: false}
//         //console.log(error);
        
//     }

//     return NextResponse.json({result:data});
// }

//the following api code will work in Get API data from mongoDB database

export async function GET() {
    let data = [];
    let success = true;
    try {
        mongoose.connect(connectionStr);
        data = await Product.find({});
    } catch (error) {
        data = {result: "error"}
        success = false
    }

    return NextResponse.json({result:data}, {success});
}



export async function POST(request) {
    
    await mongoose.connect(connectionStr);
    
    // const product = new Product({
    //     name:"samsung 10",
    //     price:"10000",
    //     company:"samsung",
    //     color:"red",
    //     category:"mobile"
    // });
    //above code will also send through postman
    const payload = await request.json();
    const product = new Product(payload)
    const result = await product.save();
    return NextResponse.json({result, success: true});
}