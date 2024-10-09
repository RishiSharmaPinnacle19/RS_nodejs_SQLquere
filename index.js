// SQL Project 

//Here we connect sql in node js and try to perform  CRUD operations and sql query 
const mysql = require('mysql');
// mysql modules used to  connect sql in node js

var con = mysql.createConnection({
//  create connection object

    host: "localhost",  
    user: "root",
    password: "ptspl123",
    database:"mydb"


});

// con.connect(function(err) {
    if(err ) throw err;
    console.log('MySql is connected successfully');


//create database 
con.query('CREATE DATABASE mydb', function(err, result) {
//   create database query 
    if(err)throw err;
    
    console.log('Database is created');
});
    
    // Create table   

    con.query('create table school (name  varchar(255), age int, class varchar(3), marks int, address varchar(255))', function(err, result) {
        //  create table query  create table tablename  (column1 data type, column2 data type, column3 data type)
        if(err)throw err;
        console.log('created Table School');
    });

    // //Alter table 
    
    con.query('ATER TABLE  ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY', function(err) {
        //   alter table query alter table  tablename add column columnname data type
        if (err) throw err;
        console.log('Added column id to table School');
    });
    

     con.query('ALTER TABLE school MODIFY class VARCHAR(10)', function(err) {
        if (err) throw err;
        console.log('Added column id to table School');
    


    

    // Insert  data into table 
    

    let values = [
        ['Rishi', '23', 'MCA', 'nagpur'],
        ['Ritika', '23', 'Btech', 'nagpur'],
        ['Raj', '23', 'MBA', 'nagpur'],
        ['Arya', '20', 'Btech', 'nagpur'],
        ['Nikita', '22', 'MCA', 'nagpur'],
        ['Ali', '23', 'MBA', 'nagpur'],
        ['Mohit', '23', 'Btech', 'nagpur'],
        ['Riya', '23', 'MCA', 'Mumbai'],
        ['Purva', '23', 'Btech', 'Delhi']
    ];
    
    con.query('INSERT INTO school (name, age, class, address) VALUES ?', [values], function(err) {
        //    insert into query insert into table name (column1, column2, column3) values ([zxc,qwe],[xyz, abc]);
        if (err) throw err;
        console.log('Data inserted into table school');
    });
    
    
    // Select statement here we start our query section...

    con.query('select * from school', function(err, result){
        //   select query select * from table name
        if(err) throw err;
        console.log(result);
    });
});

// different query
con.query('select name,  address from school', function(err, result){
    //    select query select column1, column2 from table name
    if(err) throw err;

            console.log(result);
        });
    


con.query('select id from school', function(err, result){
    
            if(err) throw err;
            console.log(result);
        });
    


//where query
con.query("SELECT * FROM school WHERE address = 'mumbai'", function (err, result) {
 // where quere y select * from table name where column1 = 'value' where is a condition 
 

    if (err) throw err;
    console.log(result);
  });


//order
con.query("SELECT * FROM school ORDER BY name", function (err, result) {
    //  order by query select * from table name order by column1 
    if (err) throw err;
    console.log(result);
  });



// Delete  query
con.query("DELETE FROM school WHERE address = 'Delhi'", function (err, result) {
    // delete query delete from table name where column1 = 'value'
    if (err) throw err;
    console.log('delete successfully',result);
  });


//Update
con.query("UPDATE school SET name = 'ali' WHERE address = 'Delhi'", function(err, result){
    // update query update table name set column1 = 'value' where column2 = 'value
    if(err) throw err;
    console.log('Update successfully,', result);
});

// limit
con.query("SELECT * FROM school LIMIT 2", function (err, result) {
    //  limit query select * from table name limit number
    // limit is show only limited data example if you insert 2 its show only 2 two row
    if (err) throw err;
    console.log(result);
  });

        
 con.query("SELECT * FROM school LIMIT 2 OFFSET 2", function (err, result)
// here we se limit is 2 but start from 2nd row
 {
   if (err) throw err;
   console.log(result);
 });





 

