const phone = <a href='tel:07450 856481'>Phone: 07450 856481</a>;
const email = (
    <a href='mailto: fabrizio@catinella.co.uk'>
        Email: fabrizio@catinella.co.uk
    </a>
);
const linkedin = (
    <a href='https://linkedin.com/in/fabrizio-catinella/'>
        Linkedin: linkedin.com/in/fabrizio-catinella/
    </a>
);
const github = (
    <a href='https://github.com/fabie37'>Github: github.com/fabie37</a>
);

const contacts = [phone, email, linkedin, github]
    .reduce((p, n) => p + '\n' + n, '')
    .replace(/^\n(?<=.*)/gm, '');

export { phone, email, linkedin, github, contacts };
