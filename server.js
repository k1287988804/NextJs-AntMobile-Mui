const express = require('express')
const app = express()

let txt = 'see me'

app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE, PUT, OPTIONS");
	next();
})

app.get('/api/content', (req, res, next) => {
	res.send({
		code: 0,
		success: true,
		msg: '成功',
		data: [111,222,333,444,555]
	})
})

app.get('/api/message', (req, res, next) => {
	res.send({
		code: 0,
		success: true,
		msg: '成功',
		data: [{
			name: 'xiaowang',
			age: 18
		},{
			name: 'xiaoli',
			age: 17
		},{
			name: 'xiaozhang',
			age: 23
		},{
			name: 'xiaoyu',
			age: 25
		}]
	})
})

app.get('/api/id', (req, res, next) => {
	res.send({
		code: 0,
		success: true,
		msg: '成功',
		data: {
			id: '4'
		}
	})
})

app.get('/api/contract/:id', (req, res, next) => {
	res.send({
		code: 0,
		success: true,
		msg: '成功',
		data: txt
	})
})

app.get('/api/ids', (req, res, next) => {
	res.send({
		code: 0,
		success: true,
		msg: '成功',
		data: [1, 2, 3, 4, 5, 6, 7, 8]
	})
})


app.put('/api/contract/put', (req, res, next) => {
	txt = 'see you'
	setInterval(() => {
		txt = 'see me'
	}, 2000)
	res.send({
		code: 0,
		success: true,
		msg: '成功'
	})
})


app.listen(4000, () => {
	console.log('running...')
})