class Tables {
    init(pool) {
        this.pool = pool;

        this.createUsers();
        this.createIssues();
    }

    createUsers() {
        const sql = 'CREATE TABLE IF NOT EXISTS Users (id INTEGER AUTOINCREMENT NOT NULL, user varchar(15) NOT NULL, password varchar(15) NOT NULLL, accessLevel varchar(12) NOT NULL, PRIMARY KEY (id), UNIQUE(user)';

        this.pool.query(sql, (error) => {
            if(error) {
                console.error(error);
            } else {
                console.log('Table Users created successfully');
            }
        })
    }

    createIssues() {
        const sql = 'CREATE TABLE IF NOT EXISTS Issues (issue varchar(30) NOT NULL,id INTEGER AUTOINCREMENT NOT NULL, version varchar(3) NOT NULL, registerAuthor varchar(30) NOT NULL, issueDescription varchar(100) NOT NULL, priority varchar(30) NOT NULL, registerDate DATE NOT NULL, status varchar(10) NOT NULL, PRIMARY KEY (id)';

        this.pool.query(sql, (error) => {
            if(error) {
                console.error(error);
            } else {
                console.log('Table Issues created successfully');
            }
        })
    }
}