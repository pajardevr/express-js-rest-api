# Simple Rest API with Express JS
Simple Rest API with Express JS and MySQL

Another dependencies included :
- https://github.com/expressjs/body-parser
- https://github.com/motdotla/dotenv

Installation :
1. Run ``` git clone https://github.com/pajardevr/express-js-rest-api.git ```
2. Run ``` npm install ```
3. Create local database and run query below
```
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL DEFAULT '0',
  `last_name` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
)
```
4. Update .env config files and fill in that environtment database
5. Run command below (your position should in the clone directory)
```
node serve.js
```
Don't forget to create the row of the ```users``` database.
Happy coding ༼ つ ◕_◕ ༽つ
