const Excel = require('exceljs');

const wb = new Excel.Workbook('test');
const ws = wb.addWorksheet('mySheet');