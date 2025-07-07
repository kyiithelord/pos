from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

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

class SaleItemCreate(BaseModel):
    product_id: int
    quantity: int
    price: float

class SaleCreate(BaseModel):
    total: float
    items: List[SaleItemCreate]

class Sale(BaseModel):
    id: int
    date: datetime
    total: float
    class Config:
        orm_mode = True
