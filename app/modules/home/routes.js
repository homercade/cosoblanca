//******************************************************* */
//              THIS IS THE MAIN ROUTE BOI
//******************************************************* */
var express = require('express');
var router = express.Router();
var db = require('../../lib/database')();
var session = require('express-session');
var nodemailer = require('nodemailer');
var contact_user = process.env.NODEMAILER_USER;
var contact_pass = process.env.NODEMAILER_PASS;
var contact_service = process.env.NODEMAILER_SERVICE;

router.use(session({
  secret: 'AU832hrui4yryw8413JH3',
  resave: true,
  saveUninitialized: true
}));

// router.get('/login', function(req, res) {
//   if(!req.query.username || !req.query.password){
//     res.redirect('/');
//   }
//   else if(req.query.username === 'admin' && req.query.password === 'pass'){
//     req.session.user = 'root';
//     req.session.admin = true;
//     res.redirect('/dashboard');
//   }
//   else
//     res.redirect('/');
// });


router.post('/login', (req, res) => {
  var field_user = req.body.username;
  var field_pass = req.body.password;
  db.query('SELECT strUsername, strPassword FROM cosdd.tbluser WHERE strUsername=? AND strPassword=?', [field_user, field_pass], function(err, results, fields){
    if (err) {
      throw (err)
    }
    else{
        if(results.length > 0){
          if(results[0].strPassword == field_pass){
            req.session.user = 'root';
            req.session.admin = true;
            res.redirect('/dashboard');
          }
          else{
            res.redirect('/');
          }
        }
        else{
          res.redirect('/');
        }
    }
  });
});

var auth = function(req, res, next){
  if(req.session && req.session.user === 'root' && req.session.admin)
    return next();
  else
    res.redirect('/');
}

router.get('/logout', function(req, res){
  req.session.destroy();
  res.redirect('/');
});

router.get('/dashboard', auth, countEmp, countOwn, countDept, (req, res) => {
  db.query('SELECT * FROM cosdd.tblstorage WHERE intPresence=1', function(err, results, fields){
    if (err) throw (err)
    else {
        res.render('home/views/dashboard', { storeg: results,
                                             employee: req.countEm,
                                             owners: req.countOwner,
                                             depts: req.countDep });
    }
  });
})

// var transporter = nodemailer.createTransport({
//   service: contact_service,
//   auth: {
//     user: contact_user,
//     pass: contact_pass
//   }
// });

// var mailOptions = {
//   from: 'nha_cosdd@gov.ph',
//   to: contact_user,
//   subject: 'NHA Contact Page',
//   text: 'Henlo'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if(error)
//     console.log(error);
//   else
//     console.log('Email sent: ' + info.response);
// });


//******************************************************* */
//                      DEPARTMENT
//******************************************************* */
// CREATE DEPARTMENTS
router.post('/department', auth, (req, res) => {   
  db.query(`INSERT INTO cosdd.tbldept (strDeptCode, txtDeptName, intPresence) VALUES (?, ?, 1)`, [req.body.deptCode, req.body.deptName], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/department');
    }
  });
});

// READ DEPARTMENTS
router.get('/department', auth, (req, res) => {
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
router.post('/department/delete', auth, (req, res) => {
  db.query(`UPDATE cosdd.tbldept SET intPresence=0 WHERE intDeptID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/department');
    }
  });
});

//******************************************************* */
//                          OFFICE SERIAL
//******************************************************* */

// CREATE OFFICE SERIAL
router.post('/office', auth, (req, res) => {   
  db.query(`INSERT INTO cosdd.tbloffice (strMSSerial, intVacancy, intPresence) VALUES (?, 5, 1)`, [req.body.offSerial], (err, results, fields) => {
    if (err) throw(err);
    else {
        res.redirect('/office');
    }
  });
});

// READ OFFICE SERIAL
router.get('/office', auth,  (req, res) => {
    db.query('SELECT * FROM cosdd.tbloffice WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/office', { office: results });
        }
    });
});

// UPDATE OFFICE SERIAL
router.post('/office/update', auth, (req, res) => {
  db.query(`UPDATE cosdd.tbloffice SET strMSSerial=?, intVacancy=? WHERE intMSID=?`, [req.body.offSerial, req.body.offVaca, req.body.id], (err, results, fields) => {
    if (err) throw(err);
    else {
      res.redirect('/office');
    }
  });
});

//DELETE OFFICE SERIAL
router.post('/office/delete', auth, (req, res) => {
  db.query(`UPDATE cosdd.tbloffice SET intPresence=0 WHERE intMSID=?`, [req.body.id], (err, results, fields) => {
    if (err) throw(err);
    else {
      res.redirect('/office');
    }
  });
});

//******************************************************* */
//                       UNIT TYPE
//******************************************************* */

// CREATE UNIT TYPE
router.post('/unittype', auth, (req, res) => {   
  db.query(`INSERT INTO cosdd.tblunittype (strUnitTypeDesc, intPresence) VALUES (?, 1)`, [req.body.unitType], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/unittype');
    }
  });
});

// READ UNIT TYPE
router.get('/unittype', auth, (req, res) => {
    db.query('SELECT * FROM cosdd.tblunittype WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/unittype', { types: results });
        }
    });
});

// UPDATE UNIT TYPE
router.post('/unittype/update',auth,  (req, res) => {
  db.query(`UPDATE cosdd.tblunittype SET strUnitTypeDesc=? WHERE intUnitTypeID=?`, [req.body.unitType, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/unittype');
    }
  });
});

//DELETE UNIT TYPE
router.post('/unittype/delete', auth, (req, res) => {
  db.query(`UPDATE cosdd.tblunittype SET intPresence=0 WHERE intUnitTypeID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/unittype');
    }
  });
});

//******************************************************* */
//                      EMPLOYEE
//******************************************************* */

// CREATE EMPLOYEE
router.post('/employee', auth, (req, res) => {   
  db.query(`INSERT INTO cosdd.tblemployee (strFirstName, strLastName, strEmpDept, intPresence) VALUES (?, ?, ?, 1)`, [req.body.empFName, req.body.empLName, req.body.empDept], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/employee');
    }
  });
});

// READ EMPLOYEE
router.get('/employee', auth,  eqaDept, (req, res) => {
    db.query('SELECT * FROM cosdd.tblemployee WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/employee', { employees: results,
                                                       deppy: req.depty });
        }
    });
});

// UPDATE EMPLOYEE
router.post('/employee/update', auth, (req, res) => {
  db.query(`UPDATE cosdd.tblemployee SET strFirstName=?, strLastName=?, strEmpDept=? WHERE intZFEmpID=?`, [req.body.empFName, req.body.empLName, req.body.empDept, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/employee');
    }
  });
});

//DELETE EMPLOYEE 
router.post('/employee/delete', auth, (req, res) => {
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
router.post('/storage', auth, (req, res) => {   
  db.query(`INSERT INTO cosdd.tblstorage (txtStorageEquip, strBrand, strMod, strUnit, intStorageQty, fltPrice, intPresence) VALUES (?, ?, ?, ?, ?, ?, 1)`, [req.body.stoBrand + ' ' + req.body.stoModel + ' - ' + req.body.stoUnit, req.body.stoBrand, req.body.stoModel, req.body.stoUnit, req.body.strgQty, req.body.stoVal], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/storage');
    }
  });
});

// READ STORAGE
router.get('/storage', auth, priBrandQuery, priModelQuery, priUnitTypeQuery, (req, res) => {
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
router.post('/storage/update', auth, (req, res) => {
  db.query(`UPDATE cosdd.tblstorage SET txtStorageEquip=?, intStorageQty=?, fltPrice=? WHERE intStorageID=?`, [req.body.stoBrand + ' ' + req.body.stoModel + ' - ' + req.body.stoUnit, req.body.strgQty, req.body.stoVal, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/storage');
    }
  });
});

//DELETE STORAGE
router.post('/storage/delete', auth, (req, res) => {
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
router.post('/accounts', auth, (req, res) => {   
  db.query(`INSERT INTO cosdd.tblaccounts (strDevice, strEmailAccount, strEmailPass, strIDAccount, strIDAccPassword, intPresence, intStoClaim) VALUES (?, ?, ?, ?, ?, 1, ?)`, [req.body.accDev, req.body.accEma, req.body.accEmaPass, req.body.accIDAcc, req.body.accIDAccPass, req.body.devOwn], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/accounts');
    }
  });
});

// READ ACCOUNTS
router.get('/accounts', auth, eqaEmployees, (req, res) => {
    db.query('SELECT tblaccounts.*, tblemployee.strFirstName, tblemployee.strLastName FROM tblaccounts INNER JOIN tblemployee ON tblaccounts.intStoClaim=tblemployee.intZFEmpID WHERE tblaccounts.intPresence=1 AND tblemployee.intPresence=1;', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/accounts', { accounts: results,
                                                       owner: req.employ });
        }
    });
});

// UPDATE ACCOUNTS
router.post('/accounts/update', auth, (req, res) => {
  db.query(`UPDATE cosdd.tblaccounts SET txtAccountType=?, strAccEmail=?, strAccPassword=? WHERE intAccountID=?`, [req.body.accTyp, req.body.accEma, req.body.accPass, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/accounts');
    }
  });
});

//DELETE ACCOUNTS 
router.post('/accounts/delete', auth, (req, res) => {
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
router.get('/equipment', auth, eqaEmployees, stoEquipment, eqaDept, (req, res) => {
  db.query('SELECT tblownership.intOwnershipID, tblemployee.strFirstName, tblemployee.strLastName, tblownership.strOwnerDept, tblownership.txtActualEquipment, tblownership.txtPropertyNumber, tblownership.txtPARNumber, tblownership.txtSerialNumber FROM tblownership  INNER JOIN tblemployee ON tblownership.intOwnedBy=tblemployee.intZFEmpID WHERE tblownership.intPresence=1 AND tblemployee.intPresence=1;', function(err, results, fields){
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
router.post('/equipment/create', auth, (req, res) => {   
db.query(`INSERT INTO cosdd.tblownership (strOwnerDept, txtPropertyNumber, txtPARNumber, txtSerialNumber, intOwnedBy, dtmMRDate, intPriceFlagID, intPresence) VALUES (?,?,?,?,?,?,?,1);`, [req.body.equDept, req.body.equProp, req.body.equPAR, req.body.equSer, req.body.equName, req.body.equDat, req.body.equDesc], (err, results, fields) => {
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
router.post('/equipment/update', auth, (req, res) => {
db.query(`UPDATE cosdd.tblownership SET strOwnerName=?, strOwnerDept=?, txtActualEquipment=?, txtPropertyNumber=?, txtSerialNumber=? WHERE intOwnershipID=?`, [req.body.equName, req.body.equDept, req.body.equDesc, req.body.equProp, req.body.equSer, req.body.id], (err, results, fields) => {
  if (err)
    console.log(err);
  else {
    res.redirect('/equipment');
  }
});
});

// SOFT DELETE INVENTORY RECORDS
router.post('/equipment/delete', auth, (req, res) => {
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
router.get('/network', auth, eqaEmployees, uniDevEquipment, accAll, isThatADevice, (req, res) => {
    db.query('SELECT * FROM cosdd.tblnetwork WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('transactions/views/network', {  networks: results,   
                                                        employ: req.employ,
                                                        devvy: req.devvy,  
                                                        accy: req.accy,
                                                        device: req.issaDevice });
        }
    });
});

// CREATE NETWORK ASSIGN
router.post('/network/create', auth, (req, res) => {   
  db.query(`INSERT INTO cosdd.tblnetwork (strDeviceName, strNetworkAddress, strWifiAddress, intAccConf, intPresence) VALUES (?, ?, ?, ?, 1)`, [req.body.netDevName, req.body.netAdd, req.body.wifiAdd, req.body.netName], (err, results, fields) => {
    db.query(`UPDATE tblnetwork a INNER JOIN tblemployee b ON a.intAccConf=b.intZFEmpID SET a.strOwnerName=CONCAT(b.strFirstName,' ',b.strLastName)`, (err, results, fields) => {
      if (err)
        console.log(err);
      else {
          res.redirect('/network');
      }
    });
  });
});

// UPDATE NETWORK ASSIGN
router.post('/network/update',auth,  (req, res) => {
  db.query(`UPDATE cosdd.tblnetwork SET strOwnerName=?, strDeviceName=?, strNetworkAddress=?, strWifiAddress=? WHERE intNetworkID=?`, [req.body.netName, req.body.netDevName, req.body.netAdd, req.body.wifiAdd, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/network');
    }
  });
});

//DELETE NETWORK ASSIGN
router.post('/network/delete', auth, (req, res) => {
  db.query(`UPDATE cosdd.tblnetwork SET intPresence=0 WHERE intNetworkID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/network');
    }
  });
});


//******************************************************* */
//               OFFICE ASSIGNMENT
//******************************************************* */

// READ  OFFICE ASSIGNMENT
router.get('/officeassign', auth, eqaEmployees, dispOffice, offEx, (req, res) => {
    db.query('SELECT * FROM cosdd.tblofficeassign WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('transactions/views/officeassign', {  offser: results,
                                                             employ: req.employ,
                                                             offy: req.offy, 
                                                             exi: req.issaExist});
        }
    });
});

// CREATE  OFFICE ASSIGNMENT
router.post('/officeassign/create', auth, (req, res) => {   
  db.query(`INSERT INTO cosdd.tblofficeassign (strPCName, intOASerial, intOAFKEmpID, intPresence) VALUES (?, ?, ?, 1)`, [req.body.ofaName, req.body.ofaSerial, req.body.ofaOwner], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      db.query(`UPDATE tblofficeassign a INNER JOIN tblemployee b ON a.intOAFKEmpID=b.intZFEmpID INNER JOIN tbloffice c ON a.intOASerial=c.intMSID SET a.strOAEmpName=CONCAT(b.strFirstName,' ',b.strLastName), a.strOASerial=c.strMSSerial WHERE a.intPresence=1 AND b.intPresence=1 AND c.intPresence=1`, (err, results, fields) => {
      if(err) throw (err)
      else{
        db.query(`UPDATE cosdd.tbloffice, cosdd.tblofficeassign SET tbloffice.intVacancy=(tbloffice.intVacancy-1) WHERE tbloffice.intMSID=?`, [req.body.ofaSerial], (err, results, fields) => {
          if(err) throw(err)
          else{
            res.redirect('/officeassign');
          }
        });
      }
    });
    }
  });
});

// UPDATE OFFICE ASSIGNMENT 
router.post('/officeassign/update', auth,  (req, res) => {
  console.log(req.body.id);
  console.log(req.body.ofaName);
  console.log(req.body.ofaSerial);
  console.log(req.body.ofaOwner);
  db.query(`UPDATE cosdd.tblofficeassign SET strPCName=?, intOASerial=?, intOAFKEmpID=? WHERE intOAID=?`, [req.body.ofaName, req.body.ofaSerial, req.body.ofaOwner, req.body.id], (err, results, fields) => {
    db.query(`UPDATE tblofficeassign a INNER JOIN tblemployee b ON a.intOAFKEmpID=b.intZFEmpID INNER JOIN tbloffice c ON a.intOASerial=c.intMSID SET a.strOAEmpName=CONCAT(b.strFirstName,' ',b.strLastName), a.strOASerial=c.strMSSerial WHERE intOAID=?`, [req.body.id], (err, results, fields) => {
      if(err) throw (err)
      else{
        res.redirect('/officeassign');
      }
    });
  });
});

//DELETE  OFFICE ASSIGNMENT
router.post('/officeassign/delete', auth, (req, res) => {
  db.query(`UPDATE cosdd.tblofficeassign SET intPresence=0 WHERE intOAID=?`, [req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
      res.redirect('/officeassign');
    }
  });
});
//******************************************************* */
//                    INDIVIDUAL SLIP
//******************************************************* */

// READ INDIVIDUAL SLIP
router.get('/slip', auth, (req, res) => {
    db.query('SELECT * FROM cosdd.tblemployee WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('reports/views/slip', {  emplist: results });
        }
    });
});

// SLIP PAGE PER INDIVIDUAL
router.get('/slip/:maya', auth, (req, res) => {
  db.query('SELECT tblemployee.strFirstName, tblemployee.strLastName, tblownership.strOwnerDept, tblownership.txtActualEquipment, tblownership.txtPropertyNumber, tblownership.txtPARNumber, tblownership.txtSerialNumber, DATE_FORMAT(tblownership.dtmMRDate, "%M %e, %Y") AS MRDate, fltPrice FROM tblownership INNER JOIN tblemployee ON tblownership.intOwnedBy=tblemployee.intZFEmpID INNER JOIN tblstorage ON tblownership.intPriceFlagID=tblstorage.intStorageID WHERE tblownership.intPresence=1 AND intOwnedBy=?;', [req.params.maya], function(err, results, fields){
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
router.get('/invreport', auth, (req, res) => {
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
router.get('/active', auth, (req, res) => {
  db.query('SELECT tblnetwork.strOwnerName, tblnetwork.strDeviceName, tblnetwork.strNetworkAddress, tblnetwork.strWifiAddress, tblaccounts.strEmailAccount, tblaccounts.strIDAccount, tblemployee.strEmpDept FROM tblnetwork INNER JOIN tblaccounts ON tblnetwork.intAccConf=tblaccounts.intStoClaim INNER JOIN tblemployee ON tblaccounts.intStoClaim=tblemployee.intZFEmpID WHERE tblnetwork.intPresence=1 AND tblaccounts.intPresence=1 AND tblemployee.intPresence=1;', function(err, results, fields){
      if (err) throw (err)
      else {
          res.render('reports/views/active', {  actres: results });
      }
  });
});


//******************************************************* */
//                 OFFICE DISTRIBUTION
//******************************************************* */ 
// READ INDIVIDUAL SLIP
router.get('/officereport', auth, (req, res) => {
  db.query('SELECT tblemployee.intZFEmpID, tblemployee.strEmpDept, tblofficeassign.strOAEmpName, tbloffice.strMSSerial FROM tblemployee INNER JOIN tblofficeassign ON tblemployee.intZFEmpID=tblofficeassign.intOAFKEmpID INNER JOIN tbloffice ON tblofficeassign.intOASerial=tbloffice.intMSID WHERE tblofficeassign.intPresence=1 AND tblemployee.intPresence=1 AND tbloffice.intPresence=1 GROUP BY intZFEmpID ASC', function(err, results, fields){
      if (err) throw (err)
      else {
          res.render('reports/views/officereport', { offer: results });
      }
  });
});


//******************************************************* */
//                FUNCTIONS are NOT FUN
//******************************************************* */

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
  db.query('SELECT strModelName FROM tblmodel WHERE intPresence=1 AND intCompBool=1', function(err, results, fields){
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

function dispOffice(req, res, next){
  db.query('SELECT * FROM tbloffice WHERE intPresence=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.offy = results;
    return next();
  });  
}

function countEmp(req, res, next){
  db.query('SELECT COUNT(intZFEmpID) AS totalEmployees FROM tblemployee WHERE intPresence=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.countEm = results;
    return next();
  });  
}

function countOwn(req, res, next){
  db.query('SELECT COUNT(intOwnershipID) AS totals FROM tblownership WHERE intPresence=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.countOwner = results;
    return next();
  });  
}

function countDept(req, res, next){
  db.query('SELECT COUNT(intDeptID) AS deptTotal FROM tbldept WHERE intPresence=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.countDep = results;
    return next();
  });  
}

function isThatADevice(req, res, next){
   // db.query('SELECT tblownership.intOwnedBy, tblownership.intPriceFlagID, tblstorage.strBrand, tblstorage.strMod FROM tblownership INNER JOIN tblstorage ON tblownership.intPriceFlagID=tblstorage.intStorageID WHERE tblownership.intPresence=1 AND tblownership.isDevice=1 AND tblownership.intOwnedBy=?', function(err, results, fields){
    db.query('SELECT strBrand, strMod FROM tblstorage WHERE intPresence=1 AND intIsDevice=1;', function(err, results, fields){
    if(err) throw(err)
    else
      req.issaDevice = results;
    return next();
  });  
}

function offEx(req, res, next){
   // db.query('SELECT tblownership.intOwnedBy, tblownership.intPriceFlagID, tblstorage.strBrand, tblstorage.strMod FROM tblownership INNER JOIN tblstorage ON tblownership.intPriceFlagID=tblstorage.intStorageID WHERE tblownership.intPresence=1 AND tblownership.isDevice=1 AND tblownership.intOwnedBy=?', function(err, results, fields){
    db.query('SELECT * FROM tblofficeassign WHERE intPresence=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.issaExist = results;
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
function unittype(req, res){
    res.render('maintenance/views/unittype');
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
function offi(req, res){
    res.render('maintenance/views/office');
}
function queryInv(req, res, next){
  db.query('SELECT txtInvEquipment, strInvPropNo, strInvSerialNo, DATE_FORMAT(dtmDateReceived, "%M %e, %Y") AS neuteredDate FROM tblinventory WHERE intPresence=1;'), function(err, results){
    if(err) throw(err);
    console.log(results);
    req.queryInv = results;
    return next();
  }
}

router.get('/dashboard', auth, dash);
router.get('/department', auth, dept);
router.get('/unittype',auth,  unittype);
router.get('/office', auth, offi);
router.get('/employee', auth, emp);
router.get('/accounts', auth, acc);
router.get('/contact', auth, cont);
router.get('/storage', auth, sto);
router.get('/slip/:maya', auth, sliRep);

function rep(req, res){
    res.render('transactions/views/reports');
}
function equ(req, res){
    res.render('transactions/views/equipment');
}
function netw(req, res){
    res.render('transactions/views/network');
}
function ofa(req, res){
    res.render('transactions/views/officeassign');
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
function offre(req, res){
    res.render('reports/views/officereport')
}

router.get('/reports', auth, rep);
router.get('/slip', auth, sli);
router.get('/equipment', auth, equ, eqaEmployees);
router.get('/network', auth, netw);
router.get('/officeassign', auth, ofa);
router.get('/invreport', auth, invrepo);
router.get('/active', auth, actacc);
router.get('/officereport', auth, offre);

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