function getPerformance(req, res) {
    res.status(200).send("get Performance api working")
}

function createPerformance(req, res) {
    res.status(200).send("post Performance api working")
}

function updatePerformance(req, res) {
    res.status(200).send("put Performance api working")
}

function getAllPerformance(req, res) {
    res.status(200).send("put Performance api working")
}

function assignPerformanceReview(req, res) {
    res.status(200).send("put Performance api working")
}


module.exports = { 
    getPerformance,
    createPerformance, 
    updatePerformance, 
    getAllPerformance, 
    assignPerformanceReview 
};