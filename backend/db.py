import sqlite3
from models import Question

conn = sqlite3.connect("example.db")
cursor = conn.cursor()

# Create simple table
cursor.execute('''
CREATE TABLE IF NOT EXISTS questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    correct BOOLEAN NOT NULL
)
''')


# CREATE 
def create_item(name, quantity):
    cursor.execute("INSERT INTO items (name, quantity) VALUES (?, ?)", (name, quantity))
    conn.commit()
    print("Item created")


# READ
def read_items():
    cursor.execute("SELECT * FROM items")
    for row in cursor.fetchall():
        print(row)


# UPDATE
def update_items(item_id, new_quantity):
    cursor.execute("UPDATE items SET quantity = ? WHERE id = ?", (new_quantity, item_id))
    conn.commit()
    print("Item updated!")


# DELETE
def delete_item(item_id):
    cursor.execute("DELETE FROM items WHERE id = ?", (item_id,))
    conn.commit()
    print("Item deleted")



# DEMO
# if __name__ == "__main__":
#     create_item("Apple", 10)
#     create_item("Banana", 20)
#
#     print("\n All Items:")
#     read_items()
#
#     update_items(1, 15)
#
#     print("\n After Update:")
#     read_items()
#
#     delete_item(2)
#
#     print("\n After Delete")
#     read_items()
