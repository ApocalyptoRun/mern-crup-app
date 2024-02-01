import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { BookDto } from './dtos/bookDto';

@Controller('books')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get()
    async getBooks(): Promise<Book[]> {
        return await this.bookService.findAll();
    }

    @Post()
    async createBook(@Body() book: BookDto): Promise<Book> {
        return await this.bookService.create(book);
    }

    @Put(':id')
    async updateBook(
        @Param('id') id: string,
        @Body() updateBook: BookDto
    ) {
       this.bookService.updateBook(id, updateBook);
    }
    
    @Delete(':id')
    async deleteBookById(@Param('id') id: string) {
        return await this.bookService.deleteBook(id);
    } 

    
}
