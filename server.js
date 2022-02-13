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

app.listen(4000, () => {
	console.log('running...')
})