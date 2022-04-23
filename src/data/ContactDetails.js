const phone = "Phone: 07450 856481"
const email = "Email: fabrizio@catinella.co.uk"
const linkedin = "Linkedin: linkedin.com/in/fabrizio-catinella/"
const github = "Github: https://github.com/fabie37"

const contacts = [phone,email,linkedin,github].reduce((p,n) => p + '\n' + n, '').replace(/^\n(?<=.*)/gm, '')

export { phone, email, linkedin, github, contacts}