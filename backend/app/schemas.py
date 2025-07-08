from pydantic import BaseModel
from typing import List
from datetime import datetime

# --- Product ---
class ProductBase(BaseModel):
    name: str
    price: float
    stock: int

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int
    class Config:
        orm_mode = True

# --- Sale Items ---
class SaleItemCreate(BaseModel):
    product_id: int
    quantity: int
    price: float

class SaleItem(BaseModel):
    id: int
    product_id: int
    quantity: int
    price: float
    class Config:
        orm_mode = True

# --- Sale ---
class SaleCreate(BaseModel):
    total: float
    items: List[SaleItemCreate]

class Sale(BaseModel):
    id: int
    date: datetime
    total: float
    items: List[SaleItem] = []  # ⬅️ Include items in response
    class Config:
        orm_mode = True
