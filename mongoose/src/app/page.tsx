import Image from 'next/image'
import connectMongo from "@/lib/db/connection";
import Product from "@/lib/db/product.model";

export default async function Home() {
    await connectMongo();
    await Product.create({
        name: 'Product 1',
        description: `${new Date().toLocaleDateString()}`,
        price: 100,
    });

    const products = await Product.find({});

    return (

        <div className="grid grid-cols-3 gap-4">
            {
                products.map((product) => (
                    <div className="shadow-2xl box bg-gray-900 p-2">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                ))
            }
        </div>
    )
}
