const express = require('express');
const app = express();
const { createPool } = require('mysql');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

// Database connection pool
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Aomine2945",
    database: "myprojects"
});

app.use(express.json());
app.use(express.static('public'));

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const formData = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        city: req.body.city,
        zip: req.body.zip,
        rental_date: req.body.date,
        car: req.body.car
    };

    const insertQuery = 'INSERT INTO autovermietung SET ?';

    pool.query(insertQuery, formData, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({
                message: 'Error saving to database',
                error: err.message
            });
        }
        
        res.json({
            message: 'Booking successful',
            result: result
        });
    });
});

app.post('/submit-login', (req, res) => {
    const loginData = {
        email: req.body.email,
        password: req.body.password
    };
    const readQuery = 'SELECT * FROM mitarbeiter WHERE email = ?';
    pool.query(readQuery, [loginData.email, loginData.password], (error, results) => {
        if (error) {
            console.error('Database error:', error);
            return res.status(500).json({
                message: 'Database error',
                error: error.message
            });
        }
        if (results.length == 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
		const user = results[0];
		bcrypt.compare(loginData.password, user.password, (err, result) =>{
			if (err) {
				// Handle error
				console.error('Error comparing passwords:', err);
				return;
			};
			if (result) {
				// Password is correct
				return res.json({
					message: 'Login successful',
					user: {
						email: user.email, // Send back useful info
						// Exclude password in the response
					}
				});
			} else {
				return res.status(401).json({ message: 'Invalid email or password' });
			}
		});
    });
});

app.post('/get-database', (req, res) => {
    const query = 'SELECT * FROM autovermietung';
  
    pool.query(query, (error, results) => {
      if (error) {
        console.error('Database error:', error);
        return res.status(500).json({
          message: 'Database error',
          error: error.message
        });
      }
  
      if (results.length === 0) {
        return res.json({ message: 'No data found in the database' });
      }
  
      return res.json(results); // Send data as JSON response
    });
});

app.post('/submit-worker', (req, res) => {
	try {
		const saltRounds = 10;
		const password = req.body.password;
        bcrypt.genSalt(saltRounds, function(err, salt) {
			bcrypt.hash(password, salt, function(err, hash) {
				const formData = {
					email: req.body.email,
					password: hash
				};

				const query = 'SELECT * FROM mitarbeiter WHERE email = ?';
				pool.query(query, [formData.email], (error, result) => {
					if (error) {
						console.error('Database error:', error);
						return res.status(500).json({
							message: 'Database read error',
							error: error.message
						});
					};

					// Check if the worker already exists
					if (result.length == 0) {
						// Insert new worker
						const insertquery = 'INSERT INTO mitarbeiter SET ?';
						pool.query(insertquery, formData, (error, result) => {
							if (error) {
								console.error('Database insert error:', error);
								return res.status(500).json({
									message: 'Database insert error',
									error: error.message
								});
							}
							return res.status(201).json(result); // Indicate successful creation
						});
					} else {
						return res.status(409).json({ message: 'Worker already exists' }); // Conflict status
					}
				});
				if (err) {
					return res.status(500).json({
						message: 'Error hashing password',
						error: err.message
					});
				};
			});
			if (err) {
				return res.status(500).json({
					message: 'Error salting password',
					error: err.message
				});
			};
		});
	} catch (err) {
		return res.status(500).json({
			message: 'Error processing password',
			error: err.message
		});
	}	
});

// var transporter = nodemailer.createTransport({
// 	service: 'gmail',
// 	auth: {
// 		user: 'beckerartur3007@gmail.com',
// 		pass: 'Aomine.7141.2945'
// 	}
// });

// var mailOptions = {
// 	from: 'beckerartur3007@gmail.com',
// 	to: 'beckerartur3007@gmail.com',
// 	subject: 'daten aus dem code',
// 	text: 'console log formdata',
// 	html: 'formdata' + 'hash'
// };

// transporter.sendMail(mailOptions, function(error, info) {
// 	if (error) {
// 	console.log(error);
// 	} else {
// 	console.log('Email sent: ' + info.response);
// 	}
// });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});