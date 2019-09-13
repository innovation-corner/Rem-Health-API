module.exports = {
    async selectState(code){
        switch(code){
            case '*384*3086#' :
                return {code:'IM', state: 'Imo'}
        }
    }
}