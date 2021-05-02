"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const pileta_contoller_1 = require("../controllers/pileta.contoller");
router.route('/piletas')
    .get(pileta_contoller_1.getPiletas)
    .post(pileta_contoller_1.crearPileta);
exports.default = router;
