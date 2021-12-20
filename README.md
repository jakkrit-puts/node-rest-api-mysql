

### Install  NPM Package
```
$ npm install
```

### Usage
1. Copy .env.exam  -> ส้รางไฟล์ใหม่ชื่อ .env
2. Setup .env แก้ไขชื่อดาต้าเบสและรหัสผ่านให้ถูกต้อง, ใส่ jwt_key ให้เรียบร้อย
3. สร้างตารางโดยใช้คำสั่งด้านล่าง

```
$ npx sequelize db:migrate   --> คำสั่งส้รางตาราง  
```

### Run Project

#### for development
```
$ npm run dev
```
```
$ npm start
```
### ตัวอย่าง Url API
```
http://localhost:3002
http://localhost:3002/user/register
http://localhost:3002/user/login
http://localhost:3002/user/profile
```
