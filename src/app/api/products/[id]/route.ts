import { db } from "@/db/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { number, ZodNumber } from "zod";

export async function GET(request: Request, { params }: {params: { id: string}})
{
    const id = params.id;
    try {

        const product = await db.select().from(products).where(eq(products.id, Number(id)))

        
        if(!product.length)
        {
            return Response.json({ message: 'Product Not found.'}, { status: 400});
        }

        return Response.json(product[0]);
    }
    catch (err) {
        return Response.json({ mesage: 'failed to fetch a product.'}, {status: 500});
    }

}