from sqlalchemy.orm import Session
from . import models, schemas

def get_products(db: Session):
    return db.query(models.Product).all()

def create_product(db: Session, product: schemas.ProductCreate):
    db_product = models.Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

def create_sale(db: Session, sale: schemas.SaleCreate):
    db_sale = models.Sale(total=sale.total)
    db.add(db_sale)
    db.commit()
    db.refresh(db_sale)

    for item in sale.items:
        db_item = models.SaleItem(
            sale_id=db_sale.id,
            product_id=item.product_id,
            quantity=item.quantity,
            price=item.price
        )
        db.add(db_item)
        # Deduct stock
        product = db.query(models.Product).filter(models.Product.id == item.product_id).first()
        product.stock -= item.quantity

    db.commit()
    return db_sale
