module.exports = {
  name: 'ping',
  description: 'Pong!',
  cooldown: 5,
  execute(message, args) {
    message.channel.send('Pong');
  }
}
