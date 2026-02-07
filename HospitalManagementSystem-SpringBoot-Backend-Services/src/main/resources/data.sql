INSERT INTO doctor (username, password)
SELECT * FROM (SELECT 'mukund', 'Mukund@3208') AS tmp
WHERE NOT EXISTS (
    SELECT username FROM doctor WHERE username = 'mukund'
) LIMIT 1;
