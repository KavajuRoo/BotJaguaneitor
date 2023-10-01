const handler = (m) => m;
handler.all = async funtion(m, {conn}) {
  const chat = global.db.data.chats[m.chat];

  if (/^alarma$/i.test(m.text) && !chat.isBanned) {
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = ',/media/alarma.mp3';
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessange(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }

return !0
};
export default handler;
