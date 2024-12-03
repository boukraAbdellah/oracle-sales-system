CREATE OR REPLACE TRIGGER trg_calculate_sale_amount
BEFORE INSERT OR UPDATE ON Sales
FOR EACH ROW
BEGIN
    SELECT :NEW.Quantity * p.Price INTO :NEW.SaleAmount
    FROM Product p
    WHERE p.ProductID = :NEW.ProductID;
END;
/