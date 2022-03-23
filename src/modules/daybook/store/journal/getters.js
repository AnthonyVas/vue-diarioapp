// export const myGetter =  (state) => {
//  return state
// }


//***********************************************************/
//*********LAS GETTERS ES UNA FORMA RAPIDA DE LEER  EL STATE ***********/
//*********Y TRAER LA INFORMACION  COMO LA NECESITAMOS*******************************/
//***********************************************************************/
export const getEntriesByTerm = (state) => (term = '') => {
    if( term.length === 0) return state.entries

    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase()))
}

export const getEntryById =  (state) => (id = '1')  =>{
    return state.entries.find(entry => entry.id == id)
}