const yargs = require('yargs');
const contacts = require('./contacts');
// const {saveContact} = require('./contacts');

yargs.command({

	command: 'add',
	describe: 'Menambahkan Kontak Baru',
	builder: {
		nama: {
			describe: 'Nama Lengkap',
			demandOption: true,
			type: 'string'
		},
		email: {
			describe: 'Email Aktif',
			demandOption: false,
			type: 'string'
		},
		noHP: {
			describe: 'No Handphone Aktif',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		contacts.saveContact(argv.nama, argv.email, argv.noHP);
	},
		
});

yargs.parse();
