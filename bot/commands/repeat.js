module.exports = {
    name: 'repeat',
    description: "Repeats what the user says",
    execute(message, args, client) {

        return message.channel.send(args.join(" "))

    },
  }