import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';
import { BookDto } from './dtos/bookDto';

@Injectable()
export class BookService {

    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ) {}

    async findAll(): Promise<Book[]> {
        return await this.bookModel.find();
    }

    async create(book: BookDto): Promise<Book> {
        return await this.bookModel.create(book);
    }


    async updateBook(id: string, updateBook: BookDto) {
        return await this.bookModel.updateOne({ _id: id}, {...updateBook});
    }

    async deleteBook(id: string) {
        return await this.bookModel.deleteOne({ _id: id });
    }

}
