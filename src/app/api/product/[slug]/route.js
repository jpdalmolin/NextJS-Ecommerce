import { doc, getDoc } from "firebase/firestore"

import { NextResponse } from "next/server"
import { db } from "@/src/app/data/config"

export async function GET(_, { params }) {
    const { slug } = params

    const docRef = doc(db, "productos", slug)
    const docSnapshot = await getDoc(docRef)

    return NextResponse.json( docSnapshot.data() )
}