const issueRepository = require('../repositories/issues');

class Issue {

    getIssues() {
        return issueRepository.getIssues();
    }

    getIssuesById(returns) {
        return issueRepository.getIssuesById(returns);
    }

   addIssue(id, formReturn) {
    return issueRepository.addIssue(id, formReturn)
   }
   udpateIssueByCreator(id, returnForm, createdByUser) {
       return issueRepository.udpateIssueByCreator(id,returnForm, createdByUser);
   }
   updateIssue(id, returnForm) {
       return issueRepository.updateIssue(id, returnForm);
   }
   deleteIssue(id, accessLevel) {
       return issueRepository.deleteIssue(id, accessLevel);
   }
}