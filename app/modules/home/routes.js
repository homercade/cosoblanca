//******************************************************* */
//              THIS IS THE MAIN ROUTE BOI
//******************************************************* */
var express = require('express');
var router = express.Router();
var db = require('../../lib/database')();
var session = require('express-session');

var auth = function(req, res, next){
  if(req.session && req.session.user === 'amy' && req.session.admin)
    return next();
  else
    res.redirect('/');
}
router.use(session({
  secret: 'AU832hrui4yryw8413JH3',
  resave: true,
  saveUninitialized: true
}));

router.get('/login', function(req, res) {
  if(!req.query.username || !req.query.password){
    res.redirect('/');
  }
  else if(req.query.username === 'root' && req.query.password === 'pass'){
    req.session.user = 'amy';
    req.session.admin = true;
    res.redirect('/dashboard');
  }
  else
    res.redirect('/');
});

router.get('/logout', function(req, res){
  req.session.destroy();
  res.redirect('/');
});

router.get('/dashboard', (req, res) => {
  db.query('SELECT * FROM cosdd.tblstorage WHERE intPresence=1', function(err, results, fields){
    if (err) throw (err)
    else {
        res.render('home/views/dashboard', { storeg: results });
    }
  });
})

//******************************************************* */
//                      DEPARTMENT
//******************************************************* */
// CREATE DEPARTMENTS
router.post('/department', (req, res) => {   
  db.query(`INSERT INTO cosdd.tbldept (strDeptCode, txtDeptNamen intPresence) VALUES (?, ?, 1)`, [req.body.deptCode, req.body.deptName], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/department');
    }
  });
});

// READ DEPARTMENTS
router.get('/department', (req, res) => {
    db.query('SELECT * FROM cosdd.tbldept WHERE intPresence=1 ORDER BY intDeptID ASC', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/department', { depart: results });
        }
    });
});

// UPDATE DEPARTMENTS
router.post('/department/update', (req, res) => {
  db.query(`UPDATE cosdd.tbldept SET strDeptCode=?, txtDeptName=? WHERE intDeptID=?`, [req.body.deptCode, req.body.deptName, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/department');
    }
  });
});

//DELETE DEPARTMENTS
router.post('/department/delete', (req, res) => {
  db.query(`UPDATE cosdd.tbldept SET intPresence=0 WHERE intDeptID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/department');
    }
  });
});

//******************************************************* */
//                          MODEL
//******************************************************* */

// CREATE MODEL
router.post('/model', (req, res) => {   
  db.query(`INSERT INTO cosdd.tblmodel (strModelName, intPresence) VALUES (?, 1)`, [req.body.unitModel], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/model');
    }
  });
});

// READ MODEL
router.get('/model', (req, res) => {
    db.query('SELECT * FROM cosdd.tblmodel WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/model', { models: results });
        }
    });
});

// UPDATE MODEL
router.post('/model/update', (req, res) => {
  db.query(`UPDATE cosdd.tblmodel SET strModelName=? WHERE intModelID=?`, [req.body.unitModel, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/model');
    }
    console.log(req.body.unitModel);
  });
});

//DELETE MODEL
router.post('/model/delete', (req, res) => {
  db.query(`UPDATE cosdd.tblmodel SET intPresence=0 WHERE intModelID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/model');
    }
  });
});

//******************************************************* */
//                          BRAND
//******************************************************* */

// CREATE BRAND
router.post('/brand', (req, res) => {   
  db.query(`INSERT INTO cosdd.tblbrand (strUnitBrand, intPresence) VALUES (?, 1)`, [req.body.unitBrand], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/brand');
    }
  });
});

// READ BRAND
router.get('/brand', (req, res) => {
    db.query('SELECT * FROM cosdd.tblbrand WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/brand', { brands: results });
        }
    });
});

// UPDATE BRAND
router.post('/brand/update', (req, res) => {
  db.query(`UPDATE cosdd.tblbrand SET strUnitBrand=? WHERE intUnitID=?`, [req.body.unitBrand, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/brand');
    }
  });
});

//DELETE BRAND
router.post('/brand/delete', (req, res) => {
  db.query(`UPDATE cosdd.tblbrand SET intPresence=0 WHERE intUnitID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/brand');
    }
  });
});

//******************************************************* */
//                       UNIT TYPE
//******************************************************* */

// CREATE UNIT TYPE
router.post('/unittype', (req, res) => {   
  db.query(`INSERT INTO cosdd.tblunittype (strUnitTypeDesc, intPresence) VALUES (?, 1)`, [req.body.unitType], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/unittype');
    }
  });
});

// READ UNIT TYPE
router.get('/unittype', (req, res) => {
    db.query('SELECT * FROM cosdd.tblunittype WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/unittype', { types: results });
        }
    });
});

// UPDATE UNIT TYPE
router.post('/unittype/update', (req, res) => {
  db.query(`UPDATE cosdd.tblunittype SET strUnitTypeDesc=? WHERE intUnitTypeID=?`, [req.body.unitType, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/unittype');
    }
  });
});

//DELETE UNIT TYPE
router.post('/unittype/delete', (req, res) => {
  db.query(`UPDATE cosdd.tblunittype SET intPresence=0 WHERE intUnitTypeID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/unittype');
    }
  });
});
//******************************************************* */
//                       TECHNICIAN
//******************************************************* */

// CREATE TECHNICIAN
router.post('/technician', (req, res) => {   
  db.query(`INSERT INTO cosdd.tbltechnician (strTechnicianFName, strTechnicianLName, intPresence) VALUES (?, ?, 1)`, [req.body.techFName, req.body.techLName], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/technician');
    }
  });
});

// READ TECHNICIAN
router.get('/technician', (req, res) => {
    db.query('SELECT * FROM cosdd.tbltechnician WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/technician', { technicians: results });
        }
    });
});

// UPDATE TECHNICIAN
router.post('/technician/update', (req, res) => {
  db.query(`UPDATE cosdd.tbltechnician SET strTechnicianFName=?, strTechnicianLName=? WHERE intTechnicianID=?`, [req.body.techFName, req.body.techLName, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/technician');
    }
  });
});

//DELETE TECHNICIAN
router.post('/technician/delete', (req, res) => {
  db.query(`UPDATE cosdd.tbltechnician SET intPresence=0 WHERE intTechnicianID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/technician');
    }
  });
});

//******************************************************* */
//                      STATUS
//******************************************************* */

// CREATE STATUS
router.post('/status', (req, res) => {   
  db.query(`INSERT INTO cosdd.tblstatus (strStatusName, txtStatusDesc) VALUES (?, ?)`, [req.body.statName, req.body.statDesc], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/status');
    }
  });
});

// READ STATUS
router.get('/status', (req, res) => {
    db.query('SELECT * FROM cosdd.tblstatus', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/status', { statuses: results });
        }
    });
});

// UPDATE STATUS
router.post('/status/update', (req, res) => {
  db.query(`UPDATE cosdd.tblstatus SET strStatusName=?, txtStatusDesc=? WHERE intStatusID=?`, [req.body.statName, req.body.statDesc, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/status');
    }
  });
});

//DELETE STATUS
router.post('/status/delete', (req, res) => {
  db.query(`DELETE FROM cosdd.tblstatus WHERE intStatusID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/status');
    }
  });
});

//******************************************************* */
//                      PRICE
//******************************************************* */

// CREATE PRICE
router.post('/price', (req, res) => { 
  db.query(`INSERT INTO cosdd.tblprice (txtUnitDesc, fltPrice, intPresence) VALUES (?, ?, 1)`, [req.body.priStorage, req.body.priPrice], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/price');
    }
  });
});

// READ PRICE
router.get('/price', (req, res) => {
    db.query('SELECT * FROM cosdd.tblprice WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/price', { pricey: results,
                                                    equips: req.equips,
                                                    equiper: req.equiper });
        }
    });
});

// UPDATE PRICE
router.post('/price/update', (req, res) => {
  db.query(`UPDATE cosdd.tblprice SET txtUnitDesc=?, fltPrice=? WHERE intPriceID=?`, [req.body.priStorage, req.body.priPrice, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/price');
    }
  });
});

//DELETE PRICE
router.post('/price/delete', (req, res) => {
  db.query(`UPDATE cosdd.tblprice SET intPresence=0 WHERE intPriceID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/price');
    }
  });
});

//******************************************************* */
//                      EMPLOYEE
//******************************************************* */

// CREATE EMPLOYEE
router.post('/employee', (req, res) => {   
  db.query(`INSERT INTO cosdd.tblemployee (strFirstName, strLastName, intPresence) VALUES (?, ?, 1)`, [req.body.empFName, req.body.empLName], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/employee');
    }
  });
});

// READ EMPLOYEE
router.get('/employee', (req, res) => {
    db.query('SELECT * FROM cosdd.tblemployee WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/employee', { employees: results });
        }
    });
});

// UPDATE EMPLOYEE
router.post('/employee/update', (req, res) => {
  db.query(`UPDATE cosdd.tblemployee SET txtUnitDesc=?, fltPrice=? WHERE intZFEmpID=?`, [req.body.statName, req.body.statDesc, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/employee');
    }
  });
});

//DELETE EMPLOYEE 
router.post('/employee/delete', (req, res) => {
  db.query(`UPDATE cosdd.tblemployee SET intPresence=0 WHERE intZFEmpID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/employee');
    }
  });
});

//******************************************************* */
//                       STORAGE
//******************************************************* */

// CREATE STORAGE
router.post('/storage', (req, res) => {   
  db.query(`INSERT INTO cosdd.tblstorage (txtStorageEquip, strBrand, strMod, strUnit, intStorageQty, fltPrice, intPresence) VALUES (?, ?, ?, ?, ?, ?, 1)`, [req.body.stoBrand + ' ' + req.body.stoModel + ' - ' + req.body.stoUnit, req.body.stoBrand, req.body.stoModel, req.body.stoUnit, req.body.strgQty, req.body.stoVal], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/storage');
    }
  });
});

// READ STORAGE
router.get('/storage', priBrandQuery, priModelQuery, priUnitTypeQuery, (req, res) => {
    db.query('SELECT * FROM cosdd.tblstorage WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/storage', { storeg: results, 
                                                      brandy: req.brandy,
                                                      modely: req.modely,
                                                      unity:  req.unity });
        }
    });
});

// UPDATE STORAGE
router.post('/storage/update', (req, res) => {
  db.query(`UPDATE cosdd.tblstorage SET txtStorageEquip=?, intStorageQty=?, fltPrice=? WHERE intStorageID=?`, [req.body.stoBrand + ' ' + req.body.stoModel + ' - ' + req.body.stoUnit, req.body.strgQty, req.body.stoVal, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/storage');
    }
    console.log(req.body.stoBrand);
    console.log(req.body.stoModel);
    console.log(req.body.stoUnit);
    console.log(req.body.strgQty);
  });
});

//DELETE STORAGE
router.post('/storage/delete', (req, res) => {
  db.query(`UPDATE cosdd.tblstorage SET intPresence=0 WHERE intStorageID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/storage');
    }
  });
});

//******************************************************* */
//                      ACCOUNTS
//******************************************************* */

// CREATE ACCOUNTS
router.post('/accounts', (req, res) => {   
  db.query(`INSERT INTO cosdd.tblaccounts (strDevice, strDeviceAccount, strEmailAccount, strEmailPass, strIDAccount, strIDAccPassword, strNetworkAddress, strWifiAddress, intPresence) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)`, [req.body.accDev, req.body.accDevAcc, req.body.accEma, req.body.accEmaPass, req.body.accIDAcc, req.body.accIDAccPass, req.body.accNetAdd, req.body.accWifi], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/accounts');
    }
  });
});

// READ ACCOUNTS
router.get('/accounts', (req, res) => {
    db.query('SELECT * FROM cosdd.tblaccounts WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/accounts', { accounts: results });
        }
    });
});

// UPDATE ACCOUNTS
router.post('/accounts/update', (req, res) => {
  db.query(`UPDATE cosdd.tblaccounts SET txtAccountType=?, strAccEmail=?, strAccPassword=? WHERE intAccountID=?`, [req.body.accTyp, req.body.accEma, req.body.accPass, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/accounts');
    }
  });
});

//DELETE ACCOUNTS 
router.post('/accounts/delete', (req, res) => {
  db.query(`UPDATE cosdd.tblaccounts SET intPresence=0 WHERE intAccountID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/accounts');
    }
  });
});


//******************************************************* */
//                 EQUIPMENT ASSIGNMENT
//******************************************************* */

// READ INVENTORY RECORDS
router.get('/equipment', eqaEmployees, stoEquipment, eqaDept, (req, res) => {
  db.query('SELECT tblemployee.strFirstName, tblemployee.strLastName, tblownership.strOwnerDept, tblownership.txtActualEquipment, tblownership.txtPropertyNumber, tblownership.txtSerialNumber FROM tblownership  INNER JOIN tblemployee ON tblownership.intOwnedBy=tblemployee.intZFEmpID WHERE tblownership.intPresence=1 AND tblemployee.intPresence=1;', function(err, results, fields){
      if (err) throw (err)
      else {
          res.render('transactions/views/equipment', { equipments: results,
                                                       employ: req.employ,
                                                       sequi: req.equipy,
                                                       depty: req.depty });
      }
  });
});

// CREATE INVENTORY RECORDS
router.post('/equipment/create', (req, res) => {   
db.query(`INSERT INTO cosdd.tblownership (strOwnerDept, txtPropertyNumber, txtSerialNumber, intOwnedBy, dtmMRDate, intPriceFlagID, intPresence) VALUES (?,?,?,?,?,?,1);`, [req.body.equDept, req.body.equProp, req.body.equSer, req.body.equName, req.body.equDat, req.body.equDesc], (err, results, fields) => {
  db.query(`UPDATE tblownership a INNER JOIN tblstorage b ON a.intPriceFlagID=b.intStorageID SET txtActualEquipment = txtStorageEquip`, (err, results, fields) => {
    if (err)
        console.log(err);
    else {
        res.redirect('/equipment');
      }
    });
  });
});

// UPDATE INVENTORY RECORDS
router.post('/equipment/update', (req, res) => {
db.query(`UPDATE cosdd.tblownership SET strOwnerName=?, strOwnerDept=?, txtActualEquipment=?, txtPropertyNumber=?, txtSerialNumber=? WHERE intOwnershipID=?`, [req.body.equName, req.body.equDept, req.body.equDesc, req.body.equProp, req.body.equSer, req.body.id], (err, results, fields) => {
  if (err)
    console.log(err);
  else {
    res.redirect('/equipment');
  }
});
});

// SOFT DELETE INVENTORY RECORDS
router.post('/equipment/delete', (req, res) => {
db.query(`UPDATE cosdd.tblownership SET intPresence=0 WHERE intOwnershipID=?`, [req.body.id], (err, results, fields) => {
  if (err)
    console.log(err);
  else {
    res.redirect('/equipment');
  }
});
});


//******************************************************* */
//               NETWORK ASSIGNMENT CRUD
//******************************************************* */

// READ NETWORK ASSIGN
router.get('/network', eqaEmployees, uniDevEquipment, accAll, (req, res) => {
    db.query('SELECT * FROM cosdd.tblnetwork WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('transactions/views/network', {  networks: results,   
                                                        employ: req.employ,
                                                        devvy: req.devvy,  
                                                        accy: req.accy });
        }
    });
});

// CREATE NETWORK ASSIGN
router.post('/network/create', (req, res) => {   
  db.query(`INSERT INTO cosdd.tblnetwork (strOwnerName, strDeviceName, strDeviceID, strNetworkAddress, intPresence) VALUES (?, ?, ?, ?, 1)`, [req.body.netName, req.body.netDevName, req.body.netDev, req.body.netAdd, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/network');
    }
  });
});

// UPDATE NETWORK ASSIGN
router.post('/network/update', (req, res) => {
  db.query(`UPDATE cosdd.tblnetwork SET strOwnerName=?, strDeviceID=?, strDeviceName=?, strNetworkAddress=? WHERE intNetworkID=?`, [req.body.netName, req.body.netDev, req.body.netDevName, req.body.netAdd, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/network');
    }
  });
});

//DELETE NETWORK ASSIGN
router.post('/network/delete', (req, res) => {
  db.query(`UPDATE cosdd.tblnetwork SET intPresence=0 WHERE intNetworkID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/network');
    }
  });
});

//******************************************************* */
//                    INDIVIDUAL SLIP
//******************************************************* */

// READ INDIVIDUAL SLIP
router.get('/slip', (req, res) => {
    db.query('SELECT * FROM cosdd.tblemployee WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('reports/views/slip', {  emplist: results });
        }
    });
});

// SLIP PAGE PER INDIVIDUAL
router.get('/slip/:maya', (req, res) => {
  db.query('SELECT tblemployee.strFirstName, tblemployee.strLastName, tblownership.strOwnerDept, tblownership.txtActualEquipment, tblownership.txtPropertyNumber, tblownership.txtSerialNumber, DATE_FORMAT(tblownership.dtmMRDate, "%M %e, %Y") AS MRDate, fltPrice FROM tblownership INNER JOIN tblemployee ON tblownership.intOwnedBy=tblemployee.intZFEmpID INNER JOIN tblstorage ON tblownership.intPriceFlagID=tblstorage.intStorageID WHERE tblownership.intPresence=1 AND intOwnedBy=?;', [req.params.maya], function(err, results, fields){
    if (err) throw (err)
    else {
      console.log(results);
      res.render('reports/views/slip-report', { person: results,  
                                                maya: req.params.maya });
    }
  });

});

//******************************************************* */
//                     FINAL REPORT
//******************************************************* */
// READ INDIVIDUAL SLIP
router.get('/invreport', (req, res) => {
    db.query('SELECT *, DATE_FORMAT(dtmMRDate, "%M %e, %Y") AS MRDate FROM tblownership A INNER JOIN tblemployee B ON A.intOwnedBy = B.intZFEmpID INNER JOIN tblstorage C ON A.intPriceFlagID = C.intStorageID;', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('reports/views/invreport', {  reports: results });
        }
    });
});

//******************************************************* */
//                     ACTIVE ACCOUNTS
//******************************************************* */
// READ INDIVIDUAL SLIP
router.get('/active', (req, res) => {
  db.query('SELECT *, DATE_FORMAT(dtmMRDate, "%M %e, %Y") AS MRDate FROM tblownership A INNER JOIN tblemployee B ON A.intOwnedBy = B.intZFEmpID INNER JOIN tblstorage C ON A.intPriceFlagID = C.intStorageID;', function(err, results, fields){
      if (err) throw (err)
      else {
          res.render('reports/views/invreport', {  reports: results });
      }
  });
});

//******************************************************* */
//                FUNCTIONS are NOT FUN
//******************************************************* */

function queryBrand(req, res, next){
  db.query(`SELECT * FROM cosdd.tblbrand`, function(err, results, fields){
        if (err) throw (err)
        else {
          req.brandQuery = results;
        }
    });
  return next();
}

function queryPersonnel(req, res, next){
  db.query(`SELECT * FROM cosdd.tbltechnician`, function(err, results, fields){
        if (err) throw (err)
        else {
          req.personQuery = results;
        }
    });
  return next();
}

function queryStatus(req, res, next){
  db.query(`SELECT * FROM cosdd.tblstatus`, function(err, results, fields){
        if (err) throw (err)
        else {
          req.statusQuery = results;
        }
    });
  return next();
}

function queryDepartment(req, res, next){
  db.query(`SELECT * FROM cosdd.tbldept`, function(err, results, fields){
        if (err) throw (err)
        else {
          req.deptQuery = results;
        }
    });
  return next();
}

function queryAccounts(req, res, next){
  db.query(`SELECT * FROM cosdd.tblaccounts`, function(err, results, fields){
        if (err) throw (err)
        else {
          req.accQuery = results;
        }
    });
  return next();
}

function queryEmployee(req, res, next){
  db.query(`SELECT * FROM cosdd.tblemployee`, function(err, results, fields){
        if (err) throw (err)
        else {
          req.empQuery = results;
        }
    });
  return next();
}

function queryModel(req, res, next){
  db.query(`SELECT * FROM cosdd.tblmodel`, function(err, results, fields){
        if (err) throw (err)
        else {
          req.modelQuery = results;
        }
    });
  return next();
}

function queryPrice(req, res, next){
  db.query(`SELECT * FROM cosdd.tblprice`, function(err, results, fields){
        if (err) throw (err)
        else {
          req.priceQuery = results;
        }
    });
  return next();
}

function queryUnit(req, res, next){
  db.query(`SELECT * FROM cosdd.tblunittype`, function(err, results, fields){
        if (err) throw (err)
        else {
          req.uttpQuery = results;
        }
    });
  return next();
}

function priBrandQuery(req, res, next){
  db.query('SELECT strUnitBrand FROM tblbrand WHERE intPresence=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.brandy = results;
    return next();
  });  
}

function priModelQuery(req, res, next){
  db.query('SELECT strModelName FROM tblmodel WHERE intPresence=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.modely = results;
    return next();
  });  
}

function priUnitTypeQuery(req, res, next){
  db.query('SELECT strUnitTypeDesc FROM tblunittype WHERE intPresence=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.unity = results;
    return next();
  });  
}

function stoEquipment(req, res, next){
  db.query('SELECT * FROM tblstorage WHERE intPresence=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.equipy = results;
    return next();
  });  
}

function accAll(req, res, next){
  db.query('SELECT * FROM tblaccounts WHERE intPresence=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.accy = results;
    return next();
  });  
}
function uniDevEquipment(req, res, next){
  db.query('SELECT strUnitTypeDesc FROM tblunittype WHERE intPresence=1 AND intCompBool=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.devvy = results;
    return next();
  });  
}
function eqaEmployees(req, res, next){
  db.query('SELECT * FROM tblemployee WHERE intPresence=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.employ = results;
    return next();
  });  
}
function eqaEmployees2(req, res, next){
  db.query('SELECT * FROM tblemployee WHERE intPresence=1 AND intZFEmpID=?', [req.body.maya], function(err, results, fields){
    if(err) throw(err)
    else
      req.employ2 = results;
    return next();
  });  
}
function eqaDept(req, res, next){
  db.query('SELECT * FROM tbldept WHERE intPresence=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.depty = results;
    return next();
  });  
}
//******************************************************* */
//                     MAINTENANCE
//******************************************************* */

function dept(req, res){
    res.render('maintenance/views/department');
}
function dash(req, res){
    res.render('home/views/dashboard');
}
function diag(req, res){
    res.render('maintenance/views/diagnosis');
}
function stat(req, res){
    res.render('maintenance/views/status');
}
function tech(req, res){
    res.render('maintenance/views/technician');
}
function unittype(req, res){
    res.render('maintenance/views/unittype');
}
function bran(req, res){
    res.render('maintenance/views/brand');
}
function mod(req, res){
    res.render('maintenance/views/model');
}
function pri(req, res){
    res.render('maintenance/views/price', stoEquipment);
}
function emp(req, res){
    res.render('maintenance/views/employee');
}
function acc(req, res){
    res.render('maintenance/views/accounts');
}
function cont(req, res){
    res.render('home/views/contact');
}
function sto(req, res){
    res.render('maintenance/views/storage', priBrandQuery, priModelQuery, priUnitTypeQuery);
}
function sliRep(req, res){
    res.render('reports/views/slip-report');
}

function queryInv(req, res, next){
  db.query('SELECT txtInvEquipment, strInvPropNo, strInvSerialNo, DATE_FORMAT(dtmDateReceived, "%M %e, %Y") AS neuteredDate FROM tblinventory WHERE intPresence=1;'), function(err, results){
    if(err) throw(err);
    console.log(results);
    req.queryInv = results;
    return next();
  }
}


router.get('/dashboard', dash);
router.get('/department', dept);
router.get('/diagnosis', diag);
router.get('/status', stat);
router.get('/technician', tech);
router.get('/unittype', unittype);
router.get('/brand', bran, queryBrand);
router.get('/model', mod);
router.get('/price', pri);
router.get('/employee', emp);
router.get('/accounts', acc);
router.get('/contact', cont);
router.get('/storage', sto);
router.get('/slip/:maya', sliRep);

function inv(req, res){
    res.render('transactions/views/inventory');
}
function renderInv(req, res){
    res.render('transactions/views/inventory');
}
function rep(req, res){
    res.render('transactions/views/reports');
}

function equ(req, res){
    res.render('transactions/views/equipment');
}
function netw(req, res){
    res.render('transactions/views/network');
}


function invrepo(req, res){
    res.render('reports/views/invreport');
}
function actacc(req, res){
    res.render('reports/views/active');
}
function sli(req, res){
    res.render('reports/views/slip');
}

router.get('/inventory', inv);
router.get('/reports', rep);
router.get('/slip', sli);
router.get('/equipment', equ, eqaEmployees);
router.get('/network', netw);
router.get('/invreport', invrepo);
router.get('/active', actacc);

function login(req, res){
  res.render('authorization/views/login');
}

function notFound(req, res){
  res.render('authorization/views/404');
}


router.get('/login?incorrect', function(req, res) {
  res.redirect('/');
});

//-ROUTERS
router.get('/', login);
router.get('/error', notFound);

router.get('*', function(req, res){
  res.redirect('/error');
})

exports.index = router;