function Noticia(connection){
    this._connection = connection;
}
Noticia.prototype.getNoticias = function(callback) {this._connection.query('SELECT * FROM noticias', callback);};
Noticia.prototype.getCat = function(callback) {this._connection.query('SELECT * FROM categorias', callback);};
Noticia.prototype.salvarC = function (noticia ,callback) { this._connection.query('insert into categorias set ?', noticia, callback);};
Noticia.prototype.getNoticia = function (callback, id) {this._connection.query(`SELECT * FROM noticias WHERE id_noticia = ${id}`, callback);};
Noticia.prototype.salvarN = function (noticia ,callback) { this._connection.query('insert into noticias set ?', noticia, callback);};
Noticia.prototype.Deletar = function (callback, id_noticia) {this._connection.query(`DELETE FROM noticias WHERE id_noticia = ${id_noticia} `, callback);};
Noticia.prototype.Update = function (callback) {this._connection.query('update cursos set nomeDaCuluna = "o que vai atuc" where id_noticia = 1',callback)};
module.exports = function(){
 return Noticia;
}
