import { Request, Response } from "express";

import { DeletePurchaseRepository } from "../../repositories/database-repository/purchase-database-repository";
import { DeletePurchaseCase } from "../../business/PurchaseCases/DeletePurchaseCase";

import { CustomError } from "../../Erros/CustomError";

export const deletePurchaseController = async ( req: Request, res: Response ): Promise<{}> => {
  try {

    const idPurchase = req.params.id;
    
    const deletePurchaseRepository = new DeletePurchaseRepository();

    const deletePurchaseCase = new DeletePurchaseCase(
      deletePurchaseRepository
    );

    await deletePurchaseCase.delete({ idPurchase });
    
    res.status(200).json({ message: "Produto deletado com sucesso." });
  } catch ( error ) {
    return error instanceof CustomError
    ?
    res.status(error.statusCode).send(error.message)
    :
    res.status(500).send(error.message || error.sqlMessage)
  };
};