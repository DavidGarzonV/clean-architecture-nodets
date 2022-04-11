export default {
	environment: { doc: 'Environment', default: 'local', format: String },
  port: { doc: 'Port', default: 8080, format: Number },
  uploadpath: { doc: 'Upload file path', default: 'uploads', format: String },
	database: {
		host: { doc: 'Host of database server', default: '', format: String },
		port: { doc: 'Port of database', default: '', format: Number },
		name: { doc: 'Name of database', default: '', format: String },
		username: { doc: 'Username to access database', default: '', format: String },
		password: { doc: 'Password to access database', default: '', format: String },
		dialect: { doc: 'Dialect of database server', default: '', format: String },
		schema: { doc: 'Schema name to database', default: '', format: String },
	},
	redis: {
		host: { doc: 'Host of redis server', default: '', format: String },
		port: { doc: 'Port of redis server', default: '', format: Number }
	},
	external: {
		usersApi: { doc: 'URL of users API', default: '', format: String }
	}
};
