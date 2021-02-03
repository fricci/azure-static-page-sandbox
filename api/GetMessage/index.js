module.exports = async function (context, req) {
    const id = req.params.id;
    
    const result = {
        id,
        name: 'John Smith'
    };

    context.res = {
        body: result
    };
}