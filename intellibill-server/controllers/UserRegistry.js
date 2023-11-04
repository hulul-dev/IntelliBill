const db = require('../dbConfig');


exports.UserSave = async (request, response) => {
    try {
      const json = request.body;
      db.query(
        'INSERT INTO Users (UserCode, UserKey, UserName, FirstName, LastName, UserEmail, UserMobileNo, UserAddress, IsActive, Remarks, UserGroupID, CreatedUserID, UpdatedUserID, CreatedDate, UpdatedDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())',
        [
          json.UserCode,
          json.UserKey,
          json.UserName,
          json.FirstName,
          json.LastName,
          json.UserEmail,
          json.UserMobileNo,
          json.UserAddress,
          json.IsActive,
          json.Remarks,
          json.UserGroupID,
          json.CreatedUserID,
          json.UpdatedUserID,
        ],
        (err, results) => {
          if (err) {
            console.error('Error adding user:', err);
            return response.status(500).json({ error: 'Failed to add user' });
          } else {
            const insertedUserId = results.insertId;
            return response.status(201).json({ message: 'User added successfully', UserIDPK: insertedUserId });
          }
        }
      );
    } catch (error) {
      return response.status(500).json({ error: error });
    }
  };
  

  exports.SingleUser = async (request, response) => {
    try {
      const username = request.query.user; 
      db.query(
        'SELECT * FROM Users WHERE UserName = ?',
        [username],
        (err, results) => {
          if (err) {
            console.error('Error fetching user:', err);
            return response.status(500).json({ error: 'Failed to fetch user' });
          }
  
          if (results.length === 0) {
            return response.status(404).json({ error: 'User not found' });
          }
  
          const user = results[0];
          return response.status(200).json(user);
        }
      );
    } catch (error) {
      return response.status(500).json({ error: error });
    }
  };
  