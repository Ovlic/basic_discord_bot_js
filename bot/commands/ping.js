module.exports = {
    name: 'ping',
    description: "A Ping command!",
    execute(message, args, client) {

        const calcEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Calculating Ping...')
        .setDescription("Please Wait.")

        message.channel.send(calcEmbed).then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
    
            const resultEmbed = new Discord.MessageEmbed()
            .setColor('#00ffff')
            .setTitle('Ping')
            .setDescription("Pong!")
            .addFields(
                {name: `Bot Latency`, value: `${client.ws.ping} ms`},
                {name: 'API Latency', value: `${ping} ms`},
            )
            resultMessage.edit(resultEmbed)
        })
    },
  }