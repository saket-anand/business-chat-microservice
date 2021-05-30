require('dotenv').config();

function displayName(fname: string, lname?: string): string {
    console.log(fname + lname);
    return `${fname} ${lname}`;
}
displayName('Saket Anand ', process.env.DB_HOST);
