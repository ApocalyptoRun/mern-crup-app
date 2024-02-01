import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    ADVENTURE = 'Adventure',
    CLASSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy'
}

@Schema()
export class Book {

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    description: string;

    @Prop({required: true})
    price: string;
}
    
export const bookSchema = SchemaFactory.createForClass(Book);