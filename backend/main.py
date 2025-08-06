from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

items = {}

class Item(BaseModel):
    name: str 
    description: str


# GET: all items 
@app.get("/items")
def get_items():
    return items

# GET: a single item 
@app.get("/items/{item_id}")
def get_item(item_id: int):
    return items.get(item_id, {"error": "Item not found"})

# POST: create a new item 
@app.post("/items/{item_id}")
def create_item(item_id: int, item: Item):
    if item_id in items:
        return {"error": "Item already exists"}
    items[item_id] = item.dict()
    return {"message": "Item created", "item": items[item_id]}

# PUT: update an existing item 
@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    if item_id not in items:
        return {"error": "Item not found"}
    
    items[item_id] = item.dict()
    return {"message": "Item updated", "item": items[item_id]}

# DELETE: delete an item 
@app.delete("/items/{item_id}")
def delete_item(item_id: int):
    if item_id not in items:
        return {"error": "Item not found"}
    
    deleted = items.pop(item_id)
    return {"message": "Item deleted", "item": deleted}
