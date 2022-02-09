from db.run_sql import run_sql

from models.author import Author
from models.book import Book

def save(author):
    sql = "INSERT INTO authors (first_name, last_name) VALUES (%s, %s) RETURNING *"
    values = [author.first_name, author.last_name]
    results = run_sql(sql, values)
    id = results [0]["id"]
    author.id = id
    return author

def delete_all():
    sql = "DELETE  FROM authors"
    run_sql(sql)