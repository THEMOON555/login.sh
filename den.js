/*Halo Saya Deni Hosting Nama Asli Saya M.Deni Iskandar 
Asal Dari Bumiayu Kabupaten Brebes Jawa Tengah
Script Hasil Copy Paste Masih Belajar, Jadi Script Jangan Di Jual Ya
Terimakasih....

[ CREDIT ]
Nama : M.Deni Iskandar / Deni Hosting
Pembuat Sc : Deni Hosting
Base : Deni Hosting
Tiktok Saya : KE BLOK KONTOL
Grup Wa : BACOTT GOSH KEPO
_____________
Tolong Jangan Di Hapus Hargai Pembuat Sc
Tambahin Nama Lu Aja Gak Papa Salam Dari DeniHosting*/

const { default: makeWASocket, DisconnectReason, useSingleFileAuthState} = require('@adiwajshing/baileys')
const { state, saveState } = useSingleFileAuthState('./deni.json')
const fs = require('fs')
const pino = require('pino')
const connectKeWA = () => {
const deni = makeWASocket({logger:pino({level:'silent'}),printQRInTerminal: true,auth: state,browser: ["RndyBotz", "Dekstop", "3.0"]})

require('./deni.js')
nocache('./deni.js', module => console.log(`"${module}" Updated!`))

deni.ev.on('messages.upsert', async deni => {
if (!deni.messages) return
msg = deni.messages[0]
nomorOwner = ['628818754737']
nomorDeveloper = ['628818754737']
deni.sendPresenceUpdate('unavailable')
require("./deni")(deni, deni, msg)})

deni.ev.on('connection.update', (update) => {
const {connection,lastDisconnect} = update
if (connection === 'close') {lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? connectKeWA() : ''}
else if(connection === 'open') 
{
    // console.log(update)
}

deni.ev.on('creds.update', saveState)
// console.log(update)
})}	









function nocache(module, cb = () => { }) {console.log(`Module ${module} detected!`) 
fs.watchFile(require.resolve(module), async () => {await uncache(require.resolve(module))
cb(module)})}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()} catch (e) {reject(e)}})}

connectKeWA()