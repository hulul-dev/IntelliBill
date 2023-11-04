const db = require('../dbConfig')

exports.UserLogin = async (req, res) => {
    try {
        const json = req.body.data;

        db.query(
            'CALL UserLogin_API(?)',
            [json.UserName],
            (err, results) => {
                if (err) {
                    console.error('Error:', err);
                    return res.status(500).json({ error: 'Failed to call the stored procedure' });
                } else {
                    if (results[0].length > 0) {
                        // Process the result as needed
                        console.log('resss', results)
                        // return res.status(200).json({ Output: results[0]});
                        return res.status(200).json({Output: {
                            status: {code: '200', message:results[0][0].message},
                            data:results[0][0]
                        }});
                    } else {
                        return res.status(404).json({ error: 'No data found' });
                    }
                }
            }
        );
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'An error occurred' });
    }
}
