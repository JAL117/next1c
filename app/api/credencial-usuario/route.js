import { NextResponse } from "next/server";


export async function GET (){
    return NextResponse.json({
        usuario:'jagvms117@gmail.com',
        contrasena:'1234567'
    })
}

