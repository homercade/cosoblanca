//******************************************************* */
//              THIS IS THE MAIN ROUTE BOI
//******************************************************* */
var express = require('express');
var router = express.Router();
var db = require('../../lib/database')();
// const passport = require('passport');
// const localStrategy = require('passport-local').Strategy;

//******************************************************* */
//                      PASSPORT STUFF
//******************************************************* */

// app.use(passport.initialize());
// app.use(passport.session()); 

// app.get('/success', (req, res) => res.redirect('/dashboard'));
// app.get('/error', (req, res) => res.send("error logging in"));

// passport.serializeUser(function(user, cb) {
//   cb(null, user.id);
// });

// passport.deserializeUser(function(id, cb) {
//   User.findById(id, function(err, user) {
//     cb(err, user);
//   });
// });

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//       UserDetails.findOne({
//         username: username
//       }, function(err, user) {
//         if (err) {
//           return done(err);
//         }

//         if (!user) {
//           return done(null, false);
//         }

//         if (user.password != password) {
//           return done(null, false);
//         }
//         return done(null, user);
//       });
//   }
// ));

// app.post('/',
//   passport.authenticate('local', { failureRedirect: '/error' }),
//   function(req, res) {
//     res.redirect('/dashboard');
//   });

// router.get('/', (req, res) => {

//     if (typeof process.env.ENABLE_DATABASE !== 'undefined' && process.env.ENABLE_DATABASE === 'false') {
//         return render([]);
//     }

//     db.query('SELECT * FROM users', function (err, results, fields) {
//         if (err) return res.send(err);
//         render(results);
//     });

//     function render(users) {
//         res.render('home/views/landing', { users: users });
//     }
// });



// var session;

// router.post('/submit', function(req, res, next){
//     req.check('username', 'Invalid username').isLength({min: 4}).equals(req.body.)
// });



// function getAuth(req, res, next){
//   if(req.body.username === 'admin' && req.body.password === 'admin'){
//     req.session.uniqueID = req.body.username;
//     req.session.uniquePass = req.body.password;
//     verifyAuth(req, res);
//     return(next);
//   }
//   if(req.session.){
//     verifyAuth(req, res);
//     console.log('hehehe');
//   }
//   verifyAuth(req, res);
// };

// function verifyAuth(req, res){
//   session = req.session;
//   if(session.uniqueID && session.uniquePass)
//   {
//     console.log('here');
//     console.log(session.uniqueID);
//     res.redirect('/login');
//   } 
//   else{
//     console.log('he comes');
//     res.redirect('/dashboard');
//   }
// };

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
    db.query('SELECT * FROM cosdd.tbldept WHERE intPresence=1', function(err, results, fields){
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
router.get('/price', stoEquipment, (req, res) => {
    db.query('SELECT * FROM cosdd.tblprice WHERE intPresence=1', function(err, results, fields){
        if (err) throw (err)
        else {
            res.render('maintenance/views/price', { pricey: results,
                                                    equipy: req.equipy });
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
  db.query(`INSERT INTO cosdd.tblstorage (txtStorageEquip, strBrand, strMod, strUnit, intStorageQty, intPresence) VALUES (?, ?, ?, ?, ?, 1)`, [req.body.stoBrand + ' ' + req.body.stoModel + ' - ' + req.body.stoUnit, req.body.stoBrand, req.body.stoModel, req.body.stoUnit, req.body.strgQty], (err, results, fields) => {
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
router.post('/storage/update', priBrandQuery, priModelQuery, priUnitTypeQuery, (req, res) => {
  db.query(`UPDATE cosdd.tblstorage SET txtStorageEquip=?, intStorageQty=? WHERE intStorageID=?`, [req.body.stoBrand + ' ' + req.body.stoModel + ' - ' + req.body.stoUnit, req.body.strgQty, req.body.id], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.render('maintenance/views/storage', { storeg: results, 
                                                  brandy: req.brandy,
                                                  modely: req.modely,
                                                  unity:  req.unity });
    }
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
  db.query(`INSERT INTO cosdd.tblaccounts (strDevice, strDeviceAccount, strEmailAccount, strIDAccount, strPassword, strNetworkAddress, intPresence) VALUES (?, ?, ?, ?, ?, ?, 1)`, [req.body.accDev, req.body.accDevAcc, req.body.accEma, req.body.accIDAcc, req.body.accPass, req.body.accNetAdd], (err, results, fields) => {
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
router.get('/equipment', eqaEmployees, stoEquipment, (req, res) => {
  db.query('SELECT * FROM cosdd.tblownership WHERE intPresence=1;', function(err, results, fields){
      if (err) throw (err)
      else {
          res.render('transactions/views/equipment', { equipments: results,
                                                       employ: req.employ,
                                                       sequi: req.equipy });
      }
  });
});

// CREATE INVENTORY RECORDS
router.post('/equipment/create', queryStatus, queryPersonnel, queryDepartment,  (req, res) => {   
db.query(`INSERT INTO cosdd.tblequipment (strPropertyNo, strSerialNo, strUnit, strDept, strPersonnel, strStatus, dtmDateReceived, intPresence) VALUES (?, ?, ?, ?, ?, ?, NOW(), 1)`, [req.body.invProp, req.body.invSerial, req.body.invUnit, req.body.invDept, req.body.invPers, req.body.invStat], (err, results, fields) => {
  if (err)
    console.log(err);
  else {
          res.redirect('/equipment');
  }
});
});

// UPDATE INVENTORY RECORDS
router.post('/equipment/update', queryStatus, queryPersonnel, queryDepartment, (req, res) => {
db.query(`UPDATE cosdd.tblequipment SET strPropertyNo=?, strSerialNo=?, strUnit=?, strDept=?, strPersonnel=?, strStatus=? WHERE intInvID=?`, [req.body.invProp, req.body.invSerial, req.body.invUnit, req.body.invDept, req.body.invPers, req.body.invStat, req.body.id], (err, results, fields) => {
  if (err)
    console.log(err);
  else {
    res.redirect('/equipment', {  het2: req.statusQuery,
                                  tec2: req.personQuery,
                                  depts2: req.deptQuery });
  }
});
});

// SOFT DELETE INVENTORY RECORDS
router.post('/equipment/delete', (req, res) => {
db.query(`UPDATE cosdd.tblequipment SET intPresence=0 WHERE intInvID=?`, [req.body.id], (err, results, fields) => {
  if (err)
    console.log(err);
  else {
    console.log(req.body.id);
    res.redirect('/equipment');
  }
});
});


//******************************************************* */
//               NETWORK ASSIGNMENT CRUD
//******************************************************* */

// CREATE ACCOUNTS
router.post('/accounts', (req, res) => {   
  db.query(`INSERT INTO cosdd.tblaccounts (txtAccountType, strAccEmail, strAccPassword, intPresence) VALUES (?, ?, ?, 1)`, [req.body.accTyp, req.body.accEma, req.body.accPass], (err, results, fields) => {
    if (err)
      console.log(err);
    else {
        res.redirect('/accounts');
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

function eqaEmployees(req, res, next){
  db.query('SELECT * FROM tblemployee WHERE intPresence=1', function(err, results, fields){
    if(err) throw(err)
    else
      req.employ = results;
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

//-ROUTERS
router.get('/', login);
router.get('/error', notFound);

router.get('*', function(req, res){
  res.redirect('/error');
})

exports.index = router;