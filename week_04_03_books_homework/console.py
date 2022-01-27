import pdb
from models.book import Book
from models.author import Author

import repositories.author_repository as author_repository
import repositories.book_repository as book_repository

author_repository.delete_all()
book_repository.delete_all()

author1 = Author("First1", "Last1")
author_repository.save(author1)

author2 = Author("First2", "Last2")
author_repository.save(author2)

book1 = Book("title1", 2001, author1)
book_repository.save(book1)

book2 = Book("title2", 2002, author2)
book_repository.save(book2)

# book_repository.select_all()


pdb.set_trace()