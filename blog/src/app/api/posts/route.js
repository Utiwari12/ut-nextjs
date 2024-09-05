// import { createConnection } from "@/lib/db.js";
// import { NextResponse } from "next/server";


// export async function GET() {
//     try {
//         const connection = await createConnection();
//         const sql = "SELECT * FROM student";
//         const[student] = await db.query(sql);
//         return NextResponse.json(student)
        
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({error: error.message}, {status: 500})
        
//     }
// }

import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const connection = await createConnection();
    const sql = "SELECT * FROM student";
    const [student] = await connection.query(sql);
    return NextResponse.json(student)
    //return NextResponse.json({posts: posts})
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({error: error.message}, {status: 500})
    
  }
}
    