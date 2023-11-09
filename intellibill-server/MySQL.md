# BASIC CREATE PROCEDUCE For login

DELIMITER //
CREATE PROCEDURE `UserLogin_API`(
    IN `input_username` VARCHAR(255)
)
BEGIN
    DECLARE user_count INT;

    -- Check if the provided username and password match a record in the database
    SELECT COUNT(*) INTO user_count
    FROM Users
    WHERE UserName = input_username;

    -- Use an IF statement to determine the validation status and return user information
    IF user_count > 0 THEN
        -- Valid login
        SELECT
            'Valid' AS `ValidationStatus`,
            UserName,
            UserEmail
        FROM Users
        WHERE UserName = input_username;
    ELSE
        -- Invalid login
        SELECT
            'Invalid' AS `ValidationStatus`,
            NULL AS username,
            NULL AS useremail,
            NULL AS userID;
    END IF;
END //
DELIMITER ;

===========================================================================