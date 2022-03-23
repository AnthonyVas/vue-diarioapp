// export const myAction =  (state) => {

// }

//***********************************************************/
//*********LAS MUTATIONS ES LO QUE IMPACTA EL STATE***********/
//***********************************************************************/

export const setEntries =  (state, entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry =  (state,entry) => {
    const idx = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries[idx] = entry
}

export const addEntry =  (state,entry) => {
    state.entries= [entry, ...state.entries]
}

export const deleteEntry =  (state,id) => {

    state.entries = state.entries.filter(entry => entry.id !== id)
    // console.log(state.entries.splice(state.entries.map(entry => entry.id ).indexOf(id)),0)
}