from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import models, schemas
from ..database import get_db

router = APIRouter()

# ✅ CREATE sale
@router.post("/", response_model=schemas.Sale)
def create_sale(sale: schemas.SaleCreate, db: Session = Depends(get_db)):
    db_sale = models.Sale(total=sale.total)
    db.add(db_sale)
    db.commit()
    db.refresh(db_sale)

    for item in sale.items:
        db_item = models.SaleItem(
            sale_id=db_sale.id,
            product_id=item.product_id,
            quantity=item.quantity,
            price=item.price,
        )
        db.add(db_item)

        product = db.query(models.Product).filter_by(id=item.product_id).first()
        if product:
            product.stock -= item.quantity

    db.commit()
    return db_sale

# ✅ READ all sales
@router.get("/", response_model=list[schemas.Sale])
def get_sales(db: Session = Depends(get_db)):
    return db.query(models.Sale).all()
