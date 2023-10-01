// import fs/promises for async reading/writing
import fs from 'node:fs/promises'

// Node can parse any file on any OS...
const DB_PATH = new URL('../db.json', import.meta.url).pathname

// asyn function that returns the contents of a file 
export const getDB = async () => {
    // read a file in 'utf-8' encoding
    const db = await fs.readFile(DB_PATH, 'utf-8');
    // return the contets of that file as JSON
    return JSON.parse(db);
}
// writes an json object into db.json
export const saveDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    return db
}
// takes an object and adds it to the notes array in db.json
export const insertDB = async (data) => {
    const db = await getDB()
    db.notes.push(data)
    await saveDB(db)
    return data
}
