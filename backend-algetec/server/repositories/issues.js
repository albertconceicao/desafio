const query = require('../db/query');

class Issue {
    getIssues() {
        const sql = 'SELECT * FROM issues';
        
        return query(sql);
    }
    getIssueById(returnId) {
        const sql = 'SELECT * FROM issues WHERE ID = ?';

        return query(sql, returnId);
    }
    addIssue(returnForm) {
        const sql = 'INSERT INTO issues SET ?'

        return query(sql, returnForm);
    }
    updateIssueByCreator(id, returnForm, createdByUser) {
        if(createdByUser) {
            const sql = 'UPDATE issues SET ? WHERE id = ?;'
        }
        return query(sql, [returnForm, id]);
    }
    updateIssue(id, returnForm) {
        const sql = 'UPDATE issues SET ? WHERE id = ?';

        return query(sql, [returnForm, id]);
    }
    deleteIssue(id, accessLevel) {
        if(accessLevel === 'scrum-master') {
            const sql = 'DELETE FROM issues WHERE id = ?';
            return query(sql, id);
        }
    }
}