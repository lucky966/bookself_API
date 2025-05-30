const { getAllBooksHandler, addBookHandler, getBookByIdHandler, updateBookByIdHandler, deleteBookByIdHandler } = require("./handler")

const routes =[
    {
        method:"GET",
        path:"/books",
        handler:getAllBooksHandler
    },
    {
        method:"POST",
        path:"/books",
        handler:addBookHandler
    },
    {
        method:"GET",
        path:"/books/{id}",
        handler:getBookByIdHandler
    },
    {
        method:"PUT",
        path:"/books/{id}",
        handler:updateBookByIdHandler
    },
    {
        method:"DELETE",
        path:"/books/{id}",
        handler:deleteBookByIdHandler
    }

]


module.exports = routes