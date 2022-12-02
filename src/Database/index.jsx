//estrutura do BD
import * as SQLite from "expo-sqlite";

//instacia do BD
const db = SQLite.openDatabase("db.db");

export default db;
