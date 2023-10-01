const handler = async (m, {conn}) => {
  if (!db.data.chats[m.chat].audios) return;
  if (!db.data.settings[conn.user.jid].audio_bot && !m.isGroup) return
  //const s = seconds: '1934.4'
  const vn = './media/triste.mp3';
  conn.sendPresenceUpdate('recording', m.chat);
  conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', filename: 'triste.mp3'}, {quoted: m});
};
handler.costomPrefix = /sad/
handler.command = /^(triste|me siento mal|tristeza|que triste|me siento triste|toy tite)/
export default handler;

/*
let handler = async (m, { conn }) => {
if
 (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = ',/media/triste.mp3'
conn.sendPresenceUpdate('recording', m.chat)
conn.sendMenssage(m.chat, { audio: { url: vn }, contextImfo: { "externalAdReply": {
