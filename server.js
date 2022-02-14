const express = require('express')
const app = express()

app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin', '*');
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

app.listen(4000, () => {
	console.log('running...')
})