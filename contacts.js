const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// Create Folder Data
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath);
}

// Create File Contacts.json
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
	fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const saveContact = (nama, email, noHP) => {

	const contact = {nama, email, noHP};
		const buff = fs.readFileSync('data/contacts.json', 'utf-8');
		const contacts = JSON.parse(buff);

		// Cek Duplicate Name
		const dupl = contacts.find((contact) => contact.nama === nama);
		if (dupl) {
			console.log(chalk.red.inverse.bold('Kontak Sudah Terdaftar, Gunakan Nama Lain!'));
			return false;
		}
		// Cek Email
		if (email) {
			if (!validator.isEmail(email)) {
				console.log(chalk.red.inverse.bold('Email Tidak Valid!'));
				return false;
			}
		}
		// Cek noHP
		if (!validator.isMobilePhone(noHP, 'id-ID')) {
				console.log(chalk.red.inverse.bold('No Handphone tidak Valid'));
				return false;
			}

		contacts.push(contact);

		fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

		const pesan = chalk`{bgGreen.yellow.bold Data Berhasil Ditambahkan}`;
		console.log(pesan);
};

module.exports = {
	saveContact
};