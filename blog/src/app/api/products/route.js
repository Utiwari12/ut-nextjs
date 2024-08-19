import { connectionStr } from "@/lib/db";
import { Product } from "@/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {
//    await mongoose.connect(connectionStr)
//    const data = await Product.find({})
//     console.log(data);
//the above code will also insert in try-catch block

let data = [];
    try {
        await mongoose.connect(connectionStr);
        data = await Product.find({});
    } catch (error) {
        data = {success: false}
        //console.log(error);
        
    }

    return NextResponse.json({result:data});
}