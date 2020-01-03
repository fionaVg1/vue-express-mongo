var mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/selfLearn';
mongoose.connect(mongoURL);
mongoose.connection.on('connected',function(){
    console.log('mongoose connection open to '+mongoURL);
});
//连接失败终端显示消息
mongoose.connection.on('error',function () {
    console.log('mongoose error ')
});
//连接断开终端显示消息
mongoose.connection.on('disconnected',function () {
    console.log('mongoose disconnected')
});
//创建一个Schema  每一个schema会一一对应mongo中的collection
var Schema=mongoose.Schema;
var movieSchema = new Schema({
    movieId: { type: String },
    name: { type: String },
    score: { type: String },
    href: { type: String },
    imageSrc: { type: String }
});
var douBanMovie = mongoose.model('douBanMovie', movieSchema);
module.exports = douBanMovie;