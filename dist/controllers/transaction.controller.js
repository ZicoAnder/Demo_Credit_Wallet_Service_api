"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionController = void 0;
const services_1 = require("../services");
class WalletTransactionController {
    getUserWalletTransactions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield services_1.transactionService.transactionHistory(req.user);
            return res.status(200).json(Object.assign({}, response));
        });
    }
}
exports.transactionController = new WalletTransactionController();
//# sourceMappingURL=transaction.controller.js.map