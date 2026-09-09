import mongoose from "mongoose";
import { connectDB } from "./db.js";

await connectDB();

const db = mongoose.connection.db;

if (typeof db !== "undefined") {

    const collections = await db.listCollections().toArray();
    const existing = collections.map((collection) => collection.name);

    const collectionValidators = [
        {
            collection: "users",
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: [
                        '_id',
                        'name',
                        'email',
                        'password'
                    ],

                    properties: {
                        _id: {
                            bsonType: 'objectId',
                            description: 'Unique identifier (ObjectId)'
                        },
                        name: {
                            bsonType: 'string',
                            minLength: 3,
                            maxLength: 30,
                            description: 'String, 3–30 characters'
                        },
                        email: {
                            bsonType: 'string',
                            minLength: 6,
                            maxLength: 254,
                            pattern: '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$',
                            description: 'Valid email address'
                        },
                        password: {
                            bsonType: 'string',
                            description: 'Password of user'
                        },
                        createdAt: {
                            bsonType: 'date',
                            description: 'user creation date'
                        },
                        updatedAt: {
                            bsonType: 'date',
                            description: 'user last update date'
                        },
                        __v: {
                            bsonType: 'number',
                            description: 'For mongoose internal use'
                        }
                    },
                    additionalProperties: false
                }
            }
        },
        {
            collection: "products",
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: [
                        '_id',
                        'title',
                        'price',
                        'rating',
                        'description',
                        'category',
                        'stock',
                        'image'
                    ],

                    properties: {
                        _id: {
                            bsonType: 'objectId',
                            description: 'Unique identifier (ObjectId)'
                        },
                        title: {
                            bsonType: 'string',
                            minLength: 3,
                            maxLength: 50,
                            description: 'String, 3–30 characters'
                        },
                        price: {
                            bsonType: 'number',
                            description: 'product price'
                        },
                        rating: {
                            bsonType: 'number',
                            description: 'product rating'
                        },
                        category: {
                            bsonType: 'string',
                            description: 'product category'
                        },
                        stock: {
                            bsonType: 'number',
                            description: 'product stock'
                        },
                        image: {
                            bsonType: 'string',
                            description: 'product image'

                        },
                        createdAt: {
                            bsonType: 'date',
                            description: 'product creation date'
                        },
                        updatedAt: {
                            bsonType: 'date',
                            description: 'product last update date'
                        },
                        __v: {
                            bsonType: 'number',
                            description: 'For mongoose internal use'
                        }
                    },
                    additionalProperties: false
                }
            }
        },
        {
            collection: "carts",
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: [
                        '_id',
                        'userId',
                        'products',
                    ],

                    properties: {
                        _id: {
                            bsonType: 'objectId',
                            description: 'Unique identifier (ObjectId)'
                        },
                        userId: {
                            bsonType: 'objectId',
                            description: 'Owner Id, Unique identifier (ObjectId)'
                        },
                        products: {
                            bsonType: "array",
                            description: 'Ids of products Added to Cart'
                        },
                        createdAt: {
                            bsonType: 'date',
                            description: 'cart creation date'
                        },
                        updatedAt: {
                            bsonType: 'date',
                            description: 'cart last update date'
                        },
                        __v: {
                            bsonType: 'number',
                            description: 'For mongoose internal use'
                        }
                    },
                    additionalProperties: false
                }
            }
        },
    ]

    for await (const collectionValidator of collectionValidators) {
        try {
            if (!existing.includes(collectionValidator.collection)) {
                await db.createCollection(collectionValidator.collection);
            }

            await db.command({
                collMod: collectionValidator.collection,
                validator: collectionValidator.validator,
                validationLevel: "strict",
                validationAction: "error"
            });

            console.log("done for: ", collectionValidator.collection);

        } catch (error) {
            if (error instanceof Error) {
                console.log(`Error while updating ${collectionValidator.collection}: `, error.message);
            }
        }
    }
}